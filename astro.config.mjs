import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

// REMOVE the import and usage of sanityIntegration

export default defineConfig({
  output: 'server', // allows both static and client-side routes
  adapter: netlify(),
  integrations: [react()],
});
