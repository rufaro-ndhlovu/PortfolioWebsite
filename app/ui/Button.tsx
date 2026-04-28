import React from "react";

type props = {
  children: React.ReactNode;
  onClick: () => void;
  color: string;
};

export default function Button({ children, onClick, color }: props) {
  return (
    <button
      className="p-2 rounded-full text-[var(--pink-logo)] font-bold"
      style={{ backgroundColor: `var(--${color})` }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
