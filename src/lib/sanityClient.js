// src/lib/sanityClient.js
import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'pf4xqd3k',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-06-01', // Set to today's date or Sanity API version
});
