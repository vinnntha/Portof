import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface ScrollSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function ScrollSection({ children, id, className = "" }: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const disableParallax = shouldReduceMotion || isMobile;

  // Map progress to scale, opacity, and translation
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    disableParallax ? [1, 1, 1, 1] : [0.95, 1, 1, 0.92]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    disableParallax ? [0.6, 1, 1, 0.8] : [0.1, 1, 1, 0.6]
  );
  
  const y = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    disableParallax ? [0, 0, 0, 0] : [50, 0, 0, -90]
  );

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{ scale, opacity, y }}
      className={`origin-center ${disableParallax ? "" : "will-change-transform"} ${className}`}
    >
      {children}
    </motion.div>
  );
}
