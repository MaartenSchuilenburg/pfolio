# maartenschuilenburg.nl

Personal site of Maarten Schuilenburg, founder of [HyperionMind](https://www.hyperionmind.eu/).
Dutch at `/`, English at `/en`.

Vite + React 18 + React Router 6 + Tailwind 3 + `motion`, deployed on Vercel. Why: [ADR-0001](docs/adr/0001-rebuild-bilingual-vite-vercel.md).

## Develop

```bash
npm install
npm run dev            # http://localhost:5173
npm run check:content  # nl.js and en.js must have the same keys
npm run build          # runs the content check, then vite build
npm run preview
```

## Where things live

| What | Where |
| :-- | :-- |
| Dutch and English copy | `src/content/nl.js`, `src/content/en.js` (identical keys) |
| Shared facts: links, email, KvK, photo, organisations, certifications | `src/content/site.js` |
| Project images | `MEDIA` in `src/components/Projects.jsx`, files in `public/images/` |
| Per-language head tags | `src/hooks/useHead.js`; Dutch defaults in `index.html` |
| Motion effects | `src/components/fx/index.jsx` (copied from hyperion-landing) |

The old Simplefolio site is on the `legacy-simplefolio` branch.
