import React from "react";
import { Astroid } from "lucide-react";
import { motion } from "motion/react";

type props = {
  children: React.ReactNode;
  onClick: () => void;
  color: string;
};

export default function Button({ children, onClick, color }: props) {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`py-2 px-3 rounded-full font-bold flex items-center justify-center gap-2 text-sm md:text-base
      bg-[var(--${color})] text-[var(--text-dark)] hover:text-[var(--text-hero)]
      hover:bg-[var(--circle-pink)] transition hover:cursor-pointer`}
        onClick={onClick}
      >
        <Astroid size={16} color="#e8869a" strokeWidth={3} />
        {children}
      </motion.button>
    </>
  );
}
