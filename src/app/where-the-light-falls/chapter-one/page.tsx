import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { chapterOneDraft } from "@/lib/chapter-one-draft";
import { ChapterReadingControls } from "@/components/chapter-reading-controls";
import "../world.css";

export const metadata: Metadata = {
  title: "Where the Light Falls - Chapter One",
  description: "Read the complete opening chapter of Where the Light Falls, an original fantasy novel by Bryan Roubos. Follow Elias Varek through the canyon city.",
  alternates: { canonical: "/where-the-light-falls/chapter-one" },
};

const illustrations = {
  notEnough: {
    src: "/wtlf/chapters/chapter-one-not-enough.png",
    alt: "Elias Varek steadies a wooden crate on a crowded stone stairway above the Deepwater river.",
    caption: "Not enough.",
    width: 1024,
    height: 1536
  },
  knot: {
    src: "/wtlf/chapters/chapter-one-well-the-knot-held.png",
    alt: "Mira pulls a rope tied to an old practice post on the Deepwater docks, as a bucket falls into the river and Maren laughs.",
    caption: "Well, the knot held.",
    width: 941,
    height: 1672
  },
  question: {
    src: "/wtlf/chapters/chapter-one-a-better-question.png",
    alt: "Elias and Maren speak beneath a warehouse awning while the working waterfront continues behind them.",
    caption: "A better question.",
    width: 941,
    height: 1672
  }
} as const;

function ChapterImage({ image }: { image: (typeof illustrations)[keyof typeof illustrations] }) {
  return <figure className="chapter-inline-art">
    <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes="(max-width: 760px) 90vw, 600px" />
    <figcaption>{image.caption}</figcaption>
  </figure>;
}

export default function ChapterOne() {
  return <div className="world-page chapter-page">
    <header className="chapter-heading shell">
      <Link href="/where-the-light-falls" className="world-text-link">← BACK TO THE WORLD</Link>
      <span className="eyebrow">WHERE THE LIGHT FALLS / BOOK ONE</span>
      <h1>Chapter <em>One.</em></h1>
      <p>A missing sister. A city shaped by its shadows. An ordinary working day in the Lower City.</p>
      <span className="chapter-reading-time">AN ORIGINAL NOVEL IN DEVELOPMENT / APPROX. 15-20 MINUTES</span>
    </header>
    <section className="chapter-reading-shell" aria-label="Read Chapter One">
      <div className="chapter-reading-inner">
        <ChapterReadingControls />
        <article className="chapter-reading" aria-label="Where the Light Falls, complete Chapter One">
          {chapterOneDraft.split(/\n\s*\n/).map((block, index) => {
            const paragraph = block.trim();
            if (!paragraph) return null;
            if (paragraph.startsWith("# ")) return null;
            if (paragraph.startsWith("## ")) return null;
            return <Fragment key={index}>
              <p>{paragraph}</p>
              {paragraph === "It was not enough." && <ChapterImage image={illustrations.notEnough} />}
              {paragraph.includes("She was fifteen and impossible, standing on a dock beside a rotten post") && <ChapterImage image={illustrations.knot} />}
              {paragraph.startsWith("“All right. Keep it,” he said. “But tell me what you can.”") && <ChapterImage image={illustrations.question} />}
            </Fragment>;
          })}
        </article>
      </div>
    </section>
    <div className="chapter-return shell">
      <p>You've reached the end of Chapter One.</p>
      <Link className="reference-primary" href="/where-the-light-falls">RETURN TO THE WORLD <span aria-hidden="true">↗</span></Link>
    </div>
  </div>;
}
