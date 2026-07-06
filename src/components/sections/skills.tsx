"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { skills, otherSkills, type Skill } from "@/lib/data";

function Chip({ skill }: { skill: Skill }) {
  return (
    <div className="card-surface flex items-center gap-3 rounded-2xl px-5 py-3 transition-colors hover:border-violet">
      <span className="relative grid h-9 w-9 shrink-0 place-items-center">
        <Image
          src={skill.image}
          alt={skill.name}
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
        />
      </span>
      <span className="whitespace-nowrap font-display font-medium">{skill.name}</span>
    </div>
  );
}

export function Skills() {
  const half = Math.ceil(skills.length / 2);
  const rowA = skills.slice(0, half);
  const rowB = skills.slice(half);

  return (
    <section id="skills" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="02" kicker="my toolbox" title="Skills & tech" />
      </div>

      <div className="flex flex-col gap-5">
        <Marquee>
          {rowA.map((s) => (
            <Chip key={s.name} skill={s} />
          ))}
        </Marquee>
        <Marquee reverse>
          {rowB.map((s) => (
            <Chip key={s.name} skill={s} />
          ))}
        </Marquee>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-5 sm:px-8">
        <p className="mb-5 font-hand text-2xl text-violet">also comfortable with</p>
        <div className="flex flex-wrap gap-3">
          {otherSkills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-full border border-card-border bg-card px-5 py-2 font-display text-sm font-medium"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
