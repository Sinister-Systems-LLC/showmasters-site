# Show Masters Production Logistics — Marketing Site

> Author: RKOJ-ELENO :: 2026-05-23

Static marketing site for [Show Masters Production Logistics](https://www.showmasters.com) — live-event stagehand, rigger, technician, and crew-lead staffing since 2002.

## Live

- Production: [showmasters-web-production.up.railway.app](https://showmasters-web-production.up.railway.app)
- Custom domain (operator-gated): showmasters.com

## Stack

- Pure static HTML + CSS + JS — no build step, no framework
- Served via [`serve`](https://github.com/vercel/serve) on Railway
- WebP-first image delivery via `<picture>` elements
- 34/35 pages carry valid JSON-LD structured data (ProfessionalService, AboutPage, CollectionPage, HowTo, etc.)
- US service-area map uses amCharts public-domain Albers-USA topology

## Local development

```bash
# from this directory
python -m http.server 8000
# or
npx serve -s .
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Deploy

```bash
# from this directory (requires `railway` CLI + authenticated session)
railway up --detach
```

Railway auto-builds via NIXPACKS, installs `serve`, and runs `npm start`.

## Site structure

```
.
├── index.html                # Homepage with hero video + featured map
├── what.html                 # Crew roles (12 service cards)
├── where.html                # US service-area map (full Albers USA, hub stars, legend)
├── shows.html                # Portfolio (16 show cards, brand-locked photos)
├── how.html                  # Four-step crewing process
├── about.html, contact.html, order.html, careers.html
├── crew.html, press.html, case-studies.html, glossary.html, insurance.html
├── orlando.html, dallas.html, houston.html, tampa.html  # City pages
├── blog.html                 # Blog index
├── blog/                     # 11 blog articles
├── 404.html
├── accessibility.html, cookies.html, privacy.html, terms.html
├── style.css                 # Single global stylesheet
├── script.js                 # Main JS (nav, intro, counters)
├── public/
│   ├── img/                  # Logos, favicon, OG card, brand SVGs
│   │   └── generated/        # nano-banana brand-locked photos (WebP + PNG)
│   │       ├── events/       # 8 event-type heros
│   │       ├── shows/        # 8 distinct show heros
│   │       ├── services/     # 12 service-card photos
│   │       ├── cities/       # 4 city skyline heros
│   │       └── blog/, careers/, pillars/, process/
│   ├── video/                # Hero background videos
│   └── js/interactive-map.js # US map click-popup behavior
├── sitemap.xml, robots.txt, manifest.json
├── package.json, railway.json, serve.json   # Railway/serve config
└── .dockerignore             # Excludes dev artifacts + PNG fallbacks from prod bundle
```

## License

All rights reserved. Show Masters Production Logistics · Orlando, FL + Dallas, TX.
