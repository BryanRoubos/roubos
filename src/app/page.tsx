import Link from "next/link";
import { CityLearningLab } from "@/components/city-learning-lab";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="portfolio-home">
      <section className="portfolio-hero shell" id="home" aria-labelledby="hero-name">
        <div className="portfolio-hero-copy">
          <div className="portfolio-kicker"><span className="portfolio-dot" /> SOFTWARE ENGINEERING / MACHINE LEARNING</div>
          <p className="portfolio-greeting">Hi, I&apos;m</p>
          <h1 id="hero-name">Bryan<br /><em>Roubos.</em></h1>
          <p className="portfolio-intro">A software engineering student at HU Utrecht, working toward machine learning engineering. I build software, explore how intelligent systems learn, and turn ideas into things you can actually use.</p>
          <div className="portfolio-links"><a href="#lab" className="portfolio-primary">Explore the ML lab <span>↗</span></a><a href="#experience" className="portfolio-text-link">My work ↓</a></div>
          <div className="portfolio-hero-foot"><span>BASED IN THE NETHERLANDS</span><span>CURIOUS BY DESIGN</span></div>
        </div>
        <div className="portfolio-hero-art" aria-hidden="true"><div className="portfolio-orbit orbit-one"/><div className="portfolio-orbit orbit-two"/><div className="portfolio-orbit orbit-three"/><div className="portfolio-orbit-core"><span>BR</span><small>IN TRAINING</small></div><div className="portfolio-coordinate coordinate-top">LEARNING / ITERATING / BUILDING</div><div className="portfolio-coordinate coordinate-bottom">01 / A WORK IN PROGRESS</div></div>
      </section>

      <section className="portfolio-story" id="about"><div className="shell portfolio-story-grid">
        <span className="portfolio-label">01 / THE IDEA</span>
        <div><h2>Always <em>learning.</em><br />Always building.</h2><p>I started in graphic design and followed my curiosity into programming, backend systems, and machine learning. I care about both how things work and how they feel to use.</p><p>I&apos;m still learning the mathematics and engineering behind ML. Rather than treating that as a finished achievement, this website shows what I&apos;m exploring and what I can already build.</p></div>
      </div></section>

      <section className="portfolio-lab-section" id="lab"><div className="shell">
        <div className="portfolio-section-heading"><span className="portfolio-label">02 / CURRENT EXPERIMENT</span><div><h2>A world to <em>learn in.</em></h2><p>Fantasy World AI Lab connects two interests: machine learning and worldbuilding. Here&apos;s a small, real reinforcement-learning experiment inspired by my fictional city.</p></div></div>
        <CityLearningLab />
        <div className="portfolio-under-lab"><p>This is an early educational prototype, not a finished intelligent NPC system. I&apos;m building up from explainable baselines, measurable experiments, and fundamentals.</p><a href="/engineering">More about my ML path ↗</a></div>
      </div></section>

      <section className="portfolio-work-section" id="experience"><div className="shell">
        <div className="portfolio-section-heading"><span className="portfolio-label">03 / SELECTED EXPERIENCE</span><div><h2>Work beyond<br /><em>the classroom.</em></h2><p>Engineering experience, product thinking, and projects built with other people.</p></div></div>
        <div className="portfolio-work-grid">
          <article className="portfolio-work-card"><div className="portfolio-card-top"><span>BACKEND / INFRASTRUCTURE</span><span>01 ↗</span></div><h3>AI Infrastructure Cluster</h3><p>Contributing to backend work at Tandem-IT at HU Utrecht, with exposure to APIs, containers, Linux, and GPU infrastructure for AI workloads.</p><div className="portfolio-tags"><span>BACKEND</span><span>DOCKER</span><span>LINUX</span></div></article>
          <article className="portfolio-work-card"><div className="portfolio-card-top"><span>HACKATHON / PROTOTYPE</span><span>02 ↗</span></div><h3>Digital Product Passport</h3><p>Developed backend APIs and data integration for a construction supply-chain prototype at a digiGO hackathon. Our team placed third of nine.</p><div className="portfolio-tags"><span>APIS</span><span>INTEGRATION</span><span>TEAMWORK</span></div></article>
          <article className="portfolio-work-card"><div className="portfolio-card-top"><span>PRODUCT / BACKEND</span><span>03 ↗</span></div><h3>Groupvibe &amp; DesignAudit</h3><p>Backend and board experience at Groupvibe, alongside building DesignAudit: a website audit tool combining accessibility, performance, and AI-assisted recommendations.</p><div className="portfolio-tags"><span>TYPESCRIPT</span><span>PRODUCT</span><span>BACKEND</span></div></article>
        </div>
        <a className="portfolio-work-link" href="/engineering">View background and technical toolkit <span>↗</span></a>
      </div></section>

      <section className="portfolio-creative-section" id="creative"><div className="shell portfolio-creative-grid">
        <div className="portfolio-creative-art"><span>AN ORIGINAL FANTASY UNIVERSE</span><strong>WHERE<br />THE LIGHT<br /><em>FALLS.</em></strong><span>WRITING / 3D / INTERACTIVE STORIES</span></div>
        <div className="portfolio-creative-copy"><span className="portfolio-label">04 / THE CREATIVE SIDE</span><h2>I build systems.<br /><em>And worlds.</em></h2><p>Beyond engineering, I write and develop <i>Where the Light Falls</i>—a grounded fantasy story explored through prose, Blender, cinematic ideas, and game design.</p><p>That fictional world also inspires the environment behind Fantasy World AI Lab. For me, curiosity doesn&apos;t stop at the boundary between technology and storytelling.</p><Link href="/where-the-light-falls" className="portfolio-primary portfolio-creative-link">Explore the world <span>↗</span></Link></div>
      </div></section>

      <section className="portfolio-contact-section" id="contact"><div className="shell portfolio-contact-grid"><span className="portfolio-label">05 / WHAT&apos;S NEXT</span><div><h2>Let&apos;s make<br /><em>something real.</em></h2><p>Interested in software engineering, ML, or a project worth exploring? I&apos;d like to hear about it.</p><div className="portfolio-contact-links"><a href={`mailto:${site.email}`}>Email me ↗</a><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></div></div></section>
    </div>
  );
}
