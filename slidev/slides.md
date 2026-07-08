---
theme: seriph
title: CURSOR/EVI — Coverage-Validierung 2 (Standard-Linse)
info: |
  Executive Summary · Re-Validierung der 165 WP1-Anforderungen unter der Standard-Linse.
  Stand 2026-07-05 · 165/165 Notizen · Validatoren grün.
class: text-center
transition: slide-left
routerMode: hash
layout: center
---

<div style="color:#215e5a;font-size:0.8rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;margin-bottom:0.6rem">
Coverage-Validierung 2 · Standard-Linse
</div>

# CURSOR / EVI

<div class="font-serif" style="font-size:1.5rem;color:#625f58;margin-top:-0.4rem">WP1-Anforderungen neu bewertet</div>

<div style="max-width:44ch;margin:1.4rem auto 0;color:#625f58;font-size:0.95rem;line-height:1.55">
Re-Validierung der <b>165 WP1-Anforderungen</b> gegen das CURSOR/EVI Energy-CRM — gemessen am umgesetzten Branchen- und Produktstandard statt an wortgetreuer Vorkonfiguration.
</div>

<div class="flex flex-wrap justify-center gap-2 mt-8" style="font-size:0.72rem">
  <span class="rounded-full px-3 py-1" style="border:1px solid #e9e5dd;color:#625f58">Stand 2026-07-05</span>
  <span class="rounded-full px-3 py-1" style="border:1px solid #e9e5dd;color:#625f58">165 / 165 Notizen</span>
  <span class="rounded-full px-3 py-1" style="border:1px solid #e9e5dd;color:#625f58">Methode: Standard-Linse</span>
  <span class="rounded-full px-3 py-1" style="border:1px solid #e9e5dd;color:#625f58">Validatoren grün · 0 Fehler</span>
  <span class="rounded-full px-3 py-1" style="background:#e6efed;border:1px solid #cfe0dd;color:#215e5a;font-weight:600">93 ⬆ · 0 ⬇</span>
</div>

---
layout: center
class: text-center
---

<div class="font-serif" style="font-size:1.7rem;line-height:1.5;max-width:30ch;margin:0 auto;color:#1c1b1a">
Dieselben 165 Anforderungen, dasselbe Produkt — geändert hat sich allein die <b style="color:#215e5a">Bewertungsperspektive</b>.
</div>

<div class="flex justify-center gap-12 mt-12">
  <div>
    <div class="font-serif" style="font-size:3rem;font-weight:600;color:#4f8a3d;line-height:1">3 → 68</div>
    <div style="color:#625f58;font-size:0.8rem;margin-top:.3rem">vollständig erfüllt</div>
  </div>
  <div>
    <div class="font-serif" style="font-size:3rem;font-weight:600;color:#c0453f;line-height:1">63 → 26</div>
    <div style="color:#625f58;font-size:0.8rem;margin-top:.3rem">Produktlücken</div>
  </div>
  <div>
    <div class="font-serif" style="font-size:3rem;font-weight:600;color:#215e5a;line-height:1">93 / 0</div>
    <div style="color:#625f58;font-size:0.8rem;margin-top:.3rem">auf- / abgewertet</div>
  </div>
</div>

<div style="margin-top:2.4rem;color:#94918a;font-size:0.82rem">… ohne das custom bleibende Kerngeschäft schönzurechnen.</div>

---

# Warum diese Auswertung anders ausfällt

<div style="color:#625f58;font-size:0.9rem;max-width:74ch;margin-bottom:1.2rem">
Die Juni-Runde maß, ob EVI die Anforderungen <b>wortgetreu und vorkonfiguriert</b> mitbringt. Diese Runde misst am <b>implementierten Energiewirtschafts- und Produktstandard</b> — und markiert, wo eine Anforderung die Bestandslösung festschreibt statt das fachliche Ziel.
</div>

<div class="grid grid-cols-2 gap-6">
<div class="rounded-xl border p-4" style="border-color:#e9e5dd;background:#ffffff">

