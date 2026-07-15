"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import ProfileCard from "./ProfileCard";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullSubtitle = "Code. Design. Film. Fly.";

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullSubtitle.substring(0, index));
      index++;
      if (index > fullSubtitle.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#050810] overflow-hidden px-6 md:px-12 py-24">

      {/* Massive Watermark Stroke Text */}
      <div className="absolute top-[15%] left-[5%] bg-word opacity-[0.05] pointer-events-none select-none">
        STUDIO
      </div>

      {/* Floating Ambient Orb - Top Right */}
      <div className="absolute top-[-10%] right-[-10%] md:top-[10%] md:right-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.12)_0%,transparent_70%)] blur-3xl animate-[footer-breathe_7s_ease-in-out_infinite_alternate] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-10 lg:pt-0">

        {/* Left Column: Text Block (Anchored Bottom-Left on Desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:justify-end text-left h-full lg:pt-16">
          {/* Eyebrow tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-1.5 w-1.5 bg-ice-300 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-ice-300 uppercase">
              CREATIVE DEVELOPER × VISUAL ARTIST
            </span>
          </motion.div>

          {/* Split Text Name */}
          <div className="relative w-full flex flex-col mb-4 select-none cursor-default">
            <SplitText
              text="AVERILL"
              className="text-6xl md:text-8xl lg:text-[10rem] font-syne font-bold tracking-tighter text-[#F0F4FF] leading-none"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />
            <SplitText
              text="KEVIN"
              className="text-6xl md:text-8xl lg:text-[10rem] font-syne font-bold tracking-tighter text-[#7DD3FC] leading-none"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />
          </div>

          {/* Subtitle - Typwriter effect */}
          <div className="h-8 mb-10 flex items-center">
            <p className="text-lg md:text-xl font-mono text-ice-400 tracking-wider">
              {typedText}
              <span className="inline-block w-1.5 h-5 ml-1 bg-ice-300 animate-[blink_1s_infinite_step-start]" />
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="relative inline-flex items-center justify-center px-8 py-3.5 border border-ice-300 bg-transparent text-ice-300 font-mono text-xs uppercase tracking-widest overflow-hidden rounded-md transition-all duration-500 hover:shadow-[0_0_30px_rgba(125,211,252,0.3)] hover:bg-ice-300 hover:text-[#050810] group clickable"
            >
              View Work
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-8 py-3.5 border border-ice-500/20 bg-ice-950/20 text-ice-400 font-mono text-xs uppercase tracking-widest overflow-hidden rounded-md transition-all duration-500 hover:border-ice-400 hover:text-ice-200 hover:bg-ice-500/10 group clickable"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Right Column: ProfileCard */}
        <motion.div
          className="lg:col-span-5 flex items-center justify-center mt-4 lg:mt-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
        >
          <ProfileCard
            name="Averill Kevin"
            title="Creative Developer"
            handle="averillkevin"
            status="Available for hire"
            contactText="Contact Me"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            behindGlowEnabled
            behindGlowColor="rgba(125, 190, 255, 0.55)"
            innerGradient="linear-gradient(145deg,#0d1b3e 0%,#1a2c5e 40%,#7DD3FC22 100%)"
            onContactClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </motion.div>

      </div>

      {/* Scroll indicator line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[9px] font-mono tracking-widest text-ice-500 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-ice-400 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-4 bg-ice-300"
          />
        </div>
      </div>

      {/* In-file styles for custom blink animation cursor */}
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}