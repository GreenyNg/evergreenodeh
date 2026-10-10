"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full glass flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-1"
          style={{
            border: "0.5px solid var(--surface-border)",
            color: "var(--text-accent)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}
          aria-label="Back to top"
        >
          <ArrowUp size={14} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}