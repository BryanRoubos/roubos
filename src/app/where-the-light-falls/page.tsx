import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { chapterOneDraft } from "@/lib/chapter-one-draft";

export const metadata: Metadata = {
  title: "Where the Light Falls — An Original Fantasy Universe",
  description: "Explore Bryan Roubos's original fantasy world through its story, characters, writing and developing 3D ideas.",
  alternates: { canonical: "/where-the-light-falls" },
};

export default function Creative() {
  return (
    <>
      <PageHeading index="02" label="AN ORIGINAL FANTASY UNIVERSE" title="Where the" accent="Light Falls." description="A personal creative project that began with a story and continues to grow through writing, character design, 3D art and ideas for interactive storytelling." />
      <section id="writing" className="section-space">
        <div className="shell writing-feature">
          <div className="writing-art"><span>AN ORIGINAL FANTASY UNIVERSE</span><div className="writing-art-center"><span>W</span><i>WHERE THE<br />LIGHT FALLS</i></div><span>STORY · CHARACTERS · 3D · WORLDBUILDING</span></div>
          <div className="writing-copy"><span className="eyebrow">THE STORY</span><h2>A search through<br /><em>a divided city.</em></h2>
            <p>Elias Varek is searching for his missing younger sister in a city divided between the Upper City and the districts below. What begins as a personal search draws him toward the systems and decisions shaping the lives of everyone around him.</p>
            <p>I&apos;m developing the story as grounded fantasy, with an emphasis on atmosphere, imperfect people, small kindnesses, and choices that have consequences. The writing is a work in progress, and the world may change as I develop it further.</p>
          </div>
        </div>
      </section>
      <section className="section-space panel-section"><div className="shell two-column-section"><div><span className="eyebrow">BEYOND THE MANUSCRIPT</span><h2>One world.<br /><em>Different ways to explore it.</em></h2></div><div className="prose"><p>Alongside the writing, I&apos;m exploring how the setting and its characters could take shape through 3D modelling, environments, cinematics, and eventually interactive experiences. Blender and game-development tools are part of that creative learning process.</p><p>These are connected explorations rather than a finished game or animated production. The goal is to keep experimenting with how the same world feels when experienced through different mediums.</p></div></div></section>
      <section className="section-space"><div className="shell two-column-section"><div><span className="eyebrow">THE CONNECTION</span><h2>Where stories<br /><em>meet experiments.</em></h2></div><div className="prose"><p>The fictional world behind Where the Light Falls also inspires Fantasy World AI Lab, my hands-on machine learning project. In that project, I explore how simulated characters might choose actions based on their goals, circumstances and relationships.</p><p>The fiction and the experiments are separate projects, but they influence each other: one creates questions about believable worlds, and the other gives me a way to explore those questions technically.</p><Link className="text-link" href="/#lab">Explore the AI Lab <span aria-hidden="true">↗</span></Link></div></div></section>
      <section className="section-space panel-section" id="chapter-one">
        <div className="shell two-column-section">
          <div><span className="eyebrow">FROM THE WRITING DESK</span><h2>Chapter One.<br /><em>First draft.</em></h2><p className="chapter-draft-disclaimer">An early manuscript shared as a work in progress. The story, characters and details may change.</p></div>
          <div>
            <details className="chapter-draft-reader">
              <summary>Read the original first draft <span aria-hidden="true">↘</span></summary>
              <article aria-label="Where the Light Falls, Chapter One first draft" className="chapter-draft-body">
                {chapterOneDraft.split(/\\n\\s*\\n/).map((block, index) => {
                  const t = block.trim();
                  if (!t) return null;
                  if (t.startsWith("# ")) return <h2 key={index}>{t.slice(2)}</h2>;
                  if (t.startsWith("## ")) return <h3 key={index}>{t.slice(3)}</h3>;
                  return <p key={index}>{t}</p>;
                })}
              </article>
            </details>
          </div>
        </div>
      </section>
      <section className="next-page"><div className="shell"><span>BACK TO THE PORTFOLIO</span><Link href="/">Explore my work <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}
