import type { PortableTextBlock } from "@portabletext/react";
import { sanityFetch, urlFor } from "./sanity";

export type SanityImageValue = {
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  alt?: string;
};

/** Optimized image URL for a Sanity image at a given render width. */
export function coverImageUrl(image: SanityImageValue, width = 1200): string {
  return urlFor(image).width(width).auto("format").url();
}

/** ISO datetime -> "Mar 10, 2025", for display on cards and the post page. */
export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** Grid posts per page; the list's first page adds one featured post on top. */
export const BLOG_PAGE_SIZE = 9;

// `publishedAt` is required in the schema, but ordering and cursors break on
// a document without it, so the filter enforces it rather than trusting that.
const PUBLISHED_POST = `_type == "post" && defined(slug.current) && defined(publishedAt)`;

// Card fields only — never `body` — so listing posts doesn't pull every
// post's full rich text over the wire.
const CARD_PROJECTION = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  author,
  publishedAt,
  coverImage
}`;

/** Plain, display-ready shape used by the list page, homepage preview and JSON-LD. */
export type BlogCard = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  image: string;
};

type RawPostCard = Omit<BlogCard, "id" | "image"> & {
  _id: string;
  coverImage: SanityImageValue;
};

function toBlogCard({ _id, coverImage, ...card }: RawPostCard): BlogCard {
  return { ...card, id: _id, image: coverImageUrl(coverImage) };
}

/** Position of the last post on a page, used to fetch the page after it. */
export type BlogCursor = { publishedAt: string; id: string };

export type BlogPostsPage = {
  posts: BlogCard[];
  nextCursor: BlogCursor | null;
};

type FetchOptions = { signal?: AbortSignal };

/**
 * One page of posts, newest first, using keyset pagination: each page is
 * "posts older than the last one already shown" rather than an offset, which
 * Sanity recommends because large `[offset...]` slices get slower the deeper
 * they go. `_id` breaks ties between posts published at the same instant.
 *
 * Fetches `limit + 1` so whether another page exists is known without a
 * separate count() query.
 */
export async function getPostsPage(
  { limit, after }: { limit: number; after?: BlogCursor | null },
  options?: FetchOptions,
): Promise<BlogPostsPage> {
  const filter = after
    ? `${PUBLISHED_POST} && (publishedAt < $publishedAt || (publishedAt == $publishedAt && _id < $id))`
    : PUBLISHED_POST;
  const query = `*[${filter}] | order(publishedAt desc, _id desc) [0...$limit] ${CARD_PROJECTION}`;
  const params = after
    ? { limit: limit + 1, publishedAt: after.publishedAt, id: after.id }
    : { limit: limit + 1 };

  const raw = await sanityFetch<RawPostCard[]>(query, params, options);
  const posts = raw.slice(0, limit).map(toBlogCard);
  const last = posts.at(-1);
  return {
    posts,
    nextCursor:
      raw.length > limit && last
        ? { publishedAt: last.publishedAt, id: last.id }
        : null,
  };
}

export type BlogSearchPage = {
  posts: BlogCard[];
  hasMore: boolean;
};

const MAX_SEARCH_TERMS = 8;

/**
 * "influencer foll" -> ["influencer*", "foll*"]: every word must match, and
 * each matches as a prefix so results appear while the user is still typing.
 */
function toMatchTerms(input: string): string[] {
  return input
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean)
    .slice(0, MAX_SEARCH_TERMS)
    .map((word) => `${word}*`);
}

/**
 * Full-text search across title, excerpt and body, ranked by relevance (a
 * title hit outweighs an excerpt hit, which outweighs a body hit).
 *
 * Paginates with an offset slice rather than a cursor — results are ordered
 * by `_score`, which isn't a stored field a cursor could filter on, and a
 * search's result set is small enough that the offset cost doesn't matter.
 * `_id` is the final tie-breaker so equal-scoring posts keep the same order
 * from one page request to the next (otherwise pages could overlap).
 */
export async function searchPosts(
  { term, offset, limit }: { term: string; offset: number; limit: number },
  options?: FetchOptions,
): Promise<BlogSearchPage> {
  const terms = toMatchTerms(term);
  if (terms.length === 0) return { posts: [], hasMore: false };

  const query = `*[${PUBLISHED_POST} && [title, excerpt, pt::text(body)] match $terms]
    | score(
        boost(title match $terms, 3),
        boost(excerpt match $terms, 2),
        pt::text(body) match $terms
      )
    | order(_score desc, publishedAt desc, _id desc)
    [$start...$end] ${CARD_PROJECTION}`;

  const raw = await sanityFetch<RawPostCard[]>(
    query,
    { terms, start: offset, end: offset + limit + 1 },
    options,
  );
  return {
    posts: raw.slice(0, limit).map(toBlogCard),
    hasMore: raw.length > limit,
  };
}

export type BlogPostDetail = BlogCard & {
  body: PortableTextBlock[];
  imageAlt: string;
};

type RawPostDetail = RawPostCard & { body: PortableTextBlock[] };

const POST_BY_SLUG_QUERY = `*[${PUBLISHED_POST} && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  author,
  publishedAt,
  coverImage,
  body
}`;

export async function getPostDetailBySlug(
  slug: string,
): Promise<BlogPostDetail | undefined> {
  const post = await sanityFetch<RawPostDetail | null>(POST_BY_SLUG_QUERY, {
    slug,
  });
  if (!post) return undefined;
  const { body, ...card } = post;
  return {
    ...toBlogCard(card),
    body,
    imageAlt: post.coverImage.alt ?? post.title,
  };
}
