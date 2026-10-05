"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

const tabs = [
  { id: "product", label: "Product" },
  { id: "branding", label: "Branding" },
  { id: "community", label: "Community" },
  { id: "ai", label: "AI Builds" },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.4 }}
        className="group glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg mask-hover"
        style={{ ["--mask-color" as string]: project.accentSoft }}
      >
        {/* Image placeholder */}
        <div
          className="w-full h-48 flex items-center justify-center relative overflow-hidden"
          style={{ background: project.accentSoft }}
        >
          <div
            className="w-16 h-16 rounded-2xl opacity-40"
            style={{ background: project.accent }}
          />
          {project.isFirst && (
            <div
              className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.7)",
                color: project.color ?? project.accent,
                backdropFilter: "blur(8px)",
              }}
            >
              ↗ {project.firstLabel}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div
            className="w-6 h-0.5 rounded-full mb-3"
            style={{ background: project.accent }}
          />
          <h3
            className="text-sm font-medium leading-snug mb-1"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h3>
          <p
            className="text-xs mb-4 leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {project.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: project.accentSoft,
                  color: "var(--text-secondary)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stat */}
          {project.stat && (
            <div>
              <p
                className="font-serif text-2xl"
                style={{ color: "var(--text-primary)" }}
              >
                {project.stat}
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                {project.statLabel}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<Project["tab"]>("product");

  const filtered = projects.filter((p) => p.tab === activeTab);

  return (
    <section
      id="projects"
      className="py-24"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Tabs */}
        <div className="flex items-center gap-1 mb-12 glass rounded-full px-2 py-2 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Project["tab"])}
              className="px-5 py-2 rounded-full text-xs font-medium transition-all duration-300"
              style={{
                background:
                  activeTab === tab.id
                    ? "rgba(122, 110, 176, 0.15)"
                    : "transparent",
                color:
                  activeTab === tab.id
                    ? "var(--text-accent)"
                    : "var(--text-muted)",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}