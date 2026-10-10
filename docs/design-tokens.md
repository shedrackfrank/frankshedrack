# Design Tokens

Single source of truth: `src/styles/tokens.css` (Tailwind v4 `@theme` + CSS variables).
Dark theme (`[data-theme="dark"]`) is the default; light theme (`[data-theme="light"]`) overrides it.

## Color

| Token | Dark | Light |
| --- | --- | --- |
| `bg` | `#0a0c0d` | `#f3f4f1` |
| `surface` | `#101315` | `#eaece7` |
| `fg` | `#e9edeb` | `#111514` |
| `muted` | `#8b9692` | `#56605c` |
| `line` | `rgba(233, 237, 235, 0.10)` | `rgba(17, 21, 20, 0.12)` |
| `grid` | `rgba(233, 237, 235, 0.045)` | `rgba(17, 21, 20, 0.055)` |
| `accent` | `#46c2a8` (cool teal, never neon green) | `#0d7563` |
| `accent-ink` | `#04201a` | `#ffffff` |
| `accent-ring` | accent at 55% opacity | accent at 55% opacity |
| `accent-wash` | accent at 12% opacity | accent at 12% opacity |

## Finding severity chips

Severity text always accompanies color. Each foreground/background pair is designed to exceed 4.5:1 contrast in both themes.

| Severity | Dark background / text | Light background / text |
| --- | --- | --- |
| Critical | `#7f1d1d` / `#ffffff` | `#fee2e2` / `#7f1d1d` |
| High | `#7c2d12` / `#ffffff` | `#ffedd5` / `#7c2d12` |
| Medium | `#713f12` / `#ffffff` | `#fef3c7` / `#713f12` |
| Low | `#14532d` / `#ffffff` | `#dcfce7` / `#14532d` |
| Info | `#1e3a8a` / `#ffffff` | `#dbeafe` / `#1e3a8a` |

## Typography

| Token | Value |
| --- | --- |
| `sans` (headings + body) | `"Bricolage Grotesque Variable"`, system fallbacks |
| `mono` (technical metadata) | `"JetBrains Mono Variable"`, system fallbacks |

Fontsource variable fonts are self-hosted and use `font-display: swap`.

## Spacing / Container

| Token | Value |
| --- | --- |
| max width | `1312px` |
| gutter | `clamp(20px, 5vw, 72px)` |

## Radius

| Token | Value |
| --- | --- |
| `pill` | `999px` |
| `media` | `8px` |

## Motion

| Token | Value |
| --- | --- |
| durations | `200ms` / `250ms` / `400ms` |
| easing | `cubic-bezier(.2, .7, .2, 1)` for UI; `cubic-bezier(.16, 1, .3, 1)` for hero entrance |

Hero entrance tokens: `--duration-hero-reveal: 800ms`, `--duration-hero-avatar: 1000ms`, `--duration-hero-grid: 1200ms`, `--duration-hero-base-delay: 150ms`, and `--duration-hero-stagger: 130ms`.

A `prefers-reduced-motion` rule disables transitions and animations.

Additional tokens: `--duration-cursor-press: 100ms`, `--duration-row-stagger: 60ms`, and `--z-cursor: 20`.
