import { defineCollection, type SchemaContext } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Base schema shared by all content sections (posts, translations, notes, etc.)
 * To add a new section:
 * 1. Copy the `posts` definition below, change the name and base path
 * 2. Add matching config in src/config/site.ts → sections
 * 3. Create content in src/content/{section-id}/{locale}/
 */
const contentSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    category: z.string().default('General'),
    image: image().optional(),
    tags: z.array(z.string()).optional(),
    pinned: z.boolean().default(false),
  });

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
