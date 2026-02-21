---
applyTo: "src/content/**/*.{md,mdx}"
---

# Content Collection Guidelines

## Frontmatter

- All content files must strictly adhere to the Zod schema defined in `src/content.config.ts`.
- Required fields: `title`, `description`, `pubDate`, `category`, `lang`.
- Optional fields: `updatedDate`, `canonicalUrl`, `ogImage`, `tags`, `readTime`, `draft`.

## SEO Limits

- **Title:** Keep under 60 characters. Include the target keyword near the beginning.
- **Description:** Must be between 120–160 characters. Write a compelling meta description that includes the primary keyword and a call-to-action. Warn or truncate if exceeding 160 characters.
- **Tags:** Use 3–6 relevant tags per post. Include at least one KSA-specific tag (e.g., "saudi-arabia", "riyadh", "jeddah").

## Localization

- The `lang` field must be set to `'ar'` for Arabic content and `'en'` for English content.
- Ensure the filename or folder structure clearly denotes the target market (Saudi Arabic vs. English).
- Arabic content should use natural Arabic phrasing — do not machine-translate English content.
- Links within content must use relative paths that respect the locale prefix convention (no prefix for Arabic, `/en/` prefix for English).

## Content Quality

- Use proper heading hierarchy within the Markdown body (start at `##` since `<h1>` comes from the page layout).
- Include internal links to related service pages and blog posts to improve site crawlability.
- Break long content into scannable sections with clear subheadings.
- Include a FAQ section (using `##` headings) on service-related posts to enable `FAQPage` schema.

## Images in Content

- Reference images from `public/images/blog/` or import from `src/assets/`.
- Always include descriptive alt text in the current language.
- Use the `ogImage` frontmatter field to specify a social sharing image for each post.

## No Emojis

- **Never use emojis** in content files — not in titles, descriptions, headings, body text, or frontmatter. Use descriptive text instead.

## Icons

- If an icon is needed that is not already available in the project, use the `better-icons` skill (`.agents/skills/better-icons/SKILL.md`) to search for and retrieve SVG icons from the Iconify library.
