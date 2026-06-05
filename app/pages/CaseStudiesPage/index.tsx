import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";
import { cn } from "~/lib/utils";

const caseStudies = [
  {
    id: 1,
    brand: "HealthCorp",
    industry: "D2C Health & Wellness",
    metric: "3x",
    metricLabel: "Increase in Qualified Leads",
    stat2: "₹2.4Cr",
    stat2Label: "Revenue Attributed",
    description:
      "HealthCorp needed to scale their customer acquisition beyond paid ads. Using our discovery module, they found 120+ niche health creators filtered by audience demographics. The affiliate module tracked every referral, attributing ₹2.4Cr in revenue directly to creator-driven traffic.",
    tags: ["Discovery", "Affiliate", "Lead Gen"],
    accent: "border-t-emerald-400",
    accentBg: "bg-emerald-50",
  },
  {
    id: 2,
    brand: "FashionNova India",
    industry: "Fashion E-commerce",
    metric: "4.5M",
    metricLabel: "Reach in 14 Days",
    stat2: "200+",
    stat2Label: "Creators Deployed",
    description:
      "FashionNova India's launch campaign required coordinated execution across 200+ micro-influencers. Our execution module enabled bulk outreach, content approval workflows, and real-time tracking — all from a single dashboard. The campaign hit 4.5M combined reach within two weeks.",
    tags: ["Execution", "Campaign Mgmt", "Reporting"],
    accent: "border-t-violet-400",
    accentBg: "bg-violet-50",
  },
  {
    id: 3,
    brand: "FreshBites",
    industry: "Food & Beverage",
    metric: "50%",
    metricLabel: "Lower CAC",
    stat2: "8 Cities",
    stat2Label: "Regional Expansion",
    description:
      "FreshBites needed to expand into 8 tier-2 cities with limited budget. Our city-level creator filtering helped them identify hyper-local food creators with strong engagement in target markets. The result was a 50% reduction in customer acquisition cost compared to their traditional advertising spend.",
    tags: ["Discovery", "Regional", "Analytics"],
    accent: "border-t-amber-400",
    accentBg: "bg-amber-50",
  },
];

const metrics = [
  { value: "200+", label: "Campaigns Delivered" },
  { value: "4Mn+", label: "Creators Tracked" },
  { value: "500Mn+", label: "Views Generated" },
  { value: "₹50Cr+", label: "Revenue Attributed" },
];

const industries = [
  { name: "E-commerce", count: "40+ Campaigns" },
  { name: "Beauty & Wellness", count: "35+ Campaigns" },
  { name: "Food & Beverage", count: "28+ Campaigns" },
  { name: "Fashion", count: "32+ Campaigns" },
  { name: "Fintech", count: "15+ Campaigns" },
  { name: "EdTech", count: "18+ Campaigns" },
];

const CaseStudiesPage = () => {
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
            Case Studies
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl font-light tracking-tight text-foreground">
            Proven Results,
            <br />
            Clear ROI
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            See how leading brands are scaling customer acquisition, driving brand awareness, and measuring real returns with our end-to-end platform.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <Button size="lg" asChild>
              <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                See a Live Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/product">Explore Platform</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-light">{m.value}</div>
                <div className="mt-2 text-sm text-primary-foreground/60">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 px-6 md:px-8 mx-auto max-w-6xl">
        <div className="flex flex-col gap-16">
          {caseStudies.map((study, idx) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={cn("rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all", idx % 2 === 1 ? "bg-primary text-primary-foreground" : "bg-white")}
            >
              <div className={`grid md:grid-cols-2 gap-0`}>
                {/* Content */}
                <div className="p-10 md:p-14 flex flex-col justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <p className={cn("text-xs font-medium uppercase tracking-[0.15em]", idx % 2 === 1 ? "text-primary-foreground/75" : "text-muted-foreground/80")}>{study.industry}</p>
                    </div>
                    <h2 className="text-3xl font-medium tracking-tight">{study.brand}</h2>
                    <p className={cn("mt-4 text-base leading-relaxed", idx % 2 === 1 ? "text-primary-foreground/90" : "text-muted-foreground")}>{study.description}</p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${idx % 2 === 1 ? "bg-primary-foreground/10 text-primary-foreground/70" : "bg-primary/5 text-primary/70"}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant={idx % 2 === 1 ? "ghost" : "default"}
                    className={idx % 2 === 1 ? "bg-white text-neutral-900 hover:bg-neutral-100 hover:text-neutral-950 w-fit font-normal" : "w-fit"}
                    asChild
                  >
                    <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                      Request a walkthrough
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Metrics */}
                <div className={`${idx % 2 === 1 ? "bg-primary-foreground/10" : "bg-neutral-50"} p-10 md:p-14 flex flex-col justify-center gap-8`}>
                  <div>
                    <div className="text-6xl font-light">{study.metric}</div>
                    <div className={cn("text-sm mt-1 uppercase tracking-widest", idx % 2 === 1 ? "text-primary-foreground/75" : "text-muted-foreground/70")}>{study.metricLabel}</div>
                  </div>
                  <div className="h-px opacity-10 bg-current" />
                  <div>
                    <div className="text-5xl font-light">{study.stat2}</div>
                    <div className={cn("text-sm mt-1 uppercase tracking-widest", idx % 2 === 1 ? "text-primary-foreground/75" : "text-muted-foreground/70")}>{study.stat2Label}</div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-primary py-24 px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-light text-primary-foreground text-center mb-12"
          >
            Industries we actively support
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 hover:bg-primary-foreground/10 transition-colors"
              >
                <p className="text-lg font-normal text-primary-foreground">{ind.name}</p>
                <p className="text-sm text-primary-foreground/50 mt-1">{ind.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-8 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-light tracking-tight">Ready to write your own case study?</h2>
          <p className="mt-4 text-muted-foreground">
            Book a personalized demo and see how Cre8r can transform your influencer marketing strategy.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book a Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;
