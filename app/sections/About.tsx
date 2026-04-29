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
          className="text-2xl mb-4 mt-4 font-semibold"
          style={{
            fontFamily: "var(--font-playfair)",
          }}
        >
          Developer. Problem solver. <br />
          <span
            className="italic"
            style={{
              fontFamily: "var(--font-petitFormalScript)",
            }}
          >
            Lifelong learner.
          </span>
        </h2>
        <p className="text-[var(--pink-light)] mb-4">
          I'm a Front-End Developer specialising in responsive, accessible,
          user-focused web applications. I translate complex requirements into
          functional, beautiful UIs with JS, TypeScript, React and Next.js.
        </p>
        <p className="text-[var(--pink-light)]">
          Led WCAG 2.2 AA accessibility improvements, built advanced survey
          logic at scale, and contributed to AI discovery initiatives always
          balancing craft with compliance.
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
