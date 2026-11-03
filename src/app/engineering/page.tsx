import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects & Engineering Work",
  description: "A closer look at Bryan Roubos's backend development, engineering collaborations, and personal machine learning learning project.",
  alternates: { canonical: "/engineering" },
};

export default function Engineering() {
  return (
    <>
      <PageHeading index="01" label="SELECTED PROJECTS" title="Behind the" accent="builds." description="A closer look at the work, decisions, and experiments behind the projects introduced on my homepage." />
      <section className="section-space">
        <div className="shell two-column-section">
          <div><span className="eyebrow">01 / LEARNING PROJECT</span><h2>Fantasy World<br /><em>AI Lab.</em></h2></div>
          <div className="prose">
            <p>Fantasy World AI Lab is how I&apos;m teaching myself machine learning: by connecting concepts I study to small, inspectable experiments inside an imaginary world. Rather than starting with the promise of intelligent game characters, I&apos;m starting with questions I can test.</p>
            <p>The city navigation experiment on the homepage is an early reinforcement-learning exercise. An agent explores routes, receives rewards and penalties, and updates its choices through experience. It is a deliberately small environment where learning behaviour is visible and easier to examine.</p>
            <p>As I develop the project, I want to compare learned policies with simple rule-based behaviour, document what works and fails, and gradually explore more complex agents. The larger ambition is to understand whether these ideas can eventually make interactive worlds more responsive.</p>
            <Link className="text-link" href="/#lab">Try the city experiment <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <section className="section-space panel-section">
        <div className="shell">
          <div className="section-title-meta"><span>02 / HOW I'M LEARNING</span><span>BUILD / TEST / REFLECT</span></div>
          <div className="process-grid">
            <div><span>01 — FOUNDATIONS</span><h3>Understand the basics.</h3><p>Develop my Python, mathematics, and software foundations while learning to represent a problem clearly.</p></div>
            <div><span>02 — EXPERIMENTS</span><h3>Make it observable.</h3><p>Build small environments, establish simple baselines, and vary one thing at a time to understand the result.</p></div>
            <div><span>03 — EVIDENCE</span><h3>Explain what happened.</h3><p>Evaluate results, record failures, and distinguish what the experiment demonstrates from what it does not.</p></div>
          </div>
          <div className="prose" style={{ marginTop: 40 }}><p>This is a learning roadmap, not a claim that every experiment or milestone is complete.</p></div>
        </div>
      </section>
      <section className="section-space">
        <div className="shell">
          <div className="section-title-meta"><span>03 / ENGINEERING EXPERIENCE</span><span>CONTRIBUTIONS &amp; CONTEXT</span></div>
          <div className="career-timeline">
            <div className="career-entry"><div className="career-date">2026 — CURRENT</div><div><span className="eyebrow">HU UTRECHT · BACKEND</span><h3>AI Infrastructure Cluster <em>— Tandem-IT</em></h3><p>Contributing to the backend side of a student engineering project involving infrastructure for AI workloads. The technical setting includes APIs, Linux, containers and GPU-oriented infrastructure. My work is backend-focused; I&apos;m not presenting the cluster&apos;s wider infrastructure as something I built alone.</p><div className="tag-row"><span>BACKEND</span><span>APIs</span><span>LINUX</span><span>DOCKER</span></div></div></div>
            <div className="career-entry"><div className="career-date">HACKATHON</div><div><span className="eyebrow">DIGIGO · TEAM PROTOTYPE</span><h3>Digital Product Passport</h3><p>Worked on backend APIs and data integration for a construction supply-chain prototype using digital credentials. The team placed third of nine. The challenge was to connect different pieces of information into a usable demonstration within the hackathon timeframe.</p></div></div>
            <div className="career-entry"><div className="career-date">2025 — 2026</div><div><span className="eyebrow">BACKEND &amp; ORGANIZATION</span><h3>Groupvibe</h3><p>Combined backend work with board responsibilities at a social platform. It gave me experience contributing to a larger product and collaborating beyond an individual coding task.</p></div></div>
            <div className="career-entry"><div className="career-date">INDEPENDENT PROJECT</div><div><span className="eyebrow">PRODUCT &amp; WEBSITE ANALYSIS</span><h3>DesignAudit</h3><p>Built a website-auditing concept combining accessibility and performance analysis with AI-assisted recommendations. The motivation was to make technical findings easier to understand and act on.</p></div></div>
          </div>
        </div>
      </section>
      <section className="section-space panel-section">
        <div className="shell two-column-section">
          <div><span className="eyebrow">04 / TECHNICAL TOOLKIT</span><h2>What I use.<br /><em>What I&apos;m learning.</em></h2></div>
          <div className="prose"><p><strong>Engineering tools and technologies:</strong></p><div className="tag-row"><span>TYPESCRIPT</span><span>NODE.JS</span><span>NEXT.JS</span><span>POSTGRESQL</span><span>LINUX</span><span>DOCKER</span></div><p style={{ marginTop: 28 }}><strong>Currently developing:</strong></p><div className="tag-row"><span>PYTHON</span><span>MATHEMATICS</span><span>REINFORCEMENT LEARNING</span><span>ML EVALUATION</span></div><p style={{ marginTop: 32 }}><a className="text-link" href={site.github} target="_blank" rel="noopener noreferrer">Explore my GitHub <span aria-hidden="true">↗</span></a></p></div>
        </div>
      </section>
      <section className="next-page"><div className="shell"><span>THE CREATIVE PROJECT</span><Link href="/where-the-light-falls">Where the Light Falls <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}
