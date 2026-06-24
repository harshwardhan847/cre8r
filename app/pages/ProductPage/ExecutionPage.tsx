import { motion } from "motion/react";
import React, { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, MessageSquare, Briefcase, FileCheck, Send, CheckCircle2, Star, Play, Sparkles } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";

// Mock creators campaign pipeline for interactive widget
const initialCampaigns = [
  {
    creator: "Maya Patel",
    handle: "@mayacreates",
    stage: "In Review",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    brief: "Summer Lookbook Reel",
    chat: [
      { sender: "brand", text: "Hi Maya! Love the initial draft structure. Can we add the discount code text overlay in the first 3 seconds to capture attention?" },
      { sender: "creator", text: "Hey! Definitely, I will edit the overlay and re-upload the draft in an hour." }
    ],
    videoDraft: "summer_reel_v1_draft.mp4",
    approved: false
  },
  {
    creator: "Rohit Sen",
    handle: "@rohitsen_tech",
    stage: "Approved & Scheduled",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    brief: "SaaS App Review Video",
    chat: [
      { sender: "creator", text: "Uploaded the final render. Let me know if we are good to go." },
      { sender: "brand", text: "This is perfect Rohit! Approved and scheduled for June 15th." }
    ],
    videoDraft: "saas_app_review_final.mp4",
    approved: true
  },
  {
    creator: "Sanya Gupta",
    handle: "@sanyaeats",
    stage: "Brief Shared",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    brief: "Healthy Snack Review",
    chat: [
      { sender: "brand", text: "Hey Sanya, the brief for the snack brand is attached. Please confirm if the delivery date works." }
    ],
    videoDraft: null,
    approved: false
  }
];

