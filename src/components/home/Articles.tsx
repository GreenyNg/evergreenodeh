"use client";

import { motion } from "framer-motion";
import { articles } from "@/data/articles";

export default function Articles() {
  return (
    <section
      className="py-24"
      style={{ background: "var(--bg-secondary)" }}
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
            I Write to Think Better
          </h2>
          <p
            className="text-sm max-w-md mx-auto leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Thoughts on design, AI, business, and better team work — shared as
            I learn, grow, and collaborate.
          </p>
        </motion.div>

        {/* Articles list */}
        <div
          className="border-t"
          style={{ borderColor: "var(--border)" }}
        >
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center justify-between py-5 border-b group transition-all duration-200 mask-hover"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex-1 pr-8">
                <p
                  className="text-xs mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {article.date} · {article.publication}
                </p>
                <p
                  className="text-sm font-medium leading-snug transition-colors duration-200 group-hover:text-accent"
                  style={{ color: "var(--text-primary)" }}
                >
                  {article.title}
                </p>
              </div>
              <span
                className="text-lg transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                style={{ color: "var(--text-muted)" }}
              >
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}