// @ts-check
import { defineConfig } from 'astro/config';
import { SITE_URL } from './src/data/site.ts';

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: [mdx(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