### Hebel A — Bewertungsfehler korrigiert

Die Juni-Verdicts zählten systematisch Nicht-Lücken als Produktlücke:

- Vorgesehene **Konfiguration** als „Custom-Build"
- **Legacy-UI & -Mechanik** am Produkt statt am Ziel gemessen
- Lösungsunabhängige **Projektleistungen** (Pen-Test, Migration)
- **Infrastruktur** (WAF, Observability) im CRM verortet
- **Betriebs-/Governance-Artefakte** als Feature gezählt
- Alt-**Bugs** & redaktionelle PDFs als Anforderung

</div>
<div class="rounded-xl border p-4" style="border-color:#e9e5dd;background:#ffffff">

### Hebel B — die Anforderungen geprüft

**64 der 165** Anforderungen schreiben eine Bestandslösung fest, wo ein **benannter Standard** existiert, den EVI bereits implementiert.

Diese Punkte verdichten sich zu **10 Standardisierungs-Chancen** — dort vermeidet ICS durch Prozess-Anpassung Custom-Aufwand.

<div class="rounded-lg p-3 mt-3" style="background:#e6efed;color:#215e5a;font-size:0.8rem">
<b>Guardrail:</b> jede Aufwertung braucht benannten Standard + Evidenz. <b>0 Abwertungen</b> — kein Juni-Verdict verschlechtert.
</div>

</div>
</div>

---

# Kennzahlen auf einen Blick

<div class="grid grid-cols-3 gap-3 mt-4">
  <Kpi label="Erfüllt (🟢)" value="68" color="#4f8a3d" ctx="41,2 % · Juni: 3 (1,8 %)" chip="▲ +65" chipType="up" />
  <Kpi label="Nicht erfüllt (🔴)" value="26" color="#c0453f" ctx="15,8 % · Juni: 63 (38,2 %)" chip="▼ −37" chipType="down" />
  <Kpi label="Empfehlung Cursor" value="60" color="#215e5a" ctx="Standard statt Custom · Juni: 3" chip="▲ +57" chipType="up" />
  <Kpi label="Auf- / Abgewertet" value="93" sub="/ 0" ctx="kein Juni-Verdict verschlechtert" chip="Guardrail eingehalten" chipType="neutral" />
  <Kpi label="(teilw.) zu individuell" value="64" ctx="Bestandslösung statt Ziel festgeschrieben" chip="Standardisierungs-Potenzial" chipType="neutral" />
  <Kpi label="Standardisierungs-Punkte" value="10" ctx="verdichtet aus den 64 Anforderungen" chip="siehe Detail-Deck" chipType="flat" />
</div>

---

# Gesamtbild — Juni → Standard-Linse

<div class="mt-2" style="font-size:0.86rem">

| Kennzahl | Juni-Original | Standard-Linse | Δ |
|---|---:|---:|:--|
| Anforderungen geprüft | 165 | 165 | — |
| 🟢 Erfüllt | 3 (1,8 %) | **68 (41,2 %)** | <span style="color:#4f8a3d">+65</span> |
| 🟡 Teilweise erfüllt | 98 (59,4 %) | **70 (42,4 %)** | <span style="color:#c0453f">−28</span> |
| 🔴 Nicht erfüllt | 63 (38,2 %) | **26 (15,8 %)** | <span style="color:#4f8a3d">−37</span> |
| ⚪ Unklar | 1 | 1 | — |
| Empfehlung Cursor / Hybrid / Custom | 3 / 99 / 63 | **60 / 79 / 26** | <span style="color:#4f8a3d">+57</span> / −20 / −37 |
| Aufgewertet ⬆ / Abgewertet ⬇ | — | **93 / 0** | |
| (teilweise) zu individuell | — | **64** | |

</div>

---

# Fit-Verdict — alt → neu

