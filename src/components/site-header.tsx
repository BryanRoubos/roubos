"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { navigation } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    if (menuRef.current) menuRef.current.open = false;
  }, [pathname]);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Bryan Roubos, home">
          <span className="brand-monogram" aria-hidden="true">BR<span className="brand-dot">.</span></span>
          <span className="brand-name">BRYAN<br />ROUBOS</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.filter((item) => item.label !== "Connect").map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="header-contact" href="/#contact">CONNECT</Link>
        <details ref={menuRef} className="mobile-menu">
          <summary aria-label="Toggle navigation"><span className="menu-lines" aria-hidden="true"><i /><i /></span><span>MENU</span></summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => { if (menuRef.current) menuRef.current.open = false; }}>{item.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
