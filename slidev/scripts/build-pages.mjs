// Builds both decks into dist/ for GitHub Pages, plus a landing page linking them.
//
//   dist/index.html        → landing page (this script)
//   dist/highlights/       → Highlights deck  (slides.md,  hash router)
//   dist/detail/           → Detail-Appendix  (detail.md,  hash router)
//
// GitHub Pages serves the site under /<repo>/, and cannot rewrite deep links,
// which is why each deck uses `routerMode: hash`. Pass the base via BASE_PATH
// (the CI workflow sets it to /<repo>/); defaults to the current repo name.
import { execSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'

let base = process.env.BASE_PATH || '/kb-cursor-evi/'
if (!base.startsWith('/')) base = '/' + base
if (!base.endsWith('/')) base = base + '/'

const decks = [
  { entry: 'slides.md', sub: 'highlights' },
  { entry: 'detail.md', sub: 'detail' },
]

// Call the local Slidev binary directly — `npx` routes through pnpm on some
// setups and can fail a deps-status check before Slidev ever runs.
const slidev = process.platform === 'win32'
  ? 'node_modules\\.bin\\slidev.cmd'
  : 'node_modules/.bin/slidev'

for (const d of decks) {
  const cmd = `${slidev} build ${d.entry} --base ${base}${d.sub}/ --out dist/${d.sub}`
  console.log(`\n▶ ${cmd}`)
  execSync(cmd, { stdio: 'inherit' })
}

const landing = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CURSOR/EVI — Coverage-Validierung 2 (Standard-Linse)</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root{--bg:#faf9f7;--card:#fff;--ink:#1c1b1a;--mut:#625f58;--hint:#94918a;--line:#e9e5dd;--accent:#215e5a;--soft:#e6efed;--green:#4f8a3d;--red:#c0453f}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased}
.serif{font-family:'Newsreader',Georgia,'Times New Roman',serif}
.wrap{max-width:940px;margin:0 auto;padding:72px 24px 64px}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin:0 0 14px}
h1{font-family:'Newsreader',serif;font-weight:600;font-size:40px;line-height:1.12;margin:0 0 14px;letter-spacing:-.01em;max-width:20ch}
.sub{margin:0;color:var(--mut);font-size:16.5px;max-width:62ch}
.pills{margin-top:22px;display:flex;flex-wrap:wrap;gap:9px}
.pill{background:#fff;border:1px solid var(--line);border-radius:999px;padding:6px 14px;font-size:12.5px;color:var(--mut);font-weight:500}
.pill.hl{background:var(--soft);border-color:#cfe0dd;color:var(--accent)}
.grid{margin-top:40px;display:grid;grid-template-columns:1fr 1fr;gap:20px}
.card{display:block;text-decoration:none;color:inherit;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:28px 26px;box-shadow:0 1px 2px rgba(28,27,26,.04),0 10px 30px rgba(28,27,26,.05);transition:transform .15s ease,box-shadow .15s ease,border-color .15s ease}
.card:hover{transform:translateY(-3px);box-shadow:0 4px 8px rgba(28,27,26,.06),0 18px 42px rgba(28,27,26,.09);border-color:#cfe0dd}
.card .tag{font-size:11.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--accent)}
.card h2{font-family:'Newsreader',serif;font-weight:600;font-size:23px;margin:10px 0 6px}
.card p{margin:0;color:var(--mut);font-size:14px;line-height:1.55}
.card .meta{margin-top:16px;display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--hint)}
.card .go{margin-left:auto;color:var(--accent);font-weight:600}
.foot{margin-top:44px;padding-top:20px;border-top:1px solid var(--line);color:var(--hint);font-size:12.5px}
.foot code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;background:#f0ede6;padding:1px 6px;border-radius:5px;font-size:.9em}
@media (max-width:720px){.grid{grid-template-columns:1fr}h1{font-size:31px}.wrap{padding:48px 20px}}
</style>
</head>
<body>
<div class="wrap">
  <p class="eyebrow">Coverage-Validierung 2 · Standard-Linse</p>
  <h1 class="serif">CURSOR / EVI — WP1-Anforderungen neu bewertet</h1>
  <p class="sub">Re-Validierung der 165 WP1-Anforderungen gegen das CURSOR/EVI Energy-CRM — gemessen am umgesetzten Branchen- und Produktstandard statt an wortgetreuer Vorkonfiguration. Zwei interaktive Präsentationen:</p>
  <div class="pills">
    <span class="pill">Stand 2026-07-05</span>
    <span class="pill">165 / 165 Notizen</span>
    <span class="pill">Methode: Standard-Linse</span>
    <span class="pill hl">93 ⬆ Aufwertungen · 0 ⬇ Abwertungen</span>
  </div>

  <div class="grid">
    <a class="card" href="./highlights/">
      <div class="tag">Executive-Präsentation</div>
      <h2 class="serif">Highlights</h2>
      <p>KPIs, Fit-Verdict &amp; Empfehlung alt→neu, der Swing, Kernbefunde, was custom bleibt und die zehn Standardisierungs-Chancen.</p>
      <div class="meta">14 Folien<span class="go">Öffnen →</span></div>
    </a>
    <a class="card" href="./detail/">
      <div class="tag">Detail-Appendix</div>
      <h2 class="serif">Standardisierungs-Chancen im Detail</h2>
      <p>Die zehn Punkte §4.1–4.10 einzeln: Heute → benannter Standard → interne Prozess-Anpassung → Impact, mit Aufwand und Verdict-Effekt.</p>
      <div class="meta">13 Folien<span class="go">Öffnen →</span></div>
    </a>
  </div>

  <p class="foot">Quelle: <code>00_coverage2_executive_summary.md</code> · Standard-Linse-Re-Validierung · Stand 2026-07-05 · Präsentationen mit <a href="https://sli.dev" style="color:var(--accent)">Slidev</a></p>
</div>
</body>
</html>
`

mkdirSync('dist', { recursive: true })
writeFileSync('dist/index.html', landing)
console.log('\n✓ wrote dist/index.html landing page')
console.log(`✓ Pages build complete — base ${base}`)
