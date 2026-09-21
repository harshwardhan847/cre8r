import { motion } from "motion/react";
import { useIsMobile } from "~/lib/use-is-mobile";

type Props = {};

const statItems = [
  {
    stat: "4Mn+",
    label: "Discoverable profiles",
    border: "border-l-violet-400",
  },
  { stat: "500Mn+", label: "Views generated", border: "border-l-emerald-400" },
  { stat: "6000+", label: "Content published", border: "border-l-amber-400" },
  { stat: "200+", label: "Campaigns delivered", border: "border-l-rose-400" },
];

const brands = [
  { name: "Bontress Pro", src: "/brands/Bontress Pro.png" },
  { name: "Fortune", src: "/brands/Fortune.png" },
  { name: "IDFC Bank", src: "/brands/IDFC bank.png" },
  { name: "Reebok", src: "/brands/Reebok Logo.jpg" },
  { name: "Reequil", src: "/brands/Reequil.png" },
  { name: "Bontress Pro", src: "/brands/Bontress Pro.png" },
  { name: "Fortune", src: "/brands/Fortune.png" },
  { name: "IDFC Bank", src: "/brands/IDFC bank.png" },
  { name: "Reebok", src: "/brands/Reebok Logo.jpg" },
  { name: "Reequil", src: "/brands/Reequil.png" },
];

const Brands = (props: Props) => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 md:py-24 overflow-hidden">
      <div className="w-full flex overflow-hidden mb-12 md:mb-24 py-6 md:py-8 border-y border-black/5 bg-white transition-opacity duration-500">
        {isMobile ? (
          // Mobile: simple static wrapped row, no continuous JS-driven marquee.
          <div className="w-full flex flex-wrap items-center justify-center gap-6 px-6">
            {brands.slice(0, 5).map((brand, i) => (
              <img
          loading="lazy"
          decoding="async"
                key={i}
                src={brand.src}
                alt={brand.name}
                className="h-8 w-auto object-contain mix-blend-multiply"
              />
            ))}
          </div>
        ) : (
          <>
            <motion.div
              className="flex whitespace-nowrap gap-16 shrink-0 pr-16 items-center"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
              {brands.map((brand, i) => (
                <img
          loading="lazy"
          decoding="async"
                  key={i}
                  src={brand.src}
                  alt={brand.name}
                  className="h-14 md:h-20 w-auto object-contain mix-blend-multiply opacity-100 hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </motion.div>
            <motion.div
              className="flex whitespace-nowrap gap-16 shrink-0 pr-16 items-center"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
              {brands.map((brand, i) => (
                <img
          loading="lazy"
          decoding="async"
                  key={i}
                  src={brand.src}
                  alt={brand.name}
                  className="h-14 md:h-20 w-auto object-contain mix-blend-multiply opacity-100 hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </motion.div>
          </>
        )}
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
              Traction
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Automate Influencer Marketing
              <br /> to Drive ROI
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Thousands of brands trust Cre8r to discover creators, run
              campaigns and measure what matters most.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {statItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.4, ease: "easeOut" }}
                className={`p-4 md:p-6 rounded-xl bg-white border border-neutral-100 border-l-4 ${item.border} shadow-sm group hover:shadow-md transition-shadow cursor-default`}
              >
                <div className="text-2xl md:text-3xl font-semibold tracking-tight mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                  {item.stat}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
