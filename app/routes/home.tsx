import HomePage from "~/pages/HomePage/index";
import {
  seo,
  webPageSchema,
  softwareApplicationSchema,
  SITE,
} from "~/seo";
import { STATS } from "~/constants";
import { LATEST_POSTS_COUNT, getPostsPage } from "~/lib/blog";
import type { Route } from "./+types/home";

// Build time only — the "Latest Insights" section is baked into the
// prerendered homepage, so it's in the HTML crawlers read. BlogsPreview then
// refetches it in the browser to pick up posts published since the deploy.
export async function loader() {
  const { posts } = await getPostsPage({ limit: LATEST_POSTS_COUNT });
  return { latestPosts: posts };
}

const DESCRIPTION =
  `Search ${STATS.CREATORS} creator profiles with AI, run campaigns with hundreds of creators, and track views and comment sentiment on one platform. ${STATS.CAMPAIGNS} campaigns for ${STATS.BRANDS} brands.`;

export function meta() {
  return seo({
    rawTitle: "Cre8r.ai: AI Influencer Marketing Platform in India",
    title: "AI Influencer Marketing Platform in India",
    description: DESCRIPTION,
    path: "/",
    jsonLd: [
      webPageSchema({
        name: "Cre8r.ai: AI Influencer Marketing Platform",
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
