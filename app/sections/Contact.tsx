"use client";

import React, { useRef } from "react";
import Label from "../ui/Label";
import ContactForm from "../ui/ContactForm";
import { FaHeart } from "react-icons/fa";
import ContactLinks from "../ui/ContactLinks";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { motion } from "motion/react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function Contact() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let split = SplitText.create(".contactWords", {
        type: "words",
      });

      if (!container.current) return;

      gsap.from(split.words, {
        scrollTrigger: ".contactWords",
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: {
          amount: 0.8,
          from: "random",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      id="contact"
      className="contactWords px-4 py-6 bg-[var(--bg-dark)] "
      ref={container}
    >
      <Label>Contact</Label>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-4">
        <div>
          <h2
            className="contactWords font-bold text-[var(--pink-main)] mt-4 text-2xl md:text-3xl italic"
            style={{
              fontFamily: "var(--font-petitFormalScript)",
            }}
          >
            Let's build something amazing together <FaHeart />
          </h2>

          <p className="contactWords text-[var(--text-muted)] mt-4 mb-5">
            I'm actively looking for Front-End Developer roles where I can build
            things that matter. Whether you have a Front-End Developer role in
            mind or just want to chat about building something great - I'd love
            to hear from you.
          </p>

          <ContactLinks />
          <div className="contactWords flex flex-col gap-2 text-[var(--bg-hero-light)] mt-6">
            <p className="flex flex-row items-center gap-2">
              <MdEmail /> farohanna@googlemail.com
            </p>
            <p className="flex flex-row items-center gap-2">
              <IoLocation /> York, UK
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="px-4 md:px-7 py-2 md:py-0">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
