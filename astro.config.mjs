import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production: https://westcoast.ma (served at domain root)
const site = 'https://westcoast.ma';
const base = '/';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  redirects: {
    '/blog/acheter-mohammedia-2026': '/blog/comment-acheter-un-bien-a-mohammedia',
    '/blog/daam-sakane-guide': '/blog/daam-sakane-guide-complet',
    '/blog/studio-ou-appartement': '/blog/studio-ou-appartement-familial-comment-choisir',
    '/blog/investir-mohammedia': '/blog/investir-a-mohammedia-rendement-opportunites',
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  compressHTML: true,
});
