export const site = {
 name: "Bryan Roubos",
 title: "Bryan Roubos | Software Engineering & Machine Learning",
 description: "Bryan Roubos is a Software Engineering student at HU Utrecht and aspiring Machine Learning Engineer. Backend intern at Tandem-IT, building Fantasy World AI Lab and the original fantasy universe Where the Light Falls.",
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
 { label: "Connect", href: "/#contact" },
] as const;
