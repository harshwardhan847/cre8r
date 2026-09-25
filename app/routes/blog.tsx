import BlogPage from "~/pages/BlogPage";
import { BLOG_PAGE_SIZE, getPostsPage } from "~/lib/blog";
import { seo, blogSchema, breadcrumbSchema } from "~/seo";
import type { Route } from "./+types/blog";

const DESCRIPTION =
  "Playbooks, trends and data on influencer marketing in India — creator vetting, fake followers, barter vs paid campaigns, ASCI rules, engagement rates and more.";

// Runs at build time only. There's deliberately no clientLoader: client-side
// navigations to /blog read the prerendered .data file, and everything past
// the first page (load more, search) is fetched by the page itself.
export async function loader() {
  // One featured post plus a full grid.
  return { firstPage: await getPostsPage({ limit: BLOG_PAGE_SIZE + 1 }) };
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
