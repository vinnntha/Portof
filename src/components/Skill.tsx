"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import LogoLoop from "./LogoLoop";
import type { LogoItem } from "./LogoLoop";
import BlurText from "./BlurText";

// CountUp Component for stats
function CountUp({ end, duration = 1.5 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const totalFrames = duration * 60; // 60fps
    const increment = end / totalFrames;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

/** Map of skill label → Devicon SVG URL (plain/original/wordmark variants) */
const SKILL_ICONS: Record<string, string> = {
  // Row 1
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  "Adobe Illustration": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg",
  "Premiere Pro": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-plain.svg",
  "After Effects": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-plain.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  
  // Row 2
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Photoshop": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
  "Lightroom": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lightroom/lightroom-original.svg",
  "Nest.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg",
  "Xampp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xampp/xampp-.svg",
};

/** Drone icon used as fallback for tools not in Devicon (e.g. DJI Mavic, Stable Diffusion) */
const FallbackIcon = ({ label }: { label: string }) => (
  <span className="inline-flex items-center justify-center w-6 h-6 rounded text-[10px] font-bold font-mono text-ice-300/60 border border-ice-300/20 select-none leading-none">
    {label.slice(0, 2).toUpperCase()}
  </span>
);

const makeLogos = (labels: string[]): LogoItem[] =>
  labels.map(label => {
    const iconUrl = SKILL_ICONS[label];
    return {
      node: (
        <span className="flex items-center px-1">
          {iconUrl ? (
            <img
              src={iconUrl}
              alt={label}
              width={22}
              height={22}
              className="w-[88px] h-[88px] object-contain ice-300/75 opacity-80 transition-opacity"
              draggable={false}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <FallbackIcon label={label} />
          )}
        </span>
      ),
      title: label,
    };
  });

export function Skill() {
  const skillsRow1: LogoItem[] = makeLogos([
    "React", "Next.js", "Figma", "Adobe Illustration", "Premiere Pro",
    "After Effects", "Tailwind CSS",
  ]);

  const skillsRow2: LogoItem[] = makeLogos([
    "TypeScript", "Vite", "Node.js", "Python", "Photoshop", "Lightroom", "Nest.js", "Git", "Xampp",
  ]);

  return (
    <section
      id="about"
      className="relative py-28 bg-[#050810] overflow-hidden"
    >
      {/* Massive Watermark Stroke Text */}
      <div className="absolute top-[10%] right-[5%] bg-word opacity-[0.06] pointer-events-none select-none">
        ABOUT
      </div>

      {/* Main grid — constrained to max-w-7xl */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column (55% width) - Text */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1 w-6 bg-ice-300 rounded-full" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-ice-400 uppercase">
                  Introduction
                </span>
              </div>
              <BlurText
                text="A creative at the intersection of logic & visual emotion."
                delay={50}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl font-extrabold font-syne text-ice-100 tracking-tight leading-tight"
              />
            </div>

            <p className="text-ice-300 font-sans text-base md:text-lg leading-relaxed max-w-xl">
              I&#39;m a multi-disciplinary creator at the intersection of technology
              and visual art. Whether I&#39;m writing clean code, crafting UI systems,
              shooting cinematic video, or capturing aerial perspectives — every
              project starts with the same question: what story are we telling?
            </p>
          </div>

          {/* Right Column (45% width) - Bento Stats & Animated Blob */}
          <div className="lg:col-span-5 relative flex flex-col items-center">

            {/* Morphing Blob background layer */}
            <div className="absolute -z-10 w-72 h-72 md:w-80 md:h-80 morphing-blob pointer-events-none opacity-80" />

            {/* Bento Grid Stats */}
            <div className="w-full grid grid-cols-2 gap-4">
              {/* Stat 1 */}
              <div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-36">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ice-500">
                  Experience
                </span>
                <div>
                  <span className="text-4xl md:text-5xl font-extrabold font-syne text-ice-200">
                    <CountUp end={2} />
                  </span>
                  <span className="text-xl font-bold text-ice-300">+ yrs</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-36">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ice-500">
                  Projects
                </span>
                <div>
                  <span className="text-4xl md:text-5xl font-extrabold font-syne text-ice-200">
                    <CountUp end={20} />
                  </span>
                  <span className="text-xl font-bold text-ice-300">+</span>
                </div>
              </div>

              {/* Stat 3 
              <div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-36">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ice-500">
                  Clients
                </span>
                <div>
                  <span className="text-4xl md:text-5xl font-extrabold font-syne text-ice-200">
                    <CountUp end={15} />
                  </span>
                  <span className="text-xl font-bold text-ice-300">+</span>
                </div>
              </div> */}

              {/* Stat 4 
              <div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-36">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ice-500">
                  Status
                </span>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-mono text-ice-200 font-bold leading-tight">
                    Freelance Ready
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[9px] text-ice-400 font-mono tracking-widest uppercase">
                      Available
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

        </div>
      </div>

      {/* Full-bleed LogoLoop marquee rows — span full section width */}
      <div className="relative w-full mt-12 space-y-3">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-ice-300/10 to-transparent mb-6" />

        {/* Row 1 — scrolls left */}
        <LogoLoop
          logos={skillsRow1}
          speed={60}
          direction="left"
          width="100%"
          logoHeight={28}
          gap={24}
          hoverSpeed={15}
          fadeOut
          fadeOutColor="#050810"
          ariaLabel="Primary skills"
          className="py-2"
        />

        {/* Row 2 — scrolls right */}
        <LogoLoop
          logos={skillsRow2}
          speed={50}
          direction="right"
          width="100%"
          logoHeight={28}
          gap={24}
          hoverSpeed={12}
          fadeOut
          fadeOutColor="#050810"
          ariaLabel="Secondary skills"
          className="py-2"
        />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-ice-300/10 to-transparent mt-6" />
      </div>

      {/* Morphing Blob Styling */}
      <style>{`
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        .morphing-blob {
          animation: morph 9s ease-in-out infinite;
          background: radial-gradient(circle, rgba(125,211,252,0.08) 0%, transparent 70%);
          border: 1px dashed rgba(125, 211, 252, 0.15);
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
