import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Writing", description: "Writing and worldbuilding by Bryan Roubos, including the paused early-stage dark fantasy novel Where the Light Falls.", alternates: { canonical: "/writing" } };

export default function Writing() {
  return (
    <>
      <PageHeading index="02" label="WRITING" title="Some worlds" accent="begin with words." description="Writing is where I explore mood, character, and the questions that don't have easy answers. A place to imagine before anything has to be built." />
      <section className="section-space"><div className="shell writing-feature"><div className="writing-art"><span>MANUSCRIPT / EARLY DRAFT</span><div className="writing-art-center"><span>W</span><i>WHERE THE<br />LIGHT FALLS</i></div><span>AN ORIGINAL DARK-FANTASY UNIVERSE</span></div><div className="writing-copy"><span className="eyebrow">FEATURED UNIVERSE / WTLF</span><h2>Where the<br /><em>Light Falls.</em></h2><p>A dark-fantasy setting built around atmosphere, uncertainty, and the lives of people inside a larger world. It began as a novel and remains a universe I care about developing.</p><div className="status-note"><span className="status-pip" /><div><strong>Novel currently paused</strong><p>The manuscript is an early draft, not a published or completed book. I&apos;m keeping the writing side honest while I explore its world through other mediums.</p></div></div><Link className="text-link" href="/3d-games">See the 3D exploration <span aria-hidden="true">↗</span></Link></div></div></section>
      <section className="section-space"><div className="shell two-column-section"><div><span className="eyebrow">01 / THE PRACTICE</span><h2>Writing as<br /><em>worldbuilding.</em></h2></div><div className="prose"><p>For me, the most interesting worlds are more than maps and lore. They&apos;re made from small details: a place with history, a choice with consequences, a quiet moment that changes how everything feels.</p><p>The writing and 3D experiments may evolve differently. They&apos;re connected by the same universe, not by a promise that every detail will match.</p></div></div></section>
      <section className="next-page"><div className="shell"><span>CONTINUE EXPLORING</span><Link href="/3d-games">3D &amp; Games <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}
