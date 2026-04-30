"use client";

import React from "react";
import SkillsCard from "../ui/SkillsCard";
import Label from "../ui/Label";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section className="p-6 bg-[var(--bg-section)]">
      <Label>TECHNICAL SKILLS</Label>
      <div className="grid grid-cols-4 mt-6 gap-4">
        {skills.map((skill) => (
          <SkillsCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>

      <p></p>
    </section>
  );
}
