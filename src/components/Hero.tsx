import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
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
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const starY = useTransform(scrollY, [0, 500], [0, -75]);
  const heartY = useTransform(scrollY, [0, 500], [0, -35]);
  const portraitY = useTransform(scrollY, [0, 500], [0, -25]);

  // Interactive mouse parallax for desktop abstract floating elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const floatSlowX = useTransform(springX, [-1, 1], [-10, 10]);
  const floatSlowY = useTransform(springY, [-1, 1], [-8, 8]);
  const floatMidX = useTransform(springX, [-1, 1], [-18, 18]);
  const floatMidY = useTransform(springY, [-1, 1], [-14, 14]);
  const floatInvX = useTransform(springX, [-1, 1], [14, -14]);
  const floatInvY = useTransform(springY, [-1, 1], [10, -10]);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(nx);
    mouseY.set(ny);
  };

  const handleHeroMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      className="relative min-h-[82vh] sm:min-h-[88vh] pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Star Sticker (Desktop decoration) */}
      <motion.div
        style={{ y: starY }}
        className="absolute top-32 right-10 sm:right-20 z-10 animate-float-delayed pointer-events-none hidden lg:block"
      >
        <div className="p-2 bg-[#BDB2FF] border-2 border-[#14213D] rounded-xl shadow-[3px_3px_0px_#14213D] rotate-12">
          <span className="font-pixel text-base text-white">✦</span>
        </div>
      </motion.div>

      {/* Heart Sticker (Desktop decoration) */}
      <motion.div
        style={{ y: heartY }}
        className="absolute bottom-28 left-12 sm:left-24 z-10 animate-float pointer-events-none hidden lg:block"
      >
        <div className="p-1.5 bg-[#FFD6E0] border-2 border-[#14213D] rounded-xl shadow-[2px_2px_0px_#14213D] -rotate-12">
          <span className="font-pixel text-sm text-[#3A86FF]">♥</span>
        </div>
      </motion.div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-6 xl:gap-8 items-center">
        {/* Left Column: Clean Identity, Title, Typewriter & Compact CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start z-10 w-full">
          {/* Identity Pill */}
          <div className="pill-badge bg-[#BDB2FF]/25 border-[1.5px] sm:border-2 border-[#14213D] py-1 px-2.5 sm:px-3 text-[10px] sm:text-xs mb-3 sm:mb-4 shadow-[1.5px_1.5px_0px_#14213D]">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#3A86FF] shrink-0" />
            <span className="font-mono font-bold text-[#14213D]">
              <span className="sm:hidden">Averill K. — Creative Dev</span>
              <span className="hidden sm:inline">Averill Kevinatha — Creative Dev & Visual Maker</span>
            </span>
          </div>

          {/* Mixed Display Heading: Playfair Serif + Press Start 2P Pixel */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-[#14213D] tracking-tight leading-[1.05] mb-3 sm:mb-4">
            Port
            <span className="font-pixel text-2xl sm:text-4xl lg:text-[2.75rem] text-[#3A86FF] tracking-normal inline-block ml-1">
              folio.
            </span>
          </h1>

          {/* Compact Dynamic Typewriter Subheading */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3.5 sm:mb-5 min-h-[28px] sm:min-h-[34px]">
            <span className="font-mono text-xs sm:text-sm font-bold text-[#14213D]/65">
              Role:
            </span>
            <div className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white border-[1.5px] border-[#14213D] rounded-lg shadow-[1.5px_1.5px_0px_#14213D] flex items-center">
              <span className="font-mono text-xs sm:text-sm font-bold text-[#3A86FF]">
                {currentText}
              </span>
              <span className="font-mono text-xs sm:text-sm font-bold text-[#14213D] animate-ping ml-0.5">
                |
              </span>
            </div>
          </div>

          {/* Concise Hero Description */}
          <p className="font-sans text-xs sm:text-sm lg:text-base text-[#14213D]/75 max-w-lg mb-5 sm:mb-7 leading-relaxed">
            Building <strong className="font-semibold text-[#14213D]">modern, high-performance web apps</strong> with React, Next.js, TypeScript &amp; Nest.js — paired with UI/UX design and aerial drone cinematography.
          </p>

          {/* Compact Interactive CTA Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <a
              href="#portfolio"
              className="retro-btn bg-[#3A86FF] hover:bg-[#1B60D1] text-white text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 border-[1.5px] sm:border-2 shadow-[2px_2px_0px_#14213D] sm:shadow-[3px_3px_0px_#14213D]"
            >
              <span>Explore Works</span>
            </a>

            <a
              href="#contact"
              className="retro-btn retro-btn-secondary text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 border-[1.5px] sm:border-2 shadow-[2px_2px_0px_#14213D] sm:shadow-[3px_3px_0px_#14213D]"
            >
              <span>Get in Touch</span>
            </a>

            <a
              href="#experience"
              className="inline-flex items-center gap-1 font-mono text-[11px] sm:text-xs font-bold text-[#14213D]/75 hover:text-[#3A86FF] px-1.5 py-1.5 transition-colors"
            >
              <span>9 Certifications</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* Center Zone (Desktop Only): Interactive Abstract Floating Elements between Title and Photo */}
        <div className="hidden lg:block lg:col-span-2 relative h-[320px] xl:h-[360px] z-20 select-none">
          {/* Subtle abstract SVG trajectory curve in background */}
          <svg
            viewBox="0 0 180 320"
            className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
            fill="none"
          >
            <path
              d="M14 76 C 95 45, 70 175, 162 145 C 100 220, 45 245, 148 282"
              stroke="#14213D"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              strokeLinecap="round"
            />
            <circle cx="14" cy="76" r="3" fill="#3A86FF" />
            <circle cx="162" cy="145" r="3" fill="#BDB2FF" />
            <circle cx="148" cy="282" r="3" fill="#FFD6E0" stroke="#14213D" strokeWidth="1" />
          </svg>

          {/* 1. Floating Code Pill (Top Left) */}
          <motion.div
            style={{ x: floatMidX, y: floatMidY }}
            className="absolute top-3 -left-3"
          >
            <div className="animate-float">
              <motion.div
                drag
                dragSnapToOrigin
                dragElastic={0.45}
                whileHover={{ scale: 1.12, rotate: 0 }}
                whileDrag={{ scale: 1.16 }}
                title="Drag & release!"
                className="-rotate-6 px-3 py-1 bg-white border-[1.5px] border-[#14213D] rounded-full shadow-[2.5px_2.5px_0px_#3A86FF] font-mono text-[11px] font-bold text-[#14213D] cursor-grab active:cursor-grabbing flex items-center gap-1.5"
              >
                <span className="text-[#3A86FF] font-black">&lt;/&gt;</span>
                <span>React</span>
              </motion.div>
            </div>
          </motion.div>

          {/* 2. Floating Lavender Pixel Star Tile (Top Right) */}
          <motion.div
            style={{ x: floatInvX, y: floatInvY }}
            className="absolute top-9 right-0"
          >
            <div className="animate-float-delayed">
              <motion.div
                drag
                dragSnapToOrigin
                dragElastic={0.45}
                whileHover={{ scale: 1.15, rotate: 0 }}
                whileDrag={{ scale: 1.2 }}
                title="Drag & release!"
                className="rotate-12 w-9 h-9 bg-[#BDB2FF] border-[1.5px] border-[#14213D] rounded-xl shadow-[2.5px_2.5px_0px_#14213D] flex items-center justify-center font-pixel text-xs text-white cursor-grab active:cursor-grabbing"
              >
                ✦
              </motion.div>
            </div>
          </motion.div>

          {/* 3. Floating Open-to-Work Status Chip (Center) */}
          <motion.div
            style={{ x: floatSlowX, y: floatSlowY }}
            className="absolute top-[37%] left-[12%]"
          >
            <div className="animate-float-delayed">
              <motion.div
                drag
                dragSnapToOrigin
                dragElastic={0.45}
                whileHover={{ scale: 1.1, rotate: 0 }}
                whileDrag={{ scale: 1.15 }}
                title="Drag & release!"
                className="rotate-3 px-3 py-1.5 bg-[#3A86FF] text-white border-[1.5px] border-[#14213D] rounded-xl shadow-[3px_3px_0px_#14213D] font-mono text-[10px] xl:text-[11px] font-bold cursor-grab active:cursor-grabbing flex items-center gap-1.5 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse shrink-0" />
                <span>OPEN WORK</span>
              </motion.div>
            </div>
          </motion.div>

          {/* 4. Floating Aerial Drone Badge (Mid Right) */}
          <motion.div
            style={{ x: floatMidX, y: floatInvY }}
            className="absolute top-[55%] -right-4"
          >
            <div className="animate-float">
              <motion.div
                drag
                dragSnapToOrigin
                dragElastic={0.45}
                whileHover={{ scale: 1.12, rotate: 0 }}
                whileDrag={{ scale: 1.16 }}
                title="Drag & release!"
                className="-rotate-12 px-2.5 py-1 bg-[#FFD6E0] border-[1.5px] border-[#14213D] rounded-full shadow-[2px_2px_0px_#14213D] font-pixel text-[8px] text-[#14213D] cursor-grab active:cursor-grabbing whitespace-nowrap"
              >
                4K DRONE
              </motion.div>
            </div>
          </motion.div>

          {/* 5. Floating UI/UX Sticker (Bottom Left) */}
          <motion.div
            style={{ x: floatInvX, y: floatMidY }}
            className="absolute bottom-11 left-0"
          >
            <div className="animate-float">
              <motion.div
                drag
                dragSnapToOrigin
                dragElastic={0.45}
                whileHover={{ scale: 1.12, rotate: 0 }}
                whileDrag={{ scale: 1.16 }}
                title="Drag & release!"
                className="-rotate-3 px-2.5 py-1 bg-white border-[1.5px] border-[#14213D] rounded-xl shadow-[2.5px_2.5px_0px_#BDB2FF] font-mono text-[10px] font-bold text-[#14213D] cursor-grab active:cursor-grabbing flex items-center gap-1.5 whitespace-nowrap"
              >
                <span className="flex gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3A86FF]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD6E0]" />
                </span>
                <span>UI / UX</span>
              </motion.div>
            </div>
          </motion.div>

          {/* 6. Tiny Floating Geometric Diamond (Bottom Right) */}
          <motion.div
            style={{ x: floatSlowX, y: floatInvY }}
            className="absolute bottom-4 right-5"
          >
            <div className="animate-float-delayed">
              <motion.div
                drag
                dragSnapToOrigin
                dragElastic={0.5}
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileDrag={{ scale: 1.25 }}
                title="Drag & release!"
                className="rotate-45 w-5 h-5 bg-[#FFD6E0] border-[1.5px] border-[#14213D] rounded-md shadow-[1.5px_1.5px_0px_#14213D] cursor-grab active:cursor-grabbing"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Clean Editorial Retro Portrait Card */}
        <motion.div
          style={{ y: portraitY }}
          className="lg:col-span-4 flex justify-center lg:justify-end items-center relative mt-2 sm:mt-4 lg:mt-0"
        >
          <div className="relative w-64 sm:w-72 lg:w-[275px] xl:w-[325px] group">
            {/* Offset Gradient Backdrop Card */}
            <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-3 sm:translate-y-3 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#3A86FF] via-[#BDB2FF] to-[#FFD6E0] border-2 border-[#14213D]" />

            {/* Main Foreground White Frame */}
            <div className="relative z-10 bg-white border-2 border-[#14213D] rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 shadow-[2px_2px_0px_#14213D]">
              {/* Photo Viewport (4:5 portrait crop, removing top wall & bottom mirror edge) */}
              <div className="relative aspect-[4/5] w-full rounded-xl sm:rounded-2xl overflow-hidden border-[1.5px] border-[#14213D] bg-[#FFF4F4]">
                <img
                  src={heroImg}
                  alt="Averill Kevinatha Portrait"
                  className="w-full h-full object-cover object-[50%_62%] scale-[1.14] origin-[54%_58%] group-hover:scale-[1.18] transition-transform duration-500"
                  loading="eager"
                />
              </div>

              {/* Clean Integrated Card Footer */}
              <div className="mt-2 sm:mt-2.5 px-1 pb-0.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-[#14213D] truncate">
                    Averill K.
                  </span>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <span className="px-2 py-0.5 rounded-full bg-[#3A86FF]/10 border border-[#14213D]/30 font-mono text-[9px] font-bold text-[#3A86FF]">
                    Fullstack
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#FFD6E0]/75 border border-[#14213D]/30 font-mono text-[9px] font-bold text-[#14213D]">
                    Drone
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Counter Bar: Clean & Compact Stats */}
      <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-[#14213D]/15 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
        {[
          { number: "10+", label: "Certifications", color: "text-[#3A86FF]" },
          { number: "100%", label: "Clean Code", color: "text-[#14213D]" },
          { number: "75+", label: "Flight Hours", color: "text-[#BDB2FF]" },
          { number: "6+", label: "Web Apps", color: "text-[#3A86FF]" },
        ].map((stat, i) => (
          <div
            key={i}
            className="px-3 py-2.5 sm:px-4 sm:py-3 bg-white/90 border-[1.5px] border-[#14213D] rounded-xl shadow-[2px_2px_0px_#14213D] text-center"
          >
            <div className={`font-serif text-xl sm:text-2xl lg:text-3xl font-black leading-none ${stat.color}`}>
              {stat.number}
            </div>
            <div className="font-mono text-[10px] sm:text-[11px] font-bold text-[#14213D]/70 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};