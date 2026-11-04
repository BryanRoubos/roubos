import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering & Machine Learning",
  description: "Explore Bryan Roubos's backend engineering work, Tandem-IT AI infrastructure experience, and Fantasy World AI Lab machine learning project.",
  alternates: { canonical: "/engineering" },
};

export default function Engineering() {
  return (
    <div className="engineering-page">
      <section className="engineering-hero" aria-labelledby="engineering-title">
        <div className="shell engineering-hero-inner">
          <div className="engineering-hero-main">
            <span className="eyebrow">01 / ENGINEERING &amp; MACHINE LEARNING</span>
            <h1 id="engineering-title">Backend systems.<br /><em>Machine learning.</em></h1>
            <p>From infrastructure that runs AI workloads to Python experiments that test what models actually learn. I care about how systems work, not just how they look in a demo.</p>
            <div className="engineering-hero-actions">
              <Link className="reference-primary" href="#projects">EXPLORE THE WORK</Link>
              <a className="text-link" href={site.github} target="_blank" rel="noopener noreferrer">View GitHub</a>
            </div>
          </div>
          <aside className="engineering-hero-aside" aria-label="Current focus">
            <span className="eyebrow">CURRENTLY</span>
            <h2>Backend development<br /><em>for AI infrastructure.</em></h2>
            <p>Interning at Tandem-IT, contributing to HU Utrecht&apos;s AI Infrastructure Cluster and its GPU-backed workloads.</p>
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
            <span className="eyebrow">02 / FEATURED PROJECT</span>
            <h2 id="engineering-project-title">Fantasy World<br /><em>AI Lab.</em></h2>
            <p className="engineering-feature-note">Python / Simulation / Machine Learning</p>
          </div>
          <div className="prose engineering-feature-copy">
            <p className="engineering-lead">A simulated world that turns character decisions into data for machine learning.</p>
            <p>Characters respond to their goals, circumstances and relationships. I use those interactions to explore data generation, model training and evaluation.</p>
            <p className="engineering-question">The question: can a learned model predict their choices better than a clear, rule-based baseline?</p>
            <ol className="engineering-stages" aria-label="Project approach">
              <li><span>01</span>Simulate decisions</li>
              <li><span>02</span>Build and train models</li>
              <li><span>03</span>Compare and evaluate</li>
            </ol>
            <p className="engineering-project-status">An ongoing project, built step by step in Python.</p>
          </div>
        </div>
      </section>

      <section className="section-space panel-section" id="experience" aria-labelledby="engineering-experience-title">
        <div className="shell">
          <div className="section-title-meta"><span>03 / SELECTED EXPERIENCE</span><span>REAL WORK, REAL PROBLEMS</span></div>
          <h2 className="engineering-section-heading" id="engineering-experience-title">Work beyond <em>the prototype.</em></h2>
          <div className="career-timeline">
            <div className="career-entry"><div className="career-date">2026 - PRESENT</div><div><span className="eyebrow">TANDEM-IT / HU UTRECHT</span><h3>AI Infrastructure Cluster</h3><p>Backend development for infrastructure supporting AI workloads, with hands-on experience in APIs, Linux, containers, networking and GPU-oriented systems.</p></div></div>
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
            <div className="engineering-skill-group"><h3>Working with</h3><p>Python, TypeScript, Node.js, SQL, Linux and Docker.</p></div>
            <div className="engineering-skill-group"><h3>Exploring further</h3><p>Machine learning, mathematics, statistics, model evaluation and AI infrastructure.</p></div>
            <p>I&apos;m especially interested in applied ML, anomaly detection and software that holds up beyond a demo.</p>
          </div>
        </div>
      </section>
      <section className="next-page"><div className="shell"><span>OUTSIDE CODE</span><Link href="/where-the-light-falls">Where the Light Falls</Link></div></section>
    </div>
  );
}
