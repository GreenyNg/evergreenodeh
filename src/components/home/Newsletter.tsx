"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      className="py-24"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(200,180,232,0.2) 0%, rgba(168,192,232,0.15) 50%, rgba(168,208,184,0.15) 100%)",
            border: "0.5px solid var(--surface-border)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Ambient blob */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(200,180,232,0.25) 0%, transparent 70%)",
              filter: "blur(40px)",
              transform: "translate(30%, -30%)",
            }}
          />

          <div className="relative z-10">
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Newsletter
            </p>
            <h2
              className="font-serif text-3xl md:text-4xl mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Subscribe to{" "}
              <em style={{ color: "var(--text-accent)" }}>
                The Designers Edge
              </em>
            </h2>
            <p
              className="text-sm mb-10 max-w-sm mx-auto leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              The go-to publication for designers who think like founders and
              founders who build with design.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-full px-8 py-4 inline-block"
              >
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--text-accent)" }}
                >
                  You&apos;re in. Welcome to the edge. 🌿
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 px-5 py-3 rounded-full text-sm outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    border: "0.5px solid var(--surface-border)",
                    color: "var(--text-primary)",
                    backdropFilter: "blur(8px)",
                  }}
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 mask-hover mask-lavender glass whitespace-nowrap"
                  style={{ color: "var(--text-accent)" }}
                >
                  Subscribe →
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}