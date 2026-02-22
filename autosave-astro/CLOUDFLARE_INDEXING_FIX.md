# Cloudflare Indexing Fix (autosaveks.com)

This guide fixes Google Search Console "Redirect error" and related indexing issues by forcing one canonical host and protocol.

## Canonical URLs to index

- Main page example: https://autosaveks.com/pricing/
- English equivalent: https://autosaveks.com/en/pricing/
- Sitemap index (submit in GSC): https://autosaveks.com/sitemap-index.xml

## Current confirmed issue

- Canonical sitemap URLs on `https://autosaveks.com` return `200`.
- `https://www.autosaveks.com/*` returns `403` instead of redirecting to apex.
- This host mismatch can trigger Search Console redirect/processing errors.

## Cloudflare fix (copy-paste)

Open: **Cloudflare Dashboard → Rules → Redirect Rules**

### Rule 1 (Required): `www` → apex

**Rule name:** `www-to-apex-autosaveks`

**If incoming requests match (Expression):**

```text
http.host eq "www.autosaveks.com"
```

**Then (Dynamic Redirect URL):**

```text
concat("https://autosaveks.com", http.request.uri.path)
```

**Status code:** `301`

**Preserve query string:** `ON`

---

### Rule 2 (Recommended): force HTTPS for apex host

If you already enabled **SSL/TLS → Edge Certificates → Always Use HTTPS**, you can skip this rule.

**Rule name:** `http-to-https-apex`

**If incoming requests match (Expression):**

```text
http.host eq "autosaveks.com" and http.request.scheme eq "http"
```

**Then (Dynamic Redirect URL):**

```text
concat("https://autosaveks.com", http.request.uri.path)
```

**Status code:** `301`

**Preserve query string:** `ON`

## Optional normalization (only if needed)

Your server already resolves `/pricing` → `/pricing/` with `308` and final `200`, which is acceptable.

If you want one-step redirects at edge, add a dedicated path rule only for known marketing pages (not all paths) to avoid breaking asset URLs.

## Verify after publishing rules

Run in terminal:

```powershell
curl.exe -I -L --max-redirs 10 https://www.autosaveks.com/pricing
curl.exe -I -L --max-redirs 10 http://autosaveks.com/pricing
curl.exe -I -L --max-redirs 10 https://autosaveks.com/pricing
curl.exe -I -L --max-redirs 10 https://autosaveks.com/pricing/
```

Expected:

- `www` and `http` variants end at `https://autosaveks.com/pricing/`.
- Final response is `HTTP 200`.

## Search Console steps

1. URL Inspection → inspect: `https://autosaveks.com/pricing/`
2. Click **Request Indexing**.
3. In **Sitemaps**, submit only: `https://autosaveks.com/sitemap-index.xml`
4. In **Pages** report, click **Validate Fix** for redirect errors.

## Notes

- Do not submit `www` sitemap/property as canonical.
- Keep internal links and canonicals on apex host `autosaveks.com`.
- No Astro code change is required for this specific issue.