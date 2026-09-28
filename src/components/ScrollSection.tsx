interface ScrollSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

// ponytail: native static section container. Ceil: zero continuous scroll matrix transforms.
// Add framer-motion transforms only if individual section needs isolated parallax.
export default function ScrollSection({ children, id, className = "" }: ScrollSectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full ${id !== "hero" ? "scroll-section" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
