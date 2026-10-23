import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

interface ScrollSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  /**
   * "scale-up": Starts smaller, smoothly zooms to full size as it enters viewport,
   *             stays 1.0 while in reading view, then gently scales down as it scrolls past.
   * "hero": Specially tuned for hero: starts at 1.0 and gently scales down and lifts up as you scroll down.
   */
  variant?: "scale-up" | "hero";
  initialScale?: number;
  exitScale?: number;
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  id,
  className = "",
  variant = "scale-up",
  initialScale = 0.88,
  exitScale = 0.95,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Track entrance: when top enters bottom of viewport until top is ~25% from top of viewport
  const { scrollYProgress: enterProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 25%"],
  });

  // Track exit: when bottom of section is 75% from top until bottom leaves top of viewport
  const { scrollYProgress: exitProgress } = useScroll({
    target: containerRef,
    offset: ["end 75%", "end start"],
  });

  // Track hero scroll (start at top until bottom of hero leaves top)
  const { scrollYProgress: heroProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Spring physics for buttery-smooth interpolation
  const springEnter = useSpring(enterProgress, {
    stiffness: 95,
    damping: 26,
    restDelta: 0.001,
  });

  const springExit = useSpring(exitProgress, {
    stiffness: 95,
    damping: 26,
    restDelta: 0.001,
  });

  const springHero = useSpring(heroProgress, {
    stiffness: 95,
    damping: 26,
    restDelta: 0.001,
  });

  // Combined scale transform
  const scale = useTransform(
    [springEnter, springExit, springHero],
    ([enter, exit, hero]) => {
      if (shouldReduceMotion) return 1;

      if (variant === "hero") {
        // Hero: begins at 1.0, scales down to 0.93 as you scroll down
        return 1 - (hero as number) * 0.07;
      }

      // Exit phase takes precedence once section bottom begins leaving
      if ((exit as number) > 0.01) {
        return 1 - (exit as number) * (1 - exitScale);
      }

      // Entrance phase: starts at initialScale and zooms up to 1.0
      return initialScale + (enter as number) * (1 - initialScale);
    }
  );

  // Combined opacity transform
  const opacity = useTransform(
    [springEnter, springExit, springHero],
    ([enter, exit, hero]) => {
      if (shouldReduceMotion) return 1;

      if (variant === "hero") {
        return Math.max(0.35, 1 - (hero as number) * 0.65);
      }

      if ((exit as number) > 0.01) {
        return Math.max(0.4, 1 - (exit as number) * 0.5);
      }

      return 0.35 + (enter as number) * 0.65;
    }
  );

  // Combined vertical parallax translation (y)
  const y = useTransform(
    [springEnter, springExit, springHero],
    ([enter, exit, hero]) => {
      if (shouldReduceMotion) return 0;

      if (variant === "hero") {
        return -(hero as number) * 50;
      }

      if ((exit as number) > 0.01) {
        return -(exit as number) * 35;
      }

      return (1 - (enter as number)) * 60;
    }
  );

  // Subtle 3D tilt for extra parallax depth
  const rotateX = useTransform(springEnter, (enter) => {
    if (shouldReduceMotion || variant === "hero") return 0;
    return (1 - enter) * 3; // 3deg -> 0deg
  });

  return (
    <section
      id={id}
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{ perspective: "1200px" }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          y,
          rotateX,
          transformOrigin: "center 20%",
        }}
        className="w-full will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default ScrollSection;
