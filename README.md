# Makex website

Source and generated static pages for [makex.in](https://makex.in), a family-led technology initiative sharing practical experiments and ideas. The site includes a homepage, an Ideas overview, seven long-form articles, and registration/contact information.

## Build and preview

Requires Node.js 22 or newer. There are no package dependencies or installation steps.

```sh
npm run build
npm run check
npm run serve
```

The preview server prints its local address. Contact and newsletter forms use live Formspree endpoints; submitting them sends a real message.

`npm run build:css` refreshes the generated stylesheets. Run the full build after changes so the asset hashes in generated HTML stay current.

## Architecture

The builder uses built-in Node modules, small templates and a focused Markdown parser. Production pages are semantic HTML, CSS and optional JavaScript for theme controls, mobile navigation and the homepage card rail. Content, links, forms and native disclosures remain usable without JavaScript. No framework, external font or runtime styling dependency is required.

| Location | Purpose |
| --- | --- |
| `src/content/` | Authored homepage, overview, Transparency and article content |
| `src/articles.mjs` | Article metadata, references and diagram placements |
| `src/templates/`, `src/partials/` | Page composition and shared navigation, footer, metadata and schema |
| `src/diagrams/` | SVG diagrams, shared drawing primitives and compact layouts |
| `src/styles.css`, `src/reading.css` | Authored site and reading styles |
| `src/site.js`, `src/theme-init.js` | Progressive enhancements and early theme selection |
| `src/site.mjs` | Site identity, origin, profile links and form endpoints |
| `scripts/` | Build, content parsing, checks, preview and optional artwork maintenance |
| `assets/img/`, `assets/social/` | Portrait derivatives and social-preview artwork |

The build generates `index.html`, `ideas/**/index.html`, `transparency/index.html`, `assets/site.css`, `assets/reading.css`, `assets/site.js` and `sitemap.xml`. Edit their authored sources and include regenerated output with changes. Articles are published through the explicit registry; a Markdown file alone does not create a route.

Checks cover content preservation, routes and anchors, metadata, references, accessible diagram descriptions, public assets, an isolated source-only build and deterministic output.

## Deployment

The repository root is the static publish directory, with root-relative URLs and canonical URLs for `https://makex.in`. It can be served directly by GitHub Pages; `.nojekyll` disables Jekyll processing and `CNAME` specifies the domain. Hosting and DNS configuration are managed separately.

The build writes only explicitly owned files and never cleans the repository root. Compatibility routes under `resources/` and `whatsapp/`, identity assets, favicons and other retained public files are preserved. Resource PDFs remain outside the navigation and sitemap.

## Artwork

Portrait derivatives and the 1200 × 630 social-preview PNG are committed, so normal builds need no image tooling. `scripts/portraits.ps1` refreshes portrait derivatives on Windows. `node scripts/social.mjs` refreshes the social SVG; rasterizing it to the committed PNG is a separate artwork-maintenance step.
