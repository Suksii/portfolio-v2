"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LuSun, LuMoon } from "react-icons/lu";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative grid h-10 w-10 place-items-center rounded-full border border-card-border bg-card transition-colors hover:border-violet ${
        className ?? ""
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={mounted ? (isDark ? "moon" : "sun") : "placeholder"}
          initial={{ y: -14, opacity: 0, rotate: -30 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 14, opacity: 0, rotate: 30 }}
          transition={{ duration: 0.25 }}
        >
          {mounted && isDark ? (
            <LuMoon className="h-[1.15rem] w-[1.15rem]" />
          ) : (
            <LuSun className="h-[1.15rem] w-[1.15rem]" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
