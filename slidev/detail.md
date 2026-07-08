---
theme: seriph
title: CURSOR/EVI — Standardisierungs-Chancen im Detail
info: |
  Detail-Appendix zur Coverage-Validierung 2 (Standard-Linse) · §4.1–4.10.
class: text-center
transition: slide-left
routerMode: hash
layout: center
---

<div style="color:#215e5a;font-size:0.8rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;margin-bottom:0.6rem">
Coverage-Validierung 2 · Detail-Appendix
</div>

# Zehn Standardisierungs-Chancen

<div class="font-serif" style="font-size:1.35rem;color:#625f58;margin-top:-0.3rem">im Detail — §4.1 bis §4.10</div>

<div style="max-width:52ch;margin:1.4rem auto 0;color:#625f58;font-size:0.92rem;line-height:1.55">
Die 64 als <b>(teilweise) zu individuell</b> markierten Anforderungen, verdichtet zu zehn Punkten. Jeder Punkt: Heute → benannter Standard → interne Prozess-Anpassung → Impact.
</div>

<div style="margin-top:2rem;color:#94918a;font-size:0.76rem">Begleit-Deck zur <a href="../highlights/" style="color:#215e5a;border-bottom:1px solid #cfe0dd">Highlights-Präsentation</a> · Stand 2026-07-05</div>

---
layout: center
---

# Aufwands- & Relevanz-Legende

<div style="color:#625f58;font-size:0.82rem;max-width:74ch;margin-bottom:1.4rem">
Alle Aufwandsangaben sind <b>qualitative Einschätzungen dieser Analyse</b> — die coverage_2 schätzt bewusst keine WP1-Aufwandswerte neu.
</div>

<div class="grid grid-cols-3 gap-5" style="text-align:left">
  <div class="rounded-xl border p-4" style="border-color:#e9e5dd;background:#ffffff">
    <div style="font-size:0.64rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#215e5a;margin-bottom:.6rem">Aufwands-Klassen</div>
    <div style="font-size:0.8rem;line-height:1.7"><b>K</b> — Konfiguration (Felder, Schlüssel, Suchen, BPM · kein Code)<br><b>C</b> — Customizing (C2-Skripte, Erweiterungspunkte)<br><b>O</b> — Organisation / Change (Prozess, Schulung, Verträge)</div>
  </div>
  <div class="rounded-xl border p-4" style="border-color:#e9e5dd;background:#ffffff">
    <div style="font-size:0.64rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#215e5a;margin-bottom:.6rem">Größen</div>
    <div style="font-size:0.8rem;line-height:1.7"><b>S</b> ≈ Tage<br><b>M</b> ≈ Wochen (Konfig- & Change-Arbeit)<br><b>L</b> ≈ projekthaft (Monate, mehrere Teams)</div>
  </div>
  <div class="rounded-xl border p-4" style="border-color:#e9e5dd;background:#ffffff">
    <div style="font-size:0.64rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#215e5a;margin-bottom:.6rem">Kerngeschäfts-Relevanz</div>
    <div style="font-size:0.8rem;line-height:1.7"><b>Kern</b> — Vergleichs-/Provisions-/Partnergeschäft<br><b>Unterstützend</b> — Vertriebssteuerung/Effizienz<br><b>Hygiene</b> — Pflicht ohne Differenzierung</div>
  </div>
</div>

---

# 4.1 · Marktpartner-Identität & Statusprozesse

<div class="grid grid-cols-2 gap-x-6 mt-3" style="font-size:0.76rem;line-height:1.42">
<div>
  <Field label="Heute">Netzbetreiber/Lieferanten über hausgemachte „Main Network Id" + Freitext; drei getrennte Import-Pfade mit Excel-Abgleich (2–3 h je Lieferant/Woche).</Field>
  <Field label="Der Standard"><b>BDEW-Codenummer & GLN/ILN</b> — exakt das Datenmodell des EVI-Serviceprovider-Stamms samt Bulk-Import; Statuslisten per EVI-Muster Import → Validierung → Fehlerrückschreibung → BPM-Fristen.</Field>
