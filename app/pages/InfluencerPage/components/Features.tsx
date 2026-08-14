import React from "react";
import { motion, useInView, animate } from "motion/react";
import {
  Activity,
  CheckCircle2,
  Sparkles,
  Target,
  Users,
  Wallet,
} from "lucide-react";

type Props = {};

const featureRows = [
  {
    title: "Sign up & complete your profile",
    description:
      "Join our community to expand your reach and opportunities. Showcase your content, audience demographics, and engagement metrics to help us match you with the perfect brand partnerships.",
    reverse: false,
    visual: "profile",
  },
  {
    title: "Connect with brands that fit your niche",
    description:
      "Our AI helps you connect with brands that align with your audience and content style. Browse vetted opportunities, receive personalized campaign offers, and partner with companies you actually want to work with.",
    reverse: true,
    visual: "match",
  },
  {
    title: "Land dream collaborations",
    description:
      "Partner with top brands, boost your engagement, and watch your influence grow. Create authentic content that resonates, meet exciting brands, and build lasting professional relationships.",
    reverse: false,
    visual: "collab",
  },
  {
    title: "Get paid seamlessly",
    description:
      "Receive your payment directly in your account as per agreed terms. For barter campaigns, get exclusive products. For paid collaborations, earn competitive rates. Everything handled in one platform.",
    reverse: true,
    visual: "payout",
  },
];

const Counter = ({
  value,
  prefix = "",
}: {
  value: number;
  prefix?: string;
}) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("en-IN")}
    </span>
  );
};

const ProfileVisual = () => {
  const checklist = [
    { label: "Audience demographics", icon: Users },
    { label: "Engagement metrics", icon: Activity },
    { label: "Content style", icon: Sparkles },
  ];

  return (
    <div className="flex h-80 items-center justify-center rounded-2xl bg-card/60 p-6">
      <div className="w-full max-w-sm rounded-2xl border border-border/10 bg-card p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white"
          >
            AS
          </motion.div>
          <div className="flex-1">
            <div className="h-2.5 w-24 rounded-full bg-foreground/70" />
            <div className="mt-2 h-2 w-16 rounded-full bg-muted" />
          </div>
          <div className="relative flex size-11 shrink-0 items-center justify-center">
            <svg className="size-11 -rotate-90" viewBox="0 0 44 44">
              <circle
                cx="22"
                cy="22"
                r="18"
                strokeWidth="4"
                className="fill-none stroke-muted"
              />
              <motion.circle
                cx="22"
                cy="22"
                r="18"
                strokeWidth="4"
                strokeLinecap="round"
                className="fill-none stroke-blue-600"
                style={{ pathLength: 0.92 }}
                strokeDasharray="0 1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 0.92 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              />
            </svg>
            <span className="absolute text-[10px] font-semibold text-foreground">
              92%
            </span>
          </div>
        </div>

        <div className="mt-5 space-y-2.5">
          {checklist.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.3 + i * 0.15 }}
              className="flex items-center gap-3 rounded-xl border border-border/10 bg-card/80 px-3 py-2.5"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.45 + i * 0.15,
                  type: "spring",
                  stiffness: 260,
                  damping: 15,
                }}
                className="flex size-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
              >
                <CheckCircle2 className="size-3.5" />
              </motion.span>
              <item.icon className="size-4 text-blue-600" />
              <span className="text-xs font-medium text-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const matchBrands = [
  { name: "GlowUp Cosmetics", match: "96%", position: "top-4 left-4" },
  { name: "FitBite Nutrition", match: "91%", position: "top-4 right-4" },
  {
    name: "Trailhead Gear",
    match: "88%",
    position: "bottom-6 left-1/2 -translate-x-1/2",
  },
];

