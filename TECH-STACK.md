# SoMICE Relaunch – Technologievorschläge

## Aktuelle Umsetzung (Phase 1)

**Statisches HTML/CSS/JS** – optimiert für schnelles Review und einfachen Einstieg.

| Komponente | Technologie | Begründung |
|-----------|-------------|------------|
| Markup | HTML5 semantisch | Barrierefreiheit, SEO |
| Styling | Vanilla CSS3 + Custom Properties | Keine Build-Schritte, volle Kontrolle |
| Interaktivität | Vanilla JavaScript | Keine Abhängigkeiten, leichtgewichtig |
| Fonts | Google Fonts (DM Sans, Outfit) | Moderne Typografie, schnelles Laden |

**Vorteile:** Direkt im Browser öffnen, sofort im Editor prüfbar, kein Build-Prozess.

---

## Empfehlungen für Produktion

### Option A: Statisch bleiben (empfohlen für Start)
- **Hosting:** GitHub Pages, Netlify oder Vercel (kostenlos)
- **Domain:** somice.ch weiterverwenden
- **Formular:** Netlify Forms, Formspree oder eigener Backend-Service

### Option B: Mit Static Site Generator
- **11ty oder Astro** – HTML-basiert, sehr schnell
- **Vorteil:** Wiederverwendbare Komponenten, bessere Wartbarkeit
- **Deployment:** Gleiche Hosting-Optionen wie oben

### Option C: Vollständiges CMS
- **Strapi** (Headless) + React/Vue/Next.js
- **Sanity** oder **Contentful**
- **Sinnvoll bei:** Häufigen Inhaltsänderungen, mehreren Redakteuren

---

## SEO-Checkliste (umgesetzt)

- [x] Meta Title, Description, Keywords
- [x] Open Graph & Twitter Cards
- [x] Schema.org LocalBusiness + Organization
- [x] Geo-Koordinaten (Lausanne)
- [x] Canonical URL
- [x] Semantische Überschriften-Hierarchie (h1–h3)
- [x] Alt-Texte für Bilder
- [x] robots.txt & sitemap.xml (empfohlen)

---

## Nächste Schritte nach Review

1. **Bilder:** Eigene Assets ersetzen Platzhalter/Externe
2. **Formular:** Backend oder Form-Service anbinden
3. **Analytics:** Google Analytics 4 oder Plausible
4. **Performance:** Bilder mit WebP, Lazy Loading
5. **HTTPS:** SSL-Zertifikat auf Produktions-Domain
