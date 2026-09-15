# ADR-0001: Rebuild the personal site in the hyperion-landing stack, bilingual, on Vercel

- **Status:** Accepted
- **Date:** 2026-09-15
- **Decider:** Maarten Schuilenburg

## Context

maartenschuilenburg.nl was an almost untouched Simplefolio fork (Parcel 2.8, Bootstrap, jQuery,
Node 16), last changed in March 2023. It sold the retired message ("Product Owner and developer",
"data-driven decision making", data/BI projects) and contradicted the HyperionMind reposition to
custom ERP extensions for the energy sector. Prospects who search for Maarten land on it.

The live site is served by Apache on Strato (A `81.169.145.68`, `www` CNAME to the apex),
apparently uploaded by hand. The repo's GitHub Pages workflow did not serve the domain.

## Decision

1. **Role.** A personal profile and CV with no offer of its own. Every call to action goes to
   hyperionmind.eu or the Procesgesprek on cal.com.
2. **Stack.** Rebuild from scratch in the hyperion-landing stack (Vite 4, React 18, React Router 6,
   Tailwind 3, `motion`), with the same dark theme and `#22c55e` accent. The effects in
   `src/components/fx` and `ParallaxBackground.jsx` are copied from hyperion-landing. The old
   Simplefolio code is kept on the `legacy-simplefolio` branch.
3. **Bilingual without an i18n library.** `/` is Dutch (default), `/en` is English. Copy lives in
   `src/content/nl.js` and `en.js` with identical keys; `scripts/check-content.js` fails the build
   when they drift. Shared facts live in `src/content/site.js`. Head tags (`lang`, title,
   description, canonical, `hreflang`, OG) are set per route by `useHead`; `index.html` carries the
   Dutch defaults for crawlers that do not run JavaScript. hyperionmind.eu is Dutch only, so English
   links to it say so.
4. **Hosting.** Vercel, with a catch-all rewrite to `index.html`. DNS stays at Strato; only the web
   records change (see below).
5. **No analytics** for now (founder decision 2026-09-15). No PDF CV: LinkedIn is the CV.
6. **Names and images.** Client names cleared for the web on 2026-09-15 are named, including My
   Jewellery and NTFU. The old dashboard screenshots are not used: they show client figures. The
   only project image is the public Accountability Hack 2019 photo.

## Alternatives considered

- **Repair the Simplefolio build.** Cheapest, but keeps an outdated toolchain, a template look and
  a second visual identity next to hyperionmind.eu.
- **i18n library (react-i18next).** More machinery than two static pages need; a key check covers
  the one real risk, a missing translation.
- **Stay on Strato webspace.** No build pipeline or previews, and manual uploads. Vercel matches
  hyperion-landing.

## Consequences

- One stack and one design language across both sites; effects can be moved between them.
- The bundle is about 112 kB gzip, mostly React and `motion`.
- English pages are client-rendered; crawlers that do not run JavaScript see Dutch head tags on `/en`.
  Acceptable for a profile site; prerendering is the fix if it ever matters.
- **DNS switch, done by Maarten at Strato.** Recorded 2026-09-15 before any change:
  - MX `smtp.rzone.de` (priority 5)
  - DKIM `strato-dkim-0002._domainkey` TXT
  - DMARC `_dmarc` TXT `v=DMARC1;p=reject;`
  - no SPF TXT on the apex
  - NS `docks03.rzone.de`, `shades16.rzone.de`

  Only the apex A record (to Vercel's IP, as shown in the Vercel domain settings) and the `www`
  CNAME (to `cname.vercel-dns.com`) change. MX and TXT records stay untouched.
