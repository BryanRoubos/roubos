import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import "./reference-home.css";

export default function Home() {
  return (
    <div className="reference-home">
      <section className="reference-hero" aria-labelledby="reference-headline" id="home">
        <div className="reference-hero-backdrop" aria-hidden="true">
          <span className="reference-hero-arc reference-hero-arc-a" />
          <span className="reference-hero-arc reference-hero-arc-b" />
          <span className="reference-hero-photo"><Image unoptimized src="/hero.jpg" alt="Bryan Roubos portfolio hero portrait" fill sizes="(max-width: 780px) 100vw, 65vw" priority /></span>
        </div>
        <div className="shell reference-hero-shell">
          <div className="reference-hero-copy">
            <div className="reference-overline"><span>BRYAN ROUBOS</span><i /></div>
            <h1 id="reference-headline">I build systems.<br /><em>And worlds.</em></h1>
            <p className="reference-deck">Backend engineering. AI infrastructure.<br />{" "}A world of my own.</p>
            <p className="reference-intro">I study Software Engineering at HU Utrecht and contribute to backend development for its AI Infrastructure Cluster. Outside code, I write <em>Where the Light Falls</em>, an original fantasy novel.</p>
            <div className="reference-hero-actions">
              <Link href="/engineering" className="reference-primary">EXPLORE ENGINEERING</Link>
              <Link className="reference-secondary" href="/where-the-light-falls">ENTER WHERE THE LIGHT FALLS</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="shell reference-selected" aria-labelledby="selected-title" id="selected">
        <h2 id="selected-title">Two sides of my work</h2>
        <div className="reference-cards">
          <Link className="reference-card reference-card-work" href="/engineering">
            <div className="reference-card-art" aria-hidden="true" />
            <div className="reference-card-overlay" aria-hidden="true" />
            <div className="reference-card-copy">
              <span className="reference-card-category">BACKEND / SYSTEMS / AI INFRASTRUCTURE</span>
              <h3>Engineering &amp;<br />AI Infrastructure</h3>
              <p>Backend development for an AI infrastructure project at HU Utrecht, alongside experience with Groupvibe and WebSneller.</p>
              <span className="reference-card-action">EXPLORE ENGINEERING</span>
            </div>
          </Link>
          <Link className="reference-card reference-card-world" href="/where-the-light-falls">
            <div className="reference-card-art" aria-hidden="true" />
            <div className="reference-card-overlay" aria-hidden="true" />
            <div className="reference-card-copy">
              <span className="reference-card-category">WRITING / WORLDBUILDING / VISUAL DEVELOPMENT</span>
              <h3>Where the<br />Light Falls</h3>
              <p>A missing sister. A city divided by a canyon. An original novel told through writing, characters and an illustrated world.</p>
              <span className="reference-card-action">ENTER THE WORLD</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="portfolio-now shell" aria-labelledby="portfolio-now-title">
        <span className="reference-section-index">01 / ENGINEERING FOCUS</span>
        <div>
          <h2 id="portfolio-now-title">The systems <em>beneath the surface.</em></h2>
          <p>I want to understand what happens beyond the interface: how services communicate, how infrastructure supports applications, and how those systems behave when things go wrong. That curiosity is what draws me toward backend and AI engineering.</p>
          <Link href="/engineering" className="portfolio-inline-link">MORE ABOUT MY ENGINEERING WORK</Link>
        </div>
      </section>

      <section className="reference-contact shell" id="contact">
        <span className="reference-section-index">02 / CONNECT</span>
        <div>
          <h2>Have something<br /><em>worth building?</em></h2>
          <p>I’m open to conversations about backend engineering, AI infrastructure, and creative projects.</p>
          <div className="reference-contact-links">
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a href={site.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
