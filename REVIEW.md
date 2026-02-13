# SoMICE Relaunch – Review-Anleitung

## Website im Editor prüfen

1. **HTML:** `index.html` öffnen – Struktur, Inhalte, SEO-Meta-Tags
2. **CSS:** `css/styles.css` – Corporate Design, Responsive Breakpoints
3. **JS:** `js/main.js` – Menü-Logik, Glückskeks-Karten

## Website im Browser ansehen

### Option A: Direkt öffnen
```bash
open index.html
```
oder Doppelklick auf `index.html` im Finder.

### Option B: Mit Live-Server (empfohlen)
```bash
npx serve .
```
Dann im Browser: http://localhost:3000

### Option C: VS Code Live Server
Rechtsklick auf `index.html` → "Open with Live Server"

---

## Checkliste für dein Review

- [ ] Hero-Bereich: Titel, CTA-Button, Scroll-Indikator
- [ ] Glückskeks-Karten: Klick öffnet Karte, zeigt Event-Tipp
- [ ] Responsives Menü: Hamburger auf Mobile, Submenu bei "Leistungen"
- [ ] Corporate Design: Grün (#97bf0d), Braun (#6e423b)
- [ ] Inhalte: Alle Texte von somice.ch übernommen
- [ ] Kontakt: Adresse, Telefon, E-Mail
- [ ] Footer: Links, Copyright

## Bekannte Einschränkungen

- **Bilder:** Werden von somice.ch geladen – bei Offline nicht sichtbar
- **Formular:** Platzhalter – Backend/Formspree noch nicht angebunden
- **Sprachen:** DE als Hauptsprache, FR/EN verlinken auf somice.ch
