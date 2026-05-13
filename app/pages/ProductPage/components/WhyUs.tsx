import { CircleDashed, MoveUpRight, UsersRound } from "lucide-react";
import { motion } from "motion/react";

type ReasonCard = {
  title: string;
  description: string;
  Icon: typeof CircleDashed;
};

const reasonCards: ReasonCard[] = [
  {
    title: "Find & track 4mn+ creators",
    description:
      "Filter by engagement metrics, niche, audience demographics, and more to shortlist creators faster.",
    Icon: MoveUpRight,
  },
  {
    title: "Advanced creator briefing",
    description:
      "Set clear goals and share detailed guidelines with an intuitive briefing flow built for campaign teams.",
    Icon: CircleDashed,
  },
  {
    title: "Live performance tracking",
    description:
      "Make data-driven decisions with every click, every view, and every comment from one central dashboard.",
    Icon: UsersRound,
  },
];

const brandNames = [
  "Beauty",
  "Fashion",
  "Food",
  "Beverage",
  "Health",
  "Fitness",
  "Travel",
  "Retail",
];

const WhyUs = () => {
  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 sm:px-10">
        <motion.h2
          className="max-w-sm text-center text-3xl font-medium leading-tight sm:text-5xl"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.7 }}
        >
          How it
          <br />
          works?
        </motion.h2>

        <div className="mt-10 grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasonCards.map(({ title, description, Icon }, index) => (
            <motion.article
              key={title}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/10 p-4"
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              viewport={{ once: true, amount: 0.45 }}
            >
              <div className="mb-6 flex aspect-video w-full items-center justify-center rounded-lg bg-primary-foreground/5">
                <Icon
                  className="h-9 w-9 text-primary-foreground"
                  strokeWidth={1.4}
                />
              </div>
              <h3 className="text-xl font-normal text-primary-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60">
                {description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-20 w-full max-w-3xl"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.45 }}
        >
          <blockquote className="text-3xl font-light leading-tight sm:text-4xl">
            "Understand your audience through voices they trust. We prioritize
            authentic influencer relationships that truly represent your brand
            and connect with your audience."
          </blockquote>

          <div className="mt-4 h-px w-full bg-primary-foreground/15" />

          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/20 text-xs font-semibold text-primary-foreground">
              BS
            </div>
            <div>
              <p className="text-sm font-medium text-primary-foreground">
                Cre8r Team
              </p>
              <p className="text-xs text-primary-foreground/70">
                Intelligent influencer matchmaking powered by AI
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 w-full">
          <motion.p
            className="text-center text-lg mb-12 mt-24 text-primary-foreground/70"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
          >
            Industries we actively support
          </motion.p>
          <div className="mt-6 grid grid-cols-2 items-center gap-x-6 gap-y-4 text-center text-lg font-semibold text-primary-foreground/80 sm:grid-cols-4 lg:grid-cols-8">
            {brandNames.map((brand, index) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                viewport={{ once: true, amount: 0.8 }}
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
