import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { loreEntries } from "@/lib/wtlf-lore";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/engineering", priority: 0.9 },
    { path: "/where-the-light-falls", priority: 0.9 },
    { path: "/where-the-light-falls/world", priority: 0.7 },
    { path: "/where-the-light-falls/characters", priority: 0.7 },
    { path: "/where-the-light-falls/lore", priority: 0.7 },
    { path: "/where-the-light-falls/chapter-one", priority: 0.8 },
  ];
  return [
    ...routes.map(({ path, priority }) => ({
      url: site.url + path,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...loreEntries.map(({ id }) => ({
      url: site.url + "/where-the-light-falls/lore/" + id,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }))
  ];
}
