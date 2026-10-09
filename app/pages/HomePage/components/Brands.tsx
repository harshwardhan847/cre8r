import { motion } from "motion/react";
import { useIsMobile } from "~/lib/use-is-mobile";
import { BRAND_LOGOS, CLAIMS, STAT_LABELS, STATS } from "~/constants";

type Props = {};

const statItems = [
  { stat: STATS.CREATORS, label: STAT_LABELS.CREATORS, border: "border-l-violet-400" },
  { stat: STATS.VIEWS, label: STAT_LABELS.VIEWS, border: "border-l-emerald-400" },
  { stat: STATS.CONTENT, label: STAT_LABELS.CONTENT, border: "border-l-amber-400" },
  { stat: STATS.CAMPAIGNS, label: STAT_LABELS.CAMPAIGNS, border: "border-l-rose-400" },
];

// Duplicated so the marquee loops seamlessly without a visible seam.
const brands = [...BRAND_LOGOS, ...BRAND_LOGOS];

/**
 * Every logo file is a square canvas with the mark floating in different
 * amounts of padding, so sizing by height alone made some marks look much
 * larger than others. Each logo instead fills an identical landscape box:
 * `object-cover` scales the square to the box width and trims the empty
 * padding above and below, so every mark gets the same width and the same
 * centre line.
 */
const BrandLogo = ({ brand, className }: { brand: (typeof BRAND_LOGOS)[number]; className: string }) => (
  <div className={`shrink-0 flex items-center justify-center overflow-hidden ${className}`}>
    <img
      loading="lazy"
      decoding="async"
      src={brand.src}
      alt={brand.name}
      className="w-full h-full object-cover object-center mix-blend-multiply"
    />
  </div>
);

const Brands = (props: Props) => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 md:py-24 overflow-hidden">
      <div className="w-full flex overflow-hidden mb-12 md:mb-24 py-6 md:py-8 border-y border-black/5 bg-white transition-opacity duration-500">
        {isMobile ? (
          // Mobile: simple static wrapped row, no continuous JS-driven marquee.
          <div className="w-full flex flex-wrap items-center justify-center gap-x-6 gap-y-4 px-6">
            {BRAND_LOGOS.map((brand) => (
              <BrandLogo key={brand.name} brand={brand} className="w-24 h-11" />
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
                <BrandLogo key={i} brand={brand} className="w-40 h-[72px]" />
              ))}
            </motion.div>
            <motion.div
              className="flex whitespace-nowrap gap-16 shrink-0 pr-16 items-center"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
              {brands.map((brand, i) => (
                <BrandLogo key={i} brand={brand} className="w-40 h-[72px]" />
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
            <p className="eyebrow">
              Traction
            </p>
            <h2 className="h2">
              Automate Influencer Marketing
              <br /> to Drive ROI
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {CLAIMS.BRAND_TRUST} to discover creators, run campaigns and measure
              what matters most.
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
