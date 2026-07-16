"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useFadeIn, useStaggerFadeIn, useParallax } from "../hooks/useScrollEffect";
import codingProjectImg from "../assets/coding_project.png";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A full-stack web application built with React and Node.js",
    image: codingProjectImg,
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Project Beta",
    description: "A mobile app for task management with real-time sync",
    image: codingProjectImg,
    tags: ["React Native", "Firebase", "Expo"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "A data visualization dashboard for analytics",
    image: codingProjectImg,
    tags: ["D3.js", "Python", "PostgreSQL"],
    link: "#",
    github: "#",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      className="project-card group relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm border border-ice-900/10 hover:border-ice-700/20 transition-all duration-500 shadow-[0_0_15px_color-mix(in_oklch,var(--primary)_20%,transparent)] hover:shadow-[0_0_25px_color-mix(in_oklch,var(--primary)_40%,transparent)]"
    >
      {/* Project Image */}
      <div className="relative aspect-video bg-ice-900/20 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklch,var(--primary)_20%,transparent)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-ice-300 mb-3">{project.title}</h3>
        <p className="text-ice-400 mb-4 line-clamp-3">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-ice-900/20 text-ice-400 text-xs rounded-full border border-ice-800/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-3 gap-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center px-5 py-3 bg-ice-500/20 backdrop-blur-sm border border-ice-500/30 text-ice-400 font-medium hover:bg-ice-500/30 hover:text-ice-500 transition-all duration-500 rounded-lg shadow-[0_0_10px_color-mix(in_oklch,var(--primary)_20%,transparent)] hover:shadow-[0_0_15px_color-mix(in_oklch,var(--primary)_40%,transparent)]"
          >
            Live Demo
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center px-5 py-3 bg-ice-900/20 backdrop-blur-sm border border-ice-700/30 text-ice-300 font-medium hover:bg-ice-900/30 hover:text-ice-400 transition-all duration-500 rounded-lg shadow-[0_0_10px_color-mix(in_oklch,var(--secondary)_20%,transparent)] hover:shadow-[0_0_15px_color-mix(in_oklch,var(--secondary)_40%,transparent)]"
            >
              GitHub
              <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useFadeIn({
    trigger: titleRef.current,
    start: "top 70%",
  });

  useStaggerFadeIn({
    targets: Array.from(sectionRef.current?.querySelectorAll(".project-card") ?? []),
    stagger: 0.15,
    start: "top 80%",
  });

  useParallax({
    target: sectionRef.current,
    speed: 15,
  });

  return (
    <section ref={sectionRef} id="projects" className="relative py-20 bg-black/50">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklch,var(--primary)_10%,transparent)_0%,color-mix(in_oklch,var(--accent)_10%,transparent)_30%,transparent_70%)] animate-[footer-breathe_10s_ease-in-out_infinite_alternate] blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center text-ice-400 mb-16"
        >
          My Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}