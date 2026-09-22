import { motion } from "motion/react";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CONSTANTS, CTA } from "~/constants";

const openings = CONSTANTS.JOB_OPENINGS;

/**
 * Shown when there are no live roles. Closed positions are removed by deleting
 * them from CONSTANTS.JOB_OPENINGS, so the page never advertises a role that
 * is no longer open.
 */
const NoOpenings = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.15 }}
    className="mt-10 md:mt-12 max-w-md mx-auto rounded-3xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-8 md:p-10 flex flex-col items-center text-center gap-4"
  >
    <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center">
      <Briefcase className="w-6 h-6 text-primary/50" />
    </div>
    <div>
      <p className="font-medium text-foreground/80">No open roles right now</p>
      <p className="caption mt-1">
        We still want to hear from exceptional people — send us your profile and
        we'll reach out when something opens up.
      </p>
    </div>
    <Button size="lg" asChild>
      <a href={CTA.CAREERS.href} target="_blank" rel="noopener noreferrer">
        {CTA.CAREERS.label}
        <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </Button>
  </motion.div>
);

const OpeningsList = () => (
  <div className="mt-10 md:mt-14 mx-auto max-w-3xl flex flex-col gap-4">
    {openings.map((job, i) => (
      <motion.div
        key={`${job.role}-${job.location}`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: Math.min(i, 6) * 0.06 }}
        className="rounded-2xl bg-white border border-border/10 shadow-[0_8px_30px_rgba(0,0,0,0.03)] p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5"
      >
        <div className="min-w-0">
          <h3 className="h3">{job.role}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="caption inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              {job.location}
            </span>
            <span className="caption inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              {job.experience}
            </span>
          </div>
        </div>
        <Button size="lg" className="shrink-0" asChild>
          <a
            href={job.applyUrl ?? CTA.CAREERS.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {CTA.CAREERS.label}
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </Button>
      </motion.div>
    ))}
  </div>
);

const HiringPage = () => {
  const hasOpenings = openings.length > 0;

  return (
    <main className="min-h-screen bg-background flex items-center">
      <section className="w-full py-28 md:py-36 px-6 md:px-8 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="eyebrow">Careers at Cre8r</p>
          <h1 className="h1 mt-4">We're Hiring</h1>
          <p className="body-lg mt-6">
            We're building the future of end-to-end influencer marketing and
            always looking for exceptional people.
            {hasOpenings
              ? " Here's what's open right now."
              : " Fill out the form below and our team will get back to you."}
          </p>
        </motion.div>

        {hasOpenings ? <OpeningsList /> : <NoOpenings />}
      </section>
    </main>
  );
};

export default HiringPage;
