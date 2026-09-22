import { Play } from "lucide-react";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { CAMPAIGN_VIDEOS } from "~/constants";

/**
 * Hero marquee of campaign videos.
 *
 * Loads no video until you ask for one. The original version mounted twenty
 * autoplaying YouTube <iframe>s — twenty player bundles decoding at once,
 * which is what made the page feel stuck. Each card is now a self-hosted
 * ~16KB WebP poster (see scripts/fetch-video-thumbnails.mjs) inside a plain
 * link, and a player is built only for the single card under the cursor.
 *
 * The invariant that keeps this fast: at most one <iframe> exists in the
 * document at any moment. `activeUid` lives in this component rather than in
 * each card precisely so two cards cannot both claim one, and leaving a card
 * unmounts its player instead of hiding it, which frees the player bundle,
 * its connections and its video decoder.
 *
 * Known and accepted: every campaign video here is a Short, and a Shorts embed
 * paints a permanent overlay rail over the preview — Shorts wordmark, kebab
 * menu, a "This channel..." subscribe promo, like count, the creator's
 * @handle, a Share button and the title. It does not auto-hide (still present
 * 14s in), and neither `controls=0` nor `modestbranding=1` suppresses it; it is
 * simply what embedding a Short costs. Removing it would mean serving short
 * self-hosted clips cut from the campaign masters instead of an embed.
 */

/**
 * How many posters to load eagerly. React hoists a `<link rel="preload">` for
 * each of these, so the number is kept low on purpose: the panel sits at the
 * fold, and the real LCP candidate is the 424KB hero background above it.
 * Three is enough that the marquee never starts with visibly empty cards; the
 * rest are lazy and the browser fetches whichever are already near the
 * viewport anyway, just at a lower priority.
 */
const EAGER_CARDS = 3;

/** Matches the WebP posters written by scripts/fetch-video-thumbnails.mjs. */
const THUMB_WIDTH = 384;
const THUMB_HEIGHT = 683;

/**
 * Hover-intent delay. Sweeping the cursor across the marquee crosses every
 * card; without this, each crossing would build and tear down a player.
 */
const HOVER_INTENT_MS = 180;

/**
 * Inline previews need a real pointer that can hover, and are themselves
 * motion — so a visitor who asked for less of it gets the poster and a tap
 * through to YouTube instead.
 */
const PREVIEW_QUERY =
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

type Card = {
  uid: string;
  id: string;
  brand: string;
  index: number;
  isClone: boolean;
  watchUrl: string;
  embedUrl: string;
  thumbnail: string;
};

const buildCard = (
  { url, brand }: (typeof CAMPAIGN_VIDEOS)[number],
  index: number,
  isClone: boolean,
): Card => {
  const id = url.split("/").pop() ?? "";
  return {
    // The clone half repeats every `id`, so `id` alone cannot key a card.
    uid: `${isClone ? "clone" : "card"}-${index}`,
    id,
    brand,
    index,
    isClone,
    watchUrl: `https://www.youtube.com/watch?v=${id}`,
    // Privacy-enhanced host: sets no tracking cookie unless playback starts,
    // which for a card nobody hovers is never.
    embedUrl:
      `https://www.youtube-nocookie.com/embed/${id}` +
      `?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&playsinline=1&rel=0&iv_load_policy=3&disablekb=1&fs=0`,
    thumbnail: `/video_thumbs/${id}.webp`,
  };
};

/**
 * The full track — the list, then the same list again to hide the loop seam —
 * derived once at module scope. CAMPAIGN_VIDEOS is a static constant, so there
 * is nothing here for a render to recompute.
 */
const track: Card[] = [
  ...CAMPAIGN_VIDEOS.map((video, i) => buildCard(video, i, false)),
  ...CAMPAIGN_VIDEOS.map((video, i) => buildCard(video, i, true)),
];

/**
 * Opens the TCP + TLS connections the player will need, once, on the first
 * sign of hover intent. Doing it at page load would cost every visitor a
 * handshake to YouTube whether or not they ever hover a card.
 */
let warmed = false;
function warmYouTubeConnection() {
  if (warmed || typeof document === "undefined") return;
  warmed = true;

  for (const href of ["https://www.youtube-nocookie.com", "https://i.ytimg.com"]) {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = href;
    document.head.append(link);
  }
}

