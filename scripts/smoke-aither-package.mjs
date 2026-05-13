import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

import aither, { aither as namedAither } from '@aither/astro';
import { aitherConfig } from '@aither/astro/config';
import {
  AGENT_PROTOCOL_VERSION,
  createAitherAgentProtocolRuntime,
} from '@aither/astro/agent-protocol';
import {
  AITHER_CRISP_LOCALES,
  AITHER_DEFAULT_LOCALE,
  AITHER_GISCUS_LOCALES,
  AITHER_HTML_LANGS,
  AITHER_INTL_LOCALES,
  AITHER_LOCALE_LABELS,
  AITHER_LOCALES,
  AITHER_NODE_RANGE,
} from '@aither/astro/constants';
import {
  AITHER_LOCALE_BANNER_DISMISSED_SESSION_KEY,
  AITHER_PREFERRED_LOCALE_STORAGE_KEY,
  detectAitherLocaleFromLanguageTag,
  getAitherLocalizedPath,
  getAitherLocaleBasePath,
  getAitherLocaleFromUrl,
  isAitherLocale,
  resolveAitherLocale,
  stripAitherLocalePrefix,
} from '@aither/astro/locale';
import {
  aitherContentDate,
  createAitherContentSchema,
  isoDateOnly,
  isoDateTimeWithSeconds,
} from '@aither/astro/content';
import { aitherMarkdownConfig } from '@aither/astro/markdown';
import {
  createAitherSiteContentRuntime,
  stripHtmlTags,
  toAbsoluteSiteUrl,
} from '@aither/astro/site-content';
import { defineAitherSiteConfig } from '@aither/astro/site';
import { z } from 'astro/zod';

const packageDir = path.join(process.cwd(), 'packages', 'aither-astro');
const packageManifest = JSON.parse(
  await readFile(path.join(packageDir, 'package.json'), 'utf8'),
);

assert.equal(aither, namedAither);
assert.equal(typeof aither, 'function');
assert.equal(packageManifest.name, '@aither/astro');
assert.equal(
  packageManifest.description,
  'Astro integration and shared runtime helpers for Aither sites.',
);
assert.equal(packageManifest.publishConfig?.access, 'public');
assert.equal(packageManifest.publishConfig?.provenance, true);
assert.equal(packageManifest.peerDependencies?.astro, '^6.0.0');
assert.ok(packageManifest.keywords.includes('astro'));
assert.ok(packageManifest.keywords.includes('withastro'));
assert.ok(packageManifest.keywords.includes('astro-integration'));
assert.ok(packageManifest.files.includes('README.md'));
assert.ok(packageManifest.files.includes('LICENSE'));

const integration = aither();
assert.equal(integration.name, '@aither/astro');
assert.equal(
  typeof integration.hooks['astro:config:setup'],
  'function',
  'integration should expose astro:config:setup',
);

assert.throws(
  () =>
    integration.hooks['astro:config:setup']({
      config: {
        integrations: [{ name: '@astrojs/mdx' }],
      },
      logger: {
        info() {},
      },
      updateConfig() {},
    }),
  /astro-expressive-code to run before @astrojs\/mdx/,
  'integration should fail fast when mdx is present without expressive code',
);

const config = aitherConfig();
assert.deepEqual(config.i18n, {
  defaultLocale: AITHER_DEFAULT_LOCALE,
  locales: [...AITHER_LOCALES],
  routing: { prefixDefaultLocale: false },
});
assert.equal(config.integrations?.length, 4);
assert.equal(config.vite?.plugins?.length, 1);
assert.equal(config.markdown?.remarkPlugins?.length, 2);
assert.equal(config.markdown?.rehypePlugins?.length, 2);

