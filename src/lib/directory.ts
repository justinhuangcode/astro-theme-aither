import { directoryGroupsSource, type LocalizedDirectoryValue } from '@/data/directory-heolink';
import { siteConfig } from '@/config/site';
import { getLocalizedPath, type Locale } from '@/i18n';

export interface DirectoryLink {
  spec: {
    displayName: string;
    description: string;
    url: string;
    logo?: string;
  };
  annotations: {
    show_link_anonymous: 'true' | 'false';
    to_post_radio: 'true' | 'false';
  };
  href: string;
  external: boolean;
  displayLogo: string;
}

export interface DirectoryGroup {
  spec: {
    displayName: string;
  };
  annotations: {
    icon: string;
    show_on_heolink: 'true' | 'false';
    show_group_anonymous: 'true' | 'false';
  };
  links: DirectoryLink[];
  anchorId: string;
}

interface DirectorySearchConfig {
  engine: string;
  icon: string;
  placeholder: string;
  isPostChat: boolean;
  isLocal: boolean;
}

export interface DirectoryContent {
  pageTitle: string;
  siteTitle: string;
  siteSubtitle: string;
  backgroundColor: string;
  showCoverImage: boolean;
  coverImage: string;
  siteLogo: string;
  footerThemeAttribution: string;
  footerThemeUrl: string;
  footerIcp: string;
  footerIcp2: string;
  consoleHref: string;
  consoleTitle: string;
  postchatEnabled: boolean;
  postchatButtonText: string;
  postchatButtonHref: string;
  search: DirectorySearchConfig;
  groups: DirectoryGroup[];
}

const SEARCH_ICONS = {
  baidu: '/directory/heolink/images/search/baidu.svg',
  google: '/directory/heolink/images/search/google.svg',
  bing: '/directory/heolink/images/search/bing.svg',
  sougou: '/directory/heolink/images/search/sougou.svg',
  local: '/directory/heolink/images/search/local.svg',
  postchat: '/directory/heolink/images/search/postchat.svg',
} as const;

function createDirectoryAnchorId(input: string, index: number): string {
  const slug = input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return slug ? `directory-group-${index + 1}-${slug}` : `directory-group-${index + 1}`;
}

function resolveLocalizedValue(locale: Locale, value: LocalizedDirectoryValue): string {
  if (typeof value === 'string') {
    return value;
  }

  return value[locale] ?? value.en ?? value['zh-hans'] ?? value['zh-hant'] ?? '';
}

function resolveSearchConfig(locale: Locale): DirectorySearchConfig {
  const rawEngine = siteConfig.directoryHeolink?.searchEngine?.trim() ?? '';
  const normalizedEngine =
    rawEngine !== ''
      ? rawEngine
      : locale === 'zh-hans' || locale === 'zh-hant'
        ? 'https://www.baidu.com/s?wd='
        : 'https://www.google.com/search?q=';

  if (normalizedEngine === 'postchat') {
    return {
      engine: normalizedEngine,
      icon: SEARCH_ICONS.postchat,
      placeholder: siteConfig.directoryHeolink?.searchPlaceholder ?? '输入搜索内容...',
      isPostChat: true,
      isLocal: false,
    };
  }

  if (normalizedEngine === 'local') {
    return {
      engine: normalizedEngine,
      icon: SEARCH_ICONS.local,
      placeholder: siteConfig.directoryHeolink?.searchPlaceholder ?? '输入搜索内容...',
      isPostChat: false,
      isLocal: true,
    };
  }

  const searchEngineMap = [
    ['baidu', 'baidu.com/s?wd='],
    ['google', 'google.com/search?q='],
    ['bing', 'bing.com/search?q='],
    ['bing', 'cn.bing.com/search?q='],
    ['sougou', 'sogou.com/web?query='],
  ] as const;

  const searchKey =
    searchEngineMap.find(([, match]) => normalizedEngine.includes(match))?.[0] ?? 'google';

  return {
    engine: normalizedEngine,
    icon: SEARCH_ICONS[searchKey],
    placeholder: siteConfig.directoryHeolink?.searchPlaceholder ?? '输入搜索内容...',
    isPostChat: false,
    isLocal: false,
  };
}

