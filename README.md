# My Portfolio

Personal portfolio site for Frank Shedrack Chigozie — Software Developer & Cybersecurity Analyst.

## Stack

- [Astro](https://astro.build/) (static-first, MDX content collections, ClientRouter)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [React](https://react.dev/) (islands only — the custom cursor)

## Run

```bash
npm install      # install dependencies
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Edit content

- Site-wide copy (name, title, skills, socials, `SITE_URL`): `src/data/site.ts`
- Project case studies: `src/content/projects/*.mdx` (schema in `src/content.config.ts`)

## Add a project

1. Create `src/content/projects/<slug>.mdx`.
2. Set `order` (unique number; the list sorts by it), `category` (`web` or `security`), `title`, `shortDescription`, `longDescription`, `role`, `status`, `technologies`, and any category-specific sections.
3. Put screenshots in `src/assets/projects/` and reference them by relative path, e.g. `featuredImage: "../../assets/projects/<name>.png"`.

## Change the site URL

Edit `SITE_URL` in `src/data/site.ts` (used for canonical, Open Graph, robots.txt, and sitemap). It is currently set to `https://frankshedrack.pages.dev`.

## Image/asset conventions

- Avatars live in `src/assets/avatar/`; project images in `src/assets/projects/`.
- Reference images via the content `image()` schema (relative path from the `.mdx` file) and render them with `astro:assets` `<Image>`.
- Social preview image: `public/og.png` (1200×630).
- Favicons: `public/favicon.svg` + `public/favicon.ico`.

## Docs

- [`AGENTS.md`](./AGENTS.md) — rules for coding agents.
- [`docs/`](./docs/) — design brief, design tokens, and decision log.
