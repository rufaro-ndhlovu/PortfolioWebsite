"use client";

import React from "react";
import Label from "../ui/Label";
import Tag from "../ui/Tag";

export default function About() {
  return (
    <section className="bg-[var(--bg-section)] px-5 sm:py-5 md:py-10 text-[var(--text-dark)]">
      <Label>ABOUT ME</Label>
      <div>
        <h2
          className="text-2xl mb-3 mt-4 font-semibold"
          style={{
            fontFamily: "var(--font-playfair)",
          }}
        >
          Developer. Problem solver. <br />
          <span
            className="italic text-[var(--pink-main)] font-bold"
            style={{
              fontFamily: "var(--font-petitFormalScript)",
            }}
          >
            Lifelong learner.
          </span>
        </h2>
        <p className="text-[var(--pink-light)] mb-4">
          I'm a Front-End Developer specialising in building responsive,
          accessible, and user-focused web applications. With expertise in
          JavaScript (ES6+), TypeScript, React, and Next.js, I translate complex
          requirements into functional, beautiful UIs.
        </p>
        <p className="text-[var(--pink-light)] mb-4">
          i've led accessibility improvements to WCAG 2.2 AA standards,
          engineered advanced survey logic at scale, and contributed to AI
          discovery initiatives - always balancing craft with compliance.
        </p>
        <p className="text-[var(--pink-light)]">
          Currently deepening my expertise in front-end testing (Jest, React
          Testing Library) and advanced React/Next.js patterns.
        </p>
        <div className="flex flex-row mt-6 gap-4">
          <Tag>Zambian</Tag>
          <Tag>Fitness lover</Tag>
          <Tag>Foodie</Tag>
          <Tag>Travel Enthusiast</Tag>
        </div>
      </div>
    </section>
  );
}
