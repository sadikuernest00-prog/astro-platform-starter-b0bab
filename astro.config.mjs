import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/static';

// ✅ Static build (no server functions)
export default defineConfig({
  output: 'static',
  adapter: netlify(),
  site: 'https://amicbridge.com',
});
