import type { ImageMetadata } from 'astro';
import type { CollectionKey } from 'astro:content';

export type SocialIcon = 'github' | 'x' | 'discord' | 'mail' | 'rss';

export interface SocialLink {
  title: string;
  href: string;
  icon: SocialIcon;
}

export interface FooterLink {
  title: string;
  href: string;
  external?: boolean;
  labelKey?: string;
}

export interface FooterSection {
  title: string;
  items: FooterLink[];
}

export interface ContentSection {
  id: CollectionKey;
  labelKey: string;
}

export interface SiteNavItem {
  labelKey: string;
  href: string;
}

export interface SiteAuthor {
  name: string;
  avatar: ImageMetadata | string;
}

export interface SiteImages {
  logoLight: string;
  logoDark: string;
}

export interface SiteBlogConfig {
  paginationSize: number;
  timeZone: string;
}

export interface SiteAnalyticsConfig {
  googleAnalyticsId: string;
}

export interface SiteCrispConfig {
  websiteId: string;
}

export interface SiteWeChatShareConfig {
  enabled: boolean;
  appId: string;
  signatureEndpoint: string;
  jsSdkUrl: string;
}

export interface SiteUiConfig {
  defaultMode: 'light' | 'dark' | 'system';
  defaultStyle: string;
  enableModeSwitch: boolean;
  showMoreThemesMenu: boolean;
}

export interface SiteGiscusConfig {
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
  mapping: string;
  reactionsEnabled: boolean;
  emitMetadata: boolean;
  inputPosition: 'top' | 'bottom';
  themeLight?: string;
  themeDark?: string;
}

export interface SiteFooterConfig {
  copyrightYear: 'auto' | number;
  sections: FooterSection[];
}

export interface AitherSiteConfig {
  name: string;
  title: string;
  description: string;
  author: SiteAuthor;
  url: string;
  ogImage: string;
  images: SiteImages;
  social: SocialLink[];
  blog: SiteBlogConfig;
  analytics: SiteAnalyticsConfig;
  crisp: SiteCrispConfig;
  wechatShare: SiteWeChatShareConfig;
  ui: SiteUiConfig;
  giscus: SiteGiscusConfig;
  sections: ContentSection[];
  nav: SiteNavItem[];
  footer: SiteFooterConfig;
}

export declare function defineAitherSiteConfig<T extends AitherSiteConfig>(config: T): T;