<div style="color:#625f58;font-size:0.88rem;max-width:70ch;margin-bottom:1.4rem">
Verteilung des Fit-Verdicts über alle 165 Anforderungen. Dieselben Anforderungen, dasselbe Produkt — nur die Bewertungsperspektive hat sich geändert.
</div>

<div class="space-y-4">
  <DistBar caption="JUNI-ORIGINAL" dim :segments="[{v:3,c:'#4f8a3d'},{v:98,c:'#d98a1f'},{v:63,c:'#c0453f'},{v:1,c:'#9a978f'}]" />
  <DistBar caption="STANDARD-LINSE" :segments="[{v:68,c:'#4f8a3d'},{v:70,c:'#d98a1f'},{v:26,c:'#c0453f'},{v:1,c:'#9a978f'}]" />
</div>

<div class="flex flex-wrap gap-x-8 gap-y-1 mt-6" style="font-size:0.82rem;color:#625f58">
  <span><span style="color:#4f8a3d">■</span> Erfüllt 3 → <b style="color:#1c1b1a">68</b> <span style="color:#4f8a3d;font-weight:600">+65</span></span>
  <span><span style="color:#d98a1f">■</span> Teilweise 98 → <b style="color:#1c1b1a">70</b> <span style="color:#c0453f;font-weight:600">−28</span></span>
  <span><span style="color:#c0453f">■</span> Nicht erfüllt 63 → <b style="color:#1c1b1a">26</b> <span style="color:#4f8a3d;font-weight:600">−37</span></span>
  <span><span style="color:#9a978f">■</span> Unklar 1 → <b style="color:#1c1b1a">1</b> ±0</span>
</div>

---

# Empfehlung — Buy vs. Build

<div style="color:#625f58;font-size:0.88rem;max-width:70ch;margin-bottom:1.4rem">
Resultierende Umsetzungsempfehlung je Anforderung: Cursor-Standard, Hybrid (EVI + Custom) oder reiner Custom-Build.
</div>

<div class="space-y-4">
  <DistBar caption="JUNI-ORIGINAL" dim :segments="[{v:3,c:'#4f8a3d'},{v:99,c:'#d98a1f'},{v:63,c:'#c0453f'}]" />
  <DistBar caption="STANDARD-LINSE" :segments="[{v:60,c:'#4f8a3d'},{v:79,c:'#d98a1f'},{v:26,c:'#c0453f'}]" />
</div>

<div class="flex flex-wrap gap-x-8 gap-y-1 mt-6" style="font-size:0.82rem;color:#625f58">
  <span><span style="color:#4f8a3d">■</span> Cursor (Standard) 3 → <b style="color:#1c1b1a">60</b> <span style="color:#4f8a3d;font-weight:600">+57</span></span>
  <span><span style="color:#d98a1f">■</span> Hybrid (EVI + Custom) 99 → <b style="color:#1c1b1a">79</b> <span style="color:#c0453f;font-weight:600">−20</span></span>
  <span><span style="color:#c0453f">■</span> Custom-Build 63 → <b style="color:#1c1b1a">26</b> <span style="color:#4f8a3d;font-weight:600">−37</span></span>
</div>

---

# Der Swing auf einen Blick

<div style="color:#625f58;font-size:0.88rem;max-width:70ch;margin-bottom:1rem">
Netto-Veränderung je Kategorie gegenüber der Juni-Runde. <span style="color:#4f8a3d">Grün</span> = mehr Standard-Abdeckung, <span style="color:#c0453f">Rot</span> = weniger Teil-/Custom-Bedarf.
</div>

<div class="grid grid-cols-2 gap-8">
<div>
<div style="font-size:0.78rem;font-weight:600;color:#625f58;margin-bottom:.5rem">FIT-VERDICT</div>
<DeltaBar label="Erfüllt" :value="65" />
<DeltaBar label="Teilweise erfüllt" :value="-28" />
<DeltaBar label="Nicht erfüllt" :value="-37" />
</div>
<div>
<div style="font-size:0.78rem;font-weight:600;color:#625f58;margin-bottom:.5rem">EMPFEHLUNG</div>
<DeltaBar label="Cursor (Standard)" :value="57" />
<DeltaBar label="Hybrid (EVI + Custom)" :value="-20" />
<DeltaBar label="Custom-Build" :value="-37" />
</div>
</div>

