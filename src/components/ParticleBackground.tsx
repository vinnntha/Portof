"use client";

import { useEffect, useRef } from "react";

type ShapeKind = "dot" | "ring" | "cross" | "diamond";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  size: number;
  rotation: number;
  rotSpeed: number;
  opacity: number;
  rgb: string;
  shape: ShapeKind;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  rgb: string;
}

const PALETTE = [
  "58, 134, 255",   // #3A86FF blue
  "189, 178, 255",  // #BDB2FF lavender
  "255, 166, 193",  // soft pink accent
  "20, 33, 61",     // #14213D ink
];

const SHAPES: ShapeKind[] = ["dot", "ring", "cross", "diamond"];

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    let animationFrameId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    let ripples: Ripple[] = [];
    let lastScrollY = window.scrollY;

    const mouse = {
      x: -9999,
      y: -9999,
      active: false,
    };

    const createParticle = (): Particle => {
      const speedScale = 0.28;
      const baseVx = (Math.random() - 0.5) * speedScale;
      const baseVy = (Math.random() - 0.5) * speedScale;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: baseVx,
        vy: baseVy,
        baseVx,
        baseVy,
        size: Math.random() * 3.5 + 2.5,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.012,
        opacity: Math.random() * 0.24 + 0.14,
        rgb: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      };
    };

    const initParticles = () => {
      particles = [];
      const count = width < 768 ? 14 : 36;
      for (let i = 0; i < count; i++) {
        particles.push(createParticle());
      }
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const drawShape = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.strokeStyle = `rgba(${p.rgb}, ${p.opacity})`;
      ctx.fillStyle = `rgba(${p.rgb}, ${p.opacity})`;
      ctx.lineWidth = 1.5;

      if (p.shape === "dot") {
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.55, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === "ring") {
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.9, 0, Math.PI * 2);
        ctx.stroke();
      } else if (p.shape === "cross") {
        const arm = p.size * 0.85;
        ctx.beginPath();
        ctx.moveTo(-arm, 0);
        ctx.lineTo(arm, 0);
        ctx.moveTo(0, -arm);
        ctx.lineTo(0, arm);
        ctx.stroke();
      } else {
        const s = p.size * 1.1;
        ctx.strokeRect(-s / 2, -s / 2, s, s);
      }

      ctx.restore();
    };

    const renderFrame = (staticOnly = false) => {
      ctx.clearRect(0, 0, width, height);

      const scrollDelta = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!staticOnly) {
          // Subtle scroll parallax displacement
          p.y -= scrollDelta * 0.08;

          // Smooth cursor repulsion on non-touch screens
          if (!isCoarsePointer && mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const distSq = dx * dx + dy * dy;
            const influenceRadius = 135;

            if (distSq < influenceRadius * influenceRadius && distSq > 1) {
              const dist = Math.sqrt(distSq);
              const force = ((influenceRadius - dist) / influenceRadius) * 0.45;
              p.vx += (dx / dist) * force;
              p.vy += (dy / dist) * force;
            }
          }

          // Ease velocity gently back to base drift
          p.vx += (p.baseVx - p.vx) * 0.04;
          p.vy += (p.baseVy - p.vy) * 0.04;

          p.x += p.vx;
          p.y += p.vy;
          p.rotation += p.rotSpeed;

          // Wrap smoothly around screen edges
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }

        drawShape(p);

        // Draw subtle constellation links near cursor
        if (!staticOnly && !isCoarsePointer && mouse.active) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < 145) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(58, 134, 255, ${(1 - mDist / 145) * 0.16})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            for (let j = i + 1; j < particles.length; j++) {
              const other = particles[j];
              const pdx = p.x - other.x;
              const pdy = p.y - other.y;
              const pDist = Math.sqrt(pdx * pdx + pdy * pdy);
              if (pDist < 110) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(other.x, other.y);
                ctx.strokeStyle = `rgba(189, 178, 255, ${(1 - pDist / 110) * 0.18})`;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          }
        }
      }

      // Draw interactive click ripples
      if (!staticOnly) {
        for (let i = ripples.length - 1; i >= 0; i--) {
          const r = ripples[i];
          r.radius += 2.6;
          r.opacity *= 0.94;

          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${r.rgb}, ${r.opacity})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          if (r.radius >= r.maxRadius || r.opacity <= 0.02) {
            ripples.splice(i, 1);
          }
        }
      }
    };

    const animate = () => {
      renderFrame(false);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (prefersReducedMotion) return;
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 6,
        maxRadius: 90,
        opacity: 0.35,
        rgb: Math.random() > 0.5 ? "58, 134, 255" : "189, 178, 255",
      });
    };

    window.addEventListener("resize", resizeCanvas, { passive: true });
    if (!isCoarsePointer) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    }
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    resizeCanvas();
    if (prefersReducedMotion) {
      renderFrame(true);
    } else {
      animate();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}
