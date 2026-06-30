import { motion, useTransform } from "framer-motion";
import { useEffect } from "react";
import heroPortrait from "../assets/hero_portrait.png";

export default function Hero() {
  const name = "Averill Kevinatha";
  const nameLetters = Array.from(name);

  // Enhanced stagger configurations for name letters
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        duration: 0.8
      },
    },
  };

  // Enhanced fade-in-up animations for subtext and actions
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: customDelay, 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] as const 
      },
    }),
  };

  // Blinking cursor animation
  const blinkVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        opacity: { 
          duration: 0.8, 
          repeat: Infinity, 
          repeatType: "reverse" 
        } 
      } 
    },
  };

  // Parallax effect for background elements
  useEffect(() => {
    // Add parallax effect to background elements
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth: width, innerHeight: height } = window;
      const x = (e.clientX / width - 0.5) * 20;
      const y = (e.clientY / height - 0.5) * 20;
      
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      className="relative min-h-[100vh] flex items-center justify-center px-6 md:px-12 lg:px-24 pb-24 overflow-hidden radial-bg"
      style={{
        '--mouse-x': '0px',
        '--mouse-y': '0px'
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-start gap-16 px-4">
        
        {/* Left Column: Heading and Tagline */}
        <div className="flex-1 flex flex-col items-start text-left space-y-6">
          
          {/* Enhanced Eyebrow Label with blinking cursor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 rounded-xl px-4 py-2 font-mono text-xs font-semibold text-brand-primary uppercase tracking-wider"
          >
            <span>UX/UI Designer & Creative Developer</span>
            <motion.span
              variants={blinkVariants}
              initial="hidden"
              animate="visible"
              className="w-1 h-3 bg-brand-primary inline-block"
            />
          </motion.div>

          {/* Main Heading: Stagger letter animation */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.1] mb-6 select-none"
          >
            {nameLetters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={1.1}
            className="text-lg md:text-xl text-brand-text-secondary font-sans leading-relaxed max-w-lg mb-10"
          >
            I craft digital experiences that move people. Combining technical precision with cinematic creative vision.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={1.3}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex items-center justify-center rounded-xl bg-brand-primary px-7 py-4 font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.03] glow-btn-shadow hover:bg-emerald-300"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center rounded-xl border border-brand-primary px-7 py-4 font-semibold text-brand-primary bg-transparent transition-all duration-300 hover:scale-[1.03] hover:bg-brand-primary/10"
            >
              Hubungi Saya
            </a>
          </motion.div>
        </div>

        {/* Right Column: Portrait Photo with Lime Green glow halo */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.5 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            {/* Glow halo behind the image */}
            <div className="absolute inset-0 rounded-full bg-brand-primary/10 filter blur-3xl scale-110 -z-10 animate-pulse" />
            
            {/* Portrait Frame Wrapper */}
            <div className="w-full h-full rounded-3xl border border-brand-card-border p-2 bg-white/5 backdrop-blur-sm relative group overflow-hidden shadow-2xl">
              {/* Inner glowing circle */}
              <div className="absolute inset-0 rounded-3xl bg-radial from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Portrait Image */}
              <img
                src={heroPortrait}
                alt="Averill Kevinatha Portrait"
                className="w-full h-full object-cover rounded-2xl grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
              />
            </div>

            {/* Custom glowing design element */}
            <div className="absolute -bottom-2 -right-2 w-24 h-24 border-r-2 border-b-2 border-brand-primary/40 rounded-br-2xl pointer-events-none group-hover:border-brand-primary transition-colors duration-500" />
            <div className="absolute -top-2 -left-2 w-24 h-24 border-l-2 border-t-2 border-brand-primary/40 rounded-tl-2xl pointer-events-none group-hover:border-brand-primary transition-colors duration-500" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}