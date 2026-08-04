"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { facts, profile, story } from "@/lib/data";

const yearsCoding = new Date().getFullYear() - 2023;

const stats = [
  { value: `${yearsCoding}+`, label: "Years building for the web" },
  { value: "20+", label: "Projects shipped" },
  { value: "30+", label: "E-commerce sites maintained" },
];

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32"
    >
      <SectionHeading
        index="01"
        kicker="a little about me"
        title="Nice to meet you"
      />

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <RevealGroup className="space-y-5">
            {story.map((p, i) => (
              <Reveal key={i}>
                <p
                  className={`leading-relaxed text-muted ${
                    i === 0 ? "text-lg text-foreground sm:text-xl" : ""
                  }`}
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </RevealGroup>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-card-border bg-card p-4"
              >
                <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-muted sm:text-sm">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* fact card */}
        <Reveal delay={0.15}>
          <div className="card-surface relative overflow-hidden rounded-3xl p-7">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet/20 blur-3xl" />
            <p className="font-hand text-2xl text-violet">the essentials</p>
            <ul className="mt-5 divide-y divide-card-border">
              {facts.map((f) => (
                <li
                  key={f.label}
                  className="flex items-start justify-between gap-4 py-3.5"
                >
                  <span className="text-sm text-muted">{f.label}</span>
                  <span className="text-right text-sm font-medium">
                    {f.value}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {profile.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
