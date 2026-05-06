"use client";

import React from "react";
import SkillsCard from "../ui/SkillsCard";
import Label from "../ui/Label";
import { skillCategories } from "../data/skills";
import { motion } from "motion/react";

export default function Skills() {
  return (
    <section id="skills" className="p-6 bg-[var(--bg-dark)]">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Label>TECHNICAL SKILLS</Label>
        <div className="mt-8 space-y-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch ">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="h-full border border-[var(--pink-glow)] rounded-4xl p-4 bg-[var(--bg-section)]"
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
      </motion.div>
    </section>
  );
}
