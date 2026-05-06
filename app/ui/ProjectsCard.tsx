import React, { useRef, useEffect, useState } from "react";
import Button from "./Button";

import { motion, useInView } from "framer-motion";

type props = {
  title: string;
  description: string;
  image: string;
  video?: string;
  techStack: string[];
  github?: string;
  live?: string;
};

export default function ProjectsCard({
  title,
  description,
  image,
  video,
  techStack,
  github,
  live,
}: props) {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isInView = useInView(ref, {
    amount: 0.4,
  });

  useEffect(() => {
    if (!videoRef.current) return;

    if (isInView) {
      videoRef.current.play().catch((err) => {
        console.log("VIDEO PLAY ERROR:", err);
      });
    } else {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <div className="p-4 bg-[var(--bg-card)] shadow-md border border-[var(--pink-glow)] rounded-4xl gap-4 flex flex-col lg:flex-row h-full justify-evenly grid grid-cols-1 lg:grid-cols-2">
      <motion.div
        className="relative flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div ref={ref} className="relative overflow-hidden rounded-lg">
          <img
            src={image}
            alt={`${title} screenshot`}
            className="absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-300"
            style={{ opacity: isInView ? 0 : 1 }}
          />
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            preload="auto"
            playsInline
            poster={image}
            className="w-full h-full object-cover rounded-lg transition-opacity duration-300"
            style={{ opacity: isInView ? 1 : 0 }}
          />
        </div>
      </motion.div>

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
