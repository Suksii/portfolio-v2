"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { FiGithub, FiLock } from "react-icons/fi";
import { RxArrowTopRight, RxChevronDown } from "react-icons/rx";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";
import { privateWork, projects, type Project } from "@/lib/data";

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
    >
      {/* image */}
      <div className={`group relative ${flip ? "md:order-2" : ""}`}>
        <span className="pointer-events-none absolute -top-8 left-2 z-10 font-display text-7xl font-bold text-card-border sm:text-8xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <TiltCard className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-card-border card-surface">
          <div className="absolute inset-0 bg-gradient-to-br from-violet/10 via-transparent to-pink/10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </TiltCard>
      </div>

      {/* content */}
      <div className={flip ? "md:order-1" : ""}>
        <div className="mb-3 flex items-center gap-3">
          {project.year && (
            <span className="font-hand text-2xl text-violet">{project.year}</span>
          )}
        </div>
        <h3 className="font-display text-3xl font-bold sm:text-4xl">{project.title}</h3>
        {project.role && (
          <p className="mt-2.5 text-sm text-muted">
            <span className="font-medium text-foreground">Role — </span>
            {project.role}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-card-border bg-card px-3 py-1 text-xs font-medium text-muted"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-5 leading-relaxed text-muted">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
            >
              Visit site
              <RxArrowTopRight className="transition-transform duration-300 group-hover/btn:rotate-45" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-violet"
            >
              <FiGithub />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/** Compact variant for the projects revealed behind "more work". */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group card-surface flex flex-col overflow-hidden rounded-3xl"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-violet/10 via-transparent to-pink/10" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl font-bold">{project.title}</h3>
          {project.year && (
            <span className="font-hand text-lg text-violet">{project.year}</span>
          )}
        </div>

        {project.role && (
          <p className="mt-2 text-xs text-muted">{project.role}</p>
        )}

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-card-border bg-card px-2.5 py-0.5 text-[11px] font-medium text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background"
            >
              Visit site
              <RxArrowTopRight className="transition-transform duration-300 group-hover/btn:rotate-45" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-card px-4 py-2 text-xs font-medium transition-colors hover:border-violet"
            >
              <FiGithub />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading index="03" kicker="selected work" title="Things I've built" />
      <div className="flex flex-col gap-24 md:gap-32">
        {featured.map((p, i) => (
          <ProjectRow key={p.title} project={p} index={i} />
        ))}
      </div>

      {rest.length > 0 && (
        <div className="mt-24 md:mt-32">
          <div className="flex items-center gap-5">
            <span className="font-hand text-2xl text-violet">more work</span>
            <span className="h-px flex-1 bg-card-border" />
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-violet"
            >
              {expanded ? "Show less" : `Show ${rest.length} more`}
              <RxChevronDown
                className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          <AnimatePresence initial={false}>
            {expanded && (
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((p, i) => (
                  <ProjectCard key={p.title} project={p} index={i} />
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      )}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-14 flex items-start gap-3 rounded-2xl border border-dashed border-card-border px-5 py-4 text-sm leading-relaxed text-muted"
      >
        <FiLock className="mt-0.5 shrink-0 text-violet" aria-hidden />
        {privateWork}
      </motion.p>
    </section>
  );
}
