import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export type FaqEntry = {
  question: string;
  answer: string;
};

type FaqPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  faqs: FaqEntry[];
  /** Email shown in the "still have questions" card. */
  contactEmail: string;
  contactNumber: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; to: string };
};

/**
 * Shared layout behind /faq-brands and /faq-influencers — both were standalone
 * pages on the old site, so they each keep their own URL here.
 */
const FaqPage = ({
  eyebrow,
  title,
  description,
  faqs,
  contactEmail,
  contactNumber,
  primaryCta,
  secondaryCta,
}: FaqPageProps) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-3xl px-6 pt-32 pb-8 sm:px-8 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pb-12 sm:px-8">
        <div className="mt-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                className="border-b border-foreground/8 py-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index, 8) * 0.04 }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-start justify-between gap-4 rounded-2xl px-4 py-3 text-left transition-colors ${
                    isOpen ? "bg-white/60" : "hover:bg-white/40"
                  }`}
                >
                  <div className="flex min-w-0 items-start gap-3">
                    <span
                      className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                        isOpen
                          ? "bg-foreground text-background"
                          : "bg-foreground/10 text-foreground/35"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="text-base font-medium text-foreground/85 sm:text-lg">
                      {item.question}
                    </span>
                  </div>
                  <motion.span
                    className="ml-2 shrink-0 text-xl leading-none text-foreground/80"
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
                      <p className="px-4 pb-3 pl-12 pt-2 text-sm leading-relaxed text-foreground/55 sm:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 rounded-3xl border border-border/20 bg-card p-8 text-center md:p-12">
          <h2 className="text-xl font-medium text-foreground md:text-2xl">
            Still have questions?
          </h2>
          <p className="mt-3 text-base font-light text-muted-foreground">
            Talk to the team — we usually reply the same working day.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {primaryCta.label}
              </a>
            </Button>
            {secondaryCta ? (
              <Button variant="outline" size="lg" asChild>
                <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-6">
            <a
              href={`mailto:${contactEmail}`}
              className="transition-colors hover:text-foreground"
            >
              {contactEmail}
            </a>
            <a
              href={`tel:${contactNumber.replace(/\s/g, "")}`}
              className="transition-colors hover:text-foreground"
            >
              {contactNumber}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FaqPage;
