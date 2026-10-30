import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About", description: "Meet Bryan Roubos, a software engineer with interests in machine learning, writing, 3D art, and game development.", alternates: { canonical: "/about" } };

export default function About() {
  return (
    <>
      <PageHeading index="04" label="ABOUT" title="More than" accent="one discipline." description="I'm Bryan Roubos. I write code, build skills, imagine stories, and follow the ideas that won't leave me alone." />
      <section className="section-space"><div className="shell about-grid"><div className="about-monogram"><span className="about-monogram-label">BR / AN INTRODUCTION</span><strong>BR<span>.</span></strong><span className="about-monogram-foot">CURIOUS BY DEFAULT<br />ALWAYS IN PROGRESS</span></div><div className="about-copy"><span className="eyebrow">HELLO, I&apos;M BRYAN</span><h2>Making things<br /><em>is how I learn.</em></h2><p>My foundation is in software engineering. I enjoy solving problems, learning how systems work, and making ideas usable. Lately, I&apos;ve been expanding that curiosity into machine learning through independent study.</p><p>Outside of code, I write and explore 3D art and game development. Where the Light Falls is the thread connecting much of that creative work: an original world I&apos;m developing across different forms.</p><p>This site is a record of the process. Some things are complete; others are questions I&apos;m still learning how to answer. I&apos;d rather make that distinction clear than pretend otherwise.</p><div className="about-links"><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={"mailto:" + site.email}>Email me ↗</a></div></div></div></section>
      <section className="section-space"><div className="shell"><div className="section-title-meta"><span>01 / THE THREADS</span><span>WHAT KEEPS ME CURIOUS</span></div><div className="about-interests"><Link href="/engineering"><span>01</span><strong>Engineering &amp; ML</strong><span aria-hidden="true">↗</span></Link><Link href="/writing"><span>02</span><strong>Stories &amp; writing</strong><span aria-hidden="true">↗</span></Link><Link href="/3d-games"><span>03</span><strong>3D &amp; game worlds</strong><span aria-hidden="true">↗</span></Link></div></div></section>
    </>
  );
}
