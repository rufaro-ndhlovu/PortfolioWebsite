import React from "react";

type props = {
  children: React.ReactNode;
};

export default function GradientText({ children }: props) {
  return (
    <>
      <span className="bg-[var(--pink-main)] bg-clip-text text-transparent">
        {children}
      </span>
    </>
  );
}
