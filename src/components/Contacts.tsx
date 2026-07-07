"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

interface FloatingInputProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function FloatingInput({ label, id, name, type = "text", value, onChange, required = false }: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative py-2 mt-4">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full py-2 bg-transparent border-b border-ice-300/20 text-ice-200 focus:outline-none focus:border-ice-300 transition-colors duration-300"
      />
      <label
        htmlFor={id}
        className={`absolute left-0 bottom-4 text-sm font-mono tracking-wider transition-all duration-300 pointer-events-none ${
          focused || value.length > 0
            ? "transform -translate-y-6 text-[10px] text-ice-300"
            : "text-ice-500"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

interface FloatingTextareaProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

function FloatingTextarea({ label, id, name, value, onChange, required = false }: FloatingTextareaProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative py-2 mt-4">
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full py-2 bg-transparent border-b border-ice-300/20 text-ice-200 focus:outline-none focus:border-ice-300 transition-colors duration-300 h-24 resize-none"
      />
      <label
        htmlFor={id}
        className={`absolute left-0 top-3 text-sm font-mono tracking-wider transition-all duration-300 pointer-events-none ${
          focused || value.length > 0
            ? "transform -translate-y-6 text-[10px] text-ice-300"
            : "text-ice-500"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formState);
    setSubmitStatus({ type: "success", message: "Message sent successfully!" });
    setFormState({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#050810]/95 overflow-hidden px-6 md:px-12"
    >
      {/* Background Watermark */}
      <div className="absolute bottom-[10%] left-[5%] bg-word opacity-[0.05] pointer-events-none select-none">
        HELLO
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1 w-6 bg-ice-300 rounded-full" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-ice-400 uppercase">
                  Contact Form
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-syne text-ice-100 tracking-tight">
                Let's build something remarkable together.
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <FloatingInput
                label="FULL NAME"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                required
              />

              <FloatingInput
                label="EMAIL ADDRESS"
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleInputChange}
                required
              />

              <FloatingTextarea
                label="MESSAGE"
                id="message"
                name="message"
                value={formState.message}
                onChange={handleTextareaChange}
                required
              />

              <div className="flex">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative inline-flex items-center justify-center px-10 py-4 border border-ice-300 bg-transparent text-ice-300 font-mono text-xs uppercase tracking-widest overflow-hidden rounded-md transition-all duration-500 hover:shadow-[0_0_30px_rgba(125,211,252,0.3)] hover:bg-ice-300 hover:text-[#050810] disabled:opacity-50 clickable"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE →"}
                </button>
              </div>
            </form>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 glass-card border border-ice-300/20 text-ice-300 text-xs font-mono rounded-lg"
              >
                {submitStatus.message}
              </motion.div>
            )}
          </div>

          {/* Right Column: Info & Socials */}
          <div className="lg:col-span-5 space-y-10 lg:pl-12 lg:border-l border-ice-300/10 h-full flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-ice-500 uppercase block mb-1">
                  Email
                </span>
                <a
                  href="mailto:hello@yourname.com"
                  className="text-lg font-mono text-ice-300 hover:text-ice-100 transition-colors clickable"
                >
                  hello@yourname.com
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-widest text-ice-500 uppercase block mb-1">
                  Location
                </span>
                <p className="text-base text-ice-300 font-sans">
                  Indonesia 🇮🇩
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-widest text-ice-500 uppercase block mb-1">
                  Availability
                </span>
                <p className="text-sm text-ice-400 font-mono tracking-wider">
                  Open to Freelance & Collaborations
                </p>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="space-y-4 pt-10 border-t border-ice-300/10">
              <span className="text-[10px] font-mono tracking-widest text-ice-500 uppercase block">
                Connect
              </span>
              <div className="flex gap-4">
                {[
                  {
                    name: "GitHub",
                    href: "https://github.com",
                    icon: (
                      <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                      </svg>
                    ),
                  },
                  {
                    name: "LinkedIn",
                    href: "https://linkedin.com",
                    icon: (
                      <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Instagram",
                    href: "https://instagram.com",
                    icon: (
                      <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ),
                  },
                  {
                    name: "YouTube",
                    href: "https://youtube.com",
                    icon: (
                      <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full border border-ice-300/10 bg-ice-950/20 flex items-center justify-center text-ice-400 hover:bg-ice-300 hover:text-[#050810] hover:shadow-[0_0_20px_rgba(125,211,252,0.4)] hover:scale-115 transition-all duration-300 cursor-none clickable"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}