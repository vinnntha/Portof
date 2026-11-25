import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import cert1 from "../assets/certificate1.png";
import cert2 from "../assets/certificate2.png";
import cert3 from "../assets/certificate3.png";
import cert4 from "../assets/certificate4.png";
import cert5 from "../assets/certificate5.png";
import cert6 from "../assets/certificate6.png";
import cert7 from "../assets/certificate7.png";
import cert8 from "../assets/certifikate8.png";
import cert9 from "../assets/certificate9.png";

interface CertificateItem {
  id: number;
  title: string;
  issuer: string;
  image: string;
  year: string;
  tags: string[];
  description: string;
}

export const Experience: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [showAllCertsMobile, setShowAllCertsMobile] = useState(false);

  const certificatesList: CertificateItem[] = [
    {
      id: 1,
      title: "CCNA - Introduction to Networks & Python",
      issuer: "Cisco Networking Academy",
      image: cert1,
      year: "2026",
      tags: ["Cisco", "Python", "Data Analyst", "Networking"],
      description: "Official Cisco CCNA course completion certificate covering network architecture, fundamental routing, and Python data processing.",
    },
    {
      id: 2,
      title: "CCNA - Switching, Routing & Wireless",
      issuer: "Cisco Networking Academy",
      image: cert2,
      year: "2026",
      tags: ["Cisco", "VLAN", "Wireless", "Protocol"],
      description: "Competency certificate for switch configuration, VLAN implementation, and advanced routing protocols.",
    },
    {
      id: 3,
      title: "Enterprise Networking, Security & Automation",
      issuer: "Cisco Networking Academy",
      image: cert3,
      year: "2026",
      tags: ["Cisco", "Network Security", "Automation"],
      description: "Specialized certification in enterprise network automation, cybersecurity threat mitigation, and REST API controllers.",
    },
    {
      id: 4,
      title: "CyberOps Associate & Security Fundamentals",
      issuer: "Cisco Networking Academy",
      image: cert4,
      year: "2026",
      tags: ["Cisco", "CyberOps", "Threat Analysis"],
      description: "Certification in security operations monitoring, malware analysis, and computer system data security protocols.",
    },
    {
      id: 5,
      title: "Node.js Application Developer Basic",
      issuer: "Dicoding Indonesia & HackerRank",
      image: cert5,
      year: "2026",
      tags: ["Node.js", "HackerRank", "Backend", "REST API"],
      description: "Course completion and competency assessment in Node.js Backend: event loop, async handling, modularization, and HTTP Web Servers.",
    },
    {
      id: 6,
      title: "Web Development Foundations",
      issuer: "Dicoding Indonesia",
      image: cert6,
      year: "2026",
      tags: ["HTML5", "CSS3", "Responsive", "Dicoding"],
      description: "Competency certificate in modern web foundations, semantic markup, responsive design (flexbox & grid), and accessibility standards.",
    },
    {
      id: 7,
      title: "JavaScript Programming Intermediate",
      issuer: "Dicoding Indonesia & HackerRank",
      image: cert7,
      year: "2026",
      tags: ["JavaScript ES6+", "OOP", "Async/Await", "Dicoding"],
      description: "Certification in modern JavaScript mastery: functional programming, OOP, asynchronous promises, and unit testing frameworks.",
    },
    {
      id: 8,
      title: "Software Engineering Vocational Competency (UKK)",
      issuer: "SMK Telkom Malang / BNSP",
      image: cert8,
      year: "2026",
      tags: ["SMK Telkom", "BNSP", "RPL", "Fullstack"],
      description: "Official vocational competency assessment certificate in Software Engineering for building fullstack web applications and relational databases.",
    },
    {
      id: 9,
      title: "Artificial Intelligence Associate",
      issuer: "Certiport & Microsoft",
      image: cert9,
      year: "2026",
      tags: ["Certiport", "Microsoft", "AI Associate", "Machine Learning"],
      description: "International Certiport & Microsoft certification demonstrating core principles of Artificial Intelligence, Computer Vision, NLP, and intelligent data automation.",
    },
  ];

  const experiences = [
    {
      year: "2025 - Present",
      role: "Creative Frontend & Fullstack Developer",
      place: "Freelance & Independent Projects",
      highlight: "FEATURED: INTERACTIVE WEB, REST APIS & CREATIVE CODE",
      description:
        "Building high-performance interactive frontend web architectures (React, Next.js, Vite, TypeScript), Nest.js & PostgreSQL backend integrations, combined with aerial videography skills for client visual assets.",
      deliverables: ["Fullstack & Frontend Web Apps", "Responsive UI System", "Aerial 4K Cinematography"],
    },
    {
      year: "2024 - 2025",
      role: "Frontend Specialist & UI/UX Designer",
      place: "SMK Telkom Malang & SiMagangku Platform",
      highlight: "DIGITAL PLATFORMS & 12TH GRADE CAPSTONE PROJECT",
      description:
        "Developed the SiMagangku platform and the Trashly Website capstone system, engineering industry-standard frontend component architectures, multi-step form validation, and relational database integrations.",
      deliverables: ["SiMagangku Platform", "Trashly Final Project", "Figma Design System"],
    },
    {
      year: "2023 - 2024",
      role: "Software Engineering Student",
      place: "SMK Telkom Malang",
      highlight: "FOUNDATIONS OF PROGRAMMING, NETWORKING & CISCO CCNA",
      description:
        "Enrolled in the intensive Software Engineering program at SMK Telkom Malang, earning 9 competency certifications (Cisco, Dicoding, HackerRank, Certiport Microsoft AI), and actively participating in the school drone documentation and videography team.",
      deliverables: ["Cisco CCNA Certifications", "Microsoft AI Associate", "School Anniversary Documentation"],
    },
  ];

  return (
    <div className="py-10 sm:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Pill */}
      <div className="flex flex-col items-start mb-6 sm:mb-14">
        <div className="pill-badge bg-[#FFD6E0] border-2 border-[#14213D] mb-2.5 sm:mb-4">
          <span className="font-pixel text-[10px] text-[#3A86FF]">02 //</span>
          <span className="font-mono text-xs font-bold text-[#14213D]">EXPERIENCE & CERTIFICATIONS</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#14213D] tracking-tight leading-tight">
          Track Record & 9 Official Licenses.
        </h2>
        <p className="font-mono text-[10px] sm:text-sm text-[#3A86FF] mt-1 sm:mt-2 font-bold tracking-wide leading-relaxed">
          EXPERIENCE IN CODING & CREDENTIALS FROM CISCO, DICODING, AND MICROSOFT
        </p>
      </div>

      {/* ===== TIMELINE ===== */}
      <div className="relative border-l-2 sm:border-l-[3px] border-[#14213D] ml-3 sm:ml-8 pl-5 sm:pl-10 space-y-5 sm:space-y-12 mb-10 sm:mb-16">
        {experiences.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="relative group"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[29px] sm:-left-[51px] top-2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#BDB2FF] border-2 border-[#14213D] shadow-[1.5px_1.5px_0px_#14213D] flex items-center justify-center group-hover:bg-[#3A86FF] transition-colors">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" />
            </div>

            {/* Experience Card */}
            <div className="retro-panel rounded-xl sm:rounded-4xl shadow-[3px_3px_0px_#14213D] sm:shadow-[5px_5px_0px_#14213D] overflow-hidden">
              {/* Mobile: colored header strip */}
              <div className="flex items-center justify-between px-4 py-2.5 sm:hidden bg-[#14213D]">
                <span className="font-pixel text-[8px] text-[#BDB2FF]">{item.year}</span>
                <span className="font-mono text-[9px] font-bold text-white/70 truncate max-w-[55%] text-right">{item.place}</span>
              </div>

              <div className="p-4 sm:p-8">
                {/* Desktop: year + place row */}
                <div className="hidden sm:flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#3A86FF] text-white border-2 border-[#14213D] rounded-full font-pixel text-[10px] shadow-[1.5px_1.5px_0px_#14213D]">
                    {item.year}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#14213D]/70 bg-[#FFF4F4] px-3 py-1 rounded-lg border border-[#14213D]">
                    {item.place}
                  </span>
                </div>

                {/* Role title */}
                <h3 className="font-serif text-base sm:text-2xl lg:text-3xl font-black text-[#14213D] leading-tight mb-1">
                  {item.role}
                </h3>

                {/* Highlight label */}
                <div className="mb-2 sm:mb-3">
                  <span className="font-pixel text-[8px] sm:text-[9px] text-[#3A86FF] tracking-wider">
                    {item.highlight}
                  </span>
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm lg:text-base text-[#14213D]/80 leading-relaxed mb-3 sm:mb-6">
                  {item.description}
                </p>

                {/* Deliverables */}
                <div className="flex flex-wrap items-start gap-1.5 sm:gap-2 pt-2.5 sm:pt-4 border-t border-[#14213D]/10">
                  <span className="font-mono text-[9px] sm:text-xs font-bold text-[#14213D] mt-0.5">Output:</span>
                  {item.deliverables.map((d, dIdx) => (
                    <span
                      key={dIdx}
                      className="font-mono text-[9px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#BDB2FF]/20 border border-[#14213D] rounded-full text-[#14213D] font-bold"
                    >
                      ✓ {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== CERTIFICATES GALLERY ===== */}
      <div className="retro-panel-pink p-3 sm:p-8 lg:p-10 rounded-2xl sm:rounded-4xl">
        {/* Gallery header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-4 sm:mb-8">
          <div>
            <span className="font-pixel text-[8px] sm:text-[10px] text-[#3A86FF] px-2 py-0.5 bg-white rounded-md border border-[#14213D] inline-block mb-1.5 sm:mb-2">
              VERIFIED CREDENTIALS // 9 OFFICIAL CERTIFICATES
            </span>
            <h3 className="font-serif text-lg sm:text-2xl lg:text-3xl font-black text-[#14213D] leading-tight">
              Certification Gallery (1–9).
            </h3>
            <p className="font-sans text-[10px] sm:text-sm text-[#14213D]/75 mt-0.5 sm:mt-1 leading-relaxed">
              Web, JavaScript, Node.js, Cisco networking, and Microsoft AI.
            </p>
          </div>
          <span className="hidden sm:inline-block font-mono text-xs font-bold text-[#14213D] bg-white px-3.5 py-2 rounded-full border-2 border-[#14213D] shadow-[2px_2px_0px_#14213D] shrink-0">
            Tap card to zoom & view details
          </span>
        </div>

        {/* Mobile hint */}
        <p className="sm:hidden font-mono text-[9px] text-[#14213D]/60 mb-3 text-center">
          Tap kartu untuk melihat detail sertifikat
        </p>

        {/* Grid: 2 col mobile, 3 col desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {certificatesList.map((cert, idx) => (
            <motion.div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.3, delay: (idx % 3) * 0.05 }}
              className={`bg-white border-2 border-[#14213D] rounded-xl sm:rounded-3xl p-2 sm:p-4 shadow-[2px_2px_0px_#14213D] sm:shadow-[4px_4px_0px_#14213D] active:scale-95 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#14213D] transition-all cursor-pointer group flex flex-col ${
                idx >= 4 && !showAllCertsMobile ? "hidden sm:flex" : "flex"
              }`}
            >
              {/* Thumbnail */}
              <div className="aspect-[16/11] rounded-lg sm:rounded-2xl overflow-hidden border border-[#14213D]/30 sm:border-2 sm:border-[#14213D] mb-2 bg-[#FFF4F4] relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-1 left-1 sm:top-1.5 sm:left-1.5 px-1 sm:px-2 py-0.5 bg-[#3A86FF] text-white border border-[#14213D] rounded-full font-pixel text-[6px] sm:text-[8px]">
                  NO. 0{cert.id}
                </span>
                <span className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 px-1 sm:px-2 py-0.5 bg-white/95 border border-[#14213D] rounded font-mono text-[7px] sm:text-[9px] font-bold text-[#14213D]">
                  {cert.year}
                </span>
              </div>

              {/* Issuer */}
              <div className="font-mono text-[7px] sm:text-[10px] font-bold text-[#3A86FF] uppercase mb-0.5 truncate">
                {cert.issuer}
              </div>

              {/* Title — 2 lines on mobile for readability */}
              <h4 className="font-serif text-[10px] sm:text-sm font-black text-[#14213D] line-clamp-2 leading-tight mb-1 sm:mb-2 grow">
                {cert.title}
              </h4>

              {/* Tags — hidden on mobile to keep it clean */}
              <div className="hidden sm:flex flex-wrap gap-1 pt-2 border-t border-[#14213D]/10">
                {cert.tags.slice(0, 2).map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[9px] px-2 py-0.5 bg-[#FFF4F4] border border-[#14213D] rounded-md text-[#14213D] font-bold"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile show all / collapse toggle */}
        <div className="mt-3 sm:hidden flex justify-center">
          <button
            onClick={() => setShowAllCertsMobile(!showAllCertsMobile)}
            className="font-mono text-xs font-bold text-[#14213D] bg-white px-5 py-2 rounded-full border-2 border-[#14213D] shadow-[2px_2px_0px_#14213D] active:translate-y-0.5 active:shadow-[0px_0px_0px_#14213D] transition-all"
          >
            {showAllCertsMobile
              ? "Ringkas ▴"
              : `Lihat Semua ${certificatesList.length} Sertifikat ▾`}
          </button>
        </div>
      </div>

      {/* ===== CERTIFICATE MODAL ===== */}
      {selectedCert &&
        createPortal(
          <div
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-[#14213D]/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full sm:max-w-2xl bg-white border-t-[3px] sm:border-[3px] border-[#14213D] rounded-t-3xl sm:rounded-4xl p-5 sm:p-8 shadow-[0px_-4px_0px_#14213D] sm:shadow-[8px_8px_0px_#14213D] max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FFD6E0] border-2 border-[#14213D] font-pixel text-xs text-[#14213D] flex items-center justify-center shadow-[2px_2px_0px_#14213D] hover:bg-[#3A86FF] hover:text-white transition-colors"
              >
                ✕
              </button>

              {/* Pull indicator on mobile */}
              <div className="sm:hidden w-10 h-1 bg-[#14213D]/20 rounded-full mx-auto mb-4" />

              {/* Cert image */}
              <div className="aspect-[16/11] w-full rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#14213D] mb-4 sm:mb-5 bg-[#FFF4F4]">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain bg-[#14213D]"
                />
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                <span className="px-2.5 sm:px-3 py-1 bg-[#3A86FF] text-white border border-[#14213D] rounded-full font-mono text-[10px] sm:text-xs font-bold">
                  {selectedCert.issuer}
                </span>
                <span className="px-2.5 sm:px-3 py-1 bg-[#FFD6E0] border border-[#14213D] rounded-full font-mono text-[10px] sm:text-xs font-bold text-[#14213D]">
                  {selectedCert.year}
                </span>
                <span className="px-2.5 sm:px-3 py-1 bg-[#BDB2FF]/30 border border-[#14213D] rounded-full font-pixel text-[8px] sm:text-[9px] text-[#14213D]">
                  CERT #{selectedCert.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-3xl font-black text-[#14213D] mb-2 sm:mb-3 leading-tight">
                {selectedCert.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-[#14213D]/80 leading-relaxed mb-4 sm:mb-5">
                {selectedCert.description}
              </p>

              {/* Tags */}
              <div className="pt-3 border-t-2 border-[#14213D]/10 mb-5 sm:mb-6">
                <div className="font-mono text-xs font-bold text-[#14213D] mb-2 uppercase">
                  Competency Areas:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.tags.map((tg, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs px-2.5 py-1 bg-[#FFF4F4] border border-[#14213D] rounded-md font-bold text-[#3A86FF]"
                    >
                      #{tg}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="retro-btn bg-[#3A86FF] text-white text-xs sm:text-sm w-full"
              >
                Tutup Preview
              </button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};
