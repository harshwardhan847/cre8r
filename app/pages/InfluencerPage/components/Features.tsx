import React from "react";
import {
  Activity,
  BadgeCheck,
  Megaphone,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

type Props = {};

const featureRows = [
  {
    title: "Sign up & complete your profile",
    description:
      "Join our community to expand your reach and opportunities. Showcase your content, audience demographics, and engagement metrics to help us match you with the perfect brand partnerships.",
    reverse: false,
    visual: "hub",
  },
  {
    title: "Connect with brands that fit your niche",
    description:
      "Our AI helps you connect with brands that align with your audience and content style. Browse vetted opportunities, receive personalized campaign offers, and partner with companies you actually want to work with.",
    reverse: true,
    visual: "crm",
  },
  {
    title: "Land dream collaborations",
    description:
      "Partner with top brands, boost your engagement, and watch your influence grow. Create authentic content that resonates, meet exciting brands, and build lasting professional relationships.",
    reverse: false,
    visual: "lead",
  },
  {
    title: "Get paid seamlessly",
    description:
      "Receive your payment directly in your account as per agreed terms. For barter campaigns, get exclusive products. For paid collaborations, earn competitive rates. Everything handled in one platform.",
    reverse: true,
    visual: "domain",
  },
];

const HubVisual = () => {
  return (
    <div className="flex h-80 items-center justify-center rounded-2xl bg-card/60 p-6">
      <div className="relative flex items-center justify-center">
        <div className="flex size-20 items-center justify-center rounded-3xl bg-blue-600 text-5xl font-bold text-white shadow-lg">
          Cr
        </div>

        <div className="absolute -top-24 left-1/2 -translate-x-1/2 rounded-2xl border border-border/10 bg-card p-4 shadow-sm">
          <Target className="size-8 text-blue-600" />
        </div>
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 rounded-2xl border border-border/10 bg-card p-4 shadow-sm">
          <TrendingUp className="size-8 text-blue-600" />
        </div>
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 rounded-2xl border border-border/10 bg-card p-4 shadow-sm">
          <Sparkles className="size-8 text-blue-600" />
        </div>
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 rounded-2xl border border-border/10 bg-card p-4 shadow-sm">
          <Megaphone className="size-8 text-blue-600" />
        </div>
      </div>
    </div>
  );
};

const CrmVisual = () => {
  return (
    <div className="flex h-80 items-center justify-center rounded-2xl bg-card/60 p-4">
      <div className="w-full max-w-lg rounded-2xl border border-border/10 bg-card shadow-sm">
        <div className="flex items-center justify-between border-b border-border/10 px-4 py-3">
          <div className="text-sm font-medium text-foreground">amplemarket</div>
          <div className="rounded-md bg-blue-600 px-2 py-1 text-xs font-medium text-white">
            HubSpot
          </div>
        </div>
        <div className="space-y-3 p-4">
          <div className="h-2 w-10/12 rounded-full bg-muted" />
          <div className="h-2 w-8/12 rounded-full bg-muted" />
          <div className="h-2 w-9/12 rounded-full bg-muted" />
          <div className="h-2 w-7/12 rounded-full bg-muted" />
        </div>
        <div className="mx-4 mb-4 flex items-center gap-3 rounded-xl border border-blue-200 bg-card px-3 py-2">
          <span className="rounded bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
            Synced
          </span>
          <div className="h-2 w-24 rounded-full bg-muted" />
          <div className="h-2 w-20 rounded-full bg-muted" />
          <BadgeCheck className="ml-auto size-4 text-blue-600" />
        </div>
      </div>
    </div>
  );
};

const LeadVisual = () => {
  return (
    <div className="flex h-80 items-center justify-center rounded-2xl bg-card/60 p-4">
      <div className="relative w-full max-w-lg rounded-2xl border border-border/10 bg-card p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-sm font-medium text-foreground">
            Search leads
          </div>
          <div className="rounded-md bg-blue-600 px-2 py-1 text-xs font-medium text-white">
            200M Profiles
          </div>
        </div>
        <div className="space-y-3 pb-10 opacity-70">
          <div className="h-2 w-full rounded-full bg-muted" />
          <div className="h-2 w-10/12 rounded-full bg-muted" />
          <div className="h-2 w-11/12 rounded-full bg-muted" />
          <div className="h-2 w-9/12 rounded-full bg-muted" />
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl border border-blue-200 bg-card px-3 py-2 shadow-sm">
          <span className="rounded bg-emerald-500 px-2 py-1 text-xs font-medium text-white">
            Verified
          </span>
          <div className="h-2 w-24 rounded-full bg-muted" />
          <div className="h-2 w-16 rounded-full bg-muted" />
          <Activity className="ml-auto size-4 text-blue-600" />
        </div>
      </div>
    </div>
  );
};

const DomainVisual = () => {
  return (
    <div className="flex h-80 items-center justify-center rounded-2xl bg-card/60 p-4">
      <div className="w-full max-w-lg rounded-2xl border border-border/10 bg-card p-4 shadow-sm">
        <div className="mb-4 text-sm font-medium text-foreground">
          Domain Health Center
        </div>
        <div className="grid grid-cols-4 gap-3 border-b border-border/10 pb-3 text-xs text-muted-foreground">
          <span>Mailboxes</span>
          <span>Open Rate</span>
          <span>Emails Sent</span>
          <span>Outbox Ratio</span>
        </div>
        <div className="mt-4 space-y-2">
          <div className="grid grid-cols-4 items-center gap-3 rounded-xl border border-border/10 bg-card px-3 py-3 text-xs text-foreground">
            <div className="h-2 w-24 rounded-full bg-muted" />
            <span className="w-fit rounded bg-emerald-100 px-2 py-1 text-emerald-700">
              63%
            </span>
            <div className="h-2 w-10 rounded-full bg-muted" />
            <div className="h-2 w-10 rounded-full bg-muted" />
          </div>
          <div className="grid grid-cols-4 items-center gap-3 rounded-xl border border-border/10 bg-card px-3 py-3 text-xs text-foreground">
            <div className="h-2 w-24 rounded-full bg-muted" />
            <span className="w-fit rounded bg-amber-100 px-2 py-1 text-amber-700">
              39%
            </span>
            <div className="h-2 w-10 rounded-full bg-muted" />
            <div className="h-2 w-10 rounded-full bg-muted" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureVisual = ({ visual }: { visual: string }) => {
  if (visual === "hub") return <HubVisual />;
  if (visual === "crm") return <CrmVisual />;
  if (visual === "lead") return <LeadVisual />;
  return <DomainVisual />;
};

const Features = (props: Props) => {
  return (
    <section className="w-full bg-background py-8 md:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 md:gap-28 md:px-10">
        {featureRows.map((feature) => (
          <div
            key={feature.title}
            className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${feature.reverse ? "" : ""}`}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
