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
        <Link href="/">About</Link>
        <Link href="/">Skills</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Beyond Code</Link>
        <Link href="/">Contact</Link>
      </div>
      <div>
        <Button color="bg-card" textColor="text-dark" onClick={handleClick}>
          Lets Work Together
        </Button>
      </div>
    </nav>
  );
}
