import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {};

const faqs = [
  {
    question: "How much time do I have to respond to a campaign?",
    answer:
      "You have up to 48 hours to decide if you want to participate in a campaign on a first-come, first-served basis. This gives you enough time to review the brand, content requirements, and compensation.",
  },
  {
    question: "Can I choose my own pricing?",
    answer:
      "No, Cre8r evaluates various data sets and performance insights to determine optimal pricing for you. This ensures fair compensation based on your audience reach, engagement, and content quality.",
  },
  {
    question: "Is there a registration charge?",
    answer:
      "No, your registration at Cre8r is completely free. We're here to provide a platform that helps you escalate your growth as an influencer and earn money for the content you create.",
  },
  {
    question: "What are the requirements to join Cre8r?",
    answer:
      "You must be at least 13 years old, have an Instagram or YouTube account with 5,000-100,000 followers/subscribers, and be located in India.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Creators receive payments as per the agreed terms. For barter campaigns, you receive products. For paid campaigns, you earn a fee directly into your account.",
  },
  {
    question: "How will I know about new campaign opportunities?",
    answer:
      "Cre8r notifies you about new campaign opportunities via phone call and email. You'll receive alerts for campaigns that match your profile and interests.",
  },
];

const FAQItem = ({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-card/30"
      >
        <h3 className="text-lg font-medium tracking-tight text-foreground">
          {question}
        </h3>
        <ChevronDown
          className={`size-5 shrink-0 text-muted-foreground transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-base font-light leading-relaxed text-muted-foreground">
          {answer}
        </div>
      )}
    </div>
  );
};

const CreatorFAQ = (props: Props) => {
  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-xl font-normal leading-tight tracking-tight text-foreground/50 md:text-3xl">
            Creator FAQs
          </h2>
          <p className="mt-3 text-base font-light text-muted-foreground">
            Have questions about how Cre8r works? Find answers to commonly asked
            questions from our creator community.
          </p>
        </div>

        <div className="rounded-2xl border border-border/10 bg-card overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border/10 bg-card p-8 text-center md:p-12">
          <h3 className="text-xl font-medium text-foreground md:text-2xl">
            Still have questions?
          </h3>
          <p className="mt-3 text-base font-light text-muted-foreground">
            Reach out to our creator support team for more information.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:collabs@cre8r.ai"
              className="inline-flex items-center justify-center rounded-lg border border-border/10 bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              collabs@cre8r.ai
            </a>
            <a
              href="https://wa.me/917754900652"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              WhatsApp: +91 7754900652
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorFAQ;
