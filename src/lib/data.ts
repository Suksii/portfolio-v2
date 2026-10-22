export const profile = {
  name: "Šućo Ramović",
  firstName: "Šućo",
  initials: "ŠR",
  roles: ["Full Stack Developer", "Electrical Engineer"],
  tagline: "I build fast, thoughtful web experiences — from headless storefronts to full ERP systems.",
  location: "Podgorica, Montenegro",
  email: "sucoramovic96@gmail.com",
  phone: "+382 69 741 999",
  birthday: "1996-07-27",
  education: "Faculty of Electrical Engineering, University of Montenegro",
  company: "Data Design",
  cv: "/CV.pdf",
  photo: "/assets/suco.jpg",
} as const;

export const socials = [
  { name: "GitHub", url: "https://github.com/Suksii", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/suco-ramovic-58a728256/",
    icon: "linkedin",
  },
  { name: "Instagram", url: "https://www.instagram.com/suksiiii/", icon: "instagram" },
  { name: "Facebook", url: "https://www.facebook.com/suco.ramovic/", icon: "facebook" },
] as const;

export type Social = (typeof socials)[number];

export const story: string[] = [
  "Hello, my name is Šućo. I graduated from the Faculty of Electrical Engineering in Podgorica, University of Montenegro — but even before that I was hooked on programming. It all started with C in my second year, and I went a little crazy solving logic problems in it.",
  "After graduation I dove into web development and fell in love. I'm a self-taught developer, constantly learning. Today I work full-time as a Web Developer at Data Design, and I work across the stack — React, Next.js and TypeScript on the front, PHP/Laravel behind it. I help build the shared e-commerce API every one of our stores runs on, keep more than 30 storefronts alive in production, and work on a large multi-module ERP.",
  "Before that I spent years as an engineer at the national broadcaster RTCG, where I started building internal web apps. I'm responsible, curious, and always trying to do my best work on every project.",
];

export const facts = [
  { label: "Based in", value: "Podgorica, Montenegro" },
  { label: "Focus", value: "Full Stack Web Development" },
  { label: "Currently", value: "Web Developer @ Data Design" },
  { label: "Education", value: "Electrical Engineering, UoM" },
] as const;

export type Skill = { name: string; image: string };

export const skills: Skill[] = [
  { name: "HTML5", image: "/skills/html5.png" },
  { name: "CSS3", image: "/skills/css3.jpg" },
  { name: "JavaScript", image: "/skills/js.svg" },
  { name: "TypeScript", image: "/skills/typescript.png" },
  { name: "React", image: "/skills/react.svg" },
  { name: "Vue.js", image: "/skills/Vuejs.png" },
  { name: "Next.js", image: "/skills/nextjs.svg" },
  { name: "Node.js", image: "/skills/node-js.svg" },
  { name: "Express", image: "/skills/express.svg" },
  { name: "PHP", image: "/skills/php.svg" },
  { name: "Laravel", image: "/skills/laravel.svg" },
  { name: "Git", image: "/skills/git.svg" },
  { name: "SASS", image: "/skills/sass.svg" },
  { name: "Tailwind CSS", image: "/skills/tailwind.svg" },
  { name: "MySQL", image: "/skills/MySQL.svg" },
  { name: "PostgreSQL", image: "/skills/postgresql.svg" },
  { name: "MongoDB", image: "/skills/mongoDB.png" },
];

export const otherSkills = ["C", "C++", "MATLAB", "Linux", "Arduino"];

