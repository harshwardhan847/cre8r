import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Calendar, Video, Users, Zap } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";

const demoModules = [
  {
    title: "Creator Discovery",
    description: "Watch how to find the right creators using 25+ filters — category, city, age range, engagement rate, and more.",
    icon: Users,
    accent: "border-t-violet-400 bg-violet-50/50",
    iconClass: "text-violet-600",
    duration: "~8 min",
  },
  {
    title: "Campaign Execution",
    description: "See how to create a brief, send bulk outreach, approve content, and track deliverables — all in one flow.",
    icon: Zap,
    accent: "border-t-emerald-400 bg-emerald-50/50",
    iconClass: "text-emerald-600",
    duration: "~10 min",
  },
  {
    title: "Affiliate & Attribution",
    description: "Learn how Cre8r maps every referral to a specific creator, tracking revenue attribution in real-time.",
    icon: ArrowRight,
    accent: "border-t-amber-400 bg-amber-50/50",
    iconClass: "text-amber-600",
    duration: "~6 min",
  },
  {
    title: "Analytics & Reporting",
    description: "Explore the reporting dashboard — from campaign-level metrics to creator-level ROI breakdowns.",
    icon: Video,
    accent: "border-t-sky-400 bg-sky-50/50",
    iconClass: "text-sky-600",
    duration: "~7 min",
  },
];

const demoSteps = [
  { num: "01", title: "Schedule a slot", desc: "Pick a 30-minute slot that works for you. Our team is available weekdays 10AM–7PM IST." },
  { num: "02", title: "Share your goals", desc: "Tell us about your brand, current challenges, and what you're hoping to achieve with influencer marketing." },
  { num: "03", title: "See a live walkthrough", desc: "We'll demo the platform end-to-end, tailored to your industry and use case — no generic slides." },
  { num: "04", title: "Get a custom plan", desc: "We'll follow up with a recommended platform plan and an onboarding guide specific to your needs." },
];

const DemoPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 md:px-8 mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Book a Demo
            </p>
            <h1 className="mt-4 text-5xl font-light tracking-tight leading-tight">
              See Cre8r
              <br />
              in Action
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              Schedule a personalized walkthrough of the Cre8r platform. We'll show you how our tools for discovery, campaign execution, affiliate tracking, and lead generation can transform your brand's acquisition strategy.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <Button size="lg" asChild>
                <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 w-4 h-4" />
                  Book a Live Demo
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link to={CONSTANTS.WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Calendar Embed Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border border-border/20 bg-white shadow-sm overflow-hidden aspect-[4/3] flex items-center justify-center flex-col gap-4 p-8"
          >
            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-primary/40" />
            </div>
            <div className="text-center">
              <p className="font-medium text-foreground/80">Book via Calendly</p>
              <p className="text-sm text-muted-foreground mt-1">30 min · Online · Free</p>
            </div>
            <Button size="lg" asChild>
              <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Open Calendly
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Demo Modules */}
      <section className="py-24 bg-neutral-50/70 px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light tracking-tight">What we'll cover</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              A focused walkthrough of the platform modules most relevant to your use case.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {demoModules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ y: -3 }}
                className={`rounded-2xl border border-t-4 p-7 flex gap-5 ${mod.accent} transition-transform`}
              >
                <div className={`w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center shrink-0 shadow-sm`}>
                  <mod.icon className={`w-5 h-5 ${mod.iconClass}`} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-medium">{mod.title}</h3>
                    <span className="text-xs text-muted-foreground">{mod.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{mod.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-primary text-primary-foreground px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-light text-center mb-16"
          >
            How the demo works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex flex-col gap-4"
              >
                <div className="text-5xl font-light text-primary-foreground/20">{step.num}</div>
                <h3 className="text-xl font-medium text-primary-foreground">{step.title}</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Schedule Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DemoPage;
