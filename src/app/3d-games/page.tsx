import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "3D & Games", description: "Bryan Roubos explores Blender, Unreal Engine, and early 3D worldbuilding for Where the Light Falls. Original 3D work will appear when ready.", alternates: { canonical: "/3d-games" } };

export default function Games() {
  return (
    <>
      <PageHeading index="03" label="3D & GAMES" title="Give a world" accent="a shape." description="A new creative frontier: learning to translate atmosphere into spaces, forms, and experiences through 3D tools and game-engine experiments." />
      <section className="section-space"><div className="shell"><div className="stage-panel"><div className="stage-ambient" aria-hidden="true" /><div className="stage-wire" aria-hidden="true" /><div className="stage-top"><span>WTLF / VISUAL DEVELOPMENT</span><span>STAGE 001 — EXPLORATION</span></div><div className="stage-center"><span className="eyebrow">ORIGINAL 3D WORK / COMING WHEN READY</span><h2>The world is<br /><em>still taking form.</em></h2><p>No old game images, generated concept art, or pretend screenshots here. This space is reserved for original Blender and Unreal Engine work as it develops.</p></div><div className="stage-bottom"><span>BLENDER × UNREAL ENGINE</span><span>PROCESS BEFORE POLISH</span></div></div></div></section>
      <section className="section-space"><div className="shell"><div className="section-title-meta"><span>01 / THE PROCESS</span><span>WORK IN PROGRESS</span></div><div className="process-grid"><div><span>01 — EXPLORE</span><h3>Find the atmosphere.</h3><p>Experiment with composition, scale, lighting, and the feeling of a place before treating anything as final.</p></div><div><span>02 — MAKE</span><h3>Build original assets.</h3><p>Develop models and environments in Blender, then explore their possibilities in Unreal Engine.</p></div><div><span>03 — SHARE</span><h3>Show what&apos;s real.</h3><p>Replace these intentional visual studies with actual renders, process notes, and prototypes only when they exist.</p></div></div></div></section>
      <section className="section-space"><div className="shell two-column-section"><div><span className="eyebrow">02 / ONE UNIVERSE</span><h2>Where the<br /><em>Light Falls.</em></h2></div><div className="prose"><p>WTLF connects the writing and game-development sides of my work. The novel is paused, while the visual and interactive possibilities remain open to exploration.</p><p>There&apos;s no announced game, launch date, or finished prototype. What matters here is documenting the journey as it becomes tangible.</p><Link href="/writing" className="text-link">Read about the writing <span aria-hidden="true">↗</span></Link></div></div></section>
      <section className="next-page"><div className="shell"><span>CONTINUE EXPLORING</span><Link href="/about">About Bryan <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}
