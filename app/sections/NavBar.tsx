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
    <nav className="w-full mt-0 flex flex-row justify-between items-center bg-[var(--bg-hero)] px-10 py-4 lg:px-20">
      <Logo />
      <div className="md:flex gap-6 sm: hidden">
        <Link href="/">About</Link>
        <Link href="/">Skills</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Beyond Code</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="px-2">
        <Button color="bg-card" textColor="text-dark" onClick={handleClick}>
          Lets Work Together
        </Button>
      </div>
    </nav>
  );
}
