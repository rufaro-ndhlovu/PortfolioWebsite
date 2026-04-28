"use client";

import React from "react";
import GradientText from "../ui/GradientText";
import GradientButton from "../ui/GradientButton";
import HeroImage from "../ui/HeroImage";
import HeroText from "../ui/HeroText";

export default function Hero() {
  return (
    <div className="p-2 flex flex-row items-center justify-between w-full">
      <div>
        <HeroText />
      </div>
      <div>
        <HeroImage />
      </div>
    </div>
  );
}