---

# Kernbefunde

<div class="grid grid-cols-2 gap-4 mt-4">
  <div class="rounded-xl border p-4" style="border-color:#e9e5dd;background:#ffffff">
    <div class="font-serif" style="font-size:1.05rem;line-height:1.4;color:#1c1b1a">Von 3 auf 68 vollständig erfüllte Anforderungen — der Cursor-Standard deckt jetzt <b style="color:#215e5a">41 %</b> ab, nicht mehr 2 %.</div>
    <div style="margin-top:.8rem;font-size:0.68rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#215e5a">Kernbefund · Fit</div>
  </div>
  <div class="rounded-xl border p-4" style="border-color:#e9e5dd;background:#ffffff">
    <div class="font-serif" style="font-size:1.05rem;line-height:1.4;color:#1c1b1a"><b style="color:#215e5a">93 Aufwertungen, null Abwertungen:</b> kein einziges Juni-Verdict wurde verschlechtert.</div>
    <div style="margin-top:.8rem;font-size:0.68rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#215e5a">Guardrail · Belastbarkeit</div>
  </div>
  <div class="rounded-xl border p-4" style="border-color:#e9e5dd;background:#ffffff">
    <div class="font-serif" style="font-size:1.05rem;line-height:1.4;color:#1c1b1a">64 Anforderungen schreiben eine Bestandslösung fest, wo längst ein <b style="color:#215e5a">benannter Branchenstandard</b> existiert, den EVI implementiert.</div>
    <div style="margin-top:.8rem;font-size:0.68rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#215e5a">Hebel B · Standardisierung</div>
  </div>
  <div class="rounded-xl border p-4" style="border-color:#e9e5dd;background:#ffffff">
    <div class="font-serif" style="font-size:1.05rem;line-height:1.4;color:#1c1b1a">26 Anforderungen bleiben ehrlich custom — MLM-Kern, Vergleichsmotor, Whitelabel-Portal. Aufgewertet wurde nur, was mit Standard belegbar ist.</div>
    <div style="margin-top:.8rem;font-size:0.68rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#215e5a">Glaubwürdigkeits-Anker · §3</div>
  </div>
</div>

---

# Was legitim custom bleibt

<div style="color:#625f58;font-size:0.88rem;max-width:76ch;margin-bottom:1.2rem">
Die Standard-Linse ist kein Schönrechnen: <b>26 Anforderungen bleiben nicht_erfüllt / custom_build</b> — dort, wo das ICS-Geschäftsmodell selbst der Gegenstand ist und kein CRM- oder Branchenstandard existiert.
</div>

