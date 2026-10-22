import React from "react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const marqueeText =
    "★ AVERILL KEVINATHA ★ UX/UI DESIGNER ★ CREATIVE DEVELOPER ★ VIDEOGRAPHER ★ DRONE PILOT ★ OPEN FOR COMMISSIONS ★ LET'S TALK ★ ";

  const tools = [
    { name: "Figma", icon: "🎨" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Three.js", icon: "🌐" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "DaVinci Resolve", icon: "🎬" },
    { name: "Premiere Pro", icon: "🎞️" },
    { name: "DJI Fly", icon: "🛸" },
    { name: "VS Code", icon: "💻" },
  ];

  return (
    <footer className="relative mt-24 border-t-[3px] border-[#14213D] bg-white overflow-hidden">
      {/* Running Marquee Ticker 1: Identity & Roles */}
      <div className="py-3 bg-[#3A86FF] text-white border-b-2 border-[#14213D] overflow-hidden whitespace-nowrap">
        <div className="inline-flex marquee-content font-pixel text-xs sm:text-sm tracking-wider">
          <span>{marqueeText.repeat(4)}</span>
        </div>
      </div>

      {/* Running Marquee Ticker 2: Tools & Software */}
      <div className="py-2.5 bg-[#FFD6E0] border-b-2 border-[#14213D] overflow-hidden whitespace-nowrap">
        <div className="inline-flex marquee-content font-mono text-xs font-bold text-[#14213D] gap-8">
          {[...tools, ...tools, ...tools].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-1.5">
              <span>{t.icon}</span>
              <span>{t.name}</span>
              <span className="text-[#3A86FF]">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 font-serif font-black text-2xl text-[#14213D]">
            <span className="w-8 h-8 rounded-full bg-[#3A86FF] border-2 border-[#14213D] flex items-center justify-center font-pixel text-xs text-white">
              AK
            </span>
            <span>Averill Kevinatha.</span>
          </div>
          <p className="font-mono text-xs text-[#14213D]/70 mt-1">
            Personal Portfolio 2026
          </p>
        </div>

        {/* Back to Top Rocket Button */}
        <button
          onClick={scrollToTop}
          className="retro-btn bg-[#BDB2FF] text-[#14213D] text-xs font-bold px-5 py-2.5 flex items-center gap-2 group"
          aria-label="Back to Top"
        >
          <span>Back to Top</span>
        </button>

        {/* Copyright & Info */}
        <div className="text-center md:text-right font-mono text-xs text-[#14213D]/80">
          <p>© {new Date().getFullYear()} Averill Kevinatha. All rights reserved.</p>
          <p className="text-[10px] text-[#3A86FF] font-bold mt-0.5">
            Crafted with React, Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
