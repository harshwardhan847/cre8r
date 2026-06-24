import { useScroll, motion, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

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

const VideoExample = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  // 👉 Add smoothing here
  const scale = useSpring(rawScale, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  return (
    <motion.div
      style={{
        scale: scale,
      }}
      ref={ref}
      className="max-w-7xl w-full p-6 mt-24 rounded-2xl relative backdrop-blur-md bg-white/10 border border-white/20 shadow-lg overflow-hidden"
    >
      {/* Edge gradient overlays for smooth fade out */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white/10 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white/10 to-transparent z-10 pointer-events-none" />

      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-6 px-4"
          animate={{ x: [0, -2160] }} // 10 cards * (192px width + 24px gap) = 2160px
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...videos, ...videos].map((video, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-48 rounded-xl overflow-hidden bg-neutral-900 aspect-9/16 relative shadow-md group/card "
            >
              <iframe
                width="560"
                height="315"
                src={`${video.url}?autoplay=1&mute=1&loop=1&playlist=${video.url.split("/").slice(-1)[0]}&controls=0&modestbranding=0`}
                title={`YouTube video player ${idx}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                className="w-full h-full object-cover pointer-events-none scale-105"
              />
              {/* Floating Brand Badge */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white px-2.5 py-1 rounded-full border border-white/10 z-20 shadow-sm opacity-90 group-hover/card:opacity-100 transition-opacity">
                {video.brand}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoExample;

