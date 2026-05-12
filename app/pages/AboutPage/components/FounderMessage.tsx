import { Play, PartyPopper } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { BlurCounter } from "../../../components/ui/blur-counter";

type Stat = {
  entries: {
    value: string;
    subheading: string;
  }[];
};

type FounderMessageData = {
  name: string;
  title: string;
  videoThumbnail: string;
};

const founderData: FounderMessageData = {
  name: "João Batalha",
  title: "CEO & Co-founder at Amplemarket",
  videoThumbnail:
    "https://placehold.co/1280x720/b8956f/d4b5a0?text=Founder+Video",
};

const stats: Stat[] = [
  {
    entries: [
      { value: "70M+", subheading: "weekly data updates" },
      { value: "74M+", subheading: "weekly profile enrichments" },
      { value: "78M+", subheading: "live contact signal refreshes" },
      { value: "82M+", subheading: "intent events processed weekly" },
    ],
  },
  {
    entries: [
      { value: "100+", subheading: "buying signals" },
      { value: "120+", subheading: "intent signals tracked" },
      { value: "140+", subheading: "trigger types monitored" },
      { value: "160+", subheading: "pipeline signal combinations" },
    ],
  },
  {
    entries: [
      { value: "<3%", subheading: "email bounce rate" },
      { value: "2.8%", subheading: "average weekly bounce rate" },
      { value: "2.5%", subheading: "verified outbound bounce rate" },
      { value: "2.2%", subheading: "best campaign bounce rate" },
    ],
  },
  {
    entries: [
      { value: "43%", subheading: "more interest from AI leads" },
      { value: "47%", subheading: "higher reply rate from AI segments" },
      { value: "52%", subheading: "more meetings from warm signals" },
      { value: "58%", subheading: "pipeline lift from AI prospecting" },
    ],
  },
];

const FounderMessage = () => {
  const [activeEntryIndexes, setActiveEntryIndexes] = useState<number[]>(
    stats.map(() => 0),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveEntryIndexes((prevIndexes) =>
        prevIndexes.map((prevIndex, statIndex) => {
          const entryCount = stats[statIndex]?.entries.length ?? 1;

          if (entryCount <= 1) {
            return prevIndex;
          }

          let nextIndex = Math.floor(Math.random() * entryCount);

          // Avoid repeating the same entry so every tick visibly changes content.
          if (nextIndex === prevIndex) {
            nextIndex = (nextIndex + 1) % entryCount;
          }

          return nextIndex;
        }),
      );
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="w-full py-16 md:pb-24 md:pt-0"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-260">
        {/* Decoration Icon */}
        <motion.div
          className="absolute right-8 top-32 md:right-16"
          initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <PartyPopper size={56} strokeWidth={1.5} className="text-[#999]" />
        </motion.div>

        {/* Video Card */}
        <motion.div
          className="relative rounded-2xl overflow-hidden bg-linear-to-r from-[#a89080] via-[#b8956f] to-[#c9a876] shadow-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          {/* Video Placeholder */}
          <div className="relative aspect-video bg-[#b8956f]">
            <img
              src={founderData.videoThumbnail}
              alt="Founder message video"
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Play Button Overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm cursor-pointer group"
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <motion.div
                className="bg-white/90 p-4 rounded-full"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Play
                  size={32}
                  fill="currentColor"
                  className="text-[#1a1a1a]"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Founder Info Overlay */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent px-6 py-6 md:px-8 md:py-8"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            <p className="text-xl md:text-2xl font-semibold text-white">
              {founderData.name}
            </p>
            <p className="text-sm md:text-base text-white/80">
              {founderData.title}
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const currentEntry = stat.entries[activeEntryIndexes[index] ?? 0];

            return (
              <motion.div
                key={`${index}-${stat.entries[0]?.subheading ?? "stat"}`}
                className="text-center"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: 0.25 + index * 0.06,
                }}
              >
                <BlurCounter
                  value={currentEntry?.value ?? ""}
                  duration={0.6}
                  className="block text-3xl md:text-4xl font-normal text-[#191919]"
                />
                <BlurCounter
                  value={currentEntry?.subheading ?? ""}
                  duration={0.6}
                  className="block text-xs md:text-sm text-[#9f9f9f] mt-2"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default FounderMessage;
