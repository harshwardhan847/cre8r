import { motion } from "motion/react";

type Founder = {
  name: string;
  role: string;
  image: string;
};

type Recognition = {
  title: string;
  source: string;
  logo: string;
  logoAlt: string;
  logoBgClass: string;
};

const founders: Founder[] = [
  {
    name: "Gaurav Sharma",
    role: "CEO & Founder",
    image: "https://placehold.co/640x760/e8e8e8/5e5e5e?text=Gaurav+Sharma",
  },
  {
    name: "Priya Kumar",
    role: "Managing Partner",
    image: "https://placehold.co/640x760/e8e8e8/5e5e5e?text=Priya+Kumar",
  },
  {
    name: "Riddhi Mehta",
    role: "Managing Partner",
    image: "https://placehold.co/640x760/e8e8e8/5e5e5e?text=Riddhi+Mehta",
  },
];

const recognitions: Recognition[] = [
  {
    title: "AI-powered creator discovery",
    source: "4.1Mn+ creator profiles",
    logo: "AI",
    logoAlt: "AI Matchmaking",
    logoBgClass: "bg-[#111] text-white",
  },
  {
    title: "Advanced creator briefing",
    source: "Clear goals and campaign guidelines",
    logo: "BR",
    logoAlt: "Briefing",
    logoBgClass: "bg-white text-[#181818] border border-black/10",
  },
  {
    title: "Live performance tracking",
    source: "Clicks, views, comments in one place",
    logo: "LT",
    logoAlt: "Live Tracking",
    logoBgClass: "bg-[#cce86b] text-[#202020]",
  },
];

const Founders = () => {
  return (
    <motion.section
      className="w-full py-16 md:py-24"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-360">
        <motion.div
          className="max-w-245"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <h2 className="text-[2.1rem] md:text-[3.15rem] leading-[1.1] tracking-[-0.02em] font-light text-[#9f9f9f]">
            <span className="font-medium text-[#161616]">Our story.</span> We
            are a team of passionate marketers building influencer campaigns
            with performance, transparency, and genuine connections at the core.
          </h2>
        </motion.div>

        <div className="mt-10 md:mt-14 flex flex-col xl:flex-row xl:items-end gap-6 md:gap-8 xl:gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 flex-1">
            {founders.map((founder, index) => (
              <motion.article
                key={founder.name}
                className="group"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: 0.12 + index * 0.08,
                }}
                whileHover={{ y: -4 }}
              >
                <div className="overflow-hidden rounded-[16px] bg-[#e6e6e6] aspect-[0.8]">
                  <motion.img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                </div>
                <motion.div
                  className="pt-3"
                  initial={{ opacity: 0.85 }}
                  whileHover={{ opacity: 1 }}
                >
                  <p className="text-[1.75rem] leading-tight text-[#161616] font-light md:text-[1.95rem]">
                    {founder.name}
                  </p>
                  <p className="text-[1.55rem] leading-tight text-[#6f6f6f] font-light md:text-[1.7rem]">
                    {founder.role}
                  </p>
                </motion.div>
              </motion.article>
            ))}
          </div>

          <aside className="w-full xl:w-77.5 xl:pb-14">
            <ul className="space-y-3">
              {recognitions.map((item, index) => (
                <motion.li
                  key={item.title}
                  className="rounded-[16px] bg-[#ececec] px-4 py-3 flex items-center gap-3"
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.25 + index * 0.08,
                  }}
                  whileHover={{ x: 2 }}
                >
                  <motion.div
                    aria-label={item.logoAlt}
                    className={`h-12 w-12 rounded-[10px] shrink-0 grid place-items-center text-base font-semibold ${item.logoBgClass}`}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    {item.logo}
                  </motion.div>
                  <div>
                    <p className="text-[1.65rem] leading-tight text-[#191919] font-normal">
                      {item.title}
                    </p>
                    <p className="text-[1.4rem] leading-tight text-[#7b7b7b]">
                      {item.source}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </motion.section>
  );
};

export default Founders;
