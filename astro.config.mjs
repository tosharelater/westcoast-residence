import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages (org project site)
const site = 'https://tosharelater.github.io';
const base = '/westcoast-residence';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  compressHTML: true,
});
