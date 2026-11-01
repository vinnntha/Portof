import React, { useState } from "react";
import { motion } from "framer-motion";

// Official vector SVG brand logos
const FigmaLogo = () => (
  <svg viewBox="0 0 38 57" className="w-5 h-5 sm:w-6 sm:h-6" fill="none">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
  </svg>
);

const ReactLogo = () => (
  <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 sm:w-6 sm:h-6">
      <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
      <g stroke="#00D8FF" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  </div>
);

const TypeScriptLogo = () => (
  <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6 rounded-md">
    <rect width="128" height="128" fill="#3178C6" rx="14" />
    <path
      d="M70.92 78.85c2.37 3.84 5.92 6.07 10.66 6.07 5.11 0 8.35-2.65 8.35-6.35 0-4.18-3.34-5.71-8.91-8.08l-3.06-1.32c-8.77-3.69-14.62-8.35-14.62-18.38 0-9.89 7.66-17.13 19.49-17.13 8.36 0 14.49 2.92 18.52 9.61l-7.94 5.01c-2.37-3.9-5.15-5.57-10.44-5.57-4.6 0-7.38 2.37-7.38 5.71 0 3.62 2.78 5.01 8.21 7.38l3.06 1.32c10.44 4.45 15.45 9.19 15.45 19.07 0 11.42-8.91 17.82-20.88 17.82-11.42 0-18.79-4.87-22.83-12.8l8.32-4.36zM32 41.52h37.45v8.77H53.05V102H41.4V50.29H32V41.52z"
      fill="#FFF"
    />
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 54 33" className="w-5 h-5 sm:w-6 sm:h-6" fill="#38BDF8">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.005-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
    />
  </svg>
);

const DaVinciLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5 h-5 sm:w-6 sm:h-6">
    <rect width="100" height="100" rx="20" fill="#141824" />
    <g transform="translate(50, 50)">
      <path d="M-6 -9 L-13 -36 C-7 -42 7 -42 13 -36 L6 -9 Z" fill="#FF4554" />
      <g transform="rotate(120)">
        <path d="M-6 -9 L-13 -36 C-7 -42 7 -42 13 -36 L6 -9 Z" fill="#00C0FF" />
      </g>
      <g transform="rotate(240)">
        <path d="M-6 -9 L-13 -36 C-7 -42 7 -42 13 -36 L6 -9 Z" fill="#FFB800" />
      </g>
      <circle cx="0" cy="0" r="5" fill="#141824" />
    </g>
  </svg>
);

const PremiereLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5 h-5 sm:w-6 sm:h-6">
    <rect width="100" height="100" rx="20" fill="#00005B" />
    <rect x="5" y="5" width="90" height="90" rx="16" fill="none" stroke="#9999FF" strokeWidth="4" />
    <text
      x="50"
      y="63"
      fill="#9999FF"
      fontSize="42"
      fontWeight="bold"
      fontFamily="system-ui, -apple-system, sans-serif"
      textAnchor="middle"
    >
      Pr
    </text>
  </svg>
);

const DJILogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#14213D">
    <path d="M19.2 7.8a716.856 716.856 0 0 0-1.232 4.63c-.202.772-.401 1.544-.634 2.308-.226.743-.504 1.535-.91 2.21-.422.703-.969 1.253-1.726 1.604-.3.137-.615.24-.939.306-.46.09-.926.146-1.394.165-1.163.065-3.628.056-4.79.056l.713-2.64c.539 0 1.078.002 1.617-.013.52-.014 1.092-.042 1.605-.163.56-.133.984-.36 1.355-.817.337-.416.564-.935.75-1.424.34-.893.688-2.173.934-3.093.277-1.041.544-2.085.812-3.129zm4.8 0-2.072 7.68h-3.84l2.073-7.68ZM11.339 4.92h3.84c-.403 1.5-.805 2.999-1.212 4.496-.283 1.044-.565 2.088-.872 3.124-.135.452-.269.903-.445 1.342-.141.352-.3.666-.591.93a1.908 1.908 0 0 1-.734.405c-.356.112-.717.154-1.085.184-.53.043-1.06.054-1.591.063-1.991.02-3.983.02-5.974-.001a21.408 21.408 0 0 1-.954-.034 5.319 5.319 0 0 1-.632-.07 1.851 1.851 0 0 1-.412-.119c-.44-.192-.664-.575-.677-1.043 0-.263.032-.525.093-.78.076-.367.171-.728.265-1.09.179-.691.506-1.966.762-2.638.2-.526.464-1.05.966-1.382.28-.186.576-.285.901-.35.241-.05.483-.075.728-.093.41-.03.82-.04 1.23-.047.582-.01 1.165-.013 1.748-.015L8.148 7.8h1.454l-.518 1.92c-.864 0-1.728-.002-2.593.003-.252.001-.504 0-.756.016a.968.968 0 0 0-.264.042c-.113.04-.17.11-.22.213-.073.15-.115.31-.162.468a84.804 84.804 0 0 0-.503 1.857c-.035.14-.07.28-.1.42-.022.099-.04.197-.05.298-.01.11-.014.242.053.345.068.103.182.127.29.143.12.018.241.021.363.025.199.006.398.007.597.008.544.003 1.089.003 1.633 0 .25-.002.501-.004.752-.014.173-.007.343-.013.513-.054.13-.031.23-.08.318-.186.056-.071.1-.15.133-.235.088-.209.15-.425.213-.641.245-.83.466-1.665.692-2.499l.675-2.503.67-2.505h3.84z"/>
  </svg>
);

