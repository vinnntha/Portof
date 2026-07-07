import { Navbar } from "./components/Navbar"
import ParticleBackground from "./components/ParticleBackground"
import CustomCursor from "./components/CustomCursor"
import ScrollSection from "./components/ScrollSection"
import { Hero } from "./components/Hero"
import { Skill } from "./components/Skill"
import { Gallery } from "./components/Gallery"
import { MyProjects } from "./components/MyProjects"
import { Roadmap } from "./components/Roadmap"
import { Contact } from "./components/Contacts"

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050810]/50 text-white overflow-x-hidden">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating Canvas Particles + Radial Background */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Pages Content */}
      <main className="relative w-full">
        {/* Hero Section */}
        <ScrollSection id="hero">
          <Hero />
        </ScrollSection>

        {/* Selected Work Bento Gallery */}
        <ScrollSection id="work">
          <Gallery />
        </ScrollSection>

        {/* About & Skills Section */}
        <ScrollSection id="about">
          <Skill />
        </ScrollSection>

        {/* Detailed Projects Panels (Hand Mockups) */}
        <ScrollSection id="projects">
          <MyProjects />
        </ScrollSection>

        {/* Roadmap Timeline Showcase */}
        <ScrollSection id="roadmap">
          <Roadmap />
        </ScrollSection>

        {/* Contact Section */}
        <ScrollSection id="contact">
          <Contact />
        </ScrollSection>
      </main>
    </div>
  );
}