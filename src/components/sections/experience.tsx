"use client";

import { motion } from "motion/react";
import { RxArrowTopRight } from "react-icons/rx";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience, type Experience as Entry } from "@/lib/data";

function Item({ entry, index }: { entry: Entry; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid gap-3 pl-10 md:grid-cols-[180px_1fr] md:gap-10 md:pl-14"
    >
      {/* dot on the line */}
      <span
        aria-hidden
        className={`absolute left-[11px] top-2 grid h-3 w-3 place-items-center rounded-full md:left-[19px] ${
          entry.current ? "bg-lime" : "border-2 border-violet bg-background"
        }`}
      >
        {entry.current && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
        )}
      </span>

      <span className="font-hand text-xl leading-tight text-violet md:pt-0.5">
        {entry.period}
      </span>

      <div className="card-surface rounded-3xl p-5 transition-colors hover:border-violet sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-xl font-bold sm:text-2xl">{entry.title}</h3>
          {entry.url ? (
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {entry.org}
              <RxArrowTopRight className="transition-transform duration-300 group-hover:rotate-45" />
            </a>
          ) : (
            <span className="text-sm font-medium text-muted">{entry.org}</span>
          )}
        </div>
        <p className="mt-3 leading-relaxed text-muted">{entry.summary}</p>
        {entry.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-card-border bg-card px-3 py-1 text-xs font-medium text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.li>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32"
    >
      <SectionHeading index="02" kicker="how I got here" title="Experience" />

      <div className="relative">
        {/* vertical line */}
        <motion.span
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-2 left-4 top-2 w-px origin-top bg-gradient-to-b from-violet via-pink to-transparent md:left-6"
        />
        <ol className="space-y-8 md:space-y-10">
          {experience.map((e, i) => (
            <Item key={`${e.org}-${e.period}`} entry={e} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
