"use client";

import { motion } from "framer-motion";
import { articles } from "@/data/articles";
import { timeline } from "@/data/timeline";
import { toolsRow1, toolsRow2 } from "@/data/tools";
import PlantGallery from "@/components/about/PlantGallery";
import AITwin from "@/components/shared/AITwin";
import ArticleList from "../shared/ArticleList";

const allTools = [...toolsRow1, ...toolsRow2];

const workflowSteps = [
  {
    number: "01",
    title: "Research",
    description: "Gathering signals. Organizing knowledge. Making sense of domain before generating solutions.",
    tool: "NotebookLM",
    accent: "#c8b4e8",
  },
  {
    number: "02",
    title: "Exploration",
    description: "Pressure-testing ideas. Asking sharp questions. Surfacing the edges of a problem space.",
    tool: "ChatGPT · Claude",
    accent: "#a8d0b8",
  },
  {
    number: "03",
    title: "Prototyping",
    description: "Making ideas tangible. Fast, rough, real. Optimizing for learning speed over polish.",
    tool: "Lovable · v0 · Replit",
    accent: "#f0b8a0",
  },
  {
    number: "04",
    title: "Refinement",
    description: "Introducing structure. Resolving system logic. Turning rough surfaces into considered ones.",
    tool: "Figma",
    accent: "#a8c0e8",
  },
  {
    number: "05",
    title: "Iteration",
    description: "Feedback loops. Repeated cycles. Each pass makes the thinking sharper.",
    tool: "All of the above",
    accent: "#e8b8d0",
  },
];

