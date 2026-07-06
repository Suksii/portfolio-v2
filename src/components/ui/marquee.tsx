"use client";

import type { ReactNode } from "react";

/** Infinite horizontal marquee. Renders children twice for a seamless loop. */
export function Marquee({
  children,
  reverse = false,
  className,
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`group flex overflow-hidden ${className ?? ""}`}
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={`flex shrink-0 items-center gap-4 pr-4 ${
            reverse ? "animate-marquee-rev" : "animate-marquee"
          } group-hover:[animation-play-state:paused]`}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
