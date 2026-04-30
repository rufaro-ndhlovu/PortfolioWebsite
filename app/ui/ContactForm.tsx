"use client";

import React from "react";
import Button from "./Button";

export default function ContactForm() {
  return (
    <div className="bg-[var(--bg-card)] mt-8 p-6 rounded-lg border border-white/10 backdrop-blur-md">
      <form className="flex flex-col gap-4 text-[var(--text-muted)]">
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

        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Start typing..."
          className="border border-[var(--pink-glow)] rounded-2xl p-2 bg-[var(--bg-section)]"
          name="message"
        />

        <Button onClick={() => {}} color="pink-soft">
          Send message
        </Button>
      </form>
    </div>
  );
}
