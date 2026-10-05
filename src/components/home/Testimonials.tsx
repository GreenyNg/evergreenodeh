"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

const typeColors: Record<string, string> = {
  client: "#a8d0b8",
  collaborator: "#c8b4e8",
  mentee: "#f0b8a0",
};

const typeLabels: Record<string, string> = {
  client: "Client",
  collaborator: "Collaborator",
  mentee: "Mentee",
};

export default function Testimonials() {
  return (
    <section
      className="py-24"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Don&apos;t Just Take My Word For It
          </h2>
          <p
            className="text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            Real words from real people I&apos;ve worked with — clients,
            collaborators, and mentees.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="columns-1 md:columns-2 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 break-inside-avoid mask-hover mask-lavender"
            >
              <p
                className="text-sm leading-relaxed mb-6 font-light"
                style={{ color: "var(--text-secondary)" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="text-xs font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {t.role}
                    {t.company ? ` · ${t.company}` : ""}
                  </p>
                </div>
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{
                    background: `${typeColors[t.type]}22`,
                    color: typeColors[t.type],
                  }}
                >
                  {typeLabels[t.type]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="mailto:everodeh48@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 glass mask-hover mask-lavender"
            style={{ color: "var(--text-accent)" }}
          >
            Get in Touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}