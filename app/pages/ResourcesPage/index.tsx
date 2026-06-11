import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Calculator, BookOpen, FileText, TrendingUp, Zap, Users } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";
import React, { useState } from "react";

const resources = [
  {
    icon: Calculator,
    title: "ROI Calculator",
    description: "Estimate your influencer campaign ROI before you spend a rupee. Factor in creator fees, reach, engagement, and conversion projections.",
    tag: "Tool",
    accent: "bg-violet-50 border-violet-200",
    iconBg: "bg-violet-100 text-violet-600",
    cta: "Use Calculator",
    available: true,
  },
  {
    icon: BookOpen,
    title: "Influencer Discovery Playbook",
    description: "A step-by-step guide to shortlisting the right creators for your brand — from defining your criteria to evaluating authenticity scores.",
    tag: "Guide",
    accent: "bg-emerald-50 border-emerald-200",
    iconBg: "bg-emerald-100 text-emerald-600",
    cta: "Download Guide",
    available: false,
  },
  {
    icon: FileText,
    title: "Campaign Brief Template",
    description: "A structured brief template that ensures creators understand your brand voice, deliverables, timelines, and success metrics from day one.",
    tag: "Template",
    accent: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-100 text-amber-600",
    cta: "Get Template",
    available: false,
  },
  {
    icon: TrendingUp,
    title: "Affiliate Growth Toolkit",
    description: "Everything you need to set up, track, and scale your influencer affiliate program — from attribution setup to performance reporting.",
    tag: "Toolkit",
    accent: "bg-sky-50 border-sky-200",
    iconBg: "bg-sky-100 text-sky-600",
    cta: "Get Toolkit",
    available: false,
  },
  {
    icon: Zap,
    title: "Campaign Launch Checklist",
    description: "A 40-point checklist to ensure every influencer campaign launch is airtight — no missed deliverables, no last-minute surprises.",
    tag: "Checklist",
    accent: "bg-rose-50 border-rose-200",
    iconBg: "bg-rose-100 text-rose-600",
    cta: "Get Checklist",
    available: false,
  },
  {
    icon: Users,
    title: "Creator Vetting Framework",
    description: "Know exactly what to look for beyond follower count. Our framework covers authenticity, audience overlap, content quality, and brand safety.",
    tag: "Framework",
    accent: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100 text-orange-600",
    cta: "Get Framework",
    available: false,
  },
];

// Simple ROI Calculator
const RoiCalculator = () => {
  const [creators, setCreators] = useState(10);
  const [avgReach, setAvgReach] = useState(50000);
  const [engRate, setEngRate] = useState(3.5);
  const [convRate, setConvRate] = useState(1);
  const [aov, setAov] = useState(1500);

  const totalReach = creators * avgReach;
  const engagements = Math.round(totalReach * (engRate / 100));
  const conversions = Math.round(engagements * (convRate / 100));
  const revenue = conversions * aov;

  return (
    <div className="rounded-3xl border border-border/20 bg-white overflow-hidden shadow-sm">
      <div className="p-8 md:p-12 border-b border-border/10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Interactive Tool</p>
        <h2 className="mt-3 text-3xl font-light tracking-tight">Campaign ROI Calculator</h2>
        <p className="mt-2 text-muted-foreground">Estimate your influencer campaign performance before you launch.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-0">
        <div className="p-8 md:p-12 flex flex-col gap-6 border-r border-border/10">
          {[
            { label: "Number of Creators", value: creators, setter: setCreators, min: 1, max: 500, step: 1 },
            { label: "Avg. Creator Reach", value: avgReach, setter: setAvgReach, min: 1000, max: 5000000, step: 1000 },
            { label: "Avg. Engagement Rate (%)", value: engRate, setter: setEngRate, min: 0.1, max: 20, step: 0.1 },
            { label: "Conversion Rate (%)", value: convRate, setter: setConvRate, min: 0.1, max: 10, step: 0.1 },
            { label: "Average Order Value (₹)", value: aov, setter: setAov, min: 100, max: 50000, step: 100 },
          ].map(({ label, value, setter, min, max, step }) => (
            <div key={label} className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <label className="font-medium text-foreground/80">{label}</label>
                <span className="text-muted-foreground tabular-nums">{value.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => setter(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
          ))}
        </div>

        <div className="p-8 md:p-12 bg-primary text-primary-foreground flex flex-col justify-center gap-8">
          <h3 className="text-lg font-light text-primary-foreground/60 uppercase tracking-wider">Estimated Results</h3>
          {[
            { label: "Total Reach", value: totalReach.toLocaleString() },
            { label: "Engagements", value: engagements.toLocaleString() },
            { label: "Conversions", value: conversions.toLocaleString() },
            { label: "Attributed Revenue", value: `₹${(revenue).toLocaleString()}` },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1">
              <p className="text-sm text-primary-foreground/50">{label}</p>
              <p className="text-3xl font-light tracking-tight">{value}</p>
            </div>
          ))}
          <Button
            variant="ghost"
            className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground w-fit mt-4"
            asChild
          >
            <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Discuss with our team
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const ResourcesPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 md:px-8 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Resources
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl font-light tracking-tight">
            Tools & Guides
            <br />
            for Smarter Growth
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Free resources designed to help you master influencer marketing — from discovery to conversion. No fluff, just actionable frameworks.
          </p>
        </motion.div>
      </section>

      {/* ROI Calculator */}
      <section className="px-6 md:px-8 mx-auto max-w-6xl pb-24">
        <RoiCalculator />
      </section>

      {/* Resources Grid */}
      <section className="py-24 bg-neutral-50/70 px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light tracking-tight">Free Resources</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Download guides, templates, and frameworks curated from 200+ campaign learnings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((res, i) => (
              <motion.div
                key={res.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-white border border-border/20 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${res.iconBg}`}>
                  <res.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${res.accent}`}>
                      {res.tag}
                    </span>
                    {!res.available && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-medium">{res.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{res.description}</p>
                </div>
                <Button
                  variant={res.available ? "default" : "outline"}
                  size="sm"
                  className="w-fit mt-auto"
                  disabled={!res.available}
                  asChild={res.available}
                >
                  {res.available ? (
                    <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                      {res.cta}
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <span>{res.cta}</span>
                  )}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-24 px-6 md:px-8 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-light leading-tight max-w-lg">
              Want a custom strategy for your brand?
            </h2>
            <p className="mt-4 text-primary-foreground/60 max-w-md">
              Book a free 30-minute strategy call. We'll walk you through how to structure your influencer program for maximum ROI.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Button
              variant="ghost"
              size="lg"
              className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book Strategy Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Link
              to="/case-studies"
              className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 text-center transition-colors"
            >
              Or see our case studies →
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ResourcesPage;
