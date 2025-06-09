import { defineConfig } from 'astro/config';
import sanityIntegration from '@sanity/astro';
import react from '@astrojs/react';

export default defineConfig({
  output: 'server', // allows both static and client-side routes
  integrations: [
    sanityIntegration({
      projectId: 'pf4xqd3k',
      dataset: 'production',
      useCdn: true, // set false in dev if you want drafts
      studioBasePath: '/admin', // optional, embeds your Studio
    }),
    react(),
  ],
});
