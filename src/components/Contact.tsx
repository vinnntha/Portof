import React, { useState } from "react";
import { motion } from "framer-motion";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "UI/UX & Web Development",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      // optional auto reset after 6s
    }, 6000);
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Pill */}
      <div className="flex flex-col items-start mb-14">
        <div className="pill-badge bg-white border-2 border-[#14213D] mb-4">
          <span className="font-pixel text-[10px] text-[#3A86FF]">06 //</span>
          <span className="font-mono text-xs font-bold text-[#14213D]">GET IN TOUCH</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#14213D] tracking-tight">
          Let's Build Something Awesome.
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#3A86FF] mt-2 font-bold tracking-wide">
          OPEN FOR FREELANCE PROJECTS, CREATIVE COLLABORATIONS, OR FULL-TIME OPPORTUNITIES
        </p>
      </div>

      {/* Main Giant Retro Contact Module */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white border-[3px] border-[#14213D] rounded-4xl sm:rounded-5xl p-6 sm:p-10 lg:p-14 shadow-[8px_8px_0px_#14213D]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Links & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-pixel text-[10px] text-[#3A86FF] tracking-wider">
                TRANSMISSION // FAST RESPONSE
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-black text-[#14213D] mt-2 mb-4">
                Have a Project Idea? Let's Talk!
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-8">
                Looking to build a world-class interactive website, need research-driven UI/UX design, or cinematic aerial drone footage for your brand? I'm ready to help bring your vision from concept to launch.
              </p>

              {/* Direct WhatsApp Call to Action */}
              <div className="p-5 bg-[#FFD6E0] border-2 border-[#14213D] rounded-3xl shadow-[4px_4px_0px_#14213D] mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-pixel text-[9px] text-[#14213D]">
                    DIRECT CHAT
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#14213D] mb-1">
                  WhatsApp Priority
                </h4>
                <p className="font-sans text-xs text-[#14213D]/75 mb-4">
                  Fastest response for project briefs, inquiries, and proposals.
                </p>
                <a
                  href="https://wa.me/085336337789?text=Hello%20Averill,%20I'm%20interested%20in%20working%20together%20on%20a%20project..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn bg-[#3A86FF] text-white w-full text-center text-xs sm:text-sm font-bold"
                >
                  <span>Chat on WhatsApp</span>
                  <span className="font-pixel text-xs">💬</span>
                </a>
              </div>
            </div>

            {/* Social Channels Pills */}
            <div>
              <span className="font-mono text-xs font-bold text-[#14213D] block mb-3 uppercase">
                Find Averill Online:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "GitHub", url: "https://github.com", icon: "🐙" },
                  { name: "LinkedIn", url: "https://linkedin.com", icon: "💼" },
                  { name: "Instagram", url: "https://instagram.com", icon: "📷" },
                  { name: "Email", url: "mailto:averillkevinatha@gmail.com", icon: "✉" },
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-[#FFF4F4] hover:bg-[#BDB2FF] border border-[#14213D] font-mono text-xs font-bold text-[#14213D] shadow-[2px_2px_0px_#14213D] hover:-translate-y-0.5 transition-all flex items-center gap-1.5"
                  >
                    <span>{s.icon}</span>
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#FFF4F4] border-2 border-[#14213D] rounded-3xl p-6 sm:p-8 shadow-[4px_4px_0px_#14213D]">
            {isSubmitted ? (
              <div className="py-16 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-[#BDB2FF] border-2 border-[#14213D] rounded-full mx-auto flex items-center justify-center font-pixel text-2xl mb-4 shadow-[4px_4px_0px_#14213D]">
                  ✓
                </div>
                <h3 className="font-serif text-3xl font-black text-[#14213D] mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="font-sans text-sm text-[#14213D]/80 max-w-md mx-auto mb-6">
                  Thank you for reaching out! Averill will review your message and reply as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      service: "UI/UX & Web Development",
                      message: "",
                    });
                  }}
                  className="retro-btn bg-[#3A86FF] text-white text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex items-center justify-between pb-3 border-b-2 border-[#14213D]/10">
                  <span className="font-pixel text-[10px] text-[#3A86FF]">
                    CONTACT FORM
                  </span>
                  <span className="font-mono text-xs text-[#14213D]/60">
                    *Required fields
                  </span>
                </div>

                {/* Name */}
                <div>
                  <label className="block font-mono text-xs font-bold text-[#14213D] mb-1.5">
                    Your Name / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 bg-white border-2 border-[#14213D] rounded-2xl shadow-[2px_2px_0px_#14213D] font-sans text-sm text-[#14213D] focus:outline-none focus:ring-2 focus:ring-[#3A86FF]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-mono text-xs font-bold text-[#14213D] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="nama@domain.com"
                    className="w-full px-4 py-3 bg-white border-2 border-[#14213D] rounded-2xl shadow-[2px_2px_0px_#14213D] font-sans text-sm text-[#14213D] focus:outline-none focus:ring-2 focus:ring-[#3A86FF]"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block font-mono text-xs font-bold text-[#14213D] mb-1.5">
                    Project Scope / Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border-2 border-[#14213D] rounded-2xl shadow-[2px_2px_0px_#14213D] font-sans text-sm text-[#14213D] focus:outline-none focus:ring-2 focus:ring-[#3A86FF]"
                  >
                    <option value="UI/UX & Web Development">
                      Website & UI/UX Design
                    </option>
                    <option value="Drone Aerial Cinematography">
                      Drone Pilot & 4K Aerial Video
                    </option>
                    <option value="Videography & Commercial Reel">
                      Videography & Motion Editing
                    </option>
                    <option value="Full Creative Collaboration">
                      Multi-Disciplinary Creative Collaboration
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-xs font-bold text-[#14213D] mb-1.5">
                    Tell Me About Your Project
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Share an overview of your project, target timeline, or expectations..."
                    className="w-full px-4 py-3 bg-white border-2 border-[#14213D] rounded-2xl shadow-[2px_2px_0px_#14213D] font-sans text-sm text-[#14213D] focus:outline-none focus:ring-2 focus:ring-[#3A86FF]"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="retro-btn bg-[#3A86FF] hover:bg-[#1B60D1] text-white py-3.5 text-sm sm:text-base font-bold shadow-[4px_4px_0px_#14213D]"
                >
                  <span>Send Message Now</span>
                  <span className="font-pixel text-xs">🚀</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
