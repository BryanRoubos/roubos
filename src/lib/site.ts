export const site = {
  name: "Bryan Roubos",
  title: "Bryan Roubos — Software Engineering Student & Aspiring ML Engineer",
  description: "Bryan Roubos is a Software Engineering student at HU Utrecht and aspiring Machine Learning Engineer, learning software and ML fundamentals while creating the original fantasy universe Where the Light Falls.",
  url: "https://bryanroubos.com",
  email: "roubos@proton.me",
  github: "https://github.com/BryanRoubos",
  linkedin: "https://www.linkedin.com/in/bryan-roubos/",
  wtl: "https://bryanroubos.github.io/where-the-light-falls-site/",
} as const;
export const navigation = [
  { label: "About", href: "/#about" },
  { label: "ML Lab", href: "/#lab" },
  { label: "Work", href: "/#experience" },
  { label: "Creative", href: "/#creative" },
  { label: "Connect", href: "/#contact" },
] as const;
export const disciplines = [
  { number: "01", eyebrow: "THE LAB", title: "Machine Learning", description: "How models learn, from the maths to the infrastructure that runs them.", href: "/engineering", cta: "Follow the path", className: "discipline-engineering" },
  { number: "02", eyebrow: "THE STUDIO", title: "Where the Light Falls", description: "A fantasy world I write, model and design, shared as it grows.", href: "/where-the-light-falls", cta: "Enter the world", className: "discipline-games" },
] as const;
