import { motion } from "motion/react";
import React, { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, LineChart, Link2, Percent, IndianRupee, Users, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";

// Mock affiliate sales analytics for interactive widget
const initialAffiliates = [
  {
    name: "Rohan Varma",
    code: "ROHAN20",
    clicks: 4500,
    conversions: 180,
    sales: 270000,
    roi: "5.4x",
    category: "Fashion",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    salesTrend: [12, 18, 15, 24, 32, 28, 42]
  },
  {
    name: "Anjali Mehta",
    code: "ANJALI15",
    clicks: 6200,
    conversions: 248,
    sales: 372000,
    roi: "4.2x",
    category: "Beauty & Skincare",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80",
    salesTrend: [18, 22, 20, 28, 38, 45, 52]
  },
  {
    name: "Divya Das",
    code: "DIVYAFIT",
    clicks: 3100,
    conversions: 95,
    sales: 190000,
    roi: "6.1x",
    category: "Fitness",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    salesTrend: [5, 8, 12, 18, 15, 22, 29]
  }
];

const AffiliatePage = () => {
  const [affiliates] = useState(initialAffiliates);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [demoMode, setDemoMode] = useState<"sandbox" | "crm" | "collection">("sandbox");

  const active = affiliates[selectedIdx];
  
  // Calculate aggregate stats
  const totalSales = affiliates.reduce((sum, item) => sum + item.sales, 0);
  const totalConversions = affiliates.reduce((sum, item) => sum + item.conversions, 0);
  const totalClicks = affiliates.reduce((sum, item) => sum + item.clicks, 0);
  const averageConversionRate = ((totalConversions / totalClicks) * 100).toFixed(1);

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-250 text-amber-700 text-xs font-medium uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Affiliate & ROI Module
          </div>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground leading-[1.1]">
            Content to Commerce <br />
            Attribution & Sales
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Measure what actually impacts your bottom line. Generate custom referral links, track exclusive coupon promo codes, and monitor sales conversions in real-time, attributing ROI directly to each creator.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <Button size="lg" asChild>
              <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Schedule a Platform Walkthrough
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/resources">Try ROI Calculator</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Interactive Tool Section */}
      <section className="py-16 px-6 md:px-8 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Interactive Demo</p>
          <h2 className="mt-2 text-3xl font-light tracking-tight">Campaign ROI & Sales Tracker</h2>
          <p className="mt-2 text-muted-foreground">Select a creator below to view their specific campaign sales trends or view interactive walkthroughs.</p>
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
              onClick={() => setDemoMode("crm")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                demoMode === "crm"
                  ? "bg-white text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              CRM Walkthrough
            </button>
            <button
              onClick={() => setDemoMode("collection")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                demoMode === "collection"
                  ? "bg-white text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Collection Walkthrough
            </button>
          </div>
        </div>

        {demoMode !== "sandbox" ? (
          <div className="rounded-3xl border border-border/20 bg-white shadow-xs overflow-hidden aspect-video relative w-full">
            <iframe
              src={
                demoMode === "crm"
                  ? CONSTANTS.SUPADEMO.CRM
                  : CONSTANTS.SUPADEMO.COLLECTION
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
          <>
            {/* Aggregated Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Total Sales", value: `₹${totalSales.toLocaleString()}`, icon: IndianRupee, color: "text-emerald-600 bg-emerald-50" },
                { label: "Total Conversions", value: totalConversions, icon: Percent, color: "text-indigo-600 bg-indigo-50" },
                { label: "Total Link Clicks", value: totalClicks.toLocaleString(), icon: Link2, color: "text-sky-600 bg-sky-50" },
                { label: "Avg. Conv Rate", value: `${averageConversionRate}%`, icon: LineChart, color: "text-violet-600 bg-violet-55" }
              ].map((stat) => (
                <div key={stat.label} className="p-5 rounded-2xl bg-white border border-border/15 shadow-2xs">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-2xl font-semibold leading-none">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Tracker Panel */}
            <div className="rounded-3xl border border-border/20 bg-white shadow-xs overflow-hidden grid md:grid-cols-3 gap-0">
              {/* Creator list column */}
              <div className="border-r border-border/15 flex flex-col bg-neutral-50/50 md:col-span-1">
                <div className="p-4 border-b border-border/15">
                  <span className="text-xs uppercase tracking-[0.1em] font-semibold text-muted-foreground">Creators Performance</span>
                </div>
                <div className="flex-1 divide-y divide-neutral-100 overflow-y-auto">
                  {affiliates.map((item, idx) => (
                    <button
                      key={item.name}
                      onClick={() => setSelectedIdx(idx)}
                      className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${selectedIdx === idx ? 'bg-white font-medium' : 'hover:bg-neutral-100/50'}`}
                    >
                      <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{item.code} • {item.roi} ROI</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground/60 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Details screen (Colspan 2) */}
              <div className="col-span-2 p-6 md:p-8 flex flex-col justify-between gap-8 min-h-[350px]">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <img src={active.avatar} alt={active.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="text-lg font-semibold">{active.name}</h4>
                      <p className="text-xs text-muted-foreground">{active.category} Creator</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-b border-neutral-100">
                    <div>
                      <p className="text-xs text-muted-foreground">Promo Code</p>
                      <p className="font-mono font-semibold text-sm mt-1 text-primary">{active.code}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Sales Generated</p>
                      <p className="font-semibold text-sm mt-1 text-emerald-600">₹{active.sales.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Clicks Tracked</p>
                      <p className="font-semibold text-sm mt-1">{active.clicks.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Campaign ROI</p>
                      <p className="font-semibold text-sm mt-1 text-indigo-600">{active.roi}</p>
                    </div>
                  </div>
                </div>

                {/* Simulated trend chart */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-muted-foreground uppercase">Sales Conversion Trend (Daily)</span>
                    <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">UP 18%</span>
                  </div>
                  <div className="h-24 flex items-end gap-2 pt-4">
                    {active.salesTrend.map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                        <div 
                          className="w-full bg-primary/20 group-hover:bg-primary/40 rounded-t transition-all duration-305" 
                          style={{ height: `${val * 1.5}px` }} 
                        />
                        <span className="text-[10px] text-muted-foreground">D{idx+1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-neutral-50/60 px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight">Enterprise Attribution Tech</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Our Affiliate module integrates deeply to capture clean, non-duplicative conversion events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Link2,
                title: "Dynamic Promo Codes",
                description: "Issue customizable influencer codes and sync tracking directly with popular platforms (Shopify, WooCommerce) to monitor checkout events."
              },
              {
                icon: IndianRupee,
                title: "Attributed ROI Charts",
                description: "Understand CAC and ROI per campaign. Our analytics show clear cost-per-click, cost-per-acquisition, and total attributed values."
              },
              {
                icon: LineChart,
                title: "Live Post Performance",
                description: "Watch click patterns spike in real-time as influencers post. Compare results across channels (Instagram vs YouTube)."
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
              Start Tracking Campaigns By ROI
            </h2>
            <p className="mt-4 text-primary-foreground/60 max-w-md">
              Attribute conversions seamlessly and optimize creator partnerships based on performance.
            </p>
          </div>
          <Button
            variant="ghost"
            size="lg"
            className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground shrink-0"
            asChild
          >
            <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Schedule an Attribution Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default AffiliatePage;
