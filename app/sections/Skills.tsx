"use client";

import React from "react";
import SkillsCard from "../ui/SkillsCard";
import Label from "../ui/Label";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section className="p-6 bg-[var(--bg-dark)]">
      <Label>TECHNICAL SKILLS</Label>
      <div className="mt-8 space-y-10 grid grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="h-full border border-[var(--pink-glow)] rounded-lg p-4 bg-[var(--bg-section)]"
          >
            <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--pink-main)] mb-4">
              {category.title}
            </h3>

            <div className="flex flex-row flex-wrap gap-2 ">
              {category.skills.map((skill) => (
                <SkillsCard key={skill.name} name={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
