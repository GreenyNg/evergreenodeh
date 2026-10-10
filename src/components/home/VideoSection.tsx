"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

// Replace with your actual video URL from Cloudinary when ready
const VIDEO_URL = "";
const VIDEO_THUMBNAIL = "/images/avatar.jpg";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <section
        className="py-24"
        style={{ background: "var(--bg-tertiary)" }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              In my own words
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl"
              style={{ color: "var(--text-primary)" }}
            >
              See how I think,{" "}
              <em style={{ color: "var(--text-accent)" }}>
                hear how I work.
              </em>
            </h2>
          </motion.div>

          {/* Video thumbnail */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onClick={() => setPlaying(true)}
            className="relative rounded-3xl overflow-hidden cursor-pointer group"
            style={{
              aspectRatio: "16/9",
              maxWidth: "760px",
              margin: "0 auto",
              background: "var(--lavender-soft)",
              border: "0.5px solid var(--surface-border)",
            }}
          >
            {/* Thumbnail */}
            <img
              src={VIDEO_THUMBNAIL}
              alt="Evergreen Odeh intro video"
              className="w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-70"
              style={{ background: "rgba(0,0,0,0.35)" }}
            />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                <Play
                  size={22}
                  fill="white"
                  style={{ color: "white", marginLeft: "2px" }}
                />
              </motion.div>
            </div>

            {/* Duration label */}
            <div
              className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs text-white"
              style={{
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              ~2 min
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video modal */}
      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{
              background: "rgba(0,0,0,0.9)",
              backdropFilter: "blur(12px)",
            }}
            onClick={() => setPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full"
              style={{ maxWidth: "900px" }}
              onClick={(e) => e.stopPropagation()}
            >
              {VIDEO_URL ? (
                <video
                  src={VIDEO_URL}
                  controls
                  autoPlay
                  className="w-full rounded-2xl"
                  style={{ maxHeight: "80vh" }}
                />
              ) : (
                <div
                  className="w-full rounded-2xl flex items-center justify-center"
                  style={{
                    aspectRatio: "16/9",
                    background: "var(--surface)",
                    border: "0.5px solid var(--surface-border)",
                  }}
                >
                  <p
                    className="text-sm font-light"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Video coming soon
                  </p>
                </div>
              )}

              <button
                onClick={() => setPlaying(false)}
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  color: "white",
                  border: "0.5px solid rgba(255,255,255,0.2)",
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