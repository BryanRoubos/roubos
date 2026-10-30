# Bryan Roubos — cinematic personal portfolio

A typography-led, image-free portfolio for software engineering, writing, and 3D / game-world exploration. Built on the existing Next.js App Router project.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` for production verification.

## Pages

- `/` — cinematic landing page and introduction
- `/engineering` — engineering approach and honest ML learning status
- `/writing` — Where the Light Falls writing, explicitly an early paused novel
- `/3d-games` — Blender / Unreal Engine experimentation, with no claimed finished game
- `/about` — personal background and links

Legacy unfinished blog, admin, login, and registration routes have been removed. Former /blog and /contact URLs redirect to the relevant sections.

## DRY architecture

- `src/lib/site.ts`: navigation, disciplines, contact links, site metadata
- `src/components/`: shared header, footer, page heading, section title
- `src/app/globals.css`: visual tokens, shared patterns, responsive layouts
- `src/app/sitemap.ts` and `robots.ts`: generated crawler resources

No game screenshots, old WTLF illustrations, generated art, stock imagery, or third-party fonts are used. Abstract hero/stage designs are CSS and typography only.

When genuine original 3D work is ready, replace abstract visual stages with optimized AVIF/WebP renders, useful alt text, accessible captions, and a lightweight fallback. Keep 3D render processing outside the browser until interactive 3D genuinely adds value.

## Before going live

1. Verify `bryanroubos.com` is the correct canonical domain and DNS is pointed at the chosen host; change `src/lib/site.ts` if not.
2. Confirm public contact email and biography wording.
3. Test keyboard navigation, mobile menu, zoom, reduced-motion and screen-reader headings.
4. Run `npm install && npm run build` and Lighthouse / Core Web Vitals on a deployed preview.
5. Confirm GitHub links, canonical URLs, `/sitemap.xml`, `/robots.txt`, and metadata.
6. Add only independently made and approved 3D work later. Do not publish private WTLF manuscript material.

This branch intentionally keeps Next.js rather than migrating an existing codebase to Astro solely for framework preference. It is primarily server-rendered static content; no client-side JavaScript is required for navigation.
