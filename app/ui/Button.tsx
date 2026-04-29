import React from "react";

type props = {
  children: React.ReactNode;
  onClick: () => void;
  color: string;
  textColor?: string;
};

export default function Button({ children, onClick, color, textColor }: props) {
  return (
    <button
      className="py-2 px-3 rounded-full font-bold"
      style={{
        backgroundColor: `var(--${color})`,
        color: `var(--${textColor})`,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
