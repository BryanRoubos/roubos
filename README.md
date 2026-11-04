# Bryan Roubos - Personal Portfolio and Creative Work

Official website: https://bryanroubos.com

A software engineering and machine learning focused portfolio, with an integrated public home for the original fantasy novel **Where the Light Falls**.

## About

Bryan Roubos is a Software Engineering student at HU Utrecht and backend intern at Tandem-IT, working toward machine learning engineering. The portfolio presents relevant engineering work, the Fantasy World AI Lab project, and original storytelling developed through prose, visual worldbuilding, 3D models, cinematics, and small interactive experiments.

## Pages

- `/` - Introduction, Engineering and Where the Light Falls
- `/engineering` - Technical direction, Fantasy World AI Lab, and selected work
- `/where-the-light-falls` - Story overview and creative process
- `/where-the-light-falls/world` - Illustrated canyon city atlas
- `/where-the-light-falls/characters` - All five publicly introduced characters
- `/where-the-light-falls/lore` - Browse the approved public lore archive
- `/where-the-light-falls/lore/[slug]` - Individual public lore entries
- `/where-the-light-falls/chapter-one` - Complete approved Chapter One and original illustrations

## Public canon and artwork

The source of truth for public `Where the Light Falls` content is [the original reader website repository](https://github.com/BryanRoubos/where-the-light-falls-site):

- `app.js` contains the approved lore entries.
- `chapters/chapter-one.md` contains the approved Chapter One manuscript.
- `data/approved-images.json` and `assets/images` identify approved published art.
- Original author-only notes and unreleased plot information must remain private.

The personal hero image is `public/hero.jpg`, and the selected work photo is `public/selected-work.png`.

## Development

```bash
npm ci
npm run dev
npm run lint
npm run build:vinext
```

This site uses Next.js App Router, React and vinext for Cloudflare. GitHub Actions run lint/build and visual review workflows.

## Completion and QA

See [the portfolio completion plan](docs/PORTFOLIO_COMPLETION_PLAN.md). A passing build does not establish that production was deployed or that responsive layouts have passed manual visual testing.

Contact: [roubos@proton.me](mailto:roubos@proton.me).
