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
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // ICE BLUE COLORS
        ice: {
          50: "#f0f9ff",
          100: "#e0f7ff",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        // BRAND COLORS (used in App.tsx wrapper)
        brand: {
          base: "#050a12",
          "text-primary": "#e0f7ff",
          primary: "#0ea5e9",
        },
      },
      borderRadius: {
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