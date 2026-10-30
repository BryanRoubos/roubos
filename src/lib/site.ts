export const site = {
  name: "Bryan Roubos",
  title: "Bryan Roubos — Software Engineering & Where the Light Falls",
  description: "Bryan Roubos studies Software Engineering at HU Utrecht, contributes to backend work on AI infrastructure at Tandem-IT, learns machine learning, and creates Where the Light Falls.",
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
  { number: "01", eyebrow: "PROFESSION", title: "Software Engineering", description: "Backend development at Tandem-IT, infrastructure, APIs, and the path I'm building toward machine learning engineering.", href: "/engineering", cta: "My engineering work", className: "discipline-engineering" },
  { number: "02", eyebrow: "PASSION PROJECT", title: "Where the Light Falls", description: "One fictional universe. Writing, character modelling, 3D environments, and Unreal Engine — all part of the same project.", href: "/where-the-light-falls", cta: "Explore the universe", className: "discipline-games" },
] as const;
