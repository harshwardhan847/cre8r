import { useState } from "react";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "Who can become an Amplemarket partner?",
    answer:
      "We welcome agencies, consultants, creators, VC firms, GTM professionals, and individuals who want to share the Amplemarket love. If you believe in the power of AI-driven sales and are passionate about helping sales teams succeed, you're a great fit.",
  },
  {
    id: 2,
    question: "How and when do I get paid?",
    answer:
      "Commissions are processed after qualifying payments are confirmed. You can track payouts in your partner dashboard and receive updates on payment timelines.",
  },
  {
    id: 3,
    question: "Can I be both a customer and a partner?",
    answer:
      "Yes. Many partners are also customers. You can promote the platform while continuing to use it for your own outbound and GTM workflows.",
  },
  {
    id: 4,
    question: "Do I need a large audience to join?",
    answer:
      "No. You do not need a massive audience. What matters most is trusted relationships and the ability to connect Amplemarket with the right teams.",
  },
  {
    id: 5,
    question: "What support will I get as a partner?",
    answer:
      "Partners get access to enablement materials, campaign resources, and guidance from the partner team to help you create successful referrals.",
  },
  {
    id: 6,
    question: "How much have partners earned so far?",
    answer:
      "Our partner community has generated significant recurring commissions, with top performers scaling steadily through qualified referrals.",
  },
];

const Faq = () => {
  const [openId, setOpenId] = useState<number>(1);

  return (
    <section className="bg-muted py-20 sm:py-24">
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-8">
        <h2 className="text-center text-3xl font-normal leading-tight text-foreground sm:text-5xl">
          Frequently
          <br />
          asked questions
        </h2>

        <div className="mt-10">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="border-b border-foreground/8 py-2">
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
                  <span className="ml-4 text-xl leading-none text-foreground/80">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-4 pb-3 pt-4 text-sm leading-relaxed text-foreground/55 sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
