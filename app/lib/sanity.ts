import { createClient, type SanityClient } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";

let client: SanityClient | undefined;
let builder: ReturnType<typeof createImageUrlBuilder> | undefined;

/**
 * Lazily creates the Sanity client on first use rather than at module load.
 * Every blog route module (and the homepage) imports this file, and in dev
 * those modules are evaluated eagerly for the whole app's SSR module graph —
 * throwing here at import time (e.g. before a Sanity project is set up)
 * would take down every route, not just the blog ones.
 */
function getSanityClient(): SanityClient {
  if (!projectId) {
    throw new Error(
      "VITE_SANITY_PROJECT_ID is not set. Copy .env.example to .env and fill in your Sanity project id.",
    );
  }
  if (!client) {
    client = createClient({
      projectId,
      dataset,
      apiVersion: "2026-01-01",
      // Build-time loaders read the live API so every deploy bakes in the
      // latest published content. Browser requests (search, "load more",
      // posts newer than the last deploy) come from every visitor, so they go
      // through Sanity's CDN, which is faster and has far higher rate limits.
      useCdn: !import.meta.env.SSR,
      perspective: "published",
    });
  }
  return client;
}

export function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  options: { signal?: AbortSignal } = {},
): Promise<T> {
  return getSanityClient().fetch<T>(query, params, options);
}

/** Builds an optimized image URL from a Sanity image reference. */
export function urlFor(source: SanityImageSource) {
  if (!builder) {
    builder = createImageUrlBuilder(getSanityClient());
  }
  return builder.image(source);
}
