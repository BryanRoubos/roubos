import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Where the Light Falls — Writing, 3D & Game Development", description: "Where the Light Falls is Bryan Roubos's original fantasy universe: an early-draft novel with a public Chapter One, plus explorations in 3D, cinematics and game development.", alternates: { canonical: "/where-the-light-falls" } };

export default function Creative() {
  return (
    <>
      <PageHeading index="02" label="MY CREATIVE PROJECT" title="Where the" accent="Light Falls." description="An original fantasy universe developed across writing, 3D creation, animation, cinematics and interactive storytelling." />
      <section id="writing" className="section-space"><div className="shell writing-feature"><div className="writing-art"><span>AN ORIGINAL FANTASY UNIVERSE</span><div className="writing-art-center"><span>W</span><i>WHERE THE<br />LIGHT FALLS</i></div><span>WRITING · 3D · CINEMATICS · GAMES</span></div><div className="writing-copy"><span className="eyebrow">ONE WORLD / SEVERAL MEDIUMS</span><h2>One world.<br /><em>Many ways to tell it.</em></h2>
        <p>Elias Varek is searching for his missing sister in a city split between the Upper City and the districts below. It began as a novel: a grounded fantasy about loss, small kindnesses and difficult choices.</p>
        <p>The novel is in development, with a public draft of Chapter One open for feedback. Alongside the writing, I develop the world visually through 3D characters, environments and cinematic ideas, using tools such as Blender and Unreal Engine. The story and game concept grow together, each offering a different way to explore the same place.</p>
        <a href={site.wtl} className="text-link" target="_blank" rel="noopener noreferrer">Read Chapter One <span aria-hidden="true">↗</span></a>
      </div></div></section>
      <section className="next-page"><div className="shell"><span>BEHIND THE PROJECT</span><Link href="/about">About Bryan <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}
