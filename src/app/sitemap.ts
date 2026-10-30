import type { MetadataRoute } from "next";
import { navigation, site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {return navigation.map(({href})=>({url:site.url+(href==="/"?"/":href),changeFrequency:"monthly" as const,priority:href==="/"?1:0.7}));}
