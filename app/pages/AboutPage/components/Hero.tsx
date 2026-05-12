import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {};

const ProofCards = [
  {
    title: "100+ Companies",
    sub_heading: "lorem ipsum",
    brand_image: "https://source.unsplash.com/random/300x200",
    color: "bg-red-300",
  },
  {
    title: "100+ Companies",
    sub_heading: "lorem ipsum",
    brand_image: "https://source.unsplash.com/random/300x200",
    color: "bg-green-300",
  },
  {
    title: "100+ Companies",
    sub_heading: "lorem ipsum",
    brand_image: "https://source.unsplash.com/random/300x200",
    color: "bg-blue-300",
  },
  {
    title: "100+ Companies",
    sub_heading: "lorem ipsum",
    brand_image: "https://source.unsplash.com/random/300x200",
    color: "bg-purple-300",
  },
  {
    title: "100+ Companies",
    sub_heading: "lorem ipsum",
    brand_image: "https://source.unsplash.com/random/300x200",
    color: "bg-sky-300",
  },
  {
    title: "100+ Companies",
    sub_heading: "lorem ipsum",
    brand_image: "https://source.unsplash.com/random/300x200",
    color: "bg-emerald-300",
  },
  {
    title: "100+ Companies",
    sub_heading: "lorem ipsum",
    brand_image: "https://source.unsplash.com/random/300x200",
    color: "bg-pink-300",
  },
  {
    title: "100+ Companies",
    sub_heading: "lorem ipsum",
    brand_image: "https://source.unsplash.com/random/300x200",
    color: "bg-indigo-300",
  },
  {
    title: "100+ Companies",
    sub_heading: "lorem ipsum",
    brand_image: "https://source.unsplash.com/random/300x200",
    color: "bg-orange-300",
  },
];

// 10 fixed positions arranged around the title dead-zone
// (title occupies roughly 35–72% vertically, 20–80% horizontally)
const POSITIONS = [
  { top: "24%", left: "8%" },
  { top: "20%", left: "36%" },
  { top: "10%", left: "64%" },
  { top: "18%", left: "88%" },
  { top: "50%", left: "5%" },
  { top: "50%", left: "92%" },
  { top: "83%", left: "8%" },
  { top: "83%", left: "36%" },
  { top: "83%", left: "64%" },
  { top: "83%", left: "88%" },
];

type Slot = { cardIndex: number | null; zIndex: 0 | 20 };

const Hero = (_props: Props) => {
  const [slots, setSlots] = useState<Slot[]>(() => {
    const initial: Slot[] = POSITIONS.map(() => ({
      cardIndex: null,
      zIndex: 0,
    }));
    const posOrder = [...Array(POSITIONS.length).keys()].sort(
      () => Math.random() - 0.5,
    );
    const cardOrder = [...Array(ProofCards.length).keys()].sort(
      () => Math.random() - 0.5,
    );
    posOrder.slice(0, 5).forEach((posIdx, i) => {
      initial[posIdx] = {
        cardIndex: cardOrder[i],
        zIndex: Math.random() > 0.5 ? 20 : 0,
      };
    });
    return initial;
  });

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 50, damping: 18 });
  const springY = useSpring(rawY, { stiffness: 50, damping: 18 });

  useEffect(() => {
    const scheduleNext = () => {
      timerRef.current = setTimeout(
        () => {
          setSlots((prev) => {
            const occupied = prev.flatMap((s, i) =>
              s.cardIndex !== null ? [i] : [],
            );
            const empty = prev.flatMap((s, i) =>
              s.cardIndex === null ? [i] : [],
            );
            if (!occupied.length || !empty.length) return prev;

            const swapCount = Math.min(
              2 + Math.floor(Math.random() * 2), // 2 or 3
              occupied.length,
              empty.length,
            );

            const shuffled = (arr: number[]) =>
              [...arr].sort(() => Math.random() - 0.5);
            const removePositions = shuffled(occupied).slice(0, swapCount);
            const fillPositions = shuffled(empty).slice(0, swapCount);

            const next = [...prev];
            const removedSet = new Set(removePositions);

            removePositions.forEach((pos) => {
              next[pos] = { cardIndex: null, zIndex: 0 };
            });

            const usedCards = new Set(
              next.flatMap((s, i) =>
                s.cardIndex !== null && !removedSet.has(i) ? [s.cardIndex] : [],
              ),
            );

            fillPositions.forEach((pos) => {
              const available = ProofCards.map((_, i) => i).filter(
                (i) => !usedCards.has(i),
              );
              if (!available.length) return;
              const newCard =
                available[Math.floor(Math.random() * available.length)];
              usedCards.add(newCard);
              next[pos] = {
                cardIndex: newCard,
                zIndex: Math.random() > 0.5 ? 20 : 0,
              };
            });

            return next;
          });
          scheduleNext();
        },
        2000 + Math.random() * 2000,
      );
    };

    scheduleNext();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center gap-4 justify-center relative overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        rawX.set(nx * 20);
        rawY.set(ny * 20);
      }}
      onMouseLeave={() => {
        rawX.set(0);
        rawY.set(0);
      }}
    >
      {POSITIONS.map((pos, posIdx) => (
        <motion.div
          key={posIdx}
          className="absolute"
          style={{
            top: pos.top,
            left: pos.left,
            x: springX,
            y: springY,
            translate: "-50% -50%",
            zIndex: slots[posIdx].zIndex,
          }}
        >
          <AnimatePresence>
            {slots[posIdx].cardIndex !== null && (
              <motion.div
                key={slots[posIdx].cardIndex}
                initial={{ opacity: 0, scale: 0.1, filter: "blur(8px)" }}
                animate={{
                  opacity: 1,
                  scale: Math.random() * 0.5 + 0.5,
                  filter: "blur(0px)",
                }}
                exit={{ opacity: 0, scale: 0.1, filter: "blur(8px)" }}
                transition={{ duration: Math.random() * 0.2 + 0.3 }}
                className={`p-4 flex flex-col gap-4 w-52 h-52 rounded-md outline outline-black/20 shadow-sm ${
                  ProofCards[slots[posIdx].cardIndex!].color
                }`}
              >
                <h3 className="text-xl font-semibold">
                  {ProofCards[slots[posIdx].cardIndex!].title}
                </h3>
                <p className="text-sm">
                  {ProofCards[slots[posIdx].cardIndex!].sub_heading}
                </p>
                <div className="h-full flex items-end">
                  <div className="text-4xl font-black">Ceros</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
      <div className="absolute z-10 inset-0 bg-background/20 backdrop-blur-xs" />
      <h2 className="text-lg font-light z-30">About Us</h2>
      <h1 className="text-6xl font-light text-center z-30">
        We help
        <br />
        companies grow
      </h1>
      <p className="text-center max-w-lg text-lg font-light z-30">
        At Cre8r.ai, we build tools that help companies find, connect with, and
        close their ideal customers.
      </p>
    </div>
  );
};

export default Hero;
