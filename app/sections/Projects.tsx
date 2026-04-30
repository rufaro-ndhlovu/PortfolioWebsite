"use client";

import React from "react";
import Label from "../ui/Label";
import ProjectsCard from "../ui/ProjectsCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="p-4 bg-[var(--bg-section)] shadow-md">
      <Label>PROJECTS</Label>

      <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>
  );
}
