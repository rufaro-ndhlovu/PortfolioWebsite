import React from "react";
import { Astroid } from "lucide-react";

type props = {
  children: React.ReactNode;
  onClick: () => void;
  color: string;
};

export default function Button({ children, onClick, color }: props) {
  return (
    <button
      className={`py-3 px-3 rounded-full font-bold flex gap-2 items-center 
      bg-[var(--${color})] text-[var(--text-dark)] hover:text-[var(--text-hero)]
      hover:bg-[var(--circle-pink)] transition`}
      onClick={onClick}
    >
      <Astroid size={16} color="#e8869a" strokeWidth={3} />
      {children}
    </button>
  );
}
