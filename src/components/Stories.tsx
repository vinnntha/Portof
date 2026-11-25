import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import drone5 from "../assets/drone5.png";
import drone3 from "../assets/drone3.png";
import vidio1 from "../assets/vidio1.png";
import dronevidio1 from "../assets/dronevidio1.MP4";
import dronevidio2 from "../assets/dronevidio2.MP4";
import dronevidio3 from "../assets/dronevidio3.MP4";

interface StoryClip {
  title: string;
  location: string;
  altitude: string;
  speed: string;
  image: string;
  video?: string;
  desc: string;
}

export const Stories: React.FC = () => {
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const clips: StoryClip[] = [
    {
      title: "Evening on the Beach",
      location: "Highlands & Beach",
      altitude: "120m AGL",
      speed: "14 m/s",
      image: drone5,
      desc: "Photo on the beach",
    },
    {
      title: "Coastal Tide & Coral Horizon",
      location: "Coastline & Open Sea",
      altitude: "65m AGL",
      speed: "9 m/s",
      image: drone3,
      video: dronevidio3,
      desc: "Top-down 90° bird's-eye perspective capturing rolling ocean waves and natural coral reef textures.",
    },
    {
      title: "Urban Skyline & Architecture",
      location: "Urban Architecture & Skyline",
      altitude: "90m AGL",
      speed: "11 m/s",
      image: vidio1,
      video: dronevidio2,
      desc: "Smooth lateral tracking alongside high-rise architecture with vibration-free multi-axis gimbal stabilization.",
    },
    {
      title: "Creative Commercial Reel Montage",
      location: "Studio & Field Production",
      altitude: "Eye-level Gimbal",
      speed: "Dynamic Cut",
      image: vidio1,
      video: dronevidio1,
      desc: "Highlight montage of commercial videography with D-Cinelike color grading and high-energy audio rhythm.",
    },
  ];

  const currentClip = clips[activeClipIndex];

  // Sync video play/pause with state
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, activeClipIndex]);

  return (
    <div className="py-10 sm:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Pill */}
      <div className="flex flex-col items-start mb-6 sm:mb-14">
        <div className="pill-badge bg-[#FFD6E0] border-2 border-[#14213D] mb-2.5 sm:mb-4">
          <span className="font-pixel text-[10px] text-[#3A86FF]">05 //</span>
          <span className="font-mono text-xs font-bold text-[#14213D]">STORIES & SHOWREEL</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#14213D] tracking-tight">
          Cinematic & Aerial Lens.
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#3A86FF] mt-1 sm:mt-2 font-bold tracking-wide">
          REAL-TIME AERIAL DRONE TELEMETRY MONITOR & VISUAL STORYTELLING
        </p>
      </div>

      {/* Main Viewfinder Monitor Box: Optimized for both mobile and desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-[#14213D] border-2 sm:border-[3px] border-[#14213D] rounded-2xl sm:rounded-5xl p-3 sm:p-7 shadow-[4px_4px_0px_#3A86FF] sm:shadow-[8px_8px_0px_#3A86FF] overflow-hidden text-white"
      >
        {/* HUD Top Bar: Battery, GPS, Record Status */}
        <div className="flex items-center justify-between gap-2 pb-2.5 sm:pb-4 mb-2.5 sm:mb-4 border-b border-white/20 font-mono text-[10px] sm:text-xs z-20 relative">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* REC indicator */}
            <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-red-600/90 rounded-md font-pixel text-[8px] sm:text-[9px] text-white">
              <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white ${isPlaying && currentClip.video ? "animate-ping" : ""}`} />
              <span>REC</span>
            </div>
            <span className="text-[#BDB2FF] font-bold">4K 60FPS</span>
            <span className="hidden sm:inline text-white/60">HDR D-CINELIKE 10-BIT</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 font-mono text-[10px] sm:text-[11px]">
            <span className="text-[#FFD6E0]">ISO 100</span>
            <span className="text-[#FFD6E0] hidden xs:inline">F/2.8</span>
            <span className="text-white/80 hidden xs:inline">SAT 24</span>
            <span className="text-emerald-400 font-bold">BAT 98%</span>
          </div>
        </div>

        {/* Center Display / Viewfinder Screen */}
        <div className="relative aspect-[4/3] sm:aspect-video w-full rounded-xl sm:rounded-3xl overflow-hidden border-2 border-white/25 bg-black flex items-center justify-center group select-none">
          {currentClip.video ? (
            <video
              key={currentClip.video}
              ref={videoRef}
              src={currentClip.video}
              poster={currentClip.image}
              className="w-full h-full object-cover transition-all duration-700 cursor-pointer"
              autoPlay
              loop
              muted
              playsInline
              onClick={() => setIsPlaying(!isPlaying)}
            />
          ) : (
            <img
              src={currentClip.image}
              alt={currentClip.title}
              className="w-full h-full object-cover transition-all duration-700 brightness-95 contrast-105"
            />
          )}

          {/* Viewfinder Corner Brackets HUD */}
          <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-white/40 pointer-events-none" />
          <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-white/40 pointer-events-none" />
          <div className="absolute bottom-14 left-2.5 sm:bottom-16 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-white/40 pointer-events-none" />
          <div className="absolute bottom-14 right-2.5 sm:bottom-16 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-white/40 pointer-events-none" />

          {/* Center Play Overlay Icon when Paused */}
          {!isPlaying && currentClip.video && (
            <div
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer backdrop-blur-[1px]"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#14213D]/80 border-2 border-white/80 shadow-[0_0_15px_rgba(58,134,255,0.4)] flex items-center justify-center text-white text-lg sm:text-2xl pl-1 active:scale-95 transition-transform">
                ▶
              </div>
            </div>
          )}

          {/* Bottom Gradient Scrim Overlay: Video stays completely visible! */}
          <div className="absolute inset-x-0 bottom-0 pt-10 pb-2.5 px-3 sm:px-5 sm:pb-4 bg-gradient-to-t from-[#14213D]/95 via-[#14213D]/65 to-transparent flex items-end justify-between gap-2 pointer-events-auto">
            <div className="min-w-0 pr-1">
              <h3 className="font-serif text-sm sm:text-xl font-bold text-white leading-tight truncate">
                {currentClip.title}
              </h3>
              <p className="font-mono text-[10px] sm:text-xs text-white/75 mt-0.5 sm:mt-1 truncate">
                {currentClip.location} <span className="hidden sm:inline"> | Alt: {currentClip.altitude} | Spd: {currentClip.speed}</span>
              </p>
            </div>

            {/* Play/Pause state or Photo badge */}
            {currentClip.video ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(!isPlaying);
                }}
                className="px-2.5 py-1 sm:px-4 sm:py-1.5 bg-[#3A86FF] hover:bg-[#5E9EFF] text-white rounded-full font-mono text-[10px] sm:text-xs font-bold border border-white/40 shadow-sm flex items-center gap-1 active:scale-95 transition-all shrink-0 cursor-pointer"
              >
                <span>{isPlaying ? "❚❚ PAUSE" : "▶ PLAY"}</span>
              </button>
            ) : (
              <div className="px-2 py-0.5 sm:px-3 sm:py-1 bg-white/15 text-[#FFD6E0] rounded-full font-mono text-[9px] sm:text-xs font-semibold border border-white/25 flex items-center gap-1 shrink-0">
                <span>PHOTO</span>
              </div>
            )}
          </div>
        </div>

        {/* Telemetry live status strip */}
        <div className="mt-2.5 sm:mt-3 px-3 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between gap-2 font-mono text-[10px] sm:text-xs text-white/80">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3A86FF] shrink-0 animate-pulse" />
            <span className="truncate text-white/90">{currentClip.desc}</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-white/60 shrink-0 font-pixel text-[9px]">
            <span>ALT: <span className="text-emerald-400">{currentClip.altitude}</span></span>
            <span>SPD: <span className="text-emerald-400">{currentClip.speed}</span></span>
          </div>
        </div>

        {/* Clip Selector Tabs (Bottom of Monitor) */}
        <div className="mt-3 sm:mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {clips.map((clip, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setActiveClipIndex(idx);
                setIsPlaying(true);
              }}
              className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border-2 text-left transition-all ${
                activeClipIndex === idx
                  ? "bg-[#3A86FF] border-white shadow-[2px_2px_0px_#BDB2FF] sm:shadow-[3px_3px_0px_#BDB2FF] -translate-y-0.5 sm:-translate-y-1"
                  : "bg-white/10 border-white/20 hover:bg-white/20 text-white/80"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-pixel text-[8px] text-[#FFD6E0]">
                  REEL #{idx + 1}
                </span>
                {clip.video ? (
                  <span className="font-pixel text-[7px] bg-red-600 px-1 py-0.5 rounded text-white font-bold">
                    VIDEO
                  </span>
                ) : (
                  <span className="font-pixel text-[7px] bg-emerald-600/90 px-1 py-0.5 rounded text-white font-bold">
                    PHOTO
                  </span>
                )}
              </div>
              <div className="font-serif text-xs sm:text-sm font-bold text-white line-clamp-2 leading-tight">
                {clip.title}
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
