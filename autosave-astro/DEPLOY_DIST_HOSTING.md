# Deploy deploy-dist (Cloudflare + Others)

This project is configured so deploy output is always prepared in `deploy-dist/`.

## One command

```bash
pnpm build:dist
```

This command does all of the following:

1. Builds Astro output.
2. Moves any `noindex` pages to backup and removes them from deploy output.
3. Creates `deploy-dist/` from the cleaned build.

## Cloudflare Pages (recommended)

If your Cloudflare project is already connected to GitHub, use **Option A** only.

### Option A: Cloudflare dashboard Git integration

1. Connect the repository in Cloudflare Pages.
2. Set **Framework preset**: `None`.
3. Set **Build command**: `pnpm build:dist`.
4. Set **Root directory**: `autosave-astro`.
5. Set **Build output directory**: `deploy-dist`.

### Option B: GitHub Actions deployment

This is optional and manual-only. Use it only if you want GitHub Actions to push to Cloudflare.

Workflow file: `.github/workflows/deploy-cloudflare-pages.yml`

Required repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Required repository variable:

- `CLOUDFLARE_PAGES_PROJECT`

## Netlify

Config file: `autosave-astro/netlify.toml`

If deploying from the full monorepo, set **Base directory** in Netlify UI to:

```text
autosave-astro
```

Netlify will then read command/publish from `netlify.toml`.

## Vercel

Config file: `autosave-astro/vercel.json`

If deploying from the full monorepo, set **Root Directory** in Vercel UI to:

```text
autosave-astro
```

Vercel will run `pnpm build:dist` and publish `deploy-dist`.

## GitHub Pages

Workflow file: `.github/workflows/deploy-astro.yml`

This workflow is configured to upload `autosave-astro/deploy-dist`.
