"use client";

import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactLinks() {
  return (
    <div className="flex  flex-row gap-4 text-3xl sm:right-0 z-100  text-[var(--bg-hero-light)]">
      <a
        href="https://github.com/rufaro-ndhlovu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/rufaro-ndhlovu-3a7392bb/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:farohanna@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}