export default function AboutContent() {
  return (
    <main
      className="min-h-screen pt-32 pb-24"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">

        {/* Opening */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p
            className="text-xs tracking-widest uppercase mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            About me
          </p>
          <h1
            className="font-serif text-4xl md:text-6xl leading-tight mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            I have a habit of showing up{" "}
            <em style={{ color: "var(--text-accent)" }}>
              where things don&apos;t exist yet.
            </em>
          </h1>
          <p
            className="text-base leading-relaxed font-light mb-6 max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            First designer-led Hacktoberfest at Unilag. First DevFest Student
            Edition in Lagos. First in-house ticketing system for GDG Lagos. A
            language buddy that feels human without pretending to be one.
          </p>
          <p
            className="text-base leading-relaxed font-light max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            I don&apos;t go looking for firsts. I just notice the gap and walk in.
          </p>
        </motion.div>

        {/* Who */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 pb-20"
          style={{ borderBottom: "0.5px solid var(--border)" }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            Who I am
          </p>
          <p
            className="text-base leading-relaxed font-light mb-4 max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Product designer. AI-enabled builder. 4+ years across fintech,
            edtech, AI, community, events, R&D, and more. Currently learning
            what lives underneath the things I design.
          </p>
          <p
            className="text-base leading-relaxed font-light max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            I&apos;ve spent a lot of time building communities, mentoring
            designers, and creating spaces for people to find their footing.
            Around 100 people so far. It keeps pulling me back.
          </p>
        </motion.div>

        {/* AI Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 pb-20"
          style={{ borderBottom: "0.5px solid var(--border)" }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            How I use AI
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            A repeatable system from{" "}
            <em style={{ color: "var(--text-accent)" }}>
              idea to execution.
            </em>
          </h2>

          <div className="space-y-4">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 flex items-start gap-6"
              >
                <span
                  className="text-xs font-mono flex-shrink-0 mt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {step.number}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {step.title}
                    </p>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: `${step.accent}22`,
                        color: step.accent,
                      }}
                    >
                      {step.tool}
                    </span>
                  </div>
                  <p
                    className="text-sm font-light leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Writing + Talks */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mb-20 pb-20"
  style={{ borderBottom: "0.5px solid var(--border)" }}
>
  <p
    className="text-xs tracking-widest uppercase mb-8"
    style={{ color: "var(--text-muted)" }}
  >
    Writing & Talks
  </p>

  <h2
            className="font-serif text-3xl md:text-4xl mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            Thoughts on{" "}
            <em style={{ color: "var(--text-accent)" }}>
              design, AI & business.
            </em>
          </h2>

  <ArticleList articles={articles.slice(0, 3)} />

  {/* Featured talk */}
  <div
    className="glass rounded-2xl p-5 flex items-start gap-4"
  >
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
      style={{ background: "rgba(200,180,232,0.2)" }}
    >
      <span style={{ color: "var(--color-lavender)", fontSize: "14px" }}>🎤</span>
    </div>
    <div className="flex-1">
      <p
        className="text-xs mb-1"
        style={{ color: "var(--text-muted)" }}
      >
        Talk · Veet Career Series 2025
      </p>
      <p
        className="text-sm font-medium mb-1"
        style={{ color: "var(--text-primary)" }}
      >
        Thriving as a Tech Professional in an AI World
      </p>
      <p
        className="text-xs"
        style={{ color: "var(--text-muted)" }}
      >
        Practical insights on staying relevant, adaptable, and valuable in an AI-driven era.
      </p>
    </div>
    <a
      href="#"
      className="text-xs flex-shrink-0 mt-1 transition-colors duration-200"
      style={{ color: "var(--text-accent)" }}
    >
      Watch →
    </a>
  </div>

  {/* Link to full resources */}
  <a
    href="/resources"
    className="inline-flex items-center gap-2 mt-6 text-xs transition-colors duration-200"
    style={{ color: "var(--text-muted)" }}
  >
    See all writing and talks →
  </a>
</motion.div>

        {/* Plant gallery */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mb-20 pb-20"
  style={{ borderBottom: "0.5px solid var(--border)" }}
>
  <p
  className="text-xs mb-0"
  style={{ color: "var(--text-muted)" }}
>
  Tap a fruit.
</p>
<PlantGallery />
</motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 pb-20"
          style={{ borderBottom: "0.5px solid var(--border)" }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            My tools
          </p>
          <div className="flex flex-wrap gap-2">
            {allTools.map((tool) => (
              <span
                key={tool.name}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs glass"
                style={{ color: "var(--text-secondary)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: tool.color }}
                />
                {tool.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Timeline — horizontal carousel */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mb-24"
>
  <p
    className="text-xs tracking-widest uppercase mb-10 px-6 md:px-0"
    style={{ color: "var(--text-muted)" }}
  >
    Timeline
  </p>

  <style>{`
    @keyframes timelineScroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .timeline-track {
      animation: timelineScroll 40s linear infinite;
    }
    .timeline-track:hover {
      animation-play-state: paused;
    }
  `}</style>

  <div style={{ overflow: "hidden", width: "100%" }}>
    <div
      className="timeline-track flex items-start"
      style={{ width: "max-content" }}
    >
      {[...timeline, ...timeline].map((item, i) => (
        <div
          key={i}
          className="relative flex flex-col"
          style={{ minWidth: "200px", paddingRight: "0" }}
        >
          {/* Horizontal line with dot */}
          <div className="flex items-center mb-4">
            <div
              className="w-3 h-3 rounded-full flex-shrink-0 z-10"
              style={{
                background: item.accent,
                boxShadow: `0 0 0 3px ${item.accent}22`,
              }}
            />
            <div
              className="flex-1 h-px"
              style={{
                background: `linear-gradient(to right, ${item.accent}44, var(--border))`,
                minWidth: "160px",
              }}
            />
          </div>

          {/* Content */}
          <div className="pr-6 pl-1">
            <p
              className="text-xs mb-1"
              style={{ color: "var(--text-muted)" }}
            >
              {item.year}
            </p>
            <p
              className="text-xs font-medium mb-0.5 leading-snug"
              style={{ color: "var(--text-primary)" }}
            >
              {item.title}
            </p>
            <p
              className="text-xs leading-snug mb-1"
              style={{ color: "var(--text-muted)" }}
            >
              {item.organisation}
            </p>
            {item.isFirst && (
              <span
                className="text-xs px-1.5 py-0.5 rounded-full"
                style={{
                  background: `${item.accent}22`,
                  color: item.accent,
                }}
              >
                ↗ First
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</motion.div>

      </div>
    </main>
  );
}