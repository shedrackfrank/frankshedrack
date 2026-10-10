# AGENTS.md — Single Source of Truth for Coding Agents

- Read `docs/design-brief.md` and `docs/design-tokens.md` before changing anything.
- Do not change the design direction. Do not add gradients, glows, blobs, glassmorphism or effects outside the approved language.
- Use only the tokens in `src/styles/tokens.css`. No hard-coded colors or fonts in components.
- Add or edit project content only through the content schema in `src/content/projects/` and `src/content.config.ts`. Never duplicate page templates per project.
- Site-wide copy (name, title, skills, socials) lives only in `src/data/site.ts`.
- No new dependency without a written reason in `docs/decisions.md`.
- Keep the site static-first. React islands only for genuinely interactive pieces.
- Preserve accessibility (semantic HTML, focus states, 44px touch targets, 4.5:1 text contrast) and performance after every change.
- No auth, database, AI APIs, backend services, dashboards or other product infrastructure unless the owner explicitly asks.
- Validate behavior at phone, tablet and desktop widths after any major UI change.
- Log any approved deviation in `docs/decisions.md`.

