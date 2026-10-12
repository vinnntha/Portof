import React, { useEffect, useState } from "react";

export const RetroCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-clickable='true']") ||
        target.closest("input") ||
        target.closest("textarea")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${
          isClicking ? 0.8 : isHovered ? 1.5 : 1
        })`,
      }}
    >
      {/* Outer retro ring */}
      <div
        className={`w-8 h-8 rounded-full border-2 border-[#14213D] flex items-center justify-center transition-colors duration-200 ${
          isHovered
            ? "bg-[#3A86FF]/30 border-[#3A86FF] shadow-[0_0_12px_#3A86FF]"
            : "bg-[#FFD6E0]/40"
        }`}
      >
        {/* Pixel center dot */}
        <div
          className={`w-2.5 h-2.5 bg-[#3A86FF] border border-[#14213D] ${
            isHovered ? "bg-[#FFD6E0] rotate-45" : ""
          } transition-all duration-150`}
        />
      </div>

      {/* Floating mini pixel sparkle */}
      {isHovered && (
        <span className="absolute -top-3 -right-3 font-pixel text-[8px] text-[#3A86FF] select-none animate-pulse">
          ✦
        </span>
      )}
    </div>
  );
};
