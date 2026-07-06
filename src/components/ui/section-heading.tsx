"use client";

import { motion } from "motion/react";

/** Big numbered section heading with an animated underline accent. */
export function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker?: string;
}) {
  return (
    <div className="mb-12 flex flex-col gap-3 md:mb-16">
      <motion.span
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-hand text-2xl text-violet"
      >
        {kicker}
      </motion.span>
      <div className="flex items-end gap-4">
        <span className="font-display text-sm font-medium tracking-widest text-muted">
          {index}
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-bold leading-none sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h2>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="h-px origin-left bg-gradient-to-r from-violet via-pink to-transparent"
      />
    </div>
  );
}
