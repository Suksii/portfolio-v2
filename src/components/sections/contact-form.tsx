"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";
import { FiSend } from "react-icons/fi";
import { emailjsConfig } from "@/lib/data";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    try {
      // Loaded lazily in the browser only — the lib touches localStorage at
      // import time, which throws during server prerender on Node 25.
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        { publicKey: emailjsConfig.publicKey }
      );
      toast.success("Message sent — I'll get back to you soon!");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  }

  const fieldClass =
    "w-full rounded-2xl border border-card-border bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-violet";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="user_name" className="text-xs font-medium text-muted">
            Name
          </label>
          <input
            id="user_name"
            name="user_name"
            required
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="user_email" className="text-xs font-medium text-muted">
            Email
          </label>
          <input
            id="user_email"
            name="user_email"
            type="email"
            required
            placeholder="you@email.com"
            className={fieldClass}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-medium text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project…"
          className={`${fieldClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send message"}
        {!loading && (
          <FiSend className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        )}
      </button>
    </form>
  );
}
