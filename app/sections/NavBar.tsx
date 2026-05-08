"use client";
import React, { useState, useRef } from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { TiThMenuOutline } from "react-icons/ti";
import NavBarMob from "./NavBarMobile";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({ behavior: "smooth" });
};

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const navRef = useRef(null);
  const linksRef = useRef<(HTMLButtonElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(linksRef.current, {
        y: -20,
        opacity: 0,
        stagger: 0.12,
        delay: 0.3,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: navRef },
  );

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-4 px-4 left-1/2 -translate-x-1/2 z-[1000] w-[95%] md:w-[90%] lg:w-[80%] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37) rounded-full"
    >
      <div className="flex flex-row justify-between items-center">
        <Logo />
        <div className="md:flex gap-8 hidden">
          <button
            onClick={() => scrollToSection("about")}
            className="py-2 px-4 font-bold text-[var(--pink-main)] cursor-pointer bg-transparent border-none rounded-full hover:bg-[var(--pink-soft)] hover:text-[var(--text-dark)]"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="py-2 px-4 font-bold text-[var(--pink-main)] cursor-pointer bg-transparent border-none rounded-full hover:bg-[var(--pink-soft)] hover:text-[var(--text-dark)]"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="py-2 px-4 font-bold text-[var(--pink-main)] cursor-pointer bg-transparent border-none rounded-full hover:bg-[var(--pink-soft)] hover:text-[var(--text-dark)]"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="py-2 px-4 font-bold text-[var(--pink-main)] cursor-pointer bg-transparent border-none rounded-full hover:bg-[var(--pink-soft)] hover:text-[var(--text-dark)]"
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
          className="md:hidden border border-[var(--pink-glow)] bg-[var(--pink-main)] text-[var(--text-dark)] text-2xl rounded-lg p-1 hover:cursor-pointer"
          onClick={handleShowMenu}
        >
          <TiThMenuOutline />
        </button>
      </div>

      {showMenu && (
        <NavBarMob
          setShowMenu={setShowMenu}
          scrollToSection={scrollToSection}
        />
      )}
    </nav>
  );
}
