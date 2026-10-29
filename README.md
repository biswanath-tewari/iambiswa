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
