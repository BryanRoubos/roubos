import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { WtlfNavigation } from "@/components/wtlf-navigation";
import { loreEntries } from "@/lib/wtlf-lore";
import "../world.css";

export const metadata: Metadata = {
  title: "Public Lore Archive | Where the Light Falls",
  description: "Read the original approved Where the Light Falls public lore archive: geography, districts, society, history and characters of the canyon city.",
  alternates: { canonical: "/where-the-light-falls/lore" }
};
const groups = [
  {title:"Geography and districts",description:"The river, the canyon and the neighborhoods built between them.",ids:["canyon","upper-city","upper-heights","middle-heights","deepwater","river"]},
  {title:"Life and power",description:"How people work, trade, travel and belong.",ids:["trade-economy","upper-access","citizenship","council","political-tensions","arch"]},
  {title:"History",description:"How a crossing grew into a city.",ids:["city-founding","city-origins"]},
  {title:"People",description:"Faces from the published world and story.",ids:["elias","mira","maren","bram","unnamed-figure"]}
];

export default function LoreArchive() {
  return <div className="world-page">
    <header className="wtlf-page-header shell"><span className="eyebrow">WHERE THE LIGHT FALLS / PUBLIC LORE</span><h1>There is more<br /><em>beneath the surface.</em></h1><p>Explore the places, histories, people and social structures of the city. All entries come from the publicly approved original reader website, without private plot spoilers.</p></header>
    <WtlfNavigation />
    <div className="wtlf-content shell">
      {groups.map((group,index)=><section className="wtlf-lore-group" key={group.title}>
        <div className="wtlf-lore-group-title"><span className="eyebrow">{String(index+1).padStart(2,"0")} / LORE ARCHIVE</span><h2>{group.title}</h2><p>{group.description}</p></div>
        <div className="wtlf-lore-grid">{group.ids.map(id=>{
          const entry=loreEntries.find(e=>e.id===id);
          return entry?<Link className="wtlf-lore-card" href={`/where-the-light-falls/lore/${entry.id}`} key={id}>
            <span>{entry.type}</span><h3>{entry.title}</h3><p>{entry.summary}</p><span className="wtlf-card-action">READ ENTRY <ArrowIcon /></span>
          </Link>:null;
        })}</div>
      </section>)}
    </div>
    <div className="next-page"><div className="shell"><span>READY TO ENTER THE STORY?</span><Link href="/where-the-light-falls/chapter-one">Read Chapter One <ArrowIcon /></Link></div></div>
  </div>;
}
