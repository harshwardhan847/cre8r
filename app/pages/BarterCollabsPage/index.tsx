import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Package, Camera, Star, Handshake } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";

const collabTypes = [
  {
    icon: Package,
    title: "Product Gifting",
    description: "Receive premium products from top brands in exchange for authentic, organic content posts. Perfect for building your portfolio.",
    examples: ["Unboxing videos", "Product reviews", "Day-in-life features"],
    accent: "border-t-violet-400",
  },
  {
    icon: Camera,
    title: "Content Creation",
    description: "Create high-quality content for brands — lifestyle shots, recipes, tutorials — without requiring paid promotion.",
    examples: ["Instagram Reels", "YouTube Shorts", "Blog features"],
    accent: "border-t-emerald-400",
  },
  {
    icon: Star,
    title: "Brand Ambassador",
    description: "Become a long-term ambassador for a brand. Ongoing barter arrangement with exclusive perks and early product access.",
    examples: ["Monthly product kits", "Exclusive launches", "Brand events"],
    accent: "border-t-amber-400",
  },
  {
    icon: Handshake,
    title: "Affiliate + Barter",
    description: "Combine barter benefits with an affiliate code. Get products for free, plus earn commissions on every sale you drive.",
    examples: ["Custom discount codes", "Revenue sharing", "Performance bonuses"],
    accent: "border-t-rose-400",
  },
];

const requirements = [
  { label: "Minimum Followers", value: "5,000+" },
  { label: "Platforms Supported", value: "Instagram, YouTube" },
  { label: "Content Quality", value: "Original & Authentic" },
  { label: "Engagement Rate", value: "Above 2%" },
  { label: "Niches Covered", value: "All categories" },
  { label: "Payout Method", value: "Products / Cash" },
];

const brandsInvolved = [
  "Beauty", "Skincare", "Fashion", "Food", "Fitness", "Electronics", "Home Decor", "Wellness"
];

const BarterCollabsPage = () => {
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
              Barter Collaborations
            </p>
            <h1 className="mt-4 text-5xl md:text-6xl font-light tracking-tight leading-tight">
              Collaborate for
              <br />
              Products
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              Access exclusive barter collaboration opportunities with premium brands. Create authentic content, grow your portfolio, and get premium products — no cash required to start.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <Button size="lg" asChild>
                <a href={CONSTANTS.CREATOR_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Apply as Creator
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link to="/influencer">For Influencers</Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border border-border/20 bg-white shadow-sm p-8 flex flex-col gap-6"
          >
            <h3 className="text-lg font-medium">Program at a glance</h3>
            <div className="grid grid-cols-2 gap-4">
              {requirements.map((req) => (
                <div key={req.label} className="p-4 rounded-xl bg-neutral-50 border border-border/20">
                  <div className="text-xs text-muted-foreground mb-1">{req.label}</div>
                  <div className="text-sm font-medium">{req.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collab Types */}
      <section className="py-24 bg-neutral-50/70 px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light tracking-tight">Types of Collabs</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Choose the collab format that works best for your content style and audience.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {collabTypes.map((type, i) => (
              <motion.article
                key={type.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ y: -3 }}
                className={`rounded-2xl border border-t-4 bg-white p-7 flex flex-col gap-4 ${type.accent} shadow-sm hover:shadow-md transition-all`}
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-border/20 flex items-center justify-center">
                  <type.icon className="w-5 h-5 text-foreground/60" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">{type.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{type.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/10">
                  {type.examples.map((ex) => (
                    <span key={ex} className="text-xs px-3 py-1 rounded-full bg-primary/5 text-primary/60 border border-primary/10">
                      {ex}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-24 bg-primary text-primary-foreground px-6 md:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-light mb-4"
          >
            Brands actively seeking barter creators
          </motion.h2>
          <p className="text-primary-foreground/60 mb-12 max-w-lg mx-auto">
            We have hundreds of brands across these categories looking for authentic creator collaborations right now.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {brandsInvolved.map((brand, i) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="px-5 py-2.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 text-sm text-primary-foreground/70 hover:bg-primary-foreground/20 transition-colors"
              >
                {brand}
              </motion.span>
            ))}
          </div>
          <Button
            variant="outline"
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <a href={CONSTANTS.CREATOR_FORM_URL} target="_blank" rel="noopener noreferrer">
              Apply to Collaborate
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default BarterCollabsPage;
