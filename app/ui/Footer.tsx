"use client";

import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-section)] px-5 py-4 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm">
      <div className="text-[var(--pink-light)]">
        <p>&copy;2026 Rufaro Ndhlovu. All rights reserved.</p>
      </div>
      <div className="flex flex-row text-[var(--pink-light)] gap-1 items-center">
        <p className="">
          Built with{" "}
          <span className="text-[var(--pink-main)]">
            Next.js, React & Tailwind CSS
          </span>{" "}
        </p>
        <FaHeart />
      </div>
    </footer>
  );
}
