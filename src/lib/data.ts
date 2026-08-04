export const profile = {
  name: "Šućo Ramović",
  firstName: "Šućo",
  initials: "ŠR",
  roles: ["Full Stack Developer", "Electrical Engineer"],
  tagline: "I build fast, thoughtful web experiences — from headless storefronts to full ERP systems.",
  location: "Podgorica, Montenegro",
  email: "ramovic225@gmail.com",
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
  "After graduation I dove into web development and fell in love. I'm a self-taught developer, constantly learning. Today I work full-time as a Web Developer at Data Design, building and maintaining production apps — from e-commerce storefronts to a large multi-module ERP — with React, Next.js, TypeScript, Node.js and PHP/Laravel.",
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
  tags: string[];
  description: string;
  url?: string;
  github?: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Ksport",
    year: "2026",
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
    tags: ["Next.js", "TypeScript", "i18n", "AI Chatbot"],
    description:
      "An online bus-ticket booking platform in 15 languages via next-intl. Search routes, pick seats, pay online or offline, manage ticket history, verify return tickets and even rent a bus. Includes blogs, FAQ and an integrated AI chatbot, with Google OAuth, reCAPTCHA and payment integrations.",
    url: "https://busticket4.me",
    image: "/projects/busticket.webp",
    featured: true,
  },
  {
    title: "LevelUp",
    year: "2025",
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
    tags: ["PHP", "JavaScript", "SASS", "E-commerce"],
    description:
      "An online store for watches and jewelry on a custom PHP e-commerce platform — full catalog, cart & checkout, wishlist, blog, multi-language and shipping/email/payment integrations. I handled development and maintenance, including a complete responsive UI redesign.",
    url: "https://timeplus.me",
    image: "/projects/timeplus.webp",
  },
  {
    title: "Kata Agency",
    year: "2025",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Custom CMS", "i18n"],
    description:
      "A bilingual site for an architecture and design studio, built solo end to end. Beyond the public site — projects, services, news and contact — I built the admin panel behind it: JWT auth with password reset, a TipTap rich-text editor, and full CRUD over projects, services, news and categories, so the studio publishes without touching code. Next.js 15 App Router with Prisma over PostgreSQL, next-intl for EN/ME.",
    url: "https://kataagency.com",
    github: "https://github.com/Suksii/katadesign-next",
    image: "/projects/katadesign.webp",
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

// EmailJS — client-side, safe to expose (public key)
export const emailjsConfig = {
  serviceId: "service_b6gb4xa",
  templateId: "template_c3wcmqd",
  publicKey: "5mY7gK77PcQJ7OMZO",
};
