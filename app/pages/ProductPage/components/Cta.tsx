import { motion } from "motion/react";
import { Button } from "~/components/ui/button";
import { CTA } from "~/constants";

const Cta = () => {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12">
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-white shadow-sm px-6 py-14 text-center sm:rounded-3xl sm:py-24 lg:py-28"
          initial={{ opacity: 0, y: 24, filter: "blur(0px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="mx-auto max-w-4xl">
            <motion.h2
              className="display uppercase"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Scale influencer
            </motion.h2>
            <motion.p
              className="display mt-2 uppercase text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-400 to-blue-400"
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
                size="lg"
                className="mt-10 h-12 rounded-xl bg-sky-100 border-blue-400 border text-blue-400 px-10 text-base font-medium hover:bg-primary-foreground/90"
                asChild
              >
                <a
                  href={CTA.BRAND.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CTA.BRAND.label}
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
