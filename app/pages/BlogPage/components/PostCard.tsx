import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { formatBlogDate, type BlogCard } from "~/lib/blog";

const PostCard = ({ post }: { post: BlogCard }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/40 bg-white shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl"
  >
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
      <img
        src={post.image}
        alt={post.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
    <div className="flex flex-1 flex-col gap-3 p-5 md:p-7">
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground/80">
        <span>{formatBlogDate(post.publishedAt)}</span>
        <span className="h-1 w-1 rounded-full bg-border" />
        <span>{post.author}</span>
      </div>
      <h3 className="h3 transition-colors line-clamp-3 group-hover:text-primary">
        {post.title}
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {post.excerpt}
      </p>
      <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
        Read Article <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  </Link>
);

export default PostCard;
