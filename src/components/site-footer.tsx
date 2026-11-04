import Link from "next/link";
import { navigation, site } from "@/lib/site";
import { ArrowIcon } from "@/components/arrow-icon";

export function SiteFooter() {
 return <footer className="site-footer" id="footer">
  <div className="shell">
   <div className="footer-top">
    <div><span className="eyebrow"><span className="status-pip" /> OPEN TO OPPORTUNITIES</span><h2>Have something<br /><em>in mind?</em></h2></div>
    <a className="footer-cta" href={`mailto:${site.email}`}>Get in touch <ArrowIcon /></a>
   </div>
   <div className="footer-bottom">
    <Link className="footer-signature" href="/">BR<span>.</span></Link>
    <nav aria-label="Footer navigation">{navigation.map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
    <div className="footer-external">
     <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon /></a>
     <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowIcon /></a>
     <a href={`mailto:${site.email}`}>{site.email}</a>
    </div>
   </div>
   <div className="footer-legal"><span>© {new Date().getFullYear()} Bryan Roubos</span><span>Software engineering and original storytelling.</span><Link href="/#top">BACK TO TOP</Link></div>
  </div>
 </footer>;
}
