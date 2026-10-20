import React, { useState } from "react";
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

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

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

      {/* Main Single Page Sections */}
      <main className="relative w-full">
        {/* 4. Hero Section */}
        <Hero />

        {/* 5. About Me Section */}
        <About />

        {/* 6. Experience & Certifications (Timeline & Credential Gallery) */}
        <Experience />

        {/* 7. Skills & Tools (Software Grid + Pixel Bar) */}
        <Skills />

        {/* 8. Portfolio (Tilted Carousel + Mosaic Grid + Modal) */}
        <Portfolio />

        {/* 9. Stories / Showreel (Camera HUD Drone Viewfinder) */}
        <Stories />

        {/* 10. Contact Section (Direct WA + Form) */}
        <Contact />
      </main>

      {/* 11. Footer Section (Marquee Ticker + Back-to-Top) */}
      <Footer />
    </div>
  );
}