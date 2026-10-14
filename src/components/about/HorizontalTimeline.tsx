"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";

export default function HorizontalTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let isScrolling = false;

    const onWheel = (e: WheelEvent) => {
      if (!section || !track) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 80 && rect.bottom >= window.innerHeight * 0.3;
      if (!inView) return;

      const maxScroll = track.scrollWidth - track.clientWidth;
      const atStart = track.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = track.scrollLeft >= maxScroll - 1 && e.deltaY > 0;

      if (atStart || atEnd) return;

      e.preventDefault();
      if (!isScrolling) {
        isScrolling = true;
        track.scrollLeft += e.deltaY * 1.5;
        setTimeout(() => { isScrolling = false; }, 16);
      }

      // Update progress and active node
      const progress = track.scrollLeft / maxScroll;
      setScrollProgress(progress);
      const index = Math.floor(progress * timeline.length);
      setActiveIndex(Math.min(index, timeline.length - 1));
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  // Touch support
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let startX = 0;
    let startScroll = 0;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startScroll = track.scrollLeft;
    };

    const onTouchMove = (e: TouchEvent) => {
      const dx = startX - e.touches[0].clientX;
      track.scrollLeft = startScroll + dx;
      const maxScroll = track.scrollWidth - track.clientWidth;
      const progress = track.scrollLeft / maxScroll;
      setScrollProgress(progress);
      const index = Math.floor(progress * timeline.length);
      setActiveIndex(Math.min(index, timeline.length - 1));
    };

    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      {/* Label */}
      <p
        className="text-xs tracking-widest uppercase mb-8"
        style={{ color: "var(--text-muted)" }}
      >
        Timeline
      </p>

      {/* Scroll hint */}
      <p
        className="text-xs mb-6 flex items-center gap-2"
        style={{ color: "var(--text-muted)" }}
      >
        <span>Scroll to travel</span>
        <span>→</span>
      </p>

      {/* Progress bar */}
      <div
        className="w-full h-px mb-0 relative"
        style={{ background: "var(--border)" }}
      >
        <motion.div
          className="absolute left-0 top-0 h-px"
          style={{
            background: "linear-gradient(to right, #c8b4e8, #a8d0b8, #f0b8a0)",
            width: `${scrollProgress * 100}%`,
            transition: "width 0.1s ease",
          }}
        />
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="overflow-x-auto overflow-y-hidden"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: "grab",
        }}
      >
        <style>{`
          .timeline-track::-webkit-scrollbar { display: none; }
        `}</style>

        <div
          className="timeline-track flex items-start pt-8 pb-4"
          style={{ width: "max-content", gap: "0" }}
        >
          {timeline.map((item, i) => {
            const isActive = i <= activeIndex;
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                className="relative flex flex-col items-start"
                style={{ width: "200px", paddingRight: "0", flexShrink: 0 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Line segment */}
                <div
                  className="flex items-center w-full mb-4"
                  style={{ marginTop: "0" }}
                >
                  {/* Dot */}
                  <motion.div
                    className="w-3 h-3 rounded-full flex-shrink-0 z-10"
                    animate={{
                      background: isActive ? item.accent : "var(--border)",
                      boxShadow: isActive
                        ? `0 0 0 4px ${item.accent}22, 0 0 12px ${item.accent}44`
                        : "none",
                      scale: isHovered ? 1.4 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Connector line */}
                  <div
                    className="flex-1 h-px"
                    style={{
                      background: isActive
                        ? `linear-gradient(to right, ${item.accent}88, ${
                            timeline[i + 1]?.accent ?? item.accent
                          }44)`
                        : "var(--border)",
                      transition: "background 0.3s ease",
                      minWidth: "140px",
                    }}
                  />
                </div>

                {/* Content */}
                <motion.div
                  className="pl-0 pr-6"
                  animate={{
                    opacity: isHovered ? 1 : isActive ? 0.9 : 0.4,
                    y: isHovered ? -4 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <p
                    className="text-xs mb-1"
                    style={{
                      color: isActive ? item.accent : "var(--text-muted)",
                      transition: "color 0.3s ease",
                    }}
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

                  {/* Expanded detail on hover */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isHovered ? "auto" : 0,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      className="text-xs leading-relaxed mt-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.description}
                    </p>
                  </motion.div>

                  {item.isFirst && (
                    <span
                      className="text-xs px-1.5 py-0.5 rounded-full mt-1 inline-block"
                      style={{
                        background: `${item.accent}22`,
                        color: item.accent,
                      }}
                    >
                      ↗ First
                    </span>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}