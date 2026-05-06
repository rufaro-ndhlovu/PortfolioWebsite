"use client";

import React, { useState } from "react";
import { Astroid } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "motion/react";

// types/email.ts
export interface EmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setIsSending] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to send");

      toast.success("Message sent! I'll be in touch soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-[var(--bg-card)] mt-4 p-6 rounded-4xl border border-white/10 backdrop-blur-md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 text-[var(--text-muted)]"
      >
        {/* Each input field has a label, and the inputs have a pink glow border and rounded corners */}

        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          id="name"
          className="border border-[var(--pink-glow)] rounded-2xl p-2 bg-[var(--bg-section)]"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-[var(--pink-glow)] rounded-2xl p-2 bg-[var(--bg-section)]"
          placeholder="example@corp.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          className="border border-[var(--pink-glow)] rounded-2xl p-2 bg-[var(--bg-section)]"
          placeholder="Front-End Developer Role"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Hi Rufaro, I'd love to discuss..."
          className="border border-[var(--pink-glow)] rounded-2xl p-2 bg-[var(--bg-section)]"
          name="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          id="message"
          required
        />

        <div className="flex flex-row items-center justify-center mt-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="font-bold text-[var(--text-dark)] bg-[var(--pink-main)] hover:bg-[var(--pink-light)] hover:text-[var(--text-body)] hover:cursor-pointer py-3 px-4 rounded-full flex flex-row items-center gap-2"
          >
            <Astroid size={16} color="#e8869a" strokeWidth={3} /> Send Message
          </motion.button>
        </div>
      </form>
    </div>
  );
}
