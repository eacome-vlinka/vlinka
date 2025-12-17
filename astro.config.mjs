// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: "https://vlinka.com",
  base: process.env.GITHUB_PAGES === 'true' ? "/vlinka" : "/",
  i18n: {
    defaultLocale: "cn",
    locales: ["cn", "en"],
    routing: {
      prefixDefaultLocale: true
    }
  },
  redirects: {
    '/': '/cn/',
  },
});
