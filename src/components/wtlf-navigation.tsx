import Link from "next/link";

export function WtlfNavigation() {
  return <nav className="wtlf-local-nav shell" aria-label="Explore Where the Light Falls">
    <Link href="/where-the-light-falls">The story</Link>
    <Link href="/where-the-light-falls/world">World atlas</Link>
    <Link href="/where-the-light-falls/characters">Characters</Link>
    <Link href="/where-the-light-falls/lore">Lore archive</Link>
    <Link href="/where-the-light-falls/chapter-one">Read Chapter One</Link>
  </nav>;
}
