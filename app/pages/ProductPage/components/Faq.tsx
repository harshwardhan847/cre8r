import { motion } from "motion/react";
import { useState } from "react";
import { CONSTANTS } from "~/constants";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = CONSTANTS.FAQS.brands.map((faq, i) => ({
  id: i + 1,
  ...faq,
}));

const Faq = () => {
  const [openId, setOpenId] = useState<number>(1);

  return (
    <section className=" py-20 sm:py-24">
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

                {/* Kept in the DOM while collapsed so crawlers read every answer. */}
                <motion.div
                  initial={false}
                  animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-4 pb-3 pt-4 text-sm leading-relaxed text-foreground/55 sm:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
