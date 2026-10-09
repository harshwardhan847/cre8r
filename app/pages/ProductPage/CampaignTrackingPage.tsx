import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Eye, Heart, MessageCircle, LineChart, ChevronRight, Activity, Users, Sparkles } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CONSTANTS, CTA } from "~/constants";
import { Supademo } from "~/components/Supademo";
import CreatorAvatar from "./components/CreatorAvatar";

// Mock live campaign posts for interactive widget
const campaignPosts = [
  {
    name: "Ananya Rao",
    handle: "@ananyarao",
    platform: "Instagram Reel",
    category: "Beauty & Skincare",
    views: 412000,
    likes: 28400,
    comments: 1260,
    viewsTrend: [8, 22, 34, 41, 46, 50, 52]
  },
  {
    name: "Vikram Nair",
    handle: "@vikramnair_fit",
    platform: "YouTube Short",
    category: "Fitness",
    views: 268000,
    likes: 15900,
    comments: 740,
    viewsTrend: [6, 14, 21, 27, 30, 33, 35]
  },
  {
    name: "Pooja Bhatt",
    handle: "@poojacooks",
    platform: "Instagram Reel",
    category: "Food & Cooking",
    views: 189000,
    likes: 14200,
    comments: 980,
    viewsTrend: [4, 10, 17, 22, 25, 27, 28]
  }
];

const engagementRate = (post: typeof campaignPosts[number]) =>
  (((post.likes + post.comments) / post.views) * 100).toFixed(1);

const CampaignTrackingPage = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [demoMode, setDemoMode] = useState<"sandbox" | "insights" | "creator">("sandbox");

  const active = campaignPosts[selectedIdx];

  // Calculate aggregate stats
  const totalViews = campaignPosts.reduce((sum, item) => sum + item.views, 0);
  const totalLikes = campaignPosts.reduce((sum, item) => sum + item.likes, 0);
  const totalComments = campaignPosts.reduce((sum, item) => sum + item.comments, 0);
  const averageEngagement = (((totalLikes + totalComments) / totalViews) * 100).toFixed(1);

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
      <section className="pb-10 md:pb-16 px-6 md:px-8 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-medium uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Campaign Tracking Module
          </div>
          <h1 className="h1">
            Track Every Campaign <br className="hidden sm:block" />
            Post as It Goes Live
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Follow views, likes and comments on every creator post in one dashboard. See how the campaign is doing as a whole and which creators are driving it.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Button size="lg" asChild>
              <Link to={CTA.BRAND.href} target="_blank" rel="noopener noreferrer">
                {CTA.BRAND.label}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Interactive Tool Section */}
      <section className="py-10 md:py-16 px-6 md:px-8 mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <p className="eyebrow">Interactive Demo</p>
          <h2 className="h2 mt-2">Live Campaign Tracker</h2>
          <p className="mt-2 text-muted-foreground">Select a creator below to see how their post is performing, or view interactive walkthroughs.</p>
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
              onClick={() => setDemoMode("insights")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                demoMode === "insights"
                  ? "bg-white text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Campaign Insights
            </button>
            <button
              onClick={() => setDemoMode("creator")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                demoMode === "creator"
                  ? "bg-white text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Creator Insights
            </button>
          </div>
        </div>

        {demoMode !== "sandbox" ? (
          <div className="bg-transparent overflow-hidden aspect-video relative w-full">
            <Supademo
              src={
                demoMode === "insights"
                  ? CONSTANTS.SUPADEMO.CAMPAIGN_CREATION
                  : CONSTANTS.SUPADEMO.CREATOR_INSIGHTS
              }
              title={`${demoMode} Walkthrough`}
            />
          </div>
        ) : (
          <>
            {/* Aggregated Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Total Views", value: totalViews.toLocaleString("en-IN"), icon: Eye, color: "text-sky-600 bg-sky-50" },
                { label: "Total Likes", value: totalLikes.toLocaleString("en-IN"), icon: Heart, color: "text-rose-600 bg-rose-50" },
                { label: "Total Comments", value: totalComments.toLocaleString("en-IN"), icon: MessageCircle, color: "text-indigo-600 bg-indigo-50" },
                { label: "Avg. Engagement", value: `${averageEngagement}%`, icon: LineChart, color: "text-emerald-600 bg-emerald-50" }
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
            <div className="rounded-3xl border border-border/20 bg-white shadow-xs overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Creator list column */}
              <div className="border-r border-border/15 flex flex-col bg-neutral-50/50 md:col-span-1">
                <div className="p-4 border-b border-border/15">
                  <span className="eyebrow">Live Posts</span>
                </div>
                <div className="flex-1 divide-y divide-neutral-100 overflow-y-auto">
                  {campaignPosts.map((item, idx) => (
                    <button
                      key={item.name}
                      onClick={() => setSelectedIdx(idx)}
                      className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${selectedIdx === idx ? 'bg-white font-medium' : 'hover:bg-neutral-100/50'}`}
                    >
                      <CreatorAvatar name={item.name} className="w-10 h-10" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{item.platform} • {engagementRate(item)}% ER</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground/60 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Details screen (Colspan 2) */}
              <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between gap-8 min-h-[350px]">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <CreatorAvatar name={active.name} className="w-12 h-12" />
                    <div>
                      <p className="text-lg font-semibold">{active.name}</p>
                      <p className="text-xs text-muted-foreground">{active.handle} • {active.category}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-b border-neutral-100">
                    <div>
                      <p className="text-xs text-muted-foreground">Views</p>
                      <p className="font-semibold text-sm mt-1 text-sky-600">{active.views.toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Likes</p>
                      <p className="font-semibold text-sm mt-1">{active.likes.toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Comments</p>
                      <p className="font-semibold text-sm mt-1">{active.comments.toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Engagement Rate</p>
                      <p className="font-semibold text-sm mt-1 text-indigo-600">{engagementRate(active)}%</p>
                    </div>
                  </div>
                </div>

                {/* Simulated trend chart */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-muted-foreground uppercase">Cumulative Views (Daily)</span>
                    <span className="text-xs text-sky-600 font-semibold bg-sky-50 px-2 py-0.5 rounded border border-sky-100">LIVE</span>
                  </div>
                  <div className="h-24 flex items-end gap-2 pt-4">
                    {active.viewsTrend.map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                        <div
                          className="w-full bg-primary/20 group-hover:bg-primary/40 rounded-t transition-all duration-300"
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
      <section className="py-14 md:py-24 bg-neutral-50/60 px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="h2">Know How Your Campaign Is Doing</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Every post, every creator and the campaign as a whole — tracked in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Activity,
                title: "Live Post Performance",
                description: "Watch views, likes and comments build up on each post after it goes live, across Instagram and YouTube."
              },
              {
                icon: LineChart,
                title: "Campaign Insights",
                description: "See campaign-wide totals and engagement in one dashboard instead of collecting screenshots from every creator."
              },
              {
                icon: Users,
                title: "Creator-level Breakdown",
                description: "Compare creators side by side to see who drove the most reach and engagement for your brand."
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
                <h3 className="h3">{feat.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-14 md:py-24 px-6 md:px-8 mx-auto max-w-6xl">
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="h2 max-w-lg">
              See Your Campaign Live
            </h2>
            <p className="mt-4 text-primary-foreground/60 max-w-md">
              Stop chasing creators for screenshots. Track every post in one dashboard.
            </p>
          </div>
          <Button
            variant="ghost"
            size="lg"
            className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground shrink-0"
            asChild
          >
            <Link to={CTA.BRAND.href} target="_blank" rel="noopener noreferrer">
              {CTA.BRAND.label}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default CampaignTrackingPage;
