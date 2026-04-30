"use client";

import React from "react";

type props = {
  name: string;
};

export default function SkillsCard({ name }: props) {
  return (
    <div className="bg-[var(--bg-card)] px-3 py-1 rounded-full shadow-md text-[var(--pink-light)] border border-[var(--pink-glow)]">
      <h4 className="text-sm font-bold">{name}</h4>
    </div>
  );
}
