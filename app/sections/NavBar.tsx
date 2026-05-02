"use client";
import React from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

export default function NavBar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="w-full mt-0 flex flex-row justify-between items-center px-5 py-3 lg:px-20">
      <Logo />
      <div className="md:flex gap-8 hidden">
        <button
          onClick={() => scrollToSection("about")}
          className="text-[var(--text-hero)] cursor-pointer bg-transparent border-none"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="text-[var(--text-hero)] cursor-pointer bg-transparent border-none"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="text-[var(--text-hero)] cursor-pointer bg-transparent border-none"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="text-[var(--text-hero)] cursor-pointer bg-transparent border-none"
        >
          Contact
        </button>
      </div>
      <div>
        <Button color="bg-card" onClick={() => scrollToSection("contact")}>
          Lets Work Together
        </Button>
      </div>
    </nav>
  );
}
