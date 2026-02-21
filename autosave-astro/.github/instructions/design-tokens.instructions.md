---
applyTo: "**/*.astro,**/*.tsx,**/*.ts,**/*.css"
---

# Design Token & Styling Instructions

This project uses the **Desert Luxury** design system — warm golds, sand tones, and deep navy foundations. All tokens are defined in `src/styles/globals.css` via CSS custom properties and mapped to Tailwind v4 via `@theme inline`.

## Color Palette

### Semantic Tokens (use via Tailwind classes)

| Token               | Light Value   | Purpose                                     |
| -------------------- | ------------- | ------------------------------------------- |
| `primary`            | `#c9a227`     | Gold — CTAs, links, accent borders          |
| `primary-foreground` | `#ffffff`     | Text on gold backgrounds                    |
| `secondary`          | `#f0ebe0`     | Sand — subtle section backgrounds           |
| `accent`             | `#b87333`     | Copper — secondary accent, category labels  |
| `background`         | `#faf8f4`     | Warm off-white page background              |
| `foreground`         | `#1a1a2e`     | Deep navy body text                         |
| `muted`              | `#f0ebe0`     | Muted backgrounds (sand)                    |
| `muted-foreground`   | `#7a7062`     | Secondary text, descriptions                |
| `border`             | `#e0d8c8`     | Card and section borders                    |
| `card`               | `#ffffff`     | Card surfaces                               |
| `destructive`        | `#c0392b`     | Error states                                |

### Brand Colors (hardcoded where needed)

| Color              | Hex         | Usage                                  |
| ------------------ | ----------- | -------------------------------------- |
| Hero/Footer Navy   | `#0c1b2e`   | Hero gradient base, footer background  |
| Hero Navy Mid      | `#1a2d4a`   | Hero gradient midpoint                 |
| Sand/Light Text    | `#f0ebe0`   | Text on dark backgrounds               |
| Gold Light         | `#e8c547`   | Gold gradient endpoint, dark mode primary |
| WhatsApp Green     | `#25D366`   | WhatsApp button and float              |

### Dark Mode

Dark mode tokens are defined under `.dark` and swap automatically. Key changes: `primary` becomes `#e8c547`, backgrounds shift to navy tones (`#0c1b2e`, `#162340`).

## Typography

| Tailwind Class    | Font Stack                                           | Usage                        |
| ----------------- | ---------------------------------------------------- | ---------------------------- |
| `font-sans`       | Source Serif 4, IBM Plex Sans Arabic, Georgia, serif  | Body text, paragraphs        |
| `font-display`    | Outfit, IBM Plex Sans Arabic, system-ui, sans-serif   | Headings, card titles, CTAs  |

### Rules

- **All headings** (`h1`–`h3`) must use `font-display`.
- **Body text** uses the default `font-sans` (no explicit class needed).
- **Buttons and labels** use `font-semibold` or `font-bold`; CTAs also use `font-display` when prominent.

## Custom CSS Utility Classes

These are defined in `globals.css` and must be used instead of reinventing equivalent styles inline.

### Backgrounds & Gradients

| Class               | Description                                                    |
| -------------------- | -------------------------------------------------------------- |
| `hero-gradient`      | Deep navy gradient (`135deg`) for hero sections and dark CTAs  |
| `hero-pattern`       | Geometric diagonal line overlay (add as empty `<div>` child)   |
| `footer-dark`        | Vertical dark gradient for footer                              |
| `gold-gradient`      | Gold gradient background (`#c9a227` → `#e8c547`) for CTAs     |
| `gold-gradient-text`  | Gold gradient applied as text color (background-clip)          |

### Interactive Effects

| Class              | Description                                                    |
| ------------------- | -------------------------------------------------------------- |
| `gold-shimmer`      | Diagonal light sweep on hover for gold CTAs (pair with `gold-gradient`) |
| `card-hover-lift`   | Subtle `translateY(-4px)` + gold-tinted shadow on hover        |
| `nav-link-hover`    | Gold underline that grows from start on hover (for nav links)  |
| `blog-card-image`   | Gold tint overlay appearing on parent `.group:hover`           |

### Decorative

| Class               | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| `eyebrow-decorated`  | Inline-flex with gold dash lines on both sides of text        |
| `step-connector`     | Dashed gold connecting line between step items (desktop only) |

### Accordion & Menu

| Class                 | Description                                                 |
| ---------------------- | ----------------------------------------------------------- |
| `faq-answer-wrapper`   | Grid-based smooth accordion wrapper (inside `<details>`)   |
| `faq-answer-inner`     | Overflow-hidden inner div for accordion content            |
| `mobile-menu-enter`    | Grid-based slide menu (toggle `.is-open` class via JS)     |

### WhatsApp Float

| Class                | Description                                    |
| --------------------- | ---------------------------------------------- |
| `whatsapp-pulse`      | Pulsing green glow ring animation (infinite)   |
| `whatsapp-entrance`   | Slide-up + scale entrance on page load (1s delay) |

## Animation System

### Scroll-Triggered Animations

Elements with `data-animate` are observed by an `IntersectionObserver` (defined in `BaseLayout.astro`). When visible, the `.is-visible` class is added.

