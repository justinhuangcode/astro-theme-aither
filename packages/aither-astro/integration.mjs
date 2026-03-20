import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { AITHER_DEFAULT_LOCALE, AITHER_LOCALES } from './constants.mjs';

const BUNDLED_INTEGRATION_FACTORIES = [
  ['@astrojs/react', react],
  ['@astrojs/mdx', mdx],
  ['@astrojs/sitemap', sitemap],
];

export function aither(options = {}) {
  const {
    defaultLocale = AITHER_DEFAULT_LOCALE,
    locales = AITHER_LOCALES,
    prefixDefaultLocale = false,
  } = options;

  return {
    name: '@aither/astro',
    hooks: {
      'astro:config:setup'({ config, logger, updateConfig }) {
        const activeIntegrationNames = new Set(
          (config.integrations ?? []).map((integration) => integration.name),
        );

        const integrations = [];
        const skipped = [];

        for (const [name, createIntegration] of BUNDLED_INTEGRATION_FACTORIES) {
          if (activeIntegrationNames.has(name)) {
            skipped.push(name);
            continue;
          }
          integrations.push(createIntegration());
        }

        updateConfig({
          integrations,
          i18n: {
            defaultLocale,
            locales: [...locales],
            routing: {
              prefixDefaultLocale,
            },
          },
          vite: {
            plugins: [tailwindcss()],
          },
        });

        if (skipped.length > 0) {
          logger.info(
            `@aither/astro reused existing integrations: ${skipped.join(', ')}`,
          );
        }
      },
    },
  };
}

export default aither;
