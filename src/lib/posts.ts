import {
  getEntrySlug,
  getLocalizedCollectionEntries,
  getLocalizedPosts,
  type AitherLocalizedEntry,
  type AitherPostEntry,
} from '@aither/astro/posts';
import type { CollectionKey } from 'astro:content';
import type { Locale } from '@/i18n';

export type LocalizedEntry<K extends CollectionKey> = AitherLocalizedEntry<K>;
export type PostEntry = AitherPostEntry;

export async function getPostsByLocale(locale: Locale) {
  return getLocalizedPosts(locale);
}

/** Generic: fetch any content collection filtered by locale, sorted by pin + date */
export async function getContentByLocale<K extends CollectionKey>(
  collection: K,
  locale: Locale,
): Promise<LocalizedEntry<K>[]> {
  return getLocalizedCollectionEntries(collection, locale);
}

/** Strip the locale prefix from post ID to get the slug */
export function getSlug(postId: string): string {
  return getEntrySlug(postId);
}
