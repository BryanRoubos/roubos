# Portfolio completion plan

**Source of truth:** the current public repositories `BryanRoubos/roubos` and `BryanRoubos/where-the-light-falls-site`, the user's approved brief, and verified professional facts from LinkedIn and GitHub. This plan separates the *approved published novel and lore* from private author-only story material.

**Outcome:** `bryanroubos.com` is a concise professional portfolio for a HU Utrecht Software Engineering student pursuing machine learning engineering. It is also the self-contained public home of *Where the Light Falls*, an original novel in development also being explored through 3D modeling, cinematics and a small game.

**Design direction:** "I build systems. And worlds." Dark editorial / cinematic, burgundy, charcoal, warm ivory and muted bronze. Use the approved `hero.jpg` and `ThisOne.png`, plus only creator-approved public WTLF artwork. Use regular hyphens instead of em dashes in authored site copy.

## Source and approval boundaries

- [ ] Treat the original public reader site's `app.js` entries as the source of truth for all 19 public lore entries (geography, society, history and five people).
- [ ] Treat the approved `chapters/chapter-one.md` as the manuscript source. Maintain its exact wording unless explicitly approved otherwise.
- [ ] Reuse only assets in the original reader site's approved image manifest / published site. Do not publish `where-the-light-falls-author` data, speculative private plot details, or archive art.
- [ ] Keep character illustration captions honest: visual development is not necessarily established narrative canon.
- [ ] Preserve public facts from profile README and LinkedIn without inventing accomplishments.

## P0 - Architecture and content

### Homepage `/`

- [ ] Professional positioning immediately visible: HU Utrecht Software Engineering student, working toward ML engineering.
- [ ] Strong primary headline: "I build systems. And worlds."
- [ ] Approved `hero.jpg` as the hero; use real image markup and proper alt text.
- [ ] Two clear visual work destinations: Engineering, Where the Light Falls. Do not make a redundant third Selected Work category.
- [ ] Approved `ThisOne.png` in the Engineering card, properly framed; original WTLF art in creative card.
- [ ] Short, concrete current work statement, without repeated introductions or defensive caveats.
- [ ] Visible, simple contact CTA and correct `roubos@proton.me`.
- [ ] Remove unnecessary duplicated cinematic promos or repetitive text after content review.

### Engineering `/engineering`

- [ ] Emphasize real engineering evidence: backend internship / AI Infrastructure Cluster at Tandem-IT, Groupvibe (50,000+ users), third-place Digital Product Passport hackathon.
- [ ] Feature Fantasy World AI Lab accurately: small simulated world, reproducible dataset, comparing learned predictions with transparent rules/baselines; don't claim incomplete milestones are finished.
- [ ] Brief skills and technical direction, real experience before broad aspiration.
- [ ] WebSneller and DesignAudit only as concise past references; no unwanted project links.
- [ ] Remove redundant "how I'm learning" roadmap, filler and performative disclaimers.
- [ ] Clear recruiter call to action with LinkedIn, GitHub and email.

### Where the Light Falls hub `/where-the-light-falls`

- [ ] Story-first landing experience sourced from current public original; author and novel identity clear.
- [ ] Emphasize *novel in development first*. Separately describe exploration in Blender / 3D, cinematics and a small game. Never frame those as completed.
- [ ] Five character teasers leading to full original character profiles.
- [ ] Illustrated atlas, public lore archive, and Chapter One, all internal on `bryanroubos.com`.
- [ ] Remove any external "Explore original story website" CTA.
- [ ] No spoilers/private materials introduced during copywriting.

### Characters `/where-the-light-falls/characters`

- [ ] All five public characters: Elias Varek, Mira Varek, Maren, Bram, unnamed figure.
- [ ] Each includes exact original public summary and paragraphs from reader site's `app.js`.
- [ ] Each includes approved original matching art, with non-cropped visible faces and appropriate alt text.
- [ ] Related lore navigation is internal and correct.

### World atlas `/where-the-light-falls/world`

- [ ] Preserve the original five stops and images: canyon metropolis, Upper City life, Upper City gate approach, Middle Heights, Deepwater.
- [ ] Integrate both overview and accurate original lore per location.
- [ ] Align picture framing, captions and crosslinks on desktop and mobile.

### Lore archive `/where-the-light-falls/lore` and `/where-the-light-falls/lore/[slug]`