export type Project = {
  title: string;
  year?: string;
  /** What I actually did on it — the part a feature list can't say. */
  role?: string;
  tags: string[];
  description: string;
  url?: string;
  github?: string;
  image: string;
  /** Shown as a full-width row; everything else lives behind "more work". */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Tehnoplus",
    year: "2026",
    role: "Front-end · back-end contributor",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "TanStack Query", "B2B", "E-commerce"],
    description:
      "An online store for one of Montenegro's largest consumer electronics and home appliance retailers, built on Next.js App Router with TypeScript over a Laravel REST API. Catalog by category and brand with sale campaigns and daily deals, search, product comparison, wishlist, cart and checkout with online payment, user accounts with orders and addresses, blog, store pages and job applications — plus a separate B2B wholesale mode with customer-specific pricing, its own home page and Excel catalog export. Uses Cache Components with a custom disk cache handler for catalogue performance, Sentry monitoring, generated sitemap, robots and Open Graph images, and a Vitest suite over the proxy, checkout and pricing logic.",
    url: "https://tehnoplus.me",
    image: "/projects/tehnoplus.webp",
    featured: true,
  },
  {
    title: "Lubenica",
    year: "2026",
    role: "Front-end · back-end contributor",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "TanStack Query", "E-commerce"],
    description:
      "An online furniture and home store for a retailer with six shops in Montenegro, built on Next.js App Router with TypeScript over a Laravel REST API. Catalog by category and brand, advanced search, sale campaigns, cart and checkout with online payment, wishlist, user accounts, blog and store pages — with server rendering and caching for catalogue performance, TanStack Query for data, and React Hook Form with Zod across the checkout flow.",
    url: "https://lubenicashop.me",
    image: "/projects/lubenica.jpg",
    featured: true,
  },
  {
    title: "Cvjećara Habitat",
    year: "2026",
    role: "Front-end · back-end contributor",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "i18n", "Vitest", "E-commerce"],
    description:
      "A bilingual online flower and gift shop built on Next.js App Router, with locale-prefixed routing for ME and EN, generated sitemap and robots, Open Graph images and a CMS-driven page builder. Catalog with category and price browsing, wedding and event section, wishlist, cart and a multi-step checkout with delivery scheduling, plus a newsletter integration. Covered by a Vitest suite over checkout schemas, routing boundaries, rate limiting and media handling.",
    url: "https://cvjecarahabitat.me",
    image: "/projects/habitat.jpg",
    featured: true,
  },
  {
    title: "Ksport",
    year: "2026",
    role: "Solo front-end · back-end contributor",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "REST API"],
    description:
      "A modern, headless e-commerce storefront for a sportswear retailer, built on Next.js + TypeScript over a Laravel REST API. Full catalog with categories, brands and advanced search, cart & checkout with online payment, wishlist, user accounts with order history and a store locator — SSR for performance/SEO and TanStack Query for data fetching.",
    url: "https://k-sport.me",
    image: "/projects/ksport.webp",
    featured: true,
  },
  {
    title: "BusTicket",
    year: "2025",
    role: "Solo front-end · back-end contributor",
    tags: ["Next.js", "TypeScript", "i18n", "AI Chatbot"],
    description:
      "An online bus-ticket booking platform in 15 languages via next-intl. Search routes, pick seats, pay online or offline, manage ticket history, verify return tickets and even rent a bus. Includes blogs, FAQ and an integrated AI chatbot, with Google OAuth, reCAPTCHA and payment integrations.",
    url: "https://busticket4.me",
    image: "/projects/busticket.webp",
    featured: true,
  },
  {
    title: "Kata Agency",
    year: "2025",
    role: "Solo — front end, back end and admin panel",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Custom CMS", "i18n"],
    description:
      "A bilingual site for an architecture and design studio, built solo end to end. Beyond the public site — projects, services, news and contact — I built the admin panel behind it: JWT auth with password reset, a TipTap rich-text editor, and full CRUD over projects, services, news and categories, so the studio publishes without touching code. Next.js 15 App Router with Prisma over PostgreSQL, next-intl for EN/ME.",
    url: "https://kataagency.com",
    github: "https://github.com/Suksii/katadesign-next",
    image: "/projects/katadesign.webp",
    featured: true,
  },
  {
    title: "LevelUp",
    year: "2025",
    role: "Solo front-end · back-end contributor",
    tags: ["PHP", "JavaScript", "SASS", "E-commerce"],
    description:
      "An e-commerce storefront on a custom PHP platform: full catalog with categories & brands, cart & checkout, wishlist, blog, multi-language, plus shipping, email and payment integrations. I built and maintained the store, including a full responsive UI redesign.",
    url: "https://level-up.me",
    image: "/projects/levelup.webp",
    featured: true,
  },
  {
    title: "TimePlus",
    year: "2025",
    role: "Solo front-end · back-end contributor",
    tags: ["PHP", "JavaScript", "SASS", "E-commerce"],
    description:
      "An online store for watches and jewelry on a custom PHP e-commerce platform — full catalog, cart & checkout, wishlist, blog, multi-language and shipping/email/payment integrations. I handled development and maintenance, including a complete responsive UI redesign.",
    url: "https://timeplus.me",
    image: "/projects/timeplus.webp",
    featured: true,
  },
  {
    title: "Food Ordering",
    year: "2024",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    description:
      "A full-stack Next.js + TypeScript app for ordering food and drinks. PostgreSQL as the database with Prisma as the ORM, authentication via NextAuth (Google/Facebook). Users browse the menu, view featured products, use the cart and order; admins additionally manage products and update order statuses.",
    github: "https://github.com/Suksii/food-ordering-app",
    image: "/projects/food-ordering.webp",
  },
  {
    title: "Rent a Car",
    year: "2024",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "A full-stack car-rental application. React front-end with a Node.js, Express and MongoDB back-end. Features user authentication, car rental and profile management, plus an admin car-management system for adding, updating and deleting cars.",
    github: "https://github.com/Suksii/rentacar",
    image: "/projects/rentacar.webp",
  },
  {
    title: "Chat App",
    year: "2024",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    description:
      "A full-stack real-time chat application. React front-end with a Node.js, Express, Socket.io and MongoDB back-end. Features user authentication and real-time messaging.",
    github: "https://github.com/Suksii/chat-app",
    image: "/projects/chat-app.webp",
  },
];

