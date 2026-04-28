import React from "react";

type props = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function Button({ children, onClick }: props) {
  return (
    <button
      className="p-2 rounded-full bg-[var(--dark-pill)] text-[var(--pink-logo)] font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
