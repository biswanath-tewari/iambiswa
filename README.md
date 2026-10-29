# iambiswa

Personal site of Biswanath Tewari, built with Next.js (App Router) and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

- `lib/data.ts` – experience, quotes, screenshots, research notes, supplements, hobbies and contact links. Most text edits happen here.
- `components/` – one file per tab (`Home`, `Portfolio`, `Hobbies`, `Contact`) plus the interactive pieces (`TabBar`, `ShotsCarousel`, `BeforeAfter`, `CopyEmail`).
- `assets/` – photos and screenshots. They're imported statically, so `next/image` resizes them and shows a blurred preview while they load.
- `app/globals.css` – all styles and the light/dark colour tokens.

## Deploy

Push to GitHub and import the repo on Vercel. No extra settings needed.

## CI/CD

- **Deploys:** Vercel's GitHub integration. Every push to `main` goes live on production; every pull request gets its own preview URL.
- **Checks:** `.github/workflows/ci.yml` runs on GitHub Actions for every push and pull request to `main`. It installs dependencies and runs `next build`, which also type-checks, so a broken change shows a red ❌ on the commit or PR.

Both are free: Vercel's Hobby plan and GitHub Actions' free minutes cover a personal site comfortably.
