# Compass Affinity Partners — Website

Marketing site for Compass Affinity Partners, LLC (CompassAffinityPartners.com).
Single-page React + Vite site: Exectras healthcare benefits (primary), SceneSet.ai visualization,
college sports marketing via HSRN, other business solutions, mission/about, and a lead-gen contact form.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build        # -> dist/ (root-relative, for Vercel / custom domain)
npm run build:pages  # -> dist/ with /Compass-Affinity-Partners-Website/ base, for GitHub Pages
```

## Contact form

The form opens the visitor's email client (mailto:) with the message pre-filled and addressed to Mike — no backend needed.

## Logo

`src/components/CompassMark.jsx` is a placeholder compass mark in the brand's black and gold.
Drop the official logo into `src/` and swap the import in `SiteHeader.jsx` / `SiteFooter.jsx`.

## Hero images

`src/assets/panel-healthcare.jpg`, `panel-sceneset.jpg` and `panel-sports.jpg`
are the photographic hero panels. Replace them with same-named files to swap imagery.
