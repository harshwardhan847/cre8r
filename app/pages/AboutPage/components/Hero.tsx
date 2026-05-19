import { motion } from "motion/react";

type Props = {};

const proofItems = [
  {
    value: "4Mn+",
    label: "Creator profiles",
    className: "left-4 top-24 sm:left-10 lg:left-[8%] lg:top-[22%]",
  },
  {
    value: "500Mn+",
    label: "Campaign views",
    className: "right-4 top-28 sm:right-10 lg:right-[9%] lg:top-[24%]",
  },
  {
    value: "6000+",
    label: "Content pieces",
    className: "left-6 bottom-24 sm:left-16 lg:left-[15%] lg:bottom-[18%]",
  },
  {
    value: "200+",
    label: "Campaigns delivered",
    className: "right-6 bottom-24 sm:right-16 lg:right-[14%] lg:bottom-[18%]",
  },
];

const orbitDots = [
  "left-[14%] top-[34%] bg-rose-300",
  "right-[18%] top-[38%] bg-emerald-300",
  "left-[27%] bottom-[30%] bg-amber-200",
  "right-[30%] bottom-[29%] bg-violet-300",
];

const Hero = (_props: Props) => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-28 sm:px-6 lg:px-12">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-linear-to-r from-transparent via-foreground/15 to-transparent" />
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-foreground/12 to-transparent" />

      <motion.div
        className="absolute h-[520px] w-[520px] rounded-full border border-foreground/8 sm:h-[640px] sm:w-[640px]"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{
          opacity: { duration: 0.7, ease: "easeOut" },
          scale: { duration: 0.7, ease: "easeOut" },
          rotate: { duration: 46, ease: "linear", repeat: Infinity },
        }}
      />
      <motion.div
        className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-foreground/10 sm:h-[460px] sm:w-[460px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1, rotate: -360 }}
        transition={{
          opacity: { duration: 0.7, ease: "easeOut", delay: 0.1 },
          scale: { duration: 0.7, ease: "easeOut", delay: 0.1 },
          rotate: { duration: 38, ease: "linear", repeat: Infinity },
        }}
      />

      {orbitDots.map((dot) => (
        <motion.div
          key={dot}
          className={`absolute hidden h-3 w-3 rounded-full shadow-sm sm:block ${dot}`}
          animate={{ y: [0, -8, 0], opacity: [0.65, 1, 0.65] }}
          transition={{
            duration: 4.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      ))}

      {proofItems.map((item, index) => (
        <motion.div
          key={item.value}
          className={`absolute hidden w-44 rounded-xl border border-border/10 bg-white/75 p-4 shadow-sm backdrop-blur-sm sm:block ${item.className}`}
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: [0, -6, 0], filter: "blur(0px)" }}
          transition={{
            opacity: { duration: 0.45, delay: 0.15 + index * 0.08 },
            filter: { duration: 0.45, delay: 0.15 + index * 0.08 },
            y: {
              duration: 5.5 + index * 0.4,
              ease: "easeInOut",
              repeat: Infinity,
              delay: index * 0.2,
            },
          }}
        >
          <div className="mb-5 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-foreground" />
            <span className="h-2 w-2 rounded-full bg-foreground/25" />
            <span className="h-2 w-2 rounded-full bg-foreground/15" />
          </div>
          <p className="text-3xl font-light leading-none text-foreground">
            {item.value}
          </p>
          <p className="mt-2 text-sm font-light leading-tight text-muted-foreground">
            {item.label}
          </p>
        </motion.div>
      ))}

      <motion.div
        className="relative z-10 flex max-w-5xl flex-col items-center gap-4 text-center"
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <h2 className="text-lg font-light">About Us</h2>
        <h1 className="text-5xl font-light leading-tight text-center sm:text-6xl">
          Reimagining Influencer Marketing
          <br />
          One campaign at a time
        </h1>
        <p className="max-w-lg text-center text-lg font-light text-muted-foreground">
          From concept to scale, we help brands discover top influencers, design
          impactful campaigns, and grow their reach effortlessly.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
