"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import BlurText from "./BlurText";
import codingProjectImg from "../assets/coding_project.png";
import designProjectImg from "../assets/design_project.png";
import droneProjectImg from "../assets/drone_project.png";
import videoProjectImg from "../assets/drone3.png";
import droneMockupImg from "../assets/drone_mockup.png";

export function MyProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll parallax effects for the three panels
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax translations matching the scroll animation system specifications
  const laptopY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [-2, 3]);
  const droneScale = useTransform(scrollYProgress, [0.3, 0.7], [1.06, 1]);

  // 3D Tilt hook logic for drone section
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltXSpring = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const tiltYSpring = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(tiltXSpring, [-200, 200], [10, -10]);
  const rotateY = useTransform(tiltYSpring, [-200, 200], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xVal = event.clientX - rect.left - width / 2;
    const yVal = event.clientY - rect.top - height / 2;
    mouseX.set(xVal);
    mouseY.set(yVal);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div ref={containerRef} id="projects" className="bg-[#050810] text-[#F0F4FF] overflow-hidden">
      
      {/* ─── SUB-SECTION 4A: CODING PROJECTS ─── */}
      <section className="relative min-h-[90vh] py-20 flex items-center border-b border-ice-300/5 px-6 md:px-12">
        <div className="absolute top-[10%] left-[5%] bg-word opacity-[0.05] pointer-events-none select-none">
          CODE
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text and Mini Cards (Left) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1 w-6 bg-ice-300 rounded-full" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-ice-400 uppercase">
                  Development
                </span>
              </div>
              <BlurText
                text="Where Logic Meets Creativity."
                delay={50}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl font-extrabold font-syne text-ice-100 leading-tight"
              />
            </div>
            
            <p className="text-ice-300 font-sans text-base max-w-md">
              Building lightweight, high-performance web applications. I design responsive frontend architectures with fluid interfaces and structured, modular codebases.
            </p>

            {/* Mini Project Cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { id: "P.01", title: "Neural Viz", desc: "Canvas Graphing" },
                { id: "P.02", title: "NextGen DB", desc: "Analytics" },
                { id: "P.03", title: "Astra Engine", desc: "State Tool" },
              ].map((card) => (
                <div key={card.id} className="glass-card p-4 rounded-xl border border-ice-300/10 flex flex-col justify-between h-28">
                  <span className="text-[10px] font-mono text-ice-400 font-bold">{card.id}</span>
                  <div>
                    <h4 className="text-xs font-bold text-ice-200 truncate">{card.title}</h4>
                    <p className="text-[9px] font-mono text-ice-500 truncate">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#work"
              className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-ice-300 hover:text-ice-100 transition-colors group clickable"
            >
              See all coding work
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </div>

          {/* Device Hand Mockup (Right Edge, Bleeding off) */}
          <div className="lg:col-span-6 relative flex justify-end items-center h-[400px]">
            <motion.div
              style={{ y: laptopY }}
              className="relative w-full max-w-[500px] flex items-center justify-end"
            >
              {/* Sleek CSS Bezel Laptop Frame */}
              <div className="relative z-10 w-[90%] aspect-[16/10] bg-black border-[6px] border-[#101625] rounded-2xl overflow-hidden shadow-2xl shadow-ice-300/5 hover:shadow-ice-300/10 transition-shadow duration-500">
                <div className="w-full h-full bg-[#050a14] relative">
                  <img
                    src={codingProjectImg}
                    alt="Laptop screen"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ice-500/15 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Minimalist Glowing SVG Hand Outline "Supporting" Laptop */}
              <svg
                className="absolute right-[-10%] bottom-[-20%] w-[80%] h-[120%] z-20 pointer-events-none opacity-40 filter drop-shadow-[0_0_12px_rgba(125,211,252,0.3)]"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Hand outline sketch */}
                <path
                  d="M170 180 C 160 140, 140 100, 110 80 C 100 73, 90 73, 85 80 C 80 88, 85 100, 92 105 L 110 115 C 115 118, 112 125, 107 125 L 75 125 C 65 125, 60 118, 62 110 L 68 85 C 70 75, 65 70, 58 75 L 45 85 C 38 92, 35 102, 40 115 L 60 160 C 65 170, 75 180, 85 180 Z"
                  stroke="#7DD3FC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                />
                <circle cx="85" cy="80" r="3" fill="#7DD3FC" />
                <circle cx="62" cy="110" r="3" fill="#7DD3FC" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SUB-SECTION 4B: DESIGN PROJECTS ─── */}
      <section className="relative min-h-[90vh] py-20 flex items-center border-b border-ice-300/5 px-6 md:px-12">
        <div className="absolute top-[10%] right-[5%] bg-word opacity-[0.05] pointer-events-none select-none">
          DESIGN
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Device Hand Mockup (Left Edge, Mirrored) */}
          <div className="lg:col-span-6 relative flex justify-start items-center h-[400px] order-2 lg:order-1">
            <motion.div
              style={{ y: phoneY, rotate: phoneRotate }}
              className="relative w-full max-w-[340px] flex items-center justify-start"
            >
              {/* Minimalist Glowing SVG Hand Outline Gripping Phone */}
              <svg
                className="absolute left-[-20%] bottom-[-15%] w-[110%] h-[120%] z-20 pointer-events-none opacity-40 filter drop-shadow-[0_0_12px_rgba(125,211,252,0.3)]"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 180 C 40 145, 60 115, 85 95 C 93 88, 100 90, 103 98 C 106 106, 98 116, 90 120 L 75 128 C 70 130, 72 136, 78 136 L 110 136 C 118 136, 122 130, 120 123 L 112 95 C 110 86, 115 80, 122 84 L 135 92 C 142 98, 145 108, 140 120 L 120 160 C 115 170, 105 180, 95 180 Z"
                  stroke="#7DD3FC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                />
                <circle cx="103" cy="98" r="3" fill="#7DD3FC" />
                <circle cx="120" cy="123" r="3" fill="#7DD3FC" />
              </svg>

              {/* iPhone Bezel Frame */}
              <div className="relative z-10 w-[75%] aspect-[9/19] bg-black border-[6px] border-[#101625] rounded-[36px] overflow-hidden shadow-2xl shadow-ice-300/5">
                {/* Dynamic Screen contents - looping preview */}
                <div className="w-full h-full bg-[#050a14] relative">
                  <img
                    src={designProjectImg}
                    alt="Phone design mockup"
                    className="w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ice-500/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text and Horizontal Scroll Strip (Right) */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1 w-6 bg-ice-300 rounded-full" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-ice-400 uppercase">
                  UI/UX Design
                </span>
              </div>
              <BlurText
                text="Visual Stories Told in Pixels."
                delay={50}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl font-extrabold font-syne text-ice-100 leading-tight"
              />
            </div>
            
            <p className="text-ice-300 font-sans text-base max-w-md">
              Crafting premium user interfaces and digital experiences. Every layout, color choice, and font hierarchy is deliberately placed to guide the eye and elevate the brand.
            </p>

            {/* Horizontal thumbnail strip (Draggable/swipeable) */}
            <div className="relative">
              <div className="flex gap-4 overflow-x-auto no-scrollbar py-2 w-full snap-x snap-mandatory">
                {[
                  { title: "Neo System", tags: "Figma Kit", bg: "from-blue-950/40" },
                  { title: "Vibe App", tags: "iOS Design", bg: "from-sky-950/40" },
                  { title: "Agency Web", tags: "Visual Identity", bg: "from-cyan-950/40" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`h-scroll-card snap-start flex-shrink-0 w-44 glass-card p-4 rounded-xl border border-ice-300/10 flex flex-col justify-between aspect-[4/3] bg-gradient-to-br ${item.bg} to-transparent`}
                  >
                    <span className="text-[9px] font-mono uppercase tracking-widest text-ice-500">{item.tags}</span>
                    <h4 className="text-sm font-bold font-syne text-ice-200">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#work"
              className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-ice-300 hover:text-ice-100 transition-colors group clickable"
            >
              See all design work
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── SUB-SECTION 4C: VIDEOGRAPHY & DRONE ─── */}
      <section className="relative min-h-[95vh] py-24 flex flex-col justify-center border-b border-ice-300/5 px-6 md:px-12">
        <div className="absolute top-[8%] left-[5%] bg-word opacity-[0.05] pointer-events-none select-none">
          FILM & FLY
        </div>

        <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center space-y-12">
          
          {/* Header */}
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="h-1 w-6 bg-ice-300 rounded-full" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-ice-400 uppercase">
                AERIAL & CINEMA
              </span>
              <span className="h-1 w-6 bg-ice-300 rounded-full" />
            </div>
            <BlurText
              text="Capturing the World."
              delay={50}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl font-extrabold font-syne text-ice-100 leading-none"
            />
            <p className="text-ice-300 font-sans text-sm max-w-md mx-auto">
              Creating breathtaking visual narratives from ground level to high-altitude drone trajectories. Engineered with cinematic timing and immersive grading.
            </p>
          </div>

          {/* Centered Device Hand Mockup (Drone in hand) with 3D tilt effect */}
          <div 
            className="relative w-full max-w-[560px] aspect-video"
           
          >
            <motion.div
              style={{ 
                scale: droneScale,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full h-full flex items-center justify-center relative cursor-grab active:cursor-grabbing"
            >

              <div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ transform: "translateZ(60px) scale(1.1)" }}
              >
                <img 
                  src={droneMockupImg} 
                  alt="Drone in Hand Mockup" 
                  className="w-[85%] h-auto object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.75)] drop-shadow-[0_0_15px_rgba(125,211,252,0.25)]"
                />
              </div>
            </motion.div>
          </div>

          {/* Horizontal video reels strip */}
          <div className="w-full">
            <div className="flex gap-4 overflow-x-auto no-scrollbar py-2 w-full snap-x snap-mandatory">
              {[
                { title: "Alpine Flight", label: "0:45 Reel", asset: videoProjectImg },
                { title: "Coastal Drift", label: "1:20 Drone", asset: droneProjectImg },
                { title: "Metropolis Glow", label: "0:30 Cine", asset: videoProjectImg },
                { title: "Mountain Peak", label: "0:50 Reel", asset: droneProjectImg },
              ].map((reel, idx) => (
                <div
                  key={idx}
                  className="h-scroll-card snap-start flex-shrink-0 w-64 glass-card rounded-xl border border-ice-300/10 overflow-hidden aspect-[16/9] group/reel cursor-none clickable relative"
                >
                  <img
                    src={reel.asset}
                    alt={reel.title}
                    className="w-full h-full object-cover opacity-60 group-hover/reel:scale-105 group-hover/reel:opacity-80 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-[#050810]/40 flex flex-col justify-between p-4">
                    <span className="text-[8px] font-mono uppercase bg-ice-950/60 border border-ice-300/20 text-ice-300 px-2 py-0.5 rounded self-start">
                      {reel.label}
                    </span>
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-ice-100">{reel.title}</h4>
                      {/* Play Icon */}
                      <div className="h-6 w-6 rounded-full border border-ice-300/30 bg-ice-950/40 flex items-center justify-center transform group-hover/reel:scale-110 transition-transform duration-300">
                        <svg className="h-2.5 w-2.5 text-ice-300 ml-0.5 fill-ice-300" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
