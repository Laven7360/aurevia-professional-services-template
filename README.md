# Aurevia Advisory

A fictional professional-services portfolio template built with React, Vite and React Router. Includes Home, About, Services, Insights, Contact and a shared-layout 404 page.

## Developer enquiries

Created by **Laven Raj** as part of a freelance web-development portfolio. Aurevia Advisory is fictional; its `hello@aurevia.example` address represents the demo business only.

For a custom website, contact the developer directly:

- Email: [s.lavenraj2002@gmail.com](mailto:s.lavenraj2002@gmail.com?subject=Aurevia%20Website%20Template%20Enquiry)
- WhatsApp: [+60 16-793 8894](https://wa.me/60167938894?text=Hi%20Laven%2C%20I%20saw%20your%20Aurevia%20Advisory%20website%20template%20and%20I'm%20interested%20in%20a%20website%20for%20my%20business.)

These are real external freelance enquiry methods, separate from the frontend-only demonstration forms. The forms do not contact the developer or transmit/store submissions.

## Local development

- `npm install` — install the existing dependencies.
- `npm run dev` — local development.
- `npm run lint` — lint source files.
- `npm run build` — create the production `dist/` output.
- `npm run preview` — preview the build locally.
- `node scripts/qa.mjs` — route rendering, internal links, assets, titles and demo interaction logic checks.

On Windows with PowerShell script restrictions, use `npm.cmd` instead of `npm`.

## Demo behaviour

Insights filters six sample entries locally and uses native expandable previews. Newsletter and enquiry forms validate in memory only: they do not send requests or persist submissions. The Contact FAQ uses native `details`/`summary` controls. Leadership, testimonials, figures and contact details are illustrative, not real business claims.

Photography sources and license notes are in [SOURCES.md](src/assets/images/SOURCES.md). Images are bundled locally; Google Fonts supplies Playfair Display and DM Sans, with local font fallbacks.

## Hosting handoff

Build output is `dist/`. The host must serve `index.html` for application routes such as `/about` while preserving static asset requests. The client catch-all renders unknown routes; it does not by itself set an HTTP 404 status. Verify direct-route refreshes on the chosen host before launch.

Page titles update on client navigation. Static Open Graph and social metadata describe the template; no production domain or social accounts are configured. No deployment, analytics or backend is included.

Before publishing, complete browser checks at 1440, 1024, 768, 375 and 320px, including keyboard navigation, image crops, focus after validation, reduced motion and mobile menu behaviour. Automated logic checks do not replace those visual checks.
