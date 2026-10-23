import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Smile, Meh, Frown, MessageCircle, ScanSearch, PieChart, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CONSTANTS, CTA } from "~/constants";
import { DemoPlayer } from "~/components/DemoPlayer";
import CreatorAvatar from "./components/CreatorAvatar";

type Sentiment = "positive" | "neutral" | "negative";

// Mock campaign posts with comment sentiment for interactive widget
const posts = [
  {
    name: "Ananya Rao",
    platform: "Instagram Reel",
    totalComments: 1260,
    split: { positive: 72, neutral: 21, negative: 7 },
    comments: [
      { text: "Yeh serum maine bhi try kiya, skin sach mein glow karti hai!", sentiment: "positive" as Sentiment },
      { text: "Price kitna hai? Link share karo please", sentiment: "neutral" as Sentiment },
      { text: "Mere liye kaam nahi kiya, thoda sticky laga", sentiment: "negative" as Sentiment }
    ]
  },
  {
    name: "Vikram Nair",
    platform: "YouTube Short",
    totalComments: 740,
    split: { positive: 64, neutral: 28, negative: 8 },
    comments: [
      { text: "Bhai workout ke baad perfect hai, taste bhi accha hai", sentiment: "positive" as Sentiment },
      { text: "Kya yeh vegetarian hai?", sentiment: "neutral" as Sentiment },
      { text: "Delivery bahut late aayi", sentiment: "negative" as Sentiment }
    ]
  },
  {
    name: "Pooja Bhatt",
    platform: "Instagram Reel",
    totalComments: 980,
    split: { positive: 81, neutral: 15, negative: 4 },
    comments: [
      { text: "Recipe ekdum mast hai, kal hi banaungi!", sentiment: "positive" as Sentiment },
      { text: "Masala kaunsa use kiya?", sentiment: "neutral" as Sentiment },
      { text: "Thoda zyada spicy lag raha hai", sentiment: "negative" as Sentiment }
    ]
  }
];

const SENTIMENT_STYLES: Record<Sentiment, { label: string; icon: typeof Smile; bar: string; chip: string }> = {
  positive: { label: "Positive", icon: Smile, bar: "bg-emerald-400", chip: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  neutral: { label: "Neutral", icon: Meh, bar: "bg-neutral-300", chip: "bg-neutral-100 text-neutral-600 border border-neutral-200" },
  negative: { label: "Negative", icon: Frown, bar: "bg-rose-400", chip: "bg-rose-50 text-rose-700 border border-rose-200" }
};

const SentimentAnalysisPage = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [demoMode, setDemoMode] = useState<"sandbox" | "scanner">("sandbox");

  const active = posts[selectedIdx];

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Sentiment Analysis Module
          </div>
          <h1 className="h1">
            Hear What Audiences <br className="hidden sm:block" />
            Really Think
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Views tell you who saw a post; comments tell you how they felt about it. Break campaign comments down into positive, neutral and negative, and use the Competition Scanner to see what competing brands are running.
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
          <h2 className="h2 mt-2">Comment Sentiment Explorer</h2>
          <p className="mt-2 text-muted-foreground">Select a post below to see its sentiment split, or watch the Competition Scanner walkthrough.</p>
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

        {demoMode === "scanner" ? (
          <div className="bg-transparent overflow-hidden aspect-video relative w-full">
            <DemoPlayer
              demo={"compscan"}
              title="Competition Scanner Walkthrough"
            />
          </div>
        ) : (
          <div className="rounded-3xl border border-border/20 bg-white shadow-xs overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Post list column */}
            <div className="border-r border-border/15 flex flex-col bg-neutral-50/50 md:col-span-1">
              <div className="p-4 border-b border-border/15">
                <span className="eyebrow">Campaign Posts</span>
              </div>
              <div className="flex-1 divide-y divide-neutral-100 overflow-y-auto">
                {posts.map((post, idx) => (
                  <button
                    key={post.name}
                    onClick={() => setSelectedIdx(idx)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${selectedIdx === idx ? 'bg-white font-medium' : 'hover:bg-neutral-100/50'}`}
                  >
                    <CreatorAvatar name={post.name} className="w-10 h-10" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">{post.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{post.platform} • {post.split.positive}% positive</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground/60 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details screen (Colspan 2) */}
            <div className="md:col-span-2 p-6 md:p-8 flex flex-col gap-6 min-h-[350px]">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <CreatorAvatar name={active.name} className="w-12 h-12" />
                  <div>
                    <p className="text-lg font-semibold">{active.name}</p>
                    <p className="text-xs text-muted-foreground">{active.platform}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MessageCircle className="w-4 h-4" />
                  {active.totalComments.toLocaleString("en-IN")} comments
                </div>
              </div>

              {/* Sentiment split */}
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase">Sentiment Split</span>
                <div className="mt-3 h-3 w-full rounded-full overflow-hidden flex">
                  {(Object.keys(SENTIMENT_STYLES) as Sentiment[]).map((key) => (
                    <div key={key} className={SENTIMENT_STYLES[key].bar} style={{ width: `${active.split[key]}%` }} />
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-3 gap-4">
                  {(Object.keys(SENTIMENT_STYLES) as Sentiment[]).map((key) => {
                    const style = SENTIMENT_STYLES[key];
                    return (
                      <div key={key}>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <style.icon className="w-3.5 h-3.5" />
                          {style.label}
                        </span>
                        <p className="font-semibold text-base mt-0.5">{active.split[key]}%</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sample comments */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase">Sample Comments</span>
                {active.comments.map((comment) => (
                  <div key={comment.text} className="p-3 rounded-xl bg-neutral-50/50 border border-border/10 flex items-start justify-between gap-3">
                    <p className="text-sm text-foreground/80 leading-relaxed">{comment.text}</p>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 ${SENTIMENT_STYLES[comment.sentiment].chip}`}>
                      {SENTIMENT_STYLES[comment.sentiment].label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Feature Grid */}
      <section className="py-14 md:py-24 bg-neutral-50/60 px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="h2">Beyond Views and Likes</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Understand how your campaign landed with audiences — and how it stacks up against the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: PieChart,
                title: "Comment Sentiment",
                description: "See the positive, neutral and negative split of comments on every campaign post."
              },
              {
                icon: MessageCircle,
                title: "Audience Feedback",
                description: "Read the comments behind the numbers to spot questions, objections and praise early."
              },
              {
                icon: ScanSearch,
                title: "Competition Scanner",
                description: "See which creators competing brands are working with and the campaigns they are running."
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
              Know How Your Campaign Landed
            </h2>
            <p className="mt-4 text-primary-foreground/60 max-w-md">
              Read audience sentiment and keep an eye on competitors, all from Cre8r.
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

export default SentimentAnalysisPage;
