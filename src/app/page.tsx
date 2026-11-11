import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import "./reference-home.css";

const projects = [
  { title: "AI Infrastructure Cluster", area: "Backend · AI infrastructure", description: "Backend services and APIs for HU Utrecht’s GPU-backed AI infrastructure, through Tandem-IT.", href: "/engineering#projects" },
  { title: "DesignAudit / WebSneller", area: "Web performance · Accessibility", description: "A website analysis tool combining performance, accessibility and AI-assisted recommendations.", href: "/engineering#designaudit" },
  { title: "Groupvibe", area: "Backend · Product", description: "Backend development and product decisions for a social platform with more than 50,000 users.", href: "/engineering#groupvibe" },
];

export default function Home() {
  return (
    <div className="portfolio">
      <section className="portfolio-hero" aria-labelledby="portfolio-title">
        <div className="portfolio-portrait">
          <Image src="/hero.jpg" alt="Bryan Roubos" fill sizes="100vw" unoptimized priority />
        </div>
        <div className="shell portfolio-hero-copy">
          <p className="portfolio-label">Bryan Roubos</p>
          <h1 id="portfolio-title">I build systems.<br /><em>And worlds.</em></h1>
          <p>Backend engineering, AI infrastructure and original worldbuilding.</p>
          <div className="portfolio-actions">
            <Link className="portfolio-button" href="#selected">Explore selected work</Link>
            <Link href="/where-the-light-falls">Enter Where the Light Falls</Link>
          </div>
        </div>
      </section>

      <section className="shell portfolio-section" id="selected" aria-labelledby="selected-title">
        <h2 id="selected-title">Selected work</h2>
        <div className="portfolio-work">
          {projects.map(({ title, area, description, href }) => (
            <article key={title}>
              <p className="portfolio-label">{area}</p>
              <h3><Link href={href}>{title}</Link></h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell portfolio-section portfolio-split" id="focus" aria-labelledby="focus-title">
        <h2 id="focus-title">Focus</h2>
        <p>I study Software Engineering at HU Utrecht and focus on backend architecture, distributed systems and the infrastructure behind AI applications.</p>
      </section>

      <section className="portfolio-story" aria-labelledby="story-title">
        <div className="shell portfolio-section">
          <p className="portfolio-label">Original dark fantasy</p>
          <h2 id="story-title">Where the Light Falls</h2>
          <p>A divided city. A missing sister. A clue that changes everything.</p>
          <Link href="/where-the-light-falls">Explore the world <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="shell portfolio-section portfolio-split" id="experience" aria-labelledby="experience-title">
        <h2 id="experience-title">Experience</h2>
        <div>
          <ul className="portfolio-experience">
            <li><strong>Tandem-IT · HU Utrecht</strong><span>Backend engineering internship</span></li>
            <li><strong>Groupvibe</strong><span>Board member and backend developer</span></li>
            <li><strong>WebSneller</strong><span>Founder and creator of DesignAudit</span></li>
          </ul>
          <Link href="/engineering#experience">More engineering experience <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="shell portfolio-section portfolio-split" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Let&apos;s connect.</h2>
        <div className="portfolio-actions">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.linkedin}>LinkedIn</a>
          <a href={site.github}>GitHub</a>
        </div>
      </section>
    </div>
  );
}
