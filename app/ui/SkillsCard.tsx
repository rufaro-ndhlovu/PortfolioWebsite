"use client";

import React from "react";

type props = {
  key: string;
  name: string;
  icon?: string;
};

export default function SkillsCard({ key, name, icon }: props) {
  return (
    <div className="bg-[var(--bg-card)] p-4 rounded-full shadow-md text-[var(--pink-light)] border border-[var(--pink-glow)]">
      {icon && <span className="text-sm">{icon}</span>}
      <h3 className="text-sm font-bold mt-2">{name}</h3>
    </div>
  );
}
