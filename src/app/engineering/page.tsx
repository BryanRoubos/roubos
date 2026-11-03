import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering & Machine Learning",
  description: "Bryan Roubos's backend engineering experience, Tandem-IT AI Infrastructure Cluster work and Fantasy World AI Lab machine learning project.",
  alternates: { canonical: "/engineering" },
};

export default function Engineering() {
  return (
    <>
      <PageHeading index="01" label="ENGINEERING & MACHINE LEARNING" title="Engineering &" accent="Machine Learning." description="I build software and I&apos;m working toward machine learning engineering by learning the foundations, building experiments and understanding how models behave beyond the API." />
      <section className="engineering-intro shell">
        <span className="eyebrow">CURRENT ROLE</span>
        <p>Backend intern at <strong>Tandem-IT</strong>, contributing to HU Utrecht&apos;s AI Infrastructure Cluster, which provides GPU resources for training and running AI models.</p>
      </section>
      <section className="section-space" id="projects">
        <div className="shell two-column-section">
          <div><span className="eyebrow">01 / FEATURED PROJECT</span><h2>Fantasy World<br /><em>AI Lab.</em></h2><p className="engineering-feature-note">Python · Simulation · Machine Learning</p></div>
          <div className="prose">
            <p>Fantasy World AI Lab is a machine learning project built around a small simulated world. Characters encounter situations and make decisions based on their goals, circumstances and relationships. Those interactions become structured data for training and evaluating models.</p>
            <p>Can a learned model predict character decisions better than a transparent rule-based baseline, and why?</p>
            <p>I&apos;m building it from the foundations in Python, from simulation and data generation through model training, evaluation and a local interface for exploring the results.</p>
          </div>
        </div>
      </section>
      <section className="section-space panel-section" id="experience">
        <div className="shell">
          <div className="section-title-meta"><span>02 / SELECTED EXPERIENCE</span><span>REAL WORK, REAL PROBLEMS</span></div>
          <div className="career-timeline">
            <div className="career-entry"><div className="career-date">2026 - PRESENT</div><div><span className="eyebrow">TANDEM-IT / HU UTRECHT</span><h3>AI Infrastructure Cluster</h3><p>Backend development for infrastructure supporting AI workloads. I&apos;m gaining experience with APIs, Linux, containers, networking and GPU-oriented systems.</p></div></div>
            <div className="career-entry"><div className="career-date">2025 - 2026</div><div><span className="eyebrow">BACKEND / PRODUCT</span><h3>Groupvibe</h3><p>Board member and backend developer at a social platform with more than 50,000 users. I worked on software and contributed to product decisions with the wider team.</p></div></div>
            <div className="career-entry"><div className="career-date">2026 / HACKATHON</div><div><span className="eyebrow">DIGITAL PRODUCT PASSPORT</span><h3>Third place out of nine teams</h3><p>Developed backend APIs and data integration for a construction supply-chain prototype using verifiable credentials and signed CO₂ data during a four-day hackathon.</p></div></div>
          </div>
          <p className="engineering-earlier">Earlier work includes founding WebSneller and building DesignAudit, a website analysis tool combining performance, accessibility and AI-assisted recommendations.</p>
        </div>
      </section>
      <section className="section-space">
        <div className="shell two-column-section">
          <div><span className="eyebrow">03 / SKILLS & INTERESTS</span><h2>Building from<br /><em>the foundations.</em></h2></div>
          <div className="prose">
            <p><strong>Working with</strong><br />Python, TypeScript, Node.js, SQL, Linux and Docker.</p>
            <p><strong>Learning deeper</strong><br />Machine learning, mathematics, statistics, model evaluation and AI infrastructure.</p>
            <p>I&apos;m particularly interested in applied machine learning, anomaly detection and building systems that work reliably beyond a demo.</p>
            <a className="text-link" href={site.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
      <section className="next-page"><div className="shell"><span>OUTSIDE CODE</span><Link href="/where-the-light-falls">Where the Light Falls <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}
