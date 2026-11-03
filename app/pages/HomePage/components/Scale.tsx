const rollouts = [
  {
    title: "Tier-wise rollouts",
    description:
      "Celebrities for reach and nano creators for trust, launched together.",
    accent: "bg-violet-400",
  },
  {
    // Non-breaking hyphen keeps "language‑wise" on one line.
    title: "Regional & language\u2011wise",
    description:
      "Creators who speak your customers' language, with AI checks on regional scripts.",
    accent: "bg-emerald-400",
  },
  {
    title: "Hyperlocal & retail",
    description:
      "Pin-code creator mapping, store-visit campaigns and retail launches.",
    accent: "bg-amber-400",
  },
];

const Scale = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-background border-t border-border/10">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col gap-8 md:gap-12">
        <h2 className="h2 text-center max-w-3xl mx-auto text-balance">
          Run hundreds of creators across cities from one dashboard
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {rollouts.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border/10 bg-white p-6 shadow-sm"
            >
              <span
                className={`mb-5 inline-flex size-4 rotate-45 rounded-sm ${item.accent}`}
              />
              <h3 className="h3">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scale;
