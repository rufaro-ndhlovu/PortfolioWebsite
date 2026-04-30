"use client";

import React from "react";
import SkillsCard from "../ui/SkillsCard";
import Label from "../ui/Label";

export default function Skills() {
  return (
    <section className="p-6 bg-[var(--bg-section)]">
      <Label>TECHNICAL SKILLS</Label>
      <SkillsCard>HTML5</SkillsCard>
    </section>
  );
}
