import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// Astro configuration
export default defineConfig({
  // Enable server-side rendering (for private or restricted pages)
  output: 'server',

  // Use the Netlify adapter for deployment
  adapter: netlify({
    edge: false, // keep this false unless you specifically need Netlify Edge
  }),

  // Basic site settings
  site: 'https://amicbridge.com', // replace with your real domain if you want
  integrations: [],

  vite: {
    // Optional: remove warnings if not needed
    build: {
      chunkSizeWarningLimit: 1000,
    },
  },
});
