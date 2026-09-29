import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production: https://westcoast.ma (served at domain root)
const site = 'https://westcoast.ma';
const base = '/';

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
