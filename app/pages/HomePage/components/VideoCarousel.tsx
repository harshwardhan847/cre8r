import { motion, useSpring, useTransform, useScroll } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";

type Props = {};

const videos = [
  "https://www.youtube.com/embed/VIE2Ri2DQJg",
  "https://www.youtube.com/embed/m8lRhHOiQro",
  "https://www.youtube.com/embed/UT6vi65IP64",
  "https://www.youtube.com/embed/VIE2Ri2DQJg",
  "https://www.youtube.com/embed/m8lRhHOiQro",
  "https://www.youtube.com/embed/UT6vi65IP64",
];

const brandLogos = [
  { name: "Myntra", letter: "M" },
  { name: "Nykaa", letter: "N" },
  { name: "Boat", letter: "b" },
  { name: "Mamaearth", letter: "M" },
  { name: "WOW Science", letter: "W" },
  { name: "Plum", letter: "P" },
  { name: "Pilgrim", letter: "Pi" },
  { name: "Minimalist", letter: "Mi" },
  { name: "Decathlon", letter: "D" },
  { name: "Lenskart", letter: "L" },
];

const VideoCarousel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawScale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const scale = useSpring(rawScale, { stiffness: 100, damping: 30, mass: 0.5 });

  return (
    <div ref={ref} className="w-full mt-24">
      {/* Section label */}
      <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6 px-4">
        Creator content powered by Cre8r
      </p>

      {/* Auto-scrolling carousel */}
      <motion.div style={{ scale }} className="w-full overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-4 px-8"
          animate={{ x: [0, -1800] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...videos, ...videos].map((video, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-48 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-lg"
            >
              <div className="aspect-[9/16] w-full overflow-hidden relative bg-neutral-900">
                <iframe
                  src={`${video}?autoplay=1&mute=1&loop=1&playlist=${video.split("/").slice(-1)[0]}&controls=0&modestbranding=1`}
                  title={`Creator video ${i}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                  className="w-full h-full object-cover pointer-events-none scale-110"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Brand Logos Scrolling Section */}
      <div className="mt-16 w-full">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Trusted by leading brands
        </p>
        <div className="w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-6 px-8 items-center"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center font-bold text-sm text-primary/60 group-hover:bg-primary/10 transition-colors">
                  {brand.letter}
                </div>
                <span className="text-sm font-medium text-foreground/70 whitespace-nowrap">{brand.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
