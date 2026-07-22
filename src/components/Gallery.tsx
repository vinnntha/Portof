"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlurText from "./BlurText";

// Import images
import codingProjectImg from "../assets/coding_project.png";
import designProjectImg from "../assets/design_project.png";
import SiMagangkuImg from "../assets/SiMagangku.png";
import droneProjectImg from "../assets/drone_project.png";
import certificate1Img from "../assets/certificate1.png";
import certificate2Img from "../assets/certificate2.png";
import certificate3Img from "../assets/certificate3.png";
import certificate4Img from "../assets/certificate4.png";
import drone1Img from "../assets/drone1.png";
import drone2Img from "../assets/drone2.png";
import drone3Img from "../assets/drone3.png";
import design1Img from "../assets/design1.png";
import coding1Img from "../assets/coding1.png";

interface ProjectItem {
  id: number;
  title: string;
  category: "coding" | "design" | "certificate" | "video";
  categoryLabel: string;
  image: string;
  gridClass: string;
  tags: string[];
  description: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "PDAM",
    category: "coding",
    categoryLabel: "Coding",
    image: codingProjectImg,
    gridClass: "md:col-span-2 md:row-span-3",
    tags: ["React", "D3.js", "Tailwind"],
    description: "Website dengan sistem CRUD dasar yang di implementasikan untuk sistem pembayaran air(PDAM), project ini merupakan tugas harian dari sekolah yang dibangun dengan bahasa pemrograman react dan tailwindcss.",
  },
  {
    id: 2,
    title: "Minimal Design Guide",
    category: "design",
    categoryLabel: "Design",
    image: designProjectImg,
    gridClass: "md:col-span-1 md:row-span-1",
    tags: ["Figma", "Branding"],
    description: "",
  },
  {
    id: 3,
    title: "SiMagangku",
    category: "coding",
    categoryLabel: "Coding",
    image: SiMagangkuImg,
    gridClass: "md:col-span-2 md:row-span-2",
    tags: ["Next.js", "Framer Motion", "GSAP"],
    description: "Website dengan CRUD dasar dan sistem formulir bertahap yang diimplementasikan kedalam sistem mencari tempat magang untuk siswa SMK yang dikelola oleh hubin Sekolah. dan dibangun menggunakan bahasa pemrograman next.js dan tailwindcss.",
  },
  {
    id: 4,
    title: "KosMate",
    category: "design",
    categoryLabel: "Design",
    image: designProjectImg,
    gridClass: "md:col-span-1 md:row-span-1",
    tags: ["Illustrator", "Branding"],
    description: "Design UI/UX untuk aplikasi KosMate, aplikasi yang dibuat untuk anak membantu anak kos mengelola laundry, catering, dan pembayaran kos, yang disertai fitur pencatatan keuangan.",
  },
  {
    id: 5,
    title: "Cinematic SMK Telkom Malang",
    category: "video",
    categoryLabel: "Video",
    image: droneProjectImg,
    gridClass: "md:col-span-1 md:row-span-2",
    tags: ["DJI Mavic", "Color Grading"],
    description: "Sinematografi udara yang menjelajahi lanskap dramatis dan tekstur alam yang memukau dari ketinggian.",
  },
  {
    id: 6,
    title: "Certificate",
    category: "certificate",
    categoryLabel: "Certificate",
    image: certificate1Img,
    gridClass: "md:col-span-1 md:row-span-1",
    tags: ["python", "data analyst"],
    description: "Sertifikat yang didapat dari mengikuti pelatihan dan lulus ujian CCNA yang diselenggarakan oleh Cisco.",
  },
  {
    id: 7,
    title: "Certificate",
    category: "certificate",
    categoryLabel: "Certificate",
    image: certificate2Img,
    gridClass: "md:col-span-1 md:row-span-1",
    tags: ["python", "data analyst"],
    description: "Sertifikat yang didapat dari mengikuti pelatihan dan lulus ujian CCNA yang diselenggarakan oleh Cisco.",
  },
  {
    id: 8,
    title: "Certificate",
    category: "certificate",
    categoryLabel: "Certificate",
    image: certificate3Img,
    gridClass: "md:col-span-1 md:row-span-1",
    tags: ["python", "data analyst"],
    description: "Sertifikat yang didapat dari mengikuti pelatihan dan lulus ujian CCNA yang diselenggarakan oleh Cisco.",
  },
  {
    id: 9,
    title: "Certificate",
    category: "certificate",
    categoryLabel: "Certificate",
    image: certificate4Img,
    gridClass: "md:col-span-1 md:row-span-1",
    tags: ["python", "data analyst"],
    description: "Sertifikat yang didapat dari mengikuti pelatihan dan lulus ujian CCNA yang diselenggarakan oleh Cisco.",
  },
  {
    id: 10,
    title: "Cinematic Highlands Flyover",
    category: "video",
    categoryLabel: "Video",
    image: drone1Img,
    gridClass: "md:col-span-3 md:row-span-2",
    tags: ["DJI Mavic", "Color Grading", "Cinematic"],
    description: "Shoot disekitar kantor D.O.T Indonesia Malang, untuk keperluan tugas membuat vidio geografi sekitar kantor dalam rangkaian tugas Moklet Investigation.",
  },
  {
    id: 11,
    title: "GearUp",
    category: "video",
    categoryLabel: "Video",
    image: drone2Img,
    gridClass: "md:col-span-1 md:row-span-1",
    tags: ["DJI Mavic", "Color Grading", "Cinematic"],
    description: "Gear untuk dokumentasi kegiatan MokletInvestigation di D.O.T Indonesia Malang",
  },
  {
    id: 12,
    title: "GearUp",
    category: "video",
    categoryLabel: "Video",
    image: drone3Img,
    gridClass: "md:col-span-1 md:row-span-1",
    tags: ["DJI Mavic", "Color Grading", "Cinematic"],
    description: "Gear untuk dokumentasi trailer drama pada event Bulan Bahasa tahun 2025 yang diadakan SMK Telkom Malang",
  },
  {
    id: 13,
    title: "Design Poster",
    category: "design",
    categoryLabel: "Design",
    image: design1Img,
    gridClass: "md:col-span-1 md:row-span-2",
    tags: ["Figma", "Color Grading", "Iphone"],
    description: "Design Poster untuk lomba drama pada event Bulan Bahasa tahun 2025 yang diadakan oleh SMK Telkom Malang",
  },
  {
    id: 14,
    title: "UKL BackEnd",
    category: "coding",
    categoryLabel: "Coding",
    image: coding1Img,
    gridClass: "md:col-span-1 md:row-span-1",
    tags: ["VSCode", "PostMan", "Nest.js", "PostgreSQL"],
    description: "Implementasi BackEnd untuk website kuliah dengan sistem CRUD dasar, mengunakan nest.js dan postgresql",
  },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const filters = [
    { label: "All", id: "all" },
    { label: "Coding", id: "coding" },
    { label: "Design", id: "design" },
    { label: "Certificate", id: "certificate" },
    { label: "Video", id: "video" },
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
              <BlurText
                text="Creative Studio."
                delay={50}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl font-extrabold font-syne text-ice-100 tracking-tight leading-tight"
              />
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
