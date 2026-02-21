// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = !!process.env.GITHUB_ACTIONS;

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://AbuKhaled22.github.io' : 'https://autosaveks.com',
  base: isGitHubPages ? '/autosave' : '/',
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
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
