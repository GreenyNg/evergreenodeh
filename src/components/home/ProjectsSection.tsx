"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

const quadrants = [
  { id: "all", label: "All" },
  { id: "product", label: "Product" },
  { id: "branding", label: "Branding" },
  { id: "community", label: "Community" },
  { id: "ai", label: "AI Builds" },
];

const quadrantIds = ["product", "branding", "community", "ai"];

function ProjectCard({
  project,
  dimmed,
}: {
  project: Project;
  dimmed: boolean;
}) {
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
          opacity: dimmed ? 0.3 : 1,
          transition: "opacity 0.4s ease, box-shadow 0.3s ease",
          boxShadow: hovered
            ? `0 16px 40px ${project.accentSoft}`
            : "0 2px 8px rgba(0,0,0,0.04)",
          aspectRatio: "4/3",
        }}
      >
        {/* Full thumbnail */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: project.accentSoft }}
        >
          {/* Placeholder — replaced with video/image later */}
          <div
            className="w-12 h-12 rounded-2xl opacity-50"
            style={{ background: project.accent }}
          />
        </div>

        {/* Hover overlay — slides up */}
        <motion.div
          initial={false}
          animate={{
            y: hovered ? 0 : "100%",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 p-4"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderTop: "0.5px solid rgba(255,255,255,0.2)",
          }}
        >
          {/* Accent line */}
          <div
            className="w-5 h-0.5 rounded-full mb-2"
            style={{ background: project.accent }}
          />

          {/* Title */}
          <p
            className="text-xs font-medium leading-snug mb-1"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </p>

          {/* Tags */}
          <p
            className="text-xs mb-2"
            style={{ color: "var(--text-muted)" }}
          >
            {project.tags.slice(0, 2).join(" · ")}
          </p>

          {/* Badges */}
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

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [tabsVisible, setTabsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const quadrantRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inSection = rect.top < window.innerHeight * 0.9 && rect.bottom > 80;
      setTabsVisible(inSection);
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
    }
  };

  const isQuadrantDimmed = (id: string) => {
    return activeTab !== "all" && activeTab !== id;
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="py-24"
        style={{ background: "var(--bg)" }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10">

          {/* Section header */}
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
              const dimmed = isQuadrantDimmed(q);

              return (
                <motion.div
                  key={q}
                  ref={(el) => { quadrantRefs.current[q] = el; }}
                  animate={{ opacity: dimmed ? 0.3 : 1 }}
                  transition={{ duration: 0.4 }}
                  className="p-6"
                  style={{
                    background: "var(--bg)",
                    borderRight: !isRight ? "0.5px solid var(--border)" : "none",
                    borderBottom: !isBottom ? "0.5px solid var(--border)" : "none",
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
                      <ProjectCard
                        key={project.slug}
                        project={project}
                        dimmed={false}
                      />
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
                <div
                  key={q}
                  ref={(el) => { quadrantRefs.current[q] = el; }}
                >
                  <p
                    className="text-xs tracking-widest uppercase font-medium mb-4"
                    style={{ color: "var(--text-accent)" }}
                  >
                    {label}
                  </p>
                  <div className="flex flex-col gap-3">
                    {qProjects.map((project) => (
                      <ProjectCard
                        key={project.slug}
                        project={project}
                        dimmed={false}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Bottom tab bar — truly centered using flexbox on full width */}
      <AnimatePresence>
        {tabsVisible && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              position: "fixed",
              bottom: "24px",
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              zIndex: 50,
              pointerEvents: "none",
            }}
          >
            <div
              className="glass rounded-full px-2 py-1.5 flex items-center gap-1 shadow-lg"
              style={{ pointerEvents: "auto" }}
            >
              {quadrants.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleTabClick(q.id)}
                  className="px-4 py-2 rounded-full text-xs font-medium transition-all duration-300"
                  style={{
                    background:
                      activeTab === q.id
                        ? "rgba(122, 110, 176, 0.15)"
                        : "transparent",
                    color:
                      activeTab === q.id
                        ? "var(--text-accent)"
                        : "var(--text-muted)",
                  }}
                >
                  {q.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}