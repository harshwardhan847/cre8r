import type { Config } from "@react-router/dev/config";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV ?? "production", process.cwd());
const SANITY_PROJECT_ID = env.VITE_SANITY_PROJECT_ID;
const SANITY_DATASET = env.VITE_SANITY_DATASET || "production";
const SANITY_API_VERSION = "2025-01-01";

// Set by React Router's own build pipeline only during a real `react-router
// build` — unset in `react-router dev`. Used to tell a genuine production
// build (where a missing/misconfigured Sanity project should fail loudly)
// apart from local dev (where it should just warn instead of blocking work
// on the rest of the site over an integration that isn't set up yet).
const isRealBuild = process.env.IS_RR_BUILD_REQUEST === "yes";

/**
 * Fetches published post slugs directly over HTTP rather than importing
 * app/lib/blog.ts. This file runs in plain Node, outside the Vite module
 * graph that the rest of the app is compiled through, so `import.meta.env`
 * (which app/lib/sanity.ts relies on) isn't available here.
 *
 * Never throws — routes/blog.$slug.tsx exports a `loader`, and React Router
 * refuses to build (in both `dev` and `build`, with `ssr:false`) unless at
 * least one path was returned for every route that exports one. Callers add
 * a placeholder slug whenever this comes back empty, so that requirement is
 * always satisfied regardless of Sanity's state.
 */
async function getPublishedBlogSlugs(): Promise<string[]> {
  if (!SANITY_PROJECT_ID) {
    const message =
      "VITE_SANITY_PROJECT_ID is not set. Set it in .env (locally) or in " +
      "your Vercel project's environment variables — blog posts are " +
      "fetched from Sanity at build time so they can be prerendered.";
    if (isRealBuild) throw new Error(message);
    console.warn(`[react-router.config] ${message}`);
    return [];
  }

  try {
    const query = encodeURIComponent(
      `*[_type == "post" && defined(slug.current)].slug.current`,
    );
    const url = `https://${SANITY_PROJECT_ID}.apicdn.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${query}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Sanity responded with HTTP ${res.status}`);

    const { result } = (await res.json()) as { result: string[] };
    if (result.length === 0) {
      console.warn(
        "[react-router.config] No published blog posts found in Sanity — " +
          "/blog will ship with no posts until one is published.",
      );
    }
    return result;
  } catch (error) {
    const message = `Could not fetch blog post slugs from Sanity: ${(error as Error).message}`;
    if (isRealBuild) {
      throw new Error(
        `${message} Check VITE_SANITY_PROJECT_ID/VITE_SANITY_DATASET and that the Sanity API is reachable from this build.`,
      );
    }
    console.warn(`[react-router.config] ${message} Continuing without prerendered posts.`);
    return [];
  }
}

// routes/blog.$slug.tsx must have at least one prerendered path (see above).
// Its loader/clientLoader treat an unknown slug as a normal "not found" page,
// so prerendering this one is always safe, real post or not.
const PLACEHOLDER_SLUG = "__none__";

export default {
  // No runtime server — the site deploys as static files behind a CDN.
  ssr: false,

  /**
   * Prerender every static route, plus one path per published blog post, to
   * real HTML at build time.
   *
   * Without this the host returns one empty shell for every URL and the page
   * only exists after JavaScript runs. Search crawlers mostly cope with that;
   * answer engines (GPTBot, ClaudeBot, PerplexityBot) largely do not — they
   * read the raw HTML response. Prerendering gives every crawler the real
   * title, description, copy and JSON-LD on first byte.
   *
   * `getStaticPaths()` returns every route without a dynamic segment (what
   * `prerender: true` used to cover on its own). Blog post slugs are dynamic
   * content from Sanity, so they're fetched here and appended explicitly. A
   * Sanity webhook triggers a fresh Vercel deploy whenever a post is
   * published or edited, so this list — and the HTML baked from it — stays
   * current within a minute or two. The `*` catch-all stays dynamic and is
   * served by the SPA fallback document instead.
   */
  async prerender({ getStaticPaths }) {
    const slugs = await getPublishedBlogSlugs();
    const blogSlugs = slugs.length > 0 ? slugs : [PLACEHOLDER_SLUG];
    return [...getStaticPaths(), ...blogSlugs.map((slug) => `/blog/${slug}`)];
  },
} satisfies Config;
