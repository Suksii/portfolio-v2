"use client";

import { motion } from "motion/react";
import { RxArrowTopRight } from "react-icons/rx";
import { profile, socials } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mx-auto max-w-6xl px-5 pb-10 pt-10 sm:px-8">
      {/* big CTA name */}
      <a href="#top" className="group block">
        <motion.h2
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-[15vw] font-bold leading-none tracking-tight md:text-[11rem]"
        >
          <span className="text-gradient">Let&apos;s talk</span>
          <RxArrowTopRight className="ml-2 inline-block h-[0.5em] w-[0.5em] align-top text-foreground transition-transform duration-300 group-hover:rotate-45" />
        </motion.h2>
      </a>

      <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-card-border pt-8 text-sm text-muted sm:flex-row">
        <p>
          © {year} {profile.name} — built with Next.js, TypeScript & Motion.
        </p>
        <div className="flex gap-5">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
