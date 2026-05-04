import { useScroll, motion, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
type Props = {};

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
      className="aspect-video max-w-7xl w-full h-full p-4 mt-24 rounded-lg overflow-hidden relative backdrop-blur-lg bg-white/20"
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ozwfKTi461k?si=MGfoGHfWzBYdxScR"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full object-cover rounded-lg"
      ></iframe>
    </motion.div>
  );
};

export default VideoExample;