assert.equal(AITHER_DEFAULT_LOCALE, 'en-US');
assert.equal(AITHER_LOCALES.length, 11);
assert.equal(AITHER_LOCALE_LABELS['zh-CN'], '简体中文');
assert.equal(AITHER_INTL_LOCALES['pt-BR'], 'pt-BR');
assert.equal(AITHER_HTML_LANGS['ru-RU'], 'ru-RU');
assert.equal(AITHER_CRISP_LOCALES['zh-CN'], 'zh');
assert.equal(AITHER_GISCUS_LOCALES['zh-TW'], 'zh-TW');
assert.equal(AITHER_NODE_RANGE, '^20.19.1 || >=22.12.0');
assert.equal(AGENT_PROTOCOL_VERSION, '2.0.0');
assert.equal(AITHER_PREFERRED_LOCALE_STORAGE_KEY, 'preferred-locale');
assert.equal(AITHER_LOCALE_BANNER_DISMISSED_SESSION_KEY, 'locale-banner-dismissed');
assert.equal(isAitherLocale('en-US'), true);
assert.equal(isAitherLocale('jp'), false);
assert.equal(resolveAitherLocale('zh-CN'), 'zh-CN');
assert.equal(resolveAitherLocale('jp'), 'en-US');
assert.equal(getAitherLocaleFromUrl(new URL('https://example.com/zh-TW/posts/hello-world/')), 'zh-TW');
assert.equal(getAitherLocaleBasePath('en-US'), '');
assert.equal(getAitherLocaleBasePath('pt-BR'), '/pt-BR');
assert.equal(stripAitherLocalePrefix('/zh-CN/posts/hello-world/'), '/posts/hello-world/');
assert.equal(getAitherLocalizedPath('/posts/hello-world/', 'zh-CN'), '/zh-CN/posts/hello-world/');
assert.equal(detectAitherLocaleFromLanguageTag('zh-Hant-TW'), 'zh-TW');
assert.equal(detectAitherLocaleFromLanguageTag('pt-BR'), 'pt-BR');

assert.equal(isoDateOnly.safeParse('2026-03-20').success, true);
assert.equal(
  isoDateTimeWithSeconds.safeParse('2026-03-20T09:30:00+08:00').success,
  true,
);
assert.equal(aitherContentDate.parse('2026-03-20').toISOString(), '2026-03-20T00:00:00.000Z');
const markdownConfig = aitherMarkdownConfig();
assert.equal(markdownConfig.remarkPlugins.length, 2);
assert.equal(markdownConfig.rehypePlugins.length, 2);

const schema = createAitherContentSchema({ image: () => z.string() });
const parsed = schema.parse({
  title: 'Aither',
  date: '2026-03-20',
});
assert.equal(parsed.title, 'Aither');
assert.equal(parsed.category, 'General');
assert.equal(parsed.pinned, false);

const siteConfig = defineAitherSiteConfig({
  name: 'Aither',
  title: 'An AI-native Astro theme built around beautiful text.',
  description: 'An AI-native Astro theme built around beautiful text.',
  author: { name: 'Aither', avatar: '' },
  url: 'https://example.com',
  ogImage: '/og/index.png',
  images: { logoLight: '/logo.svg', logoDark: '/logo-dark.svg' },
  social: [],
  blog: { paginationSize: 20, timeZone: 'Asia/Shanghai' },
  analytics: { googleAnalyticsId: '' },
  crisp: { websiteId: '' },
  ui: {
    defaultMode: 'system',
    defaultStyle: 'default',
    enableModeSwitch: true,
    showMoreThemesMenu: true,
  },
  giscus: {
    repo: '',
    repoId: '',
    category: 'Announcements',
    categoryId: '',
    mapping: 'pathname',
    reactionsEnabled: true,
    emitMetadata: false,
    inputPosition: 'top',
  },
  sections: [],
  nav: [{ labelKey: 'blog', href: '/' }],
  footer: { copyrightYear: 'auto', sections: [] },
});
assert.equal(siteConfig.name, 'Aither');

assert.equal(stripHtmlTags('<p>Hello <strong>Aither</strong></p>'), 'Hello Aither');
assert.equal(toAbsoluteSiteUrl('/posts/hello-world/', 'https://example.com'), 'https://example.com/posts/hello-world/');

