import type { Config } from "@react-router/dev/config";

export default {
  // No runtime server — the site deploys as static files behind a CDN.
  ssr: false,

  /**
   * Prerender every static route to real HTML at build time.
   *
   * Without this the host returns one empty shell for every URL and the page
   * only exists after JavaScript runs. Search crawlers mostly cope with that;
   * answer engines (GPTBot, ClaudeBot, PerplexityBot) largely do not — they
   * read the raw HTML response. Prerendering gives every crawler the real
   * title, description, copy and JSON-LD on first byte.
   *
   * `true` covers all routes without dynamic segments, so new routes are
   * included automatically. The `*` catch-all is dynamic and is served by the
   * SPA fallback document instead.
   */
  prerender: true,
} satisfies Config;
