import Link from "next/link";
import { navigation, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Bryan Roubos, home">
          <span className="brand-monogram" aria-hidden="true">BR<span className="brand-dot">.</span></span>
          <span className="brand-name">BRYAN<br />ROUBOS</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="header-contact" href="/#contact">CONNECT <span aria-hidden="true">↗</span></Link>
        <details className="mobile-menu">
          <summary aria-label="Toggle navigation"><span className="menu-lines" aria-hidden="true"><i /><i /></span><span>MENU</span></summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/#contact">Get in touch ↗</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