const samplePostsByLocale = {
  'en-US': [
    {
      id: 'en-US/hello-world',
      data: {
        title: 'Hello World',
        description: 'First post',
        date: new Date('2026-03-20T00:00:00Z'),
        category: 'General',
        tags: ['intro'],
        pinned: true,
      },
      body: 'English body',
    },
    {
      id: 'en-US/second-post',
      data: {
        title: 'Second Post',
        description: 'Second',
        date: new Date('2026-03-19T00:00:00Z'),
        category: 'General',
        tags: ['news'],
        pinned: false,
      },
      body: 'Second body',
    },
  ],
  'zh-CN': [
    {
      id: 'zh-CN/hello-world',
      data: {
        title: '你好，世界',
        description: '第一篇',
        date: new Date('2026-03-20T00:00:00Z'),
        category: 'General',
        tags: ['intro'],
        pinned: true,
      },
      body: '中文正文',
    },
  ],
};

const getLocalizedPath = (pathName, locale) =>
  locale === 'en-US' ? pathName : `/${locale}${pathName}`;

const siteContentRuntime = createAitherSiteContentRuntime({
  defaultLocale: 'en-US',
  getLocaleBasePath: (locale) => (locale === 'en-US' ? '' : `/${locale}`),
  getLocalizedPath,
  getMessages: (locale) => ({
    about: {
      title: locale === 'en-US' ? 'About' : '关于',
      description: locale === 'en-US' ? '<p>About Aither</p>' : '<p>关于 Aither</p>',
    },
  }),
  getPostSlug: (entryId) => entryId.replace(/^[^/]+\//, ''),
  getPostsByLocale: async (locale) => samplePostsByLocale[locale] ?? [],
  htmlLangs: { 'en-US': 'en-US', 'zh-CN': 'zh-CN' },
  localeLabels: { 'en-US': 'English', 'zh-CN': '简体中文' },
  pageSize: 1,
  siteDescription: 'An AI-native Astro theme built around beautiful text.',
  siteName: 'Aither',
  siteUrl: 'https://example.com',
});

assert.equal(siteContentRuntime.getLocaleHomePath('en-US'), '/');
assert.equal(siteContentRuntime.getLocaleHomePath('zh-CN'), '/zh-CN');
assert.equal(siteContentRuntime.getPostPath('en-US', 'hello-world'), '/posts/hello-world/');
assert.equal(siteContentRuntime.getPostPath('zh-CN', 'hello-world'), '/zh-CN/posts/hello-world/');
assert.equal(siteContentRuntime.getPostMarkdownPath('en-US', 'hello-world'), '/posts/hello-world.md');
assert.equal(siteContentRuntime.getPostOgImagePath('zh-CN', 'hello-world'), '/og/zh-CN/hello-world.png');
assert.equal(siteContentRuntime.buildWebsiteJsonLd('zh-CN').inLanguage, 'zh-CN');
assert.deepEqual(await siteContentRuntime.getPaginationStaticPaths('en-US'), [{ params: { num: '2' } }]);
assert.equal((await siteContentRuntime.getPaginatedPosts('en-US', 1)).posts.length, 1);
assert.equal((await siteContentRuntime.getPostStaticPaths('en-US')).length, 2);
assert.ok((await siteContentRuntime.createAboutMarkdownResponse('en-US').text()).includes('About Aither'));
assert.ok((await siteContentRuntime.createLlmsResponse('en-US', 'summary').then((response) => response.text())).includes('# Aither'));
assert.equal((await siteContentRuntime.createRssOptions('en-US')).items.length, 2);

const postsApiPayload = JSON.parse(await (await siteContentRuntime.createPostsApiResponse(['en-US', 'zh-CN'])).text());
assert.equal(postsApiPayload['en-US'][0].slug, 'hello-world');
assert.equal(postsApiPayload['zh-CN'][0].markdown, 'https://example.com/zh-CN/posts/hello-world.md');

const agentProtocolRuntime = createAitherAgentProtocolRuntime({
  defaultLocale: 'en-US',
  getAboutMarkdownPath: siteContentRuntime.getAboutMarkdownPath,
  getLocalizedPath,
  getPostMarkdownPath: siteContentRuntime.getPostMarkdownPath,
  getPostPath: siteContentRuntime.getPostPath,
  getPostSlug: (entryId) => entryId.replace(/^[^/]+\//, ''),
  getPostsByLocale: async (locale) => samplePostsByLocale[locale] ?? [],
  getRssPath: siteContentRuntime.getRssPath,
  locales: ['en-US', 'zh-CN'],
  siteDescription: 'An AI-native Astro theme built around beautiful text.',
  siteName: 'Aither',
  siteUrl: 'https://example.com',
  toAbsoluteSiteUrl: siteContentRuntime.toAbsoluteSiteUrl,
});

assert.equal(agentProtocolRuntime.buildAgentDocumentUrls('en-US').protocol, 'https://example.com/protocol.json');
assert.ok((await agentProtocolRuntime.createSkillResponse().text()).includes('protocol.json'));
assert.equal((await agentProtocolRuntime.createProtocolManifest().json()).protocol, 'aither-agent-v2');
assert.equal((await agentProtocolRuntime.createAgentHomeResponse('en-US').then((response) => response.json())).site.default_locale, 'en-US');
assert.ok((await agentProtocolRuntime.createPolicyResponse('en-US').text()).includes('## Discovery Order'));
assert.equal((await agentProtocolRuntime.createProtocolSchemaResponse().json()).$schema, 'https://json-schema.org/draft/2020-12/schema');
assert.equal((await agentProtocolRuntime.createAgentHomeSchemaResponse().json()).title, 'Aither Agent Home Schema');

assert.deepEqual(packageManifest.exports['./posts'], {
  types: './posts.d.ts',
  default: './posts.mjs',
});
assert.deepEqual(packageManifest.exports['./site-content'], {
  types: './site-content.d.ts',
  default: './site-content.mjs',
});
assert.deepEqual(packageManifest.exports['./agent-protocol'], {
  types: './agent-protocol.d.ts',
  default: './agent-protocol.mjs',
});
assert.deepEqual(packageManifest.exports['./locale'], {
  types: './locale.d.ts',
  default: './locale.mjs',
});
assert.deepEqual(packageManifest.exports['./markdown'], {
  types: './markdown.d.ts',
  default: './markdown.mjs',
});

const postsRuntimeSource = await readFile(path.join(packageDir, 'posts.mjs'), 'utf8');
const postsTypesSource = await readFile(path.join(packageDir, 'posts.d.ts'), 'utf8');

for (const fragment of [
  'export function isLocalizedEntry',
  'export function sortEntriesByPinnedDate',
  'export async function getLocalizedCollectionEntries',
  'export async function getLocalizedPosts',
  'export function getEntrySlug',
]) {
  assert.ok(postsRuntimeSource.includes(fragment), `posts.mjs should include: ${fragment}`);
}

for (const fragment of [
  'export declare function isLocalizedEntry',
  'export declare function sortEntriesByPinnedDate',
  'export declare function getLocalizedCollectionEntries',
  'export declare function getLocalizedPosts',
  'export declare function getEntrySlug',
]) {
  assert.ok(postsTypesSource.includes(fragment), `posts.d.ts should include: ${fragment}`);
}

assert.deepEqual(
  packageManifest.files.filter((file) => file.startsWith('posts.')).sort(),
  ['posts.d.ts', 'posts.mjs'],
);
assert.deepEqual(
  packageManifest.files.filter((file) => file.startsWith('site-content.')).sort(),
  ['site-content.d.ts', 'site-content.mjs'],
);
assert.deepEqual(
  packageManifest.files.filter((file) => file.startsWith('agent-protocol.')).sort(),
  ['agent-protocol.d.ts', 'agent-protocol.mjs'],
);

console.log('Aither package smoke tests passed.');
