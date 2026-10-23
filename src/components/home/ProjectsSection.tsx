"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { useProjects } from "@/lib/ProjectsContext";

type Quadrant = { id: string; label: string; short: string };

const quadrants: Quadrant[] = [
  { id: "all", label: "All", short: "All" },
  { id: "product", label: "Product", short: "Product" },
  { id: "branding", label: "Branding", short: "Brand" },
  { id: "community", label: "Community", short: "Comm" },
  { id: "ai", label: "AI Builds", short: "AI" },
];

const quadrantIds = ["product", "branding", "community", "ai"];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative rounded-2xl overflow-hidden cursor-pointer"
        style={{
          transition: "box-shadow 0.3s ease",
          boxShadow: hovered
            ? `0 16px 40px ${project.accentSoft}`
            : "0 2px 8px rgba(0,0,0,0.04)",
          aspectRatio: "4/3",
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: project.accentSoft }}
        >
          <div
            className="w-12 h-12 rounded-2xl opacity-50"
            style={{ background: project.accent }}
          />
        </div>

        <motion.div
          initial={false}
          animate={{ y: hovered ? 0 : "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 p-4"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderTop: "0.5px solid rgba(255,255,255,0.2)",
          }}
        >
          <div
            className="w-5 h-0.5 rounded-full mb-2"
            style={{ background: project.accent }}
          />
          <p
            className="text-xs font-medium leading-snug mb-1"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </p>
          <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>
            {project.tags.slice(0, 2).join(" · ")}
          </p>
          <div className="flex flex-wrap gap-1">
            {project.isFirst && (
              <span
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: project.accent,
                }}
              >
                ↗ First
              </span>
            )}
            {project.stat && (
              <span
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: project.accent,
                }}
              >
                ↑ {project.stat} {project.statLabel}
              </span>
            )}
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}

function TabBar({
  quadrants,
  activeTab,
  activeQuadrant,
  handleTabClick,
}: {
  quadrants: Quadrant[];
  activeTab: string;
  activeQuadrant: string;
  handleTabClick: (id: string) => void;
}) {
  const isHighlighted = (id: string) => {
    if (activeTab !== "all") return activeTab === id;
    if (id === "all") return activeQuadrant === "product" || activeQuadrant === "";
    return activeQuadrant === id;
  };

  return (
    <div className="glass rounded-full px-2 py-1.5 flex items-center gap-1 shadow-lg">
      {quadrants.map((q) => (
        <button
          key={q.id}
          onClick={() => handleTabClick(q.id)}
          className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
          style={{
            background: isHighlighted(q.id)
              ? "rgba(122, 110, 176, 0.15)"
              : "transparent",
            color: isHighlighted(q.id)
              ? "var(--text-accent)"
              : "var(--text-muted)",
          }}
        >
          <span className="hidden sm:inline">{q.label}</span>
          <span className="sm:hidden">{q.short}</span>
        </button>
      ))}
    </div>
  );
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const { setProjectsActive } = useProjects();
  const [activeQuadrant, setActiveQuadrant] = useState("product");
  const sectionRef = useRef<HTMLElement>(null);
  const quadrantRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const inSection = rect.top < window.innerHeight && rect.bottom > 120;
        setProjectsActive(inSection);
      }
      let current = "product";
      for (const q of quadrantIds) {
        const el = quadrantRefs.current[q];
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight * 0.5) current = q;
        }
      }
      setActiveQuadrant(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToQuadrant = (id: string) => {
    const el = quadrantRefs.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleTabClick = (id: string) => {
  setActiveTab(id);
  if (id !== "all") {
    scrollToQuadrant(id);
  } else {
    // Reset — scroll back to top of section
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

  const isQuadrantDimmed = (id: string) =>
    activeTab !== "all" && activeTab !== id;

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--text-muted)" }}
          >
            Selected work
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            Things I&apos;ve built,{" "}
            <em style={{ color: "var(--text-accent)" }}>
              gaps I&apos;ve filled.
            </em>
          </h2>
        </motion.div>

        {/* Desktop — 2x2 quadrant grid */}
        <div
          className="hidden md:grid grid-cols-2"
          style={{
            border: "0.5px solid var(--border)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {quadrantIds.map((q, qi) => {
            const label = quadrants.find((t) => t.id === q)?.label ?? q;
            const qProjects = projects.filter((p) => p.tab === q);
            const isRight = qi % 2 === 1;
            const isBottom = qi >= 2;

            return (
              <motion.div
                key={q}
                ref={(el) => { quadrantRefs.current[q] = el; }}
                animate={{ opacity: isQuadrantDimmed(q) ? 0.25 : 1 }}
                transition={{ duration: 0.4 }}
                className="p-6"
                style={{
                  background: "var(--bg)",
                  borderRight: !isRight ? "0.5px solid var(--border)" : "none",
                  borderBottom: !isBottom
                    ? "0.5px solid var(--border)"
                    : "none",
                }}
              >
                <p
                  className="text-xs tracking-widest uppercase font-medium mb-5"
                  style={{ color: "var(--text-accent)" }}
                >
                  {label}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {qProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile — single column */}
        <div className="md:hidden space-y-10">
          {quadrantIds.map((q) => {
            const label = quadrants.find((t) => t.id === q)?.label ?? q;
            const qProjects = projects.filter((p) => p.tab === q);
            return (
              <div key={q} ref={(el) => { quadrantRefs.current[q] = el; }}>
                <p
                  className="text-xs tracking-widest uppercase font-medium mb-4"
                  style={{ color: "var(--text-accent)" }}
                >
                  {label}
                </p>
                <div className="flex flex-col gap-3">
                  {qProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tab bar — sticky to bottom of viewport, anchored to end of section */}
        <div
          className="sticky bottom-6 z-50 flex justify-center mt-12"
          style={{ pointerEvents: "none" }}
        >
          <div style={{ pointerEvents: "auto" }}>
            <TabBar
            quadrants={quadrants}
            activeTab={activeTab}
            activeQuadrant={activeQuadrant}
            handleTabClick={handleTabClick}
            />
          </div>
        </div>

      </div>
    </section>
  );
}