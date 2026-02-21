import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const siteUrl = import.meta.env.SITE ?? 'https://autosave.sa';

  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap-index.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
