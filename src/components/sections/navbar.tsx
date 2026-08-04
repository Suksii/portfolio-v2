"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
const sectionIds = ["about", "skills", "work", "contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();

  /**
   * The section under an imaginary line just above the middle of the screen.
   * Deterministic on purpose: when two sections meet, exactly one contains the
   * line, so there is no tie for the pill to land on the wrong side of.
   */
  function syncActive() {
    const line = window.scrollY + window.innerHeight * 0.475;
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (line >= top && line < top + el.offsetHeight) {
        setActive(id);
        return;
      }
    }
    setActive("");
  }

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
    syncActive();
  });

  useEffect(() => {
    syncActive();
    window.addEventListener("resize", syncActive);
    return () => window.removeEventListener("resize", syncActive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={`flex w-full max-w-4xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500 ${
            scrolled
              ? "card-surface shadow-lg shadow-black/5"
              : "border border-transparent"
          }`}
        >
          <a
            href="#top"
            className="group flex items-center gap-2 pl-2"
            aria-label="Home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground font-display text-sm font-bold text-background transition-transform duration-300 group-hover:rotate-12">
              {profile.initials}
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-violet/12 ring-1 ring-violet/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={isActive ? "text-foreground" : ""}>
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-card-border bg-card md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <HiMenuAlt4 className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-card-border"
              >
                <IoClose className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  className="font-display text-4xl font-bold"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
