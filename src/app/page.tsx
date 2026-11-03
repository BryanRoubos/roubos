import Link from "next/link";
import { CityLearningLab } from "@/components/city-learning-lab";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="portfolio-home">
      <section className="portfolio-hero shell" id="home" aria-labelledby="hero-name">
        <div className="portfolio-hero-copy">
          <div className="portfolio-kicker"><span className="portfolio-dot" /> SOFTWARE ENGINEERING / MACHINE LEARNING</div>
          <p className="portfolio-greeting">Bryan Roubos / Software Engineering &amp; ML</p>
          <h1 id="hero-name">I build systems.<br /><em>And worlds.</em></h1>
          <p className="portfolio-intro">I&apos;m a software engineering student at HU Utrecht, drawn to the space between technology and imagination. From building software and exploring machine learning to creating fictional worlds, I&apos;m driven by curiosity about how things work—and what they could become.</p>
          <div className="portfolio-links"><a href="#lab" className="portfolio-primary">Explore the ML lab <span>↗</span></a><a href="#experience" className="portfolio-text-link">My work ↓</a></div>
          <div className="portfolio-hero-foot"><span>BASED IN THE NETHERLANDS</span><span>CURIOUS BY DESIGN</span></div>
        </div>
        <div className="portfolio-hero-art" aria-hidden="true"><div className="portfolio-orbit orbit-one"/><div className="portfolio-orbit orbit-two"/><div className="portfolio-orbit orbit-three"/><div className="portfolio-orbit-core"><span>BR</span><small>IN TRAINING</small></div><div className="portfolio-coordinate coordinate-top">LEARNING / ITERATING / BUILDING</div><div className="portfolio-coordinate coordinate-bottom">01 / A WORK IN PROGRESS</div></div>
      </section>

      <section className="portfolio-story" id="about"><div className="shell portfolio-story-grid">
        <span className="portfolio-label">01 / THE IDEA</span>
        <div><h2>Curiosity is where<br /><em>it starts.</em></h2><p>My interests have never really stayed in one place. What started with graphic design grew into a fascination with programming, software engineering, and now machine learning.</p><p>I&apos;m especially interested in how intelligent systems learn and how those ideas might shape the things I create. I&apos;m building that knowledge one experiment and project at a time.</p></div>
      </div></section>

      <section className="portfolio-lab-section" id="lab"><div className="shell">
        <div className="portfolio-section-heading"><span className="portfolio-label">02 / CURRENT EXPERIMENT</span><div><h2>A world to <em>learn in.</em></h2><p>What happens when machine learning meets worldbuilding? Fantasy World AI Lab is my personal learning project, combining my interest in intelligent systems with a fictional universe I&apos;m creating. I&apos;m exploring how agents learn, decide, and interact by building small experiments.</p></div></div>
        <CityLearningLab />
        <div className="portfolio-under-lab"><p>An early reinforcement-learning experiment, part of my journey from understanding the fundamentals to exploring more complex agents.</p><a href="/engineering">Explore the learning project ↗</a></div>
      </div></section>

      <section className="portfolio-work-section" id="experience"><div className="shell">
        <div className="portfolio-section-heading"><span className="portfolio-label">03 / SELECTED EXPERIENCE</span><div><h2>What I&apos;ve built.<br /><em>And contributed to.</em></h2><p>From backend development and infrastructure to collaborative projects and independent experiments, I&apos;m gaining practical experience by working on real problems and creating things myself.</p></div></div>
        <div className="portfolio-work-grid">
          <article className="portfolio-work-card"><div className="portfolio-card-top"><span>BACKEND / INFRASTRUCTURE</span><span>01 ↗</span></div><h3>AI Infrastructure Cluster</h3><p>Contributing to backend work at Tandem-IT at HU Utrecht, with exposure to APIs, containers, Linux, and GPU infrastructure for AI workloads.</p><div className="portfolio-tags"><span>BACKEND</span><span>DOCKER</span><span>LINUX</span></div></article>
          <article className="portfolio-work-card"><div className="portfolio-card-top"><span>HACKATHON / PROTOTYPE</span><span>02 ↗</span></div><h3>Digital Product Passport</h3><p>Developed backend APIs and data integration for a construction supply-chain prototype at a digiGO hackathon. Our team placed third of nine.</p><div className="portfolio-tags"><span>APIS</span><span>INTEGRATION</span><span>TEAMWORK</span></div></article>
          <article className="portfolio-work-card"><div className="portfolio-card-top"><span>PRODUCT / BACKEND</span><span>03 ↗</span></div><h3>Groupvibe &amp; DesignAudit</h3><p>Backend and board experience at Groupvibe, alongside building DesignAudit: a website audit tool combining accessibility, performance, and AI-assisted recommendations.</p><div className="portfolio-tags"><span>TYPESCRIPT</span><span>PRODUCT</span><span>BACKEND</span></div></article>
        </div>
        <a className="portfolio-work-link" href="/engineering">Explore the projects in depth <span>↗</span></a>
      </div></section>

      <section className="portfolio-creative-section" id="creative"><div className="shell portfolio-creative-grid">
        <div className="portfolio-creative-art"><span>AN ORIGINAL FANTASY UNIVERSE</span><strong>WHERE<br />THE LIGHT<br /><em>FALLS.</em></strong><span>WRITING / 3D / INTERACTIVE STORIES</span></div>
        <div className="portfolio-creative-copy"><span className="portfolio-label">04 / THE CREATIVE SIDE</span><h2>I build systems.<br /><em>And worlds.</em></h2><p>Not everything I create starts with a line of code. Sometimes it starts with a character, a story, or an entire world. <i>Where the Light Falls</i> is an original fantasy universe I&apos;m developing through writing, 3D art, and game design.</p><p>It&apos;s a long-term project where I explore storytelling, atmosphere, and interactive experiences. It also inspires experiments in Fantasy World AI Lab, connecting my creative and technical interests.</p><Link href="/where-the-light-falls" className="portfolio-primary portfolio-creative-link">Explore the project <span>↗</span></Link></div>
      </div></section>

      <section className="portfolio-contact-section" id="contact"><div className="shell portfolio-contact-grid"><span className="portfolio-label">05 / WHAT&apos;S NEXT</span><div><h2>Let&apos;s make<br /><em>something real.</em></h2><p>Interested in my work, have an opportunity in mind, or simply want to connect? Feel free to reach out.</p><div className="portfolio-contact-links"><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><span className="portfolio-email">{site.email}</span></div></div></div></section>
    </div>
  );
}
