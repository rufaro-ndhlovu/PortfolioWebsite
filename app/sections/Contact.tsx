"use client";

import React from "react";
import Label from "../ui/Label";
import ContactForm from "../ui/ContactForm";
import { FaHeart } from "react-icons/fa";
import ContactLinks from "../ui/ContactLinks";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

export default function Contact() {
  return (
    <section className="px-4 py-6 bg-[var(--bg-dark)] ">
      <Label>Contact</Label>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-4">
        <div>
          <h2
            className="font-bold text-[var(--pink-main)] mt-4 text-2xl md:text-3xl italic"
            style={{
              fontFamily: "var(--font-petitFormalScript)",
            }}
          >
            Let's build something amazing together <FaHeart />
          </h2>

          <p className="text-[var(--text-muted)] mt-4 mb-5">
            I'm open to new opportunities and exciting collaborations. Whether
            you have a Front-End Developer role in mind or just want to chat
            about building something great - I'd love to hear from you.
          </p>

          <ContactLinks />
          <div className="flex flex-col gap-2 text-[var(--bg-hero-light)] mt-6">
            <p className="flex flex-row items-center gap-2">
              <MdEmail /> farohanna@gmail.com
            </p>
            <p className="flex flex-row items-center gap-2">
              <IoLocation /> York, UK
            </p>
          </div>
        </div>

        <div className="px-4 md:px-7 py-2 md:py-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
