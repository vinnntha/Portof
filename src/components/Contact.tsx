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
    <div className="py-10 sm:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Pill */}
      <div className="flex flex-col items-start mb-6 sm:mb-14">
        <div className="pill-badge bg-white border-2 border-[#14213D] mb-2.5 sm:mb-4">
          <span className="font-pixel text-[10px] text-[#3A86FF]">06 //</span>
          <span className="font-mono text-xs font-bold text-[#14213D]">GET IN TOUCH</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#14213D] tracking-tight leading-tight">
          Let's Build Something Awesome.
        </h2>
        <p className="font-mono text-[10px] sm:text-sm text-[#3A86FF] mt-1 sm:mt-2 font-bold tracking-wide leading-relaxed">
          OPEN FOR FREELANCE, CREATIVE COLLABORATIONS, OR FULL-TIME OPPORTUNITIES
        </p>
      </div>

      {/* Main Retro Contact Module */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white border-2 sm:border-[3px] border-[#14213D] rounded-2xl sm:rounded-5xl p-4 sm:p-10 lg:p-14 shadow-[4px_4px_0px_#14213D] sm:shadow-[8px_8px_0px_#14213D]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14">

          {/* Left Column: Direct Links & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            <div>
              <span className="font-pixel text-[9px] sm:text-[10px] text-[#3A86FF] tracking-wider">
                TRANSMISSION // FAST RESPONSE
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-black text-[#14213D] mt-1.5 mb-3 leading-tight">
                Have a Project Idea? Let's Talk!
              </h3>
              <p className="font-sans text-sm text-[#14213D]/80 leading-relaxed">
                Looking to build a world-class interactive website, need research-driven UI/UX design, or cinematic aerial drone footage for your brand? I'm ready to help bring your vision from concept to launch.
              </p>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="p-4 sm:p-5 bg-[#FFD6E0] border-2 border-[#14213D] rounded-2xl sm:rounded-3xl shadow-[3px_3px_0px_#14213D] sm:shadow-[4px_4px_0px_#14213D]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-pixel text-[9px] text-[#14213D]">
                  DIRECT CHAT
                </span>
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-[#14213D] mb-1">
                WhatsApp Priority
              </h4>
              <p className="font-sans text-xs text-[#14213D]/75 mb-3 sm:mb-4 leading-relaxed">
                Fastest response for project briefs, inquiries, and proposals.
              </p>
              <a
                href="https://wa.me/085336337789?text=Hello%20Averill,%20I'm%20interested%20in%20working%20together%20on%20a%20project..."
                target="_blank"
                rel="noopener noreferrer"
                className="retro-btn bg-[#3A86FF] text-white w-full text-center text-xs sm:text-sm font-bold"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Social Channels Pills */}
            <div>
              <span className="font-mono text-xs font-bold text-[#14213D] block mb-2.5 uppercase">
                Find Averill Online:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "GitHub", url: "https://github.com" },
                  { name: "LinkedIn", url: "https://linkedin.com" },
                  { name: "Instagram", url: "https://instagram.com" },
                  { name: "Email", url: "mailto:averillkevinatha@gmail.com" },
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 sm:px-3.5 rounded-full bg-[#FFF4F4] hover:bg-[#BDB2FF] border border-[#14213D] font-mono text-xs font-bold text-[#14213D] shadow-[2px_2px_0px_#14213D] active:-translate-y-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#FFF4F4] border-2 border-[#14213D] rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-[3px_3px_0px_#14213D] sm:shadow-[4px_4px_0px_#14213D]">
            {isSubmitted ? (
              <div className="py-10 sm:py-16 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#BDB2FF] border-2 border-[#14213D] rounded-full mx-auto flex items-center justify-center font-pixel text-2xl mb-4 shadow-[3px_3px_0px_#14213D]">
                  ✓
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#14213D] mb-2">
                  Message Sent!
                </h3>
                <p className="font-sans text-sm text-[#14213D]/80 max-w-sm mx-auto mb-6 leading-relaxed">
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
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b-2 border-[#14213D]/10">
                  <span className="font-pixel text-[9px] sm:text-[10px] text-[#3A86FF]">
                    CONTACT FORM
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs text-[#14213D]/60">
                    *Required
                  </span>
                </div>

                {/* Name + Email side-by-side on mobile too if space, stacked otherwise */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block font-mono text-xs font-bold text-[#14213D] mb-1.5">
                      Name / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. John Doe"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-[#14213D] rounded-xl sm:rounded-2xl shadow-[2px_2px_0px_#14213D] font-sans text-sm text-[#14213D] focus:outline-none focus:ring-2 focus:ring-[#3A86FF]"
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-[#14213D] rounded-xl sm:rounded-2xl shadow-[2px_2px_0px_#14213D] font-sans text-sm text-[#14213D] focus:outline-none focus:ring-2 focus:ring-[#3A86FF]"
                    />
                  </div>
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
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-[#14213D] rounded-xl sm:rounded-2xl shadow-[2px_2px_0px_#14213D] font-sans text-sm text-[#14213D] focus:outline-none focus:ring-2 focus:ring-[#3A86FF]"
                  >
                    <option value="UI/UX & Web Development">Website & UI/UX Design</option>
                    <option value="Drone Aerial Cinematography">Drone Pilot & 4K Aerial Video</option>
                    <option value="Videography & Commercial Reel">Videography & Motion Editing</option>
                    <option value="Full Creative Collaboration">Multi-Disciplinary Creative Collaboration</option>
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
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-[#14213D] rounded-xl sm:rounded-2xl shadow-[2px_2px_0px_#14213D] font-sans text-sm text-[#14213D] focus:outline-none focus:ring-2 focus:ring-[#3A86FF] resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="retro-btn bg-[#3A86FF] hover:bg-[#1B60D1] active:bg-[#1B60D1] text-white py-3 sm:py-3.5 text-sm sm:text-base font-bold shadow-[3px_3px_0px_#14213D] sm:shadow-[4px_4px_0px_#14213D]"
                >
                  <span>Send Message Now</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
