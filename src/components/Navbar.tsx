import React, { useState, useEffect } from "react";

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }

      // Check current section
      const sections = ["hero", "about", "experience", "skills", "portfolio", "stories", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Portfolio", href: "#portfolio", id: "portfolio" },
    { label: "Stories", href: "#stories", id: "stories" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      {/* Top thin blue scroll progress bar */}
      <div className="fixed top-0 left-0 w-full h-[4px] bg-transparent z-[100]">
        <div
          className="h-full bg-gradient-to-r from-[#3A86FF] via-[#BDB2FF] to-[#3A86FF] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Pill Navbar */}
      <header className="fixed top-4 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
        <nav className="pointer-events-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 bg-white/85 backdrop-blur-md border-[2.5px] border-[#14213D] rounded-full shadow-[4px_4px_0px_#14213D] max-w-5xl w-full">
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 font-serif font-black text-lg sm:text-xl text-[#14213D] tracking-tight group"
          >
            <span className="w-7 h-7 rounded-full bg-[#3A86FF] border border-[#14213D] flex items-center justify-center font-pixel text-[10px] text-white group-hover:rotate-12 transition-transform">
              AK
            </span>
            <span className="hidden sm:inline">
              Averill<span className="text-[#3A86FF]">.K</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? "bg-[#3A86FF] text-white border border-[#14213D] shadow-[2px_2px_0px_#14213D] translate-y-[-1px]"
                      : "text-[#14213D] hover:bg-[#FFD6E0]/60 hover:text-[#14213D]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Status Pill & Action */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-[#BDB2FF]/20 border border-[#14213D] rounded-full text-[11px] font-mono font-bold text-[#14213D]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>OPEN COMMISSIONS</span>
            </div>

            <a
              href="#contact"
              className="retro-btn text-xs py-1.5 px-3.5 bg-[#3A86FF] text-white hidden sm:inline-flex"
            >
              Let's Talk
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full border-2 border-[#14213D] bg-[#FFD6E0] text-[#14213D] active:scale-95"
              aria-label="Toggle Navigation"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#14213D]/40 backdrop-blur-sm md:hidden flex justify-center items-start pt-20 px-4">
          <div className="w-full max-w-sm bg-white border-[3px] border-[#14213D] rounded-3xl p-6 shadow-[8px_8px_0px_#14213D] animate-in fade-in zoom-in duration-200">
            <div className="flex flex-col gap-2.5">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-bold flex items-center justify-between border-2 border-[#14213D] ${
                    activeSection === item.id
                      ? "bg-[#3A86FF] text-white shadow-[3px_3px_0px_#14213D]"
                      : "bg-[#FFF4F4] text-[#14213D]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-pixel text-[10px]">→</span>
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full retro-btn text-center bg-[#BDB2FF] text-[#14213D]"
                >
                  Contact Averill
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};