"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function CaseStudyLayout({ project }: { project: Project }) {
  return (
    <article
      className="min-h-screen pt-24 pb-32"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-3xl mx-auto px-6 md:px-10">

        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            href="/#projects"
            className="text-xs transition-colors duration-200 hover:text-accent"
            style={{ color: "var(--text-muted)" }}
          >
            ← Back to work
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: project.accentSoft,
                  color: project.accent,
                }}
              >
                {tag}
              </span>
            ))}
            {project.isFirst && (
              <span
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: project.accentSoft,
                  color: project.accent,
                }}
              >
                ↗ {project.firstLabel}
              </span>
            )}
          </div>

          {/* Title */}
          <h1
            className="font-serif text-4xl md:text-5xl leading-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h1>
          <p
            className="text-base leading-relaxed font-light"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.subtitle}
          </p>
        </motion.div>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-6 mb-12 grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {project.timeline && (
            <div>
              <p className="text-xs uppercase tracking-widest mb-1"
                style={{ color: "var(--text-muted)" }}>
                Timeline
              </p>
              <p className="text-sm font-medium"
                style={{ color: "var(--text-primary)" }}>
                {project.timeline}
              </p>
            </div>
          )}
          {project.role && (
            <div className="col-span-2 md:col-span-1">
              <p className="text-xs uppercase tracking-widest mb-1"
                style={{ color: "var(--text-muted)" }}>
                Role
              </p>
              <p className="text-sm font-medium"
                style={{ color: "var(--text-primary)" }}>
                {project.role}
              </p>
            </div>
          )}
          {project.team && (
            <div>
              <p className="text-xs uppercase tracking-widest mb-1"
                style={{ color: "var(--text-muted)" }}>
                Team
              </p>
              <p className="text-sm font-medium"
                style={{ color: "var(--text-primary)" }}>
                {project.team}
              </p>
            </div>
          )}
        </motion.div>

        {/* Thumbnail placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="rounded-2xl overflow-hidden mb-16 flex items-center justify-center"
          style={{
            background: project.accentSoft,
            aspectRatio: "16/9",
          }}
        >
          <div
            className="w-16 h-16 rounded-2xl opacity-40"
            style={{ background: project.accent }}
          />
        </motion.div>

        {/* Problem */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "var(--text-accent)" }}
          >
            The Problem
          </p>
          <p
            className="text-base leading-relaxed font-light"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.problem}
          </p>
        </motion.section>

        {/* Divider */}
        <div className="mb-12" style={{ borderTop: "0.5px solid var(--border)" }} />

        {/* Approach */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "var(--text-accent)" }}
          >
            The Approach
          </p>
          <p
            className="text-base leading-relaxed font-light"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.approach}
          </p>
        </motion.section>

        <div className="mb-12" style={{ borderTop: "0.5px solid var(--border)" }} />

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ color: "var(--text-accent)" }}
          >
            Key Features
          </p>
          <div className="space-y-4">
            {project.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-xl p-5"
              >
                <p
                  className="text-sm font-medium mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {feature.title}
                </p>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="mb-12" style={{ borderTop: "0.5px solid var(--border)" }} />

        {/* Outcome */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ color: "var(--text-accent)" }}
          >
            Outcome
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.outcome.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-xl p-5 text-center"
              >
                <p
                  className="font-serif text-3xl mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.value}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Links */}
        {(project.liveUrl || project.behanceUrl) && (
          <div className="flex gap-3 mb-16">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium glass transition-all duration-300 hover:scale-105 mask-hover mask-lavender"
                style={{ color: "var(--text-accent)" }}
              >
                View live →
              </a>
            )}
            {project.behanceUrl && (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium glass transition-all duration-300 hover:scale-105"
                style={{ color: "var(--text-muted)" }}
              >
                View on Behance →
              </a>
            )}
          </div>
        )}

        {/* CTA */}
        <div
          className="text-center pt-12"
          style={{ borderTop: "0.5px solid var(--border)" }}
        >
          <p
            className="font-serif italic text-2xl mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Got a gap that needs filling?
          </p>
          <a
            href="mailto:everodeh48@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium glass transition-all duration-300 hover:scale-105 mask-hover mask-lavender mt-4"
            style={{ color: "var(--text-accent)" }}
          >
            Get in touch →
          </a>
        </div>

      </div>
    </article>
  );
}