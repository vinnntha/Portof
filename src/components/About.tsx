import React from "react";
import { motion } from "framer-motion";

export const About: React.FC = () => {
  const roles = [
    {
      title: "UX/UI Designer",
      badge: "VISUAL & ARCHITECTURE",
      bgColor: "bg-[#FFFFFF]",
      accentColor: "bg-[#3A86FF]",
      icon: (
        <svg className="w-8 h-8 text-[#3A86FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
      description:
        "Crafting intuitive user experiences, user flow research, wireframing, and modern interface designs with Figma and standardized Design Systems.",
      skills: ["Figma", "Design Systems", "Wireframing", "Micro-interactions", "User Flow"],
    },
    {
      title: "Creative Developer",
      badge: "CODE & ENGINE",
      bgColor: "bg-[#FFD6E0]",
      accentColor: "bg-[#14213D]",
      icon: (
        <svg className="w-8 h-8 text-[#14213D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
      description:
        "Transforming mockups into high-performance interactive web experiences using React, TypeScript, Tailwind CSS, and 3D Three.js touches.",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Three.js / 3D", "Vite / Next.js"],
    },
    {
      title: "Videographer & Editor",
      badge: "CINEMATIC & MOTION",
      bgColor: "bg-[#BDB2FF]",
      accentColor: "bg-[#3A86FF]",
      icon: (
        <svg className="w-8 h-8 text-[#14213D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="3" ry="3" />
        </svg>
      ),
      description:
        "Capturing cinematic moments, shaping visual storytelling, precise color grading, and dynamic sound design using DaVinci Resolve and Premiere Pro.",
      skills: ["DaVinci Resolve", "Adobe Premiere", "Color Grading", "Sound Design", "Storyboarding"],
    },
    {
      title: "Drone Pilot",
      badge: "AERIAL CINEMATOGRAPHY",
      bgColor: "bg-[#FFFFFF]",
      accentColor: "bg-[#3A86FF]",
      icon: (
        <svg className="w-8 h-8 text-[#3A86FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
        </svg>
      ),
      description:
        "Skilled drone pilot for dramatic landscape captures, visual inspections, aerial mapping, and high-speed dynamic 4K cinematic recordings.",
      skills: ["DJI Mini / Air series", "Aerial Framing", "4K 60fps Logistics", "Smooth Tracking", "Safety Standard"],
    },
  ];

  return (
    <div className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Header Label & Title */}
      <div className="flex flex-col items-start mb-8 sm:mb-14">
        <div className="pill-badge bg-white border-2 border-[#14213D] mb-3 sm:mb-4">
          <span className="font-pixel text-[10px] text-[#3A86FF]">01 //</span>
          <span className="font-mono text-xs font-bold text-[#14213D]">ABOUT ME</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4 sm:gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#14213D] tracking-tight">
              Multi-Disciplinary Creativity.
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#3A86FF] mt-1.5 sm:mt-2 font-bold tracking-wide">
              COMBINING CODE, PIXELS, AND AERIAL CINEMATOGRAPHY
            </p>
          </div>

          <p className="font-sans text-xs sm:text-sm lg:text-base text-[#14213D]/80 max-w-md leading-relaxed">
            Hello! I am <strong>Averill Kevinatha</strong>. I believe exceptional digital products don't just run efficiently under the hood, but also connect emotionally with users through captivating, story-driven visuals.
          </p>
        </div>
      </div>

      {/* 4 Modular Role Cards - Compact on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-6 md:gap-8">
        {roles.map((role, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`${role.bgColor} border-2 sm:border-[2.5px] border-[#14213D] rounded-3xl sm:rounded-4xl p-4 sm:p-6 md:p-8 shadow-[4px_4px_0px_#14213D] sm:shadow-[6px_6px_0px_#14213D] hover:shadow-[8px_8px_0px_#14213D] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between gap-2 mb-3 sm:mb-6">
                <div className="p-2 sm:p-3 bg-white rounded-xl sm:rounded-2xl border-2 border-[#14213D] shadow-[2px_2px_0px_#14213D] group-hover:rotate-6 transition-transform">
                  <div className="w-5 h-5 sm:w-8 sm:h-8 flex items-center justify-center">
                    {role.icon}
                  </div>
                </div>
                <span className="font-pixel text-[8px] sm:text-[9px] px-2.5 sm:px-3 py-1 bg-white border border-[#14213D] rounded-full shadow-[2px_2px_0px_#14213D] text-[#14213D] whitespace-nowrap">
                  {role.badge}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-black text-[#14213D] mb-1.5 sm:mb-3">
                {role.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm lg:text-base text-[#14213D]/85 leading-relaxed mb-3 sm:mb-6">
                {role.description}
              </p>
            </div>

            {/* Skills Pills */}
            <div className="pt-3 sm:pt-4 border-t-2 border-[#14213D]/15">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {role.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-mono text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white border border-[#14213D] rounded-lg shadow-[1px_1px_0px_#14213D] text-[#14213D] font-bold"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
