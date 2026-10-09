import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Link2, IndianRupee, Target, Clock } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CTA } from "~/constants";

/**
 * Affiliate & Lead Gen is announced but not live yet, so this page describes
 * what is coming and offers a walkthrough call rather than a product demo.
 */
const AffiliatePage = () => {
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            Affiliate & Lead Gen · Coming Soon
          </div>
          <h1 className="h1">
            Content to Commerce <br className="hidden sm:block" />
            Attribution & Leads
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We're building attribution and lead generation into Cre8r — creator promo codes, referral tracking and revenue attributed to each creator. Book a walkthrough to hear what's coming and get early access.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Button size="lg" asChild>
              <Link to={CTA.BRAND.href} target="_blank" rel="noopener noreferrer">
                Schedule a Platform Walkthrough
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/product/campaign-tracking">See Campaign Tracking</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="py-14 md:py-24 bg-neutral-50/60 px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="h2">What's Coming</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Tie creator content to the sales and leads it drives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Link2,
                title: "Dynamic Promo Codes",
                description: "Issue a unique code or referral link to each creator and see which ones drive checkouts."
              },
              {
                icon: IndianRupee,
                title: "Attributed ROI Charts",
                description: "Understand CAC and ROI per campaign, with revenue attributed back to individual creators."
              },
              {
                icon: Target,
                title: "Lead Generation",
                description: "Capture high-intent leads from creator campaigns and see which creators bring them in."
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
              Get Early Access
            </h2>
            <p className="mt-4 text-primary-foreground/60 max-w-md">
              Talk to the team about attribution and lead generation for your campaigns.
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

export default AffiliatePage;
