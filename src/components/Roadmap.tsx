"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Roadmap() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Capture scroll progress within the roadmap section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to path length drawing (normalized 0 to 1)
  const pathLengthProgress = useTransform(scrollYProgress, [0.15, 0.65], [0, 1]);

  const phases = [
    {
      num: "01",
      title: "Discover",
      subtitle: "Research & Strategy",
      bullets: ["Project scoping & research", "Client requirements brief", "User persona mapping"],
      gridCol: "lg:col-span-4",
    },
    {
      num: "02",
      title: "Design",
      subtitle: "Prototyping & System",
      bullets: ["Wireframing user flows", "Interactive prototypes", "Design system layout"],
      gridCol: "lg:col-span-4",
    },
    {
      num: "03",
      title: "Deliver",
      subtitle: "Code & Launch",
      bullets: ["Vite + React assembly", "Performance auditing", "Deployment & testing"],
      gridCol: "lg:col-span-4",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="relative py-28 bg-[#050810] overflow-hidden px-6 md:px-12 border-b border-ice-300/5"
    >
      {/* Background Watermark */}
      <div className="absolute top-[10%] left-[5%] bg-word opacity-[0.05] pointer-events-none select-none">
        PROCESS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col space-y-16">
        
        {/* Title */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1 w-6 bg-ice-300 rounded-full" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-ice-400 uppercase">
              Methodology
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-syne text-ice-100 tracking-tight leading-tight">
            How I Work.
          </h2>
          <p className="text-ice-300 font-sans text-sm mt-2">
            A clear, structured approach to executing every creative project.
          </p>
        </div>

        {/* Timeline Path - Desktop Horizontal (Hidden on Mobile) */}
        <div className="hidden lg:block relative w-full h-24 my-6">
          <svg viewBox="0 0 1000 100" fill="none" className="w-full h-full overflow-visible">
            {/* Background static curve */}
            <path
              d="M 20,50 C 200,10, 400,90, 500,50 C 600,10, 800,90, 980,50"
              stroke="rgba(125, 211, 252, 0.05)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Foreground animated scroll-drawn curve */}
            <motion.path
              d="M 20,50 C 200,10, 400,90, 500,50 C 600,10, 800,90, 980,50"
              stroke="#7DD3FC"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength: pathLengthProgress }}
              className="filter drop-shadow-[0_0_8px_rgba(125,211,252,0.6)]"
            />
            {/* Pulse nodes on desktop */}
            <circle cx="50" cy="50" r="6" fill="#7DD3FC" className="animate-pulse" />
            <circle cx="500" cy="50" r="6" fill="#7DD3FC" className="animate-pulse" />
            <circle cx="950" cy="50" r="6" fill="#7DD3FC" className="animate-pulse" />
          </svg>
        </div>

        {/* Phase Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          
          {/* Timeline Path - Mobile Vertical (Hidden on Desktop) */}
          <div className="lg:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-ice-300/10">
            <motion.div
              style={{ scaleY: pathLengthProgress }}
              className="w-full h-full bg-ice-300 origin-top filter drop-shadow-[0_0_6px_rgba(125,211,252,0.5)]"
            />
          </div>

          {phases.map((phase, index) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              className={`${phase.gridCol} pl-10 lg:pl-0`}
            >
              <div className="glass-card p-8 rounded-2xl border border-ice-300/10 flex flex-col justify-between h-full relative group">
                
                {/* Glowing Dot Marker for Mobile */}
                <div className="lg:hidden absolute left-[-31px] top-9 h-4.5 w-4.5 rounded-full border-4 border-[#050810] bg-ice-300 shadow-[0_0_8px_rgba(125,211,252,0.5)] z-20" />

                <div className="space-y-6">
                  {/* Phase Number Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-ice-500">
                      PHASE {phase.num}
                    </span>
                    <span className="text-4xl font-extrabold font-syne text-ice-300/15 select-none">
                      {phase.num}
                    </span>
                  </div>

                  {/* Titles */}
                  <div>
                    <h3 className="text-2xl font-bold font-syne text-ice-100 group-hover:text-ice-300 transition-colors duration-300">
                      {phase.title}
                    </h3>
                    <p className="text-xs font-mono text-ice-400 mt-1 uppercase tracking-widest">
                      {phase.subtitle}
                    </p>
                  </div>

                  {/* Bullet Lists */}
                  <ul className="space-y-3 pt-2">
                    {phase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-ice-300 font-sans">
                        <span className="h-1.5 w-1.5 bg-ice-400 rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_6px_rgba(125,211,252,0.8)]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
