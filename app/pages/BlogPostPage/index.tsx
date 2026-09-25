import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { formatBlogDate, type BlogPostDetail } from "~/lib/blog";
import { urlFor } from "~/lib/sanity";

const ptComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="h2 mt-10 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="h3 mt-8 mb-3">{children}</h3>,
    normal: ({ children }) => (
      <p className="mt-4 text-base leading-relaxed text-muted-foreground first:mt-0 md:text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-muted-foreground">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-primary underline underline-offset-2"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
  },
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value).width(1200).auto("format").url()}
        alt={value?.alt ?? ""}
        loading="lazy"
        className="mt-8 w-full rounded-2xl border border-border/40"
      />
    ),
  },
};

type BlogPostPageProps = {
  post: BlogPostDetail;
};

const BlogPostPage = ({ post }: BlogPostPageProps) => {
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto w-full max-w-3xl px-4 pt-32 pb-20 md:px-8 md:pt-40">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all articles
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-6"
        >
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground/80">
            <span>{formatBlogDate(post.publishedAt)}</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>{post.author}</span>
          </div>
          <h1 className="h1 mt-4">{post.title}</h1>
        </motion.div>

        <div className="mt-8 aspect-video w-full overflow-hidden rounded-3xl bg-neutral-100">
          <img
            src={post.image}
            alt={post.imageAlt}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-10">
          <PortableText value={post.body} components={ptComponents} />
        </div>
      </article>
    </main>
  );
};

export default BlogPostPage;
