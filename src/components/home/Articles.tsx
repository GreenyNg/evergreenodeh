"use client";

import { motion } from "framer-motion";
import { articles } from "@/data/articles";
import ArticleList from "../shared/ArticleList";

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
              <ArticleList articles={articles} />
      </div>
    </section>
  );
}