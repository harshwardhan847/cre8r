import {
  getValueTransition,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import React from "react";
import { Button } from "~/components/ui/button";
import { CTA } from "~/constants";
import { useIsMobile } from "~/lib/use-is-mobile";
import { STATS } from "~/constants";

type Props = {};

const FEATURE_CARDS = [
  {
    dot: "bg-green-400",
    title: "Find & Track Creators",
    description: `Discover ${STATS.CREATORS} creators filtered by niche, reach and engagement.`,
  },
  {
    dot: "bg-orange-400",
    title: "Intelligent Matchmaking",
    description: "AI-powered recommendations to connect brands with ideal creators.",
  },
  {
    dot: "bg-pink-400",
    title: "Live Performance Tracking",
    description: "Monitor views, engagement and ROI in real-time across campaigns.",
  },
];

const Transform = (props: Props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const videoContainerRef = React.useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const transition = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  React.useEffect(() => {
    const video = videoRef.current;
    const container = videoContainerRef.current;
    if (!video || !container) return;

    // On mobile just play the video muted — skip the scroll-linked
    // volume/visibility ramp, which reruns on every scroll frame.
    if (isMobile) {
      video.muted = true;
      video.play().catch(() => { });
      return;
    }

    let ticking = false;

    const updateVolume = () => {
      ticking = false;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const visibleHeight =
        Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
      const ratio = Math.max(0, Math.min(1, visibleHeight / rect.height));

      video.volume = ratio;
      video.muted = ratio <= 0;
      if (ratio > 0 && video.paused) {
        video.play().catch(() => { });
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateVolume);
      }
    };

    updateVolume();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isMobile]);

  const rawY = useTransform(transition.scrollYProgress, [0, 1], [300, -300]);

  const y = useSpring(rawY, {
    stiffness: 300,
    damping: 50,
    mass: 3,
  });

  const rawRotate = useTransform(
    transition.scrollYProgress,
    [0, 0.8],
    [20, -10],
  );
  const rawRotateRight = useTransform(
    transition.scrollYProgress,
    [0, 0.8],
    [-20, 10],
  );
  const rotateRight = useSpring(rawRotateRight, {
    stiffness: 300,
    damping: 50,
    mass: 2,
  });

  // 👉 Add smoothing here
  const rotate = useSpring(rawRotate, {
    stiffness: 300,
    damping: 50,
    mass: 2,
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-primary pt-16 md:pt-24 px-4 flex flex-col items-center gap-6 md:gap-8 justify-start"
    >
      <p className="p-1.5 scale-90 shadow bg-neutral-800 flex border border-neutral-500/20 items-center justify-center gap-2 w-min whitespace-nowrap rounded-xl pr-3 text-[12px] text-primary-foreground font-extralight">
        <span className="p-0.5 px-2 bg-linear-to-br border border-neutral-500/20 shadow from-purple-400 via-background to-orange-400 text-[11px] font-normal rounded-md text-primary">
          AI
        </span>
        <span className="text-primary-foreground/70 font-normal tracking-wide ">
          Influencer Marketing Platform
        </span>
      </p>
      <h2 className="h2 text-primary-foreground text-center">
        Understand your audience
        <br className="hidden sm:block" /> through voices they trust.
      </h2>
      <p className="max-w-md md:-m-4 text-muted-foreground text-center text-pretty text-sm md:text-base">
        We prioritize authentic influencer relationships
        <br className="hidden sm:block" /> that create lasting impact for your brand.
      </p>
      <Button
        className="bg-white text-neutral-900 hover:bg-neutral-100 cursor-pointer text-sm font-normal"
        size={"lg"}
        asChild
      >
        <a
          href={CTA.BRAND.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {CTA.BRAND.label}
        </a>
      </Button>

      <div className="w-full relative">
        {/* Decorative floating cards — desktop/tablet only; on mobile they'd
            overlap the viewport, so a static stacked list replaces them below. */}
        <motion.div
          style={{ rotate: rotateRight, y }}
          whileHover={{ scale: 1.04 }}
          className="hidden md:flex absolute rounded-2xl origin-top-right bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgba(74,222,128,0.08)] z-10 w-xs flex-col items-start justify-center gap-1 p-5 top-1/4 right-12"
        >
          <span className="bg-green-400 rounded-sm shadow w-4 aspect-square mb-1" />
          <p className="font-normal text-xs text-foreground">
            Find & Track Creators
          </p>
          <p className="text-xs text-muted-foreground">
            Discover {STATS.CREATORS} creators filtered by niche, reach and engagement.
          </p>
        </motion.div>
        <motion.div
          style={{ y }}
          whileHover={{ scale: 1.04 }}
          className="hidden md:flex absolute rounded-2xl origin-top-right bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgba(251,146,60,0.08)] z-10 w-xs flex-col items-start justify-center gap-1 p-5 top-full right-1/2 translate-x-1/2 translate-y-full"
        >
          <span className="bg-orange-400 rounded-sm shadow w-4 aspect-square mb-1" />
          <p className="font-normal text-xs text-foreground">
            Intelligent Matchmaking
          </p>
          <p className="text-xs text-muted-foreground">
            AI-powered recommendations to connect brands with ideal creators.
          </p>
        </motion.div>
        <motion.div
          style={{ rotate, y }}
          whileHover={{ scale: 1.04 }}
          className="hidden md:flex absolute rounded-2xl origin-top-left bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgba(244,114,182,0.08)] z-10 w-xs flex-col items-start justify-center gap-1 p-5 top-1/6 left-12"
        >
          <span className="bg-pink-400 rounded-sm shadow w-4 aspect-square mb-1" />
          <p className="font-normal text-xs text-foreground">
            Live Performance Tracking
          </p>
          <p className="text-xs text-muted-foreground">
            Monitor views, engagement and ROI in real-time across campaigns.
          </p>
        </motion.div>
        <motion.div
          ref={videoContainerRef}
          className="aspect-video mx-auto max-w-6xl w-full h-full overflow-hidden mt-8 shadow rounded-lg relative backdrop-blur-lg bg-white/20"
        >
          <video
            ref={videoRef}
            src="/video_assets/video.mp4"
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        </motion.div>

        {/* Mobile-only simplified feature list (no parallax/scroll transforms) */}
        <div className="md:hidden grid grid-cols-1 gap-3 mt-5">
          {FEATURE_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white/80 shadow-sm flex flex-col items-start gap-1 p-4"
            >
              <span className={`${card.dot} rounded-sm shadow w-4 aspect-square mb-1`} />
              <p className="font-normal text-xs text-foreground">{card.title}</p>
              <p className="text-xs text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-20" />
      <div className="mt-20 hidden">
        <h3 className="h3 text-center mb-8">
          Never miss a campaign opportunity
        </h3>

        <div className="w-screen overflow-clip mx-auto relative py-4">
          <div className="bg-linear-to-r from-primary to-transparent w-sm h-full absolute top-0 left-0 z-10" />
          <div className="bg-linear-to-l from-primary to-transparent w-sm h-full absolute top-0 right-0 z-10" />
          <motion.div
            className="flex gap-4 py-2 px-4 flex-nowrap items-start justify-start"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[
              "Influencer Discovery",
              "Campaign Analytics",
              "Creator Outreach",
              "ROI Tracking",
              "Audience Insights",
              "Brand Collaboration",
              "Influencer Discovery",
              "Campaign Analytics",
              "Creator Outreach",
              "ROI Tracking",
              "Audience Insights",
              "Brand Collaboration",
              "Influencer Discovery",
              "Campaign Analytics",
              "Creator Outreach",
              "ROI Tracking",
              "Audience Insights",
              "Brand Collaboration",
              "Influencer Discovery",
              "Campaign Analytics",
              "Creator Outreach",
              "ROI Tracking",
              "Audience Insights",
              "Brand Collaboration",
            ].map((label, i) => (
              <div
                key={i}
                className="text-primary-foreground whitespace-nowrap bg-neutral-900/80 tracking-wider border border-neutral-700/40 p-1.5 px-3 rounded-full flex items-center justify-center gap-2 text-sm"
              >
                <span className="aspect-square text-xs font-light bg-pink-400 w-3 rounded-full " />
                {label}
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex gap-4 py-2 px-4 flex-nowrap items-start justify-start"
            animate={{ x: [-1200, 0] }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
            }}
          >
            {[
              "Micro-Influencers",
              "Nano Creators",
              "Content Calendar",
              "Performance Reports",
              "Creator Briefs",
              "Campaign Goals",
              "Micro-Influencers",
              "Nano Creators",
              "Content Calendar",
              "Performance Reports",
              "Creator Briefs",
              "Campaign Goals",
              "Micro-Influencers",
              "Nano Creators",
              "Content Calendar",
              "Performance Reports",
              "Creator Briefs",
              "Campaign Goals",
              "Micro-Influencers",
              "Nano Creators",
              "Content Calendar",
              "Performance Reports",
              "Creator Briefs",
              "Campaign Goals",
            ].map((label, i) => (
              <div
                key={i}
                className="text-primary-foreground whitespace-nowrap bg-neutral-900/80 tracking-wider border border-neutral-700/40 p-1.5 px-3 rounded-full flex items-center justify-center gap-2 text-sm"
              >
                <span className="aspect-square text-xs font-light bg-sky-400 w-3 rounded-full " />
                {label}
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex gap-4 py-2 px-4 flex-nowrap items-start justify-start"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
          >
            {[
              "Engagement Rate",
              "Reach & Impressions",
              "Brand Awareness",
              "Sponsored Posts",
              "Story Views",
              "Conversion Rate",
              "Engagement Rate",
              "Reach & Impressions",
              "Brand Awareness",
              "Sponsored Posts",
              "Story Views",
              "Conversion Rate",
              "Engagement Rate",
              "Reach & Impressions",
              "Brand Awareness",
              "Sponsored Posts",
              "Story Views",
              "Conversion Rate",
              "Engagement Rate",
              "Reach & Impressions",
              "Brand Awareness",
              "Sponsored Posts",
              "Story Views",
              "Conversion Rate",
            ].map((label, i) => (
              <div
                key={i}
                className="text-primary-foreground whitespace-nowrap bg-neutral-900/80 tracking-wider border border-neutral-700/40 p-1.5 px-3 rounded-full flex items-center justify-center gap-2 text-sm"
              >
                <span className="aspect-square text-xs font-light bg-green-400 w-3 rounded-full " />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Transform;
