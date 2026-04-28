"use client";

import React from "react";
import GradientText from "../ui/GradientText";
import GradientButton from "../ui/GradientButton";
import HeroImage from "./HeroImage";

export default function HeroText() {
  return (
    <div className="p-2 flex flex-col items-center justify-between">
      <p className="text-[var(--pink-logo)] font-bold">HI, I'M</p>
      <h1 className=" text-8xl flex-wrap">
        <GradientText>Rufaro</GradientText>
        <span className="text-[var(--text-brown)] italic">Ndhlovu</span>
      </h1>
      <p className="text-[var(--pink-name)] font-bold">FULL-STACK DEVELOPER</p>
      <p className="text-[var(--text-brown)]">
        I build accessible, high-performance web applications that solve real
        problems and create meaningful digital experiences.
      </p>
      <br />
      <GradientButton onClick={() => {}}>View My Work</GradientButton>
    </div>
  );
}
