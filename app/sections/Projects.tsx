"use client";

import React from "react";
import Label from "../ui/Label";
import ProjectsCard from "../ui/ProjectsCard";
import { projects } from "../data/projects";
import { motion } from "motion/react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-4 py-5 md:p-4 bg-[var(--bg-section)] shadow-md"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Label>PROJECTS</Label>

        <div className="mt-6 grid gap-6">
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectsCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                github={project.github}
                live={project.live}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
