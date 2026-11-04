// Approved illustrations from the public Where the Light Falls reader website.
export const characterArt: Record<string, { src: string; alt: string }> = {
  elias: { src: "/wtlf/elias.webp", alt: "Portrait of Elias Varek, a young Lower City worker." },
  mira: { src: "/wtlf/mira.webp", alt: "Illustrated portrait of Mira Varek above the canyon city." },
  maren: { src: "/wtlf/maren-harbour.webp", alt: "Maren inspecting cargo at the working waterfront." },
  bram: { src: "/wtlf/bram.webp", alt: "Illustrated portrait of Bram, the Deepwater river captain." },
  "unnamed-figure": { src: "/wtlf/workshop-figure.webp", alt: "An unnamed figure inside a Lower City workshop." }
};
export const worldArt = [
  {id:"canyon", title:"The canyon metropolis", subtitle:"One connected city across both rims and down the canyon walls.", src:"/wtlf/upper-reveal.webp", alt:"The upper metropolis and its great crossings above the canyon."},
  {id:"upper-city", title:"Upper City", subtitle:"An enormous metropolis of streets, institutions and neighborhoods.", src:"/wtlf/upper-market.webp", alt:"Market streets and everyday commerce in the Upper City."},
  {id:"upper-access", title:"The way into the Upper City", subtitle:"The guarded approach through Upper Heights.", src:"/wtlf/upper-heights.webp", alt:"The road approaching the guarded route to the Upper City."},
  {id:"middle-heights", title:"Middle Heights", subtitle:"Working neighborhoods on the canyon terraces.", src:"/wtlf/middle-heights.webp", alt:"Middle Heights workshops and buildings on the canyon walls."},
  {id:"deepwater", title:"Deepwater", subtitle:"The inhabited working waterfront beside the river.", src:"/wtlf/deepwater-waterfront.png", alt:"Riverboats, cargo workers and the waterfront at Deepwater."}
] as const;
