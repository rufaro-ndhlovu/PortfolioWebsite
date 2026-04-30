"use client";

import React from "react";
import SkillsCard from "../ui/SkillsCard";
import Label from "../ui/Label";
import { skills } from "../data/skills";
import { otherSkills } from "../data/skills";

export default function Skills() {
  return (
    <section className="p-6 bg-[var(--bg-section)]">
      <Label>TECHNICAL SKILLS</Label>
      <div className="grid grid-cols-4 mt-6 gap-4">
        {skills.map((skill) => (
          <SkillsCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>

      <div className="mt-6">
        <p className="text-[var(--text-muted)] text-sm">OTHER SKILLS</p>
        <div className="grid grid-cols-5 gap-4 mt-4">
          {otherSkills.map((otherSkill) => (
            <div
              key={otherSkill}
              className="text-xs text-[var(--pink-light)] rounded-full bg-[var(--bg-card)] px-2 py-1 border border-[var(--pink-glow)] text-sm text-center"
            >
              {otherSkill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
