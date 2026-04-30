import React from "react";
import { Project } from "../data/projects";
import Image from "next/image";

type props = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github?: string;
  live?: string;
};

export default function ProjectsCard({
  title,
  description,
  image,
  techStack,
  github,
  live,
}: props) {
  return (
    <div className="p-4 bg-[var(--bg-card)] shadow-md border border-[var(--pink-glow)] rounded-4xl">
      <div className="flex justify-center">
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>

      <h3 className="mt-4">{title}</h3>
      <p>{description}</p>
      <div>
        {techStack.map((tech) => (
          <div key={tech}>{tech}</div>
        ))}
      </div>

      <div>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
