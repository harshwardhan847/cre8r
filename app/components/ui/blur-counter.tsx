import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface BlurCounterProps {
  value: string | number;
  duration?: number;
  className?: string;
}

export const BlurCounter = ({
  value,
  duration = 0.6,
  className = "",
}: BlurCounterProps) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [isBlurring, setIsBlurring] = useState(false);

  useEffect(() => {
    if (displayValue !== value) {
      setIsBlurring(true);
      const timer = setTimeout(() => {
        setDisplayValue(value);
        setIsBlurring(false);
      }, duration * 500); // Half duration for blur phase

      return () => clearTimeout(timer);
    }
  }, [value, displayValue, duration]);

  return (
    <motion.span
      className={className}
      animate={{
        opacity: isBlurring ? 0.4 : 1,
        y: isBlurring ? -4 : 0,
        filter: isBlurring ? "blur(4px)" : "blur(0px)",
      }}
      transition={{
        duration: duration * 0.5,
        ease: "easeInOut",
      }}
    >
      {displayValue}
    </motion.span>
  );
};
