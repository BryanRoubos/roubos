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
            <p className="reference-deck">Software engineering, AI infrastructure,<br />{" "}and original worldbuilding.</p>
            <p className="reference-intro">I&apos;m a Software Engineering student at HU Utrecht, focused on backend development and AI infrastructure, with the ambition to grow into AI engineering. Outside engineering, I create the original fantasy universe <em>Where the Light Falls</em>.</p>
            <div className="reference-hero-actions">
              <Link href="/engineering" className="reference-primary">EXPLORE ENGINEERING</Link>
              <Link className="reference-secondary" href="/where-the-light-falls">ENTER WHERE THE LIGHT FALLS</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="reference-cards shell" aria-label="Explore my work" id="selected">
        <Link className="reference-card reference-card-work" href="/engineering">
          <div className="reference-card-art" aria-hidden="true" />
          <div className="reference-card-overlay" aria-hidden="true" />
          <div className="reference-card-copy">
            <span className="reference-card-category">BACKEND / SYSTEMS / AI INFRASTRUCTURE</span>
            <h2>Engineering &amp;<br />AI Infrastructure</h2>
            <p>Backend development, APIs and the infrastructure behind AI systems.</p>
            <span className="reference-card-action">EXPLORE ENGINEERING</span>
          </div>
        </Link>
        <Link className="reference-card reference-card-world" href="/where-the-light-falls">
          <div className="reference-card-art" aria-hidden="true" />
          <div className="reference-card-overlay" aria-hidden="true" />
          <div className="reference-card-copy">
            <span className="reference-card-category">WRITING / WORLDBUILDING / VISUAL DEVELOPMENT</span>
            <h2>Where the<br />Light Falls</h2>
            <p>An original fantasy novel, now explored through 3D modeling, cinematics and a small game.</p>
            <span className="reference-card-action">ENTER THE WORLD</span>
          </div>
        </Link>
      </section>

      <section className="portfolio-now shell" aria-labelledby="portfolio-now-title">
        <span className="reference-section-index">01 / CURRENTLY</span>
        <div>
          <h2 id="portfolio-now-title">What I&apos;m <em>building now.</em></h2>
          <p>I&apos;m a backend intern at Tandem-IT, contributing to HU Utrecht&apos;s AI Infrastructure Cluster. I develop backend functionality with Go, Kubernetes and WebSockets, including a Kubernetes web terminal, and research and design an LLM chat interface.</p>
          <Link href="/engineering" className="portfolio-inline-link">MORE ABOUT MY ENGINEERING WORK</Link>
        </div>
      </section>

      <section className="reference-contact shell" id="contact">
        <span className="reference-section-index">02 / CONNECT</span>
        <div>
          <h2>Let&apos;s make<br /><em>something real.</em></h2>
          <p>I&apos;m interested in backend and AI engineering internships, technical projects and international opportunities.</p>
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
