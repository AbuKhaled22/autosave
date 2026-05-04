// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages' || process.env.GITHUB_PAGES === 'true';
const excludedSitemapSnippets = ['/coming-soon', '/draft', '/test', '/preview', '/staging', '/tmp', '/404'];
const fallbackCitySlug = 'riyadh';
const nonIndexableCitySlugs = [
  'jeddah',
  'dammam',
  'khobar',
  'makkah',
  'madinah',
  'buraidah',
  'abha',
  'tabuk',
  'taif',
  'hail',
  'al-ahsa',
  'najran',
  'jubail',
  'yanbu',
  'khamis-mushait',
];

const cityFallbackRedirects = Object.fromEntries(
  nonIndexableCitySlugs.flatMap((citySlug) => {
    // Keep fallback redirect coverage at city-root level only.
    // This avoids generating large volumes of low-value redirect documents for city-service combinations.
    return [
      [`/services/${citySlug}/`, `/services/${fallbackCitySlug}/`],
      [`/en/services/${citySlug}/`, `/en/services/${fallbackCitySlug}/`],
    ];
  })
);

/**
 * Exclude non-indexable and utility URLs from sitemap output.
 * @param {string} page
 */
function shouldIncludeSitemapPage(page) {
  const pathname = new URL(page, 'https://autosaveks.com').pathname.toLowerCase();
  return !excludedSitemapSnippets.some((snippet) => pathname.includes(snippet));
}

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://AbuKhaled22.github.io' : 'https://autosaveks.com',
  base: isGitHubPages ? '/autosave' : '/',
  trailingSlash: 'always',
  redirects: {
    '/authorized-maintenance-center': '/workshop',
    '/en/authorized-maintenance-center': '/en/workshop',
    '/authorized-installment-center': '/workshop',
    '/en/authorized-installment-center': '/en/workshop',
    ...cityFallbackRedirects,
  },
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: shouldIncludeSitemapPage,
      i18n: {
        defaultLocale: 'ar',
        locales: {
          ar: 'ar',
          en: 'en',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
