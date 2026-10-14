"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Article } from "@/data/articles";

export default function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <div>
      {articles.map((article, i) => (
        <ArticleRow key={i} article={article} />
      ))}
    </div>
  );
}

function ArticleRow({ article }: { article: Article }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-between py-5 group overflow-hidden"
      style={{ borderBottom: "0.5px solid var(--border)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Flowing colour wash */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ x: "-100%" }}
        animate={{ x: hovered ? "0%" : "-100%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ background: "var(--lavender-soft)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 pr-8">
        <p
          className="text-xs mb-1"
          style={{ color: "var(--text-muted)" }}
        >
          {article.date} · {article.publication}
        </p>
        <p
          className="text-sm font-medium leading-snug transition-colors duration-200"
          style={{ color: "var(--text-primary)" }}
        >
          {article.title}
        </p>
      </div>

      {/* Arrow */}
      <motion.span
        animate={{
          x: hovered ? 3 : 0,
          rotate: hovered ? -45 : 0,
          scale: hovered ? 1.2 : 1,
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