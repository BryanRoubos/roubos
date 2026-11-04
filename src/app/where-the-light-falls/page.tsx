import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WtlfNavigation } from "@/components/wtlf-navigation";
import { loreEntries } from "@/lib/wtlf-lore";
import { characterArt } from "@/lib/wtlf-media";
import "./world.css";

export const metadata: Metadata = {
  title: "Where the Light Falls | Original Fantasy World by Bryan Roubos",
  description: "Where the Light Falls is an original dark fantasy mystery by Bryan Roubos. Meet Elias Varek, discover the canyon metropolis, explore its characters and lore, and read Chapter One.",
  alternates: { canonical: "/where-the-light-falls" }
};

const protagonist = loreEntries.find(e=>e.id==="elias")!;
const characterIds = ["elias", "mira", "maren", "bram", "unnamed-figure"];

export default function WhereTheLightFalls() {
  return <div className="world-page">
    <section className="world-hero">
      <Image unoptimized className="world-hero-image" src="/wtlf/upper-reveal.webp" alt="An immense Upper City overlooking the canyon metropolis." width={1672} height={941} sizes="100vw" priority />
      <div className="world-hero-shade" aria-hidden="true" />
      <div className="shell world-hero-copy">
        <span className="eyebrow">A DARK FANTASY MYSTERY BY BRYAN ROUBOS</span>
        <h1>Where the<br /><em>Light Falls.</em></h1>
        <p>Some things are not meant to disappear.</p>
        <p>Mira vanished during the uprising two years ago. In the city above the river, her brother Elias is still searching.</p>
        <div className="world-hero-actions">
          <Link className="reference-primary" href="/where-the-light-falls/chapter-one">READ CHAPTER ONE</Link>
          <Link className="world-text-link" href="/where-the-light-falls/world">EXPLORE THE WORLD</Link>
        </div>
      </div>
    </section>
    <WtlfNavigation />
    <section className="section-space world-intro">
      <div className="shell two-column-section">
        <div><span className="eyebrow">01 / THE STORY</span><h2>A brother.<br /><em>A missing sister.</em></h2></div>
        <div className="prose">
          <p>Elias Varek works the steep streets of the Lower City, where everyday life continues beneath the bridges and grand buildings of the Upper City.</p>
          <p>Two years after Mira disappeared during the uprising, a questionable river record offers him another reason to keep searching.</p>
          <p>Where the Light Falls is a novel in development, grounded in the lives of people who work, trade, argue and hope in one divided metropolis.</p>
          <Link className="text-link" href="/where-the-light-falls/chapter-one">Start reading</Link>
        </div>
      </div>
    </section>
    <section className="section-space world-gallery-section">
      <div className="shell world-spotlight">
        <Image unoptimized src="/wtlf/elias-home.webp" alt="Approved concept portrait of Elias Varek." width={640} height={960} sizes="(max-width: 850px) 100vw, 44vw" />
        <div>
          <span className="eyebrow">02 / THE ONE STILL SEARCHING</span>
          <h2>Meet <em>Elias Varek.</em></h2>
          {protagonist.body.map((p,i)=><p key={i}>{p}</p>)}
          <Link className="text-link" href="/where-the-light-falls/characters#elias">Get to know Elias</Link>
        </div>
      </div>
    </section>
    <section className="section-space world-characters">
      <div className="shell">
        <div className="world-section-heading"><span className="eyebrow">03 / THE PEOPLE</span><h2>Lives within<br /><em>the city.</em></h2><p>Five published character introductions, with their original approved descriptions and illustrations.</p></div>
        <div className="wtlf-character-strip">{characterIds.map(id=>{
          const entry = loreEntries.find(e=>e.id===id)!;
          const art = characterArt[id];
          return <Link key={id} href={`/where-the-light-falls/characters#${id}`} className="wtlf-character-teaser">
            <Image unoptimized src={art.src} alt={art.alt} width={480} height={640} sizes="(max-width: 650px) 45vw, 20vw" />
            <h3>{entry.title}</h3><p>{entry.summary}</p>
          </Link>;
        })}</div>
        <Link className="text-link" href="/where-the-light-falls/characters">Meet every character</Link>
      </div>
    </section>
    <section className="section-space world-mediums">
      <div className="shell world-preview-grid">
        <div>
          <span className="eyebrow">04 / AN ILLUSTRATED CITY</span>
          <h2>Follow the streets<br /><em>to the river.</em></h2>
          <p>One enormous metropolis spans both rims of a deep canyon. Trade and daily life connect its districts, but not everyone enjoys the same rights.</p>
          <Link className="text-link" href="/where-the-light-falls/world">Explore the illustrated atlas</Link>
          <Link className="text-link" href="/where-the-light-falls/lore">Browse the public lore</Link>
        </div>
        <Image unoptimized src="/wtlf/middle-neighborhood.webp" alt="Residential terraces and streets built along the canyon wall." width={1024} height={1536} sizes="(max-width: 850px) 100vw, 42vw" />
      </div>
    </section>
    <section className="section-space world-chapter-preview">
      <div className="shell world-preview-grid">
        <div>
          <span className="eyebrow">05 / THE OPENING PAGES</span>
          <h2>Chapter One.<br /><em>Begin the story.</em></h2>
          <p className="world-excerpt">Elias Varek had carried heavier things through the Lower City. Few of them had been packed badly enough to strike back.</p>
          <p>Read the complete publicly released first chapter, with its original three story illustrations and reading controls.</p>
          <Link className="reference-primary" href="/where-the-light-falls/chapter-one">READ CHAPTER ONE</Link>
        </div>
        <Image unoptimized src="/wtlf/chapters/chapter-one-not-enough.png" alt="Elias carrying a poorly packed wooden crate up the Lower City stairs." width={1024} height={1536} sizes="(max-width: 850px) 100vw, 42vw" />
      </div>
    </section>
    <section className="section-space wtlf-creative-process"><div className="shell two-column-section">
      <div><span className="eyebrow">06 / THE CREATIVE PROCESS</span><h2>A novel first.<br /><em>A world in many forms.</em></h2></div>
      <div className="prose">
        <p>Where the Light Falls begins with the novel. The characters, their relationships and the city are being developed through writing and worldbuilding.</p>
        <p>Alongside the manuscript, I am exploring this universe through 3D modeling in Blender, cinematics, and a small game prototype. Each medium offers another way to discover how the world looks, moves and feels.</p>
        <p>These are connected experiments in storytelling, not separate finished products. I want to discover which forms best serve the world and its characters.</p>
      </div>
    </div></section>
    <section className="next-page"><div className="shell"><span>THE WORLDS I BUILD CONNECT</span><Link href="/engineering">The engineering behind the experiments</Link></div></section>
  </div>;
}
