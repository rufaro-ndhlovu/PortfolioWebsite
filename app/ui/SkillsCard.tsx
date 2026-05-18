"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";

type props = {
  name: string;
  usedIn: string[];
  snippet: string;
};

export default function SkillsCard({ name, usedIn, snippet }: props) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const tooltipVisible = open || hovered;

  return (
    <motion.div
      style={{ position: "relative", display: "inline-block" }}
      animate={{
        y: [0, -4, 0, 3, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
    >
      {/* Tooltip — sits above the pill */}
      {tooltipVisible && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.95 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none"
          style={{ minWidth: "180px" }}
        >
          <div
            className="rounded-2xl px-4 py-3 backdrop-blur-xl border border-white/10"
            style={{
              background: "rgba(10, 8, 20, 0.92)",
              boxShadow: "0 0 24px rgba(var(--pink-main-rgb), 0.15)",
            }}
          >
            {/* Skill name */}
            <p
              className="text-xs font-bold mb-1 tracking-wide"
              style={{ color: "var(--pink-main)" }}
            >
              {name}
            </p>

            {/* Code snippet */}
            <p
              className="text-[11px] font-mono mb-2 opacity-60"
              style={{ color: "var(--pink-light)" }}
            >
              {snippet}
            </p>

            {/* Projects / where used */}
            <div className="flex flex-col gap-0.5">
              {usedIn.map((p) => (
                <p
                  key={p}
                  className="text-[11px] opacity-50"
                  style={{ color: "var(--pink-light)" }}
                >
                  → {p}
                </p>
              ))}
            </div>

            {/* Little arrow pointer */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 rotate-45 border-r border-b border-white/10"
              style={{ background: "rgba(10, 8, 20, 0.92)", marginTop: "-4px" }}
            />
          </div>
        </motion.div>
      )}

      {/* The pill itself */}
      <motion.button
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="px-3 py-1 rounded-full cursor-pointer select-none"
        style={{
          background: open
            ? "rgba(var(--pink-main), 0.15)"
            : "rgba(255,255,255,0.03)",
          border: open
            ? "1px solid rgba(var(--pink-main), 0.5)"
            : "1px solid rgba(255,255,255,0.10)",
          backdropFilter: "blur(12px)",
          boxShadow:
            hovered || open ? "0 0 16px rgba(var(--pink-main), 0.2)" : "none",
          transition: "background 0.2s, border 0.2s, box-shadow 0.2s",
        }}
      >
        <h4
          className="text-sm font-bold whitespace-nowrap"
          style={{ color: "var(--pink-light)" }}
        >
          {name}
        </h4>
      </motion.button>
    </motion.div>
  );
}
