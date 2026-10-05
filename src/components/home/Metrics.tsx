"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { metrics } from "@/data/metrics";

export default function Metrics() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="py-20"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Desktop — all visible */}
        <div className="hidden md:flex items-end justify-between border-t pt-10"
          style={{ borderColor: "var(--border)" }}
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group cursor-default"
            >
              <p
                className="font-serif text-4xl lg:text-5xl mb-2 transition-colors duration-300 group-hover:opacity-80"
                style={{ color: "var(--text-primary)" }}
              >
                {metric.value}
              </p>
              <div
                className="w-0 group-hover:w-full h-px rounded-full mx-auto mb-2 transition-all duration-500"
                style={{ background: metric.accent }}
              />
              <p
                className="text-xs max-w-24 mx-auto leading-snug"
                style={{ color: "var(--text-muted)" }}
              >
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile — carousel */}
        <div className="md:hidden">
          <div className="text-center py-10">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="font-serif text-6xl mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              {metrics[activeIndex].value}
            </motion.p>
            <div
              className="w-8 h-px rounded-full mx-auto mb-3"
              style={{ background: metrics[activeIndex].accent }}
            />
            <p
              className="text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              {metrics[activeIndex].label}
            </p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2">
            {metrics.map((metric, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  background:
                    activeIndex === i ? metric.accent : "var(--border)",
                  transform: activeIndex === i ? "scale(1.5)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}