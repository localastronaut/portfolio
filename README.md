# Studio — Brandon Nelson

A small, personal site: an online studio where Brandon shares what he's building and a plain-English "How I Code" guide.

Live site: https://localastronaut.github.io/studio/

## Structure

- `index.html` — Home / intro
- `how-i-code.html` — The main guide: tools, software, AI, organization, sharing
- `about.html` — Personal story
- `assets/`
  - `css/workshop.css` — the entire design system (warm "field notes" theme)
  - `favicon.png`
  - `img/` — site images (e.g. `brandon-charlie.jpg`)
- `archive/` — the old portfolio (pages + assets), kept for reference and future rework
- `sitemap.xml`, `robots.txt`

Fonts (Spectral + Inter) load from Google Fonts; there is no build step.

## Local development

Serve the folder locally:

`python3 -m http.server 8000` → visit `http://localhost:8000`

## Notes

- The live site is self-contained: three HTML pages + `assets/css/workshop.css` + Google Fonts. No jQuery, Bootstrap, or build tooling.
- Everything from the previous portfolio template lives under `archive/` and is not linked from the live site.
