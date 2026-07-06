"use client";

/**
 * Fixed decorative background: dotted grid + floating colored blobs.
 * Purely presentational, sits behind all content.
 */
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-dotgrid opacity-70" />

      <div className="animate-float absolute -left-24 top-[-6rem] h-[32rem] w-[32rem] rounded-full bg-violet/25 blur-[120px] dark:bg-violet/30" />
      <div
        className="animate-float absolute right-[-8rem] top-[18%] h-[26rem] w-[26rem] rounded-full bg-pink/20 blur-[120px] dark:bg-pink/25"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="animate-float absolute bottom-[6%] left-[12%] h-[24rem] w-[24rem] rounded-full bg-cyan/20 blur-[120px] dark:bg-cyan/20"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="animate-float absolute bottom-[24%] right-[16%] h-[20rem] w-[20rem] rounded-full bg-orange/15 blur-[120px] dark:bg-orange/20"
        style={{ animationDelay: "-1.5s" }}
      />

      {/* subtle vignette to keep contrast in the corners */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_55%,var(--background)_100%)]" />
    </div>
  );
}
