"use client";

import React from "react";
import Label from "../ui/Label";
import ContactForm from "../ui/ContactForm";
import { FaHeart } from "react-icons/fa";
import ContactLinks from "../ui/ContactLinks";

export default function Contact() {
  return (
    <section className="px-4 py-6 bg-[var(--bg-dark)]">
      <Label>Contact</Label>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-4">
        <div>
          <h2
            className="font-bold text-[var(--pink-light)] mt-4 text-2xl"
            style={{
              fontFamily: "var(--font-petitFormalScript)",
            }}
          >
            Let's build something amazing together <FaHeart />
          </h2>

          <p className="text-[var(--text-muted)] mt-4 mb-4">
            I'm open to new opportunities and exciting collaborations. Whether
            you have a Front-End Developer role in mind or just want to chat
            about building something great - I'd love to hear from you.
          </p>

          <ContactLinks />
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
