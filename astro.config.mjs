// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import { site } from './src/data/site.ts';

export default defineConfig({
  site: site.url,
  // Class-based scoping keeps component styles working on elements with spread attributes.
  scopedStyleStrategy: 'class',
  integrations: [sitemap(), icon()],
});
