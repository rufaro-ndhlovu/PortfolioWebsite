import React from "react";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="image">
      <Image src="/Rufaro.png" alt="Rufaro Ndhlovu" width={400} height={400} />
    </div>
  );
}
