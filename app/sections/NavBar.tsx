"use client";
import React from "react";
import Logo from "../ui/Logo";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full mt-0 bg-[var(--pink-100)] flex flex-row">
      <Logo />
      <div className="">
        <Link href="/">About</Link>
        <Link href="/">Skills</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Beyond Code</Link>
        <Link href="/">Contact</Link>
      </div>
    </nav>
  );
}
