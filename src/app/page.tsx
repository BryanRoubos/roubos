import Link from "next/link";
import { site } from "@/lib/site";
import "./editorial-home.css";

const projects = [
  { number: "01", kind: "BACKEND / INFRASTRUCTURE", name: "AI Infrastructure Cluster", description: "Backend contributions at Tandem-IT, HU Utrecht, in a project exploring infrastructure for AI workloads.", tags: "APIs / Linux / Docker" },
  { number: "02", kind: "HACKATHON / PROTOTYPE", name: "Digital Product Passport", description: "Backend APIs and data integration for a construction supply-chain prototype. Third place among nine teams.", tags: "Backend / Data integration" },
  { number: "03", kind: "INDEPENDENT PROJECT", name: "DesignAudit", description: "A website-auditing concept bringing accessibility, performance, and AI-assisted recommendations together.", tags: "TypeScript / Product" },
];
export default function Home() {
  return (
    <div className="editorial-home">
      <section className="editorial-hero" id="home" aria-labelledby="editorial-hero-title">
        <div className="editorial-hero-portrait" role="img" aria-label="Portrait of Bryan Roubos against a dark burgundy cinematic background" />
        <div className="editorial-hero-glow" aria-hidden="true" />
        <div className="shell editorial-hero-layout">
          <div className="editorial-hero-copy">
            <div className="editorial-overline"><span>BRYAN ROUBOS</span><span className="editorial-rule" /><span>PORTFOLIO / 2026</span></div>
            <h1 id="editorial-hero-title">I build <span>systems.</span><br /><em>And worlds.</em></h1>
            <p className="editorial-tagline">Software engineering, machine learning, and original worldbuilding.</p>
            <p className="editorial-intro">I&apos;m a software engineering student at HU Utrecht, drawn to the space between technology and imagination. From building software and exploring machine learning to creating fictional worlds, I&apos;m driven by curiosity about how things work—and what they could become.</p>
            <div className="editorial-actions"><a className="editorial-cta" href="#experience">Explore my work <span aria-hidden="true">↗</span></a><Link className="editorial-sub-cta" href="/where-the-light-falls">Where the Light Falls <span aria-hidden="true">↗</span></Link></div>
          </div>
          <div className="editorial-hero-caption"><span>SOFTWARE ENGINEERING</span><span>ASPIRING ML ENGINEER</span><span>CREATOR OF WHERE THE LIGHT FALLS</span></div>
        </div>
      </section>
      <section className="editorial-about shell" id="about" aria-labelledby="editorial-about-title">
        <span className="editorial-eyebrow">01 / ABOUT ME</span>
        <div><h2 id="editorial-about-title">Curiosity is where<br /><em>it starts.</em></h2><p>My interests have never really stayed in one place. What started with graphic design grew into a fascination with programming, software engineering, and now machine learning.</p><p>I&apos;m especially interested in how intelligent systems learn and how those ideas might shape the things I create. I&apos;m building that knowledge one experiment and project at a time.</p></div>
      </section>
      <section className="editorial-feature-section" id="lab" aria-labelledby="editorial-feature-title"><div className="shell">
        <div className="editorial-section-label"><span>02 / TWO SIDES OF THE SAME CURIOSITY</span><span>LEARN / BUILD / CREATE</span></div>
        <h2 id="editorial-feature-title" className="editorial-section-title">What I <em>explore.</em></h2>
        <div className="editorial-feature-grid">
          <Link className="editorial-feature editorial-feature-ml" href="/engineering"><div className="editorial-feature-top"><span>THE TECHNICAL SIDE</span><span aria-hidden="true">↗</span></div><span className="editorial-feature-glyph" aria-hidden="true">⌘</span><div className="editorial-feature-bottom"><h3>Engineering <em>&amp; ML.</em></h3><p>From backend systems to the foundations of machine learning. Building understanding through practical work and experiments.</p><span className="editorial-feature-link">EXPLORE THE WORK ↗</span></div></Link>
          <Link className="editorial-feature editorial-feature-world" href="/where-the-light-falls"><div className="editorial-feature-top"><span>THE CREATIVE SIDE</span><span aria-hidden="true">↗</span></div><span className="editorial-feature-glyph editorial-world-mark" aria-hidden="true">W</span><div className="editorial-feature-bottom"><h3>Where the <em>Light Falls.</em></h3><p>An original fantasy universe explored through writing, character design, 3D art, and ideas for interactive storytelling.</p><span className="editorial-feature-link">ENTER THE WORLD ↗</span></div></Link>
        </div>
      </div></section>
      <section className="editorial-work shell" id="experience" aria-labelledby="editorial-work-title">
        <div className="editorial-section-label"><span>03 / SELECTED EXPERIENCE</span><Link href="/engineering">FULL PROJECT JOURNEY ↗</Link></div>
        <div className="editorial-work-heading"><h2 id="editorial-work-title">Things I&apos;ve <em>worked on.</em></h2><p>Backend development, collaborative projects, and independent experiments. A few places where my curiosity has become practical work.</p></div>
        <div className="editorial-project-list">{projects.map((project) => <article className="editorial-project" key={project.number}><div className="editorial-project-number">{project.number} / {project.kind}</div><div><h3>{project.name}</h3><p>{project.description}</p></div><div className="editorial-project-tags">{project.tags}</div></article>)}</div>
      </section>
      <section className="editorial-world" id="creative" aria-labelledby="editorial-world-title"><div className="shell editorial-world-layout"><div><span className="editorial-eyebrow">04 / AN ORIGINAL FANTASY UNIVERSE</span><h2 id="editorial-world-title">Some worlds<br /><em>begin with a story.</em></h2><p><i>Where the Light Falls</i> began with characters and a divided city. I&apos;m developing it through writing, 3D art, and game design—exploring how one world can be experienced in different ways.</p><Link href="/where-the-light-falls" className="editorial-world-link">EXPLORE WHERE THE LIGHT FALLS <span aria-hidden="true">↗</span></Link></div><div className="editorial-world-symbol" aria-hidden="true"><span>W</span><small>WHERE THE LIGHT FALLS</small></div></div></section>
      <section className="editorial-contact shell" id="contact"><span className="editorial-eyebrow">05 / CONNECT</span><div><h2>Let&apos;s make<br /><em>something real.</em></h2><p>Interested in my work, have an opportunity in mind, or simply want to connect?</p><div className="editorial-contact-links"><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={`mailto:${site.email}`}>Email ↗</a></div></div></section>
    </div>
  );
}
