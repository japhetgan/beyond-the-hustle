# Beyond The Hustle — Spring Retreat 2026

Luxury landing page for the **Beyond The Hustle** women's mastermind retreat, hosted by Kerry Tepedino and Jessica Conti.

**Event:** May 29 – June 1, 2026  
**Investment:** $5,497 (or 2 × $2,997)  
**Live site:** https://japhetgan.github.io/beyond-the-hustle/

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** — dev server & build
- **Tailwind CSS v4** — `@theme` directive, no config file needed
- **GitHub Actions** — auto-deploy to GitHub Pages on push to `master`

## Local Development

```bash
npm install
npm run dev        # http://127.0.0.1:5173
```

## Build & Deploy

```bash
npm run build      # outputs to /dist
```

Pushing to `master` triggers the GitHub Actions workflow and deploys automatically to GitHub Pages.

---

## Adding Real Photos

All photos are managed through one file: `src/data/content.ts`

Drop photos into `/public/images/` and update the paths:

```
/public/images/
  hero.jpg                        # Hero background
  philosophy-bg.jpg               # Philosophy section background
  cta-bg.jpg                      # Final CTA background
  who-belongs.jpg                 # Who Belongs lifestyle photo
  origin-story.jpg                # Kerry & Jessica founders photo
  speakers/                       # 8 speaker headshots (600x800px)
  hosts/                          # 2 host portraits (800x600px)
  gallery/                        # 8 event photos (gallery-1.jpg through gallery-8.jpg)
  experience/                     # 6 experience card photos (800x600px)
  case-studies/                   # 2 testimonial portraits (400x400px)
```

Then update the corresponding path strings in `src/data/content.ts`. All components gracefully fall back to gradients if a photo is not yet provided.

---

## Design System

| Token | Value |
|---|---|
| Champagne Gold | `#C9A84C` |
| Deep Cream | `#FAF3E0` |
| Blush Rose | `#E8B4B8` |
| Charcoal | `#1A1A1A` |
| Heading font | Cormorant Garamond |
| Body font | DM Sans |

---

*Built with love for extraordinary women who lead extraordinary lives.*
