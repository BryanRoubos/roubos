import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./world.css";

export const metadata: Metadata = {
  title: "Where the Light Falls | Fantasy World by Bryan Roubos",
  description: "Enter Where the Light Falls, an original fantasy mystery by Bryan Roubos. Discover Elias Varek, the divided canyon city, the Upper City, Middle Heights, Deepwater and Chapter One.",
  alternates: { canonical: "/where-the-light-falls" },
};

const districts = [
  { name: "The Upper City", detail: "Markets, institutions, wealth and the sunlight high above the canyon.", image: "/wtlf/upper-reveal.webp", alt: "The Upper City rises above the canyon with grand buildings and terraces." },
  { name: "Middle Heights", detail: "A crowded network of steep streets, homes and workshops built into the cliff.", image: "/wtlf/middle-heights.webp", alt: "Dense buildings and narrow passages of the Middle Heights overlooking the gorge." },
  { name: "Deepwater", detail: "The working waterfront beneath the city. Mist, cargo and the rhythms of daily life.", image: "/wtlf/deepwater-waterfront.png", alt: "Deepwater's working harbour beneath the towering canyon walls." }
];

const characters = [
  { name: "Elias Varek", description: "A young man carrying more than his deliveries. He is searching for his missing sister, Mira.", image: "/wtlf/elias.webp", alt: "Illustrated portrait of Elias Varek, the story's main character." },
  { name: "Mira Varek", description: "Elias's younger sister, whose disappearance still shapes every decision he makes.", image: "/wtlf/mira.webp", alt: "Illustration of Mira Varek against the city skyline." },
  { name: "Bram", description: "One of the people who gives the city a life beyond its institutions and conflicts.", image: "/wtlf/bram.webp", alt: "Portrait of Bram, an older resident of the canyon city." }
];

export default function WhereTheLightFalls() {
 return <div className="world-page">
  <section className="world-hero">
    <Image unoptimized className="world-hero-image" src="/wtlf/upper-reveal.webp" alt="A grand view of the Upper City above the gorge in Where the Light Falls." width={1672} height={941} priority />
    <div className="world-hero-shade" aria-hidden="true" />
    <div className="shell world-hero-copy"><span className="eyebrow">AN ORIGINAL FANTASY UNIVERSE BY BRYAN ROUBOS</span>
      <h1>Where the<br /><em>Light Falls.</em></h1>
      <p>A story about a divided city, the people living between its layers and the consequences of the choices they make.</p>
      <div className="world-hero-actions"><Link className="reference-primary" href="/where-the-light-falls/chapter-one">READ CHAPTER ONE <span aria-hidden="true">→</span></Link><a className="world-text-link" href="#world">EXPLORE THE WORLD ↓</a></div>
    </div>
  </section>
  <section className="section-space world-intro"><div className="shell two-column-section"><div><span className="eyebrow">01 / THE STORY</span><h2>A search through<br /><em>a divided city.</em></h2></div><div className="prose">
    <p>Elias Varek is searching for his missing younger sister, Mira, in a city divided between the privileged Upper City and the districts carved into the canyon below.</p>
    <p>What begins as a personal search draws him toward the records, institutions and old decisions that reshaped the city during an uprising two years earlier.</p>
    <p>It&apos;s grounded fantasy with an eye for ordinary lives: porters, markets, neighbours, small kindnesses and difficult choices.</p>
  </div></div></section>
  <section id="world" className="section-space world-gallery-section"><div className="shell">
    <div className="world-section-heading"><span className="eyebrow">02 / THE WORLD</span><h2>A city built<br /><em>in layers.</em></h2><p>The city is more than a backdrop. Its levels shape how people live, travel and see each other.</p></div>
    <div className="world-district-grid">{districts.map((district)=><article key={district.name} className="world-district">
      <div className="world-image-frame"><Image unoptimized src={district.image} alt={district.alt} width={1200} height={800} sizes="(max-width: 850px) 100vw, 33vw" /></div>
      <h3>{district.name}</h3><p>{district.detail}</p>
    </article>)}</div>
    <div className="world-wide-art"><Image unoptimized src="/wtlf/upper-market.webp" alt="A busy Upper City market street where residents trade and pass through the stone buildings." width={1672} height={941} sizes="100vw" /><p>Everyday life in the Upper City.</p></div>
  </div></section>
  <section className="section-space world-characters"><div className="shell">
    <div className="world-section-heading"><span className="eyebrow">03 / THE PEOPLE</span><h2>Lives within<br /><em>the city.</em></h2><p>The search is personal. So are the people Elias meets along the way.</p></div>
    <div className="world-character-grid">{characters.map((character)=><article key={character.name} className="world-character">
      <div className="world-image-frame"><Image unoptimized src={character.image} alt={character.alt} width={720} height={1080} sizes="(max-width: 850px) 100vw, 33vw" /></div>
      <h3>{character.name}</h3><p>{character.description}</p>
    </article>)}</div>
  </div></section>
  <section className="section-space world-mediums"><div className="shell two-column-section">
    <div><span className="eyebrow">04 / THE CREATIVE PROCESS</span><h2>One world.<br /><em>Many forms.</em></h2></div><div className="prose">
      <p>Where the Light Falls began with writing. Now I&apos;m also developing the look and atmosphere of its districts and characters through concept art, Blender, cinematics and interactive ideas.</p>
      <p>The novel remains the heart of the project. Visual development helps me explore the setting, while small game experiments let me imagine what it might feel like to move through it.</p>
      <a className="text-link" href="https://bryanroubos.github.io/where-the-light-falls-site/" target="_blank" rel="noopener noreferrer">Explore the original story website <span aria-hidden="true">↗</span></a>
    </div></div></section>
  <section className="section-space world-chapter-preview" id="chapter-one"><div className="shell world-preview-grid">
    <div><span className="eyebrow">05 / FROM THE MANUSCRIPT</span><h2>Chapter One.<br /><em>The opening.</em></h2><p className="world-excerpt">Elias Varek had carried heavier things through the Lower City. Few of them had been packed badly enough to strike back.</p><p>Read the opening chapter of the novel, shared directly from the original reader manuscript.</p><Link className="reference-primary" href="/where-the-light-falls/chapter-one">READ CHAPTER ONE <span aria-hidden="true">→</span></Link></div>
    <Image unoptimized src="/wtlf/chapters/chapter-one-not-enough.png" alt="Atmospheric illustrated scene from Chapter One of Where the Light Falls." width={941} height={1672} sizes="(max-width: 850px) 100vw, 42vw" />
  </div></section>
  <section className="next-page"><div className="shell"><span>THE ENGINEERING CONNECTION</span><Link href="/engineering">Fantasy World AI Lab <span aria-hidden="true">↗</span></Link></div></section>
 </div>;
}
