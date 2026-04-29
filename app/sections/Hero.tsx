"use client";

import React from "react";
import GradientText from "../ui/GradientText";
import GradientButton from "../ui/GradientButton";
import Image from "next/image";
import Button from "../ui/Button";
import NavBar from "./NavBar";

export default function Hero() {
  return (
    <section className="relative" style={{ background: "var(--bg-hero-img)" }}>
      <NavBar />
      <div className="relative w-full min-h-screen flex items-center justify-between px-10 lg:px-20 overflow-hidden">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] lg:w-[900px] h-[900px] bg-[var(--pink-main)] opacity-20 blur-[120px] rounded-full"></div>

        {/* LEFT SIDE */}
        <div className="max-w-xl z-10">
          <p className="text-[var(--pink-soft)] tracking-widest text-sm mb-4 font-bold">
            HI, I'M
          </p>

          <h1 className="text-6xl lg:text-8xl leading-tight font-serif">
            <span
              className="italic text-[var(--pink-main)] font-bold"
              style={{
                fontFamily: "var(--font-petitFormalScript)",
              }}
            >
              Rufaro
            </span>
            <br />
            <span className="text-[var(--text-primary)]">Ndhlovu</span>
          </h1>

          <p className="mt-4 text-[var(--pink-main)] font-semibold tracking-wide">
            FULL-STACK DEVELOPER
          </p>

          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
            I build scalable, accessible web applications from front to back,
            turning ideas into performant, real-world products.
          </p>

          <div className="flex gap-4 mt-8">
            {/* 2 buttons side by side */}
            <Button color="pink-main" textColor="text-dark" onClick={() => {}}>
              View My Work
            </Button>

            <button className="py-2 px-3 rounded-full font-bold text-[var(--text-hero)] bg-transparent border border-[var(--pink-main)] backdrop-blur-md">
              Download CV
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-center">
          {/* Glow circle behind image */}
          <div
            className="absolute w-[500px] h-[500px] bg-[var(--pink-main)] opacity-30 blur-[100px] rounded-full"
            style={{ borderRadius: "50% 50% 48% 52% / 58% 58% 42% 42%" }}
          ></div>

          {/* Image */}
          <div className="relative">
            <Image
              src="/Rufaro.png"
              alt="Rufaro Ndhlovu"
              width={600}
              height={600}
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Availability badge */}
          <div className="absolute bottom-4 left-18 bg-[var(--bg-card)] border border-white/10 px-4 py-2 rounded-full text-sm text-white backdrop-blur-md">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Available for opportunities
          </div>
        </div>
      </div>
    </section>
  );
}
