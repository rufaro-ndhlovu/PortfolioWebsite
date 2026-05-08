import React, { useRef, useEffect, useState } from "react";
import Button from "./Button";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import { motion, useInView } from "framer-motion";

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
  // Create a ref to the card element
  const ref = useRef(null);

  // Use the useInView hook to determine if the card is in the viewport
  const isInView = useInView(ref, {
    amount: 0.4,
  });

  return (
    <div className="p-4  shadow-md border border-[var(--pink-glow)] rounded-4xl gap-8 grid grid-cols-1 lg:grid-cols-5 min-h-[350px] bg-white/2 backdrop-blur-xl border-white/10">
      {/* Image section with animation on scroll */}
      <motion.div
        className="relative flex justify-center items-center md:col-span-3"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          ref={ref}
          className="relative overflow-hidden rounded-lg aspect-video w-full "
        >
          {/* Use Next.js Image component for optimized image loading */}
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            className="object-cover rounded-3xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </motion.div>

      <div className="flex flex-col justify-evenly gap-2 lg:gap-0 md:col-span-2">
        {/* Project title and description */}
        <h3 className=" text-[var(--text-dark)] font-bold sm:text-md lg:text-xl text-[var(--font-playfair)]">
          {title}
        </h3>
        <p className="text-[var(--pink-light)]">{description}</p>
        <div className=" flex flex-row flex-wrap gap-2">
          {/* Tech stack badges with hover animation */}
          {techStack.map((tech) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={tech}
              className="text-xs text-[var(--text-dark)] bg-[var(--bg-section)] rounded-full border bg-white/2 backdrop-blur-xl border-white/10 p-2"
            >
              {tech}
            </motion.div>
          ))}
        </div>

        <div className="flex flex-row gap-4">
          {/* GitHub and Live buttons with hover animations */}
          {github && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-[var(--pink-light)] font-bold border rounded-full p-2 hover:bg-[var(--circle-pink)] hover:text-[var(--bg-dark)] text-sm md:text-base bg-white/2 backdrop-blur-xl border-white/10"
            >
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </motion.button>
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
