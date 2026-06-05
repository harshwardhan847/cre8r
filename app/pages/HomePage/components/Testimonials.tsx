import { motion } from "motion/react";
import { Link } from "react-router";

const caseStudies = [
  {
    quote:
      "A structured creator-discovery framework improved shortlist quality and reduced decision cycles for campaign planning.",
    name: "D2C Skincare Brand",
    role: "Discovery + execution",
    company: "Case study placeholder",
    topBorder: "border-t-violet-400",
  },
  {
    quote:
      "Campaign briefing and performance visibility helped teams iterate faster during active creator collaborations.",
    name: "Consumer Tech Launch",
    role: "Execution + reporting",
    company: "Case study placeholder",
    topBorder: "border-t-sky-400",
  },
  {
    quote:
      "Geo-targeted creator workflows and better matching logic improved consistency while scaling campaign volume.",
    name: "F&B Expansion",
    role: "Acquisition at scale",
    company: "Case study placeholder",
    topBorder: "border-t-amber-400",
  },
  {
    quote:
      "Clear campaign feedback loops reduced communication lag and improved delivery confidence across stakeholders.",
    name: "Retail Pilot",
    role: "Collaboration ops",
    company: "Case study placeholder",
    topBorder: "border-t-rose-400",
  },
  {
    quote:
      "Integrated discovery, matching, and monitoring gave teams stronger control over outcomes in every campaign phase.",
    name: "Growth Team",
    role: "Planning + optimisation",
    company: "Case study placeholder",
    topBorder: "border-t-emerald-400",
  },
];

type CaseStudy = (typeof caseStudies)[0];

const TestimonialCard = ({
  t,
  delay = 0,
}: {
  t: CaseStudy;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className={`p-6 rounded-xl bg-white border border-neutral-100 border-t-4 ${t.topBorder} shadow-sm flex flex-col gap-4`}
  >
    <p className="text-sm text-foreground leading-relaxed">
      &ldquo;{t.quote}&rdquo;
    </p>
    <div className="flex items-center gap-3 mt-auto pt-3 border-t border-neutral-100">
      <div className="w-8 h-8 rounded-lg bg-primary shrink-0" />
      <div>
        <p className="text-xs font-semibold text-foreground">{t.name}</p>
        <p className="text-xs text-muted-foreground">
          {t.role}, {t.company}
        </p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="py-24 bg-neutral-50/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
            Credibility
          </p>
          <h2 className="text-4xl font-light tracking-tight">
            Case-study previews
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Detailed case studies are being added. Explore structured
            placeholders for now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start max-w-5xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <TestimonialCard t={caseStudies[0]} delay={0} />
            <TestimonialCard t={caseStudies[3]} delay={0.1} />
          </div>

          {/* Column 2 — featured card */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.4 }}
              className={`p-8 rounded-xl bg-white border border-neutral-100 border-t-4 ${caseStudies[2].topBorder} shadow-md flex flex-col gap-4`}
            >
              <span className="text-5xl text-neutral-200 font-serif leading-none select-none">
                &ldquo;
              </span>
              <p className="text-base text-foreground leading-relaxed -mt-2">
                {caseStudies[2].quote}
              </p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-xl bg-primary shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {caseStudies[2].name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {caseStudies[2].role}, {caseStudies[2].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <TestimonialCard t={caseStudies[1]} delay={0.08} />
            <TestimonialCard t={caseStudies[4]} delay={0.16} />
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/case-studies"
            className="text-sm text-foreground/80 transition hover:text-foreground"
          >
            View all case studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
