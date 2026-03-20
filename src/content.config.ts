import { defineCollection, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { createAitherContentSchema } from '@aither/astro/content';

/**
 * Base schema shared by all content sections (posts, translations, notes, etc.)
 * To add a new section:
 * 1. Copy the `posts` definition below, change the name and base path
 * 2. Add matching config in src/config/site.ts → sections
 * 3. Create content in src/content/{section-id}/{locale}/
 */
const contentSchema = ({ image }: SchemaContext) => createAitherContentSchema({ image });

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
  schema: contentSchema,
});

// --- Add new sections below (copy & rename) ---
// const translations = defineCollection({
//   loader: glob({ pattern: '**/*.mdx', base: './src/content/translations' }),
//   schema: contentSchema,
// });

export const collections = { posts };
