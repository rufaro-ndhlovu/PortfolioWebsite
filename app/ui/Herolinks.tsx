"use client";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroLinks() {
  return (
    <div className="flex flex-col gap-4 text-3xl">
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
