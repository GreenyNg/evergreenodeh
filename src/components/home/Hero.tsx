"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const floatingProjects = [
  {
    title: "Luddy App",
    tags: "AI · Mobile · UX Design",
    badge: "First of its kind",
    accent: "#c8b4e8",
    accentSoft: "rgba(200, 180, 232, 0.15)",
    color: "#7a6eb0",
    offset: "0px",
  },
  {
    title: "Beacon ATS",
    tags: "Internal Tool · Systems Design",
    badge: "80% faster hiring",
    accent: "#a8d0b8",
    accentSoft: "rgba(168, 208, 184, 0.15)",
    color: "#5a8a6a",
    offset: "32px",
  },
  {
    title: "DevFest SE Lagos",
    tags: "Event Design · Leadership",
    badge: "First in Lagos",
    accent: "#f0b8a0",
    accentSoft: "rgba(240, 184, 160, 0.15)",
    color: "#c07050",
    offset: "0px",
  },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(200,180,232,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-20 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,208,184,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          transform: "translate(-30%, 0)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(240,184,160,0.12) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full pt-40 pb-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          {/* Left — copy */}
          <div className="flex-1 max-w-xl">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
            >
              
              <span
              className="block w-5 h-px"
              style={{ background: "var(--color-lavender)" }}
              />
              <div className="flex items-center gap-2">
                <div
                className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0"
                style={{
                  border: "1.5px solid var(--surface-border)",
                  background: "var(--lavender-soft)",
                }}
                >
                  <img
                  src="/images/avatar.jpg"
                  alt="Evergreen Odeh"
                  className="w-full h-full object-cover"
                  />
                  </div>
                  <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--text-muted)" }}
                  >
                    Hi, I&apos;m Evergreen Odeh
                    </span>
                    </div>
                    </motion.div>

            <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-4 md:mb-6"
            style={{ color: "var(--text-primary)" }}
            >
              Product Designer,{" "}
              <em style={{ color: "var(--text-accent)" }}>
                AI-Enabled Builder
              </em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base md:text-lg leading-relaxed mb-10 font-light max-w-md"
              style={{ color: "var(--text-secondary)" }}
            >
              Founders come to me to shape things that don&apos;t exist yet. I
              use AI to ship faster, without sacrificing quality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 mask-hover mask-lavender glass"
                style={{ color: "var(--text-accent)" }}
              >
                View work ↓
              </Link>
              <Link
                href="mailto:everodeh48@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-300 hover:scale-105"
                style={{ color: "var(--text-muted)" }}
              >
                Get in touch →
              </Link>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-5 mt-10"
            >
              {["LinkedIn", "Substack", "Dribbble", "Figma", "YouTube"].map(
                (s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-xs transition-colors duration-200 hover:text-accent"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {s}
                  </a>
                )
              )}
            </motion.div>
          </div>

          {/* Right — floating project cards */}
          <div className="hidden lg:flex flex-col gap-4 pt-8 min-w-[200px]">
            {floatingProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                style={{ marginLeft: project.offset }}
              >
                <div
                  className="glass rounded-2xl p-4 w-52 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg mask-hover"
                  style={
                    {
                      "--mask-color": project.accentSoft,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="w-7 h-0.5 rounded-full mb-3"
                    style={{ background: project.accent }}
                  />
                  <p
                    className="text-xs font-medium mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </p>
                  <p
                    className="text-xs mb-3"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.tags}
                  </p>
                  <span
                    className="inline-block px-2 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: project.accentSoft,
                      color: project.color,
                    }}
                  >
                    {project.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}