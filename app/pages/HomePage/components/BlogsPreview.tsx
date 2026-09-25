import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { formatBlogDate, type BlogCard } from "~/lib/blog";

type BlogsPreviewProps = {
  posts: BlogCard[];
};

const BlogsPreview = ({ posts }: BlogsPreviewProps) => {
  if (posts.length === 0) return null;

  return (
    <div className="w-full py-12 md:py-24 bg-background flex flex-col items-center justify-center border-t border-border/10">
      <div className="container px-4 md:px-8 mx-auto flex flex-col gap-6 md:gap-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="h2">Latest Insights</h2>
            <p className="text-muted-foreground mt-2 text-base md:text-lg">Stay updated with the latest in influencer marketing, trends, and strategies.</p>
          </div>
          <Button variant="outline" size="lg" className="rounded-full shrink-0" asChild>
            <Link to="/blog">View All Posts</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-4 md:mt-8">
          {posts.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.slug}`}
              className="group relative rounded-3xl overflow-hidden shadow-sm border border-border/40 bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
            >
              <div className="aspect-[16/10] w-full bg-neutral-100 overflow-hidden relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5 md:p-8 flex flex-col flex-1 gap-3 md:gap-4">
                <div className="flex items-center gap-3 text-xs font-semibold tracking-wide text-muted-foreground/80 uppercase">
                  <span>{formatBlogDate(blog.publishedAt)}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{blog.author}</span>
                </div>
                <h3 className="h3 group-hover:text-primary transition-colors line-clamp-3">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
                  {blog.excerpt}
                </p>

                <div className="flex items-center gap-2 text-primary text-sm font-semibold mt-4 group-hover:gap-3 transition-all duration-300">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPreview;
