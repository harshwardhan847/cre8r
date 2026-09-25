import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { formatBlogDate, type BlogCard } from "~/lib/blog";

const FeaturedPost = ({ post }: { post: BlogCard }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-border/40 bg-white shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl md:grid-cols-2"
  >
    <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-100 md:aspect-auto md:h-full">
      <img
        src={post.image}
        alt={post.title}
        fetchPriority="high"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
    <div className="flex flex-col justify-center gap-4 p-6 md:p-10 lg:p-14">
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground/80">
        <span className="rounded-full bg-primary/5 px-2.5 py-1 text-primary/70">
          Latest
        </span>
        <span>{formatBlogDate(post.publishedAt)}</span>
      </div>
      <h2 className="h2 transition-colors group-hover:text-primary">
        {post.title}
      </h2>
      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
        {post.excerpt}
      </p>
      <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
        Read Article <ArrowUpRight className="h-4 w-4" />
      </div>
    </div>
  </Link>
);

export default FeaturedPost;
