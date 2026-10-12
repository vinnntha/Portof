import React, { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING SYSTEM...");
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const statuses = [
      { at: 15, text: "CALIBRATING PIXELS..." },
      { at: 40, text: "LOADING EDITORIAL LAYOUT..." },
      { at: 70, text: "CONNECTING DRONE TELEMETRY..." },
      { at: 90, text: "LAUNCHING PORTFOLIO..." },
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(timer);
          setStatusText("SYSTEM READY!");
          setTimeout(() => {
            setIsClosing(true);
            setTimeout(onComplete, 750);
          }, 350);
          return 100;
        }

        const currentStatus = statuses.find((s) => next >= s.at && prev < s.at);
        if (currentStatus) {
          setStatusText(currentStatus.text);
        }

        return next;
      });
    }, 55);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFF4F4] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isClosing
          ? "opacity-0 scale-105 pointer-events-none translate-y-[-100%]"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Background Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "linear-gradient(to right, #3A86FF 1px, transparent 1px), linear-gradient(to bottom, #3A86FF 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Main Pixel Preloader Box */}
      <div className="relative z-10 w-[90%] max-w-md p-8 bg-white border-[3px] border-[#14213D] rounded-3xl shadow-[8px_8px_0px_#14213D] text-center">
        {/* Top bar retro */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b-2 border-[#14213D]">
          <div className="flex gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#FFD6E0] border border-[#14213D]"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#BDB2FF] border border-[#14213D]"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#3A86FF] border border-[#14213D]"></span>
          </div>
          <span className="font-pixel text-[10px] text-[#3A86FF] tracking-wider">
            BOOT.V2 // 2026
          </span>
        </div>

        {/* Center Pixel Icon */}
        <div className="inline-block p-4 mb-4 bg-[#BDB2FF]/20 rounded-2xl border-2 border-[#14213D] animate-bounce">
          <svg
            className="w-10 h-10 text-[#3A86FF]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm12 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
          </svg>
        </div>

        <h2 className="font-serif text-2xl font-black text-[#14213D] tracking-tight">
          Averill Kevinatha
        </h2>
        <p className="font-mono text-xs text-[#14213D]/70 mt-1 mb-5">
          {statusText}
        </p>

        {/* Progress Bar Container */}
        <div className="w-full h-5 p-1 bg-white border-2 border-[#14213D] rounded-full shadow-inner overflow-hidden mb-3">
          <div
            className="h-full bg-gradient-to-r from-[#3A86FF] to-[#BDB2FF] rounded-full transition-all duration-150 ease-out flex items-center justify-end pr-1"
            style={{ width: `${progress}%` }}
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Numeric Counter */}
        <div className="flex justify-between items-center font-pixel text-[11px] text-[#14213D]">
          <span>PROGRESS</span>
          <span className="text-[#3A86FF] font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
