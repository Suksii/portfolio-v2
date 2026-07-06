"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FiGithub } from "react-icons/fi";
import { RxArrowTopRight } from "react-icons/rx";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";
import { projects, type Project } from "@/lib/data";

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

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading index="03" kicker="selected work" title="Things I've built" />
      <div className="flex flex-col gap-24 md:gap-32">
        {projects.map((p, i) => (
          <ProjectRow key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
