import BlogPage from "~/pages/BlogPage";
import { CONSTANTS } from "~/constants";
import { seo, blogSchema, breadcrumbSchema } from "~/seo";

const DESCRIPTION =
  "Playbooks, trends and data on influencer marketing in India — creator vetting, fake followers, barter vs paid campaigns, ASCI rules, engagement rates and more.";

export function meta() {
  return seo({
    title: "Influencer Marketing Blog",
    description: DESCRIPTION,
    path: "/blog",
    jsonLd: [
      blogSchema(CONSTANTS.BLOGS),
      breadcrumbSchema([{ name: "Blog", path: "/blog" }]),
    ],
  });
}

export default function Blog() {
  return <BlogPage />;
}