const ThreeJSLogo = () => (
  <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6" fill="#14213D">
    <path d="M16.219 15.762a1.129 1.129 0 00-1.076 1.399l24.394 98.742a1.129 1.129 0 001.879.544l73.386-70.59a1.129 1.129 0 00-.47-1.899L16.55 15.806a1.129 1.129 0 00-.331-.044zm1.584 2.754l94.024 27.07-70.566 67.877-23.458-94.947z" />
    <path d="M65.137 29.84a1.129 1.129 0 00-.807.315L27.654 65.46a1.129 1.129 0 00.471 1.898L76.984 81.44a1.129 1.129 0 001.409-1.355L66.21 30.698a1.129 1.129 0 00-1.073-.858zm-.651 3.3L75.734 78.73l-45.104-13L64.486 33.14z" />
    <path d="M46.914 47.313a1.129 1.129 0 00-1.076 1.399l6.054 24.531a1.129 1.129 0 001.88.543l18.222-17.563a1.129 1.129 0 00-.472-1.898l-24.277-6.968a1.129 1.129 0 00-.331-.044zm1.583 2.751l20.522 5.89L53.614 70.8l-5.117-20.736z" />
  </svg>
);

const VSCodeLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5 h-5 sm:w-6 sm:h-6">
    <path d="M71.4 99.3a6.2 6.2 0 0 0 5-.2l20.6-9.9a6.2 6.2 0 0 0 3.5-5.6V16.4a6.2 6.2 0 0 0-3.5-5.6L76.4.9a6.2 6.2 0 0 0-7.1 1.2L29.9 38 12.2 25a4.2 4.2 0 0 0-5.3.2L1.4 30.2a4.2 4.2 0 0 0 0 6.2L16.2 50 1.4 63.6a4.2 4.2 0 0 0 0 6.2l5.5 5a4.2 4.2 0 0 0 5.3.2L29.9 62l39.4 36a6.2 6.2 0 0 0 2.1 1.3z" fill="#0065A9" />
    <path d="M76.4 99.1l20.6-9.9a6.2 6.2 0 0 0 3.5-5.6V16.4a6.2 6.2 0 0 0-3.5-5.6L76.4.9c2.3 2.3 6.2.7 6.2-2.6v97.4c0-3.3-3.9-4.9-6.2-2.6z" fill="#1F9CF0" />
    <path d="M75.5 27.3L45.1 50l30.4 22.7V27.3z" fill="#007ACC" />
  </svg>
);

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "design" | "code" | "media">("all");
  const [showAllMobile, setShowAllMobile] = useState(false);

  const skillList: Array<{
    name: string;
    category: "all" | "design" | "code" | "media";
    level: number;
    type: string;
    desc: string;
    color: string;
    icon: React.ReactNode;
  }> = [
    {
      name: "Figma",
      category: "design",
      level: 95,
      type: "UI/UX & Design",
      desc: "Interactive components, auto-layout, design tokens & dev handoff.",
      color: "bg-[#3A86FF]",
      icon: <FigmaLogo />,
    },
    {
      name: "React.js & Vite",
      category: "code",
      level: 90,
      type: "Frontend Web",
      desc: "Modular components, state management hooks, SPA architectures.",
      color: "bg-[#3A86FF]",
      icon: <ReactLogo />,
    },
    {
      name: "TypeScript",
      category: "code",
      level: 85,
      type: "Type Safety",
      desc: "Runtime bug prevention, type-safe API integrations, clean code.",
      color: "bg-[#3A86FF]",
      icon: <TypeScriptLogo />,
    },
    {
      name: "Tailwind CSS",
      category: "code",
      level: 95,
      type: "Styling & UI",
      desc: "Modern utilities, fluid typography, dark mode & tokens.",
      color: "bg-[#3A86FF]",
      icon: <TailwindLogo />,
    },
    {
      name: "DaVinci Resolve",
      category: "media",
      level: 88,
      type: "Color & Editing",
      desc: "Color space transform, node-based grading & cinematic pacing.",
      color: "bg-[#BDB2FF]",
      icon: <DaVinciLogo />,
    },
    {
      name: "Premiere Pro",
      category: "media",
      level: 92,
      type: "Video Editing",
      desc: "Multi-cam editing, audio syncing, masking & social encoding.",
      color: "bg-[#BDB2FF]",
      icon: <PremiereLogo />,
    },
    {
      name: "DJI Piloting",
      category: "media",
      level: 90,
      type: "Drone Aerial",
      desc: "Smooth orbits, bird's-eye tilts, cinematic framing & safety.",
      color: "bg-[#FFD6E0]",
      icon: <DJILogo />,
    },
    {
      name: "Three.js / 3D",
      category: "code",
      level: 78,
      type: "3D Graphics",
      desc: "Canvas rendering, lighting, camera controls, interactive 3D.",
      color: "bg-[#3A86FF]",
      icon: <ThreeJSLogo />,
    },
    {
      name: "VS Code & Git",
      category: "code",
      level: 92,
      type: "Dev Workflow",
      desc: "Version control, branching, terminal automation & debugging.",
      color: "bg-[#3A86FF]",
      icon: <VSCodeLogo />,
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
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white border-1.5 sm:border-2 border-[#14213D] flex items-center justify-center shadow-[1.5px_1.5px_0px_#14213D] group-hover:scale-110 transition-transform shrink-0 p-1 sm:p-1.5 overflow-hidden">
                  {tool.icon}
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
