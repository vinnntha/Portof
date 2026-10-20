import React, { useState } from "react";

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "design" | "code" | "media">("all");

  const skillList = [
    {
      name: "Figma",
      category: "design",
      level: 95,
      type: "UI/UX & Prototyping",
      desc: "Interactive components, precise auto-layout, design tokens & dev-ready handoff.",
      color: "bg-[#3A86FF]",
      icon: "🎨",
    },
    {
      name: "React.js & Vite",
      category: "code",
      level: 90,
      type: "Frontend Framework",
      desc: "Modular components, state management hooks, interactive single-page architectures.",
      color: "bg-[#3A86FF]",
      icon: "⚛️",
    },
    {
      name: "TypeScript",
      category: "code",
      level: 85,
      type: "Type Safety",
      desc: "Runtime bug prevention, type-safe API integrations, and clean code structure.",
      color: "bg-[#3A86FF]",
      icon: "📘",
    },
    {
      name: "Tailwind CSS",
      category: "code",
      level: 95,
      type: "Styling & Responsive",
      desc: "Modern utilities, fluid typography, dark mode, and design token customization.",
      color: "bg-[#3A86FF]",
      icon: "🌊",
    },
    {
      name: "DaVinci Resolve",
      category: "media",
      level: 88,
      type: "Color Grading & Editing",
      desc: "Color space transform, node-based grading, dynamic cuts & cinematic pacing.",
      color: "bg-[#BDB2FF]",
      icon: "🎬",
    },
    {
      name: "Adobe Premiere Pro",
      category: "media",
      level: 92,
      type: "Timeline Video Editing",
      desc: "Multi-cam editing, audio syncing, masking, render encoding optimized for social media.",
      color: "bg-[#BDB2FF]",
      icon: "🎞️",
    },
    {
      name: "DJI Fly & Drone Piloting",
      category: "media",
      level: 90,
      type: "Aerial Cinematography",
      desc: "Smooth orbits, bird's-eye perspectives, cinematic tilts, flight safety compliance.",
      color: "bg-[#FFD6E0]",
      icon: "🛸",
    },
    {
      name: "Three.js / React Three Fiber",
      category: "code",
      level: 78,
      type: "3D Web Graphics",
      desc: "Canvas rendering, lighting, camera controls, and interactive 3D asset integrations.",
      color: "bg-[#3A86FF]",
      icon: "🌐",
    },
    {
      name: "VS Code & Git",
      category: "code",
      level: 92,
      type: "Development Environment",
      desc: "Version control, branching workflows, terminal automation, debugging.",
      color: "bg-[#3A86FF]",
      icon: "💻",
    },
  ];

  const filteredSkills =
    filter === "all"
      ? skillList
      : skillList.filter((s) => s.category === filter);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Pill */}
      <div className="flex flex-col items-start mb-12">
        <div className="pill-badge bg-white border-2 border-[#14213D] mb-4">
          <span className="font-pixel text-[10px] text-[#3A86FF]">03 //</span>
          <span className="font-mono text-xs font-bold text-[#14213D]">SOFTWARE SKILLS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#14213D] tracking-tight">
              Core Tech Stack & Tools.
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#3A86FF] mt-2 font-bold tracking-wide">
              SOFTWARE AND TECHNOLOGIES POWERING DAILY WORKFLOWS
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Tools" },
              { id: "design", label: "UI/UX & Design" },
              { id: "code", label: "Code & Dev" },
              { id: "media", label: "Video & Drone" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold border-2 border-[#14213D] transition-all cursor-pointer ${
                  filter === f.id
                    ? "bg-[#3A86FF] text-white shadow-[3px_3px_0px_#14213D] -translate-y-0.5"
                    : "bg-white text-[#14213D] hover:bg-[#FFD6E0]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Rounded White Cards with Software Icons + Pixel Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((tool, idx) => (
          <div
            key={idx}
            className="bg-white border-[2.5px] border-[#14213D] rounded-4xl p-6 shadow-[5px_5px_0px_#14213D] hover:shadow-[8px_8px_0px_#14213D] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              {/* Card top */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF4F4] border-2 border-[#14213D] flex items-center justify-center text-2xl shadow-[2px_2px_0px_#14213D] group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <span className="font-mono text-[11px] font-bold text-[#14213D] px-2.5 py-1 bg-[#BDB2FF]/20 rounded-lg border border-[#14213D]">
                  {tool.type}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-2xl font-black text-[#14213D] mb-1">
                {tool.name}
              </h3>
              <p className="font-sans text-xs text-[#14213D]/75 leading-relaxed mb-5">
                {tool.desc}
              </p>
            </div>

            {/* Pixel Progress Bar */}
            <div className="pt-3 border-t-2 border-[#14213D]/10">
              <div className="flex justify-between items-center font-pixel text-[9px] text-[#14213D] mb-2">
                <span>PROFICIENCY</span>
                <span className="text-[#3A86FF] font-bold">{tool.level}%</span>
              </div>
              <div className="pixel-bar-track">
                <div
                  className="pixel-bar-fill"
                  style={{ width: `${tool.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
