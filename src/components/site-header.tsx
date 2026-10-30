import Link from "next/link";
import { navigation } from "@/lib/site";

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
        <a className="header-contact" href="mailto:roubos@proton.me">LET&apos;S TALK <span aria-hidden="true">↗</span></a>
        <details className="mobile-menu">
          <summary aria-label="Toggle navigation"><span className="menu-lines" aria-hidden="true"><i /><i /></span><span>MENU</span></summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <a href="mailto:roubos@proton.me">Get in touch ↗</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
