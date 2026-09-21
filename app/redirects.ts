/**
 * Paths that belonged to the previous cre8r.ai site. They are still indexed by
 * search engines and linked from social bios, so instead of dropping visitors
 * on a 404 each one forwards to its closest equivalent on this site.
 *
 * Keys must be lowercase and have no trailing slash — `resolveLegacyPath`
 * normalises the incoming pathname before looking it up.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  "/about": "/about-us",
  "/blogs": "/blog",
  "/cre8r-ai-blogs": "/blog",
  "/contact": "/contact-us",
  "/privacy-policy": "/privacy_policy",
  "/terms-conditions-brand": "/brands_tc",
  "/terms-conditions-brands": "/brands_tc",
  "/terms-conditions-creator": "/creators_tc",
  "/terms-conditions-creators": "/creators_tc",
  "/terms-conditions-influencer": "/creators_tc",
  "/terms-conditions-influencers": "/creators_tc",
};

/** Old Wix blog post URLs — every one of them now lands on the blog index. */
const LEGACY_POST_PREFIX = "/post/";

export function resolveLegacyPath(pathname: string): string {
  const path = pathname.replace(/\/+$/, "").toLowerCase() || "/";
  if (path in LEGACY_REDIRECTS) return LEGACY_REDIRECTS[path];
  if (path === "/post" || path.startsWith(LEGACY_POST_PREFIX)) return "/blog";
  return "/";
}