function resolveDirectoryHref(locale: Locale, url: string): { href: string; external: boolean } {
  if (url.startsWith('/')) {
    return {
      href: getLocalizedPath(url, locale),
      external: false,
    };
  }

  return {
    href: url || '#',
    external: true,
  };
}

function resolveDirectoryLogo(url: string, logo?: string): string {
  if (logo) {
    return logo;
  }

  const iconApi =
    siteConfig.directoryHeolink?.iconApi?.trim() || 'https://api.zhheo.com/favicon/get.php?url={url}';
  return iconApi.replace('{url}', url);
}

export function getDirectoryContent(locale: Locale): DirectoryContent {
  const siteTitle = siteConfig.directoryHeolink?.siteTitle?.trim() || siteConfig.name;
  const siteSubtitle = siteConfig.directoryHeolink?.siteSubtitle?.trim() || siteConfig.description;
  const pageTitle =
    siteConfig.directoryHeolink?.indexTitle?.trim() || `${siteTitle} | ${siteConfig.name}`;

  const groups: DirectoryGroup[] = directoryGroupsSource.map((group, index) => {
    const displayName = resolveLocalizedValue(locale, group.spec.displayName);

    return {
      spec: {
        displayName,
      },
      annotations: {
        icon: group.annotations.icon,
        show_on_heolink: group.annotations.show_on_heolink ?? 'true',
        show_group_anonymous: group.annotations.show_group_anonymous ?? 'false',
      },
      links: group.links.map((link) => {
        const resolved = resolveDirectoryHref(locale, link.spec.url);
        return {
          spec: {
            displayName: resolveLocalizedValue(locale, link.spec.displayName),
            description: resolveLocalizedValue(locale, link.spec.description),
            url: link.spec.url,
            logo: link.spec.logo,
          },
          annotations: {
            show_link_anonymous: link.annotations?.show_link_anonymous ?? 'false',
            to_post_radio: link.annotations?.to_post_radio ?? 'false',
          },
          href: resolved.href,
          external: resolved.external,
          displayLogo: resolveDirectoryLogo(link.spec.url, link.spec.logo),
        };
      }),
      anchorId: createDirectoryAnchorId(displayName, index),
    };
  });

  return {
    pageTitle,
    siteTitle,
    siteSubtitle,
    backgroundColor: siteConfig.directoryHeolink?.backgroundColor?.trim() || '#f2f2f2',
    showCoverImage: siteConfig.directoryHeolink?.showCoverImage ?? true,
    coverImage:
      siteConfig.directoryHeolink?.coverImage?.trim() || '/directory/heolink/images/index_cover2.jpg',
    siteLogo:
      siteConfig.directoryHeolink?.logoImage?.trim() || '/directory/heolink/upload/logo_cover.png',
    footerThemeAttribution: 'Theme HeoLink by Halo',
    footerThemeUrl: 'https://github.com/zhheo/halo-theme-heolink',
    footerIcp: siteConfig.directoryHeolink?.indexIcp?.trim() || '',
    footerIcp2: siteConfig.directoryHeolink?.indexIcp2?.trim() || '',
    consoleHref: siteConfig.directoryHeolink?.consoleHref?.trim() || '',
    consoleTitle: siteConfig.directoryHeolink?.consoleTitle?.trim() || '管理后台',
    postchatEnabled: siteConfig.directoryHeolink?.postchatEnable ?? false,
    postchatButtonText: siteConfig.directoryHeolink?.postchatButtonText?.trim() || '智能对话',
    postchatButtonHref: siteConfig.directoryHeolink?.postchatButtonHref?.trim() || '',
    search: resolveSearchConfig(locale),
    groups,
  };
}
