import Link from "next/link";
import { navigation } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer site-footer-compact" id="footer">
      <div className="shell">
        <div className="footer-bottom">
          <Link className="footer-signature" href="/" aria-label="Bryan Roubos, home">BR<span>.</span></Link>
          <nav aria-label="Footer navigation">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </div>
        <div className="footer-legal">
          <span>© {new Date().getFullYear()} Bryan Roubos</span>
          <span>Software engineering and original storytelling.</span>
          <Link href="/#top">BACK TO TOP</Link>
        </div>
      </div>
    </footer>
  );
}
