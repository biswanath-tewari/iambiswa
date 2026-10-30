# iambiswa

Personal site of Biswanath Tewari, built with Next.js (App Router) and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

```
app/                        Routes (Next.js App Router)
├── layout.tsx              Root layout: fonts, site metadata, wraps every page in <Site>
├── page.tsx                /  (Home)
├── [tab]/page.tsx          /portfolio, /hobbies, /contact
├── globals.css             All styles and the light/dark colour tokens
├── icon.svg                Browser-tab icon
├── apple-icon.tsx          iPhone home-screen icon (generated PNG)
└── opengraph-image.tsx     Link-preview image for chats and social posts

src/
├── components/             Shared across tabs
│   ├── Site.tsx            Header, tab bars, footer; View handles scroll-to-top and the enter animation
│   └── TabBar.tsx          Tab list, links and the sliding indicator
├── tabs/                   One folder per tab, co-located
│   ├── Home/
│   │   └── index.tsx
│   ├── Portfolio/
│   │   ├── index.tsx
│   │   └── components/
│   │       ├── Projects.tsx
│   │       └── ShotsCarousel.tsx
│   ├── Hobbies/
│   │   ├── index.tsx
│   │   └── components/
│   │       └── BeforeAfter.tsx
│   └── Contact/
│       ├── index.tsx
│       └── components/
│           └── CopyEmail.tsx
└── assets/                 Photos; shots/ holds the testimonial screenshots

lib/
├── data.ts                 Experience, quotes, screenshots, research notes, hobbies, contact links
├── rv.ts                   Stagger helper for the rise-in animation
└── logo.tsx                "B" monogram used by the icons and link-preview image
```

**Most text edits happen in `lib/data.ts`.**

### Conventions

- **Shared vs. co-located.** `src/components/` holds only what several pages use. Anything used by one tab lives in that tab's `components/` folder. When a second tab needs it, move it up to `src/components/` rather than importing across tabs.
- **Adding a tab.** Create `src/tabs/<Name>/index.tsx`, add it to `pages` in `app/[tab]/page.tsx`, add its id to `TABS` in `src/components/TabBar.tsx`, and add an item to both tab bars in `src/components/Site.tsx`.
- **Images.** Images in `src/assets/` are imported statically, so `next/image` resizes them, serves them from `/_next/static/media/` and shows a blurred preview while they load.
- **Imports.** Use the `@/` alias, which points at the project root (e.g. `@/src/components/Site`, `@/lib/data`). Inside a tab, use `./components/...` for its own pieces.

## Deploy

Push to GitHub and import the repo on Vercel. No extra settings needed.

## CI/CD

- **Deploys:** Vercel's GitHub integration. Every push to `main` goes live on production; every pull request gets its own preview URL.
- **Checks:** `.github/workflows/ci.yml` runs on GitHub Actions for every push and pull request to `main`. It installs dependencies and runs `next build`, which also type-checks, so a broken change shows a red ❌ on the commit or PR.

Both are free: Vercel's Hobby plan and GitHub Actions' free minutes cover a personal site comfortably.

## SEO

- `lib/site.ts` – canonical URL (`https://www.iambiswa.in`), name variants, keywords and shared social-card fields.
- `lib/jsonld.tsx` – schema.org `Person` + `WebSite` data (rendered in the root layout) and a `ProfilePage` entry per page, so Google can connect the site to Biswanath Tewari's LinkedIn, GitHub, X and Instagram.
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` – generate `/sitemap.xml`, `/robots.txt` and the web app manifest.
- Each page sets its own title, description and canonical URL (`app/page.tsx`, `app/[tab]/page.tsx`).
- To verify Google Search Console with the HTML-tag method, set `GOOGLE_SITE_VERIFICATION` in Vercel's environment variables. DNS verification needs no code.
