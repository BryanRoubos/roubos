export const site = {
  name: "Bryan Roubos",
  title: "Bryan Roubos — Software Engineering Student & Aspiring ML Engineer",
  description: "Bryan Roubos is a Software Engineering student at HU Utrecht and aspiring Machine Learning Engineer, contributing to backend work at Tandem-IT and creating the fantasy universe Where the Light Falls.",
  url: "https://bryanroubos.com",
  email: "roubos@proton.me",
  github: "https://github.com/BryanRoubos",
  linkedin: "https://www.linkedin.com/in/bryan-roubos/",
  wtl: "https://bryanroubos.github.io/where-the-light-falls-site/",
} as const;
export const navigation = [
  { label: "Home", href: "/" },
  { label: "Engineering", href: "/engineering" },
  { label: "Where the Light Falls", href: "/where-the-light-falls" },
  { label: "About", href: "/about" },
] as const;
export const disciplines = [
  { number: "01", eyebrow: "PROFESSION", title: "Software Engineering", description: "My path through software engineering, an interest in backend systems, and the foundations I'm building toward machine learning.", href: "/engineering", cta: "My engineering work", className: "discipline-engineering" },
  { number: "02", eyebrow: "PASSION PROJECT", title: "Where the Light Falls", description: "One original fantasy universe explored through writing, 3D development, animation, cinematics and an evolving game concept.", href: "/where-the-light-falls", cta: "Explore the universe", className: "discipline-games" },
] as const;
