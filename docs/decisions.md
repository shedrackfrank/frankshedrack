# Decisions Log

- Stack: Astro + TypeScript + Tailwind v4 + MDX content collections + React islands only where needed.
- Use self-hosted Bricolage Grotesque and JetBrains Mono variable fonts to avoid third-party font requests while improving performance and privacy.
- Adopted Astro ClientRouter for card-to-page transitions; no new dependency; theme and toggle scripts moved to astro:after-swap / astro:page-load.
- Custom cursor is a gated React island (fine pointer + no reduced motion), persisted across ClientRouter; scroll reveals via a single IntersectionObserver with a no-JS fallback.
- Project category-specific fields (web: problem/approach/architecture/challenges/securityConsiderations/outcome; security: target/scope/methodology/findings/evidence/impact/recommendations) and `lessonsLearned` are optional, so case-study sections render only when a value is present and non-empty. `technologies` may be an empty array and `role` stays required. This replaced the earlier `[TODO]` placeholder / dev-only section pattern.
- Project order is a single 1–4 sequence driven by the `order` field: My Deco (web) → Lash Finder (web) → LocalSpot (security) → DVWA Vulnerability Assessment (security). The home list and the case-study "next project" wrap-around both read this order.
- Project images are resolved through Astro's content `image()` schema (relative paths from each `.mdx` file) and rendered with `astro:assets` `<Image>`. Card thumbnails use `object-fit: cover` with `object-position: top center`; the case-study featured image and evidence images render at natural width (`object-fit: contain`, no upscale), centered on a surface block. The hero avatar is a direct `astro:assets` import.
- SEO via BaseLayout props (title/description/image/type/noindex) + a JSON-LD `Person` on the home page + static `sitemap.xml.ts` / `robots.txt.ts` endpoints (no sitemap dependency). `site` in `astro.config.mjs` reads `SITE_URL` from `src/data/site.ts`.
