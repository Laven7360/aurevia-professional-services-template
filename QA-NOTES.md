# Final QA — 27 September 2026

## Verified

- `node scripts/qa.mjs`: server-rendered all five routes and two unknown routes. One H1 per page, shared layout, valid internal anchors, active links, unique IDs and resolved ARIA references.
- Page-title effects checked for all main routes, unknown routes, case-insensitive paths and trailing slashes.
- Insights: all seven filters; invalid/valid newsletter logic and cleared email after success.
- Contact: empty fields, invalid/valid email, preserved values on error, first-error focus target, select and checkbox updates, success clearing, reset state and reset-focus request.
- FAQs and article previews use native `details`/`summary`; expanded state is conveyed by browser semantics without redundant `aria-expanded`.
- No form network/storage calls. No broken internal CTA destinations. The skip link is the only on-page navigation anchor.
- Four local WebP images decode correctly and build successfully (192,602 bytes combined). Contextual alt text, explicit dimensions, crop containers, one high-priority hero and three lazy supporting images retained.
- CSS reviewed at 1440/1024/768/375/320px breakpoints: single-column forms, wrapping topic controls, vertical mobile timelines, constrained artwork and image ratios. Added narrow-screen heading/wrapping safeguards and reduced mobile header height from 88px to 76px without reducing the hamburger target.
- Muted text contrast on the darkest cream surface increased from 3.67:1 to 4.74:1. Small gold text now uses a darker gold ink token; decorative gold remains unchanged. Focus outlines inherit contrasting foreground colour.
- Necessary demo disclosures retained. Removed repeated per-testimonial labels, unused placeholder CSS and starter README content.

## Remaining manual checks

No browser connection was available. Browser visual, pointer, keyboard, screen-reader and reduced-motion walkthroughs have not been performed. In particular verify image crops, 320px long headings, sticky-menu interactions, native accordions, scroll restoration and focus after submission in the actual browser. Logic tests and server rendering do not assert pixel layouts or native keyboard behaviour.

Before eventual deployment, configure SPA fallback for direct route refreshes and test it on the selected host. The client 404 does not set the server HTTP status. Production domain and social preview image remain intentionally unconfigured. No deployment, Git initialization, commit or push was performed.
