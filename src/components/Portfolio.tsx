import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import codingProject from "../assets/coding_project.png";
import siMagangku from "../assets/SiMagangku.png";
import coding1 from "../assets/coding1.png";
import coding2 from "../assets/coding2.png";
import coding3 from "../assets/coding3.png";
import designProject from "../assets/design_project.png";
import design1 from "../assets/design1.png";
import droneProject from "../assets/drone_project.png";
import droneMockup from "../assets/drone_mockup.png";
import drone1 from "../assets/drone1.png";
import drone2 from "../assets/drone2.png";
import drone3 from "../assets/drone3.png";
import drone4 from "../assets/drone4.png";
import vidio1 from "../assets/vidio1.png";

interface ProjectItem {
  id: string;
  title: string;
  category: "all" | "coding" | "design" | "drone" | "video";
  categoryLabel: string;
  image: string;
  year: string;
  client: string;
  desc: string;
  stack: string[];
  role: string;
  isFeaturedCoding?: boolean;
}

export const Portfolio: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    // --- 1. CODING SPOTLIGHTS (FEATURED) ---
    {
      id: "simagangku",
      title: "SiMagangku - Student Internship Platform",
      category: "coding",
      categoryLabel: "Fullstack / Frontend Web",
      image: siMagangku,
      year: "2024",
      client: "SMK Telkom Malang Industrial Relations",
      role: "Frontend Developer & UI/UX",
      desc: "Full CRUD web platform featuring stepped forms for vocational student internship applications and placement search managed by the school's Industrial Relations division. Built with Next.js and Tailwind CSS.",
      stack: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP", "Figma"],
      isFeaturedCoding: true,
    },
    {
      id: "trashly",
      title: "Trashly - Waste Recycling & Reward Platform",
      category: "coding",
      categoryLabel: "Fullstack Web Application",
      image: coding2,
      year: "2024",
      client: "12th Grade Capstone Project",
      role: "Fullstack Developer",
      desc: "Integrated waste management platform where recycled materials can be redeemed for reward points. Implemented 2-role user authentication, points transaction systems, and complex CRUD workflows using Nest.js and PostgreSQL.",
      stack: ["Node.js", "Nest.js", "PostgreSQL", "Tailwind CSS", "Postman", "Figma"],
      isFeaturedCoding: true,
    },
    {
      id: "pdam",
      title: "PDAM Water Utility Billing System",
      category: "coding",
      categoryLabel: "Frontend CRUD Application",
      image: codingProject,
      year: "2023",
      client: "Software Engineering Project",
      role: "Frontend Developer",
      desc: "Interactive web application for customer record management (CRUD) and real-time municipal water bill calculations. Developed using React and Tailwind CSS with integrated data visualizations.",
      stack: ["React", "D3.js", "Tailwind CSS", "Vite", "JavaScript"],
      isFeaturedCoding: true,
    },
    {
      id: "skillloom",
      title: "SkillLoom - SME & Student Matchmaking Platform",
      category: "coding",
      categoryLabel: "Frontend Web Platform",
      image: coding3,
      year: "2024",
      client: "Collaborative Portfolio Project",
      role: "Frontend Developer",
      desc: "Real-world project matchmaking platform connecting local SMEs in need of digital solutions with vocational students looking to build their industry portfolio.",
      stack: ["Nest.js", "Tailwind CSS", "Postman", "VS Code", "Figma"],
      isFeaturedCoding: true,
    },
    {
      id: "ukl-backend",
      title: "UKL BackEnd Architecture & REST API",
      category: "coding",
      categoryLabel: "Backend REST API",
      image: coding1,
      year: "2024",
      client: "Vocational Competency Assessment",
      role: "Backend Engineer",
      desc: "Modular backend architecture implementation for an academic university platform featuring PostgreSQL relational database management, robust authentication, and Postman-tested REST APIs.",
      stack: ["Nest.js", "PostgreSQL", "Postman", "Node.js", "TypeScript"],
      isFeaturedCoding: true,
    },

    // --- 2. MULTI-DISCIPLINE: DESIGN, DRONE, VIDEO ---
    {
      id: "kosmate",
      title: "KosMate UI/UX Mobile Experience",
      category: "design",
      categoryLabel: "UI/UX & Product Design",
      image: designProject,
      year: "2023",
      client: "Product Prototype",
      role: "Product Designer",
      desc: "Comprehensive UI/UX design for KosMate: helping boarding house residents manage laundry services, daily catering, monthly rental bills, and personal expense tracking.",
      stack: ["Figma", "Design System", "User Flow", "Illustrator"],
    },
    {
      id: "dies-natalis-video",
      title: "Dies Natalis 34 SMK Telkom (Vierratale)",
      category: "video",
      categoryLabel: "Videography & Event Cinema",
      image: vidio1,
      year: "2024",
      client: "SMK Telkom Malang",
      role: "Videographer & Video Editor",
      desc: "Cinematic visual documentation for SMK Telkom Malang's 34th Anniversary concert featuring guest star Vierratale. Dynamic stage camera angles captured using Sony A6400 and gimbal stabilizer.",
      stack: ["Sony A6400", "DJI RS 4 Mini", "DaVinci Resolve", "Premiere Pro"],
    },
    {
      id: "dies-natalis-drone",
      title: "Aerial Crowd Drone Flyover - Vierratale",
      category: "drone",
      categoryLabel: "Aerial Drone Cinematography",
      image: drone4,
      year: "2024",
      client: "SMK Telkom Malang",
      role: "Drone Pilot",
      desc: "Drone flight above the concert audience to capture spectacular aerial viewpoints of guest star Vierratale's performance under strict flight safety regulations.",
      stack: ["DJI Mini", "4K 60FPS", "D-Cinelike", "Crowd Safety"],
    },
    {
      id: "dot-indonesia-drone",
      title: "Geographical Landscape - D.O.T Indonesia Malang",
      category: "drone",
      categoryLabel: "Aerial Landscape & Site Survey",
      image: drone1,
      year: "2023",
      client: "Moklet Investigation",
      role: "Drone Pilot & Cinematographer",
      desc: "Aerial footage surrounding the D.O.T Indonesia Malang office for an industrial creative tech hub geographic survey.",
      stack: ["DJI Mavic", "Color Grading", "Aerial Mapping"],
    },
    {
      id: "gear-dokumentasi",
      title: "Production Gear & Rigging Documentation",
      category: "video",
      categoryLabel: "Production & Rigging",
      image: drone2,
      year: "2023",
      client: "D.O.T Indonesia & Event",
      role: "Technical Crew",
      desc: "Technical staging and calibration of cameras, gimbals, drones, and wireless audio monitors for on-site documentary production.",
      stack: ["Camera Rig", "Gimbal Calibration", "Audio Monitor"],
    },
    {
      id: "poster-bulan-bahasa",
      title: "Language Month Theater Competition Poster",
      category: "design",
      categoryLabel: "Graphic Design & Branding",
      image: design1,
      year: "2025",
      client: "SMK Telkom Malang",
      role: "Graphic Designer",
      desc: "Editorial drama competition poster designed for the Language Month festival, blending theatrical typography with high-contrast color harmony.",
      stack: ["Figma", "Typography", "Color Harmony"],
    },
    {
      id: "cinematic-highlands",
      title: "Cinematic Highlands & Drone Mockup",
      category: "drone",
      categoryLabel: "Aerial Cinematography",
      image: droneMockup,
      year: "2024",
      client: "Creative Showcase",
      role: "Drone Pilot & Editor",
      desc: "High-elevation drone flight exploration capturing dynamic sky gradients and aerial nature contour textures.",
      stack: ["DJI Fly", "DaVinci Resolve", "Color Grading"],
    },
  ];

  // Filtered projects
  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  // Carousel controls
  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % projects.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Pill & Title */}
      <div className="flex flex-col items-start mb-14">
        <div className="pill-badge bg-[#BDB2FF]/20 border-2 border-[#14213D] mb-4">
          <span className="font-pixel text-[10px] text-[#3A86FF]">04 //</span>
          <span className="font-mono text-xs font-bold text-[#14213D]">SELECTED WORKS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#14213D] tracking-tight">
              Featured Works & Projects.
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#3A86FF] mt-2 font-bold tracking-wide">
              HIGHLIGHTED: FULLSTACK & INTERACTIVE WEB CODING, ENRICHED WITH DRONE, VIDEO & UI/UX
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Works" },
              { id: "coding", label: "Coding & Dev (Featured)" },
              { id: "design", label: "UI/UX Design" },
              { id: "drone", label: "Drone Aerial" },
              { id: "video", label: "Videography" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold border-2 border-[#14213D] transition-all cursor-pointer ${
                  selectedFilter === f.id
                    ? "bg-[#3A86FF] text-white shadow-[3px_3px_0px_#14213D] -translate-y-0.5"
                    : "bg-white text-[#14213D] hover:bg-[#FFD6E0]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3D-TILTED CAROUSEL SLIDER (REFERENSI A)                  */}
      {/* ======================================================== */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#3A86FF]"></span>
            <span className="font-mono text-xs font-bold text-[#14213D] uppercase tracking-wider">
              3D Showcase Carousel // Click for Full Details
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevCarousel}
              className="w-10 h-10 rounded-full bg-white border-2 border-[#14213D] shadow-[2px_2px_0px_#14213D] flex items-center justify-center font-pixel text-xs hover:bg-[#FFD6E0] active:translate-y-0.5 transition-all"
              aria-label="Previous Project"
            >
              ←
            </button>
            <button
              onClick={nextCarousel}
              className="w-10 h-10 rounded-full bg-white border-2 border-[#14213D] shadow-[2px_2px_0px_#14213D] flex items-center justify-center font-pixel text-xs hover:bg-[#3A86FF] hover:text-white active:translate-y-0.5 transition-all"
              aria-label="Next Project"
            >
              →
            </button>
          </div>
        </div>

        {/* 3-Card Angled Carousel View */}
        <div className="relative overflow-hidden py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {[-1, 0, 1].map((offset) => {
              const itemIdx =
                (carouselIndex + offset + projects.length) % projects.length;
              const item = projects[itemIdx];
              const isCenter = offset === 0;

              return (
                <div
                  key={offset}
                  onClick={() => setActiveModalProject(item)}
                  className={`cursor-pointer transition-all duration-500 ease-out ${
                    isCenter
                      ? "md:scale-105 z-20"
                      : "opacity-75 hover:opacity-100 hidden md:block"
                  }`}
                  style={{
                    transform: isCenter
                      ? "scale(1.04) rotate(0deg)"
                      : offset === -1
                      ? "rotate(-3deg) scale(0.95)"
                      : "rotate(3deg) scale(0.95)",
                  }}
                >
                  <div
                    className={`bg-white border-[3px] border-[#14213D] rounded-4xl p-5 shadow-[6px_6px_0px_#14213D] hover:shadow-[10px_10px_0px_#14213D] transition-all group`}
                  >
                    {/* Image Mockup Window */}
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden border-2 border-[#14213D] bg-[#FFF4F4] relative mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {item.isFeaturedCoding && (
                        <span className="absolute top-2 left-2 px-2.5 py-1 bg-[#3A86FF] text-white border border-[#14213D] rounded-full font-pixel text-[8px]">
                          ★ FEATURED CODING
                        </span>
                      )}
                      <span className="absolute bottom-2 right-2 px-2.5 py-1 bg-white/95 border border-[#14213D] rounded-full font-mono text-[10px] font-bold text-[#14213D]">
                        {item.year}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-[#3A86FF]">
                        {item.categoryLabel}
                      </span>
                      <span className="font-pixel text-[9px] text-[#14213D] px-2 py-0.5 bg-[#BDB2FF]/20 rounded-md border border-[#14213D]">
                        VIEW ↗
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-black text-[#14213D] line-clamp-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-[#14213D]/75 line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* EDITORIAL MOSAIC GRID ARCHIVE                           */}
      {/* ======================================================== */}
      <div className="mt-12">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-3 h-3 rounded-full bg-[#BDB2FF]"></span>
          <span className="font-mono text-xs font-bold text-[#14213D] uppercase tracking-wider">
            All Projects ({filteredProjects.length} Works)
          </span>
        </div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item, idx) => (
            <motion.div
              key={item.id}
              onClick={() => setActiveModalProject(item)}
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
              className={`border-[2.5px] border-[#14213D] rounded-4xl p-5 shadow-[5px_5px_0px_#14213D] hover:shadow-[9px_9px_0px_#14213D] hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between ${
                item.isFeaturedCoding ? "bg-white" : "bg-[#FFF4F4]"
              }`}
            >
              <div>
                {/* Image */}
                <div className="aspect-[16/10] rounded-2xl overflow-hidden border-2 border-[#14213D] mb-4 relative bg-[#FFF4F4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-white border border-[#14213D] rounded-full font-mono text-[10px] font-bold text-[#14213D]">
                    {item.categoryLabel}
                  </div>
                  {item.isFeaturedCoding && (
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-[#3A86FF] text-white border border-[#14213D] rounded-md font-pixel text-[8px]">
                      DEV
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mb-1 text-xs font-mono font-bold text-[#14213D]/60">
                  <span>{item.client}</span>
                  <span>{item.year}</span>
                </div>

                <h3 className="font-serif text-xl font-black text-[#14213D] line-clamp-1 mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-[#14213D]/75 line-clamp-2 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              {/* Stack tags */}
              <div className="pt-3 border-t border-[#14213D]/10 flex flex-wrap gap-1.5">
                {item.stack.slice(0, 3).map((st, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] px-2 py-0.5 bg-white border border-[#14213D] rounded-md font-bold text-[#14213D]"
                  >
                    #{st}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* LIGHTBOX / PROJECT DETAIL MODAL                         */}
      {/* ======================================================== */}
      {activeModalProject &&
        createPortal(
          <div
            onClick={() => setActiveModalProject(null)}
            className="fixed inset-0 z-50 bg-[#14213D]/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-white border-[3px] border-[#14213D] rounded-4xl p-6 sm:p-8 shadow-[8px_8px_0px_#14213D] max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FFD6E0] border-2 border-[#14213D] font-pixel text-xs text-[#14213D] flex items-center justify-center shadow-[2px_2px_0px_#14213D] hover:bg-[#3A86FF] hover:text-white"
              >
                ✕
              </button>

              <div className="aspect-video w-full rounded-2xl overflow-hidden border-2 border-[#14213D] mb-6 bg-[#FFF4F4]">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-[#3A86FF] text-white border border-[#14213D] rounded-full font-mono text-xs font-bold">
                  {activeModalProject.categoryLabel}
                </span>
                <span className="px-3 py-1 bg-[#FFD6E0] border border-[#14213D] rounded-full font-mono text-xs font-bold text-[#14213D]">
                  Year: {activeModalProject.year}
                </span>
                <span className="px-3 py-1 bg-[#BDB2FF]/30 border border-[#14213D] rounded-full font-mono text-xs font-bold text-[#14213D]">
                  Role: {activeModalProject.role}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#14213D] mb-3">
                {activeModalProject.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
                {activeModalProject.desc}
              </p>

              <div className="mb-6 pt-4 border-t-2 border-[#14213D]/10">
                <h4 className="font-mono text-xs font-bold text-[#14213D] mb-2 uppercase">
                  Technologies & Tools:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.stack.map((s, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs px-2.5 py-1 bg-[#FFF4F4] border border-[#14213D] rounded-lg font-bold text-[#3A86FF]"
                    >
                      #{s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-[#14213D]/10">
                <a
                  href="#contact"
                  onClick={() => setActiveModalProject(null)}
                  className="retro-btn bg-[#3A86FF] text-white text-xs sm:text-sm"
                >
                  Discuss a Similar Project
                </a>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="retro-btn retro-btn-secondary text-xs sm:text-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};
