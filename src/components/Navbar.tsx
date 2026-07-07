"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("work");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const sections = ["work", "about", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", // Trigger when section occupies the active middle portion
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#050810]/70 backdrop-blur-xl border-ice-300/10 shadow-lg shadow-[#050810]/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Mark */}
        <a href="#hero" className="flex items-center space-x-3 group clickable">
          <div className="h-7 w-7 border-2 border-ice-300 rounded-lg flex items-center justify-center rotate-45 group-hover:rotate-180 transition-transform duration-700">
            <div className="h-3.5 w-3.5 bg-ice-300 rounded-sm" />
          </div>
          <span className="text-xl font-extrabold font-syne tracking-widest text-ice-200">
            AK
          </span>
        </a>

        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const id = link.href.substring(1);
            const isActive = activeSection === id;
            return (
              <li key={link.name} className="relative py-2">
                <a
                  href={link.href}
                  className={`text-xs uppercase tracking-widest font-mono transition-colors duration-300 clickable ${
                    isActive ? "text-ice-200" : "text-ice-400 hover:text-ice-200"
                  }`}
                >
                  {link.name}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-ice-300 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Action Button - Desktop */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="pulse-badge flex items-center gap-2 px-4 py-2 rounded-full border border-ice-300/25 bg-ice-950/20 text-ice-300 hover:bg-ice-500/20 hover:text-ice-100 transition-all duration-300 font-mono text-[10px] uppercase tracking-widest clickable"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ice-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ice-300"></span>
            </span>
            Open to Work ↗
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden gap-4">
          <a
            href="#contact"
            className="pulse-badge flex items-center gap-2 px-3 py-1.5 rounded-full border border-ice-300/25 bg-ice-950/20 text-ice-300 text-[9px] font-mono uppercase tracking-widest"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ice-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-ice-300"></span>
            </span>
            Hire ↗
          </a>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-ice-950/30 text-ice-300 clickable"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 overflow-hidden border-t border-ice-300/10"
          >
            <ul className="flex flex-col space-y-4 py-4 px-2">
              {navLinks.map((link) => {
                const id = link.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-1 text-sm font-mono uppercase tracking-widest font-semibold transition-colors duration-300 ${
                        isActive ? "text-ice-300 pl-2 border-l-2 border-ice-300" : "text-ice-400 hover:text-ice-200"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}