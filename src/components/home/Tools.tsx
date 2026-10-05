"use client";

import { toolsRow1, toolsRow2 } from "@/data/tools";

export default function Tools() {
  const doubled1 = [...toolsRow1, ...toolsRow1];
  const doubled2 = [...toolsRow2, ...toolsRow2];

  return (
    <section
      className="py-16 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="mb-8 text-center">
        <p
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          Tools I work with
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Row 1 — scrolls left */}
        <div className="relative">
          <div
            className="flex gap-3 w-max"
            style={{
              animation: "scrollLeft 20s linear infinite",
              transform: "rotate(-2deg)",
            }}
          >
            {doubled1.map((tool, i) => (
              <div
                key={`r1-${i}`}
                className="glass rounded-full px-4 py-2 flex items-center gap-2 mask-hover cursor-default whitespace-nowrap"
                style={
                  {
                    "--mask-color": `${tool.color}22`,
                  } as React.CSSProperties
                }
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

        {/* Row 2 — scrolls right */}
        <div className="relative">
          <div
            className="flex gap-3 w-max"
            style={{
              animation: "scrollRight 25s linear infinite",
              transform: "rotate(2deg)",
            }}
          >
            {doubled2.map((tool, i) => (
              <div
                key={`r2-${i}`}
                className="glass rounded-full px-4 py-2 flex items-center gap-2 mask-hover cursor-default whitespace-nowrap"
                style={
                  {
                    "--mask-color": `${tool.color}22`,
                  } as React.CSSProperties
                }
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
      </div>
    </section>
  );
}