**Usage:**

```html
<div data-animate="fade-in-up">...</div>
<div data-animate="fade-in-left">...</div>
<div data-animate="fade-in-right">...</div>
<div data-animate="scale-in">...</div>
```

**Staggered delays** — use `data-animate-delay` attribute with values `100`–`600` (milliseconds):

```html
<div data-animate="fade-in-up" data-animate-delay="100">First</div>
<div data-animate="fade-in-up" data-animate-delay="200">Second</div>
<div data-animate="fade-in-up" data-animate-delay="300">Third</div>
```

### Hero Animations (CSS-only, no JS)

Hero elements animate immediately on page load via `@keyframes heroFadeUp`:

```html
<span class="hero-animate">Immediate</span>
<h1 class="hero-animate hero-animate-delay-1">0.15s delay</h1>
<p class="hero-animate hero-animate-delay-2">0.3s delay</p>
<div class="hero-animate hero-animate-delay-3">0.45s delay</div>
<div class="hero-animate hero-animate-delay-4">0.6s delay</div>
```

## Common Patterns

### Hero Section

```html
<section class="relative overflow-hidden hero-gradient text-[#f0ebe0]">
  <div class="hero-pattern"></div>
  <div class="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
    <span class="hero-animate eyebrow-decorated text-sm font-semibold uppercase tracking-widest text-primary">Eyebrow</span>
    <h1 class="hero-animate hero-animate-delay-1 mt-4 text-4xl font-bold tracking-tight font-display sm:text-5xl">Title</h1>
    <p class="hero-animate hero-animate-delay-2 mt-6 text-lg text-[#f0ebe0]/65 max-w-2xl">Description</p>
  </div>
</section>
```

### Gold CTA Button

```html
<!-- Primary (filled gold) -->
<a class="gold-gradient gold-shimmer rounded-lg px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:shadow-primary/20">
  Book Now
</a>

<!-- Secondary (outlined) -->
<a class="rounded-lg border border-primary/30 px-8 py-3.5 text-sm font-semibold text-primary transition hover:bg-primary/5">
  Learn More
</a>
```

### Card With Hover Lift

```html
<div class="rounded-xl border border-border bg-card p-6 shadow-sm card-hover-lift border-t-2 border-t-primary/25 hover:border-t-primary/60">
  <h3 class="font-display font-semibold">Card Title</h3>
  <p class="text-muted-foreground">Description</p>
</div>
```

### Featured/Highlighted Card

```html
<div class="rounded-xl border-2 border-primary bg-gradient-to-b from-primary/8 to-primary/2 p-7 shadow-lg shadow-primary/10 card-hover-lift">
  <h3 class="font-display font-semibold">Featured</h3>
</div>
```

### Section Eyebrow

```html
<span class="eyebrow-decorated text-sm font-semibold uppercase tracking-widest text-primary">Section Label</span>
```

### Section Backgrounds

- Default: No class (inherits `bg-background`)
- Subtle contrast: `bg-secondary/40`
- Dark CTA: `hero-gradient` with `hero-pattern` overlay

## RTL / Logical Properties

Always use Tailwind logical properties for RTL-safe layouts:

| Use This       | Instead Of |
| -------------- | ---------- |
| `ms-4`         | `ml-4`     |
| `me-4`         | `mr-4`     |
| `ps-4`         | `pl-4`     |
| `pe-4`         | `pr-4`     |
| `start-0`      | `left-0`   |
| `end-0`        | `right-0`  |
| `border-s-2`   | `border-l-2` |
| `border-e`     | `border-r` |
| `inset-inline-start` | `left` (CSS) |
| `inset-inline-end`   | `right` (CSS) |

## Rules

1. **Never hardcode colors** that have a semantic token equivalent. Use `text-primary`, `bg-secondary`, `border-border`, etc.
2. **Never create new animation utilities** without adding them to `globals.css`. All animation classes must be centrally defined.
3. **Always pair `gold-gradient` with `gold-shimmer`** on primary CTA buttons.
4. **Always add the `hero-pattern` div** inside `hero-gradient` sections for visual depth.
5. **Always use `data-animate`** on below-the-fold content for scroll-triggered entrance animations.
6. **Use staggered delays** on grid/list items: `data-animate-delay="100"`, `"200"`, `"300"`, etc.
7. **Text on dark backgrounds** uses `text-[#f0ebe0]` at varying opacities (`/65`, `/60`, `/50`) — never `text-white` for body text on hero/footer.
8. **Gold accent borders** on cards: `border-t-2 border-t-primary/25 hover:border-t-primary/60`.
9. **Section spacing**: Use `py-20 lg:py-28` for major sections (not `py-12 lg:py-16`).
10. **Heading font**: Every `h1`, `h2`, `h3` must include `font-display`.
11. **No emojis**: Never use emojis anywhere in the UI — not in headings, body text, buttons, labels, or decorative elements. Use proper SVG icons instead.
12. **Icons**: If an icon is needed that is not already available in the project, use the `better-icons` skill (`.agents/skills/better-icons/SKILL.md`) to search for and retrieve SVG icons from the Iconify library. Do **not** install additional icon packages or use emoji as a substitute for icons.
