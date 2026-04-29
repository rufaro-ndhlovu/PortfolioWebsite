import React from "react";
import { Astroid } from "lucide-react";

type props = {
  children: React.ReactNode;
};

export default function Label({ children }: props) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Astroid size={16} color="#e8869a" strokeWidth={3} />
      <p className="text-[var(--pink-soft)] tracking-widest text-sm font-bold uppercase">
        {children}
      </p>
    </div>
  );
}
