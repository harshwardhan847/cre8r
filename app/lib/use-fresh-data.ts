import { useEffect, useState } from "react";

/**
 * Starts from data baked in at build time, then refetches it once in the
 * browser and swaps the result in. Prerendered pages only change when the
 * site is redeployed, so without this anything published in Sanity since the
 * last build stays invisible until the next one. If the refetch fails, the
 * build-time data simply stays on screen.
 *
 * `fetchLatest` runs once on mount; pass a stable (module-level) function.
 */
export function useFreshData<T>(
  initial: T,
  fetchLatest: (signal: AbortSignal) => Promise<T>,
): T {
  const [data, setData] = useState(initial);

  useEffect(() => {
    const controller = new AbortController();
    fetchLatest(controller.signal).then(setData, () => {});
    return () => controller.abort();
  }, []);

  return data;
}
