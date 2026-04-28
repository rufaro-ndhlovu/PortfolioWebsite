"use client";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <div className="">
      <div className="hero">
        <NavBar />
        <Hero />
      </div>
      <main className=""></main>
    </div>
  );
}
