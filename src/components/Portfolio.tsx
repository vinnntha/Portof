import React, { useState } from "react";
import coding1 from "../assets/coding1.png";
import codingProject from "../assets/coding_project.png";
import design1 from "../assets/design1.png";
import designProject from "../assets/design_project.png";
import drone1 from "../assets/drone1.png";
import droneMockup from "../assets/drone_mockup.png";
import droneProject from "../assets/drone_project.png";
import siMagangku from "../assets/SiMagangku.png";
import vidio1 from "../assets/vidio1.png";

interface ProjectItem {
  id: string;
  title: string;
  category: "all" | "uiux" | "dev" | "video" | "drone";
  categoryLabel: string;
  image: string;
  year: string;
  client: string;
  desc: string;
  stack: string[];
  link?: string;
  stats?: string;
}

export const Portfolio: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [carouselIndex, setCarouselIndex] = useState(1);
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: "simagangku",
      title: "SiMagangku - Platform Magang Siswa",
      category: "uiux",
      categoryLabel: "UI/UX & Web Platform",
      image: siMagangku,
      year: "2024",
      client: "Institusi Pendidikan",
      desc: "Perancangan UI/UX komprehensif untuk platform digital manajemen magang siswa SMK. Mengoptimalkan alur verifikasi berkas, monitoring jurnal harian, dan feedback guru pembimbing.",
      stack: ["Figma", "Design System", "User Research", "Tailwind CSS"],
      link: "https://www.kevporto.my.id/",
      stats: "500+ Pengguna Aktif",
    },
    {
      id: "creative-code",
      title: "Interactive Web Experience & 3D Canvas",
      category: "dev",
      categoryLabel: "Creative Dev & Three.js",
      image: codingProject,
      year: "2024",
      client: "Eksplorasi Pribadi & Lab",
      desc: "Implementasi rendering grafis interaktif dengan Three.js, animasi fisika web, particle dynamic canvas, dan performa tinggi tanpa lag di browser desktop maupun mobile.",
      stack: ["React", "Three.js", "TypeScript", "Tailwind CSS"],
      link: "#",
      stats: "60 FPS Render Smooth",
    },
    {
      id: "drone-cinematic",
      title: "Aerial Cinematography - Visual Wonder",
      category: "drone",
      categoryLabel: "Drone Aerial 4K",
      image: droneMockup,
      year: "2024",
      client: "Travel & Commercial",
      desc: "Pengambilan sudut pandang udara spektakuler menggunakan DJI Mini & FPV. Navigasi presisi di ruang terbuka, dynamic speed curve, dan grading warna sinematik beresolusi 4K.",
      stack: ["DJI Fly", "DaVinci Resolve", "Color Grading", "4K 60FPS"],
      link: "#",
      stats: "4K D-Cinelike Output",
    },
    {
      id: "editorial-design",
      title: "Brand Identity & Editorial UI Posters",
      category: "uiux",
      categoryLabel: "UI Design & Branding",
      image: designProject,
      year: "2023",
      client: "Creative Studio",
      desc: "Eksplorasi layout editorial majalah bergaya Swiss Typography modern dipadukan dengan modul retro-pixel untuk materi pameran dan presentasi portofolio.",
      stack: ["Figma", "Adobe Illustrator", "Typography System"],
      link: "#",
      stats: "High Fidelity Vector",
    },
    {
      id: "motion-video",
      title: "Dynamic Reel & Commercial Video Cut",
      category: "video",
      categoryLabel: "Videography & Motion",
      image: vidio1,
      year: "2024",
      client: "Brand Campaign",
      desc: "Pembuatan video teaser beritme cepat dengan sinkronisasi sound beat, dynamic masking transition, dan treatment visual retro modern.",
      stack: ["Premiere Pro", "DaVinci Resolve", "Sound Design"],
      link: "#",
      stats: "Format 9:16 & 16:9",
    },
    {
      id: "aerial-survey",
      title: "Aerial Landscape & Site Survey",
      category: "drone",
      categoryLabel: "Drone Aerial",
      image: drone1,
      year: "2023",
      client: "Dokumentasi Wilayah",
      desc: "Dokumentasi visual udara bentang alam dan infrastruktur dengan framing konsisten, grid mapping, dan sudut tinggi komprehensif.",
      stack: ["Drone Piloting", "Aerial Framing", "Lightroom"],
      link: "#",
      stats: "High Altitude Flight",
    },
    {
      id: "app-codebase",
      title: "Modern Single Page Dashboard",
      category: "dev",
      categoryLabel: "Frontend Engineering",
      image: coding1,
      year: "2024",
      client: "Client Solution",
      desc: "Pengembangan front-end arsitektur modular dengan optimasi Lighthouse Score di atas 95, semantic tags, dan micro-interaction yang responsif.",
      stack: ["Vite", "React", "TypeScript", "Tailwind CSS"],
      link: "#",
      stats: "99+ Lighthouse Score",
    },
  ];

  // Filtered list for Mosaic grid
  const filteredList =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  // Carousel navigation
  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % projects.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Pill & Title */}
      <div className="flex flex-col items-start mb-14">
        <div className="pill-badge bg-[#BDB2FF]/20 border-2 border-[#14213D] mb-4">
          <span className="font-pixel text-[10px] text-[#3A86FF]">04 //</span>
          <span className="font-mono text-xs font-bold text-[#14213D]">SELECTED WORKS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#14213D] tracking-tight">
              Portofolio Karya.
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#3A86FF] mt-2 font-bold tracking-wide">
              EKSPLORASI DIGITAL, KODE KREATIF, DAN AERIAL CINEMA
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "Semua Karya" },
              { id: "uiux", label: "UI/UX & Web" },
              { id: "dev", label: "Creative Dev" },
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
      {/* FEATURE 1: 3D-TILTED CAROUSEL SLIDER (Referensi A)       */}
      {/* ======================================================== */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#3A86FF]"></span>
            <span className="font-mono text-xs font-bold text-[#14213D] uppercase tracking-wider">
              Featured Showcase Carousel
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
                      <span className="absolute top-2 left-2 px-2.5 py-1 bg-[#FFD6E0] border border-[#14213D] rounded-full font-pixel text-[8px] text-[#14213D]">
                        {item.year}
                      </span>
                      {item.stats && (
                        <span className="absolute bottom-2 right-2 px-2.5 py-1 bg-white/90 backdrop-blur-sm border border-[#14213D] rounded-full font-mono text-[10px] font-bold text-[#3A86FF]">
                          {item.stats}
                        </span>
                      )}
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
      {/* FEATURE 2: EDITORIAL MOSAIC GRID (Referensi B)          */}
      {/* Baris atas 3 poster portrait, baris bawah banner lebar + kartu */}
      {/* ======================================================== */}
      <div className="mt-12">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-3 h-3 rounded-full bg-[#BDB2FF]"></span>
          <span className="font-mono text-xs font-bold text-[#14213D] uppercase tracking-wider">
            Mosaic Editorial Archive
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top row posters */}
          {filteredList.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveModalProject(item)}
              className="bg-white border-[2.5px] border-[#14213D] rounded-4xl p-5 shadow-[5px_5px_0px_#14213D] hover:shadow-[8px_8px_0px_#14213D] hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#14213D] mb-4 relative bg-[#FFF4F4]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-white border border-[#14213D] rounded-full font-mono text-[10px] font-bold">
                  {item.categoryLabel}
                </div>
              </div>
              <h3 className="font-serif text-xl font-black text-[#14213D] line-clamp-1">
                {item.title}
              </h3>
              <p className="font-sans text-xs text-[#14213D]/70 mt-1 line-clamp-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom row: 1 Wide Banner + 1 Card */}
        {filteredList.length > 3 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Wide Banner (col-span-2) */}
            <div
              onClick={() => setActiveModalProject(filteredList[3])}
              className="lg:col-span-2 retro-panel-lavender p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center cursor-pointer group"
            >
              <div className="w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden border-2 border-[#14213D] bg-white">
                <img
                  src={filteredList[3].image}
                  alt={filteredList[3].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <span className="font-pixel text-[9px] px-2.5 py-1 bg-white border border-[#14213D] rounded-full text-[#14213D]">
                    FEATURED BANNER
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#14213D] mt-3 mb-2">
                    {filteredList[3].title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#14213D]/85 leading-relaxed mb-4">
                    {filteredList[3].desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {filteredList[3].stack.map((st, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs px-2 py-0.5 bg-white border border-[#14213D] rounded-md font-bold"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional 1 Card */}
            {filteredList[4] && (
              <div
                onClick={() => setActiveModalProject(filteredList[4])}
                className="retro-panel-pink p-6 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="aspect-video rounded-2xl overflow-hidden border-2 border-[#14213D] mb-4 bg-white">
                    <img
                      src={filteredList[4].image}
                      alt={filteredList[4].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-black text-[#14213D] mb-2">
                    {filteredList[4].title}
                  </h3>
                  <p className="font-sans text-xs text-[#14213D]/80 leading-relaxed mb-4 line-clamp-3">
                    {filteredList[4].desc}
                  </p>
                </div>
                <span className="font-pixel text-[9px] text-[#3A86FF] self-start px-3 py-1 bg-white border border-[#14213D] rounded-full shadow-[2px_2px_0px_#14213D]">
                  DETAIL KARYA ↗
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* LIGHTBOX / PROJECT DETAIL MODAL                         */}
      {/* ======================================================== */}
      {activeModalProject && (
        <div
          onClick={() => setActiveModalProject(null)}
          className="fixed inset-0 z-50 bg-[#14213D]/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-white border-[3px] border-[#14213D] rounded-4xl p-6 sm:p-8 shadow-[8px_8px_0px_#14213D] max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FFD6E0] border-2 border-[#14213D] font-pixel text-xs text-[#14213D] flex items-center justify-center shadow-[2px_2px_0px_#14213D] hover:bg-[#3A86FF] hover:text-white"
            >
              ✕
            </button>

            {/* Modal Image */}
            <div className="aspect-video w-full rounded-2xl overflow-hidden border-2 border-[#14213D] mb-6 bg-[#FFF4F4]">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Category & Year */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-[#3A86FF] text-white border border-[#14213D] rounded-full font-mono text-xs font-bold">
                {activeModalProject.categoryLabel}
              </span>
              <span className="px-3 py-1 bg-[#FFD6E0] border border-[#14213D] rounded-full font-mono text-xs font-bold text-[#14213D]">
                Tahun: {activeModalProject.year}
              </span>
              <span className="px-3 py-1 bg-[#BDB2FF]/30 border border-[#14213D] rounded-full font-mono text-xs font-bold text-[#14213D]">
                Klien: {activeModalProject.client}
              </span>
            </div>

            {/* Title & Full Desc */}
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#14213D] mb-3">
              {activeModalProject.title}
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
              {activeModalProject.desc}
            </p>

            {/* Tech Stack */}
            <div className="mb-6 pt-4 border-t-2 border-[#14213D]/10">
              <h4 className="font-mono text-xs font-bold text-[#14213D] mb-2 uppercase">
                Tools & Teknologi:
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

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-[#14213D]/10">
              <a
                href="#contact"
                onClick={() => setActiveModalProject(null)}
                className="retro-btn bg-[#3A86FF] text-white text-xs sm:text-sm"
              >
                Diskusikan Proyek Serupa
              </a>
              <button
                onClick={() => setActiveModalProject(null)}
                className="retro-btn retro-btn-secondary text-xs sm:text-sm"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
