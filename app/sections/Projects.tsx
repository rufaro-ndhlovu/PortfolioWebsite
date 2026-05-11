"use client";

import React, { useRef, useLayoutEffect } from "react";
import Label from "../ui/Label";
import ProjectsCard from "../ui/ProjectsCard";
import { projects } from "../data/projects";
import { motion } from "motion/react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projects() {
  const container = useRef(null);
  const projectsWrap = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>(".panel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: projectsWrap.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + projectsWrap.current!.scrollWidth,
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      id="projects"
      className="projectsContainer pt-5 pb-20 bg-[var(--bg-section)] shadow-md overflow-x-clip"
    >
      <div ref={container}>
        <Label>PROJECTS</Label>

        <div ref={projectsWrap} id="projectsWrap" className="flex mt-6 ">
          {projects.map((project) => (
            <div key={project.id} className="panel min-w-[100vw] h-[90vh] p-4">
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
      </div>
    </section>
  );
}
