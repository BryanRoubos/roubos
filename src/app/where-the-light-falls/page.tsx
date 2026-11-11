import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WtlfNavigation } from "@/components/wtlf-navigation";
import { loreEntries } from "@/lib/wtlf-lore";
import { characterArt, worldArt } from "@/lib/wtlf-media";
import "./world.css";

export const metadata: Metadata = {
  title: "Where the Light Falls | Original Fantasy World by Bryan Roubos",
  description: "Mira vanished during an uprising. Two years later, her brother Elias finds a reason to search again. Enter Where the Light Falls, an original dark fantasy mystery, and read Chapter One.",
  alternates: { canonical: "/where-the-light-falls" }
};

const characterIds = ["elias", "mira", "maren", "bram", "unnamed-figure"];

export default function WhereTheLightFalls() {
  return <div className="world-page">
    <section className="world-hero" aria-labelledby="wtlf-title">
      <Image unoptimized className="world-hero-image" src="/wtlf/upper-reveal.webp" alt="The immense Upper City overlooking a canyon metropolis." width={1672} height={941} sizes="100vw" priority />
      <div className="world-hero-shade" aria-hidden="true" />
      <div className="shell world-hero-copy">
        <span className="eyebrow">AN ORIGINAL DARK FANTASY MYSTERY</span>
        <h1 id="wtlf-title">Where the<br /><em>Light Falls.</em></h1>
        <p className="world-hero-hook">A divided city. A missing sister. A clue that changes everything.</p>
        <p className="world-hero-premise">Two years after Mira vanished during an uprising, her brother Elias finds a reason to search again.</p>
        <div className="world-hero-actions">
          <Link className="reference-primary" href="/where-the-light-falls/chapter-one">READ CHAPTER ONE</Link>
          <Link className="world-text-link" href="#atlas">EXPLORE THE WORLD</Link>
        </div>
        <span className="world-hero-byline">A NOVEL IN DEVELOPMENT BY BRYAN ROUBOS</span>
      </div>
    </section>

    <WtlfNavigation />


    <section className="section-space wtlf-atlas-showcase" id="atlas" aria-labelledby="wtlf-atlas-title">
      <div className="shell">
        <div className="wtlf-atlas-intro">
          <div>
            <span className="eyebrow">EXPLORE / THE ILLUSTRATED WORLD ATLAS</span>
            <h2 id="wtlf-atlas-title">A city carved<br /><em>into the canyon.</em></h2>
          </div>
          <div>
            <p>From the Upper City to the waterfront of Deepwater, discover the places and people that shape Where the Light Falls.</p>
            <Link className="reference-primary" href="/where-the-light-falls/world">EXPLORE THE WORLD ATLAS</Link>
          </div>
        </div>
        <Link href="/where-the-light-falls/world" className="wtlf-atlas-primary" aria-label="Explore the illustrated World Atlas">
          <Image unoptimized src="/wtlf/deepwater-waterfront.png" alt="Riverboats, cargo workers and the waterfront at Deepwater." width={1672} height={941} sizes="(max-width: 850px) 100vw, 90vw" />
          <span>DEEPWATER WATERFRONT <span aria-hidden="true">↗</span></span>
        </Link>
        <div className="wtlf-atlas-places">
          {worldArt.slice(1,4).map((place) => (
            <Link key={place.id} href={`/where-the-light-falls/world#${place.id}`} className="wtlf-atlas-place">
              <Image unoptimized src={place.src} alt={place.alt} width={750} height={520} sizes="(max-width: 650px) 85vw, 29vw" />
              <span>{place.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="section-space world-gallery-section" id="elias" aria-labelledby="wtlf-elias-title">
      <div className="shell world-spotlight">
        <Image unoptimized src="/wtlf/elias-home.webp" alt="Portrait of Elias Varek, a young man from the Lower City." width={640} height={960} sizes="(max-width: 850px) 100vw, 44vw" />
        <div>
          <span className="eyebrow">01 / THE ONE STILL SEARCHING</span>
          <h2 id="wtlf-elias-title">He never<br /><em>stopped looking.</em></h2>
          <p className="world-spotlight-lead">Elias Varek knows the Lower City by its steep stairs, crowded streets and the work that keeps him moving.</p>
          <p>When a questionable river record surfaces, the disappearance he has lived with for two years becomes a question he can no longer leave alone.</p>
          <p>His search begins in a city where life above the canyon and life below it rarely follow the same rules.</p>
          <Link className="text-link" href="/where-the-light-falls/characters#elias">Meet Elias Varek</Link>
        </div>
      </div>
    </section>

    <section className="section-space world-chapter-preview" aria-labelledby="wtlf-chapter-title">
      <div className="shell world-preview-grid">
        <div>
          <span className="eyebrow">02 / THE OPENING PAGES</span>
          <h2 id="wtlf-chapter-title">Every search<br /><em>starts somewhere.</em></h2>
          <blockquote className="world-excerpt">Elias Varek had carried heavier things through the Lower City. Few of them had been packed badly enough to strike back.</blockquote>
          <p>Begin with Chapter One. Read the complete opening chapter, illustrated and with adjustable reading controls.</p>
          <Link className="reference-primary" href="/where-the-light-falls/chapter-one">READ CHAPTER ONE</Link>
        </div>
        <Image unoptimized src="/wtlf/chapters/chapter-one-not-enough.png" alt="Elias carrying a poorly packed wooden crate up the Lower City stairs." width={1024} height={1536} sizes="(max-width: 850px) 100vw, 42vw" />
      </div>
    </section>

    <section className="section-space world-mediums" id="city" aria-labelledby="wtlf-city-title">
      <div className="shell world-preview-grid">
        <div>
          <span className="eyebrow">03 / THE CITY</span>
          <h2 id="wtlf-city-title">One city.<br /><em>Different lives.</em></h2>
          <p>One enormous metropolis spans both rims of a deep canyon. Bridges, trade and the river connect its districts. Rights and opportunities do not reach everyone equally.</p>
          <div className="world-discover-links">
            <Link className="text-link" href="/where-the-light-falls/world">Explore the illustrated atlas</Link>
            <Link className="text-link" href="/where-the-light-falls/lore">Discover the lore</Link>
          </div>
        </div>
        <Image unoptimized src="/wtlf/middle-neighborhood.webp" alt="Residential terraces and streets built along the canyon wall." width={1024} height={1536} sizes="(max-width: 850px) 100vw, 42vw" />
      </div>
    </section>

    <section className="section-space world-characters" aria-labelledby="wtlf-characters-title">
      <div className="shell">
        <div className="world-section-heading">
          <span className="eyebrow">04 / THE PEOPLE</span>
          <h2 id="wtlf-characters-title">Lives within<br /><em>the city.</em></h2>
          <p>Meet the people whose choices shape life above and below the river.</p>
        </div>
        <div className="wtlf-character-strip">{characterIds.map(id => {
          const entry = loreEntries.find(e => e.id === id)!;
          const art = characterArt[id];
          return <Link key={id} href={`/where-the-light-falls/characters#${id}`} className="wtlf-character-teaser">
            <Image unoptimized src={art.src} alt={art.alt} width={480} height={640} sizes="(max-width: 650px) 45vw, 20vw" />
            <h3>{entry.title}</h3><p>{entry.summary}</p>
          </Link>;
        })}</div>
        <Link className="text-link" href="/where-the-light-falls/characters">Meet the characters</Link>
      </div>
    </section>

    <section className="section-space wtlf-creative-process">
      <div className="shell two-column-section">
        <div><span className="eyebrow">05 / BEYOND THE PAGE</span><h2>A novel first.<br /><em>A world in many forms.</em></h2></div>
        <div className="prose">
          <p>Where the Light Falls begins with the novel. Writing the characters and their city comes first.</p>
          <p>Alongside the manuscript, I explore the world through Blender, cinematics and a small game prototype. Different ways to discover how it looks, moves and feels.</p>
        </div>
      </div>
    </section>

    <section className="next-page"><div className="shell"><span>THE WORLDS I BUILD CONNECT</span><Link href="/engineering">The engineering behind the experiments</Link></div></section>
  </div>;
}
