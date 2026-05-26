import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";
import { Button } from "~/components/ui/button";

type PayoutCard = {
  title: string;
  label: string;
  badge: string;
  bgClass: string;
  textClass: string;
  avatarClass: string;
  startX: string;
  startY: string;
  hiddenOnMobile?: boolean;
};

const cards: PayoutCard[] = [
  {
    title: "4.1Mn+",
    label: "Creators",
    badge: "F",
    bgClass: "border-rose-300 border-t-4",
    textClass: "text-foreground",
    avatarClass: "bg-sky-500",
    startX: "clamp(-500px, -36vw, -220px)",
    startY: "-550px",
  },
  {
    title: "Audience",
    label: "Deep filters",
    badge: "A",
    bgClass: "border-emerald-300 border-t-4",
    textClass: "text-foreground",
    avatarClass: "bg-sky-500",
    startX: "clamp(-560px, -42vw, -260px)",
    startY: "-370px",
    hiddenOnMobile: true,
  },
  {
    title: "Briefs",
    label: "Clear goals",
    badge: "B",
    bgClass: "border-amber-200 border-t-4",
    textClass: "text-foreground",
    avatarClass: "bg-sky-500",
    startX: "clamp(-420px, -30vw, -210px)",
    startY: "-215px",
    hiddenOnMobile: true,
  },
  {
    title: "200+",
    label: "Campaigns",
    badge: "C",
    bgClass: "border-violet-300 border-t-4",
    textClass: "text-foreground",
    avatarClass: "bg-sky-500",
    startX: "0px",
    startY: "-95px",
  },
  {
    title: "AI Match",
    label: "Right creators",
    badge: "AI",
    bgClass: "border-rose-300 border-t-4",
    textClass: "text-foreground",
    avatarClass: "bg-sky-500",
    startX: "clamp(500px, 44vw, 640px)",
    startY: "-550px",
  },
  {
    title: "Track",
    label: "Live results",
    badge: "T",
    bgClass: "border-emerald-300 border-t-4",
    textClass: "text-foreground",
    avatarClass: "bg-sky-500",
    startX: "clamp(560px, 48vw, 260px)",
    startY: "-370px",
    hiddenOnMobile: true,
  },
  {
    title: "ROI",
    label: "Performance",
    badge: "R",
    bgClass: "border-amber-200 border-t-4",
    textClass: "text-foreground",
    avatarClass: "bg-sky-500",
    startX: "clamp(420px, 36vw, 210px)",
    startY: "-215px",
    hiddenOnMobile: true,
  },
];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.25,
  });

  return (
    <section className="">
      <div
        ref={heroRef}
        className="relative mx-auto min-h-[860px] w-full max-w-7xl px-6 sm:px-10 md:min-h-screen lg:px-16"
      >
        <motion.div
          className="relative z-20 mx-auto flex max-w-162.5 flex-col items-center pt-28 text-center md:pt-48"
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-[13px] font-medium tracking-sm text-muted-foreground">
            INFLUENCER PLATFORM
          </p>
          <h1 className="mt-4 text-balance text-[42px] font-normal leading-[0.96] text-foreground sm:text-[54px] md:text-5xl">
            Let AI build your next influencer campaign
          </h1>
          <p className="mt-6 max-w-125 text-pretty text-lg leading-[1.35] text-muted-foreground">
            Discover 4.1mn+ creators. Execute campaigns. Track performance - all
            in one place.
          </p>
          <Button
            type="button"
            variant={"default"}
            size={"lg"}
            className="mt-10 h-12 px-6 text-lg font-light"
          >
            Request a call back
          </Button>
        </motion.div>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[780px] origin-top scale-90 sm:scale-95 lg:scale-100">
          {cards.map((card) => (
            <PayoutMotionCard
              key={card.title}
              card={card}
              scrollYProgress={smoothProgress}
            />
          ))}
        </div>
      </div>
      <Stats />
    </section>
  );
};

const PayoutMotionCard = ({
  card,
  scrollYProgress,
}: {
  card: PayoutCard;
  scrollYProgress: MotionValue<number>;
}) => {
  const x = useTransform(
    scrollYProgress,
    [0, 0.82, 1],
    [card.startX, "0px", "0px"],
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.82, 1],
    [card.startY, "300px", "300px"],
  );
  const scale = useTransform(scrollYProgress, [0, 0.72, 1], [1, 0.58, 0.0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.72, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.65, 1], [0, 20, 90]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  return (
    <motion.div
      className={`absolute left-1/2 top-175 z-10 -ml-16 h-32 w-32 rounded-[18px] p-3 shadow-[0_1px_0_rgba(0,0,0,0.02)] bg-white  ${card.bgClass} ${card.textClass} ${card.hiddenOnMobile ? "hidden sm:block" : "block"}`}
      style={{ x, y, scale, opacity, filter }}
    >
      <div className="flex h-full flex-col items-center justify-center pb-2 pt-2 text-center">
        {/* <div className="rounded-full bg-white/55 p-0.5">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/70 text-[10px] font-medium text-white ${card.avatarClass}`}
          >
            {card.badge}
          </div>
        </div> */}
        <div>
          <p className="text-xl font-bold leading-none">{card.title}</p>
          <p className="mt-2 text-[11px] font-medium uppercase text-foreground/60">
            {card.label}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.h2
            className="text-9xl font-normal font-mono text-foreground"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            200+
          </motion.h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Campaigns delivered
          </p>
        </motion.div>

        <motion.div
          className="mt-20 mx-auto max-w-2xl pt-12"
          initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <blockquote className="text-start border-b border-border pb-8 ">
            <p className="text-3xl font-normal leading-relaxed text-foreground">
              "We prioritize authentic influencer relationships that truly
              represent your brand and connect with your audience."
            </p>
          </blockquote>

          <div className="mt-4 flex w-full flex-col items-center justify-between gap-6 sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex items-center gap-3 w-full">
              <div className="h-10 w-10 rounded-full bg-slate-300" />
              <div className="text-left">
                <p className="font-medium text-foreground">Cre8r Team</p>
                <p className="text-sm text-muted-foreground">
                  Influencer Marketing Platform
                </p>
              </div>
            </div>
            <div className="font-bold whitespace-nowrap text-foreground">
              CRE8R.AI
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
