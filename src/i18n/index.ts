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

const messages: Record<string, Messages> = {
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

export const locales = ['en', 'zh-hans', 'zh-hant', 'ko', 'fr', 'de', 'it', 'es', 'ru', 'id', 'pt-br'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
export const nonDefaultLocales = locales.filter(
  (locale): locale is Exclude<Locale, typeof defaultLocale> => locale !== defaultLocale,
);

function escapeForRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const localePrefixPattern = new RegExp(
  `^\\/(${nonDefaultLocales.map(escapeForRegex).join('|')})(?=\\/|$)`,
);

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  'zh-hans': '简体中文',
  'zh-hant': '繁體中文',
  ko: '한국어',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  es: 'Español',
  ru: 'Русский',
  id: 'Bahasa Indonesia',
  'pt-br': 'Português (BR)',
};

export function getMessages(locale: string = 'en'): Messages {
  return messages[locale] ?? en;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  if (segment && locales.includes(segment as Locale)) {
    return segment as Locale;
  }
  return defaultLocale;
}

export function translateTag(key: string, locale: string = 'en'): string {
  const m = getMessages(locale);
  return m.tags[key] ?? key;
}

export function translateCategory(key: string, locale: string = 'en'): string {
  const m = getMessages(locale);
  return m.categories[key] ?? key;
}

/** Map internal locale to Intl/BCP-47 locale for date formatting etc. */
export const intlLocales: Record<Locale, string> = {
  en: 'en-US',
  'zh-hans': 'zh-CN',
  'zh-hant': 'zh-TW',
  ko: 'ko-KR',
  fr: 'fr-FR',
  de: 'de-DE',
  it: 'it-IT',
  es: 'es-ES',
  ru: 'ru-RU',
  id: 'id-ID',
  'pt-br': 'pt-BR',
};

/** Map internal locale to HTML lang attribute / inLanguage value */
export const htmlLangs: Record<Locale, string> = {
  en: 'en',
  'zh-hans': 'zh-CN',
  'zh-hant': 'zh-TW',
  ko: 'ko',
  fr: 'fr',
  de: 'de',
  it: 'it',
  es: 'es',
  ru: 'ru',
  id: 'id',
  'pt-br': 'pt-BR',
};

export function getLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = stripLocalePrefix(path);
  return locale === defaultLocale ? cleanPath : `${getLocaleBasePath(locale)}${cleanPath}`;
}

export function getLocaleBasePath(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

export function stripLocalePrefix(path: string): string {
  const cleanPath = path.replace(localePrefixPattern, '');
  return cleanPath || '/';
}
