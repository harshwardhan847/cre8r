import { useCallback, useEffect, useRef, useState } from "react";
import {
  BLOG_PAGE_SIZE,
  getPostsPage,
  searchPosts,
  type BlogCard,
  type BlogPostsPage,
} from "~/lib/blog";

/** Newest-first listing that starts from the prerendered first page. */
export function usePaginatedPosts(firstPage: BlogPostsPage) {
  const [posts, setPosts] = useState(firstPage.posts);
  const [cursor, setCursor] = useState(firstPage.nextCursor);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  const loadMore = useCallback(async () => {
    if (!cursor || loading) return;
    setLoading(true);
    setFailed(false);
    try {
      const page = await getPostsPage({ limit: BLOG_PAGE_SIZE, after: cursor });
      setPosts((prev) => [...prev, ...page.posts]);
      setCursor(page.nextCursor);
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }, [cursor, loading]);

  return { posts, hasMore: cursor !== null, loading, failed, loadMore };
}

export const MIN_SEARCH_LENGTH = 2;
const SEARCH_DEBOUNCE_MS = 300;

type SearchState = {
  status: "idle" | "loading" | "done" | "error";
  posts: BlogCard[];
  hasMore: boolean;
  loadingMore: boolean;
  loadMoreFailed: boolean;
};

const IDLE: SearchState = {
  status: "idle",
  posts: [],
  hasMore: false,
  loadingMore: false,
  loadMoreFailed: false,
};

/**
 * Debounced, relevance-ranked search. Every request for a term shares one
 * AbortController, so typing a new term cancels both the pending search and
 * any in-flight "load more" for the old one — stale results can't land.
 */
export function useBlogSearch(input: string) {
  const term = input.trim();
  const isActive = term.length >= MIN_SEARCH_LENGTH;
  const [state, setState] = useState<SearchState>(IDLE);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!isActive) {
      setState(IDLE);
      return;
    }

    const controller = new AbortController();
    controllerRef.current = controller;
    setState({ ...IDLE, status: "loading" });

    const timer = window.setTimeout(async () => {
      try {
        const page = await searchPosts(
          { term, offset: 0, limit: BLOG_PAGE_SIZE },
          { signal: controller.signal },
        );
        setState({ ...IDLE, status: "done", ...page });
      } catch {
        if (!controller.signal.aborted) setState({ ...IDLE, status: "error" });
      }
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [term, isActive]);

  const loadMore = useCallback(async () => {
    const controller = controllerRef.current;
    if (!controller || state.status !== "done" || !state.hasMore || state.loadingMore) {
      return;
    }
    setState((prev) => ({ ...prev, loadingMore: true, loadMoreFailed: false }));
    try {
      const page = await searchPosts(
        { term, offset: state.posts.length, limit: BLOG_PAGE_SIZE },
        { signal: controller.signal },
      );
      setState((prev) => ({
        ...prev,
        posts: [...prev.posts, ...page.posts],
        hasMore: page.hasMore,
        loadingMore: false,
      }));
    } catch {
      if (!controller.signal.aborted) {
        setState((prev) => ({ ...prev, loadingMore: false, loadMoreFailed: true }));
      }
    }
  }, [state, term]);

  return { term, isActive, ...state, loadMore };
}
