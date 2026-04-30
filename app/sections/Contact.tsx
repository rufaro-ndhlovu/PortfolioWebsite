"use client";

import React from "react";
import Label from "../ui/Label";

export default function Contact() {
  return (
    <section className="p-4 bg-[var(--bg-dark)]">
      <Label>Contact</Label>
      <div>
        <h2
          className="font-bold text-[var(--pink-light)] mt-4 text-lg"
          style={{
            fontFamily: "var(--font-petitFormalScript)",
          }}
        >
          Let's build something amazing together
        </h2>

        <p className="text-[var(--text-muted)] mt-4">
          I'm open to new opportunities and exciting collaborations. Whether you
          have a Front-End Developer role in mind or just want to chat about
          building something great - I'd love to hear from you.
        </p>
      </div>
    </section>
  );
}
