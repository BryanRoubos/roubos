import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { WtlfNavigation } from "@/components/wtlf-navigation";
import { findLoreEntry } from "@/lib/wtlf-lore";
import { worldArt } from "@/lib/wtlf-media";
import "../world.css";

export const metadata: Metadata = {
  title: "World Atlas | Where the Light Falls",
  description: "Explore the original illustrated canyon metropolis of Where the Light Falls: the Upper City, guarded approaches, Middle Heights and Deepwater waterfront.",
  alternates: { canonical: "/where-the-light-falls/world" }
};

export default function WorldAtlas() {
  return <div className="world-page">
    <header className="wtlf-page-header shell"><span className="eyebrow">WHERE THE LIGHT FALLS / AN ILLUSTRATED ATLAS</span><h1>From the heights<br /><em>to the river.</em></h1><p>Follow the city from its upper streets to its shaded working waterfront. One immense metropolis, with very different lives at each level.</p></header>
    <WtlfNavigation />
    <div className="wtlf-content shell">
      {worldArt.map((art,index)=>{
        const entry=findLoreEntry(art.id);
        return <article className="wtlf-atlas-entry" key={art.id} id={art.id}>
          <figure><Image unoptimized src={art.src} width={1672} height={941} alt={art.alt} sizes="(max-width: 850px) 100vw, 65vw" /><figcaption>{art.title}</figcaption></figure>
          <div><span className="eyebrow">{String(index+1).padStart(2,"0")} / CITY ATLAS</span><h2>{art.title}</h2><p className="wtlf-profile-summary">{entry?.summary ?? art.subtitle}</p>{entry?.body.map((p,i)=><p key={i}>{p}</p>)}<Link className="text-link" href={`/where-the-light-falls/lore/${art.id}`}>Read related lore <ArrowIcon /></Link></div>
        </article>;
      })}
    </div>
    <div className="next-page"><div className="shell"><span>HISTORY, SOCIETY, AND DAILY LIFE</span><Link href="/where-the-light-falls/lore">Explore the lore archive <ArrowIcon /></Link></div></div>
  </div>;
}
