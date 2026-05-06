"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import Label from "../ui/Label";
import HeroLinks from "../ui/Herolinks";
import { scrollToSection } from "./NavBar";
import { easeInOut, motion } from "motion/react";

export default function Hero() {
  const handleViewWork = () => {
    scrollToSection("projects");
  };

  return (
    <div>
      <section
        className="relative pt-20 lg:pt-0"
        style={{ background: "var(--bg-hero-img)" }}
      >
        <div className="relative w-full min-h-screen flex items-center md:justify-evenly lg:justify-between px-4 py-4 lg:px-20 overflow-hidden flex-col lg:flex-row ">
          {/* BACKGROUND GLOW */}
          <div className="absolute top-[-100px] right-[-100px] sm:w-[500px] sm:h-[500px] md:w-[900px] md:h-[900px] bg-[var(--pink-main)] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>

          {/* LEFT SIDE */}
          <div className="max-w-xl z-10 pt-2 lg:pt-0">
            <Label>HI, I'M</Label>

            <h1 className="text-6xl lg:text-8xl leading-tight font-serif flex flex-col md:flex-row lg:flex-col md:gap-4 gap-0">
              <span
                className="text-[var(--pink-main)] font-bold"
                style={{
                  fontFamily: "var(--font-petitFormalScript)",
                }}
              >
                Rufaro
              </span>

              <span
                className="text-[var(--text-primary)]"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                Ndhlovu
              </span>
            </h1>

            <div className="mt-5 space-y-4 max-w-lg">
              <p className="text-[var(--pink-main)] uppercase tracking-[0.25em] text-sm font-medium">
                Front-End Developer
              </p>

              <h2
                className="text-xl lg:text-2xl leading-snug text-[var(--text-primary)]"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                Building digital experiences that are as thoughtful behind the
                scenes as they are on the screen.
              </h2>
            </div>

            <div className="flex gap-4 mt-8">
              {/* 2 buttons side by side */}

              <Button color="pink-main" onClick={handleViewWork}>
                View My Work
              </Button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/RufaroNdhlovuCV.pdf"
                  download="RufaroNdhlovuCV"
                  className="py-2 px-3 rounded-full font-bold text-[var(--text-hero)] bg-transparent border border-[var(--pink-main)] backdrop-blur-md sm:text-sm md:text-base hover:bg-[var(--bg-card)] hover:text-[var(--text-dark)] hover:border-[var(--bg-card)]"
                >
                  Download CV
                </a>
              </motion.button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-square">
              {/* Glow circle behind image */}
              <div
                className="absolute w-[500px] h-[500px] bg-[var(--pink-main)] opacity-30 blur-[100px] rounded-full"
                style={{ borderRadius: "50% 50% 48% 52% / 58% 58% 42% 42%" }}
              ></div>

              {/* Image */}
              <div className="relative mt-6">
                <Image
                  src="/Rufaro.png"
                  alt="Rufaro Ndhlovu"
                  width={600}
                  height={600}
                  className="object-contain z-10"
                />
              </div>

              {/* Hero Card Image */}
              <Image
                src="/HeroCardImg.png"
                alt="Hero image of a developer object"
                width={250}
                height={250}
                className="hidden sm:block sm:absolute bottom-10 mb-2 md:mb-4 md:left-[-10px] z-20"
              />

              {/* Availability badge */}
              <div className="absolute bottom-0 sm:bottom-1 lg:bottom-2 sm:left-18 bg-[var(--bg-card)] border border-white/10 px-4 py-2 rounded-full text-sm text-white backdrop-blur-md">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Available for opportunities
              </div>
            </div>

            <div className="mt-10 sm:mt-8 pb-4 ">
              <HeroLinks />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
