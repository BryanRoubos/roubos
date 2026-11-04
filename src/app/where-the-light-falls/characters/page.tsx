import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { WtlfNavigation } from "@/components/wtlf-navigation";
import { loreEntries } from "@/lib/wtlf-lore";
import { characterArt } from "@/lib/wtlf-media";
import "../world.css";

export const metadata: Metadata = {
  title: "Characters | Where the Light Falls",
  description: "Meet Elias Varek, Mira Varek, Maren, Bram and an unnamed workshop figure. Original public character descriptions and approved art from Where the Light Falls.",
  alternates: { canonical: "/where-the-light-falls/characters" }
};

export default function Characters() {
  return <div className="world-page">
    <header className="wtlf-page-header shell"><span className="eyebrow">WHERE THE LIGHT FALLS / CHARACTERS</span><h1>The people <em>behind the city.</em></h1><p>A brother still searching, a sister who wanted to travel, and the people whose lives cross theirs. These public introductions keep the story's secrets intact.</p></header>
    <WtlfNavigation />
    <div className="wtlf-content shell">
      {loreEntries.filter(e=>e.type==="Character").map((character,index)=>{
        const art=characterArt[character.id];
        return <article id={character.id} className="wtlf-profile" key={character.id}>
          <div className="wtlf-profile-art"><Image unoptimized src={art.src} alt={art.alt} width={800} height={1100} sizes="(max-width: 760px) 100vw, 40vw" /></div>
          <div className="wtlf-profile-copy">
            <span className="eyebrow">{String(index+1).padStart(2,"0")} / CHARACTER</span>
            <h2>{character.title}</h2>
            <p className="wtlf-profile-summary">{character.summary}</p>
            {character.body.map((paragraph,i)=><p key={i}>{paragraph}</p>)}
            <Link href={`/where-the-light-falls/lore/${character.id}`} className="text-link">Explore related entries <ArrowIcon /></Link>
          </div>
        </article>;
      })}
    </div>
    <div className="next-page"><div className="shell"><span>FOLLOW THESE PEOPLE THROUGH THE CITY</span><Link href="/where-the-light-falls/chapter-one">Read Chapter One <ArrowIcon /></Link></div></div>
  </div>;
}
