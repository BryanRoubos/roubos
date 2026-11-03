import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About Bryan Roubos — Software Engineering Student", description: "Meet Bryan Roubos, a Software Engineering student at HU Utrecht pursuing machine learning engineering and creating the fantasy universe Where the Light Falls.", alternates: { canonical: "/about" } };

export default function About() {
  return (
    <>
      <PageHeading index="03" label="ABOUT ME" title="Hi, I'm" accent="Bryan Roubos." description="Software Engineering student in the Netherlands, working toward machine learning engineering. Outside of code, I write and build a fantasy world." />
      <section className="section-space"><div className="shell about-grid"><div className="about-monogram"><span className="about-monogram-label">BR / A PERSONAL INTRODUCTION</span><strong>BR<span>.</span></strong><span className="about-monogram-foot">SOFTWARE ENGINEERING<br />STORIES &amp; WORLDBUILDING</span></div><div className="about-copy"><h2>Curious about<br /><em>how things become real.</em></h2>
        <p>I started with graphic design, where I learned to care about the way something feels as much as the way it functions. Software development added another kind of curiosity: understanding the systems behind an experience. Machine learning pushes that further, into questions about how models learn from data and how to test what they actually understand.</p>
        <p>I&apos;ve been a board member and backend developer at Groupvibe, a platform with 50,000+ users, and founded WebSneller, where I built DesignAudit, an AI-assisted website audit tool. I also contribute to backend development for HU Utrecht&apos;s AI Infrastructure Cluster at Tandem-IT.</p>
        <p>Outside code I write and build <em>Where the Light Falls</em>, a fantasy world explored through a novel, Blender and Unreal Engine. Fantasy World AI Lab is where I explore a connection between those interests, using a simulated world as the basis for machine-learning experiments. Whether I&apos;m writing, modelling or programming, I&apos;m interested in taking an idea far enough to understand what it could become.</p>
        <div className="about-links"><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={"mailto:" + site.email}>Email me ↗</a></div>
      </div></div></section>
    </>
  );
}
