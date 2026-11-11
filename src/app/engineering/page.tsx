import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering & AI Infrastructure",
  description: "Selected work by Bryan Roubos in backend development, AI infrastructure and web products.",
  alternates: { canonical: "/engineering" },
};

export default function Engineering() {
  return (
    <div className="engineering-page">
      <section className="engineering-hero" aria-labelledby="engineering-title">
        <div className="shell engineering-hero-inner">
          <div className="engineering-hero-main">
            <span className="eyebrow">01 / ENGINEERING &amp; AI INFRASTRUCTURE</span>
            <h1 id="engineering-title">Backend systems.<br /><em>AI infrastructure.</em></h1>
            <p>I&apos;m a Software Engineering student who wants to know what happens behind the interface. I work on backend development and explore how software, infrastructure and AI systems fit together.</p>
            <div className="engineering-hero-actions">
              <Link className="reference-primary" href="#projects">EXPLORE THE WORK</Link>
              <a className="text-link" href={site.github} target="_blank" rel="noopener noreferrer">View GitHub</a>
            </div>
          </div>
          <aside className="engineering-hero-aside" aria-label="Engineering focus">
            <span className="eyebrow">ENGINEERING FOCUS</span>
            <h2>Backend development<br /><em>for AI infrastructure.</em></h2>
            <p>Through Tandem-IT, I contribute to backend development for HU Utrecht&apos;s AI Infrastructure Cluster.</p>
            <span className="engineering-hero-aside-foot">TANDEM-IT / HU UTRECHT</span>
          </aside>
        </div>
      </section>

      <section className="engineering-evidence shell" aria-label="Experience at a glance">
        <div><span>AI INFRASTRUCTURE</span><strong>Tandem-IT · HU Utrecht</strong><p>Backend internship</p></div>
        <div><span>50,000+ USERS</span><strong>Groupvibe</strong><p>Platform I helped develop</p></div>
        <div><span>3RD OF 9 TEAMS</span><strong>Digital Product Passport</strong><p>Four-day hackathon</p></div>
      </section>

      <section className="section-space engineering-feature" id="projects" aria-labelledby="engineering-project-title">
        <div className="shell two-column-section">
          <div>
            <span className="eyebrow">02 / CURRENT ENGINEERING WORK</span>
            <h2 id="engineering-project-title">Inside the AI<br /><em>Infrastructure Cluster.</em></h2>
            <p className="engineering-feature-note">Go / Kubernetes / WebSockets / APIs</p>
          </div>
          <div className="prose engineering-feature-copy">
            <p className="engineering-lead">The interesting problems are often between the systems.</p>
            <p>Through Tandem-IT, I work on backend functionality for HU Utrecht&apos;s AI Infrastructure Cluster, using Go, Kubernetes and APIs.</p>
            <p className="engineering-question">I&apos;m also investigating how language-model services can connect to the platform through a clear backend API.</p>
            <p className="engineering-project-status">This is ongoing team work, not a finished standalone product. I&apos;ll publish a deeper technical case study when there is a result I can demonstrate properly.</p>
          </div>
        </div>
      </section>

      <section className="section-space panel-section" id="experience" aria-labelledby="engineering-experience-title">
        <div className="shell">
          <div className="section-title-meta"><span>03 / SELECTED EXPERIENCE</span><span>REAL WORK, REAL PROBLEMS</span></div>
          <h2 className="engineering-section-heading" id="engineering-experience-title">Work with <em>real context.</em></h2>
          <div className="career-timeline">
            <div className="career-entry"><div className="career-date">2026</div><div><span className="eyebrow">TANDEM-IT / HU UTRECHT</span><h3>AI Infrastructure Cluster</h3><p>Backend development for Kubernetes infrastructure supporting AI workloads.</p></div></div>
            <div className="career-entry"><div className="career-date">2025 - 2026</div><div><span className="eyebrow">BACKEND / PRODUCT</span><h3>Groupvibe</h3><p>Board member and backend developer at a social platform with more than 50,000 users. I contributed to software and product decisions alongside the team.</p></div></div>
            <div className="career-entry"><div className="career-date">2026 / HACKATHON</div><div><span className="eyebrow">DIGITAL PRODUCT PASSPORT</span><h3>Third place out of nine teams</h3><p>Contributed backend APIs and data integration to a construction supply-chain prototype using verifiable credentials and signed CO₂ data.</p></div></div>
          </div>
          <p className="engineering-earlier">Earlier work includes founding WebSneller and building DesignAudit, a website analysis tool combining performance, accessibility and AI-assisted recommendations.</p>
        </div>
      </section>

      <section className="section-space engineering-skills">
        <div className="shell two-column-section">
          <div><span className="eyebrow">04 / TOOLKIT &amp; DIRECTION</span><h2>Practical tools.<br /><em>Deeper questions.</em></h2></div>
          <div className="prose">
            <div className="engineering-skill-group"><h3>Engineering</h3><p>Backend development with Go, APIs, Kubernetes and related tooling. Earlier projects involved TypeScript, Node.js, SQL and Python.</p></div>
            <div className="engineering-skill-group"><h3>Where I want to go</h3><p>Deeper into distributed systems, model-serving infrastructure and the engineering behind practical AI applications.</p></div>
          </div>
        </div>
      </section>
      <section className="next-page"><div className="shell"><span>OUTSIDE CODE</span><Link href="/where-the-light-falls">Where the Light Falls</Link></div></section>
    </div>
  );
}
