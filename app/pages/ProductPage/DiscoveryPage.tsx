import { motion } from "motion/react";
import React, { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Search, SlidersHorizontal, CheckCircle2, ShieldCheck, Users, Eye, Sparkles } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";

// Mock creators data for interactive widget
const mockCreators = [
  {
    name: "Aarav Sharma",
    handle: "@aarav_tech",
    category: "Tech & Gadgets",
    location: "Bangalore",
    followers: "84K",
    engagement: "4.8%",
    credibility: "98%",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
    tags: ["Unboxing", "Gadgets", "Python"]
  },
  {
    name: "Riya Iyer",
    handle: "@riyaiyer_fits",
    category: "Fitness & Lifestyle",
    location: "Mumbai",
    followers: "120K",
    engagement: "5.2%",
    credibility: "95%",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    tags: ["Yoga", "Vegan Diet", "Activewear"]
  },
  {
    name: "Karan Johar (Chef)",
    handle: "@chef_karan",
    category: "Food & Cooking",
    location: "Delhi",
    followers: "45K",
    engagement: "6.7%",
    credibility: "99%",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    tags: ["Baking", "Street Food", "Recipes"]
  },
  {
    name: "Neha Goel",
    handle: "@nehagoel_travels",
    category: "Travel & Culture",
    location: "Mumbai",
    followers: "240K",
    engagement: "3.9%",
    credibility: "93%",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    tags: ["Solo Travel", "Luxury Stays", "Vlogs"]
  }
];

const DiscoveryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [demoMode, setDemoMode] = useState<"sandbox" | "walkthrough">("sandbox");

  const categories = ["All", "Tech & Gadgets", "Fitness & Lifestyle", "Food & Cooking", "Travel & Culture"];
  const locations = ["All", "Bangalore", "Mumbai", "Delhi"];

  const filteredCreators = mockCreators.filter((creator) => {
    const matchCategory = selectedCategory === "All" || creator.category === selectedCategory;
    const matchLocation = selectedLocation === "All" || creator.location === selectedLocation;
    const matchSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          creator.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          creator.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchLocation && matchSearch;
  });

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Discovery Module
          </div>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground leading-[1.1]">
            Pinpoint the Perfect <br />
            Creators in Seconds
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Stop guessing. Search across our pre-vetted index of 4.1Mn+ global creators. Refine by niche, audience location, engagement rate, and verified credibility scores to maximize your match rate.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <Button size="lg" asChild>
              <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book a Walkthrough
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={CONSTANTS.CREATOR_FORM_URL} target="_blank" rel="noopener noreferrer">Join Creator Pool</a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Interactive Tool Section */}
      <section className="py-16 px-6 md:px-8 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Interactive Demo</p>
          <h2 className="mt-2 text-3xl font-light tracking-tight">Test-drive the Filter Engine</h2>
          <p className="mt-2 text-muted-foreground">Adjust filters or watch an interactive walkthrough of our Discovery Module.</p>
        </div>

        {/* Demo Mode Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl p-1 bg-neutral-100 border border-neutral-200/50">
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
              onClick={() => setDemoMode("walkthrough")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                demoMode === "walkthrough"
                  ? "bg-white text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Interactive Video Walkthrough
            </button>
          </div>
        </div>

        {demoMode === "walkthrough" ? (
          <div className="rounded-3xl border border-border/20 bg-white shadow-xs overflow-hidden aspect-video relative w-full">
            <iframe
              src={CONSTANTS.SUPADEMO.DISCOVERY}
              loading="lazy"
              title="Discovery Walkthrough"
              allow="clipboard-write"
              frameBorder="0"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        ) : (
          <div className="rounded-3xl border border-border/20 bg-white shadow-xs overflow-hidden">
            {/* Filters Bar */}
            <div className="p-6 md:p-8 bg-neutral-50/70 border-b border-border/15 flex flex-col gap-6 md:flex-row md:items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by name, handle, tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-border/30 bg-white focus:outline-none focus:ring-1 focus:ring-primary/45"
                />
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Niche:</span>
                </div>
                <select 
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="text-sm rounded-xl border border-border/30 bg-white p-2 focus:outline-none focus:ring-1 focus:ring-primary/45"
                >
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <span className="text-sm font-medium text-muted-foreground">Location:</span>
                <select 
                  value={selectedLocation} 
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="text-sm rounded-xl border border-border/30 bg-white p-2 focus:outline-none focus:ring-1 focus:ring-primary/45"
                >
                  {locations.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
            </div>

            {/* Creators List Panel */}
            <div className="p-6 md:p-8 min-h-[300px]">
              {filteredCreators.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCreators.map((creator, i) => (
                    <motion.div 
                      key={creator.handle}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: i * 0.05 }}
                      className="p-5 rounded-2xl border border-border/10 bg-neutral-50/30 flex items-start gap-4 hover:shadow-xs transition-all"
                    >
                      <img 
                        src={creator.avatar} 
                        alt={creator.name} 
                        className="w-12 h-12 rounded-full object-cover border border-border/10"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-semibold text-sm truncate">{creator.name}</h4>
                          <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                        </div>
                        <p className="text-xs text-muted-foreground">{creator.handle}</p>
                        
                        <div className="mt-3 flex items-center gap-3 flex-wrap">
                          <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-primary/5 text-primary border border-primary/10">
                            {creator.category}
                          </span>
                          <span className="text-[10px] text-muted-foreground font-medium">
                            📍 {creator.location}
                          </span>
                        </div>

                        <div className="mt-4 grid grid-cols-3 gap-2 pt-3 border-t border-neutral-100 text-center">
                          <div>
                            <p className="text-xs text-muted-foreground">Followers</p>
                            <p className="font-semibold text-sm mt-0.5">{creator.followers}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Eng. Rate</p>
                            <p className="font-semibold text-sm mt-0.5 text-indigo-600">{creator.engagement}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Credibility</p>
                            <p className="font-semibold text-sm mt-0.5 text-emerald-600">{creator.credibility}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <Users className="w-12 h-12 text-muted-foreground/30 mb-3" />
                  <h4 className="text-base font-semibold text-muted-foreground">No creators found</h4>
                  <p className="text-xs text-muted-foreground max-w-xs mt-1">Try expanding your filter parameters or search query.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-neutral-50/60 px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight">Engineered for Precision</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Our Discovery features enable brands to access clean, accurate datasets and bypass inflated bot accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: SlidersHorizontal,
                title: "25+ Advanced Filters",
                description: "Filter creators by exact audience demographics (age, gender, city, country), follower tier, active niche tags, and content format."
              },
              {
                icon: ShieldCheck,
                title: "Fake Follower Audit",
                description: "Instantly check fake follower percentages and lookalike bot engagement stats. See true brand safety metrics prior to contract offers."
              },
              {
                icon: Eye,
                title: "View Attributed Performance",
                description: "Examine actual historic views and performance benchmarks from previous brand collaborations hosted on the platform."
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
              Unlock the Discovery Suite
            </h2>
            <p className="mt-4 text-primary-foreground/60 max-w-md">
              Start building targeted lists of pre-vetted niche creators for your next acquisition campaign.
            </p>
          </div>
          <Button
            variant="ghost"
            size="lg"
            className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground shrink-0"
            asChild
          >
            <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book a Custom Walkthrough
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default DiscoveryPage;
