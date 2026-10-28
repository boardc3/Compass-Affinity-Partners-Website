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

The form posts to FormSubmit (`https://formsubmit.co/ajax/mike@CompassAffinityPartners.com`).
The first submission triggers a one-time activation email to that inbox — click the link in it and
all later submissions are delivered. If the request fails, the form falls back to opening the
visitor's email client with the message pre-filled.

## Logo

`src/components/CompassMark.jsx` is a placeholder compass mark in the brand's black and gold.
Drop the official logo into `src/` and swap the import in `SiteHeader.jsx` / `SiteFooter.jsx`.

## Hero images

`src/assets/panel-healthcare.jpg`, `panel-real-estate.jpg`, `panel-sports.jpg` and `hero-mountains.jpg`
are the photographic hero panels/backdrop. Replace them with same-named files to swap imagery.
