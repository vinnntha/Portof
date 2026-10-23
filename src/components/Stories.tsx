import React, { useState } from "react";
import drone2 from "../assets/drone2.png";
import drone3 from "../assets/drone3.png";
import drone4 from "../assets/drone4.png";
import vidio1 from "../assets/vidio1.png";

export const Stories: React.FC = () => {
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const clips = [
    {
      title: "Golden Hour Mountain Ascent",
      location: "Highlands & Mountain Ranges",
      altitude: "120m AGL",
      speed: "14 m/s",
      image: drone2,
      duration: "00:45",
      desc: "Cinematic high-speed capture of dawn light transitions cutting through valley fog.",
    },
    {
      title: "Coastal Tide & Coral Horizon",
      location: "Coastline & Open Sea",
      altitude: "65m AGL",
      speed: "9 m/s",
      image: drone3,
      duration: "01:10",
      desc: "Top-down 90° bird's-eye perspective capturing rolling ocean waves and natural coral reef textures.",
    },
    {
      title: "Urban Skyline & Architecture",
      location: "Urban Architecture & Skyline",
      altitude: "90m AGL",
      speed: "11 m/s",
      image: drone4,
      duration: "00:30",
      desc: "Smooth lateral tracking alongside high-rise architecture with vibration-free multi-axis gimbal stabilization.",
    },
    {
      title: "Creative Commercial Reel Montage",
      location: "Studio & Field Production",
      altitude: "Eye-level Gimbal",
      speed: "Dynamic Cut",
      image: vidio1,
      duration: "01:25",
      desc: "Highlight montage of commercial videography with D-Cinelike color grading and high-energy audio rhythm.",
    },
  ];

  const currentClip = clips[activeClipIndex];

  return (
    <section id="stories" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Pill */}
      <div className="flex flex-col items-start mb-14">
        <div className="pill-badge bg-[#FFD6E0] border-2 border-[#14213D] mb-4">
          <span className="font-pixel text-[10px] text-[#3A86FF]">05 //</span>
          <span className="font-mono text-xs font-bold text-[#14213D]">STORIES & SHOWREEL</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#14213D] tracking-tight">
          Cinematic & Aerial Lens.
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#3A86FF] mt-2 font-bold tracking-wide">
          REAL-TIME AERIAL DRONE TELEMETRY MONITOR & VISUAL STORYTELLING
        </p>
      </div>

      {/* Main Viewfinder Monitor Box */}
      <div className="relative bg-[#14213D] border-[3px] border-[#14213D] rounded-4xl sm:rounded-5xl p-4 sm:p-8 shadow-[8px_8px_0px_#3A86FF] overflow-hidden text-white">
        {/* HUD Top Bar: Battery, GPS, Record Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-white/20 font-mono text-xs z-20 relative">
          <div className="flex items-center gap-3">
            {/* REC indicator */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-red-600/90 rounded-md font-pixel text-[9px] text-white">
              <span className={`w-2 h-2 rounded-full bg-white ${isPlaying ? "animate-ping" : ""}`} />
              <span>REC</span>
            </div>
            <span className="text-[#BDB2FF] font-bold">4K 60FPS HDR</span>
            <span className="hidden sm:inline text-white/60">D-CINELIKE 10-BIT</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 font-mono text-[11px]">
            <span className="text-[#FFD6E0]">ISO 100</span>
            <span className="text-[#FFD6E0]">F/2.8</span>
            <span className="text-white/80">SAT 24</span>
            <span className="text-emerald-400 font-bold">BAT 98%</span>
          </div>
        </div>

        {/* Center Display / Viewfinder Screen */}
        <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/25 bg-black flex items-center justify-center group">
          <img
            src={currentClip.image}
            alt={currentClip.title}
            className="w-full h-full object-cover transition-all duration-700 brightness-95 contrast-105"
          />

          {/* Viewfinder Crosshair & Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {/* Center crosshair */}
            <div className="w-12 h-12 border-2 border-white/40 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#3A86FF] rounded-full" />
            </div>
            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/50" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/50" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white/50" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/50" />
          </div>

          {/* Telemetry info HUD box inside screen */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-between items-end gap-2 bg-[#14213D]/80 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/20">
            <div>
              <span className="font-pixel text-[9px] text-[#BDB2FF]">
                CLIP: {activeClipIndex + 1}/4 // {currentClip.duration}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-0.5">
                {currentClip.title}
              </h3>
              <p className="font-sans text-xs text-white/80 hidden sm:block">
                📍 {currentClip.location} | Alt: {currentClip.altitude} | Speed: {currentClip.speed}
              </p>
            </div>

            {/* Play/Pause state */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-1.5 bg-[#3A86FF] hover:bg-[#5E9EFF] text-white rounded-full font-mono text-xs font-bold border border-white/40 shadow-sm flex items-center gap-1.5 active:scale-95 transition-all"
            >
              <span>{isPlaying ? "❚❚ PAUSE" : "▶ PLAY"}</span>
            </button>
          </div>
        </div>

        {/* Clip Selector Tabs (Bottom of Monitor) */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {clips.map((clip, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveClipIndex(idx);
                setIsPlaying(true);
              }}
              className={`p-3 rounded-2xl border-2 text-left transition-all ${
                activeClipIndex === idx
                  ? "bg-[#3A86FF] border-white shadow-[3px_3px_0px_#BDB2FF] -translate-y-1"
                  : "bg-white/10 border-white/20 hover:bg-white/20 text-white/80"
              }`}
            >
              <div className="font-pixel text-[8px] text-[#FFD6E0] mb-1">
                REEL #{idx + 1}
              </div>
              <div className="font-serif text-xs sm:text-sm font-bold text-white line-clamp-1">
                {clip.title}
              </div>
              <div className="font-mono text-[10px] text-white/70 mt-1">
                {clip.duration}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
