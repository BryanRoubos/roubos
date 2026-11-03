import Link from "next/link";
import { site } from "@/lib/site";
import "./reference-home.css";

const areas = [
  { title: "ML Lab", category: "MACHINE LEARNING / AI PROJECTS", description: "Exploring the foundations of machine learning — from Python, mathematics and model evaluation to real-world applications.", link: "/engineering", action: "EXPLORE ML LAB", image: "/reference-lab.webp", className: "lab" },
  { title: "Selected Work", category: "SOFTWARE / PROJECTS / EXPERIENCE", description: "A curated selection of backend development, engineering collaborations and independent projects.", link: "/engineering#experience", action: "VIEW PROJECTS", image: "/reference-work.webp", className: "work" },
  { title: "Where the Light Falls", category: "AN ORIGINAL FANTASY UNIVERSE", description: "An ongoing worldbuilding project explored through writing, character design, 3D and game development.", link: "/where-the-light-falls", action: "ENTER THE WORLD", image: "/reference-world.webp", className: "world" },
];

export default function Home() {
  return (
    <div className="reference-home">
      <section className="reference-hero" aria-labelledby="reference-headline" id="home">
        <div className="reference-hero-backdrop" aria-hidden="true">
          <span className="reference-hero-arc reference-hero-arc-a" />
          <span className="reference-hero-arc reference-hero-arc-b" />
          <span className="reference-hero-photo" />
        </div>
        <div className="shell reference-hero-shell">
          <div className="reference-hero-copy">
            <div className="reference-overline"><span>BRYAN ROUBOS</span><i /></div>
            <h1 id="reference-headline">I build systems.<br /><em>And worlds.</em></h1>
            <p className="reference-deck">Software engineering, machine learning,<br />and original worldbuilding.</p>
            <p className="reference-intro">I&apos;m a software engineering student at HU Utrecht, drawn to the space between technology and imagination. From building software and exploring machine learning to creating fictional worlds, I&apos;m driven by curiosity about how things work—and what they could become.</p>
            <div className="reference-hero-actions"><a href="#selected" className="reference-primary">EXPLORE MY WORK <span aria-hidden="true">→</span></a><Link className="reference-secondary" href="/where-the-light-falls">WHERE THE LIGHT FALLS <span aria-hidden="true">↗</span></Link></div>
          </div>
        </div>
      </section>

      <section className="reference-cards shell" aria-label="Explore my work" id="selected">
        {areas.map((area) => (
          <Link key={area.title} className={`reference-card reference-card-${area.className}`} href={area.link}>
            <img className="reference-card-art" src={area.image} alt="" loading="lazy" />
            <div className="reference-card-overlay" />
            <span className="reference-card-symbol" aria-hidden="true">{area.className === "lab" ? "✳" : area.className === "work" ? "⌘" : "✦"}</span>
            <div className="reference-card-copy">
              <h2>{area.title}</h2>
              <span className="reference-card-category">{area.category}</span>
              <p>{area.description}</p>
              <span className="reference-card-action">{area.action} <span aria-hidden="true">→</span></span>
            </div>
          </Link>
        ))}
      </section>

      <div className="reference-disciplines shell" aria-label="Areas of interest">
        <div><span className="reference-discipline-icon" aria-hidden="true">▱</span><span>SOFTWARE<br />ENGINEERING</span></div>
        <div><span className="reference-discipline-icon" aria-hidden="true">◇</span><span>MACHINE<br />LEARNING</span></div>
        <div><span className="reference-discipline-icon" aria-hidden="true">▤</span><span>WORLD BUILDING<br />&amp; WRITING</span></div>
        <div><span className="reference-discipline-icon" aria-hidden="true">⬡</span><span>3D, CINEMATICS<br />&amp; GAME DEV</span></div>
      </div>

      <section className="reference-cinematic" aria-label="Where technology meets imagination">
        <div className="reference-cinematic-photo" aria-hidden="true" />
        <div className="shell reference-cinematic-inner">
          <p className="reference-small-overline">WHERE TECHNOLOGY MEETS IMAGINATION</p>
          <h2>Engineering in the real world.<br /><em>Worldbuilding in the imagined.</em></h2>
          <Link href="/where-the-light-falls">DISCOVER THE CREATIVE PROJECT <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="reference-about shell" id="about">
        <span className="reference-section-index">01 / THE PERSON BEHIND THE WORK</span>
        <div><h2>Curiosity is where<br /><em>it starts.</em></h2><p>My interests have never really stayed in one place. What started with graphic design grew into a fascination with programming, software engineering, and now machine learning.</p><p>I&apos;m especially interested in how intelligent systems learn and how those ideas might shape the things I create. I&apos;m building that knowledge one experiment and project at a time.</p></div>
      </section>

      <section className="reference-experience shell" id="experience">
        <div className="reference-section-header"><span className="reference-section-index">02 / SELECTED EXPERIENCE</span><Link href="/engineering">EXPLORE ENGINEERING ↗</Link></div>
        <div className="reference-experience-list">
          <article><span>01 / BACKEND</span><div><h3>AI Infrastructure Cluster</h3><p>Contributing to backend work at Tandem-IT at HU Utrecht, with exposure to APIs, Linux, containers and GPU infrastructure for AI workloads.</p></div></article>
          <article><span>02 / HACKATHON</span><div><h3>Digital Product Passport</h3><p>Backend APIs and data integration for a construction supply-chain prototype. Our team placed third out of nine.</p></div></article>
          <article><span>03 / PROJECTS</span><div><h3>Groupvibe &amp; DesignAudit</h3><p>Backend and board experience at Groupvibe, alongside an independent website-auditing concept.</p></div></article>
        </div>
      </section>

      <section className="reference-contact shell" id="contact"><span className="reference-section-index">03 / CONNECT</span><div><h2>Let&apos;s make<br /><em>something real.</em></h2><p>Interested in my work, have an opportunity in mind, or simply want to connect?</p><div className="reference-contact-links"><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><a href={site.github} target="_blank" rel="noopener noreferrer">GITHUB ↗</a><a href={`mailto:${site.email}`}>EMAIL ↗</a></div></div></section>
    </div>
  );
}
