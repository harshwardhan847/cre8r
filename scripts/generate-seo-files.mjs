/**
 * Builds sitemap.xml and llms.txt from the prerendered output.
 *
 * Both files are derived from build/client rather than hand-maintained, so a
 * new route is listed the moment it is prerendered and a route that stops
 * existing disappears on the next build. A page is included only if it is
 * genuinely indexable: it must not carry a noindex robots tag, and its
 * canonical must point at itself (which drops duplicate URLs such as /creator,
 * whose canonical is /influencer).
 *
 * Run automatically after `react-router build`.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const SITE_URL = "https://www.cre8r.ai";
const CLIENT_DIR = "build/client";

/** Page weighting for the sitemap. Longest matching prefix wins. */
const PRIORITY = [
  ["/", 1.0],
  ["/product", 0.9],
  ["/influencer", 0.9],
  ["/blog", 0.8],
  ["/faq-brands", 0.8],
  ["/faq-influencers", 0.8],
  ["/about-us", 0.7],
  ["/contact-us", 0.7],
  ["/barter-collabs", 0.7],
  ["/demo", 0.7],
  ["/hiring", 0.6],
  ["/brands_tc", 0.3],
  ["/creators_tc", 0.3],
  ["/privacy_policy", 0.3],
];

/** Grouping and ordering for llms.txt. */
const SECTIONS = [
  { title: "Platform", paths: ["/", "/product", "/product/"] },
  { title: "For creators", paths: ["/influencer", "/barter-collabs"] },
  { title: "Answers", paths: ["/faq-brands", "/faq-influencers", "/blog"] },
  { title: "Company", paths: ["/about-us", "/contact-us", "/hiring", "/demo"] },
  { title: "Legal", paths: ["/brands_tc", "/creators_tc", "/privacy_policy"] },
];

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (entry === "index.html") out.push(full);
  }
  return out;
}

function attr(html, re) {
  const m = html.match(re);
  return m ? decodeEntities(m[1]) : "";
}

function decodeEntities(s) {
  return s
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function collectPages() {
  const pages = [];
  for (const file of walk(CLIENT_DIR)) {
    const rel = relative(CLIENT_DIR, file).split(sep).slice(0, -1).join("/");
    const path = rel ? `/${rel}` : "/";
    const html = readFileSync(file, "utf8");

    const robots = attr(html, /<meta name="robots" content="([^"]*)"/i);
    if (/noindex/i.test(robots)) continue;

    const canonical = attr(html, /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i);
    const selfUrl = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
    // Keep only pages that are their own canonical.
    if (canonical && canonical.replace(/\/$/, "") !== selfUrl.replace(/\/$/, ""))
      continue;

    pages.push({
      path,
      url: selfUrl,
      title: attr(html, /<title>([^<]*)<\/title>/i).replace(/ \| Cre8r\.ai$/, ""),
      description: attr(html, /<meta name="description" content="([^"]*)"/i),
    });
  }
  return pages.sort((a, b) => a.path.localeCompare(b.path));
}

function priorityFor(path) {
  let best = 0.5;
  let bestLen = -1;
  for (const [prefix, value] of PRIORITY) {
    if ((path === prefix || path.startsWith(`${prefix}/`)) && prefix.length > bestLen) {
      best = value;
      bestLen = prefix.length;
    }
  }
  // Product sub-pages inherit slightly below the hub.
  if (path.startsWith("/product/")) best = 0.8;
  return best.toFixed(1);
}

function buildSitemap(pages) {
  const urls = pages
    .map(
      (p) =>
        `  <url>\n    <loc>${p.url}</loc>\n    <priority>${priorityFor(p.path)}</priority>\n  </url>`,
    )
    .join("\n");
  // No <lastmod>: the build date is not the content date, and Google discounts
  // a lastmod it can tell is just the deploy timestamp.
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function buildLlmsTxt(pages) {
  const used = new Set();
  const lines = [
    "# Cre8r.ai",
    "",
    "> Cre8r.ai is an end-to-end influencer marketing platform for brands in India.",
    "> Brands discover creators from a network of 4.1M+ vetted Instagram and YouTube",
    "> profiles, run campaigns with briefs and content approvals, and attribute",
    "> revenue to individual creators. Creators join free and receive paid and barter",
    "> collaborations matched to their profile.",
    "",
    "Operated by Grunmech Technologies Private Limited, with offices in Gurgaon and Mumbai.",
    "Brand enquiries: campaign@cre8r.ai · Creator support: collabs@cre8r.ai",
    "",
  ];

  for (const section of SECTIONS) {
    const entries = pages.filter(
      (p) =>
        !used.has(p.path) &&
        // A trailing slash means "this subtree" (e.g. "/product/"); anything
        // else is an exact path. "/" is the homepage, never a prefix.
        section.paths.some((sp) =>
          sp.length > 1 && sp.endsWith("/") ? p.path.startsWith(sp) : p.path === sp,
        ),
    );
    if (!entries.length) continue;
    lines.push(`## ${section.title}`, "");
    for (const p of entries) {
      used.add(p.path);
      lines.push(`- [${p.title}](${p.url}): ${p.description}`);
    }
    lines.push("");
  }

  const rest = pages.filter((p) => !used.has(p.path));
  if (rest.length) {
    lines.push("## Other", "");
    for (const p of rest) lines.push(`- [${p.title}](${p.url}): ${p.description}`);
    lines.push("");
  }

  return lines.join("\n");
}

const pages = collectPages();
if (!pages.length) {
  console.error("generate-seo-files: no indexable pages found in build/client");
  process.exit(1);
}

writeFileSync(join(CLIENT_DIR, "sitemap.xml"), buildSitemap(pages));
writeFileSync(join(CLIENT_DIR, "llms.txt"), buildLlmsTxt(pages));

console.log(`SEO: sitemap.xml + llms.txt written for ${pages.length} indexable pages`);
