import {
  defineAitherSiteConfig,
  type AitherSiteConfig,
  type ContentSection,
  type FooterSection,
  type SocialLink,
} from '@aither/astro/site';

export type {
  AitherSiteConfig,
  ContentSection,
  FooterLink,
  FooterSection,
  SocialIcon,
  SocialLink,
} from '@aither/astro/site';

export const siteConfig = defineAitherSiteConfig({
  name: 'Aither',
  title: 'An AI-native Astro theme built around beautiful text.',
  description:
    'An AI-native Astro theme built around beautiful text.',
  author: {
    name: 'Aither',
    avatar: '/author-avatar.svg', // Import from src/assets/ for optimization, or use URL string
  },
  url: import.meta.env.SITE || 'https://astro-theme-aither.pages.dev',
  ogImage: '/og/index.png',
  images: {
    logoLight: '/logo.svg',
    logoDark: '/logo-dark.svg',
  },
  social: [
    {
      title: 'GitHub',
      href: 'https://github.com/justinhuangcode/astro-theme-aither',
      icon: 'github',
    },
    {
      title: 'Twitter',
      href: '',
      icon: 'x',
    },
    {
      title: 'Discord',
      href: '',
      icon: 'discord',
    },
    {
      title: 'Email',
      href: '',
      icon: 'mail',
    },
    {
      title: 'RSS',
      href: '/rss.xml',
      icon: 'rss',
    },
  ] satisfies SocialLink[],
  blog: {
    paginationSize: 20,
    timeZone: 'Asia/Shanghai',
  },
  analytics: {
    googleAnalyticsId: import.meta.env.PUBLIC_GA_ID || '',
  },
  crisp: {
    websiteId: import.meta.env.PUBLIC_CRISP_WEBSITE_ID || '',
  },
  // Optional WeChat JS-SDK share integration.
  // Requires an external signature endpoint because this theme is static by default.
  wechatShare: {
    enabled: import.meta.env.PUBLIC_WECHAT_SHARE_ENABLED === 'true',
    appId: import.meta.env.PUBLIC_WECHAT_APP_ID || '',
    signatureEndpoint: import.meta.env.PUBLIC_WECHAT_SIGNATURE_ENDPOINT || '',
    jsSdkUrl: 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js',
  },
  ui: {
    defaultMode: 'system' as const,
    defaultStyle: 'default' as const,
    enableModeSwitch: true,
    showMoreThemesMenu: true,
  },
  // Giscus follows the resolved light/dark color mode.
  // Use themeLight/themeDark if you want to override the default pair.
  giscus: {
    repo: import.meta.env.PUBLIC_GISCUS_REPO || '',
    repoId: import.meta.env.PUBLIC_GISCUS_REPO_ID || '',
    category: import.meta.env.PUBLIC_GISCUS_CATEGORY || 'Announcements',
    categoryId: import.meta.env.PUBLIC_GISCUS_CATEGORY_ID || '',
    mapping: 'pathname' as const,
    reactionsEnabled: true,
    emitMetadata: false,
    inputPosition: 'top' as const,
    themeLight: 'light',
    themeDark: 'dark',
  },
  // Custom content sections — each one auto-generates list + detail pages
  // Example: { id: 'translations', labelKey: 'translations' }
  sections: [] as ContentSection[],
  nav: [
    { labelKey: 'blog' as const, href: '/' },
    { labelKey: 'gallery' as const, href: '/photos' },
    // Section nav items are auto-appended from sections config above
    { labelKey: 'about' as const, href: '/about' },
  ],
  footer: {
    copyrightYear: 'auto' as 'auto' | number,
    sections: [
      {
        title: 'Navigate',
        items: [
          { title: 'About', href: '/about', labelKey: 'about' },
        ],
      },
      {
        title: 'Subscribe',
        items: [
          { title: 'RSS Feed', href: '/rss.xml' },
        ],
      },
      {
        title: 'Source',
        items: [
          {
            title: 'GitHub',
            href: 'https://github.com/justinhuangcode/astro-theme-aither',
            external: true,
          },
        ],
      },
    ] satisfies FooterSection[],
  },
  photosGallery: {
    paginationSize: 20,
    indexName: 'Photos',
    indexSuffix: 'A calm image-first gallery',
    headerName: 'Photos',
    headerSubtitle: 'A calm image-first gallery',
    logo: '/author-avatar.svg',
    icon: '/author-avatar.svg',
    appleIcon: '/author-avatar.svg',
    ogImage: '/photos/library/2026/03/2026-03-21-001.webp',
    brandName: 'Photos',
    subtitle: 'A calm image-first gallery',
    aboutHtml:
      'A calm, image-first gallery inside Aither, designed for immersive browsing and quiet presentation.',
    homeHref: '/',
    githubHref: 'https://github.com/justinhuangcode/astro-theme-aither',
    themeDisplayName: 'Photos',
    statsHtml: '',
    police: '',
    icp: '',
    thumbnailSuffix: '',
    displaySuffix: '',
  },
} satisfies AitherSiteConfig);
