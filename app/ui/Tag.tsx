import React from "react";

type props = {
  children: React.ReactNode;
};

export default function Tag({ children }: props) {
  return (
    <div className="rounded-full bg-transparent p-2 text-xs border border-[var(--pink-glow)]">
      {children}
    </div>
  );
}
