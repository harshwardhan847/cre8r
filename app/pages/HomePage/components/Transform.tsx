import {
  getValueTransition,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import React from "react";
import { Button } from "~/components/ui/button";

type Props = {};

const Transform = (props: Props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const transition = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

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
      className="min-h-screen bg-primary pt-24 flex flex-col items-center gap-8 justify-start"
    >
      <h4 className="p-1.5 scale-90 shadow bg-neutral-800 flex border border-neutral-500/20 items-center justify-center gap-2 w-min whitespace-nowrap rounded-xl pr-3 text-[12px] text-primary-foreground font-extralight">
        <span className="p-0.5 px-2 bg-linear-to-br border border-neutral-500/20 shadow from-purple-400 via-background to-orange-400 text-[11px] font-normal rounded-md text-primary">
          DUO
        </span>
        <span className="text-primary-foreground/70 font-normal tracking-wide ">
          AI Content Copilot
        </span>
      </h4>
      <h2 className="text-5xl font-light leading-none tracking-tighter text-primary-foreground text-center">
        Transform the way you
        <br /> sell with Duo Copilot
      </h2>
      <p className="max-w-md -m-4 text-muted-foreground text-center text-pretty">
        Save more than 10 hours per week with Duo’s daily
        <br /> signals, in-depth research, and multichannel outreach.
      </p>
      <Button
        className="bg-background text-foreground cursor-pointer text-sm font-normal hover:bg-white"
        size={"lg"}
      >
        Get Started
      </Button>

      <div className="w-full relative">
        <motion.div
          style={{ rotate: rotateRight, y }}
          className="absolute rounded-md origin-top-right bg-white/80 backdrop-blur-md shadow-lg z-10 w-xs flex flex-col items-start justify-center gap-1 p-4 top-1/4 right-12"
        >
          <span className="bg-green-400 rounded-sm shadow w-4 aspect-square mb-1" />
          <h6 className="font-normal text-xs text-foreground">Lorem, ipsum.</h6>
          <p className="text-xs text-muted-foreground">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem.
          </p>
        </motion.div>
        <motion.div
          style={{ y }}
          className="absolute rounded-md origin-top-right bg-white/80 backdrop-blur-md shadow-lg z-10 w-xs flex flex-col items-start justify-center gap-1 p-4 top-full right-1/2 translate-x-1/2 -translate-y-1/2"
        >
          <span className="bg-orange-400 rounded-sm shadow w-4 aspect-square mb-1" />
          <h6 className="font-normal text-xs text-foreground">Lorem, ipsum.</h6>
          <p className="text-xs text-muted-foreground">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem.
          </p>
        </motion.div>
        <motion.div
          style={{ rotate, y }}
          className="absolute rounded-md origin-top-left bg-white/80 backdrop-blur-md shadow-lg z-10 w-xs flex flex-col items-start justify-center gap-1 p-4 top-1/6 left-12"
        >
          <span className="bg-pink-400 rounded-sm shadow w-4 aspect-square mb-1" />
          <h6 className="font-normal text-xs text-foreground">Lorem, ipsum.</h6>
          <p className="text-xs text-muted-foreground">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem.
          </p>
        </motion.div>
        <motion.div className="aspect-video mx-auto max-w-6xl w-full h-full overflow-hidden mt-8 shadow rounded-lg relative backdrop-blur-lg bg-white/20">
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
      </div>
      <div className="mt-20">
        <h3 className="text-2xl font-normal text-muted-foreground text-center mb-8">
          Never miss an opportunity
        </h3>

        <div className="w-screen overflow-clip mx-auto relative py-4">
          <div className="bg-linear-to-r from-primary to-transparent w-sm h-full absolute top-0 left-0 z-10" />
          <div className="bg-linear-to-l from-primary to-transparent w-sm h-full absolute top-0 right-0 z-10" />
          <motion.div
            className="flex gap-4 py-2 px-4 flex-nowrap items-start justify-start"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="text-primary-foreground whitespace-nowrap bg-neutral-800 tracking-wider border border-neutral-500/20 p-1.5 px-2 rounded-lg flex items-center justify-center gap-2 text-sm"
              >
                <span className="aspect-square text-xs font-light bg-pink-400 w-4 rounded-sm " />
                Lorem ipsum dolor sit.
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex gap-4 py-2 px-4 flex-nowrap items-start justify-start"
            animate={{ x: [-1200, 0] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
            }}
          >
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="text-primary-foreground whitespace-nowrap bg-neutral-800 tracking-wider border border-neutral-500/20 p-1.5 px-2 rounded-lg flex items-center justify-center gap-2 text-sm"
              >
                <span className="aspect-square text-xs font-light bg-sky-400 w-4 rounded-sm " />
                Lorem ipsum dolor sit.
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex gap-4 py-2 px-4 flex-nowrap items-start justify-start"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="text-primary-foreground whitespace-nowrap bg-neutral-800 tracking-wider border border-neutral-500/20 p-1.5 px-2 rounded-lg flex items-center justify-center gap-2 text-sm"
              >
                <span className="aspect-square text-xs font-light bg-green-400 w-4 rounded-sm " />
                Lorem ipsum dolor sit.
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="mx-auto w-xl mt-24 mb-24 text-primary-foreground">
        <p className="text-4xl text-start font-normal tracking-tight font-sans border-b border-white/20 pb-6">
          "I wake up to a list of highly relevant signals and accounts, saving
          me hours on research and personalization every day. This is the future
          of sales!"
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center justify-center gap-2">
            <div className="aspect-square h-12 bg-background rounded-xl"></div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-sm text-primary-foreground font-semibold">
                John Doe
              </p>
              <p className="text-sm text-muted-foreground">CEO, Company</p>
            </div>
          </div>
          <div className="font-bold text-xl">Ceros</div>
        </div>
      </div>
    </div>
  );
};

export default Transform;
