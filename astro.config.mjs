import { defineConfig } from 'astro/config';
import aither from '@aither/astro';

export default defineConfig({
  site: 'https://astro-theme-aither.pages.dev',
  integrations: [aither()],
});
