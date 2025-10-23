import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

// ✅ Astro configuration for Netlify (server rendering)
export default defineConfig({
  output: 'server', // enables SSR
  adapter: netlify(),
  site: 'https://amicbridge.com', // your live site URL
});