<div class="grid grid-cols-3 gap-4">
  <div class="rounded-xl border p-4" style="border-color:#e9e5dd;background:#ffffff">
    <div class="rounded-full inline-block px-2 py-0.5 mb-2" style="background:#f7e7e6;color:#c0453f;font-size:0.62rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase">Kerngeschäft</div>
    <div class="font-serif" style="font-size:1.1rem;color:#1c1b1a;margin-bottom:.4rem">MLM-Provisions-Kern</div>
    <div style="font-size:0.78rem;color:#625f58;line-height:1.45">Mehrstufige Broker-Hierarchie mit Level-Konditionen, Provisions-Verteilung und -Matching, Gleichlauf-Gate und Belegerzeugung — das Herzstück des ICS-Modells.</div>
  </div>
  <div class="rounded-xl border p-4" style="border-color:#e9e5dd;background:#ffffff">
    <div class="rounded-full inline-block px-2 py-0.5 mb-2" style="background:#f7e7e6;color:#c0453f;font-size:0.62rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase">Kerngeschäft</div>
    <div class="font-serif" style="font-size:1.1rem;color:#1c1b1a;margin-bottom:.4rem">Multi-Supplier-Vergleichsmotor</div>
    <div style="font-size:0.78rem;color:#625f58;line-height:1.45">Vergleich über ~35 fremde Lieferanten mit vier Preismodellen und Spot-Kalkulation. EVI ist ein Ein-Betreiber-CRM, kein Tarif-Aggregator.</div>
  </div>
  <div class="rounded-xl border p-4" style="border-color:#e9e5dd;background:#ffffff">
    <div class="rounded-full inline-block px-2 py-0.5 mb-2" style="background:#f7e7e6;color:#c0453f;font-size:0.62rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase">Kerngeschäft</div>
    <div class="font-serif" style="font-size:1.1rem;color:#1c1b1a;margin-bottom:.4rem">Whitelabel-/Portal-Frontend</div>
    <div style="font-size:0.78rem;color:#625f58;line-height:1.45">Partner-Theming, Tarifrechner-Instanzen und das Broker-Portal-Erlebnis. EVI trägt Konfigurationsdaten und Backend — das Frontend bleibt eigener Bau.</div>
  </div>
</div>

---

# Zehn Standardisierungs-Chancen

<div style="color:#625f58;font-size:0.78rem;max-width:98ch;margin-bottom:.3rem">
Die 64 als (teilweise) zu individuell markierten Anforderungen verdichten sich zu zehn Punkten. <span style="color:#94918a">Aufwand: K Konfig · C Customizing · O Organisation · S Tage / M Wochen / L projekthaft.</span>
</div>

<div style="font-size:0.68rem">

| # | Standardisierungs-Punkt | Aufwand | Kern | Verdict-Effekt |
|:--|:--|:--|:--|:--|
| 1 | Marktpartner-Identität & Statusprozesse | K+O · M | Kern | <span style="color:#4f8a3d">2× 🟡→🟢</span> |
| 2 | Bonität & Branchen-Klassifikation | K+O · S–M | Kern | <span style="color:#4f8a3d">1× 🟡→🟢</span> |
| 3 | Identität, MFA & Missbrauchs-Erkennung | O+K · M | Hygiene | <span style="color:#4f8a3d">1× 🟡→🟢</span> · 2× 🔴→🟡 |
| 4 | Revisionssicherheit (GoBD/Audit) | K+O · S | Hygiene | <span style="color:#4f8a3d">2× 🟡→🟢</span> |
| 5 | Zahlungs-Zufluss Banking | O+C · M | Kern-berührend | bestätigt custom, Risiko ↓ |
| 6 | Schutz- & Beobachtbarkeits-Schichten | O · S–M | Hygiene | <span style="color:#4f8a3d">3× 🟡→🟢</span> · 1× 🔴→🟡 |
| 7 | Vertriebsstatistik | K+O · M | Unterstützend | <span style="color:#4f8a3d">3× 🟡→🟢</span> |
| 8 | Tarifpflege, Import & Onboarding | K+O · L | Kern | <span style="color:#4f8a3d">8× 🟡→🟢</span> |
| 9 | Rechner-Parametrisierung statt PDFs | K+O · M | Kern | 5× 🔴→🟡 |
| 10 | Alt-Workarounds & Werkzeuge ablösen | O · M | Hygiene | <span style="color:#4f8a3d">11× ⬆ 🟢</span> · 4× 🔴→🟡 |

</div>

<style>
table { font-size: 0.68rem; }
thead th { padding-top: 0.28rem; padding-bottom: 0.28rem; }
tbody td { padding-top: 0.16rem !important; padding-bottom: 0.16rem !important; line-height: 1.2 !important; }
</style>

---
layout: center
class: text-center
---

# Guardrails, die das Ergebnis tragen

