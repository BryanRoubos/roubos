import Link from "next/link";
import { navigation, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div><span className="eyebrow"><span className="status-pip" /> OPEN TO CONVERSATIONS</span><h2>Have something<br /><em>in mind?</em></h2></div>
          <a className="footer-cta" href={site.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-bottom">
          <Link className="footer-signature" href="/">BR<span>.</span></Link>
          <nav aria-label="Footer navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
          <div className="footer-external"><Link href="/engineering">Projects ↗</Link><Link href="/where-the-light-falls">Where the Light Falls ↗</Link><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><span>{site.email}</span></div>
        </div>
        <div className="footer-legal"><span>© {new Date().getFullYear()} Bryan Roubos</span><span>Software engineering &amp; original storytelling.</span><a href="#top">BACK TO TOP ↑</a></div>
      </div>
    </footer>
  );
}
