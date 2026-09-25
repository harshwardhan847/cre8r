import { useState } from "react";
import type { BlogPostsPage } from "~/lib/blog";
import FeaturedPost from "./components/FeaturedPost";
import LoadMoreButton from "./components/LoadMoreButton";
import PostCard from "./components/PostCard";
import SearchInput from "./components/SearchInput";
import { useBlogSearch, usePaginatedPosts } from "./hooks";

type BlogPageProps = {
  firstPage: BlogPostsPage;
};

const BlogPage = ({ firstPage }: BlogPageProps) => {
  const [query, setQuery] = useState("");
  const search = useBlogSearch(query);
  const list = usePaginatedPosts(firstPage);
  const [featured, ...gridPosts] = list.posts;

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-7xl px-4 pt-32 pb-10 md:px-8 md:pt-40 md:pb-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h1 className="h1">Blog</h1>
          <SearchInput value={query} onChange={setQuery} />
        </div>
      </section>

      {search.isActive ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-8 md:pb-20">
          <p aria-live="polite" className="text-sm text-muted-foreground">
            {search.status === "loading" && "Searching…"}
            {search.status === "error" &&
              "Search isn't available right now. Please try again."}
            {search.status === "done" &&
              (search.posts.length === 0
                ? `No articles match “${search.term}”.`
                : `Results for “${search.term}”`)}
          </p>

          {search.posts.length > 0 && (
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {search.posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {search.hasMore && (
            <LoadMoreButton
              loading={search.loadingMore}
              failed={search.loadMoreFailed}
              onClick={search.loadMore}
            />
          )}
        </section>
      ) : !featured ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-20 md:px-8">
          <p className="text-muted-foreground">
            No articles yet — check back soon.
          </p>
        </section>
      ) : (
        <>
          <section className="mx-auto w-full max-w-7xl px-4 md:px-8">
            <FeaturedPost post={featured} />
          </section>

          {gridPosts.length > 0 && (
            <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-20">
              <h2 className="h2">All articles</h2>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {gridPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {list.hasMore && (
                <LoadMoreButton
                  loading={list.loading}
                  failed={list.failed}
                  onClick={list.loadMore}
                />
              )}
            </section>
          )}
        </>
      )}
    </main>
  );
};

export default BlogPage;
