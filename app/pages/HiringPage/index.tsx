import { motion } from "motion/react";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";

const HiringPage = () => {
  return (
    <main className="min-h-screen bg-background flex items-center">
      <section className="w-full py-28 md:py-36 px-6 md:px-8 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Careers at Cre8r
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-tight">
            We're Hiring
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            We're building the future of end-to-end influencer marketing and always looking for exceptional people. Fill out the form below and our team will get back to you.
          </p>
        </motion.div>

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
            <p className="font-medium text-foreground/80">Apply to Cre8r</p>
            <p className="text-sm text-muted-foreground mt-1">Takes about 5 minutes</p>
          </div>
          <Button size="lg" asChild>
            <a href={CONSTANTS.HIRING_FORM_URL} target="_blank" rel="noopener noreferrer">
              Apply Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </section>
    </main>
  );
};

export default HiringPage;
