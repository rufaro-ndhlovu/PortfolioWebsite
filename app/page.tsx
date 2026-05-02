"use client";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./ui/Footer";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="">
      <Toaster position="top-center" reverseOrder={false} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
