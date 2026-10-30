import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s — Bryan Roubos" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", siteName: site.name, title: site.title, description: site.description, url: site.url },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#080c12" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = { "@context": "https://schema.org", "@type": "Person", name: site.name, url: site.url, sameAs: [site.github], description: site.description, knowsAbout: ["Software engineering", "Machine learning", "Creative writing", "3D art", "Game development"] };
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
