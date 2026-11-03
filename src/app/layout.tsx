import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";
import "./cinematic-system.css";
export const metadata: Metadata={
 metadataBase:new URL(site.url),
 title:{default:site.title,template:"%s | Bryan Roubos"},
 description:site.description,
 alternates:{canonical:"/"},
 openGraph:{type:"website",locale:"en_US",siteName:site.name,title:site.title,description:site.description,url:site.url},
 twitter:{card:"summary_large_image",title:site.title,description:site.description},
 robots:{index:true,follow:true},
};
export const viewport: Viewport={width:"device-width",initialScale:1,themeColor:"#100b0e"};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
 const person={"@context":"https://schema.org","@type":"Person","@id":site.url+"/#bryan",name:site.name,url:site.url,sameAs:[site.github,site.linkedin],description:site.description,knowsAbout:["Software Engineering","Backend Development","Machine Learning","Creative Writing","3D Development","Cinematics","Game Development"]};
 return <html lang="en"><body id="top"><a className="skip-link" href="#main">Skip to content</a><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(person).replace(/</g,"\\u003c")}}/><SiteHeader/><main id="main">{children}</main><SiteFooter/></body></html>;
}
