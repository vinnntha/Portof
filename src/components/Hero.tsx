import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "../assets/hero_portrait.png";

export const Hero: React.FC = () => {
  // Roles for typewriter with coding prioritized
  const roles = [
    "Creative Developer",
    "Frontend Specialist",
    "Fullstack Engineer",
    "UI/UX Designer",
    "Drone Pilot & Videographer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [ghostMessage, setGhostMessage] = useState<string | null>(null);

  // Typewriter effect
  useEffect(() => {
    const fullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1700);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

  // Parallax scroll transforms for stickers & portrait
  const { scrollY } = useScroll();
  const ghostY = useTransform(scrollY, [0, 500], [0, -45]);
  const starY = useTransform(scrollY, [0, 500], [0, -75]);
  const heartY = useTransform(scrollY, [0, 500], [0, -35]);
  const portraitY = useTransform(scrollY, [0, 500], [0, -25]);

  return (
    <div
      className="relative min-h-[85vh] sm:min-h-[92vh] pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Star Sticker (Desktop decoration) */}
      <motion.div
        style={{ y: starY }}
        className="absolute top-36 right-8 sm:right-20 z-10 animate-float-delayed pointer-events-none hidden lg:block"
      >
        <div className="p-2.5 bg-[#BDB2FF] border-2 border-[#14213D] rounded-2xl shadow-[4px_4px_0px_#14213D] rotate-12">
          <span className="font-pixel text-xl text-white">✦</span>
        </div>
      </motion.div>

      {/* Heart Sticker */}
      <motion.div
        style={{ y: heartY }}
        className="absolute bottom-20 left-10 sm:left-24 z-10 animate-float pointer-events-none hidden sm:block"
      >
        <div className="p-2 bg-[#FFD6E0] border-2 border-[#14213D] rounded-2xl shadow-[3px_3px_0px_#14213D] -rotate-12">
          <span className="font-pixel text-base text-[#3A86FF]">♥</span>
        </div>
      </motion.div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Heading, Typewriter, CTA & Info */}
        <div className="lg:col-span-7 flex flex-col items-start z-10 w-full">
          {/* Top Editorial Identity Pill + Interactive Ghost Easter Egg */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4 sm:mb-5">
            <div className="pill-badge bg-[#BDB2FF]/25 border-2 border-[#14213D] py-1 px-3 sm:py-1.5 sm:px-4 text-[10px] sm:text-xs">
              <span className="w-2 h-2 rounded-full bg-[#3A86FF] shrink-0"></span>
              <span className="font-mono font-bold text-[#14213D]">
                <span className="sm:hidden">Averill K. | Creative Dev</span>
                <span className="hidden sm:inline">Averill Kevinatha | Creative Developer & Visual Maker</span>
              </span>
            </div>
          </div>

          {/* Mixed Display Heading: Playfair Serif + Press Start 2P Pixel */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#14213D] tracking-tight leading-[1.05] mb-3 sm:mb-4">
            Port
            <span className="font-pixel text-2xl sm:text-4xl md:text-5xl text-[#3A86FF] tracking-normal inline-block ml-1">
              folio.
            </span>
          </h1>

          {/* Dynamic Typewriter Subheading with Blinking Cursor */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 min-h-[34px] sm:min-h-[40px]">
            <span className="font-mono text-xs sm:text-base font-bold text-[#14213D]/70">
              My Skills:
            </span>
            <div className="px-2.5 py-1 sm:px-3 sm:py-1 bg-white border-2 border-[#14213D] rounded-xl shadow-[2px_2px_0px_#14213D] flex items-center">
              <span className="font-mono text-xs sm:text-base font-black text-[#3A86FF]">
                {currentText}
              </span>
              <span className="font-mono text-xs sm:text-base font-bold text-[#14213D] animate-ping ml-0.5">
                |
              </span>
            </div>
          </div>

          {/* Hero Description with Coding Highlights */}
          <p className="font-sans text-sm sm:text-base lg:text-lg text-[#14213D]/80 max-w-xl mb-5 sm:mb-8 leading-relaxed">
            Dedicated to building <strong className="font-bold text-[#14213D]">modern, high-performance web architectures</strong> with 
            React, Next.js, TypeScript, and Nest.js — enhanced with precision UI/UX design, aerial drone cinematography, and professional video editing.
          </p>

          {/* Retro Pixel Progress / Coding Engine Decor */}
          <div className="w-full max-w-md p-2.5 sm:p-3.5 bg-white border-2 border-[#14213D] rounded-xl sm:rounded-2xl shadow-[3px_3px_0px_#14213D] sm:shadow-[4px_4px_0px_#14213D] mb-5 sm:mb-8">
            <div className="flex justify-between items-center mb-1 sm:mb-1.5 font-pixel text-[8.5px] sm:text-[10px] text-[#14213D]">
              <span>CORE STACK: REACT + NEST.JS</span>
              <span className="text-[#3A86FF]">FULL POWER 100%</span>
            </div>
            <div className="pixel-bar-track !h-2.5 sm:!h-3.5">
              <div className="pixel-bar-fill w-full"></div>
            </div>
          </div>

          {/* Interactive CTA Buttons */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4">
            <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-4">
              <a
                href="#portfolio"
                className="retro-btn bg-[#3A86FF] hover:bg-[#1B60D1] text-white text-xs sm:text-base px-3.5 py-2.5 sm:px-6 sm:py-3 text-center"
              >
                <span>Explore Works</span>
              </a>

              <a
                href="#contact"
                className="retro-btn retro-btn-secondary text-xs sm:text-base px-3.5 py-2.5 sm:px-6 sm:py-3 text-center"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            <a
              href="#experience"
              className="pill-badge hover:bg-[#FFD6E0] cursor-pointer transition-colors py-2 px-3 sm:px-4 text-center justify-center text-[10px] sm:text-xs"
            >
              <span className="font-mono">9 Certifications & Timeline &rarr;</span>
            </a>
          </div>
        </div>

        {/* Right Column: Photo Cutout with Blue-Lavender Circle Backdrop */}
        <motion.div
          style={{ y: portraitY }}
          className="lg:col-span-5 flex justify-center items-center relative mt-6 sm:mt-8 lg:mt-0"
        >
          <div className="relative w-60 sm:w-80 md:w-96 aspect-square flex items-center justify-center">
            {/* Big Colored Shape Circle */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#3A86FF] via-[#BDB2FF] to-[#FFD6E0] border-[3px] border-[#14213D] shadow-[6px_6px_0px_#14213D] sm:shadow-[8px_8px_0px_#14213D]" />

            {/* Subtle Blueprint grid texture inside circle */}
            <div
              className="absolute inset-4 rounded-full opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #14213D 1px, transparent 1px), linear-gradient(to bottom, #14213D 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />

            {/* Cutout Portrait Image */}
            <img
              src={heroImg}
              alt="Averill Kevinatha Cutout Portrait"
              className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-[0_10px_20px_rgba(20,33,61,0.2)] hover:scale-105 transition-transform duration-300"
              loading="eager"
            />

            {/* Corner Badge 1: Coding Specialization */}
            <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-4 z-20 px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-white border-2 border-[#14213D] rounded-full shadow-[2px_2px_0px_#14213D] sm:shadow-[3px_3px_0px_#14213D] flex items-center gap-1.5 font-mono text-[9px] sm:text-[11px] font-bold">
              <span className="text-[#3A86FF]">Frontend & Fullstack</span>
            </div>

            {/* Corner Badge 2: Drone & Media */}
            <div className="absolute -top-2 -right-1 sm:-top-3 sm:-right-2 z-20 px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-[#FFD6E0] border-2 border-[#14213D] rounded-full shadow-[2px_2px_0px_#14213D] sm:shadow-[3px_3px_0px_#14213D] flex items-center gap-1.5 font-mono text-[9px] sm:text-[11px] font-bold">
              <span>Drone Pilot & Video</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Counter Bar: Numbers Stats Count-up */}
      <div className="mt-8 sm:mt-14 pt-6 sm:pt-8 border-t-2 border-[#14213D]/20 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
        {[
          { number: "10+", label: "Official Certifications", color: "text-[#3A86FF]" },
          { number: "100%", label: "Clean Code Focus", color: "text-[#14213D]" },
          { number: "75+", label: "Drone Flight Hours", color: "text-[#BDB2FF]" },
          { number: "6+", label: "Production Web Apps", color: "text-[#3A86FF]" },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-3 sm:p-4 bg-white border-2 border-[#14213D] rounded-xl sm:rounded-2xl shadow-[2px_2px_0px_#14213D] sm:shadow-[3px_3px_0px_#14213D] text-center"
          >
            <div className={`font-serif text-2xl sm:text-4xl font-black ${stat.color}`}>
              {stat.number}
            </div>
            <div className="font-mono text-[10px] sm:text-xs font-bold text-[#14213D]/75 mt-0.5 sm:mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};