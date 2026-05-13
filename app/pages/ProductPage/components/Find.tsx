import { motion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "~/components/ui/button";

type ProgramCard = {
  title: string;
  description: string;
  cardClass: string;
  buttonClass: string;
};

const programCards: ProgramCard[] = [
  {
    title: "Find & Track 4mn+ Creators",
    description:
      "Filter by engagement metrics, niche, audience demographics and more to discover the right voices quickly.",
    cardClass: "bg-violet-100",
    buttonClass:
      "border-violet-300/80 bg-violet-100 text-foreground hover:bg-violet-200",
  },
  {
    title: "Advanced Creator Briefing",
    description:
      "Set clear goals and share detailed campaign guidelines with a structured briefing system.",
    cardClass: "bg-yellow-200",
    buttonClass:
      "border-yellow-400/80 bg-yellow-200 text-foreground hover:bg-yellow-300",
  },
  {
    title: "Intelligent Matchmaking",
    description:
      "Our AI analyses creator profiles, audience demographics and themes to match campaigns with precision.",
    cardClass: "bg-pink-200",
    buttonClass:
      "border-pink-300/80 bg-pink-200 text-foreground hover:bg-pink-300",
  },
  {
    title: "Live Performance Tracking",
    description:
      "Track every click, view and comment in one place to optimize performance while campaigns are live.",
    cardClass: "bg-green-300",
    buttonClass:
      "border-green-400/80 bg-green-300 text-foreground hover:bg-green-400",
  },
];

type Step = {
  number: string;
  title: string;
  description?: string;
};

const steps: Step[] = [
  {
    number: "01.",
    title: "Sign up & complete your profile",
  },
  {
    number: "02.",
    title: "Connect with brands",
    description:
      "Our AI helps you connect with brands that fit your audience and content so you can move faster.",
  },
  {
    number: "03.",
    title: "Land dream collabs",
    description:
      "Partner with top brands, boost engagement, and grow your influence with every successful collaboration.",
  },
];

const Find = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stepsSectionRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latestProgress) => {
      const rawIndex = Math.round(latestProgress * (steps.length - 1));
      const nextIndex = Math.min(steps.length - 1, Math.max(0, rawIndex));

      setActiveStep((previousIndex) =>
        previousIndex === nextIndex ? previousIndex : nextIndex,
      );
    });
  }, [scrollYProgress]);

  return (
    <section className="bg-muted py-20 sm:py-24 min-h-screen">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">
        <motion.h2
          className="mx-auto max-w-lg text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl"
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Automate Influencer Marketing
          <br />
          to Drive ROI
        </motion.h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {programCards.map((program, index) => (
            <motion.article
              key={program.title}
              className={`flex min-h-72 flex-col rounded-2xl p-6 sm:p-7 ${program.cardClass}`}
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: index * 0.06,
              }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <h3 className="text-3xl font-medium tracking-tight text-foreground">
                {program.title}
              </h3>
              <p className="mt-4 max-w-md text-xl leading-relaxed text-foreground/70">
                {program.description}
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="button"
                  variant="outline"
                  className={`mt-auto w-fit rounded-xl px-6 py-5 text-base font-normal shadow-none ${program.buttonClass}`}
                >
                  Request a call back
                </Button>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>

      <div
        ref={stepsSectionRef}
        className="mx-auto mt-28 w-full max-w-2xl px-6 text-center sm:px-8"
      >
        <motion.h3
          className="text-4xl font-medium leading-tight text-foreground sm:text-5xl"
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Here&apos;s how
          <br />
          to start
        </motion.h3>

        <div className="mt-12 space-y-28 sm:space-y-36">
          {steps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <motion.div
                key={step.number}
                className="transition-colors duration-500"
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                viewport={{ once: true, amount: 0.35 }}
                animate={{ opacity: isActive ? 1 : 0.82 }}
              >
                <motion.p
                  className={`font-serif text-6xl italic leading-none ${
                    isActive ? "text-foreground/80" : "text-foreground/25"
                  }`}
                  animate={{ y: isActive ? 0 : 2 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.number}
                </motion.p>
                <motion.p
                  className={`mt-3 text-5xl font-medium leading-none ${
                    isActive ? "text-foreground" : "text-foreground/30"
                  }`}
                  animate={{ scale: isActive ? 1 : 0.995 }}
                  transition={{ duration: 0.28 }}
                >
                  {step.title}
                </motion.p>

                {step.description ? (
                  <motion.p
                    className={`mx-auto mt-10 max-w-md text-xl leading-relaxed transition-opacity duration-500 ${
                      isActive
                        ? "text-foreground/55 opacity-100"
                        : "text-foreground/25 opacity-40"
                    }`}
                    animate={{ y: isActive ? 0 : 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.description}
                  </motion.p>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Find;
