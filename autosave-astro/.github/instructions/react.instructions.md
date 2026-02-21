---
applyTo: "**/*.tsx,**/*.ts"
excludeFrom: "code-review"
---

# React Island & TypeScript Guidelines

## Scope & Purpose

- React components (`.tsx`) are **exclusively for client-side interactivity** — complex forms, interactive calculators, dynamic pricing toggles, etc.
- If a component has no interactivity, it must be an `.astro` file instead.
- Do **not** fetch data from external APIs inside React components unless triggered by a user action (e.g., form submission). Pass initial data down from the `.astro` parent via props.

## Forms

- Always use `react-hook-form` integrated with `@hookform/resolvers/zod`.
- Define Zod schemas in the same file or in a dedicated `src/schemas/` directory.
- All form labels and error messages must support both Arabic and English — accept a `lang` prop or translation object from the parent.

## UI & Styling

- **Mobile-First:** Always write base styles targeting mobile screens first, then layer on `sm:`, `md:`, `lg:`, `xl:` breakpoint modifiers for larger viewports. Every React island must render correctly and be fully usable on small screens (320px–480px). Use single-column layouts by default and only introduce multi-column layouts at responsive breakpoints.
- Use Radix UI primitives (if needed) wrapped with Tailwind CSS v4 classes. Do **not** install heavy component libraries (MUI, Ant Design, Chakra, etc.).
- Use Tailwind logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`) for RTL-safe layouts.
- Ensure all touch targets (buttons, form controls, interactive elements) are at least 44×44px on mobile.
- Icons: use inline SVGs or a lightweight icon library. Ensure icons that convey direction (arrows, chevrons) flip horizontally in RTL mode.

## State Management

- Prefer standard React hooks (`useState`, `useReducer`, `useRef`).
- Do **not** introduce global state libraries (Redux, Zustand, etc.) without explicit discussion.

## Performance & SEO

- Do **not** import heavy libraries (`moment.js`, `lodash`, full `date-fns`) that bloat the client bundle. Prefer native JavaScript (`Intl`, `Date`, `Array.prototype` methods) or tree-shakeable alternatives.
- When building interactive UI elements (pricing toggle, booking form, etc.), define explicit `min-height` or provide skeleton loaders to prevent Cumulative Layout Shift (CLS) as the React component hydrates.
- Keep components as small as possible — split complex UIs into sub-components to enable code-splitting.

## TypeScript

- All components must be fully typed. Use `interface` for props, never `any`.
- Export prop interfaces when a component is consumed by an `.astro` file.

## Accessibility

- All form inputs must have associated `<label>` elements or `aria-label` attributes.
- Interactive elements must be keyboard-navigable and have appropriate ARIA roles.
- Ensure focus management for dialogs, dropdowns, and modals.

## No Emojis

- **Never use emojis** in JSX output, string literals, comments, or UI text. Use proper SVG icons or text instead.

## Icons

- If an icon is needed that is not already available in the project, use the `better-icons` skill (`.agents/skills/better-icons/SKILL.md`) to search for and retrieve SVG icons from the Iconify library. Do **not** install heavy icon packages or use emoji as a substitute for icons.
