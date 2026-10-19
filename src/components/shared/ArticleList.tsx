"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Article } from "@/data/articles";

function ArticleRow({ article }: { article: Article }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-between group overflow-hidden rounded-xl"
      style={{
        padding: "14px 16px",
        marginBottom: "6px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Subtle flowing wash */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{
          background: "var(--lavender-soft)",
          transformOrigin: "left center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 pr-6">
        <p
          className="text-xs mb-1"
          style={{ color: "var(--text-muted)" }}
        >
          {article.date} · {article.publication}
        </p>
        <p
          className="text-sm font-medium leading-snug"
          style={{ color: "var(--text-primary)" }}
        >
          {article.title}
        </p>
      </div>

      {/* Arrow */}
      <motion.span
        animate={{
          rotate: hovered ? -40 : 0,
          scale: hovered ? 1.15 : 1,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative z-10 flex-shrink-0 text-base"
        style={{ color: "var(--text-muted)" }}
      >
        →
      </motion.span>
    </a>
  );
}

export default function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <div>
      {articles.map((article, i) => (
        <ArticleRow key={i} article={article} />
      ))}
    </div>
  );
}