const MatchVisual = () => {
  return (
    <div className="relative flex h-80 flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl bg-card/60 p-6 md:flex-row md:gap-0">
      {/* Connector lines only make sense alongside the floating desktop
          badges below — hidden on mobile along with them. */}
      <svg
        className="hidden md:block absolute inset-0 size-full"
        viewBox="0 0 400 320"
        fill="none"
      >
        {[
          { x2: 90, y2: 60 },
          { x2: 310, y2: 60 },
          { x2: 200, y2: 260 },
        ].map((p, i) => (
          <motion.line
            key={p.x2}
            x1={200}
            y1={160}
            x2={p.x2}
            y2={p.y2}
            className="stroke-blue-600/30"
            strokeWidth={2}
            strokeDasharray="5 5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          />
        ))}
      </svg>

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="z-10 flex size-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg"
      >
        <Target className="size-7" />
      </motion.div>

      {/* Desktop: floating badges positioned around the target icon.
          On a 375px viewport these overlap each other, so they're hidden
          in favor of the static wrapped list below. */}
      {matchBrands.map((b, i) => (
        <motion.div
          key={b.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 + i * 0.15 }}
          className={`hidden items-center gap-2 rounded-xl border border-border/10 bg-card px-3 py-2 shadow-sm md:absolute md:flex ${b.position}`}
        >
          <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-[10px] font-semibold text-orange-700">
            {b.name.charAt(0)}
          </span>
          <span className="text-xs font-medium text-foreground">
            {b.name}
          </span>
          <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
            {b.match}
          </span>
        </motion.div>
      ))}

      {/* Mobile-only static replacement — same info, no absolute
          positioning/parallax so nothing overlaps on narrow screens. */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:hidden">
        {matchBrands.map((b) => (
          <div
            key={b.name}
            className="flex items-center gap-2 rounded-xl border border-border/10 bg-card px-3 py-2 shadow-sm"
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-[10px] font-semibold text-orange-700">
              {b.name.charAt(0)}
            </span>
            <span className="text-xs font-medium text-foreground">
              {b.name}
            </span>
            <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
              {b.match}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CollabVisual = () => {
  return (
    <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-2xl bg-card/60 p-6">
      {/* Decorative offset background cards — desktop only; their fixed
          w-72 would otherwise bleed past a 375px viewport. */}
      <div className="hidden md:block absolute h-56 w-72 -rotate-6 rounded-2xl border border-border/10 bg-card/70 shadow-sm" />
      <div className="hidden md:block absolute h-56 w-72 rotate-3 rounded-2xl border border-border/10 bg-card/90 shadow-sm" />

      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -4 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 flex h-56 w-full max-w-72 flex-col justify-between rounded-2xl border border-border/10 bg-card p-5 shadow-md md:w-72"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-sm font-semibold text-violet-700">
              FN
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">
                FashionNova India
              </p>
              <p className="text-[11px] text-muted-foreground">
                Reel + Story Bundle
              </p>
            </div>
          </div>
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 260,
              damping: 15,
            }}
            className="flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"
          >
            <CheckCircle2 className="size-4" />
          </motion.span>
        </div>

        <div className="flex flex-wrap gap-2">
          {["Reels", "Unboxing", "48h turnaround"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-primary/10 bg-primary/5 px-2.5 py-1 text-[10px] font-medium text-primary"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-border/10 pt-3">
          <span className="text-xs text-muted-foreground">
            Offer accepted
          </span>
          <span className="text-sm font-semibold text-foreground">
            ₹18,500
          </span>
        </div>
      </motion.div>
    </div>
  );
};

const payoutTransactions = [
  { brand: "HealthCorp", amount: "₹42,000", status: "Paid" },
  { brand: "FreshBites", amount: "₹18,500", status: "Paid" },
  { brand: "Lufthansa", amount: "₹65,000", status: "Processing" },
];

const PayoutVisual = () => {
  return (
    <div className="flex h-80 items-center justify-center rounded-2xl bg-card/60 p-6">
      <div className="w-full max-w-sm rounded-2xl border border-border/10 bg-card p-5 shadow-sm">
        <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-3">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-emerald-700/70">
              Total earned
            </p>
            <p className="mt-1 text-2xl font-semibold text-emerald-700">
              <Counter value={125500} prefix="₹" />
            </p>
          </div>
          <motion.span
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"
          >
            <Wallet className="size-5" />
          </motion.span>
        </div>

        <div className="mt-4 space-y-2">
          {payoutTransactions.map((t, i) => (
            <motion.div
              key={t.brand}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.25 + i * 0.12 }}
              className="flex items-center justify-between rounded-xl border border-border/10 px-3 py-2.5"
            >
              <span className="text-xs font-medium text-foreground">
                {t.brand}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-foreground">
                  {t.amount}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                    t.status === "Paid"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {t.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureVisual = ({ visual }: { visual: string }) => {
  if (visual === "profile") return <ProfileVisual />;
  if (visual === "match") return <MatchVisual />;
  if (visual === "collab") return <CollabVisual />;
  return <PayoutVisual />;
};

const Features = (props: Props) => {
  return (
    <section className="w-full bg-background py-8 md:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 md:gap-28 md:px-10">
        {featureRows.map((feature) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16"
          >
            <div className={`${feature.reverse ? "md:order-2" : "md:order-1"}`}>
              <h3 className="text-xl font-medium leading-tight tracking-tight text-foreground md:text-3xl">
                {feature.title}
              </h3>
              <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>

            <div className={`${feature.reverse ? "md:order-1" : "md:order-2"}`}>
              <FeatureVisual visual={feature.visual} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
