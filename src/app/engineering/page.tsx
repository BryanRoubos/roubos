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
            <p>I&apos;m a Software Engineering student at HU Utrecht, focused on backend development and the infrastructure behind AI systems. My long-term direction is to build the services and infrastructure that support AI applications.</p>
            <div className="engineering-hero-actions">
              <Link className="reference-primary" href="#projects">EXPLORE THE WORK</Link>
              <a className="text-link" href={site.github} target="_blank" rel="noopener noreferrer">View GitHub</a>
            </div>
          </div>
          <aside className="engineering-hero-aside" aria-label="Engineering focus">
            <span className="eyebrow">ENGINEERING FOCUS</span>
            <h2>Backend development<br /><em>for AI infrastructure.</em></h2>
            <p>Through a backend internship at Tandem-IT, I contributed to HU Utrecht&apos;s AI Infrastructure Cluster and the services that support its GPU-backed workloads.</p>
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
            <span className="eyebrow">02 / SELECTED PROJECT</span>
            <h2 id="engineering-project-title">AI Infrastructure<br /><em>Cluster.</em></h2>
            <p className="engineering-feature-note">Go / Kubernetes / WebSockets / APIs</p>
          </div>
          <div className="prose engineering-feature-copy">
            <p className="engineering-lead">Backend development for HU Utrecht&apos;s AI Infrastructure Cluster through my internship at Tandem-IT.</p>
            <p>My work used Go and Kubernetes to develop backend services for the cluster.</p>
            <p className="engineering-question">I also explored how language model integrations fit into the platform’s API and backend architecture.</p>
          </div>
        </div>
      </section>

      <section className="section-space panel-section" id="experience" aria-labelledby="engineering-experience-title">
        <div className="shell">
          <div className="section-title-meta"><span>03 / SELECTED EXPERIENCE</span><span>REAL WORK, REAL PROBLEMS</span></div>
          <h2 className="engineering-section-heading" id="engineering-experience-title">Work beyond <em>the prototype.</em></h2>
          <div className="career-timeline">
            <div className="career-entry"><div className="career-date">2026</div><div><span className="eyebrow">TANDEM-IT / HU UTRECHT</span><h3>AI Infrastructure Cluster</h3><p>Backend development for Kubernetes infrastructure supporting AI workloads.</p></div></div>
            <div className="career-entry"><div className="career-date">2025 - 2026</div><div><span className="eyebrow">BACKEND / PRODUCT</span><h3>Groupvibe</h3><p>Board member and backend developer at a social platform with more than 50,000 users. I contributed to software and product decisions alongside the team.</p></div></div>
            <div className="career-entry"><div className="career-date">2026 / HACKATHON</div><div><span className="eyebrow">DIGITAL PRODUCT PASSPORT</span><h3>Third place out of nine teams</h3><p>Built backend APIs and data integration for a construction supply-chain prototype using verifiable credentials and signed CO₂ data in four days.</p></div></div>
          </div>
          <p className="engineering-earlier">Earlier work includes founding WebSneller and building DesignAudit, a website analysis tool combining performance, accessibility and AI-assisted recommendations.</p>
        </div>
      </section>

      <section className="section-space engineering-skills">
        <div className="shell two-column-section">
          <div><span className="eyebrow">04 / TOOLKIT &amp; DIRECTION</span><h2>Practical tools.<br /><em>Deeper questions.</em></h2></div>
          <div className="prose">
            <div className="engineering-skill-group"><h3>Working with</h3><p>Go, Kubernetes, WebSockets, APIs, Docker and Linux, alongside TypeScript, Node.js, SQL and Python.</p></div>
            <div className="engineering-skill-group"><h3>Exploring further</h3><p>LLM integration, backend architecture, distributed systems and applied AI.</p></div>
            <p>I want to deepen my work on distributed systems and apply it to the infrastructure behind AI applications.</p>
          </div>
        </div>
      </section>
      <section className="next-page"><div className="shell"><span>OUTSIDE CODE</span><Link href="/where-the-light-falls">Where the Light Falls</Link></div></section>
    </div>
  );
}
