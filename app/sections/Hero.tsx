"use client";

import React from "react";
import GradientText from "../ui/HeroText";
import GradientButton from "../ui/GradientButton";

export default function Hero() {
  return (
    <div>
      <p>HI, I'M</p>
      <h1>Rufaro Ndhlovu</h1>
      <p>FULL-STACK DEVELOPER</p>
      <p>
        I build accessible, high-performance web applications that solve real
        problems and create meaningful digital experiences.
      </p>
      <GradientButton onClick={() => {}}>View My Work</GradientButton>
    </div>
  );
}
