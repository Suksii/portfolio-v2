# portfolio-v2

A rewrite of my portfolio with a heavy focus on design and motion — the
"playful & creative" direction. Built with the latest Next.js, TypeScript,
Tailwind CSS v4 and Motion.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (CSS-first config in `globals.css`)
- **Motion** (`motion/react`) for all animation
- **next-themes** — dark default + light/dark toggle
- **@emailjs/browser** — client-side contact form (lazy-loaded)
- **sonner** — toasts
- **react-icons**

## Features

- Custom cursor (dot + trailing ring that grows over interactive elements)
- Animated aurora-blob background over a dotted grid, theme-aware
- Magnetic buttons, 3D tilt project cards with cursor glare
- Scroll-reveal + staggered entrance animations, scroll-spy nav
- Rotating role text, dual skill marquees, animated section headings
- Fully responsive, respects `prefers-reduced-motion`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Editing content

All portfolio content (profile, socials, story, skills, projects, EmailJS
config) lives in a single file: [`src/lib/data.ts`](src/lib/data.ts).
Images are in `public/` (`projects/`, `skills/`, `assets/`) and the CV at
`public/CV.pdf`.

## Structure

```
src/
  app/
    layout.tsx        fonts, metadata, ThemeProvider
    page.tsx          composes all sections
    globals.css       Tailwind v4 theme, palette, utilities, keyframes
  components/
    background.tsx    aurora blobs + dotted grid
    cursor.tsx        custom cursor
    theme-provider.tsx / theme-toggle.tsx
    ui/               reveal, magnetic, tilt-card, marquee,
                      section-heading, social-icon
    sections/         navbar, hero, about, skills, projects,
                      contact (+ contact-form), footer
  lib/data.ts         all content
```

## Notes

- Deploy-agnostic: the contact form is client-side (EmailJS), so it works on
  Vercel or a static host. For a static export, add `output: "export"` to
  `next.config.ts` and swap `next/image` usage to unoptimized if needed.
- On Node 25, `@emailjs/browser` is imported lazily inside the submit handler
  because it touches `localStorage` at import time, which throws during server
  prerender.
