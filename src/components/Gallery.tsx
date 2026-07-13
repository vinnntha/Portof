"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectItem {
  id: number;
  title: string;
  category: "coding" | "design" | "video" | "drone";
  categoryLabel: string;
  image: string;
  gridClass: string;
  tags: string[];
  description: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Neural Network Visualizer",
    category: "coding",
    categoryLabel: "Coding",
    image: "src/assets/coding_project.png",
    gridClass: "md:col-span-2 md:row-span-2",
    tags: ["React", "D3.js", "Tailwind"],
    description: "Alat visualisasi data interaktif yang memetakan arsitektur jaringan saraf kompleks secara real-time.",
  },
  {
    id: 2,
    title: "Minimal Design Guide",
    category: "design",
    categoryLabel: "Design",
    image: "src/assets/design_project.png",
    gridClass: "md:col-span-1 md:row-span-1",
    tags: ["Figma", "Branding"],
    description: "Panduan UI/UX komprehensif yang berfokus pada ruang kosong, tipografi, dan prinsip desain minimalis.",
  },
  {
    id: 3,
    title: "NextGen Dashboard System",
    category: "coding",
    categoryLabel: "Coding",
    image: "src/assets/coding_project.png",
    gridClass: "md:col-span-2 md:row-span-1",
    tags: ["Next.js", "Framer Motion", "GSAP"],
    description: "Antarmuka dasbor modern dengan animasi yang halus dan bagan responsif untuk analitik data berskala besar.",
  },
  {
    id: 4,
    title: "Branding & Typography Kit",
    category: "design",
    categoryLabel: "Design",
    image: "src/assets/design_project.png",
    gridClass: "md:col-span-1 md:row-span-1",
    tags: ["Illustrator", "Branding"],
    description: "Identitas merek kohesif dan sistem tipografi kustom yang dirancang untuk agensi kreatif butik.",
  },
  {
    id: 5,
    title: "Cinematic Highlands Flyover",
    category: "drone",
    categoryLabel: "Drone",
    image: "src/assets/drone_project.png",
    gridClass: "md:col-span-1 md:row-span-2",
    tags: ["DJI Mavic", "Color Grading"],
    description: "Sinematografi udara yang menjelajahi lanskap dramatis dan tekstur alam yang memukau dari ketinggian.",
  },
  {
    id: 6,
    title: "Vanguard Studio Reel 2026",
    category: "video",
    categoryLabel: "Video",
    image: "src/assets/video_project.png",
    gridClass: "md:col-span-3 md:row-span-1",
    tags: ["Premiere", "After Effects", "Film"],
    description: "Kompilasi energi tinggi yang menampilkan pengeditan dinamis, grafis gerak, dan efek visual kelas atas.",
  },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const filters = [
    { label: "All", id: "all" },
    { label: "Coding", id: "coding" },
    { label: "Design", id: "design" },
    { label: "Video", id: "video" },
    { label: "Drone", id: "drone" },
  ];

  const filteredProjects = projectsData.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section
      id="work"
      className="relative py-28 bg-[#050810]/95 overflow-hidden px-6 md:px-12"
    >
      {/* Background Watermark */}
      <div className="absolute top-[5%] left-[5%] bg-word opacity-[0.05] pointer-events-none select-none">
        GALLERY
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1 w-6 bg-ice-300 rounded-full" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-ice-400 uppercase">
                Selected Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-syne text-ice-100 tracking-tight leading-none">
              Creative Studio.
            </h2>
          </div>

          {/* Morphing Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-[#0c1223]/40 p-1.5 rounded-full border border-ice-300/10 backdrop-blur-sm self-start">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative px-5 py-2 text-xs font-mono tracking-wider transition-colors duration-300 rounded-full cursor-none clickable ${
                    isActive ? "text-[#050810]" : "text-ice-400 hover:text-ice-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-ice-300 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px] md:auto-rows-[250px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.05,
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                className={`project-card view-trigger relative rounded-2xl overflow-hidden glass-card group border border-ice-300/10 ${project.gridClass}`}
              >
                {/* Image Wrap */}
                <div className="w-full h-full relative overflow-hidden bg-ice-950/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-[0.8] contrast-110 transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-95"
                  />
                  {/* Subtle vignette glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/90 via-[#050810]/40 to-[#050810]/10 opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Info Overlay (Visible on hover and stacked on mobile) */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 pointer-events-none">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      <span className="px-2 py-0.5 bg-ice-300/10 text-ice-300 border border-ice-300/20 text-[9px] font-mono rounded-full uppercase tracking-wider">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold font-syne text-ice-100 tracking-wide mb-1 transition-colors group-hover:text-ice-300">
                      {project.title}
                    </h3>

                    {/* Tags row */}
                    <div className="flex gap-2 text-[10px] text-ice-400 font-mono">
                      {project.tags.join(" · ")}
                    </div>
                    
                    {/* Description Reveal on Hover */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                      <p className="overflow-hidden text-xs text-ice-200/80 font-sans leading-relaxed">
                        <span className="block pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {project.description}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating "View" indicator arrow top-right */}
                <div className="absolute top-6 right-6 p-2 rounded-full border border-ice-300/10 bg-ice-950/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 pointer-events-none">
                  <svg
                    className="h-3.5 w-3.5 text-ice-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
