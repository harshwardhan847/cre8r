import BlogPage from "~/pages/BlogPage";

export function meta() {
  return [
    { title: "Blog · Cre8r AI" },
    {
      name: "description",
      content:
        "Insights, playbooks, and trends on influencer marketing from the Cre8r team.",
    },
  ];
}

export default function Blog() {
  return <BlogPage />;
}
