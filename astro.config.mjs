import { defineConfig } from 'astro/config';
import aither from '@aither/astro';

export default defineConfig({
  site: 'https://astro-theme-aither.pages.dev',
  vite: {
    build: {
      // Markmap support is lazy-loaded and intentionally forms a larger isolated chunk.
      // Raise the warning threshold to keep validate noise aligned with the real risk surface.
      chunkSizeWarningLimit: 650,
    },
  },
  integrations: [aither()],
});
