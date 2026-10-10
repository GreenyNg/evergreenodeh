"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useProjects } from "@/lib/ProjectsContext";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT = `You are Evergreen Odeh's AI twin — a digital version of Evergreen built to answer questions about her work, process, experience, and thinking.

About Evergreen:
- Senior product designer with 4+ years of experience across fintech, edtech, AI, community, events, and R&D
- Currently studying Computer Science at Covenant University — learning what lives underneath the things she designs
- Works with founders and teams to shape products that don't exist yet
- Uses AI to speed up design workflows and ship faster without sacrificing quality
- Has a pattern of firsts: first designer-led Hacktoberfest at Unilag, first DevFest Student Edition in Lagos, first in-house ticketing system for GDG Lagos
- Mentored ~100 designers across ADPList, GMI, SCA, and more
- Community Manager at Untitled Designers Community
- Co-founded Resonans — a research accessibility platform
- Built LEDGER with Claude and won 3 awards at The Bridge Program hackathon

Her work includes:
- Beacon Power Services ATS — reduced time to hire by 80%
- Cohut LMS — founding product designer, shipped through a major pivot in 48 hours
- Luddy App — AI language learning buddy, designed AI personality without a persona
- Luddy Branding — Bauhaus-inspired identity built to survive change
- Resonans Branding — brand that held through multiple product pivots
- XEPP Landing Page — delivered in 2 weeks vs 1-month timeline
- OpenVoice — lead UI/UX on African language corpus for AI
- DevFest SE Lagos — lead designer, first student edition in Lagos
- GDGoC Hacktoberfest — first designer-led open source session, 100+ designers
- UDC — community manager, quadrupled ticket purchases in one month
- LEDGER — AI-assisted fintech tool, 3 awards

Voice and tone rules:
- Warm, direct, confident
- No em dashes
- No excessive formality
- Speak in first person as Evergreen
- Be honest about what you know and don't know
- Never fabricate project details or statistics
- Keep responses concise — 2 to 4 sentences unless the question needs more
- If asked something you don't know, say so and suggest they reach out directly at everodeh48@gmail.com`;

export default function AITwin({ projectContext }: { projectContext?: string }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { projectsActive } = useProjects();

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content: projectContext
            ? `Hi! I'm Evergreen's AI twin. Ask me anything about this project or my work in general.`
            : `Hi! I'm Evergreen's AI twin. Ask me about my work, process, experience, or anything else you're curious about.`,
        },
      ]);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (projectsActive) setOpen(false);
  }, [projectsActive]);

  const send = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const systemPrompt = projectContext
        ? `${SYSTEM_PROMPT}\n\nCurrent project context: ${projectContext}`
        : SYSTEM_PROMPT;

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: systemPrompt,
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      const reply =
        data.content?.[0]?.text ??
        "I'm not sure how to answer that. Try reaching out to Evergreen directly at everodeh48@gmail.com";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong. Try reaching out to Evergreen directly at everodeh48@gmail.com",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Dim overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40"
            style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Floating widget */}
      <AnimatePresence>
        {!projectsActive && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-6 left-0 right-0 z-50 flex justify-center"
            style={{ pointerEvents: "none" }}
          >
            <div
              style={{
                pointerEvents: "auto",
                width: "100%",
                maxWidth: "520px",
                padding: "0 24px",
              }}
            >
              {/* Chat window — floats above bar */}
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 16, scale: 0.97 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="glass rounded-2xl mb-3 overflow-hidden"
                    style={{
                      border: "0.5px solid var(--surface-border)",
                      boxShadow: "0 24px 64px rgba(0,0,0,0.15)",
                    }}
                  >
                    {/* Chat header */}
                    <div
                      className="flex items-center justify-between px-4 py-3"
                      style={{ borderBottom: "0.5px solid var(--border)" }}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0"
                          style={{
                            background: "var(--lavender-soft)",
                            border: "1px solid var(--surface-border)",
                          }}
                        >
                          <img
                            src="/images/avatar.jpg"
                            alt="Evergreen"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p
                            className="text-xs font-medium"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Evergreen&apos;s AI Twin
                          </p>
                          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                            Powered by Claude
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setOpen(false)}
                        className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                        style={{ background: "var(--border)", color: "var(--text-muted)" }}
                      >
                        <X size={11} />
                      </button>
                    </div>

                    {/* Messages */}
                    <div
                      className="px-4 py-4 space-y-3 overflow-y-auto"
                      style={{ maxHeight: "320px" }}
                    >
                      {messages.map((msg, i) => (
                        <div
                          key={i}
                          className={`flex gap-2 ${
                            msg.role === "user" ? "justify-end" : "justify-start"
                          }`}
                        >
                          {msg.role === "assistant" && (
                            <div
                              className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0 mt-0.5"
                              style={{ background: "var(--lavender-soft)" }}
                            >
                              <img
                                src="/images/avatar.jpg"
                                alt="Evergreen"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div
                            className="px-3 py-2 rounded-2xl text-xs leading-relaxed max-w-xs"
                            style={{
                              background:
                                msg.role === "user"
                                  ? "rgba(122, 110, 176, 0.15)"
                                  : "var(--surface)",
                              color: "var(--text-primary)",
                              borderTopRightRadius: msg.role === "user" ? "4px" : undefined,
                              borderTopLeftRadius: msg.role === "assistant" ? "4px" : undefined,
                            }}
                          >
                            {msg.content}
                          </div>
                        </div>
                      ))}
                      {loading && (
                        <div className="flex gap-2 justify-start">
                          <div
                            className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0"
                            style={{ background: "var(--lavender-soft)" }}
                          >
                            <img
                              src="/images/avatar.jpg"
                              alt="Evergreen"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div
                            className="px-3 py-2 rounded-2xl text-xs"
                            style={{ background: "var(--surface)", color: "var(--text-muted)" }}
                          >
                            Thinking...
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input bar */}
              <div className="glass rounded-full flex items-center gap-2 px-3 py-2 shadow-lg">
                {/* Avatar */}
                <div
                  className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 cursor-pointer"
                  onClick={() => setOpen(!open)}
                  style={{ border: "1.5px solid var(--surface-border)" }}
                >
                  <img
                    src="/images/avatar.jpg"
                    alt="Evergreen AI Twin"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Input */}
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setOpen(true)}
                  placeholder="Ask Evergreen anything..."
                  className="flex-1 bg-transparent text-xs outline-none"
                  style={{ color: "var(--text-primary)" }}
                />

                {/* Send */}
                <button
                  onClick={send}
                  disabled={!input.trim() || loading}
                  className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 flex-shrink-0"
                  style={{
                    background: input.trim() ? "rgba(122, 110, 176, 0.2)" : "transparent",
                    color: input.trim() ? "var(--text-accent)" : "var(--text-muted)",
                  }}
                >
                  <Send size={12} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}