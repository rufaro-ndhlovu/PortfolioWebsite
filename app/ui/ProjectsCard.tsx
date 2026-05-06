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
    <div className="p-4 bg-[var(--bg-card)] shadow-md border border-[var(--pink-glow)] rounded-4xl gap-4 flex flex-col lg:flex-row h-full justify-evenly grid grid-cols-1 lg:grid-cols-2">
      <div className="flex justify-center">
        <img src={image} alt={`${title} screenshot`} className="rounded-lg" />
      </div>

      <div className="flex flex-col justify-evenly gap-2 lg:gap-0">
        <h3 className=" text-[var(--text-dark)] font-bold sm:text-md lg:text-lg text-[var(--font-playfair)]">
          {title}
        </h3>
        <p className="text-[var(--pink-light)]">{description}</p>
        <div className=" flex flex-row flex-wrap gap-2">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="text-xs text-[var(--text-dark)] bg-[var(--bg-section)] rounded-full border border-[var(--pink-glow)] p-2"
            >
              {tech}
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4">
          {github && (
            <button className="text-[var(--pink-light)] font-bold border border-[var(--pink-glow)] rounded-full p-2 hover:bg-[var(--circle-pink)] hover:text-[var(--bg-dark)] text-sm md:text-base">
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </button>
          )}
          {live && (
            <Button onClick={() => {}} color="pink-main">
              <a href={live} target="_blank" rel="noopener noreferrer">
                Live
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
