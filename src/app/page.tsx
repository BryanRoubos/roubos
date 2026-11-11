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
            <p className="reference-intro">I study Software Engineering at HU Utrecht and build backend services for AI and web applications. I also write and develop the world of <em>Where the Light Falls</em>.</p>
            <div className="reference-hero-actions">
              <Link href="/engineering" className="reference-primary">EXPLORE ENGINEERING</Link>
              <Link className="reference-secondary" href="/where-the-light-falls">ENTER WHERE THE LIGHT FALLS</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="shell reference-selected" aria-labelledby="selected-title" id="selected">
        <h2 id="selected-title">Selected work</h2>
        <div className="reference-cards">
          <Link className="reference-card reference-card-work" href="/engineering">
            <div className="reference-card-art" aria-hidden="true" />
            <div className="reference-card-overlay" aria-hidden="true" />
            <div className="reference-card-copy">
              <span className="reference-card-category">BACKEND / SYSTEMS / AI INFRASTRUCTURE</span>
              <h3>Engineering &amp;<br />AI Infrastructure</h3>
              <p>Backend work for HU Utrecht’s AI Infrastructure Cluster, the Groupvibe social platform, and DesignAudit, a website analysis tool I built through WebSneller.</p>
              <span className="reference-card-action">EXPLORE ENGINEERING</span>
            </div>
          </Link>
          <Link className="reference-card reference-card-world" href="/where-the-light-falls">
            <div className="reference-card-art" aria-hidden="true" />
            <div className="reference-card-overlay" aria-hidden="true" />
            <div className="reference-card-copy">
              <span className="reference-card-category">WRITING / WORLDBUILDING / VISUAL DEVELOPMENT</span>
              <h3>Where the<br />Light Falls</h3>
              <p>An original dark fantasy novel about a missing sister and a city divided by a canyon. Explore the illustrated world or read Chapter One.</p>
              <span className="reference-card-action">ENTER THE WORLD</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="portfolio-now shell" aria-labelledby="portfolio-now-title">
        <span className="reference-section-index">01 / ENGINEERING FOCUS</span>
        <div>
          <h2 id="portfolio-now-title">Backend systems. <em>Applied AI.</em></h2>
          <p>I’m interested in the backend work that makes AI applications practical, from service APIs and distributed systems to the infrastructure that runs models. My long-term direction is AI engineering, grounded in backend development.</p>
          <Link href="/engineering" className="portfolio-inline-link">MORE ABOUT MY ENGINEERING WORK</Link>
        </div>
      </section>

      <section className="reference-contact shell" id="contact">
        <span className="reference-section-index">02 / CONNECT</span>
        <div>
          <h2>Let&apos;s make<br /><em>something real.</em></h2>
          <p>Get in touch about backend engineering, AI infrastructure or creative collaborations.</p>
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
