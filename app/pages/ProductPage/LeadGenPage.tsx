import { motion } from "motion/react";
import React, { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, UserPlus, ClipboardList, CheckCircle2, ChevronRight, Mail, BarChart3, Users, Sparkles } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";

// Mock lead generation lists for interactive widget
const initialLeads = [
  {
    brand: "GlowUp Cosmetics",
    industry: "D2C Beauty",
    status: "In Discussion",
    responded: "Yes",
    rate: "85%",
    estBudget: "₹6,50,000",
    avatar: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=150&q=80",
    outreachNotes: "Interested in regional beauty influencers in Tier 2 cities. Requesting custom list."
  },
  {
    brand: "FitBite Nutrition",
    industry: "Food & Wellness",
    status: "Outreached",
    responded: "Pending",
    rate: "54%",
    estBudget: "₹3,20,000",
    avatar: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=150&q=80",
    outreachNotes: "Initial pitch email sent regarding wellness creator list. Awaiting confirmation."
  },
  {
    brand: "Zeta Fintech",
    industry: "Financial Services",
    status: "Closed Deal",
    responded: "Yes",
    rate: "92%",
    estBudget: "₹15,00,000",
    avatar: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=150&q=80",
    outreachNotes: "Agreement signed for 45-day fintech education video series. Campaign onboarding complete."
  }
];

