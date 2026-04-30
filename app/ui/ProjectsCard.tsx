import React from "react";
import Image from "next/image";
import Button from "./Button";

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
    <div className="p-4 bg-[var(--bg-card)] shadow-md border border-[var(--pink-glow)] rounded-4xl gap-6">
      <div className="flex justify-center">
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>

      <h3 className="mt-4 text-[var(--text-dark)] mb-2 font-bold sm:text-md lg:text-lg text-[var(--font-playfair)]">
        {title}
      </h3>
      <p className="text-[var(--pink-light)]">{description}</p>
      <div className="mt-4 flex flex-row flex-wrap gap-2">
        {techStack.map((tech) => (
          <div
            key={tech}
            className="text-xs text-[var(--text-dark)] bg-[var(--bg-section)] rounded-full border border-[var(--pink-glow)] p-2"
          >
            {tech}
          </div>
        ))}
      </div>

      <div className="flex flex-row gap-4 mt-2">
        {github && (
          <button className="text-[var(--pink-light)] font-bold border border-[var(--pink-glow)] rounded-full p-2 hover:bg-[var(--circle-pink)] hover:text-[var(--bg-dark)]">
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </button>
        )}
        {live && (
          <Button onClick={() => {}} color="pink-main">
            <a href={live} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