</div>
<div>
  <Field label="Interne Anpassung">Stammdaten einmalig auf BDEW/GLN umschlüsseln; die drei Alt-Pfade zu einer konfigurierten Ingestion konsolidieren; Reconciliation vom Excel-Abgleich auf System-Fristen umstellen.</Field>
  <Field label="Impact" accent="#4f8a3d">Matchbare Importe, Zuordnungsfehler enden; der wöchentliche Excel-Aufwand entfällt; Anschluss an echte Marktkommunikation entsteht nebenbei.</Field>
</div>
</div>

<Foot aufwand="K+O · M" kern="Kern" kernType="kern" reqs="FR-022 · FR-070 · UC-010" effekt="2× 🟡→🟢" />

---

# 4.2 · Bonität & Branchen-Klassifikation

<div class="grid grid-cols-2 gap-x-6 mt-3" style="font-size:0.76rem;line-height:1.42">
<div>
  <Field label="Heute">Risiko-Branchen & Bonität als manuelles Flag / Tribal-Knowledge („nimmt keine Shisha-Bars") — nicht systematisch, nicht auditierbar. Einzige vollständig „zu individuell" markierte Anforderung.</Field>
  <Field label="Der Standard"><b>Auskunftei</b> (SCHUFA/Creditreform als EVI-Modul inkl. Sanktionslisten) plus <b>NACE Rev. 2 / WZ 2008</b> über das Standard-Schlüsselfeld Wirtschaftszweig.</Field>
</div>
<div>
  <Field label="Interne Anpassung">Auskunftei-Vertrag schließen; Wirtschaftszweig-Pflege als Pflichtschritt der Kundenanlage; Bonitäts-/Branchen-Prüfung als konfigurierter Hinweis-/Blockschritt im Abschluss.</Field>
  <Field label="Impact" accent="#4f8a3d">Objektive, belegbare Risikoentscheidungen statt Bauchgefühl; weniger Rückläufer beim Lieferanten; Compliance-Nachweis frei Haus.</Field>
</div>
</div>

<Foot aufwand="K+O · S–M" kern="Kern" kernType="kern" reqs="FR-128" effekt="1× 🟡→🟢" />

---

# 4.3 · Identität, MFA & Missbrauchs-Erkennung

<div class="grid grid-cols-2 gap-x-6 mt-3" style="font-size:0.76rem;line-height:1.42">
<div>
  <Field label="Heute">Login-Namen unveränderlich (Workaround: Fake-E-Mail-Adressen), MFA fehlt, Account-Sharing per selbstgebauter IP-/Geo-Telemetrie — DSGVO-heikler Eigenbau am Anwalts-Gate.</Field>
  <Field label="Der Standard"><b>Delegation an einen IdP über OIDC/SAML</b> (Entra ID bei ICS vorhanden). MFA, Sign-in-Logs und Risiko-Erkennung (Geo-Sprung, parallele Sessions) als Produktfunktion inkl. Retention.</Field>
</div>
<div>
  <Field label="Interne Anpassung">Partner-Logins auf den IdP migrieren (Identität = IdP-Konto); MFA-Rollout mit AGB-/Kommunikations-Paket; IdP-Risiko-Signale in Partner-Markierung/Compliance-Log.</Field>
  <Field label="Impact" accent="#4f8a3d">Der DSGVO-kritischste Eigenbau entfällt; zwei rote Verdicts werden gelb; das Legal-Gate schrumpft auf „IdP-Standardfunktion nutzen".</Field>
</div>
</div>

<Foot aufwand="O+K · M" kern="Hygiene · hoher Risiko-Hebel" kernType="hyg" reqs="NFR-007 · FR-103 · FR-123" effekt="1× 🟡→🟢 · 2× 🔴→🟡" />

---

# 4.4 · Revisionssicherheit (GoBD / Audit)

<div class="grid grid-cols-2 gap-x-6 mt-3" style="font-size:0.76rem;line-height:1.42">
<div>
  <Field label="Heute">Die Anforderungen schreiben die Mechanik vor (Hash-Chain, signierte Log-Segmente im Applikations-Log) — eine Eigenbau-Kryptografie, die kein CRM-Produkt mitbringt.</Field>
  <Field label="Der Standard"><b>Feldänderungshistorie</b> + <b>DB-native Unveränderlichkeit</b> (Oracle Immutable / SQL Server Ledger) + Rechteentzug auf Audit-Tabellen + revisionssichere <b>ELO-Archivierung</b>.</Field>
</div>
<div>
  <Field label="Interne Anpassung">Historie für alle kritischen Entitäten verpflichtend aktivieren (Checkliste); Ledger-Konfiguration & Löschregel-Schutzfristen mit dem Betrieb; GoBD-Testat mit dem Steuerberater.</Field>
  <Field label="Impact" accent="#4f8a3d">GoBD-Konformität über belegbare Standardbausteine statt selbst zu verteidigender Krypto-Eigenbau; Prüfbarkeit durch WP/Steuerberater wird trivial.</Field>
</div>
</div>

<Foot aufwand="K+O · S" kern="Hygiene · Pflicht" kernType="hyg" reqs="NFR-003 · NFR-005" effekt="2× 🟡→🟢" />

---

# 4.5 · Zahlungs-Zufluss über Banking-Standards

<div class="grid grid-cols-2 gap-x-6 mt-3" style="font-size:0.76rem;line-height:1.42">
<div>
  <Field label="Heute">Kontoauszüge werden gesichtet und in eine Excel-Kontostandsliste übertragen; die Anforderung verortet den Abgleich als CRM-Modul mit eigener HBCI-Anbindung.</Field>
  <Field label="Der Standard"><b>ISO 20022 (CAMT.053) / EBICS</b> oder ein <b>AISP-Provider (FinAPI)</b> — Banking ist FiBu-/Infrastruktur-Territorium. Die Match-Logik gegen Provisions-Erwartungen bleibt bewusst im Custom-Kern.</Field>
</div>
<div>
  <Field label="Interne Anpassung">Banking-Zugang (EBICS-Vertrag bzw. AISP-Onboarding) beschaffen; Finance-Prozess von „Kontoauszug lesen" auf eine Prüf-Queue für ungematchte Eingänge umstellen.</Field>
  <Field label="Impact" accent="#4f8a3d">Verdicts bleiben custom (ehrlich), aber Bau-Risiko und -Umfang sinken deutlich: die Bank-Anbindung wird gekaufter Standard, gebaut wird nur die fachliche Zuordnung.</Field>
</div>
</div>

<Foot aufwand="O+C · M" kern="Kern-berührend" kernType="kern" reqs="FR-115 · UC-009" effekt="bestätigt custom · Risiko ↓" />

---

# 4.6 · Schutz- & Beobachtbarkeits-Schichten

<div class="grid grid-cols-2 gap-x-6 mt-3" style="font-size:0.76rem;line-height:1.42">
<div>
  <Field label="Heute">Rate-Limiting, DDoS-/Bot-Abwehr, CNAME-Handling, Tracing und Metriken sind als CRM-Anforderungen formuliert — teils mit festen Azure-Produktnamen (App Insights, Citus).</Field>
  <Field label="Der Standard"><b>API-Gateway/WAF am Edge</b> (COTS), <b>OpenTelemetry</b> als cloud-neutrale Baseline (Wildfly per Java-Agent instrumentierbar), Standard-Betriebs-Stack. EVI sieht die Reverse-Proxy-Vorschaltschicht vor.</Field>
</div>
<div>
  <Field label="Interne Anpassung">Schutz-/Observability-Anforderungen den richtigen Schichten zuordnen (WP1-Umformulierung); Gateway/WAF und Monitoring-Stack als Infrastruktur-Beschaffung + Betriebskonzept.</Field>
  <Field label="Impact" accent="#4f8a3d">Drei NFRs werden grün, weil sie dort erfüllt werden, wo sie hingehören; das CRM-Pflichtenheft schrumpft; die Lösung bleibt cloud-neutral statt Azure-fixiert.</Field>
</div>
</div>

<Foot aufwand="O · S–M" kern="Hygiene" kernType="hyg" reqs="FR-028 · FR-032 · NFR-008/009/011 · UC-018" effekt="3× 🟡→🟢 · 1× 🔴→🟡" />

---

# 4.7 · Vertriebsstatistik über den CRM-BI-Standard

<div class="grid grid-cols-2 gap-x-6 mt-3" style="font-size:0.76rem;line-height:1.42">
<div>
  <Field label="Heute">Eine maßgeschneiderte Statistik-UI: typisierte Filter-Toolbar, Single-Metrik-Umschalter, separates RLM-Untermenü, eigene Query-API — der Nachbau des gewachsenen Statistik-Tools.</Field>
  <Field label="Der Standard">Die <b>CRM-BI-Schicht</b>: Pivot-Kacheln (Tag/Monat/Jahr + Drill-Down), interaktive Charts, KPI-Kacheln, Top-Ranking, speicherbare Boards. Die kWh-Auswertung je Partner liefert EVI vorkonfiguriert.</Field>
</div>
<div>
  <Field label="Interne Anpassung">Vertriebs-Boards konfigurieren (Lieferanten-/Broker-Sicht, E-World-Board mit 24-Monats-Trend); fehlende Dimensionen als Felder nachziehen; Team einarbeiten. Trade-off: Ein-Klick-Umschalter gegen vorkonfigurierte Boards.</Field>
  <Field label="Impact" accent="#4f8a3d">Eine komplette Custom-Frontend-Baustelle (Toolbar + API + Charts) entfällt; neue Auswertungen entstehen per Konfiguration statt Entwicklungsauftrag.</Field>
</div>
</div>

<Foot aufwand="K+O · M" kern="Unterstützend" kernType="supp" reqs="FR-119–122 · UC-015" effekt="3× 🟡→🟢" />

---

# 4.8 · Tarifpflege, Import & Onboarding

<div class="grid grid-cols-2 gap-x-6 mt-3" style="font-size:0.76rem;line-height:1.42">
<div>
  <Field label="Heute">Die gewachsene Alt-Pipeline: 5-Ebenen-Import-Schema, kanal-spezifische Sonderwege, OneDrive-Dokumentablage neben dem System, Ein-Workflow-Zwang bei der Lieferantenanlage, feste Abgaben-Listen.</Field>
  <Field label="Der Standard"><b>EVI-Produktmuster</b>: Tarifkatalog mit Zeitscheiben/Staffeln, Importschleife (Validierung → Fehlerrückschreibung → Korrekturlauf, Update-or-Create), Batch-Schnittstelle, Pflichtfeld-Framework, DMS im System, AI-Format-Mapping (AIUtils).</Field>
</div>
<div>
  <Field label="Interne Anpassung">Der größte Block: Pflege- & Import-Routinen auf die Produktmuster umstellen (statt das Produkt an die Routinen); Zusatzattribute als Felder; Onboarding als BPM-Prozess; Team-Schulung.</Field>
  <Field label="Impact" accent="#4f8a3d">Acht Anforderungen werden grün; Importfehler landen in geführten Korrekturschleifen statt in Handarbeit; die Tarifpflege wird personenunabhängig.</Field>
</div>
</div>

<Foot aufwand="K+O · L" kern="Kern" kernType="kern" reqs="FR-005/006/009/010/015/024/066/077 · UC-002/003/005" effekt="8× 🟡→🟢" />

---

# 4.9 · Rechner-Parametrisierung statt Redaktions-PDFs

<div class="grid grid-cols-2 gap-x-6 mt-3" style="font-size:0.76rem;line-height:1.42">
<div>
  <Field label="Heute">Spotgebühren-Listen, Produktübersichten je Versorger und Anfrage-Templates werden als PDF/Excel im Downloadbereich gepflegt — Redaktionsarbeit, die Lücken der Rechner-Parametrisierung kompensiert. Juni: 5× rot als fehlende Module.</Field>
  <Field label="Der Standard">Die Inhalte gehören als <b>Daten in den Tarifkatalog</b> (Servicegebühren-Matrix, Konditions-/Produktattribute) — dann zeigt der Rechner sie an; strukturierte Anfragen laufen als Prozess statt Excel-Template.</Field>
</div>
<div>
  <Field label="Interne Anpassung">Einmalige Überführung der Referenzinhalte in Katalog-/Konditionsdaten; den Redaktionsprozess durch Datenpflege ersetzen; der Downloadbereich schrumpft auf echte Dokumente.</Field>
  <Field label="Impact" accent="#4f8a3d">Fünf rote Verdicts entfallen ersatzlos als Modulbedarf; Partner sehen aktuelle Konditionen im Rechner statt in veralteten PDFs; eine ganze Pflegequelle verschwindet.</Field>
</div>
</div>

<Foot aufwand="K+O · M" kern="Kern" kernType="kern" reqs="FR-105–108 · UC-017" effekt="5× 🔴→🟡" />

---

# 4.10 · Alt-Workarounds & Werkzeuge nicht nachbauen

<div class="grid grid-cols-2 gap-x-6 mt-3" style="font-size:0.76rem;line-height:1.42">
<div>
  <Field label="Heute">Die größte Einzelgruppe (26 Anforderungen) schreibt Behelfe fest: Status 9000 als Testmarker, Sentinel-Werte, ein 9-Flag-Katalog mit totem Gewicht, die S.Price-Sonderspalte, das 6-Schritt-Panel, die OrdersSearch-Filterliste, der „PDF-Manager", Mitarbeiter-als-UVP samt Legacy-Rollen — plus bekannte Alt-Bugs.</Field>
  <Field label="Der Standard"><b>Typisierte Felder & Schlüssellisten</b> statt magischer Codes; <b>Standard-Suchen/-Masken & BPM</b> statt Spezialwerkzeuge; GUI-Builder-Entitäten; Mitarbeiter-Entität mit konsolidierten Teamrollen.</Field>
</div>
<div>
  <Field label="Interne Anpassung">Eine bewusste Nicht-Nachbau-Entscheidung je Punkt plus Datenbereinigung bei der Migration (Status-Codes → Kennzeichen, Flag-Katalog verschlanken, tote Optionen streichen); Nutzer-Change auf Standard-Oberflächen.</Field>
  <Field label="Impact" accent="#4f8a3d">Der größte Scope-Hebel: elf Anforderungen werden grün, vier steigen von rot auf gelb; der Custom-Scope des Rebuilds schrumpft spürbar; saubere, auswertbare Daten.</Field>
</div>
</div>

<Foot aufwand="O · M" kern="Hygiene · größter Scope-Hebel" kernType="hyg" reqs="FR-026 … FR-112 (19 FR) · UC-001/004/006/013/014/019/024" effekt="11× ⬆ 🟢 · 4× 🔴→🟡" />

---
layout: center
class: text-center
---

<div style="color:#215e5a;font-size:0.8rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;margin-bottom:0.8rem">Zusammengefasst</div>

## Zehn Punkte, ein Prinzip

<div style="max-width:56ch;margin:1.2rem auto 0;color:#625f58;font-size:0.95rem;line-height:1.6">
Wo eine Anforderung eine Bestandslösung festschreibt und ein <b style="color:#215e5a">benannter Standard</b> existiert, den EVI implementiert, vermeidet ICS durch <b>Anpassung des internen Prozesses</b> Custom-Aufwand — und gewinnt Qualität. Das Kerngeschäft (§3) bleibt davon unberührt.
</div>

<div style="margin-top:2.2rem;color:#94918a;font-size:0.76rem">
Vollständige alt→neu-Matrix je Anforderung: coverage2-Index · Juni-Sicht unverändert<br>
Quelle: <code>00_coverage2_executive_summary.md</code> · Stand 2026-07-05
</div>
