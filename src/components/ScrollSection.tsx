import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface ScrollSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function ScrollSection({ children, id, className = "" }: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map progress to scale, opacity, and translation
  // If the user prefers reduced motion, disable the scaling/translation and just use a simple fade-in.
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    shouldReduceMotion ? [1, 1, 1, 1] : [0.95, 1, 1, 0.92]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0.1, 1, 1, 0.6]
  );
  
  const y = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    shouldReduceMotion ? [0, 0, 0, 0] : [50, 0, 0, -90]
  );

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{ scale, opacity, y }}
      className={`will-change-transform origin-center ${className}`}
    >
      {children}
    </motion.div>
  );
}
