import React from "react";
import Button from "../ui/Button";

export default function NavBarMob({ scrollToSection }: any) {
  return (
    <div className="md:hidden gap-2 flex flex-col items-center border border-[var(--pink-glow)] bg-[var(--bg-hero-mid)] rounded-xl">
      <button
        onClick={() => scrollToSection("about")}
        className="text-[var(--text-hero)] cursor-pointer bg-transparent border-none"
      >
        About
      </button>
      <hr className="w-75" />
      <button
        onClick={() => scrollToSection("skills")}
        className="text-[var(--text-hero)] cursor-pointer bg-transparent border-none"
      >
        Skills
      </button>
      <hr className="w-75" />
      <button
        onClick={() => scrollToSection("projects")}
        className="text-[var(--text-hero)] cursor-pointer bg-transparent border-none"
      >
        Projects
      </button>
      <hr className="w-75" />
      <button
        onClick={() => scrollToSection("contact")}
        className="text-[var(--text-hero)] cursor-pointer bg-transparent border-none"
      >
        Contact
      </button>

      <div className="pb-2 mt-2">
        <Button color="bg-card" onClick={() => scrollToSection("contact")}>
          Lets Work Together
        </Button>
      </div>
    </div>
  );
}
