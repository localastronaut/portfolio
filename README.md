# Portfolio Website

Static portfolio site with individual project case studies and a lightweight asset pipeline.

Live site: https://localastronaut.github.io/portfolio/

## Structure

- `index.html`: Landing page
- `about.html`: About page
- `projects.html`: Filterable projects listing
- `projects/`: Individual project pages (moved here for organization)
  - `project-*.html`
- `css/`, `js/`, `img/`, `fonts/`: Static assets
- `.gitignore`: Basic ignores for OS files and logs

## Local Development

Open `index.html` directly in a browser, or serve locally for cleaner routing and CORS behavior:

Python 3: `python3 -m http.server 8000`

Then visit `http://localhost:8000`.

## Notes

- Project pages are under `projects/` and all internal links updated.
- Static assets live under `assets/` (`css/`, `js/`, `img/`, `fonts/`).
- Added `assets/favicon.png` referenced across all pages.
- Added `sitemap.xml` and `robots.txt` for SEO.

## Tech

- HTML, CSS, JavaScript (no build step required)

## Contributions / Contact

Open issues or reach out if you want help extending the site.
