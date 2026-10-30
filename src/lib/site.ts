export const site = {
  name: "Bryan Roubos",
  title: "Bryan Roubos — Engineering, Writing & Worldbuilding",
  description: "The independent portfolio of Bryan Roubos: software engineering, learning machine learning, writing, and 3D game-world experiments.",
  url: "https://bryanroubos.com",
  email: "roubos@proton.me",
  github: "https://github.com/BryanRoubos",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Engineering", href: "/engineering" },
  { label: "Writing", href: "/writing" },
  { label: "3D & Games", href: "/3d-games" },
  { label: "About", href: "/about" },
] as const;

export const disciplines = [
  { number: "01", eyebrow: "THE LOGIC", title: "Engineering", description: "Thoughtful software, systems thinking, and an ongoing journey into machine learning.", href: "/engineering", cta: "Explore engineering", className: "discipline-engineering" },
  { number: "02", eyebrow: "THE WORD", title: "Writing", description: "Stories, atmosphere, and the slow work of making an imagined world feel real.", href: "/writing", cta: "Explore writing", className: "discipline-writing" },
  { number: "03", eyebrow: "THE WORLD", title: "3D & Games", description: "Learning to give ideas form through Blender, Unreal Engine, and experimentation.", href: "/3d-games", cta: "Explore 3D & games", className: "discipline-games" },
] as const;
