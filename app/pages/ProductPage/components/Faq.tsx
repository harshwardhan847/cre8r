import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "How long does it take for a campaign to go live?",
    answer:
      "If we have to capture the entire project from finalizing the influencer pool, it typically takes 2-4 weeks from influencer discovery, selection, payments, and product shipping to the campaign going live.",
  },
  {
    id: 2,
    question: "What industries does Cre8r focus on?",
    answer:
      "Cre8r primarily works in the beauty, fashion, food, beverage, health, fitness, travel and retail industries.",
  },
  {
    id: 3,
    question: "How does Cre8r ensure a high-quality creator network?",
    answer:
      "Cre8r's vetting process thoroughly screens and onboards only creators who produce relevant, trustworthy and high-value content.",
  },
  {
    id: 4,
    question: "What is Cre8r's revenue model?",
    answer:
      "For barter campaigns, Cre8r charges a fixed platform fee per influencer. For paid campaigns, the margins are bundled in the influencer pricing.",
  },
  {
    id: 5,
    question: "How do brands communicate with influencers?",
    answer:
      "All communication happens through the Cre8r platform, eliminating the need for emails or DMs. Brands can provide briefs, and influencers share content for approval.",
  },
  {
    id: 6,
    question: "What happens if a brand doesn't like the influencer content?",
    answer:
      "Brands can reject content if it doesn't align with their requirements. They get two rounds of iterations with the influencer to provide feedback.",
  },
];

const Faq = () => {
  const [openId, setOpenId] = useState<number>(1);

  return (
    <section className="bg-muted py-20 sm:py-24">
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-8">
        <motion.h2
          className="text-center text-3xl font-normal leading-tight text-foreground sm:text-5xl"
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Frequently
          <br />
          asked questions
        </motion.h2>

        <div className="mt-10">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                className="border-b border-foreground/8 py-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? 0 : item.id)}
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition-colors ${
                    isOpen ? "bg-white/60" : "hover:bg-white/40"
                  }`}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-semibold ${
                        isOpen
                          ? "bg-foreground text-background"
                          : "bg-foreground/10 text-foreground/35"
                      }`}
                    >
                      {item.id}
                    </span>
                    <span className="truncate text-lg font-medium text-foreground/85 sm:text-xl">
                      {item.question}
                    </span>
                  </div>
                  <motion.span
                    className="ml-4 text-xl leading-none text-foreground/80"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {isOpen ? "-" : "+"}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-3 pt-4 text-sm leading-relaxed text-foreground/55 sm:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
