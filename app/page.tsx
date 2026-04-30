"use client";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <About />
        <Skills />
      </div>
    </div>
  );
}
