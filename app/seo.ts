import { CONSTANTS } from "./constants";

/**
 * Single source of truth for everything crawlers and answer engines read.
 *
 * The apex domain 308s to www, so www is the canonical host — every canonical,
 * Open Graph and JSON-LD URL must be built from it via `absoluteUrl` so the two
 * hosts never compete for the same page.
 */
export const SITE = {
  url: "https://www.cre8r.ai",
  name: "Cre8r.ai",
  legalName: "Grunmech Technologies Private Limited",
  locale: "en_IN",
  founded: "2023",
  description:
    "Cre8r.ai is an end-to-end influencer marketing platform for brands in India — discover vetted creators, run campaigns, approve content, and attribute revenue in one place.",
  ogImage: "/og/cre8r-og.png",
  logo: "/logo.png",
} as const;

export const TITLE_SUFFIX = ` | ${SITE.name}`;

/** Resolves a site-relative path to an absolute, canonical URL. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${SITE.url}${clean}`;
}

type MetaDescriptor = Record<string, unknown>;

export type SeoOptions = {
  /** Page title without the site suffix. Aim for 45-60 characters total. */
  title: string;
  /** 140-160 characters, written as a sentence a person would read. */
  description: string;
  /** Site-relative path, used for og:url and (by default) the canonical. */
  path: string;
  /**
   * Overrides the canonical when this URL duplicates another page's content.
   * Used by /creator, which renders the same component as /influencer.
   */
  canonicalPath?: string;
  /** Site-relative or absolute image. Defaults to the shared OG card. */
  image?: string;
  /** og:type — "article" for blog-style content. */
  type?: "website" | "article";
  /** Keeps the page out of the index (thank-you, redirect and error pages). */
  noindex?: boolean;
  /** One or more JSON-LD graph objects to embed. */
  jsonLd?: object | object[];
  /** Overrides the composed title entirely (used by the homepage). */
  rawTitle?: string;
};

/**
 * Builds the full meta descriptor list for a route: title, description,
 * canonical, Open Graph, Twitter card, robots directives and JSON-LD.
 */
export function seo({
  title,
  description,
  path,
  image = SITE.ogImage,
  type = "website",
  noindex = false,
  jsonLd,
  rawTitle,
  canonicalPath,
}: SeoOptions): MetaDescriptor[] {
  const url = absoluteUrl(path);
  const canonical = absoluteUrl(canonicalPath ?? path);
  const fullTitle = rawTitle ?? `${title}${TITLE_SUFFIX}`;
  const imageUrl = absoluteUrl(image);

  const tags: MetaDescriptor[] = [
    { title: fullTitle },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: canonical },

    {
      name: "robots",
      content: noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },

    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE.name },
    { property: "og:locale", content: SITE.locale },
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: fullTitle },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];

  if (jsonLd) {
    for (const block of Array.isArray(jsonLd) ? jsonLd : [jsonLd]) {
      tags.push({ "script:ld+json": block });
    }
  }

  return tags;
}

/* ------------------------------------------------------------------ *
 * JSON-LD builders
 *
 * Every entity that is referenced from more than one page gets a stable
 * @id so answer engines can resolve the graph instead of seeing a fresh,
 * unrelated organisation on each URL.
 * ------------------------------------------------------------------ */

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: "Cre8r",
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(SITE.logo),
      width: 200,
      height: 100,
    },
    image: absoluteUrl(SITE.ogImage),
    description: SITE.description,
    foundingDate: SITE.founded,
    areaServed: { "@type": "Country", name: "India" },
    address: CONSTANTS.OFFICES.map((office) => ({
      "@type": "PostalAddress",
      streetAddress: office.address.split(",").slice(0, -1).join(",").trim(),
      addressLocality: office.city,
      addressCountry: "IN",
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        name: "Brand & campaign enquiries",
        telephone: CONSTANTS.CONTACT_NUMBER_BRANDS.replace(/\s/g, ""),
        email: CONSTANTS.CONTACT_EMAIL_BRANDS,
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        name: "Creator support",
        telephone: CONSTANTS.CONTACT_NUMBER_CREATORS.replace(/\s/g, ""),
        email: CONSTANTS.CONTACT_EMAIL_CREATORS,
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
    sameAs: [
      CONSTANTS.LINKEDIN_URL,
      CONSTANTS.INSTAGRAM_URL,
      CONSTANTS.MEDIUM_URL,
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

export function webPageSchema({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  type?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

/** Breadcrumbs. Pass the trail excluding Home — it is prepended here. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * FAQPage markup — the highest-leverage schema for answer engines, which lift
 * question/answer pairs directly out of it. Only emitted on the two dedicated
 * FAQ pages so the site never publishes competing FAQ blocks for one answer.
 */
export function faqPageSchema(
  faqs: readonly { question: string; answer: string }[],
  path: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    inLanguage: "en-IN",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** The platform itself, so "what is Cre8r" style queries resolve to a product. */
export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE.url}/#platform`,
    name: SITE.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Influencer Marketing Platform",
    operatingSystem: "Web",
    url: absoluteUrl("/product"),
    description: SITE.description,
    publisher: { "@id": ORG_ID },
    featureList: [
      "Creator discovery across 4.1M+ Instagram and YouTube profiles",
      "25+ audience and engagement filters with credibility scoring",
      "Campaign execution with briefs, content approvals and contracts",
      "Affiliate links, promo codes and attributed revenue tracking",
      "Influencer-led lead generation and outreach pipelines",
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "0",
      description:
        "Free platform demo. Barter campaigns are charged a fixed platform fee per influencer; paid campaign margins are bundled into influencer pricing.",
      url: absoluteUrl("/demo"),
    },
  };
}

/** A single product module, described as the service a brand is buying. */
export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    serviceType: "Influencer marketing",
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "India" },
    isPartOf: { "@id": `${SITE.url}/#platform` },
  };
}

export function blogSchema(
  posts: readonly {
    id: string;
    title: string;
    description: string;
    date: string;
    author: string;
    image: string;
    blog_link: string;
  }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${absoluteUrl("/blog")}#blog`,
    url: absoluteUrl("/blog"),
    name: `${SITE.name} Blog`,
    description:
      "Insights, playbooks and data on influencer marketing in India from the Cre8r team.",
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      "@id": `${absoluteUrl("/blog")}#post-${post.id}`,
      headline: post.title,
      description: post.description,
      datePublished: toIsoDate(post.date),
      image: absoluteUrl(post.image),
      url: post.blog_link,
      mainEntityOfPage: post.blog_link,
      author: { "@type": "Organization", name: post.author, "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
    })),
  };
}

/** "Mar 10, 2025" -> "2025-03-10". Returns undefined for anything unparseable. */
export function toIsoDate(human: string): string | undefined {
  const parsed = new Date(human);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString().slice(0, 10);
}
