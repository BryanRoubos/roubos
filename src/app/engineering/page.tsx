import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Engineering", description: "Bryan Roubos on software engineering, systems thinking, and learning machine learning independently.", alternates: { canonical: "/engineering" } };

export default function Engineering() {
  return (
    <>
      <PageHeading index="01" label="ENGINEERING" title="Think deeply." accent="Build deliberately." description="I approach engineering as a practice of curiosity, clarity, and steady improvement. Good software should make complex things feel considered." />
      <section className="section-space"><div className="shell two-column-section"><div><span className="eyebrow">01 / MY APPROACH</span><h2>Curiosity,<br /><em>with structure.</em></h2></div><div className="prose"><p>I&apos;m a software engineer interested in how systems fit together, how decisions scale, and how thoughtful implementation makes products more useful.</p><p>I care about clear interfaces, maintainable code, and understanding the problem before choosing the tools. I&apos;d rather show work I can stand behind than fill a portfolio with invented case studies.</p></div></div></section>
      <section className="section-space panel-section"><div className="shell"><div className="panel-heading"><span className="eyebrow">02 / CURRENT FOCUS</span><span className="small-status"><span className="status-pip" /> ONGOING LEARNING</span></div><div className="focus-panel"><div className="focus-mark" aria-hidden="true">ML<span>↗</span></div><div><h2>Learning the<br /><em>language of machines.</em></h2><p>I&apos;m independently studying machine learning: strengthening the fundamentals, experimenting, and learning by doing. This is a learning journey, not a claim of expertise or a completed AI product.</p><div className="tag-row"><span>FOUNDATIONS</span><span>EXPERIMENTATION</span><span>CONTINUOUS LEARNING</span></div></div></div></div></section>
      <section className="section-space"><div className="shell"><div className="section-title-meta"><span>03 / THE WORK</span><span>NO PLACEHOLDER CASE STUDIES</span></div><div className="empty-work"><span className="empty-work-icon" aria-hidden="true">↗</span><h2>Real work.<br /><em>When it&apos;s ready.</em></h2><p>Independent engineering projects will appear here when they&apos;re developed, documented, and ready to share. Until then, you can explore my public code.</p><a className="button button-outline" href="https://github.com/BryanRoubos" target="_blank" rel="noopener noreferrer">Visit GitHub <span aria-hidden="true">↗</span></a></div></div></section>
      <section className="next-page"><div className="shell"><span>CONTINUE EXPLORING</span><Link href="/writing">Writing <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}