const ExecutionPage = () => {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [newMessage, setNewMessage] = useState("");
  const [demoMode, setDemoMode] = useState<"sandbox" | "request" | "insights" | "creation">("sandbox");

  const activeCamp = campaigns[selectedIdx];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const updated = [...campaigns];
    updated[selectedIdx].chat.push({
      sender: "brand",
      text: newMessage
    });
    setCampaigns(updated);
    setNewMessage("");
  };

  const handleApproveDraft = () => {
    const updated = [...campaigns];
    updated[selectedIdx].approved = true;
    updated[selectedIdx].stage = "Approved & Scheduled";
    setCampaigns(updated);
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-750 text-xs font-medium uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Execution Module
          </div>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground leading-[1.1]">
            Seamless Campaign <br />
            Management & Chat
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Move away from messy spreadsheets and messaging apps. Run content approvals, direct communication channels, briefs distribution, and creator contract completions in a single collaborative interface.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <Button size="lg" asChild>
              <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Request a Demo Walkthrough
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/case-studies">See Creator Results</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Interactive Tool Section */}
      <section className="py-16 px-6 md:px-8 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Interactive Demo</p>
          <h2 className="mt-2 text-3xl font-light tracking-tight">Interactive Workflow Dashboard</h2>
          <p className="mt-2 text-muted-foreground">Select a creator below to coordinate chat logs, review drafts, or explore interactive feature walkthroughs.</p>
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
              onClick={() => setDemoMode("creation")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                demoMode === "creation"
                  ? "bg-white text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Campaign Creation & Insights
            </button>
            <button
              onClick={() => setDemoMode("request")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                demoMode === "request"
                  ? "bg-white text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Campaign Request
            </button>
            <button
              onClick={() => setDemoMode("insights")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                demoMode === "insights"
                  ? "bg-white text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Creator Insights
            </button>
          </div>
        </div>

        {demoMode !== "sandbox" ? (
          <div className="rounded-3xl border border-border/20 bg-white shadow-xs overflow-hidden aspect-video relative w-full">
            <iframe
              src={
                demoMode === "creation"
                  ? CONSTANTS.SUPADEMO.CAMPAIGN_CREATION
                  : demoMode === "request"
                  ? CONSTANTS.SUPADEMO.CAMPAIGN_REQUEST
                  : CONSTANTS.SUPADEMO.CREATOR_INSIGHTS
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
            <div className="border-r border-border/15 flex flex-col bg-neutral-50/50">
              <div className="p-4 border-b border-border/15">
                <span className="text-xs uppercase tracking-[0.1em] font-semibold text-muted-foreground">Active Collaborations</span>
              </div>
              <div className="flex-1 divide-y divide-neutral-100 overflow-y-auto">
                {campaigns.map((camp, idx) => (
                  <button
                    key={camp.creator}
                    onClick={() => setSelectedIdx(idx)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${selectedIdx === idx ? 'bg-white font-medium' : 'hover:bg-neutral-155/30'}`}
                  >
                    <img src={camp.avatar} alt={camp.creator} className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">{camp.creator}</p>
                      <p className="text-xs text-muted-foreground truncate">{camp.brief}</p>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 ${
                      camp.stage === "Approved & Scheduled" ? 'bg-emerald-50 text-emerald-700 border border-emerald-250' : 
                      camp.stage === "In Review" ? 'bg-amber-50 text-amber-700 border border-amber-250' : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      {camp.stage}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Central Chat & Details Columns (Colspan 2) */}
            <div className="col-span-2 flex flex-col min-h-[450px]">
              {/* Creator details header */}
              <div className="p-4 border-b border-border/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={activeCamp.avatar} alt={activeCamp.creator} className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <h4 className="text-sm font-semibold">{activeCamp.creator}</h4>
                    <p className="text-xs text-muted-foreground">{activeCamp.handle}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {activeCamp.videoDraft && !activeCamp.approved && (
                    <Button size="sm" variant="default" onClick={handleApproveDraft} className="text-xs h-8">
                      <FileCheck className="w-3.5 h-3.5 mr-1" />
                      Approve Draft
                    </Button>
                  )}
                  {activeCamp.approved && (
                    <div className="flex items-center text-xs text-emerald-600 font-semibold bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      Approved
                    </div>
                  )}
                </div>
              </div>

              {/* Chat screen */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4 max-h-[300px] min-h-[200px] bg-neutral-50/15">
                {activeCamp.chat.map((msg, i) => (
                  <div key={i} className={`flex ${msg.sender === 'brand' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'brand' ? 'bg-primary text-primary-foreground rounded-tr-none' : 'bg-neutral-100 text-foreground rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-border/15 flex items-center gap-2">
                <input
                  type="text"
                  placeholder={`Reply to ${activeCamp.creator}...`}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 text-sm bg-white rounded-xl border border-border/30 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary/45"
                />
                <Button type="submit" size="icon" className="w-9 h-9 shrink-0">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-neutral-50/60 px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight">Full Lifecycle Campaigning</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Our Execution suite streamlines contract alignment, draft cycles, and post-scheduling to keep outreach programs moving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Briefcase,
                title: "Brief Distribution",
                description: "Upload campaign guidelines, audio tracks, key highlights, and legal compliance checkboxes to automatically update shortlist creators."
              },
              {
                icon: MessageSquare,
                title: "Unified Creator Inbox",
                description: "Message multiple creators in bulk or keep structured chat logs next to contract approvals and content preview links."
              },
              {
                icon: FileCheck,
                title: "Draft Review Engine",
                description: "Preview creator uploaded media (vlogs, Reels, static posts). Add comments directly timestamped to videos or click single-button approval."
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
              Coordinate Your Campaigns Seamlessly
            </h2>
            <p className="mt-4 text-primary-foreground/60 max-w-md">
              Start building templates and launching campaigns without spreadsheet clutter.
            </p>
          </div>
          <Button
            variant="ghost"
            size="lg"
            className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground shrink-0"
            asChild
          >
            <Link to={CONSTANTS.CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book a Strategy Walkthrough
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ExecutionPage;
