import { useScroll } from "motion/react";
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
    title: "Agency & Consultants",
    description:
      "Help clients reach their sales goals. Refer or help implement our AI sales platform to drive real growth.",
    cardClass: "bg-violet-100",
    buttonClass:
      "border-violet-300/80 bg-violet-100 text-foreground hover:bg-violet-200",
  },
  {
    title: "Affiliates",
    description:
      "Turn your network into revenue. Share Amplemarket and earn a commission on every successful sale.",
    cardClass: "bg-yellow-200",
    buttonClass:
      "border-yellow-400/80 bg-yellow-200 text-foreground hover:bg-yellow-300",
  },
  {
    title: "Communities & Creators",
    description:
      "Help your audience grow smarter. Partner with us to share Amplemarket's sales tools and drive real impact.",
    cardClass: "bg-pink-200",
    buttonClass:
      "border-pink-300/80 bg-pink-200 text-foreground hover:bg-pink-300",
  },
  {
    title: "VCs & Incubators",
    description:
      "Support your portfolio with top-tier outbound sales. Offer startups special pricing to fuel growth.",
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
    title: "Apply",
  },
  {
    number: "02.",
    title: "Get approved",
    description:
      "Once accepted, you'll get instant access to your Partner Dashboard with your personalized link, marketing materials, resources, and tools to track leads and commissions.",
  },
  {
    number: "03.",
    title: "Start earning",
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
        <h2 className="mx-auto max-w-lg text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl">
          Find the right partner
          <br />
          program for you
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {programCards.map((program) => (
            <article
              key={program.title}
              className={`flex min-h-72 flex-col rounded-2xl p-6 sm:p-7 ${program.cardClass}`}
            >
              <h3 className="text-3xl font-medium tracking-tight text-foreground">
                {program.title}
              </h3>
              <p className="mt-4 max-w-md text-xl leading-relaxed text-foreground/70">
                {program.description}
              </p>
              <Button
                type="button"
                variant="outline"
                className={`mt-auto w-fit rounded-xl px-6 py-5 text-base font-normal shadow-none ${program.buttonClass}`}
              >
                Apply for this program
              </Button>
            </article>
          ))}
        </div>
      </div>

      <div
        ref={stepsSectionRef}
        className="mx-auto mt-28 w-full max-w-2xl px-6 text-center sm:px-8"
      >
        <h3 className="text-4xl font-medium leading-tight text-foreground sm:text-5xl">
          How to become an
          <br />
          Amplemarket partner
        </h3>

        <div className="mt-12 space-y-28 sm:space-y-36">
          {steps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <div key={step.number} className="transition-colors duration-500">
                <p
                  className={`font-serif text-6xl italic leading-none ${
                    isActive ? "text-foreground/80" : "text-foreground/25"
                  }`}
                >
                  {step.number}
                </p>
                <p
                  className={`mt-3 text-5xl font-medium leading-none ${
                    isActive ? "text-foreground" : "text-foreground/30"
                  }`}
                >
                  {step.title}
                </p>

                {step.description ? (
                  <p
                    className={`mx-auto mt-10 max-w-md text-xl leading-relaxed transition-opacity duration-500 ${
                      isActive
                        ? "text-foreground/55 opacity-100"
                        : "text-foreground/25 opacity-40"
                    }`}
                  >
                    {step.description}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Find;
