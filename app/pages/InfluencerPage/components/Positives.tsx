import React from "react";
import { ChevronLeft, ChevronRight, RefreshCw, Star } from "lucide-react";

type Props = {};

const positives = [
  {
    title: "Brands come to you",
    description:
      "Offers that match your niche reach you by phone and email. You choose what to take.",
    accent: "bg-blue-500",
  },
  {
    title: "The pay is upfront",
    description:
      "Every offer shows the fee or product and exactly what to post, before you accept.",
    accent: "bg-orange-500",
  },
  {
    title: "Real, checked brands",
    description:
      "Brands are reviewed before they reach you, and the full brief is on the platform.",
    accent: "bg-amber-400",
  },
  {
    title: "Paid on time",
    description:
      "Paid campaigns pay into your account on the timeline agreed in your campaign confirmation. Barter products ship to your door.",
    accent: "bg-emerald-500",
  },
];

const Positives = (props: Props) => {
  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <h2 className="h2">
          Why creators stay on Cre8r
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {positives.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border/10 bg-card p-5"
            >
              <span
                className={`mb-5 inline-flex size-4 rotate-45 rounded-sm ${item.accent}`}
              />
              <h3 className="h3">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-normal text-muted-foreground font-light">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-3 md:items-start">
          <div className="flex items-center gap-3 md:col-span-1 md:justify-center">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border/15 bg-card text-foreground/80 transition hover:bg-secondary"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border/15 bg-card text-foreground/80 transition hover:bg-secondary"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          <div className="flex items-center gap-2 text-foreground md:col-span-2 md:justify-start">
            <RefreshCw className="size-5" />
            <span className="text-sm font-semibold">2</span>
            <div className="ml-1 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="size-4 fill-foreground text-foreground"
                />
              ))}
            </div>
          </div>

          <div className="md:col-span-1 md:justify-self-center">
            <div className="overflow-hidden rounded-xl border border-border/10 bg-card">
              <img
          loading="lazy"
          decoding="async"
                src="https://placehold.co/300x230/png"
                alt="Customer portrait"
                className="h-40 w-full object-cover"
              />
              <div className="flex items-center gap-2 px-3 py-2 text-muted-foreground">
                <span className="inline-flex size-6 items-center justify-center rounded-full border border-border/20 text-sm font-semibold text-foreground">
                  C
                </span>
                <span className="text-sm font-medium">chat metrics</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="max-w-4xl text-xl font-light leading-tight tracking-tight text-foreground md:text-2xl">
              &ldquo;Cre8r makes it incredibly easy to find brand collaborations
              that align with my content. From discovery to payment, everything
              is seamless.&rdquo;
            </p>
            <p className="mt-3 text-sm text-muted-foreground font-light">
              Creator Partner
              <span className="ml-1 font-medium text-foreground">
                Cre8r Community
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Positives;