/** True only where an inline preview makes sense — see PREVIEW_QUERY. */
function useCanPreview() {
  const [canPreview, setCanPreview] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(PREVIEW_QUERY);
    const update = () => setCanPreview(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return canPreview;
}

/**
 * The player. Kept as its own component so that unmounting it on mouse leave
 * also resets `ready`, and the next hover fades up from the poster again
 * rather than flashing a stale opacity. Until it loads, the poster underneath
 * shows through and covers the player's black first frame.
 */
const InlinePreview = ({ card }: { card: Card }) => {
  const [ready, setReady] = useState(false);

  return (
    <iframe
      src={card.embedUrl}
      title={`${card.brand} campaign video preview`}
      allow="autoplay; encrypted-media"
      referrerPolicy="strict-origin-when-cross-origin"
      tabIndex={-1}
      onLoad={() => setReady(true)}
      // pointer-events-none is load-bearing twice over: it lets the click fall
      // through to the enclosing link, and it stops the iframe swallowing the
      // mouseleave that tears this player back down.
      className={`pointer-events-none absolute inset-0 h-full w-full scale-105 border-0 transition-opacity duration-300 ${
        ready ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

type VideoCardProps = {
  card: Card;
  isActive: boolean;
  onEnter: (uid: string) => void;
  onLeave: () => void;
};

const VideoCard = memo(({ card, isActive, onEnter, onLeave }: VideoCardProps) => (
  <a
    href={card.watchUrl}
    target="_blank"
    rel="noopener noreferrer"
    onMouseEnter={() => onEnter(card.uid)}
    onMouseLeave={onLeave}
    // The clone is decoration. Hiding it keeps every link in the accessibility
    // tree and the tab order unique, and it costs no extra bytes — the browser
    // serves the identical poster URL straight from cache.
    aria-hidden={card.isClone || undefined}
    tabIndex={card.isClone ? -1 : undefined}
    aria-label={
      card.isClone ? undefined : `Watch the ${card.brand} campaign video on YouTube`
    }
    className="group/card relative mr-3 md:mr-6 block aspect-9/16 w-32 md:w-48 shrink-0 overflow-hidden rounded-xl bg-neutral-900 shadow-md focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white"
  >
    <img
      src={card.thumbnail}
      alt={card.isClone ? "" : `${card.brand} campaign video thumbnail`}
      width={THUMB_WIDTH}
      height={THUMB_HEIGHT}
      // The intrinsic size above reserves the box before the bytes land, so a
      // slow poster never shifts the hero.
      loading={card.index < EAGER_CARDS && !card.isClone ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      className="h-full w-full object-cover"
    />

    {isActive && <InlinePreview card={card} />}

    {/* Play affordance. Hidden once a preview is playing — the motion says it. */}
    <div
      className={`absolute inset-0 z-10 flex items-center justify-center bg-black/10 transition-opacity duration-200 ${
        isActive
          ? "opacity-0"
          : "opacity-0 group-hover/card:opacity-100 group-focus-visible/card:opacity-100"
      }`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg">
        <Play className="h-4 w-4 translate-x-px fill-neutral-900 text-neutral-900" />
      </span>
    </div>

    {/* Floating Brand Badge. Sits above the player so it survives the preview. */}
    <div className="absolute top-3 left-3 z-20 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-semibold text-white opacity-90 shadow-sm backdrop-blur-md transition-opacity group-hover/card:opacity-100">
      {card.brand}
    </div>
  </a>
));

VideoCard.displayName = "VideoCard";

const VideoExample = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [activeUid, setActiveUid] = useState<string | null>(null);
  const canPreview = useCanPreview();
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelHover = useCallback(() => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  }, []);

  const handleEnter = useCallback(
    (uid: string) => {
      if (!canPreview) return;
      warmYouTubeConnection();
      cancelHover();
      hoverTimer.current = setTimeout(() => setActiveUid(uid), HOVER_INTENT_MS);
    },
    [canPreview, cancelHover],
  );

  const handleLeave = useCallback(() => {
    cancelHover();
    setActiveUid(null);
  }, [cancelHover]);

  useEffect(() => cancelHover, [cancelHover]);

  /**
   * Parks the marquee while it is scrolled out of view and tears down any
   * player with it, so a video can never keep streaming somewhere nobody is
   * looking. One observer, one boolean — a parked track also drops its
   * `will-change` layer (see app.css).
   */
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (!entry.isIntersecting) {
          cancelHover();
          setActiveUid(null);
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [cancelHover]);

  return (
    <div
      ref={ref}
      className="scroll-scale-in relative mt-12 w-full max-w-7xl overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-3 shadow-lg backdrop-blur-md md:mt-24 md:p-6"
    >
      {/* Edge gradient overlays for smooth fade out */}
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-10 bg-linear-to-r from-white/10 to-transparent md:w-24" />
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-10 bg-linear-to-l from-white/10 to-transparent md:w-24" />

      <div className="marquee w-full">
        {/* No padding or gap on the track: both would widen its border box and
            put the -50% loop point out of step with one copy of the list. The
            spacing lives on the cards' own right margin instead. */}
        <div className="marquee-track" data-play={inView ? "running" : "paused"}>
          {track.map((card) => (
            <VideoCard
              key={card.uid}
              card={card}
              isActive={activeUid === card.uid}
              onEnter={handleEnter}
              onLeave={handleLeave}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoExample;
