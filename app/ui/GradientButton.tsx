import React from "react";

type props = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function GradientButton({ children, onClick }: props) {
  return (
    <button
      className="bg-[var(--pink-name)] text-white px-3 py-2 rounded-full font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
