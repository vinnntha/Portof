import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { Preloader } from "./components/Preloader";
import { RetroCursor } from "./components/RetroCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Portfolio";
import { Stories } from "./components/Stories";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollSection } from "./components/ScrollSection";
import ParticleBackground from "./components/ParticleBackground";

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  // Global parallax scroll coordinates for ambient decorative background particles
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 80, damping: 25 });
  const bgBlob1Y = useTransform(smoothScrollY, [0, 4000], [0, -380]);
  const bgBlob2Y = useTransform(smoothScrollY, [0, 4000], [0, 420]);
  const bgPixelStar1Y = useTransform(smoothScrollY, [0, 4000], [0, -600]);
  const bgPixelCrossY = useTransform(smoothScrollY, [0, 4000], [0, -300]);

  // Interactive cursor spotlight over base blueprint grid (desktop)
  const pointerX = useMotionValue(-500);
  const pointerY = useMotionValue(-500);
  const spotlightX = useSpring(pointerX, { stiffness: 180, damping: 28 });
  const spotlightY = useSpring(pointerY, { stiffness: 180, damping: 28 });
  const spotlightMask = useMotionTemplate`radial-gradient(280px circle at ${spotlightX}px ${spotlightY}px, black 0%, transparent 100%)`;
  const spotlightGlow = useMotionTemplate`radial-gradient(420px circle at ${spotlightX}px ${spotlightY}px, rgba(58, 134, 255, 0.09), rgba(189, 178, 255, 0.06) 45%, transparent 72%)`;

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handlePointerMove = (e: MouseEvent) => {
      pointerX.set(e.clientX);
      pointerY.set(e.clientY);
    };
    const handlePointerLeave = () => {
      pointerX.set(-500);
      pointerY.set(-500);
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [pointerX, pointerY]);

  return (
    <div className="relative min-h-screen bg-[#FFF4F4] text-[#14213D] selection:bg-[#3A86FF] selection:text-white overflow-x-hidden font-sans">
      {/* 1. Preloader Screen */}
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      {/* 2. Custom Retro Pixel Cursor */}
      <RetroCursor />

      {/* 3. Floating Navbar & Scroll Progress */}
      <Navbar />

      {/* Interactive Base Background: Geometric Canvas + Blueprint Spotlight + Parallax Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Cursor-illuminated blueprint grid highlight (desktop) */}
        <motion.div
          className="hidden md:block absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(58, 134, 255, 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(58, 134, 255, 0.16) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            WebkitMaskImage: spotlightMask,
            maskImage: spotlightMask,
          }}
        />

        {/* Soft pastel cursor ambient aura (desktop) */}
        <motion.div
          className="hidden md:block absolute inset-0"
          style={{ background: spotlightGlow }}
        />

        {/* Interactive Floating Geometric Canvas & Click Ripples */}
        <ParticleBackground />

        {/* Soft pastel ambient glow 1 (top-right drifting) */}
        <motion.div
          style={{ y: bgBlob1Y }}
          className="absolute -top-32 right-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#FFD6E0]/35 via-[#BDB2FF]/25 to-transparent blur-3xl"
        />

        {/* Soft pastel ambient glow 2 (mid-left drifting) */}
        <motion.div
          style={{ y: bgBlob2Y }}
          className="absolute top-[45%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#3A86FF]/15 via-[#FFD6E0]/25 to-transparent blur-3xl"
        />

        {/* Floating retro pixel decorative stars in ambient background */}
        <motion.div
          style={{ y: bgPixelStar1Y }}
          className="absolute top-[30%] right-[8%] font-pixel text-xl text-[#BDB2FF]/40 select-none"
        >
          ✦
        </motion.div>

        <motion.div
          style={{ y: bgPixelCrossY }}
          className="absolute top-[65%] left-[5%] font-pixel text-2xl text-[#FFD6E0]/60 select-none"
        >
          ✚
        </motion.div>
      </div>

      {/* Main Single Page Sections with Zoom-in Parallax Scale Motion */}
      <main className="relative z-10 w-full space-y-6 sm:space-y-16 lg:space-y-20">
        {/* 4. Hero Section: starts 1.0, recedes subtly when scrolling down */}
        <ScrollSection id="hero" variant="hero">
          <Hero />
        </ScrollSection>

        {/* 5. About Me Section: zooms in from small to big with 3D tilt */}
        <ScrollSection id="about" variant="scale-up" initialScale={0.88}>
          <About />
        </ScrollSection>

        {/* 6. Experience & Certifications (Timeline & Credential Gallery) */}
        <ScrollSection id="experience" variant="scale-up" initialScale={0.88}>
          <Experience />
        </ScrollSection>

        {/* 7. Skills & Tools (Software Grid + Pixel Bar) */}
        <ScrollSection id="skills" variant="scale-up" initialScale={0.88}>
          <Skills />
        </ScrollSection>

        {/* 8. Portfolio (Tilted Carousel + Mosaic Grid + Modal) */}
        <ScrollSection id="portfolio" variant="scale-up" initialScale={0.88}>
          <Portfolio />
        </ScrollSection>

        {/* 9. Stories / Showreel (Camera HUD Drone Viewfinder) */}
        <ScrollSection id="stories" variant="scale-up" initialScale={0.88}>
          <Stories />
        </ScrollSection>

        {/* 10. Contact Section (Direct WA + Form) */}
        <ScrollSection id="contact" variant="scale-up" initialScale={0.88}>
          <Contact />
        </ScrollSection>
      </main>

      {/* 11. Footer Section (Marquee Ticker + Back-to-Top) */}
      <Footer />
    </div>
  );
}