<div class="grid grid-cols-3 gap-5 mt-6" style="text-align:left">
  <div class="rounded-xl border p-5" style="border-color:#e9e5dd;background:#ffffff">
    <div class="font-serif" style="font-size:2rem;color:#215e5a;font-weight:600">Standard + Evidenz</div>
    <div style="font-size:0.82rem;color:#625f58;margin-top:.5rem;line-height:1.5">Jede Aufwertung braucht einen <b>benannten Standard plus Beleg</b> — keine pauschale Umdeutung.</div>
  </div>
  <div class="rounded-xl border p-5" style="border-color:#e9e5dd;background:#ffffff">
    <div class="font-serif" style="font-size:2rem;color:#4f8a3d;font-weight:600">0 Abwertungen</div>
    <div style="font-size:0.82rem;color:#625f58;margin-top:.5rem;line-height:1.5">Kein Juni-Verdict wurde verschlechtert; die Original-Bewertung bleibt <b>unverändert und reproduzierbar</b>.</div>
  </div>
  <div class="rounded-xl border p-5" style="border-color:#e9e5dd;background:#ffffff">
    <div class="font-serif" style="font-size:2rem;color:#c0453f;font-weight:600">26 bleiben custom</div>
    <div style="font-size:0.82rem;color:#625f58;margin-top:.5rem;line-height:1.5">Wo kein Standard existiert und die Anforderung legitim ICS-spezifisch ist, blieb das Verdict <b>negativ</b>.</div>
  </div>
</div>

---

# Grenzen & nächste Schritte

<div class="space-y-3 mt-4" style="font-size:0.88rem">
  <div class="flex gap-3"><span style="color:#215e5a">●</span><div><b>Aufwandsangaben sind qualitative Einschätzungen</b> dieser Analyse — die coverage_2 schätzt bewusst keine WP1-Aufwandswerte neu; eine belastbare Kalkulation gehört in die Angebots-/Umsetzungsphase.</div></div>
  <div class="flex gap-3"><span style="color:#215e5a">●</span><div><b>Due-Diligence-Fragen an CURSOR</b> — SLA-/RTO-/RPO-Werte, ISO-27001-Nachweis der Application Cloud, ENET-Timeout-Verhalten, Log-/OpenTelemetry-Export, DB-Ledger-Konfiguration, Barrierefreiheits-Roadmap.</div></div>
  <div class="flex gap-3"><span style="color:#215e5a">●</span><div><b>Rückspiegelung ins WP1</b> — die 64 als (teilweise) zu individuell markierten Anforderungen sollten lösungsneutral umformuliert werden, unabhängig von der Buy-vs-Build-Entscheidung.</div></div>
  <div class="flex gap-3"><span style="color:#215e5a">●</span><div><b>Nachweis je Anforderung</b> — die vollständige alt→neu-Matrix mit benanntem Standard und Begründung steht im coverage2-Index; die Juni-Sicht bleibt unverändert.</div></div>
</div>

---
layout: center
class: text-center
---

<div style="color:#215e5a;font-size:0.8rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;margin-bottom:0.8rem">Fazit</div>

## Die Standard-Linse verschiebt das Bild — ehrlich.

<div style="max-width:52ch;margin:1.2rem auto 0;color:#625f58;font-size:0.95rem;line-height:1.6">
Aus <b style="color:#4f8a3d">3</b> vollständig erfüllten Anforderungen werden <b style="color:#4f8a3d">68</b>, aus <b style="color:#c0453f">63</b> Produktlücken <b style="color:#c0453f">26</b> — belegt über benannte Standards, ohne das custom bleibende Kerngeschäft schönzurechnen.
</div>

<div style="margin-top:2.2rem;color:#94918a;font-size:0.76rem">
Details je Standardisierungs-Punkt → <a href="../detail/" style="color:#215e5a;border-bottom:1px solid #cfe0dd">Detail-Deck (§4.1–4.10)</a><br>
Quelle: <code>00_coverage2_executive_summary.md</code> · Stand 2026-07-05
</div>
