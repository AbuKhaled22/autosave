# Auto Save KSA - Copilot Instructions

## Project Context

This is the codebase for Auto Save KSA (`autosave.sa`), a scalable, bilingual (English/Arabic) automotive services platform targeting the Saudi Arabian market. The site is optimized for local SEO, lead generation, and high performance across Google Core Web Vitals.

## Tech Stack

- **Framework:** Astro 5 (Static Site Generation / Hybrid)
- **UI Architecture:** Astro components for static layouts, React 19 for interactive islands
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no `tailwind.config` file)
- **Forms/Validation:** React Hook Form + Zod
- **Package Manager:** pnpm
- **Sitemap:** `@astrojs/sitemap` with i18n support

## Architecture Overview

- **Default locale:** Arabic (`ar`) — served at root paths (e.g., `/`, `/about`, `/blog`)
- **Secondary locale:** English (`en`) — served under `/en/` prefix (e.g., `/en/`, `/en/about`, `/en/blog`)
- **i18n helpers:** Use `getLangFromUrl()` and `getLocalizedPath()` from `src/lib/i18n.ts` for routing
- **Content system:** Translations live in `src/lib/content/` (TypeScript objects, not JSON), accessed via `getContentByLanguage(lang)`
- **Blog data:** Arabic posts in `src/lib/blog-data-ar.ts`, English in `src/lib/blog-data.ts`
- **Content Collections:** Blog schema defined in `src/content.config.ts` with Zod validation

## Global Rules

- **Language & RTL:** The application supports English (`en`, LTR) and Arabic (`ar`, RTL). Always account for RTL layouts when writing Tailwind classes. Use logical properties: `ms-4` instead of `ml-4`, `me-4` instead of `mr-4`, `ps-2` instead of `pl-2`, `pe-2` instead of `pr-2`, `start-0` instead of `left-0`, `end-0` instead of `right-0`. Use `gap-*`, `space-x-*` carefully — prefer `flex-row-reverse` or logical gap utilities where needed.
- **Performance First:** Default to `.astro` components. Only use `.tsx` React components when client-side interactivity is strictly required (e.g., complex forms, interactive calculators, dynamic pricing toggles).
- **Client Directives:** When using a React component inside an Astro file, always add the appropriate client directive: `client:load` (immediately), `client:idle` (after page idle), `client:visible` (when scrolled into view). Prefer `client:visible` or `client:idle` over `client:load` for below-the-fold components.
- **SEO & Schema:** All service pages and blog posts must include proper JSON-LD schema (e.g., `AutomotiveBusiness`, `AutoRepair`, `FAQPage`) and dynamic `hreflang` tags via the `<SEO />` component.
- **Images:** Always use the `<Image />` component from `astro:assets` for automatic WebP/AVIF conversion. Include explicit `width` and `height` attributes to prevent Cumulative Layout Shift (CLS). Use `loading="eager"` and `fetchpriority="high"` only for above-the-fold hero images.
- **Mobile-First Design:** Always design and implement for mobile first. Write base styles targeting mobile screens, then layer on `sm:`, `md:`, `lg:`, and `xl:` breakpoint modifiers for larger viewports. Every component, layout, and page must be fully usable and visually correct on small screens (320px–480px) before any desktop enhancements are added. Test touch targets (minimum 44×44px), readable font sizes, and single-column stacking as the default.
- **Semantic HTML:** Never generate `<div>` soup. Use HTML5 semantic elements (`<main>`, `<article>`, `<section>`, `<nav>`, `<aside>`, `<header>`, `<footer>`). Enforce strict heading hierarchy (h1 → h2 → h3) — never skip levels, exactly one `<h1>` per page.
- **Accessibility:** All interactive elements must have `aria-label` attributes. All images must have descriptive `alt` text in the current language.

## Commands

- Dev: `pnpm dev`
- Build: `pnpm build`
- Preview: `pnpm preview`
