"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Replace these with your actual Dribbble shot image URLs from Cloudinary
const shots = [
  { id: 1, src: "/images/dribbble/shot-1.jpg", alt: "Design shot 1" },
  { id: 2, src: "/images/dribbble/shot-2.jpg", alt: "Design shot 2" },
  { id: 3, src: "/images/dribbble/shot-3.jpg", alt: "Design shot 3" },
  { id: 4, src: "/images/dribbble/shot-4.jpg", alt: "Design shot 4" },
  { id: 5, src: "/images/dribbble/shot-5.jpg", alt: "Design shot 5" },
  { id: 6, src: "/images/dribbble/shot-6.jpg", alt: "Design shot 6" },
  { id: 7, src: "/images/dribbble/shot-7.jpg", alt: "Design shot 7" },
  { id: 8, src: "/images/dribbble/shot-8.jpg", alt: "Design shot 8" },
];

const doubled = [...shots, ...shots];

export default function DribbbleCarousel() {
  const [selected, setSelected] = useState<typeof shots[0] | null>(null);

  return (
    <>
      <section
        className="py-16 overflow-hidden"
        style={{ background: "var(--bg-secondary)" }}
      >
        <style>{`
          @keyframes carouselScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .carousel-track {
            animation: carouselScroll 30s linear infinite;
          }
          .carousel-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Header */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 mb-8">
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            UI & Motion
          </p>
        </div>

        {/* Scrolling strip */}
        <div style={{ overflow: "hidden", width: "100%" }}>
          <div
            className="carousel-track flex gap-4"
            style={{ width: "max-content" }}
          >
            {doubled.map((shot, i) => (
              <motion.div
                key={`${shot.id}-${i}`}
                onClick={() => setSelected(shot)}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  width: "280px",
                  height: "210px",
                  background: "var(--surface)",
                  border: "0.5px solid var(--surface-border)",
                }}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback placeholder if image not found
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.style.background =
                      "var(--lavender-soft)";
                  }}
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.3)" }}
                >
                  <span className="text-white text-xs font-medium">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={selected.alt}
                className="w-full h-auto"
                style={{ maxHeight: "80vh", objectFit: "contain" }}
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(8px)",
                  color: "white",
                }}
              >
                <X size={14} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}