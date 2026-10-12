import React, { useState } from "react";
import cert1 from "../assets/certificate1.png";
import cert2 from "../assets/certificate2.png";
import cert3 from "../assets/certificate3.png";
import cert4 from "../assets/certificate4.png";

export const Experience: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const experiences = [
    {
      year: "2024 - Sekarang",
      role: "Freelance Creative Developer & Drone Pilot",
      place: "Remote & On-site",
      highlight: "PRODUKSI KONTEN & WEB INTERAKTIF",
      description:
        "Menangani pembuatan website landing page kustom untuk klien bisnis, digital branding, serta jasa aerial videography untuk dokumentasi proyek konstruksi dan pariwisata.",
      deliverables: ["Custom Web Apps", "FPV & 4K Drone Footage", "Brand Identity Guidelines"],
    },
    {
      year: "2023 - 2024",
      role: "UX/UI Designer & Frontend Specialist",
      place: "Proyek Kolaboratif & Magang",
      highlight: "PLATFORM SIMAGANGKU & WEB TOOLS",
      description:
        "Memimpin rancangan antarmuka pengguna aplikasi web SiMagangku, merancang alur pendaftaran siswa, dashboard interaktif, serta implementasi komponen frontend responsif.",
      deliverables: ["Figma Interactive Prototype", "Design System V1", "Frontend Codebase"],
    },
    {
      year: "2022 - 2023",
      role: "Siswa Rekayasa Perangkat Lunak (RPL)",
      place: "Pendidikan Vokasi",
      highlight: "FOUNDATION OF ENGINEERING & DESIGN",
      description:
        "Mendalami fondasi algoritma pemrograman, web development modern, desain grafis, database, dan pemeliharaan sistem perangkat lunak secara intensif.",
      deliverables: ["Fullstack Web Foundations", "Sertifikasi Kompetensi", "Lomba Web Design"],
    },
  ];

  const certificates = [
    { img: cert1, title: "Sertifikasi Kompetensi Web Development" },
    { img: cert2, title: "Sertifikasi UI/UX & Desain Grafis" },
    { img: cert3, title: "Lisensi & Pelatihan Pilot Drone" },
    { img: cert4, title: "Sertifikasi Frontend Engineering" },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Pill */}
      <div className="flex flex-col items-start mb-14">
        <div className="pill-badge bg-[#FFD6E0] border-2 border-[#14213D] mb-4">
          <span className="font-pixel text-[10px] text-[#3A86FF]">02 //</span>
          <span className="font-mono text-xs font-bold text-[#14213D]">SPILL PENGALAMAN</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#14213D] tracking-tight">
          Rekam Jejak & Pencapaian.
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#3A86FF] mt-2 font-bold tracking-wide">
          TIMELINE PERJALANAN KARYA DARI KELAS HINGGA KARYA NYATA
        </p>
      </div>

      {/* Retro Timeline Container */}
      <div className="relative border-l-[3px] border-[#14213D] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {experiences.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Pixel Dot Indicator */}
            <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#BDB2FF] border-[2.5px] border-[#14213D] shadow-[2px_2px_0px_#14213D] flex items-center justify-center group-hover:bg-[#3A86FF] transition-colors">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            {/* Experience Card */}
            <div className="retro-panel p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 bg-[#3A86FF] text-white border-2 border-[#14213D] rounded-full font-pixel text-[10px] shadow-[2px_2px_0px_#14213D]">
                  {item.year}
                </span>

                <span className="font-mono text-xs font-bold text-[#14213D]/70 bg-[#FFF4F4] px-3 py-1 rounded-lg border border-[#14213D]">
                  📍 {item.place}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#14213D]">
                {item.role}
              </h3>

              <div className="my-2">
                <span className="font-pixel text-[9px] text-[#3A86FF] tracking-wider">
                  ★ {item.highlight}
                </span>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Deliverables tags */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t-2 border-[#14213D]/10">
                <span className="font-mono text-xs font-bold text-[#14213D]">Output:</span>
                {item.deliverables.map((d, dIdx) => (
                  <span
                    key={dIdx}
                    className="font-mono text-xs px-2.5 py-1 bg-[#BDB2FF]/20 border border-[#14213D] rounded-full text-[#14213D] font-bold"
                  >
                    ✓ {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certification Strip Box */}
      <div className="mt-16 retro-panel-pink p-8 sm:p-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="font-pixel text-[10px] text-[#3A86FF]">VERIFIED CREDENTIALS</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#14213D] mt-1">
              Sertifikasi & Lisensi Resmi.
            </h3>
          </div>
          <span className="font-mono text-xs font-bold text-[#14213D] bg-white px-3 py-1.5 rounded-full border border-[#14213D]">
            Klik gambar untuk zoom lightbox
          </span>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {certificates.map((cert, cIdx) => (
            <div
              key={cIdx}
              onClick={() => setSelectedCert(cert.img)}
              className="bg-white border-2 border-[#14213D] rounded-2xl p-2.5 shadow-[4px_4px_0px_#14213D] hover:-translate-y-1.5 transition-all cursor-pointer group"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[#14213D] mb-2 bg-[#FFF4F4]">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
              <p className="font-sans text-xs font-bold text-[#14213D] line-clamp-1">
                {cert.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Lightbox */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 bg-[#14213D]/70 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-200"
        >
          <div className="relative max-w-3xl w-full bg-white border-[3px] border-[#14213D] rounded-3xl p-4 shadow-[8px_8px_0px_#14213D]">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-[#FFD6E0] border-2 border-[#14213D] font-pixel text-xs text-[#14213D] flex items-center justify-center shadow-[2px_2px_0px_#14213D] hover:bg-[#3A86FF] hover:text-white"
            >
              ✕
            </button>
            <img
              src={selectedCert}
              alt="Sertifikat Zoom"
              className="w-full h-auto rounded-xl border border-[#14213D]"
            />
          </div>
        </div>
      )}
    </section>
  );
};
