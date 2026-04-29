"use client";
import React from "react";
import Logo from "../ui/Logo";
import Link from "next/link";
import Button from "../ui/Button";

export default function NavBar() {
  const handleClick = () => {
    return;
  };

  return (
    <nav className="w-full mt-0 flex flex-row justify-between items-center sm:px-5 py-3 lg:px-20 bg-transparent">
      <Logo />
      <div className="md:flex gap-6 sm:hidden">
        <Link href="/" className="text-[var(--text-hero)]">
          About
        </Link>
        <Link href="/" className="text-[var(--text-hero)]">
          Skills
        </Link>
        <Link href="/" className="text-[var(--text-hero)]">
          Projects
        </Link>
        <Link href="/" className="text-[var(--text-hero)]">
          Beyond Code
        </Link>
        <Link href="/" className="text-[var(--text-hero)]">
          Contact
        </Link>
      </div>
      <div>
        <Button color="bg-card" textColor="text-dark" onClick={handleClick}>
          Lets Work Together
        </Button>
      </div>
    </nav>
  );
}
