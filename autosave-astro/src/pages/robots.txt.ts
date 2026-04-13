import type { APIRoute } from 'astro';

const getRobotsTxt = (hostName: string, sitemapURL: URL) => `\
User-agent: *
Allow: /

# Utility and non-indexable URL groups
Disallow: /coming-soon/
Disallow: /draft/
Disallow: /test/
Disallow: /preview/

# Avoid crawling duplicate tracking URLs
Disallow: /*?*utm_
Disallow: /*?*gclid=
Disallow: /*?*fbclid=

# AI discovery manifests
Allow: /llms.txt
Allow: /llms-en.txt
Allow: /llms-ar.txt
Allow: /llms-full.txt
Allow: /llm-en.text
Allow: /llm-ar.text

Host: ${hostName}
Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const siteOrigin = site?.origin ?? 'https://autosaveks.com';
  const hostName = new URL(siteOrigin).hostname;
  const sitemapURL = new URL('sitemap-index.xml', siteOrigin);
  return new Response(getRobotsTxt(hostName, sitemapURL), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
