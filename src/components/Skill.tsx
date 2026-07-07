"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

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

export function Skill() {
  const skills = [
    "React",
    "Next.js",
    "Figma",
    "Adobe XD",
    "Premiere Pro",
    "After Effects",
    "DJI Mavic",
    "Blender",
    "Tailwind CSS",
    "GSAP",
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-[#050810] overflow-hidden px-6 md:px-12"
    >
      {/* Massive Watermark Stroke Text */}
      <div className="absolute top-[10%] right-[5%] bg-word opacity-[0.06] pointer-events-none select-none">
        ABOUT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (55% width) - Text & Skill Pills */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1 w-6 bg-ice-300 rounded-full" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-ice-400 uppercase">
                  Introduction
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-syne text-ice-100 tracking-tight leading-tight">
                A creative at the intersection of logic & visual emotion.
              </h2>
            </div>

            <p className="text-ice-300 font-sans text-base md:text-lg leading-relaxed max-w-xl">
              I'm a multi-disciplinary creator at the intersection of technology
              and visual art. Whether I'm writing clean code, crafting UI systems,
              shooting cinematic video, or capturing aerial perspectives — every
              project starts with the same question: what story are we telling?
            </p>

            {/* Skills Container */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-ice-400">
                Core Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="glass-card px-4 py-2 text-xs font-mono text-ice-300 border border-ice-300/10 rounded-full hover:border-ice-300/30 hover:text-ice-100 transition-all duration-300 shadow-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
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
                    <CountUp end={4} />
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
                    <CountUp end={40} />
                  </span>
                  <span className="text-xl font-bold text-ice-300">+</span>
                </div>
              </div>

              {/* Stat 3 */}
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
              </div>

              {/* Stat 4 */}
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
              </div>
            </div>
          </div>
        </div>
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