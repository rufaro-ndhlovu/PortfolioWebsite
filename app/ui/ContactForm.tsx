"use client";

import React from "react";
import { Astroid } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="bg-[var(--bg-card)] mt-4 p-6 rounded-4xl border border-white/10 backdrop-blur-md">
      <form className="flex flex-col gap-2 text-[var(--text-muted)]">
        {/* Each input field has a label, and the inputs have a pink glow border and rounded corners */}

        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          id="name"
          className="border border-[var(--pink-glow)] rounded-2xl p-2 bg-[var(--bg-section)]"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-[var(--pink-glow)] rounded-2xl p-2 bg-[var(--bg-section)]"
          placeholder="example@corp.com"
        />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          className="border border-[var(--pink-glow)] rounded-2xl p-2 bg-[var(--bg-section)]"
          placeholder="Front-End Developer Role"
        />

        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Hi Rufaro, I'd love to discuss..."
          className="border border-[var(--pink-glow)] rounded-2xl p-2 bg-[var(--bg-section)]"
          name="message"
        />

        <div className="flex flex-row items-center justify-center mt-2">
          <button className="font-bold text-[var(--text-dark)] bg-[var(--pink-main)] py-3 px-4 rounded-full flex flex-row items-center gap-2">
            <Astroid size={16} color="#e8869a" strokeWidth={3} /> Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
