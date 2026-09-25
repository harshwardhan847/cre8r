import { Link } from "react-router";
import BlogPostPage from "~/pages/BlogPostPage";
import { getPostDetailBySlug } from "~/lib/blog";
import { seo, blogPostingSchema, breadcrumbSchema } from "~/seo";
import { Button } from "~/components/ui/button";
import type { Route } from "./+types/blog.$slug";

export async function loader({ params }: Route.LoaderArgs) {
  return { post: (await getPostDetailBySlug(params.slug)) ?? null };
}

export async function clientLoader({
  params,
  serverLoader,
}: Route.ClientLoaderArgs) {
  try {
    // Posts that existed at the last deploy were prerendered, so this reads
    // their static .data file — no request to Sanity at all.
    return await serverLoader();
  } catch {
    // No prerendered data: the post was published after the last deploy
    // (the webhook rebuild hasn't finished yet), so ask Sanity directly.
    return { post: (await getPostDetailBySlug(params.slug)) ?? null };
  }
}

export function HydrateFallback() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-sm font-medium text-muted-foreground">Loading article…</p>
    </main>
  );
}

export function meta({ data, params }: Route.MetaArgs) {
  const post = data?.post;
  if (!post) {
    return seo({
      title: "Post not found",
      description: "This blog post could not be found.",
      path: `/blog/${params.slug}`,
      noindex: true,
    });
  }
  return seo({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    image: post.image,
    jsonLd: [
      blogPostingSchema(post),
      breadcrumbSchema([
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
    ],
  });
}

export default function BlogPostRoute({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;

  if (!post) {
    return (
      <main className="mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
        <p className="eyebrow">404</p>
        <h1 className="h1 mt-4">We couldn't find that article</h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          It may have been unpublished or the link is out of date.
        </p>
        <Button asChild className="mt-8">
          <Link to="/blog">Back to all articles</Link>
        </Button>
      </main>
    );
  }

  return <BlogPostPage post={post} />;
}
