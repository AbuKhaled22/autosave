---
applyTo: "**/*.astro"
---

# Astro Component & SEO Guidelines

## Semantic HTML & Structure

- **No `<div>` soup:** Strictly use HTML5 semantic elements (`<main>`, `<article>`, `<section>`, `<nav>`, `<aside>`, `<header>`, `<footer>`) so search engine crawlers understand the page hierarchy. Use `<div>` only for styling wrappers when no semantic element applies.
- **Headings:** Enforce strict heading hierarchy (h1 → h2 → h3). Never skip heading levels. There must be exactly one `<h1>` per page — typically in the page-level component, not in reusable child components.

## Accessibility (A11y)

- All interactive elements (`<button>`, `<a>`, form controls) must have appropriate `aria-label` attributes, especially when visible text is absent or icon-only.
- All `<img>` and `<Image />` elements must have descriptive `alt` text mapped to the current language (Arabic or English). Never leave `alt` empty unless the image is purely decorative (in which case use `alt=""`).
- Use `role` attributes where semantic elements alone are insufficient (e.g., `role="tablist"`, `role="dialog"`).

## Core Web Vitals

- **LCP (Largest Contentful Paint):** Use `loading="eager"` and `fetchpriority="high"` on above-the-fold hero images. Preload critical fonts and hero assets in `<head>`.
- **CLS (Cumulative Layout Shift):** Always set explicit `width` and `height` on images. Reserve space for dynamic content with `min-height` or aspect-ratio containers.
- **Offscreen assets:** Use `loading="lazy"` for all below-the-fold images. Prefer `client:visible` or `client:idle` over `client:load` for React islands below the fold.

## TypeScript & Props

- Always define a `Props` interface in the frontmatter (`---`) block using TypeScript.
- Type all component props explicitly — avoid `any`.

## Routing & i18n

- Use `getLangFromUrl()` and `getLocalizedPath()` from `src/lib/i18n.ts` for generating internal links. **Do not** hardcode `/en/` prefixes.
- Arabic (`ar`) is the default locale served at root paths; English (`en`) is served under `/en/`.
- All navigation links must use the helper functions to keep users in their current locale.

## Metadata & SEO

- Every page must pass `currentLang` and the canonical URL to the `<SEO />` component from `src/components/SEO.astro` to trigger dynamic `hreflang` generation.
- Service pages must include JSON-LD schema (e.g., `AutomotiveBusiness`, `AutoRepair`, `FAQPage`).
- Use `<LocalBusinessSchema />` on relevant pages for local search visibility.

## Data & Content

- Do all data fetching, content collection queries, markdown parsing, and heavy logic in the Astro frontmatter (`---`), never in client-side `<script>` tags.
- Access translations via `getContentByLanguage(lang)` from `src/lib/content`.

## Images

- Always use `import { Image } from 'astro:assets'` for automatic WebP/AVIF optimization.
- Always include explicit `width` and `height` to prevent CLS.
- Use descriptive, localized `alt` text.

## Mobile-First Responsive Design

- **Always design and build mobile-first.** Write base Tailwind classes for the smallest screens (320px–480px), then add `sm:`, `md:`, `lg:`, `xl:` modifiers to progressively enhance for larger viewports.
- Default layouts must use single-column stacking. Only introduce multi-column grids (`grid-cols-2`, `grid-cols-3`, etc.) behind responsive breakpoints (e.g., `md:grid-cols-2`, `lg:grid-cols-3`).
- Ensure all text is readable without horizontal scrolling on mobile. Use fluid font sizing or appropriate responsive text classes.
- Touch targets (buttons, links, interactive areas) must be at least 44×44px on mobile.
- Use `w-full` as the base width for cards, forms, and content blocks; constrain with `max-w-*` and responsive widths at larger breakpoints.
- Test that navigation, modals, dropdowns, and overlays are fully functional on small screens.

## RTL Styling

- Use Tailwind logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`) instead of physical properties (`ml-*`, `mr-*`, `pl-*`, `pr-*`, `left-*`, `right-*`) so layouts automatically flip for Arabic RTL.

## No Emojis

- **Never use emojis** anywhere in component markup, text content, comments, or alt text. Use proper icons or text instead.

## Icons

- If an icon is needed that is not already available in the project, use the `better-icons` skill (`.agents/skills/better-icons/SKILL.md`) to search for and retrieve SVG icons from the Iconify library. Do **not** install additional icon packages or use emoji as a substitute for icons.
