import React from "react";

type props = {
  children: React.ReactNode;
};

export default function Tag({ children }: props) {
  return (
    <div className="rounded-full bg-transparent p-2 text-xs border bg-white/2 backdrop-blur-xl border-white/10">
      {children}
    </div>
  );
}
