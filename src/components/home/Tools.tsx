"use client";

import { toolsRow1, toolsRow2 } from "@/data/tools";

export default function Tools() {
  const allTools = [...toolsRow1, ...toolsRow2, ...toolsRow1, ...toolsRow2];

  return (
    <section
      className="py-16"
      style={{ background: "var(--bg)" }}
    >
      <style>{`
        @keyframes toolsScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .tools-track {
          animation: toolsScroll 35s linear infinite;
        }
      `}</style>

      <div className="mb-8 text-center">
        <p
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          Tools I work with
        </p>
      </div>

      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          className="tools-track flex gap-3"
          style={{ width: "max-content" }}
        >
          {allTools.map((tool, i) => (
            <div
              key={`tool-${i}`}
              className="glass rounded-full px-4 py-2 flex items-center gap-2 cursor-default whitespace-nowrap"
              style={{ flexShrink: 0 }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: tool.color }}
              />
              <span
                className="text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}