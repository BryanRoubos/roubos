import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WtlfNavigation } from "@/components/wtlf-navigation";
import { findLoreEntry, loreEntries } from "@/lib/wtlf-lore";
import { characterArt, worldArt } from "@/lib/wtlf-media";
import "../../world.css";

type Params = { params: Promise<{slug:string}> };
export function generateStaticParams() { return loreEntries.map(e=>({slug:e.id})); }
export async function generateMetadata({params}:Params):Promise<Metadata>{
  const {slug}=await params;const e=findLoreEntry(slug);
  return e?{title:`${e.title} | Where the Light Falls`,description:e.summary,alternates:{canonical:`/where-the-light-falls/lore/${e.id}`}}:{title:"Lore not found"};
}
export default async function LoreEntry({params}:Params){
 const {slug}=await params;const e=findLoreEntry(slug);
 if(!e)notFound();
 const character=characterArt[e.id];
 const location=worldArt.find(a=>a.id===e.id);
 const art=character?.src??location?.src;
 const alt=character?.alt??location?.alt??"Illustration from Where the Light Falls";
 const related=e.related.map(id=>findLoreEntry(id)).filter((v):v is NonNullable<typeof v>=>Boolean(v));
 return <div className="world-page">
   <header className="wtlf-page-header shell"><Link className="world-text-link" href="/where-the-light-falls/lore">BACK TO THE LORE ARCHIVE</Link><span className="eyebrow">WHERE THE LIGHT FALLS / {e.type.toUpperCase()}</span><h1>{e.title}</h1><p>{e.summary}</p></header>
   <WtlfNavigation />
   <article className="wtlf-article shell">
     {art && <figure><Image unoptimized src={art} width={1100} height={1400} sizes="(max-width: 850px) 100vw, 600px" alt={alt} /></figure>}
     <div className="wtlf-article-copy">{e.body.map((p,i)=><p key={i}>{p}</p>)}
       {related.length>0&&<section className="wtlf-related"><span className="eyebrow">KEEP EXPLORING</span><div>{related.map(v=><Link key={v.id} href={`/where-the-light-falls/lore/${v.id}`}>{v.title}</Link>)}</div></section>}
     </div>
   </article>
   <div className="next-page"><div className="shell"><span>DISCOVER THE STORY</span><Link href="/where-the-light-falls/chapter-one">Read Chapter One</Link></div></div>
 </div>;
}
