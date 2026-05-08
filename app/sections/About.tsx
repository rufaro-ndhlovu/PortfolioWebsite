"use client";

import React, { useRef } from "react";
import Label from "../ui/Label";
import Tag from "../ui/Tag";
import { motion } from "motion/react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let split = SplitText.create(".aboutWords", {
        type: "words",
      });

      gsap.from(split.words, {
        scrollTrigger: ".aboutWords",
        duration: 1.5,
        y: 100,
        autoAlpha: 0,
        stagger: {
          amount: 0.9,
          from: "random",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      id="about"
      ref={container}
      className="aboutSection bg-[var(--bg-section)] px-5 py-5 md:py-10 text-[var(--text-dark)]"
    >
      <div>
        <Label>ABOUT ME</Label>
        <div>
          <h2
            className="aboutWords text-2xl mb-3 mt-4 font-semibold"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            Developer. Problem solver. <br />
            <span
              className="aboutWords italic text-[var(--pink-main)] font-bold"
              style={{
                fontFamily: "var(--font-petitFormalScript)",
              }}
            >
              Lifelong learner.
            </span>
          </h2>
          <p className="aboutWords text-[var(--pink-light)] mb-4">
            I'm Rufaro, a Front-End Developer passionate about creating clean,
            responsive, and accessible applications that people genuinely enjoy
            using. I love the balance of creativity and logic that comes with
            front-end development, where thoughtful design meets technical
            problem-solving.
          </p>
          <p className="aboutWords text-[var(--pink-light)] mb-4">
            My experience spans both personal projects and real-world systems,
            giving me a strong understanding of how users interact with digital
            products beyond just the visual layer. Through previous roles, I've
            worked with dynamic interfaces, accessibility improvements, complex
            validation flows, SQL data handling, and live troubleshooting, all
            of which strengthened the way I approach building reliable
            user-focused experiences.
          </p>
          <p className="aboutWords text-[var(--pink-light)] mb-4">
            What draws me to development is the process of turning ideas into
            something tangible. I enjoy building interfaces that not only look
            good but feel seamless to use, paying attention to the small details
            that shape the overall experience.
          </p>
          <p className="aboutWords text-[var(--pink-light)]">
            Outside of tech, I’m usually exploring new places, trying new food
            spots or staying active in the gym.
          </p>
          <div className="flex flex-row mt-6 gap-4">
            <Tag>Zambian</Tag>
            <Tag>Fitness lover</Tag>
            <Tag>Foodie</Tag>
            <Tag>Travel Enthusiast</Tag>
          </div>
        </div>
      </div>
    </section>
  );
}
