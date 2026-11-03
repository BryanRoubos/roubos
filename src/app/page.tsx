import Link from "next/link";
import { site } from "@/lib/site";
import { SectionTitle } from "@/components/section-title";
import { LiveNetwork } from "@/components/live-network";

export default function Home() {
  return (
    <>
      <section className="hero"><div className="hero-haze" aria-hidden="true" /><div className="shell hero-inner">
        <div className="hero-copy">
          <div className="hero-overline"><span className="status-pip" /> BRYAN ROUBOS / SOFTWARE ENGINEERING · ML <span className="hero-overline-rule" /></div>
          <h1>How &amp; why.<br />Then <em>build</em><span className="accent-period">.</span></h1>
          <p>I&apos;m a Software Engineering student at HU Utrecht, drawn to the questions behind machine learning: how a model learns, why it makes a decision, and whether it actually works. Outside engineering, I&apos;m creating Where the Light Falls, an original fantasy universe. Fantasy World AI Lab brings those interests together through experiments with a simulated world.</p>
          <div className="hero-actions"><Link href="/engineering" className="button button-primary">My machine learning path <span aria-hidden="true">↗</span></Link><Link href="/where-the-light-falls" className="text-link">The world I&apos;m building <span aria-hidden="true">↗</span></Link></div>
        </div>
        <div className="hero-art"><div className="art-halo" aria-hidden="true" /><LiveNetwork /></div>
        <div className="hero-bottom"><span>SCROLL <span aria-hidden="true">↓</span></span><span>MACHINE LEARNING &amp; STORYTELLING</span></div>
      </div></section>

      <section className="now-section section-space"><div className="shell">
        <SectionTitle number="01" label="A LITTLE ABOUT MY WORK" title="Creative mind. Engineer's method." href="/engineering" action="The evidence" />
        <div className="now-grid">
          <div className="now-item"><span>DESIGN FIRST</span><h3>I started in design.</h3><p>Graphic design came before code, so I care how something feels to use, not only whether it runs.</p></div>
          <div className="now-item"><span>THE WHY</span><h3>I want the why.</h3><p>I study Python, maths and algorithms to build and test models myself, not just plug into an AI service.</p></div>
          <div className="now-item"><span>THE BUILD</span><h3>Building beyond the classroom.</h3><p>My experience includes backend work at Groupvibe, building DesignAudit, a Digital Product Passport hackathon prototype, and contributions to an AI infrastructure project.</p></div>
        </div>
      </div></section>

      <section className="section-space panel-section"><div className="shell two-column-section"><div><span className="eyebrow">02 / THE PROJECT THAT JOINS BOTH</span><h2>Fantasy World<br /><em>AI Lab.</em></h2></div><div className="prose">
        <p>Fantasy World AI Lab is a machine-learning project built around a small simulated world inspired by Where the Light Falls. It gives me a place to explore how data, rules and models relate—and eventually compare learned behaviour with simple baselines.</p>
        <p>The approach is deliberately measurable: build a baseline, train and evaluate models on separate data, then explain what improved and what did not.</p>
        <div className="tag-row"><span>SIMULATION</span><span>DATASETS</span><span>BASELINES</span><span>EVALUATION</span></div>
        <p style={{ marginTop: 32 }}><Link href="/engineering" className="text-link">The machine learning path <span aria-hidden="true">↗</span></Link> &nbsp; <Link href="/where-the-light-falls" className="text-link">Where the Light Falls <span aria-hidden="true">↗</span></Link></p>
      </div></div></section>
    </>
  );
}
