import { motion } from "motion/react";

const TechnologyPlusPeople = () => {
  return (
    <section className="w-full bg-primary py-20 text-primary-foreground sm:py-24">
      <motion.div
        className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 text-center"
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="h2">Technology plus people</h2>
        <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-lg text-pretty">
          Our platform does the heavy lifting: AI-powered creator search,
          outreach, content moderation and campaign tracking. Our creative and
          campaign teams in Gurugram and Mumbai make sure every campaign runs well and
          reports honestly.
        </p>
      </motion.div>
    </section>
  );
};

export default TechnologyPlusPeople;
