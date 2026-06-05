import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";

const openPositions = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build the next generation of our creator marketing platform using React, TypeScript, and modern web technologies.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Motion"],
  },
  {
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Mumbai / Remote",
    type: "Full-time",
    description: "Drive B2B acquisition through content, partnerships, and data-driven campaigns. Own the full funnel from awareness to activation.",
    skills: ["Performance Marketing", "B2B SaaS", "Content Strategy", "Analytics"],
  },
  {
    title: "Sales Executive — Brand Partnerships",
    department: "Sales",
    location: "Bangalore / Mumbai",
    type: "Full-time",
    description: "Identify and onboard brand partners. Build long-term relationships with marketing teams at consumer and D2C brands.",
    skills: ["B2B Sales", "Influencer Marketing", "CRM", "Negotiation"],
  },
  {
    title: "Creator Success Manager",
    department: "Operations",
    location: "Delhi NCR",
    type: "Full-time",
    description: "Be the primary point of contact for our creator network. Help creators maximize their earnings and deliverable quality.",
    skills: ["Creator Economy", "Communication", "Campaign Management"],
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Design intuitive and beautiful product experiences across our brand and creator-facing platforms.",
    skills: ["Figma", "Product Design", "User Research", "Design Systems"],
  },
];

const perks = [
  { title: "Remote-First", desc: "Work from anywhere. We trust you to do great work wherever you are." },
  { title: "Equity Upside", desc: "Be part of the growth story. We offer competitive ESOPs to all full-time hires." },
  { title: "Health Coverage", desc: "Full medical, dental, and vision coverage for you and your family." },
  { title: "Learning Budget", desc: "₹25,000/year for courses, conferences, and books of your choice." },
  { title: "Creator Access", desc: "Unique access to the creator economy — meet, collab, and learn from India's top creators." },
  { title: "Small, High-Impact Team", desc: "Move fast, own large scopes, and see your work affect thousands of users immediately." },
];

const HiringPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 md:px-8 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Careers at Cre8r
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl font-light tracking-tight leading-tight">
            Join Our Mission
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-xl">
            We're building the future of end-to-end influencer marketing. If you're passionate about the creator economy, data, and building scalable products, we want to hear from you.
          </p>
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border/20">
            <div>
              <div className="text-2xl font-light">{openPositions.length}</div>
              <div className="text-xs text-muted-foreground">Open Positions</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <div className="text-2xl font-light">3</div>
              <div className="text-xs text-muted-foreground">Offices</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <div className="text-2xl font-light">Remote</div>
              <div className="text-xs text-muted-foreground">Friendly</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-neutral-50/70 px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-light tracking-tight">Open Positions</h2>
            <p className="mt-3 text-muted-foreground max-w-lg">
              All roles include competitive compensation, equity, and the opportunity to shape a fast-growing platform.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {openPositions.map((job, i) => (
              <motion.article
                key={job.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className="rounded-2xl border border-border/20 bg-white p-7 transition-all hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/5 text-primary/60 border border-primary/10">
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium">{job.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-xl">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.skills.map((skill) => (
                        <span key={skill} className="text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0">
                    <Button variant="outline" size="sm" asChild>
                      <a href={CONSTANTS.HIRING_FORM_URL} target="_blank" rel="noopener noreferrer">
                        Apply Now
                        <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 bg-primary text-primary-foreground px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-light text-center mb-16"
          >
            Why you'll love working here
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 hover:bg-primary-foreground/10 transition-colors"
              >
                <h3 className="text-lg font-medium text-primary-foreground">{perk.title}</h3>
                <p className="text-sm text-primary-foreground/60 mt-2 leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-8 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-light tracking-tight">Don't see the right role?</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We're always open to exceptional talent. Send us your profile and tell us how you'd contribute to the team.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button size="lg" asChild>
              <a href={`mailto:${CONSTANTS.CONTACT_EMAIL_BRANDS}`}>
                Send Your Profile
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default HiringPage;
