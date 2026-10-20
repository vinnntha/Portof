import React, { useState } from "react";
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

  const certificatesList: CertificateItem[] = [
    {
      id: 1,
      title: "CCNA - Introduction to Networks & Python",
      issuer: "Cisco Networking Academy",
      image: cert1,
      year: "2023",
      tags: ["Cisco", "Python", "Data Analyst", "Networking"],
      description: "Official Cisco CCNA course completion certificate covering network architecture, fundamental routing, and Python data processing.",
    },
    {
      id: 2,
      title: "CCNA - Switching, Routing & Wireless",
      issuer: "Cisco Networking Academy",
      image: cert2,
      year: "2023",
      tags: ["Cisco", "VLAN", "Wireless", "Protocol"],
      description: "Competency certificate for switch configuration, VLAN implementation, and advanced routing protocols.",
    },
    {
      id: 3,
      title: "Enterprise Networking, Security & Automation",
      issuer: "Cisco Networking Academy",
      image: cert3,
      year: "2024",
      tags: ["Cisco", "Network Security", "Automation"],
      description: "Specialized certification in enterprise network automation, cybersecurity threat mitigation, and REST API controllers.",
    },
    {
      id: 4,
      title: "CyberOps Associate & Security Fundamentals",
      issuer: "Cisco Networking Academy",
      image: cert4,
      year: "2024",
      tags: ["Cisco", "CyberOps", "Threat Analysis"],
      description: "Certification in security operations monitoring, malware analysis, and computer system data security protocols.",
    },
    {
      id: 5,
      title: "Node.js Application Developer Basic",
      issuer: "Dicoding Indonesia & HackerRank",
      image: cert5,
      year: "2024",
      tags: ["Node.js", "HackerRank", "Backend", "REST API"],
      description: "Course completion and competency assessment in Node.js Backend: event loop, async handling, modularization, and HTTP Web Servers.",
    },
    {
      id: 6,
      title: "Web Development Foundations",
      issuer: "Dicoding Indonesia",
      image: cert6,
      year: "2023",
      tags: ["HTML5", "CSS3", "Responsive", "Dicoding"],
      description: "Competency certificate in modern web foundations, semantic markup, responsive design (flexbox & grid), and accessibility standards.",
    },
    {
      id: 7,
      title: "JavaScript Programming Intermediate",
      issuer: "Dicoding Indonesia & HackerRank",
      image: cert7,
      year: "2024",
      tags: ["JavaScript ES6+", "OOP", "Async/Await", "Dicoding"],
      description: "Certification in modern JavaScript mastery: functional programming, OOP, asynchronous promises, and unit testing frameworks.",
    },
    {
      id: 8,
      title: "Software Engineering Vocational Competency (UKK)",
      issuer: "SMK Telkom Malang / BNSP",
      image: cert8,
      year: "2024",
      tags: ["SMK Telkom", "BNSP", "RPL", "Fullstack"],
      description: "Official vocational competency assessment certificate in Software Engineering for building fullstack web applications and relational databases.",
    },
    {
      id: 9,
      title: "Artificial Intelligence Associate",
      issuer: "Certiport & Microsoft",
      image: cert9,
      year: "2024",
      tags: ["Certiport", "Microsoft", "AI Associate", "Machine Learning"],
      description: "International Certiport & Microsoft certification demonstrating core principles of Artificial Intelligence, Computer Vision, NLP, and intelligent data automation.",
    },
  ];

  const experiences = [
    {
      year: "2024 - Present",
      role: "Creative Frontend & Fullstack Developer",
      place: "Freelance & Independent Projects",
      highlight: "FEATURED: INTERACTIVE WEB, REST APIS & CREATIVE CODE",
      description:
        "Building high-performance interactive frontend web architectures (React, Next.js, Vite, TypeScript), Nest.js & PostgreSQL backend integrations, combined with aerial videography skills for client visual assets.",
      deliverables: ["Fullstack & Frontend Web Apps", "Responsive UI System", "Aerial 4K Cinematography"],
    },
    {
      year: "2023 - 2024",
      role: "Frontend Specialist & UI/UX Designer",
      place: "SMK Telkom Malang & SiMagangku Platform",
      highlight: "DIGITAL PLATFORMS & 12TH GRADE CAPSTONE PROJECT",
      description:
        "Developed the SiMagangku platform and the Trashly Website capstone system, engineering industry-standard frontend component architectures, multi-step form validation, and relational database integrations.",
      deliverables: ["SiMagangku Platform", "Trashly Final Project", "Figma Design System"],
    },
    {
      year: "2022 - 2023",
      role: "Software Engineering Student",
      place: "SMK Telkom Malang",
      highlight: "FOUNDATIONS OF PROGRAMMING, NETWORKING & CISCO CCNA",
      description:
        "Enrolled in the intensive Software Engineering program at SMK Telkom Malang, earning 9 competency certifications (Cisco, Dicoding, HackerRank, Certiport Microsoft AI), and actively participating in the school drone documentation and videography team.",
      deliverables: ["Cisco CCNA Certifications", "Microsoft AI Associate", "School Anniversary Documentation"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Pill */}
      <div className="flex flex-col items-start mb-14">
        <div className="pill-badge bg-[#FFD6E0] border-2 border-[#14213D] mb-4">
          <span className="font-pixel text-[10px] text-[#3A86FF]">02 //</span>
          <span className="font-mono text-xs font-bold text-[#14213D]">EXPERIENCE & CERTIFICATIONS</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#14213D] tracking-tight">
          Track Record & 9 Official Licenses.
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#3A86FF] mt-2 font-bold tracking-wide">
          PROVEN EXPERIENCE IN CODING & COMPREHENSIVE CERTIFICATION CREDENTIALS FROM CISCO, DICODING, AND MICROSOFT
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
                  {item.place}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#14213D]">
                {item.role}
              </h3>

              <div className="my-2">
                <span className="font-pixel text-[9px] text-[#3A86FF] tracking-wider">
                  {item.highlight}
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

      {/* ======================================================== */}
      {/* 9 VERIFIED CERTIFICATES GALLERY                          */}
      {/* ======================================================== */}
      <div className="mt-16 retro-panel-pink p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[10px] text-[#3A86FF] px-2.5 py-1 bg-white rounded-md border border-[#14213D]">
                VERIFIED CREDENTIALS // 9 OFFICIAL CERTIFICATES
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#14213D] mt-2">
              Portfolio Certification Gallery (1 - 9).
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#14213D]/80 mt-1">
              All certificates verified across web programming, JavaScript, Node.js backend, Cisco networking, and AI.
            </p>
          </div>
          <span className="font-mono text-xs font-bold text-[#14213D] bg-white px-3.5 py-2 rounded-full border-2 border-[#14213D] shadow-[2px_2px_0px_#14213D] self-start sm:self-auto">
            Click card to zoom & view details
          </span>
        </div>

        {/* 9 Certificates Grid (3 columns on lg, 2 on sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesList.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="bg-white border-2 border-[#14213D] rounded-3xl p-4 shadow-[4px_4px_0px_#14213D] hover:-translate-y-1.5 hover:shadow-[7px_7px_0px_#14213D] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail window */}
                <div className="aspect-[16/11] rounded-2xl overflow-hidden border-2 border-[#14213D] mb-3 bg-[#FFF4F4] relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#3A86FF] text-white border border-[#14213D] rounded-full font-pixel text-[8px]">
                    NO. 0{cert.id}
                  </span>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-white/95 border border-[#14213D] rounded-md font-mono text-[9px] font-bold text-[#14213D]">
                    {cert.year}
                  </span>
                </div>

                <div className="font-mono text-[10px] font-bold text-[#3A86FF] uppercase mb-1">
                  {cert.issuer}
                </div>
                <h4 className="font-serif text-base sm:text-lg font-black text-[#14213D] line-clamp-1 mb-2">
                  {cert.title}
                </h4>
                <p className="font-sans text-xs text-[#14213D]/70 line-clamp-2 leading-relaxed mb-3">
                  {cert.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-2 border-t border-[#14213D]/10 flex flex-wrap gap-1">
                {cert.tags.slice(0, 3).map((t, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[9px] px-2 py-0.5 bg-[#FFF4F4] border border-[#14213D] rounded-md text-[#14213D] font-bold"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* CERTIFICATE MODAL LIGHTBOX WITH FULL DETAILS            */}
      {/* ======================================================== */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 bg-[#14213D]/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-white border-[3px] border-[#14213D] rounded-4xl p-6 sm:p-8 shadow-[8px_8px_0px_#14213D] max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FFD6E0] border-2 border-[#14213D] font-pixel text-xs text-[#14213D] flex items-center justify-center shadow-[2px_2px_0px_#14213D] hover:bg-[#3A86FF] hover:text-white"
            >
              ✕
            </button>

            <div className="aspect-[16/11] w-full rounded-2xl overflow-hidden border-2 border-[#14213D] mb-5 bg-[#FFF4F4]">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-full object-contain bg-[#14213D]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-[#3A86FF] text-white border border-[#14213D] rounded-full font-mono text-xs font-bold">
                {selectedCert.issuer}
              </span>
              <span className="px-3 py-1 bg-[#FFD6E0] border border-[#14213D] rounded-full font-mono text-xs font-bold text-[#14213D]">
                Issued: {selectedCert.year}
              </span>
              <span className="px-3 py-1 bg-[#BDB2FF]/30 border border-[#14213D] rounded-full font-pixel text-[9px] text-[#14213D]">
                CERTIFICATE #{selectedCert.id}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#14213D] mb-3">
              {selectedCert.title}
            </h3>
            <p className="font-sans text-sm text-[#14213D]/80 leading-relaxed mb-5">
              {selectedCert.description}
            </p>

            <div className="pt-3 border-t-2 border-[#14213D]/10">
              <div className="font-mono text-xs font-bold text-[#14213D] mb-2 uppercase">
                Competency Areas:
              </div>
              <div className="flex flex-wrap gap-1.5 mb-6">
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
              className="retro-btn bg-[#3A86FF] text-white text-xs w-full"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
