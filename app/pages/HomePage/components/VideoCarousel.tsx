import { motion, useSpring, useTransform, useScroll } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";

type Props = {};

const videos = [
  { url: "https://www.youtube.com/embed/PNFbo5tpO9c", brand: "Reebok" },
  { url: "https://www.youtube.com/embed/MjfTaozFBuE", brand: "Reebok" },
  { url: "https://www.youtube.com/embed/Kg3YlLT9Fys", brand: "Reebok" },
  { url: "https://www.youtube.com/embed/E-Ge8ehnIE8", brand: "IDFC" },
  { url: "https://www.youtube.com/embed/2Gq2mI7RySk", brand: "Bontress Pro" },
  { url: "https://www.youtube.com/embed/1-7BVYDIlRA", brand: "Reequil" },
  { url: "https://www.youtube.com/embed/zfS6wiQWjXc", brand: "Reequil" },
  { url: "https://www.youtube.com/embed/e3TPXyF-jP0", brand: "Reequil" },
  { url: "https://www.youtube.com/embed/4GQGr17Ace4", brand: "Fortune" },
  { url: "https://www.youtube.com/embed/8qNf9_hYSkA", brand: "Fortune" },
];

const brandLogos = [
  { name: "Reebok", letter: "R" },
  { name: "IDFC", letter: "I" },
  { name: "Bontress Pro", letter: "B" },
  { name: "Reequil", letter: "R" },
  { name: "Fortune", letter: "F" },
  { name: "Reebok", letter: "R" },
  { name: "IDFC", letter: "I" },
  { name: "Bontress Pro", letter: "B" },
  { name: "Reequil", letter: "R" },
  { name: "Fortune", letter: "F" },
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
          animate={{ x: [0, -2080] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          {[...videos, ...videos].map((video, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-48 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-lg relative group/card"
            >
              <div className="aspect-[9/16] w-full overflow-hidden relative bg-neutral-900">
                <iframe
                  src={`${video.url}?autoplay=1&mute=1&loop=1&playlist=${video.url.split("/").slice(-1)[0]}&controls=0&modestbranding=1`}
                  title={`Creator video ${i}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                  className="w-full h-full object-cover pointer-events-none scale-110"
                />
                {/* Floating Brand Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white px-2.5 py-1 rounded-full border border-white/10 z-20 shadow-sm opacity-90 group-hover/card:opacity-100 transition-opacity">
                  {video.brand}
                </div>
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
