"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { RxArrowTopRight } from "react-icons/rx";
import { RxDownload } from "react-icons/rx";
import { FiArrowDownRight } from "react-icons/fi";
import { Magnetic } from "@/components/ui/magnetic";
import { SocialIcon } from "@/components/ui/social-icon";
import { profile, socials } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-[1.1em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient whitespace-nowrap"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const floatBadges = [
  { label: "Next.js", className: "-left-6 top-10 rotate-[-8deg] text-violet", delay: 0 },
  { label: "React", className: "-right-8 top-24 rotate-[10deg] text-cyan", delay: 0.4 },
  { label: "TypeScript", className: "-left-10 bottom-24 rotate-[6deg] text-pink", delay: 0.8 },
  { label: "Laravel", className: "-right-6 bottom-10 rotate-[-6deg] text-orange", delay: 1.2 },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8"
    >
      <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-6">
        {/* left */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-1.5 text-sm text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            Available for freelance & full-time
          </motion.div>

          <motion.p
            variants={item}
            className="font-hand text-3xl text-violet"
          >
            Hey! I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-1 font-display text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
          >
            Šućo
            <br />
            Ramović
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 font-display text-2xl font-medium sm:text-3xl"
          >
            <RotatingRole />
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background transition-transform"
              >
                Let&apos;s talk
                <RxArrowTopRight className="transition-transform duration-300 group-hover:rotate-45" />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href={profile.cv}
                download
                className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-6 py-3 font-medium transition-colors hover:border-violet"
              >
                Download CV
                <RxDownload />
              </a>
            </Magnetic>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="grid h-11 w-11 place-items-center rounded-full border border-card-border bg-card text-lg text-muted transition-all hover:-translate-y-1 hover:border-violet hover:text-foreground"
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px]"
        >
          {/* rotating dashed ring */}
          <div className="animate-spin-slow absolute -inset-5 rounded-[2.6rem] border-2 border-dashed border-violet/30" />
          {/* colored offset block */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.4rem] bg-gradient-to-br from-violet via-pink to-orange" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.4rem] border border-card-border">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 768px) 80vw, 340px"
              className="object-cover"
            />
          </div>

          {floatBadges.map((b) => (
            <motion.span
              key={b.label}
              className={`animate-float absolute ${b.className} card-surface rounded-2xl px-3 py-1.5 font-display text-sm font-semibold shadow-lg`}
              style={{ animationDelay: `${b.delay}s` }}
            >
              {b.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-14 hidden items-center gap-2 self-start text-sm text-muted md:inline-flex"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <FiArrowDownRight className="text-lg" />
        </motion.span>
        Scroll to explore
      </motion.a>
    </section>
  );
}