/** Shown under the projects grid — real work that can't be linked publicly. */
export const privateWork =
  "Alongside these, I built internal web tools at RTCG, Montenegro's national broadcaster — scheduling and calendar apps used day to day by staff. That work lives on internal systems, so there's nothing to link here.";

// EmailJS — client-side, safe to expose (public key)
export const emailjsConfig = {
  serviceId: "service_b6gb4xa",
  templateId: "template_c3wcmqd",
  publicKey: "5mY7gK77PcQJ7OMZO",
};

/** Canonical site URL — used by metadata, sitemap and robots. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-v2-eight-mocha-15.vercel.app";

export type Experience = {
  period: string;
  title: string;
  org: string;
  url?: string;
  summary: string;
  tags?: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    period: "Jun 2025 — now",
    title: "Web Developer",
    org: "Data Design",
    url: "https://datadesign.me",
    current: true,
    summary:
      "Full-time on production e-commerce and business systems: headless Next.js storefronts, the shared Laravel API behind 30+ stores, and a large multi-module ERP.",
    tags: ["Next.js", "TypeScript", "Laravel", "PHP", "TanStack"],
  },
  {
    period: "Nov 2023 — Jun 2025",
    title: "Web Developer",
    org: "Freelance",
    summary:
      "Designed and built responsive sites and web apps for government and private organizations — from UI implementation to deployment.",
    tags: ["React", "Vue.js", "Next.js", "Node.js"],
  },
  {
    period: "Aug 2022 — Jul 2026",
    title: "Software Engineer",
    org: "RTCG — national broadcaster",
    url: "https://rtcg.me",
    summary:
      "Kept broadcast production systems (Avid MediaCentral, iNEWS, Airspeed) on air, and built internal web apps — scheduling and calendar tools used daily by staff.",
    tags: ["React", "Node.js", "Vue.js"],
  },
  {
    period: "Sep 2021 — Jan 2022",
    title: "Electrical Engineer",
    org: "Ramel",
    summary:
      "Designed high-voltage installations and worked on the first section of the Montenegro highway project.",
  },
  {
    period: "2015 — 2020",
    title: "BSc Electrical Engineering",
    org: "University of Montenegro",
    summary:
      "Faculty of Electrical Engineering, Podgorica. Where C and logic problems got me hooked on programming.",
  },
];

/** The day-job work that doesn't fit a single project card. */
export const dayJob = {
  kicker: "behind the storefronts",
  title: "The platform work at Data Design",
  paragraphs: [
    "Most of the stores above run on one shared e-commerce platform. I work on the Laravel REST API that powers them — new endpoints, bug fixes and performance work — and keep more than 30 storefronts healthy in production.",
    "In parallel I develop TiramisuERP, a multi-module ERP used by companies across the region: sales, finance, warehouse, e-commerce, gastro/POS, personnel and mobile sales, with i18n, Sentry monitoring and realtime updates.",
  ],
  metrics: [
    { value: "30+", label: "storefronts in production" },
    { value: "1", label: "shared API behind them" },
    { value: "7", label: "ERP modules I work across" },
  ],
  tags: [
    "React",
    "TypeScript",
    "TanStack Router & Query",
    "Zustand",
    "AG-Grid",
    "Laravel",
    "PostgreSQL",
  ],
  links: [
    { label: "TiramisuERP", url: "https://tiramisuerp.com" },
    { label: "Data Design", url: "https://datadesign.me" },
  ],
} as const;
