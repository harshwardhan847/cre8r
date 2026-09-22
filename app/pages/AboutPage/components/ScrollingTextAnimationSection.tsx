"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "~/lib/utils";
import { CTA } from "~/constants";
import { useIsMobile } from "~/lib/use-is-mobile";

type TextBlock = {
  id: string;
  content: string;
};

const textBlocks: TextBlock[] = [
  {
    id: "block-1",
    content:
      "We are a team of passionate marketers who have spent years navigating the digital media landscape.",
  },
  {
    id: "block-2",
    content:
      "We saw firsthand the frustrations brands faced with influencer marketing and knew there had to be a better way.",
  },
  // {
  //   id: "block-3",
  //   content:
  //     "Cre8r is built for performance, transparency, and genuine creator-brand connections.",
  // },
  // {
  //   id: "block-4",
  //   content:
  //     "Our AI-powered matchmaking analyzes influencer profiles, audience demographics, and content themes to find voices authentically aligned with your brand.",
  // },
];

const ScrollingTextAnimationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | "button" | null>(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Skip the scroll-position tracking on mobile — it recalculates
    // getBoundingClientRect for every block on every scroll frame, which is
    // unnecessary jank on small screens. Mobile renders all text at full
    // opacity instead (see isMobile check below).
    if (isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const viewportCenter = window.innerHeight / 2;
      let closestIndex: number | "button" | null = null;
      let smallestDistance = Infinity;

      // Check each text block
      blockRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - viewportCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      });

      // Check button
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - viewportCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = "button";
        }
      }

      setFocusedIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="w-full py-16 md:py-48"
      style={{ minHeight: "40vh" }}
    >
      <div className="sticky top-0 h-[40vh] flex flex-col items-center justify-center px-4">
        <div className="max-w-2xl mx-auto space-y-10 md:space-y-24">
          {textBlocks.map((block, index) => {
            const isHighlighted = isMobile || focusedIndex === index;

            return (
              <motion.div
                key={block.id}
                ref={(el) => {
                  blockRefs.current[index] = el;
                }}
                animate={{ opacity: isHighlighted ? 1 : 0.25 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={"text-center max-w-xl mx-auto"}
              >
                <p
                  className={cn(
                    "text-lg sm:text-2xl md:text-3xl font-light transition-colors leading-relaxed text-foreground",
                  )}
                >
                  {block.content}
                </p>
              </motion.div>
            );
          })}

          <motion.div
            ref={buttonRef}
            animate={{ opacity: isMobile || focusedIndex === "button" ? 1 : 0.25 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex justify-center pt-8 -mt-10 md:-mt-24"
          >
            <motion.a
              href={CTA.BRAND.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {CTA.BRAND.label}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingTextAnimationSection;
