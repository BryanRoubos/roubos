import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { chapterOneDraft } from "@/lib/chapter-one-draft";
import "../world.css";

export const metadata: Metadata = {
 title: "Where the Light Falls - Chapter One",
 description: "Read Chapter One of Where the Light Falls, an original fantasy mystery by Bryan Roubos featuring Elias Varek and the city in the canyon.",
 alternates: { canonical: "/where-the-light-falls/chapter-one" }
};

export default function ChapterOne() {
  return <div className="world-page chapter-page">
    <header className="chapter-heading shell"><Link href="/where-the-light-falls" className="world-text-link">← BACK TO THE WORLD</Link><span className="eyebrow">WHERE THE LIGHT FALLS / BOOK ONE</span><h1>Chapter <em>One.</em></h1><p>The opening chapter of an original fantasy mystery by Bryan Roubos.</p></header>
    <figure className="chapter-illustration shell"><Image unoptimized src="https://bryanroubos.github.io/where-the-light-falls-site/assets/images/chapters/chapter-one-a-better-question.png" alt="An illustrated moment from the opening chapter." width={941} height={1672} sizes="(max-width: 850px) 100vw, 560px" /></figure>
    <article className="chapter-reading" aria-label="Where the Light Falls, complete Chapter One">
      {chapterOneDraft.split(/\n\s*\n/).map((block, index)=>{
        const t=block.trim();
        if(!t)return null;
        if(t.startsWith("# "))return <h2 key={index}>{t.slice(2)}</h2>;
        if(t.startsWith("## "))return <h3 key={index}>{t.slice(3)}</h3>;
        return <p key={index}>{t}</p>;
      })}
    </article>
    <div className="chapter-return shell"><Link className="reference-primary" href="/where-the-light-falls">RETURN TO THE WORLD <span aria-hidden="true">↗</span></Link></div>
  </div>;
}
