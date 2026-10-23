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

  // Ghost easter egg trigger
  const handleGhostClick = () => {
    const easterEggs = [
      "Booo! You discovered the secret ghost!",
      "Drone ready for takeoff, code ready to deploy!",
      "Coffee + React + TypeScript = Lag-free web!",
      "Averill : Fullstack",
    ];
    const randomMsg = easterEggs[Math.floor(Math.random() * easterEggs.length)];
    setGhostMessage(randomMsg);
    setTimeout(() => setGhostMessage(null), 3800);
  };

  // Parallax scroll transforms for stickers & portrait
  const { scrollY } = useScroll();
  const ghostY = useTransform(scrollY, [0, 500], [0, -45]);
  const starY = useTransform(scrollY, [0, 500], [0, -75]);
  const heartY = useTransform(scrollY, [0, 500], [0, -35]);
  const portraitY = useTransform(scrollY, [0, 500], [0, -25]);

  return (
    <div
      className="relative min-h-[92vh] pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Decorative Floating Stickers with Scroll Parallax */}
      {/* Ghost Sticker with Easter Egg */}
      <motion.div
        style={{ y: ghostY }}
        onClick={handleGhostClick}
        className="absolute top-24 left-6 sm:left-12 z-20 cursor-pointer animate-float select-none group"
        title="Click this pixel ghost!"
      >
        <div className="relative p-2.5 bg-white border-2 border-[#14213D] rounded-2xl shadow-[4px_4px_0px_#14213D] hover:scale-110 active:scale-95 transition-all">
          <span className="font-pixel text-xl sm:text-2xl text-[#3A86FF]">
            👻
          </span>
          <span className="absolute -bottom-2 -right-2 px-1.5 py-0.5 bg-[#FFD6E0] border border-[#14213D] rounded-md font-pixel text-[8px] text-[#14213D]">
            CLICK!
          </span>
        </div>

        {/* Easter Egg Speech Bubble */}
        {ghostMessage && (
          <div className="absolute left-14 top-0 w-56 sm:w-64 p-3 bg-[#FFD6E0] border-2 border-[#14213D] rounded-2xl shadow-[4px_4px_0px_#14213D] z-30 animate-in fade-in zoom-in duration-200">
            <p className="font-sans text-xs font-bold text-[#14213D] leading-tight">
              {ghostMessage}
            </p>
            <div className="absolute -left-2 top-3 w-3 h-3 bg-[#FFD6E0] border-l-2 border-b-2 border-[#14213D] -rotate-45" />
          </div>
        )}
      </motion.div>

      {/* Star Sticker */}
      <motion.div
        style={{ y: starY }}
        className="absolute top-36 right-8 sm:right-20 z-10 animate-float-delayed pointer-events-none"
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
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Top Editorial Identity Pill */}
          <div className="pill-badge bg-[#BDB2FF]/25 border-2 border-[#14213D] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#3A86FF]"></span>
            <span className="font-mono text-xs font-bold text-[#14213D]">
              Averill Kevinatha | Creative Developer & Visual Maker
            </span>
          </div>

          {/* Mixed Display Heading: Playfair Serif + Press Start 2P Pixel */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#14213D] tracking-tight leading-[1.05] mb-4">
            Port
            <span className="font-pixel text-3xl sm:text-4xl md:text-5xl text-[#3A86FF] tracking-normal inline-block ml-1">
              folio.
            </span>
          </h1>

          {/* Dynamic Typewriter Subheading with Blinking Cursor */}
          <div className="flex flex-wrap items-center gap-2 mb-6 min-h-[40px]">
            <span className="font-mono text-sm sm:text-base font-bold text-[#14213D]/70">
              My Skills:
            </span>
            <div className="px-3 py-1 bg-white border-2 border-[#14213D] rounded-xl shadow-[2px_2px_0px_#14213D] flex items-center">
              <span className="font-mono text-sm sm:text-base font-black text-[#3A86FF]">
                {currentText}
              </span>
              <span className="font-mono text-base font-bold text-[#14213D] animate-ping ml-0.5">
                |
              </span>
            </div>
          </div>

          {/* Hero Description with Coding Highlights */}
          <p className="font-sans text-base sm:text-lg text-[#14213D]/80 max-w-xl mb-8 leading-relaxed">
            Dedicated to building <strong>modern, high-performance, and interactive web architectures</strong> with 
            React, Next.js, TypeScript, and Nest.js — enhanced with precision UI/UX design, aerial drone cinematography, and professional video editing.
          </p>

          {/* Retro Pixel Progress / Coding Engine Decor */}
          <div className="w-full max-w-md p-3.5 bg-white border-2 border-[#14213D] rounded-2xl shadow-[4px_4px_0px_#14213D] mb-8">
            <div className="flex justify-between items-center mb-1.5 font-pixel text-[10px] text-[#14213D]">
              <span>CORE STACK: REACT + NEST.JS</span>
              <span className="text-[#3A86FF]">FULL POWER 100%</span>
            </div>
            <div className="pixel-bar-track">
              <div className="pixel-bar-fill w-full"></div>
            </div>
          </div>

          {/* Interactive CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="retro-btn bg-[#3A86FF] hover:bg-[#1B60D1] text-white text-sm sm:text-base px-6 py-3"
            >
              <span>Explore Projects & Works</span>
            </a>

            <a
              href="#contact"
              className="retro-btn retro-btn-secondary text-sm sm:text-base px-6 py-3"
            >
              <span>Get in Touch</span>
            </a>

            <a
              href="#experience"
              className="pill-badge hover:bg-[#FFD6E0] cursor-pointer transition-colors py-2 px-4"
            >
              <span className="font-mono text-xs">9 Certifications & Timeline</span>
            </a>
          </div>
        </div>

        {/* Right Column: Photo Cutout with Blue-Lavender Circle Backdrop */}
        <motion.div
          style={{ y: portraitY }}
          className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0"
        >
          <div className="relative w-72 sm:w-88 md:w-96 aspect-square flex items-center justify-center">
            {/* Big Colored Shape Circle */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#3A86FF] via-[#BDB2FF] to-[#FFD6E0] border-[3px] border-[#14213D] shadow-[8px_8px_0px_#14213D]" />

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
              className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-[0_12px_24px_rgba(20,33,61,0.25)] hover:scale-105 transition-transform duration-300"
              loading="eager"
            />

            {/* Corner Badge 1: Coding Specialization */}
            <div className="absolute -bottom-3 -left-4 z-20 px-3.5 py-1.5 bg-white border-2 border-[#14213D] rounded-full shadow-[3px_3px_0px_#14213D] flex items-center gap-1.5 font-mono text-[11px] font-bold">
              <span className="text-[#3A86FF]">Frontend & Fullstack</span>
            </div>

            {/* Corner Badge 2: Drone & Media */}
            <div className="absolute -top-3 -right-2 z-20 px-3.5 py-1.5 bg-[#FFD6E0] border-2 border-[#14213D] rounded-full shadow-[3px_3px_0px_#14213D] flex items-center gap-1.5 font-mono text-[11px] font-bold">
              <span>Drone Pilot & Video</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Counter Bar: Numbers Stats Count-up */}
      <div className="mt-14 pt-8 border-t-2 border-[#14213D]/20 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { number: "10+", label: "Official Certifications", color: "text-[#3A86FF]" },
          { number: "100%", label: "Clean Code Focus", color: "text-[#14213D]" },
          { number: "75+", label: "Drone Flight Hours", color: "text-[#BDB2FF]" },
          { number: "6+", label: "Production Web Apps", color: "text-[#3A86FF]" },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-4 bg-white border-2 border-[#14213D] rounded-2xl shadow-[3px_3px_0px_#14213D] text-center"
          >
            <div className={`font-serif text-3xl sm:text-4xl font-black ${stat.color}`}>
              {stat.number}
            </div>
            <div className="font-mono text-xs font-bold text-[#14213D]/75 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};