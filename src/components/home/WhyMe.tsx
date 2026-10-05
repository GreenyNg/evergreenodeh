"use client";

import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Design grounded in clarity, not guesswork",
    description:
      "I turn complex ideas into thoughtful, intuitive experiences that feel effortless to use.",
    accent: "#c8b4e8",
  },
  {
    number: "02",
    title: "Business and product strategy baked in",
    description:
      "I design with growth, market fit, and long-term vision in mind - not just aesthetics.",
    accent: "#a8d0b8",
  },
  {
    number: "03",
    title: "A deep-thinking co-creator",
    description:
      "I collaborate closely, ask the right questions, and care deeply about outcomes, not just deliverables.",
    accent: "#f0b8a0",
  },
  {
    number: "04",
    title: "An AI-native mindset",
    description:
      "I lead with the problem - not the tool. I use AI where it fits, to make ideas move faster, smarter, and more creatively.",
    accent: "#a8c0e8",
  },
  {
    number: "05",
    title: "Technical fluency meets craft",
    description:
      "From advanced Figma prototyping to scalable design systems, I build with precision and foresight in mind.",
    accent: "#e8b8d0",
  },
  {
    number: "06",
    title: "A mentor at heart",
    description:
      "I empower teams, nurture young designers, and share knowledge that multiplies impact long after the project ends.",
    accent: "#c8b4e8",
  },
];

export default function WhyMe() {
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
            Why Working With Me Is Your Best Bet
          </h2>
          <p
            className="text-sm max-w-lg mx-auto leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Design isn&apos;t just how it looks. It&apos;s how it works for
            people, for business, and for what&apos;s next. I bring strategy,
            product thinking, and emerging tech together to help you build the
            right product, faster and smarter.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((value, i) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 mask-hover mask-lavender"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: `${value.accent}22` }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: value.accent }}
                  />
                </div>
                <span
                  className="text-xs font-mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  {value.number}
                </span>
              </div>
              <h3
                className="text-sm font-medium mb-2 leading-snug"
                style={{ color: "var(--text-primary)" }}
              >
                {value.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}