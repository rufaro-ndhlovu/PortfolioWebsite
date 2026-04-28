import React from "react";

type props = {
  children: React.ReactNode;
};

export default function GradientText({ children }: props) {
  return (
    <>
      <span className="bg-[var(--pink-logo)] bg-clip-text text-transparent">
        {children}
      </span>
    </>
  );
}
