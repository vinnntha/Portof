import React, { useState } from "react";
import { motion } from "framer-motion";

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "design" | "code" | "media">("all");
  const [showAllMobile, setShowAllMobile] = useState(false);

  const skillList = [
    {
      name: "Figma",
      category: "design",
      level: 95,
      type: "UI/UX & Design",
      desc: "Interactive components, auto-layout, design tokens & dev handoff.",
      color: "bg-[#3A86FF]",
      icon: "🎨",
    },
    {
      name: "React.js & Vite",
      category: "code",
      level: 90,
      type: "Frontend Web",
      desc: "Modular components, state management hooks, SPA architectures.",
      color: "bg-[#3A86FF]",
      icon: "⚛️",
    },
    {
      name: "TypeScript",
      category: "code",
      level: 85,
      type: "Type Safety",
      desc: "Runtime bug prevention, type-safe API integrations, clean code.",
      color: "bg-[#3A86FF]",
      icon: "🔷",
    },
    {
      name: "Tailwind CSS",
      category: "code",
      level: 95,
      type: "Styling & UI",
      desc: "Modern utilities, fluid typography, dark mode & tokens.",
      color: "bg-[#3A86FF]",
      icon: "🌊",
    },
    {
      name: "DaVinci Resolve",
      category: "media",
      level: 88,
      type: "Color & Editing",
      desc: "Color space transform, node-based grading & cinematic pacing.",
      color: "bg-[#BDB2FF]",
      icon: "🎞️",
    },
    {
      name: "Premiere Pro",
      category: "media",
      level: 92,
      type: "Video Editing",
      desc: "Multi-cam editing, audio syncing, masking & social encoding.",
      color: "bg-[#BDB2FF]",
      icon: "🎬",
    },
    {
      name: "DJI Piloting",
      category: "media",
      level: 90,
      type: "Drone Aerial",
      desc: "Smooth orbits, bird's-eye tilts, cinematic framing & safety.",
      color: "bg-[#FFD6E0]",
      icon: "🚁",
    },
    {
      name: "Three.js / 3D",
      category: "code",
      level: 78,
      type: "3D Graphics",
      desc: "Canvas rendering, lighting, camera controls, interactive 3D.",
      color: "bg-[#3A86FF]",
      icon: "🧊",
    },
    {
      name: "VS Code & Git",
      category: "code",
      level: 92,
      type: "Dev Workflow",
      desc: "Version control, branching, terminal automation & debugging.",
      color: "bg-[#3A86FF]",
      icon: "💻",
    },
  ];

  const filteredSkills =
    filter === "all"
      ? skillList
      : skillList.filter((s) => s.category === filter);

  const displayedSkills =
    showAllMobile || filter !== "all"
      ? filteredSkills
      : filteredSkills.slice(0, 6);

  return (
    <div className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Pill */}
      <div className="flex flex-col items-start mb-8 sm:mb-12">
        <div className="pill-badge bg-white border-2 border-[#14213D] mb-3 sm:mb-4">
          <span className="font-pixel text-[10px] text-[#3A86FF]">03 //</span>
          <span className="font-mono text-xs font-bold text-[#14213D]">SOFTWARE SKILLS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4 sm:gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#14213D] tracking-tight">
              Core Tech Stack & Tools.
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#3A86FF] mt-1.5 sm:mt-2 font-bold tracking-wide">
              SOFTWARE AND TECHNOLOGIES POWERING DAILY WORKFLOWS
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {[
              { id: "all", label: "All Tools" },
              { id: "design", label: "UI/UX & Design" },
              { id: "code", label: "Code & Dev" },
              { id: "media", label: "Video & Drone" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  setFilter(f.id as any);
                  setShowAllMobile(false);
                }}
                className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold border-2 border-[#14213D] transition-all cursor-pointer ${
                  filter === f.id
                    ? "bg-[#3A86FF] text-white shadow-[2px_2px_0px_#14213D] sm:shadow-[3px_3px_0px_#14213D] -translate-y-0.5"
                    : "bg-white text-[#14213D] hover:bg-[#FFD6E0]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid: 2 columns on mobile for ultra-compact, pleasant reading without infinite scrolling */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
        {displayedSkills.map((tool, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35, delay: (idx % 3) * 0.06 }}
            className="bg-white border-2 sm:border-[2.5px] border-[#14213D] rounded-2xl sm:rounded-4xl p-3 sm:p-5 md:p-6 shadow-[3px_3px_0px_#14213D] sm:shadow-[5px_5px_0px_#14213D] hover:shadow-[7px_7px_0px_#14213D] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              {/* Card top */}
              <div className="flex items-center justify-between gap-1.5 mb-2.5 sm:mb-4">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#FFF4F4] border-1.5 sm:border-2 border-[#14213D] flex items-center justify-center text-base sm:text-2xl shadow-[1.5px_1.5px_0px_#14213D] group-hover:scale-110 transition-transform shrink-0">
                  <span>{tool.icon}</span>
                </div>
                <span className="font-mono text-[8px] sm:text-[11px] font-bold text-[#14213D] px-1.5 sm:px-2.5 py-0.5 sm:py-1 bg-[#BDB2FF]/20 rounded-md sm:rounded-lg border border-[#14213D] truncate max-w-[85px] sm:max-w-none">
                  {tool.type}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-sm sm:text-xl lg:text-2xl font-black text-[#14213D] mb-1 line-clamp-1">
                {tool.name}
              </h3>
              <p className="font-sans text-[10px] sm:text-xs text-[#14213D]/75 leading-tight sm:leading-relaxed mb-3 sm:mb-5 line-clamp-2">
                {tool.desc}
              </p>
            </div>

            {/* Pixel Progress Bar */}
            <div className="pt-2 sm:pt-3 border-t-1.5 sm:border-t-2 border-[#14213D]/10">
              <div className="flex justify-between items-center font-pixel text-[8px] sm:text-[9px] text-[#14213D] mb-1 sm:mb-2">
                <span className="hidden xs:inline">LEVEL</span>
                <span className="xs:hidden">LVL</span>
                <span className="text-[#3A86FF] font-bold">{tool.level}%</span>
              </div>
              <div className="pixel-bar-track h-2 sm:h-3.5">
                <div
                  className="pixel-bar-fill"
                  style={{ width: `${tool.level}%` }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Expand / Collapse Button if there are more skills */}
      {filter === "all" && filteredSkills.length > 6 && (
        <div className="mt-6 flex justify-center sm:hidden">
          <button
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="retro-btn retro-btn-secondary text-xs px-4 py-2 border-2 border-[#14213D] shadow-[2px_2px_0px_#14213D] font-mono font-bold"
          >
            {showAllMobile
              ? "Tampilkan Lebih Ringkas ▴"
              : `Tampilkan Semua (${filteredSkills.length} Tools) ▾`}
          </button>
        </div>
      )}
    </div>
  );
};
