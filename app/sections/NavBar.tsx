"use client";
import React, { useState } from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { TiThMenuOutline } from "react-icons/ti";
import NavBarMob from "./NavBarMobile";

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({ behavior: "smooth" });
};

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="w-full mt-0 px-3 py-2 md:px-4 lg:px-10 bg-[var(--bg-hero-mid)] z-1000 fixed">
      <div className="flex flex-row justify-between items-center">
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
        <div className="hidden md:block">
          <Button color="bg-card" onClick={() => scrollToSection("contact")}>
            Lets Work Together
          </Button>
        </div>

        <button
          className="md:hidden border border-[var(--pink-glow)] bg-[var(--pink-main)] text-[var(--text-dark)] text-2xl rounded-lg p-1"
          onClick={handleShowMenu}
        >
          <TiThMenuOutline />
        </button>
      </div>

      {showMenu && <NavBarMob scrollToSection={scrollToSection} />}
    </nav>
  );
}
