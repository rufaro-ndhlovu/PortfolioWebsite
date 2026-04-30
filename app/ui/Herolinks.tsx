"use client";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroLinks() {
  return (
    <div className="flex lg:flex-col flex-row gap-4 text-3xl sm:right-0">
      <Link
        href="https://github.com/rufaro-ndhlovu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </Link>

      <Link
        href="https://www.linkedin.com/in/rufaro-ndhlovu-3a7392bb/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </Link>

      <Link
        href="mailto:farohanna@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope />
      </Link>
    </div>
  );
}
