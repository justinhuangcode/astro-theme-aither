import { getCollection } from 'astro:content';

function normalizeContentEntryLocale(entryLocale) {
  switch (entryLocale?.toLowerCase()) {
    case 'zh-cn':
      return 'zh-CN';
    case 'zh-tw':
      return 'zh-TW';
    case 'pt-br':
      return 'pt-BR';
    default:
      return entryLocale;
  }
}

export function isLocalizedEntry(entry, locale) {
  const [entryLocale] = entry.id.split('/');
  return normalizeContentEntryLocale(entryLocale) === locale;
}

export function sortEntriesByPinnedDate(a, b) {
  if (a.data.pinned !== b.data.pinned) return a.data.pinned ? -1 : 1;
  return b.data.date.getTime() - a.data.date.getTime();
}

export async function getLocalizedCollectionEntries(collection, locale) {
  const allEntries = await getCollection(collection);
  return allEntries.filter((entry) => isLocalizedEntry(entry, locale)).sort(sortEntriesByPinnedDate);
}

export async function getLocalizedPosts(locale) {
  return getLocalizedCollectionEntries('posts', locale);
}

export function getEntrySlug(entryId) {
  return entryId.replace(/^[^/]+\//, '');
}
