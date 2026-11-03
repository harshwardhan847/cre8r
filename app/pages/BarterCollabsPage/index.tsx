import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Package, Camera, Star, Handshake } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CTA } from "~/constants";
import { ELIGIBILITY } from "~/constants";

const collabTypes = [
  {
    icon: Package,
    title: "Product gifting",
    description: "The brand sends a product. You post an honest unboxing, review or day-in-the-life video.",
    examples: ["Unboxing videos", "Product reviews", "Day-in-life features"],
    colorClass: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    icon: Camera,
    title: "Content Creation",
    description: "Create high-quality content for brands — lifestyle shots, recipes, tutorials — without requiring paid promotion.",
    examples: ["Instagram Reels", "YouTube Shorts", "Blog features"],
    colorClass: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    icon: Star,
    title: "Brand Ambassador",
    description: "Become a long-term ambassador for a brand. Ongoing barter arrangement with exclusive perks and early product access.",
    examples: ["Monthly product kits", "Exclusive launches", "Brand events"],
    colorClass: "bg-amber-50 text-amber-600 border-amber-100",
  },
  {
    icon: Handshake,
    title: "Affiliate + barter",
    description: "Keep the product and get a personal discount code. Earn commission on every sale it drives.",
    examples: ["Custom discount codes", "Revenue sharing", "Performance bonuses"],
    colorClass: "bg-rose-50 text-rose-600 border-rose-100",
  },
];

const requirements = [
  { label: "Minimum Followers", value: `${ELIGIBILITY.MIN_FOLLOWERS}+` },
  { label: "Platforms Supported", value: "Instagram, YouTube" },
  { label: "Content Quality", value: "Original & Authentic" },
  { label: "Engagement Rate", value: `Above ${ELIGIBILITY.MIN_ENGAGEMENT}` },
  { label: "Niches Covered", value: "All categories" },
  { label: "Payout Method", value: "Products / Cash" },
];

const definitions = [
  {
    title: "What is a barter collaboration?",
    body: "A barter collaboration is a deal where a brand gives a creator a product, or another agreed benefit, instead of a cash fee. In return the creator posts agreed content, such as a Reel, Story or YouTube video. On Cre8r, every offer lists the product, its value and the content expected before you accept.",
    lang: "en-IN",
  },
  {
    title: "Barter collab kya hota hai?",
    body: "Barter collaboration mein brand aapko paise ki jagah apna product deta hai. Badle mein aap us product par content banate hain, jaise Reel, Story ya YouTube video. Cre8r par har offer mein pehle se likha hota hai ki aapko kya milega aur kya post karna hai.",
    lang: "hi-Latn",
  },
];

const barterVsPaid = [
  { label: "You get", barter: "The product, sometimes plus a code", paid: "A cash fee, set in the offer" },
  { label: "Best when", barter: "You're building a portfolio", paid: "You have brand work to show" },
  {
    label: "On Cre8r",
    barter: `${ELIGIBILITY.MIN_FOLLOWERS}+ followers, ${ELIGIBILITY.MIN_ENGAGEMENT}+ engagement`,
    paid: `${ELIGIBILITY.MIN_FOLLOWERS}+ followers`,
  },
];

const brandsInvolved = [
  "Beauty", "Skincare", "Fashion", "Food", "Fitness", "Electronics", "Home Decor", "Wellness"
];

const BarterCollabsPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 px-6 md:px-8 mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="eyebrow">
              Barter collaborations · free for creators
            </p>
            <h1 className="h1 mt-4 text-balance">
              Free products from brands you'd actually use
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              Barter collaborations on Cre8r get you products from Indian brands in exchange for Reels, Stories and YouTube videos. It's the fastest way to build a brand portfolio, starting at {ELIGIBILITY.MIN_FOLLOWERS} followers.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button size="lg" asChild>
                <a href={CTA.CREATOR.href} target="_blank" rel="noopener noreferrer">
                  Apply for barter collabs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link to="/influencer">For Influencers</Link>
              </Button>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
          {/* Definitions — written to be lifted as the answer to "what is a barter collab" searches. */}
          <div className="flex flex-col gap-5">
            {definitions.map((def) => (
              <div key={def.title} lang={def.lang}>
                <h2 className="h3">{def.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{def.body}</p>
              </div>
            ))}
          </div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6 md:p-8 flex flex-col gap-6"
          >
            <h2 className="h3">Program at a glance</h2>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {requirements.map((req) => (
                <div key={req.label} className="p-3 md:p-4 rounded-xl bg-neutral-50/70 shadow-xs">
                  <div className="text-xs text-muted-foreground mb-1">{req.label}</div>
                  <div className="text-sm font-medium">{req.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Collab Types */}
      <section className="py-16 md:py-24 bg-neutral-50/70 px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="h2">Four ways to collab</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Pick the one that suits your content.
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
                className="rounded-2xl bg-white p-5 md:p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${type.colorClass}`}>
                  <type.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="h3">{type.title}</h3>
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
      <section className="py-16 md:py-24 bg-primary text-primary-foreground px-6 md:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h2 mb-4"
          >
            Brands looking for creators right now
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
            variant="ghost"
            size="lg"
            className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            asChild
          >
            <a href={CTA.CREATOR.href} target="_blank" rel="noopener noreferrer">
              {CTA.CREATOR.label}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Barter vs paid */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="mx-auto max-w-3xl flex flex-col gap-10">
          <h2 className="h2 text-center">Barter or paid: which is right for you?</h2>
          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border/10">
                  <th className="p-4 md:p-5" />
                  <th scope="col" className="p-4 md:p-5 font-medium">Barter</th>
                  <th scope="col" className="p-4 md:p-5 font-medium">Paid</th>
                </tr>
              </thead>
              <tbody>
                {barterVsPaid.map((row) => (
                  <tr key={row.label} className="border-b border-border/10 last:border-0">
                    <th scope="row" className="p-4 md:p-5 font-medium">{row.label}</th>
                    <td className="p-4 md:p-5 text-muted-foreground">{row.barter}</td>
                    <td className="p-4 md:p-5 text-muted-foreground">{row.paid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-2xl border border-border/10 bg-card p-6">
            <h3 className="h3">Do I need to disclose a barter collab?</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Yes. A free product counts as a material connection under ASCI's influencer guidelines, so label the post clearly, for example with #Collab or #Ad.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BarterCollabsPage;