const LeadGenPage = () => {
  const [leads, setLeads] = useState(initialLeads);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [demoMode, setDemoMode] = useState<"sandbox" | "outreach" | "scanner">("sandbox");

  const activeLead = leads[selectedIdx];

  const handleUpdateStatus = (newStatus: string) => {
    const updated = [...leads];
    updated[selectedIdx].status = newStatus;
    setLeads(updated);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Back to product button */}
      <div className="pt-28 px-6 md:px-8 mx-auto max-w-6xl">
        <Button variant="ghost" className="text-muted-foreground hover:text-foreground mb-4 pl-0" asChild>
          <Link to="/product">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Products
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="pb-16 px-6 md:px-8 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Lead Generation Module
          </div>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground leading-[1.1]">
            Scale High-Intent <br />
            Brand Outreach Pipelines
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Acquire high-intent sponsor partners and manage outbound pipelines. Identify target brands, monitor response metrics, and organize creator sponsorships efficiently in a structured pipeline.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <Button size="lg" asChild>
              <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book a Pipeline Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Explore Company</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Interactive Tool Section */}
      <section className="py-16 px-6 md:px-8 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Interactive Demo</p>
          <h2 className="mt-2 text-3xl font-light tracking-tight">Outreach & Leads Manager</h2>
          <p className="mt-2 text-muted-foreground">Select a brand below to view notes, update statuses, and check estimated campaign budgets, or view interactive walkthroughs.</p>
        </div>

        {/* Demo Mode Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap rounded-xl p-1 bg-neutral-100 border border-neutral-200/50 gap-1">
            <button
              onClick={() => setDemoMode("sandbox")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                demoMode === "sandbox"
                  ? "bg-white text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Interactive Sandbox
            </button>
            <button
              onClick={() => setDemoMode("outreach")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                demoMode === "outreach"
                  ? "bg-white text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Outreach Walkthrough
            </button>
            <button
              onClick={() => setDemoMode("scanner")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                demoMode === "scanner"
                  ? "bg-white text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Competition Scanner Walkthrough
            </button>
          </div>
        </div>

        {demoMode !== "sandbox" ? (
          <div className="rounded-3xl border border-border/20 bg-white shadow-xs overflow-hidden aspect-video relative w-full">
            <iframe
              src={
                demoMode === "outreach"
                  ? CONSTANTS.SUPADEMO.OUTREACH
                  : CONSTANTS.SUPADEMO.COMPETITION_SCANNER
              }
              loading="lazy"
              title={`${demoMode} Walkthrough`}
              allow="clipboard-write"
              frameBorder="0"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        ) : (
          <div className="rounded-3xl border border-border/20 bg-white shadow-xs overflow-hidden grid md:grid-cols-3 gap-0">
            {/* Creator list column */}
            <div className="border-r border-border/15 flex flex-col bg-neutral-50/50 md:col-span-1">
              <div className="p-4 border-b border-border/15">
                <span className="text-xs uppercase tracking-[0.1em] font-semibold text-muted-foreground">Prospects</span>
              </div>
              <div className="flex-1 divide-y divide-neutral-100 overflow-y-auto">
                {leads.map((lead, idx) => (
                  <button
                    key={lead.brand}
                    onClick={() => setSelectedIdx(idx)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${selectedIdx === idx ? 'bg-white font-medium' : 'hover:bg-neutral-100/50'}`}
                  >
                    <img src={lead.avatar} alt={lead.brand} className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">{lead.brand}</p>
                      <p className="text-xs text-muted-foreground truncate">{lead.industry} • {lead.estBudget}</p>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 ${
                      lead.status === "Closed Deal" ? 'bg-emerald-50 text-emerald-700 border border-emerald-250' : 
                      lead.status === "In Discussion" ? 'bg-amber-50 text-amber-700 border border-amber-250' : 'bg-blue-50 text-blue-700 border border-blue-250'
                    }`}>
                      {lead.status}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Details screen (Colspan 2) */}
            <div className="col-span-2 p-6 md:p-8 flex flex-col justify-between gap-6 min-h-[350px]">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <img src={activeLead.avatar} alt={activeLead.brand} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="text-lg font-semibold">{activeLead.brand}</h4>
                      <p className="text-xs text-muted-foreground">{activeLead.industry}</p>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    {["Outreached", "In Discussion", "Closed Deal"].map(st => (
                      <Button 
                        key={st}
                        variant={activeLead.status === st ? "default" : "outline"} 
                        onClick={() => handleUpdateStatus(st)}
                        className="text-[10px] h-7 px-2.5"
                      >
                        {st}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-neutral-50/50 border border-border/10">
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">Outreach Status Note</span>
                    <p className="text-sm text-foreground/80 leading-relaxed">{activeLead.outreachNotes}</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                    <div>
                      <span className="text-xs text-muted-foreground">Estimated Budget</span>
                      <p className="font-semibold text-base mt-0.5 text-emerald-600">{activeLead.estBudget}</p>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Prospect Response</span>
                      <p className="font-semibold text-base mt-0.5">{activeLead.responded}</p>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Response Rate</span>
                      <p className="font-semibold text-base mt-0.5 text-indigo-600">{activeLead.rate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-neutral-50/60 px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight">Structured Pipeline Operations</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Our Lead Generation tools help creator networks and media hubs source brand opportunities efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: ClipboardList,
                title: "Custom Lead Lists",
                description: "Build lists of prospect brands sorted by target niche, regional focus, average campaign spend tiers, and team contacts."
              },
              {
                icon: Mail,
                title: "Response Tracking",
                description: "Monitor response metrics and tracking data. Optimize pitches based on brand response averages across various industries."
              },
              {
                icon: BarChart3,
                title: "Outbound Pipelines",
                description: "Keep outreach stages clear. Drag-and-drop lists through contact, meeting scheduled, and closed contract statuses."
              }
            ].map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border border-border/20 p-8 rounded-2xl shadow-2xs hover:shadow-xs transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6">
                  <feat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium">{feat.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 md:px-8 mx-auto max-w-6xl">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-light leading-tight max-w-lg">
              Unlock Your Outreach Potential
            </h2>
            <p className="mt-4 text-primary-foreground/60 max-w-md">
              Organize leads and scale your sponsorship programs without losing pipeline tracking data.
            </p>
          </div>
          <Button
            variant="ghost"
            size="lg"
            className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground shrink-0"
            asChild
          >
            <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Schedule a Custom Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default LeadGenPage;
