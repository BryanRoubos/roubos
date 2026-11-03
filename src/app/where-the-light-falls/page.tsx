import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "Where the Light Falls — An Original Fantasy Universe",
  description: "Explore Bryan Roubos's original fantasy world through its story, characters, writing and developing 3D ideas.",
  alternates: { canonical: "/where-the-light-falls" },
};

export default function Creative() {
  return (
    <>
      <PageHeading index="02" label="AN ORIGINAL FANTASY UNIVERSE" title="Where the" accent="Light Falls." description="A personal creative project that began with a story and continues to grow through writing, character design, 3D art and ideas for interactive storytelling." />
      <section id="writing" className="section-space">
        <div className="shell writing-feature">
          <div className="writing-art"><span>AN ORIGINAL FANTASY UNIVERSE</span><div className="writing-art-center"><span>W</span><i>WHERE THE<br />LIGHT FALLS</i></div><span>STORY · CHARACTERS · 3D · WORLDBUILDING</span></div>
          <div className="writing-copy"><span className="eyebrow">THE STORY</span><h2>A search through<br /><em>a divided city.</em></h2>
            <p>Elias Varek is searching for his missing younger sister in a city divided between the Upper City and the districts below. What begins as a personal search draws him toward the systems and decisions shaping the lives of everyone around him.</p>
            <p>I&apos;m developing the story as grounded fantasy, with an emphasis on atmosphere, imperfect people, small kindnesses, and choices that have consequences. The writing is a work in progress, and the world may change as I develop it further.</p>
          </div>
        </div>
      </section>
      <section className="section-space panel-section"><div className="shell two-column-section"><div><span className="eyebrow">BEYOND THE MANUSCRIPT</span><h2>One world.<br /><em>Different ways to explore it.</em></h2></div><div className="prose"><p>Alongside the writing, I&apos;m exploring how the setting and its characters could take shape through 3D modelling, environments, cinematics, and eventually interactive experiences. Blender and game-development tools are part of that creative learning process.</p><p>These are connected explorations rather than a finished game or animated production. The goal is to keep experimenting with how the same world feels when experienced through different mediums.</p></div></div></section>
      <section className="section-space"><div className="shell two-column-section"><div><span className="eyebrow">THE CONNECTION</span><h2>Where stories<br /><em>meet experiments.</em></h2></div><div className="prose"><p>The city behind Where the Light Falls also inspires the small navigation environment in Fantasy World AI Lab, my machine learning learning project. It provides a meaningful setting for experimenting with how agents make decisions.</p><p>The fiction and the experiments are separate projects, but they influence each other: one creates questions about believable worlds, and the other gives me a way to explore those questions technically.</p><Link className="text-link" href="/#lab">Explore the AI Lab <span aria-hidden="true">↗</span></Link></div></div></section>
      <section className="next-page"><div className="shell"><span>BACK TO THE PORTFOLIO</span><Link href="/">Explore my work <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}
