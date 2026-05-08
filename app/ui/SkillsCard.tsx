"use client";

import React from "react";
import { motion } from "motion/react";

type props = {
  name: string;
};

export default function SkillsCard({ name }: props) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="bg-[var(--bg-card)] px-3 py-1 rounded-full shadow-md text-[var(--pink-light)] border border-[var(--pink-glow)] bg-white/2 backdrop-blur-xl border-white/10"
    >
      <h4 className="text-sm font-bold">{name}</h4>
    </motion.div>
  );
}
