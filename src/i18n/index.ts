import {
  AITHER_CRISP_LOCALES,
  AITHER_DEFAULT_LOCALE,
  AITHER_GISCUS_LOCALES,
  AITHER_HTML_LANGS,
  AITHER_INTL_LOCALES,
  AITHER_LOCALE_LABELS,
  AITHER_LOCALES,
  type AitherLocale,
} from '@aither/astro/constants';
import {
  AITHER_LOCALE_BANNER_DISMISSED_SESSION_KEY,
  AITHER_PREFERRED_LOCALE_STORAGE_KEY,
  detectAitherLocaleFromLanguageTag,
  getAitherLocaleBasePath,
  getAitherLocaleFromUrl,
  getAitherLocalizedPath,
  isAitherLocale,
  resolveAitherLocale,
  stripAitherLocalePrefix,
} from '@aither/astro/locale';
import { en } from './messages/en';
import { zhHans } from './messages/zh-hans';
import { zhHant } from './messages/zh-hant';
import { ko } from './messages/ko';
import { fr } from './messages/fr';
import { de } from './messages/de';
import { it } from './messages/it';
import { es } from './messages/es';
import { ru } from './messages/ru';
import { id } from './messages/id';
import { ptBr } from './messages/pt-br';

export type Messages = typeof en;

const messages: Record<Locale, Messages> = {
  en,
  'zh-hans': zhHans,
  'zh-hant': zhHant,
  ko,
  fr,
  de,
  it,
  es,
  ru,
  id,
  'pt-br': ptBr,
};

export const locales = AITHER_LOCALES;
export type Locale = AitherLocale;
export const defaultLocale: Locale = AITHER_DEFAULT_LOCALE;
export const nonDefaultLocales = locales.filter(
  (locale): locale is Exclude<Locale, typeof defaultLocale> => locale !== defaultLocale,
);

export const localeLabels: Record<Locale, string> = AITHER_LOCALE_LABELS;
export const preferredLocaleStorageKey = AITHER_PREFERRED_LOCALE_STORAGE_KEY;
export const localeBannerDismissedSessionKey = AITHER_LOCALE_BANNER_DISMISSED_SESSION_KEY;
export const crispLocales: Record<Locale, string> = AITHER_CRISP_LOCALES;
export const giscusLocales: Record<Locale, string> = AITHER_GISCUS_LOCALES;

export const isLocale = isAitherLocale;
export const resolveLocale = resolveAitherLocale;

function hasMessageKey<T extends object>(
  messages: T,
  key: string,
): key is Extract<keyof T, string> {
  return Object.prototype.hasOwnProperty.call(messages, key);
}

export function getMessages(locale: string = defaultLocale): Messages {
  return messages[resolveLocale(locale)];
}

export const getLocaleFromUrl = getAitherLocaleFromUrl;

export function translateTag(key: string, locale: string = defaultLocale): string {
  const { tags } = getMessages(locale);
  return hasMessageKey(tags, key) ? tags[key] : key;
}

export function translateCategory(key: string, locale: string = defaultLocale): string {
  const { categories } = getMessages(locale);
  return hasMessageKey(categories, key) ? categories[key] : key;
}

export function translateNav(key: string, locale: string = defaultLocale): string {
  const { nav } = getMessages(locale);
  return hasMessageKey(nav, key) ? nav[key] : key;
}

/** Map internal locale to Intl/BCP-47 locale for date formatting etc. */
export const intlLocales: Record<Locale, string> = AITHER_INTL_LOCALES;

/** Map internal locale to HTML lang attribute / inLanguage value */
export const htmlLangs: Record<Locale, string> = AITHER_HTML_LANGS;

export const getLocalizedPath = getAitherLocalizedPath;
export const getLocaleBasePath = getAitherLocaleBasePath;
export const stripLocalePrefix = stripAitherLocalePrefix;
export const detectLocaleFromLanguageTag = detectAitherLocaleFromLanguageTag;
