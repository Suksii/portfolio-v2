"use client";

import { motion } from "motion/react";
import { RxArrowTopRight } from "react-icons/rx";
import { dayJob } from "@/lib/data";

/** Full-width case-study card for the platform/ERP work that has no single storefront to link. */
export function DayJob() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="card-surface relative overflow-hidden rounded-3xl p-7 sm:p-10"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-pink/15 blur-3xl" />

      <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="font-hand text-2xl text-violet">{dayJob.kicker}</p>
          <h3 className="mt-1 font-display text-3xl font-bold sm:text-4xl">
            {dayJob.title}
          </h3>
          <div className="mt-5 space-y-4">
            {dayJob.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {dayJob.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-card-border bg-card px-3 py-1 text-xs font-medium text-muted"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {dayJob.links.map((l, i) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium ${
                  i === 0
                    ? "bg-foreground text-background"
                    : "border border-card-border bg-card transition-colors hover:border-violet"
                }`}
              >
                {l.label}
                <RxArrowTopRight className="transition-transform duration-300 group-hover/btn:rotate-45" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid content-center gap-4">
          {dayJob.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
              className="flex items-center gap-5 rounded-2xl border border-card-border bg-card px-5 py-4"
            >
              <span className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                {m.value}
              </span>
              <span className="text-sm leading-snug text-muted">{m.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
