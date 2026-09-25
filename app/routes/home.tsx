import HomePage from "~/pages/HomePage/index";
import {
  seo,
  webPageSchema,
  softwareApplicationSchema,
  SITE,
} from "~/seo";
import { STATS } from "~/constants";
import { getPostsPage } from "~/lib/blog";
import type { Route } from "./+types/home";

const LATEST_POSTS_COUNT = 3;

// Build time only — the "Latest Insights" section is baked into the
// prerendered homepage, so it's in the HTML crawlers read and needs no
// request to Sanity from the visitor's browser.
export async function loader() {
  const { posts } = await getPostsPage({ limit: LATEST_POSTS_COUNT });
  return { latestPosts: posts };
}

const DESCRIPTION =
  `Run influencer marketing end to end. Discover from ${STATS.CREATORS} vetted Instagram and YouTube creators, manage campaigns and content approvals, and attribute real revenue.`;

export function meta() {
  return seo({
    rawTitle: "Influencer Marketing Platform in India | Cre8r.ai",
    title: "Influencer Marketing Platform in India",
    description: DESCRIPTION,
    path: "/",
    jsonLd: [
      webPageSchema({
        name: "Cre8r.ai — Influencer Marketing Platform",
        description: SITE.description,
        path: "/",
      }),
      softwareApplicationSchema(),
    ],
  });
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <HomePage latestPosts={loaderData.latestPosts} />;
}
