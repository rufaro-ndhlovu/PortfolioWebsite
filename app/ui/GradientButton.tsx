import React from "react";

type props = {
  children: React.ReactNode;
  onClick: () => void;
  color: string;
};

export default function GradientButton({ children, onClick, color }: props) {
  return (
    <button
      className="p-2 rounded-full bg-[img:var(--gradient-primary)] text-[var(--pink-logo)] font-bold "
      onClick={onClick}
    >
      {children}
    </button>
  );
}
