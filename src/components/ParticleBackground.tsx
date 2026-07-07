"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const currentCanvas = canvas;
    const ctx = currentCanvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      currentCanvas.width = window.innerWidth;
      currentCanvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
      color: string;

      constructor() {
        this.x = Math.random() * currentCanvas.width;
        this.y = Math.random() * currentCanvas.height;
        this.size = Math.random() * 2.5 + 1; // Small points
        this.speedX = (Math.random() - 0.5) * 0.50; // Slow movement
        this.speedY = (Math.random() - 0.5) * 0.50;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.fadeSpeed = 0.002 + Math.random() * 0.003;
        this.color = "125, 211, 252";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around boundaries
        if (this.x < 0) this.x = currentCanvas.width;
        if (this.x > currentCanvas.width) this.x = 0;
        if (this.y < 0) this.y = currentCanvas.height;
        if (this.y > currentCanvas.height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 10);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = `rgb(${this.color})`;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow blur
      }
    }

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((currentCanvas.width * currentCanvas.height) / 18000), 200); // Capped at 80 particles
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, currentCanvas.width, currentCanvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-20 w-full h-full bg-brand-base radial-bg"
    />
  );
}