- [ ] Render all 19 public entries, not shortened invented summaries.
- [ ] Group them by geography, life/power, history and people.
- [ ] Each entry gets its own crawlable URL, direct navigation, preserved paragraphs and internal related links.
- [ ] Feature relevant approved imagery where it exists.
- [ ] Validate no lore conflicts with the original public reader website.

### Chapter One `/where-the-light-falls/chapter-one`

- [ ] Use exactly the approved manuscript from public source, without silently revising it.
- [ ] Restore all three original images at original manuscript positions: "Not enough", "Well, the knot held", "A better question".
- [ ] Reader typography, comfortable measure, day/night mode and text size controls; correct mobile rendering.
- [ ] No external reliance on the original GitHub Pages website for artwork or reading.
- [ ] No accidental duplicate title or heading.

## P1 - Consistent visual system / interaction

- [ ] Replace mixed → ↗ arrow glyphs with one consistent small SVG icon across home, header, footer, Engineering and WTLF.
- [ ] Fix Connect button line-height, padding, vertical alignment and visual hierarchy.
- [ ] Standardize typography, color tokens, button geometry, capitalization and spacing.
- [ ] Use distinct image cropping for landscapes and portrait art. At responsive breakpoints, show critical subjects and protect text contrast.
- [ ] Keyboard accessible mobile navigation, working deep links and in-page anchors.
- [ ] Verify 320px, 375px, 390px, 768px, 1024px and wide desktop layouts; 200% browser zoom.
- [ ] Touch targets, focus visibility, adequate contrast, reduced motion, alt text, image dimensions and layout stability.

## P2 - SEO, AI discovery, deployment

- [ ] Unique title, description, canonical and OG/Twitter previews for all published routes.
- [ ] Sitemap includes Engineering, story hub, characters, atlas, lore archive, all 19 lore URLs and Chapter One.
- [ ] Check robots and crawlable content, internal navigation, metadataBase and author structured data.
- [ ] Use Person schema for Bryan and appropriate creative-work metadata for the published novel, avoiding invented publication dates or availability.
- [ ] Ensure redirects from old paths are appropriate and no new 404s.
- [ ] Validate Google Search Console indexing and rich-results/schema syntax after deployment; no guarantee of ranking or AI inclusion.
- [ ] Check Cloudflare production vs GitHub main commit; not just local/CI build.
- [ ] Run lint and production build. Inspect GitHub Actions logs and visual review screenshots. Manually inspect every page and every breakpoint.
- [ ] Clean out or archive misleading old `README.md` claims and stale comments that deny real creative artwork.

## GitHub and LinkedIn consistency

- [ ] GitHub profile README: keep strong professional introduction, named internship and AI Lab; edit lab description to distinguish current work from intended end state; link real portfolio, LinkedIn, and WTLF hub as appropriate.
- [ ] GitHub pinned repositories: ensure public pinned projects represent credible maintained code. Prioritize ML learning / Fantasy World AI Lab when substantive, portfolio when useful, and author-approved public WTLF site. Unpin abandoned or AI-generated demo repos without substance. (Pin selection requires user-accessible GitHub profile setting.)
- [ ] LinkedIn headline: Software Engineering student at HU Utrecht | Backend Intern at Tandem-IT | Aspiring ML Engineer. This is more specific than repeating "Python & Machine Learning" as badges.
- [ ] LinkedIn About: retain authentic "how does it work, and why?" voice; tighten long product descriptions; emphasize current technical work, concrete proof and interest in ML internships; link `bryanroubos.com` prominently in Featured.
- [ ] Keep employment, dates, technical claims, education and contact consistent across site, GitHub and LinkedIn. Do not edit the LinkedIn account without approval.

## Definition of done

- [ ] Every public link works and stays on `bryanroubos.com` for WTLF material.
- [ ] All 19 approved lore entries and five illustrated characters have been migrated exactly.
- [ ] All three chapter illustrations are present in the correct passage; manuscript remains intact.
- [ ] No inappropriate private plot material, unapproved art or false accomplishments appear.
- [ ] No missing images, clipped key subjects, odd CTA arrows, broken nav, or obvious spacing issues at tested sizes.
- [ ] All pages have unique metadata and are included as appropriate in sitemap.
- [ ] Lint/build/visual workflows pass, production deployment independently verified, and an auditable change log completed.

**Progress notation:** Do not mark an item done merely because a file was written; it requires verification. Code edits may be staged on a feature branch and merged only after automated checks.
