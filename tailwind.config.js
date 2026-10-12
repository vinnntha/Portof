/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // MANDATORY RETRO-PIXEL / EDITORIAL PALETTE
        blue: {
          DEFAULT: "#3A86FF",
          light: "#5E9EFF",
          dark: "#1B60D1",
        },
        lavender: {
          DEFAULT: "#BDB2FF",
          light: "#D4CEFF",
          dark: "#9986F8",
        },
        pink: {
          DEFAULT: "#FFD6E0",
          light: "#FFEEF2",
          dark: "#F8B4C4",
        },
        blush: {
          DEFAULT: "#FFF4F4",
          alt: "#FAECEC",
        },
        dark: {
          DEFAULT: "#14213D",
          soft: "#243253",
          muted: "#4A5B7D",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        pixel: ['"Press Start 2P"', 'monospace'],
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '48px',
        lg: "var(--radius)",
        md: "var(--radius)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "cubic-bezier": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "footer-breathe": {
          "0%": { transform: "translate(-50%, -50%) scale(1); opacity: 0.6;" },
          "100%": { transform: "translate(-50%, -50%) scale(1.1); opacity: 1;" },
        },
        "footer-scroll-marquee": {
          "from": { transform: "translateX(0);" },
          "to": { transform: "translateX(-50%);" },
        },
        "footer-heartbeat": {
          "0%, 100%": { transform: "scale(1); filter: drop-shadow(0 0 5px color-mix(in oklch, var(--destructive) 50%, transparent));" },
          "15%, 45%": { transform: "scale(1.2); filter: drop-shadow(0 0 10px color-mix(in oklch, var(--destructive) 80%, transparent));" },
          "30%": { transform: "scale(1);" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "footer-breathe": "footer-breathe 8s ease-in-out infinite alternate",
        "footer-scroll-marquee": "footer-scroll-marquee 40s linear infinite",
        "footer-heartbeat": "footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};