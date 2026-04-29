import React from "react";
import { Astroid } from "lucide-react";

type props = {
  children: React.ReactNode;
  onClick: () => void;
  color: string;
  textColor?: string;
};

export default function Button({ children, onClick, color, textColor }: props) {
  return (
    <button
      className="py-2 px-3 rounded-full font-bold flex flex-row gap-2 items-center"
      style={{
        backgroundColor: `var(--${color})`,
        color: `var(--${textColor})`,
      }}
      onClick={onClick}
    >
      <Astroid size={16} color="#e8869a" strokeWidth={3} />
      {children}
    </button>
  );
}
