import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";

const leadership = [
  {
    name: "GS",
    fullName: "Gaurav Sharma",
    role: "Co-Founder & CEO",
    bio: "Former brand strategist with 10+ years in performance marketing. Built Cre8r to bridge the gap between brands and authentic creators.",
  },
  {
    name: "Priya",
    fullName: "Priya Mehta",
    role: "Co-Founder & COO",
    bio: "Operations expert who scaled multiple D2C brands before co-founding Cre8r. Leads creator partnerships and campaign execution.",
  },
  {
    name: "Kartikey",
    fullName: "Kartikey Agarwal",
    role: "Head of Growth",
    bio: "Growth strategist specializing in creator economy and B2B SaaS. Drives brand partnerships and platform adoption.",
  },
];

const values = [
  {
    title: "Authenticity over Everything",
    description: "We believe creator marketing only works when it's genuine. We prioritize authentic connections over inflated numbers.",
    accent: "border-l-violet-400",
  },
  {
    title: "Data-Driven Decisions",
    description: "Every recommendation on our platform is backed by real performance data — not gut feel or vanity metrics.",
    accent: "border-l-emerald-400",
  },
  {
    title: "Creators are Partners",
    description: "We treat creators as equal stakeholders. Their success is our success, and we've built the platform to reflect that.",
    accent: "border-l-amber-400",
  },
  {
    title: "Transparency, Always",
    description: "Clear pricing, clear attribution, clear metrics. No hidden fees or black-box reporting.",
    accent: "border-l-sky-400",
  },
];

const milestones = [
  { year: "2021", event: "Cre8r founded with a focus on micro-influencer campaigns for D2C brands." },
  { year: "2022", event: "Launched the discovery module. First 50 brand partnerships signed." },
  { year: "2023", event: "Crossed 1Mn+ creator profiles. Launched affiliate and lead generation modules." },
  { year: "2024", event: "4Mn+ creators, 200+ campaigns, ₹50Cr+ revenue attributed. Expanding to SaaS." },
  { year: "2025", event: "AI-powered matchmaking launched. Enterprise plans introduced." },
];

const TightAboutUs = () => {
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
            About Us
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl font-light tracking-tight leading-tight max-w-2xl">
            We exist to make
            <br />
            influencer marketing
            <br />
            actually work.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-xl">
            Cre8r was founded with a simple belief: authentic creator relationships drive measurable business outcomes. We built the platform to prove it.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "4Mn+", label: "Creator Profiles" },
              { value: "200+", label: "Campaigns Delivered" },
              { value: "500Mn+", label: "Views Generated" },
              { value: "₹50Cr+", label: "Revenue Attributed" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-light">{stat.value}</div>
                <div className="mt-2 text-sm text-primary-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 md:px-8 mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-light tracking-tight">Our Story</h2>
            <div className="mt-6 flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                Cre8r started in 2021 when our founders kept seeing the same problem: brands were spending huge budgets on influencer campaigns with zero way to measure what actually worked.
              </p>
              <p>
                We built the platform we wished existed — one that combines creator discovery, campaign execution, affiliate tracking, and real-time analytics into a single, seamless workflow.
              </p>
              <p>
                Today, we power 200+ campaigns across industries from beauty to fintech, with 4Mn+ creator profiles discoverable through our platform.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-sm font-mono font-medium text-foreground/40 w-10 shrink-0 text-right">{m.year}</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/30 mt-1.5 shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.event}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-50/70 px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light tracking-tight">What we believe in</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className={`rounded-2xl border-l-4 bg-white p-7 shadow-sm ${val.accent}`}
              >
                <h3 className="text-xl font-medium">{val.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-6 md:px-8 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light tracking-tight">Leadership</h2>
          <p className="mt-3 text-muted-foreground">The team building the future of influencer marketing.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-20 h-20 rounded-2xl bg-neutral-100 flex items-center justify-center text-2xl font-light text-foreground/30 shadow-xs">
                {leader.name[0]}
              </div>
              <div>
                <h3 className="text-xl font-medium">{leader.fullName}</h3>
                <p className="text-sm text-muted-foreground">{leader.role}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-24 px-6 md:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-light">Ready to work with us?</h2>
            <p className="mt-4 text-primary-foreground/60 max-w-lg mx-auto">
              Whether you're a brand looking to scale or a creator looking to grow — Cre8r is built for you.
            </p>
            <div className="flex items-center justify-center gap-4 mt-10">
              <Button
                variant="ghost"
                size="lg"
                className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Book a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-primary-foreground/75 hover:text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/hiring">
                  Join the Team
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default TightAboutUs;
