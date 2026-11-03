import Link from "next/link";
export default function NotFound() {
  return <section className="not-found shell"><span className="eyebrow">404 / NOT FOUND</span><h1>This path goes<br /><em>nowhere yet.</em></h1><p>The page you&apos;re looking for isn&apos;t here.</p><Link href="/" className="button button-primary">Return home ↗</Link></section>;
}
