import Link from "next/link";
import { disciplines } from "@/lib/site";
import { SectionTitle } from "@/components/section-title";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-haze" aria-hidden="true" />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <div className="hero-overline"><span className="status-pip" /> ENGINEER / WRITER / WORLD BUILDER <span className="hero-overline-rule" /></div>
            <h1>Ideas deserve<br />to <em>become</em><br />real<span className="accent-period">.</span></h1>
            <p>Software, stories, and imagined worlds. I&apos;m Bryan — exploring the space between technical craft and creative curiosity.</p>
            <div className="hero-actions"><Link href="/3d-games" className="button button-primary">Explore my work <span aria-hidden="true">↗</span></Link><Link href="/about" className="text-link">Get to know me <span aria-hidden="true">↗</span></Link></div>
          </div>
          <div className="hero-art" role="img" aria-label="Abstract typographic composition representing a world in progress; no game artwork is used">
            <div className="art-halo" aria-hidden="true" /><div className="art-orbit orbit-one" aria-hidden="true" /><div className="art-orbit orbit-two" aria-hidden="true" /><div className="art-core" aria-hidden="true" /><div className="art-grid" aria-hidden="true" />
            <div className="art-corner art-corner-top">W / 001<br />EXPLORATION</div>
            <div className="art-label"><span>AN UNFINISHED UNIVERSE</span><strong>WHERE THE<br /><em>LIGHT FALLS</em></strong><span className="art-label-bottom">ORIGINAL WORLD · IN DEVELOPMENT</span></div>
            <div className="art-corner art-corner-bottom">NO IMAGERY YET<br />ONLY POSSIBILITY ↗</div>
          </div>
          <div className="hero-bottom"><span>SCROLL TO DISCOVER <span aria-hidden="true">↓</span></span><span>INDEPENDENT PORTFOLIO / 2026</span></div>
        </div>
      </section>

      <section className="manifesto"><div className="shell manifesto-inner"><span className="eyebrow">THE THROUGHLINE</span><p>Different disciplines.<br /><em>One curiosity.</em></p><span className="manifesto-aside">I like figuring out how things work — and imagining what they could become.</span></div></section>

      <section className="disciplines-section section-space">
        <div className="shell">
          <SectionTitle number="01" label="WHAT I DO" title="Three ways of making." description="Each practice feeds the others. None of them needs to fit neatly into a single box." />
          <div className="discipline-grid">
            {disciplines.map((item) => <Link key={item.number} href={item.href} className={"discipline-card " + item.className}>
              <div className="discipline-top"><span>{item.number} / {item.eyebrow}</span><span className="card-arrow" aria-hidden="true">↗</span></div>
              <div className="discipline-symbol" aria-hidden="true">{item.number === "01" ? "⌘" : item.number === "02" ? "✳" : "◇"}</div>
              <div className="discipline-bottom"><h3>{item.title}</h3><p>{item.description}</p><span className="card-action">{item.cta} <span aria-hidden="true">→</span></span></div>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="world-section section-space">
        <div className="shell">
          <SectionTitle number="02" label="A WORLD TAKING SHAPE" title="Where the Light Falls" description="One original dark-fantasy universe, explored through prose and early 3D experiments." href="/3d-games" action="Discover the world" />
          <div className="world-feature">
            <div className="world-feature-visual"><div className="world-rings" aria-hidden="true"><i /><i /><i /></div><span className="world-visual-top">W.T.L.F. / 001</span><strong>W<span className="serif-italic">T</span>LF</strong><span className="world-visual-bottom">THE WORLD COMES FIRST.<br />THE IMAGES WILL FOLLOW.</span></div>
            <div className="world-feature-copy"><span className="eyebrow">ORIGINAL UNIVERSE / IN PROGRESS</span><h3>Before the render,<br /><em>there is a feeling.</em></h3><p>Where the Light Falls began with writing. Now I&apos;m exploring how its atmosphere might take shape in 3D. The novel is paused; the world isn&apos;t finished. That&apos;s part of the story.</p><div className="tag-row"><span>WORLD BUILDING</span><span>WRITING</span><span>BLENDER</span><span>UNREAL ENGINE</span></div><div className="world-links"><Link href="/writing">The writing <span aria-hidden="true">↗</span></Link><Link href="/3d-games">The 3D exploration <span aria-hidden="true">↗</span></Link></div></div>
          </div>
        </div>
      </section>

      <section className="now-section section-space"><div className="shell"><SectionTitle number="03" label="RIGHT NOW" title="Work in progress." description="A snapshot of the things I&apos;m learning and building toward — not a list of finished products." /><div className="now-grid"><div className="now-item"><span>01 / LEARNING</span><h3>Machine learning</h3><p>Building foundations through independent study and hands-on exploration.</p><Link href="/engineering">Engineering notes ↗</Link></div><div className="now-item"><span>02 / EXPLORING</span><h3>Worlds in 3D</h3><p>Experimenting with Blender and Unreal Engine to find the visual language of WTLF.</p><Link href="/3d-games">3D &amp; games ↗</Link></div><div className="now-item"><span>03 / DEVELOPING</span><h3>A creative practice</h3><p>Finding ways to bring technical precision and storytelling into the same room.</p><Link href="/about">More about me ↗</Link></div></div></div></section>
    </>
  );
}
