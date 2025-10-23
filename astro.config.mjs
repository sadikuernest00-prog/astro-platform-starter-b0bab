import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ✅ Works perfectly with static output (for Netlify)
export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
});
