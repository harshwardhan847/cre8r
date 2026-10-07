import BlogPage from "~/pages/BlogPage";
import { BLOG_FIRST_PAGE_SIZE, getPostsPage } from "~/lib/blog";
import { seo, blogSchema, breadcrumbSchema } from "~/seo";
import type { Route } from "./+types/blog";

const DESCRIPTION =
  "Playbooks, trends and data on influencer marketing in India — creator vetting, fake followers, barter vs paid campaigns, ASCI rules, engagement rates and more.";

// Runs at build time only, so crawlers get the list in the HTML. There's
// deliberately no clientLoader: client-side navigations to /blog read the
// prerendered .data file, and the page itself refetches the first page once
// mounted (to pick up posts published since the last deploy) and fetches
// everything past it (load more, search).
export async function loader() {
  // One featured post plus a full grid.
  return { firstPage: await getPostsPage({ limit: BLOG_FIRST_PAGE_SIZE }) };
}

export function meta({ data }: Route.MetaArgs) {
  return seo({
    title: "Influencer Marketing Blog",
    description: DESCRIPTION,
    path: "/blog",
    jsonLd: [
      blogSchema(data?.firstPage.posts ?? []),
      breadcrumbSchema([{ name: "Blog", path: "/blog" }]),
    ],
  });
}

export default function Blog({ loaderData }: Route.ComponentProps) {
  return <BlogPage firstPage={loaderData.firstPage} />;
}
