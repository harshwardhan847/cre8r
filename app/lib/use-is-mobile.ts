import { useEffect, useState } from "react";

const MOBILE_QUERY = "(max-width: 767px)";

/**
 * Tracks whether the viewport matches Tailwind's `md` breakpoint boundary.
 * Returns false on the server/first paint to avoid hydration mismatches;
 * flips to the real value on mount. Use to skip mounting heavy/animated
 * effects (WebGL, scroll-linked parallax, autoplay video) on mobile.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    setIsMobile(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
