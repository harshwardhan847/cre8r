import { useScroll, motion, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
type Props = {};

const videos = [
  "https://www.youtube.com/embed/VIE2Ri2DQJg",
  "https://www.youtube.com/embed/m8lRhHOiQro",
  "https://www.youtube.com/embed/UT6vi65IP64",
  "https://www.youtube.com/embed/VIE2Ri2DQJg",
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
      className="grid grid-cols-4 gap-6 max-w-7xl w-full h-full p-6 mt-24 rounded-2xl relative backdrop-blur-md bg-white/30 border border-white/20 shadow-lg"
    >
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ozwfKTi461k?si=MGfoGHfWzBYdxScR"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full object-cover rounded-lg"
      ></iframe> */}
      {videos?.map((video) => (
        <iframe
          width="560"
          height="315"
          src={`${video}?autoplay=1&mute=1&loop=1&playlist=${video.split("/").slice(-1)[0]}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={false}
          className="w-full h-full object-cover rounded-lg aspect-9/16"
        />
      ))}
    </motion.div>
  );
};

export default VideoExample;
