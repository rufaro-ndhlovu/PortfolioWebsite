import React from "react";
import Button from "../ui/Button";

export default function NavBarMob({ scrollToSection, setShowMenu }: any) {
  const handleMenuClick = (section: string) => {
    scrollToSection(section);
    setShowMenu(false);
  };

  return (
    <div className="md:hidden gap-3 flex flex-col items-center border border-[var(--pink-glow)] bg-[var(--bg-hero-mid)] rounded-xl py-3">
      <button
        onClick={() => handleMenuClick("about")}
        className="text-[var(--text-hero)] cursor-pointer bg-transparent border-none"
      >
        About
      </button>
      <hr className="w-75" />
      <button
        onClick={() => handleMenuClick("skills")}
        className="text-[var(--text-hero)] cursor-pointer bg-transparent border-none"
      >
        Skills
      </button>
      <hr className="w-75" />
      <button
        onClick={() => handleMenuClick("projects")}
        className="text-[var(--text-hero)] cursor-pointer bg-transparent border-none"
      >
        Projects
      </button>
      <hr className="w-75" />
      <button
        onClick={() => handleMenuClick("contact")}
        className="text-[var(--text-hero)] cursor-pointer bg-transparent border-none"
      >
        Contact
      </button>

      <div className="mt-2">
        <Button color="bg-card" onClick={() => handleMenuClick("contact")}>
          Lets Work Together
        </Button>
      </div>
    </div>
  );
}
