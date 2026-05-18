import { motion } from "motion/react";
import { Button } from "~/components/ui/button";

const Cta = () => {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12">
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-primary px-6 py-20 text-center sm:rounded-3xl sm:py-24 lg:py-28"
          initial={{ opacity: 0, y: 24, filter: "blur(0px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="mx-auto max-w-4xl">
            <motion.h2
              className="text-5xl font-extrabold uppercase leading-none tracking-[-0.06em] text-primary-foreground sm:text-6xl md:text-7xl lg:text-7xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Scale influencer
            </motion.h2>
            <motion.p
              className="mt-2 text-5xl font-extrabold uppercase leading-none tracking-[-0.06em] text-violet-400 drop-shadow-[0_0_1.25rem_rgba(244,214,255,0.5)] sm:text-6xl md:text-7xl lg:text-7xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              viewport={{ once: true }}
            >
              campaigns with cre8r
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button
                type="button"
                size="lg"
                className="mt-10 h-12 rounded-xl bg-primary-foreground px-10 text-base font-medium text-foreground hover:bg-primary-foreground/90"
              >
                Request a call back
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
