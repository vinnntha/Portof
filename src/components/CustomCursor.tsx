"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverType, setHoverType] = useState<"default" | "interactive" | "card">("default");
 
  // Position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring configuration for the lag ring
  const springConfig = { damping: 30, stiffness: 280, mass: 0.6 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable custom cursor on mobile/touch screens
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) {
      return;
    }

    // Add active class to html to hide default cursor
    document.documentElement.classList.add("custom-cursor-active");
    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Listeners for hover status on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isCardHover = 
        target.closest(".project-card") || 
        target.closest(".h-scroll-card") ||
        target.closest(".view-trigger") ||
        target.classList.contains("view-trigger");

      if (isCardHover) {
        setHoverType("card");
        return;
      }

      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.classList.contains("clickable");

      if (isInteractive) {
        setHoverType("interactive");
      } else {
        setHoverType("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-50 flex items-center justify-center mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          width: 44,
          height: 44,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hoverType === "card" ? 1.82 : hoverType === "interactive" ? 1.36 : 1,
          backgroundColor: hoverType === "card" ? "rgba(125, 211, 252, 0.15)" : "rgba(125, 211, 252, 0)",
          borderColor: hoverType === "card" || hoverType === "interactive" ? "#7DD3FC" : "rgba(125, 211, 252, 0.4)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      >
        {hoverType === "card" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[8px] font-bold text-ice-200 font-mono tracking-widest uppercase"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-ice-300 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hoverType !== "default" ? 0 : 1,
          opacity: hoverType !== "default" ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
