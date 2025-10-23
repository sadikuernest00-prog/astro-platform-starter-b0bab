import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ✅ Final config — works perfectly with Netlify and Tailwind
export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
});
