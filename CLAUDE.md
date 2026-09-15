# maartenschuilenburg.nl

Personal site of Maarten Schuilenburg: Vite + React 18 + React Router 6 + Tailwind 3, deployed on
Vercel. Dutch at `/`, English at `/en`. See `docs/adr/0001-rebuild-bilingual-vite-vercel.md`.

## Working on this site

- **Load the `hyperion-mind` skill first** for any copy change: positioning, naming rules and voice
  ("ik", never "wij"; no avoid-list words). `landing-page` holds the motion and verification approach.
- **Role:** a personal profile. Every call to action goes to hyperionmind.eu or the cal.com
  Procesgesprek; this site sells nothing of its own.
- **Copy lives in `src/content/nl.js` and `en.js`, never in components.** Change both; the build
  fails when their keys differ. Facts shared by both languages live in `src/content/site.js`.
- **Keep facts in step with hyperion-landing** (`C:\1repos\0test\hyperion-landing\src\content\site.js`):
  cal.com link, email, KvK, organisations, certifications.
- Never invent numbers, clients or projects. Only real, cleared images; the old client dashboard
  screenshots (My Jewellery, NTFU, Deloitte management) show client figures and stay off.
- HyperionMind is a **BV** (not an eenmanszaak); the electrical engineering training is a
  **Cursus Elektrotechniek** (not a praktijkdiploma).
- **Branches:** `rebuild` is the working branch; `main` is production; `legacy-simplefolio` keeps
  the old site. Merge to `main` only when Maarten says so.
- **Never commit `.claude/`.** Push only when asked. The DNS switch at Strato is Maarten's to do.
- Verify visually with headless Chrome (desktop tall window; 360/414 px via iframes) before calling
  UI work done.
