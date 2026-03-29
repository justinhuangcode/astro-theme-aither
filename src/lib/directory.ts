import { getLocalizedPath, type Locale } from '@/i18n';

export type DirectoryIconName =
  | 'services'
  | 'design-sites'
  | 'operations'
  | 'assets'
  | 'ai-tools';

type LocalizedValue = string | Partial<Record<Locale, string>>;

interface DirectoryLinkSource {
  title: LocalizedValue;
  description: LocalizedValue;
  href?: string;
  localPath?: string;
  logo: string;
}

interface DirectoryGroupSource {
  id: string;
  title: LocalizedValue;
  icon: DirectoryIconName;
  items: DirectoryLinkSource[];
}

interface DirectoryPageCopy {
  heroTitle: LocalizedValue;
  heroSubtitle: LocalizedValue;
  sidebarFooter: LocalizedValue;
  sidebarThemeAttribution: LocalizedValue;
}

export interface DirectoryLink {
  title: string;
  description: string;
  href: string;
  external: boolean;
  logo: string;
}

export interface DirectoryGroup {
  id: string;
  title: string;
  icon: DirectoryIconName;
  items: DirectoryLink[];
}

export interface DirectoryPageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  logoImage: string;
  sidebarFooter: string;
  sidebarThemeAttribution: string;
  groups: DirectoryGroup[];
}

const pageCopy: DirectoryPageCopy = {
  heroTitle: {
    en: "Heo's Living Directory",
    'zh-hans': 'Heo的生活导航',
    'zh-hant': 'Heo 的生活導航',
  },
  heroSubtitle: {
    en: 'A curated collection of useful places on the web.',
    'zh-hans': '分享有趣的站点',
    'zh-hant': '分享有趣的站點',
  },
  sidebarFooter: {
    en: 'Curated for Aither',
    'zh-hans': 'Aither 导航目录',
    'zh-hant': 'Aither 導航目錄',
  },
  sidebarThemeAttribution: 'Theme HeoLink by Halo',
};

const groups: DirectoryGroupSource[] = [
  {
    id: 'self-hosted-services',
    title: {
      en: 'Self-Hosted Services',
      'zh-hans': '自建服务',
      'zh-hant': '自建服務',
    },
    icon: 'services',
    items: [
      {
        title: {
          en: 'App Icon Library',
          'zh-hans': '应用图标库',
          'zh-hant': '應用圖標庫',
        },
        description: {
          en: 'Quickly fetch polished app icon assets.',
          'zh-hans': '快速获取应用图标图片',
          'zh-hant': '快速獲取應用圖標圖片',
        },
        href: 'https://icon.zhheo.com/#!/',
        logo: '/directory/logos/app-icon-library.webp',
      },
      {
        title: 'HeoChat',
        description: {
          en: 'A public GPT chat service for lightweight conversations.',
          'zh-hans': '免费 GPT 对话公益服务',
          'zh-hant': '免費 GPT 對話公益服務',
        },
        href: 'https://chat.zhheo.com/',
        logo: '/directory/logos/heochat.webp',
      },
    ],
  },
  {
    id: 'design-sites',
    title: {
      en: 'Design Sites',
      'zh-hans': '设计网站',
      'zh-hant': '設計網站',
    },
    icon: 'design-sites',
    items: [
      {
        title: 'Behance',
        description: {
          en: "Adobe's showcase platform for design work.",
          'zh-hans': 'Adobe 旗下设计作品发布网站',
          'zh-hant': 'Adobe 旗下設計作品發布網站',
        },
        href: 'https://www.behance.net/',
        logo: '/directory/logos/behance.png',
      },
      {
        title: 'Dribbble',
        description: {
          en: 'A creative community for illustration and UI design.',
          'zh-hans': '插画与 UI 设计交流社区',
          'zh-hant': '插畫與 UI 設計交流社區',
        },
        href: 'https://dribbble.com/shots',
        logo: '/directory/logos/dribbble.png',
      },
      {
        title: 'Pinterest',
        description: {
          en: 'A giant canvas for collecting and sharing visual references.',
          'zh-hans': '全球最大的素材管理与分享社区',
          'zh-hant': '全球最大的素材管理與分享社區',
        },
        href: 'https://www.pinterest.com/',
        logo: '/directory/logos/pinterest.png',
      },
      {
        title: {
          en: 'Article Demo',
          'zh-hans': '文章演示',
          'zh-hant': '文章演示',
        },
        description: {
          en: 'A local article sample inside Aither.',
          'zh-hans': 'Aither 站内的文章样例',
          'zh-hant': 'Aither 站內的文章樣例',
        },
        localPath: '/posts/hello-world',
        logo: '/directory/logos/article-demo.jpg',
      },
    ],
  },
  {
    id: 'operations-links',
    title: {
      en: 'Operations Links',
      'zh-hans': '运营链接',
      'zh-hant': '運營鏈接',
    },
    icon: 'operations',
    items: [
      {
        title: {
          en: 'WeChat Official Account',
          'zh-hans': '微信公众号',
          'zh-hant': '微信公眾號',
        },
        description: {
          en: 'Tencent’s official platform for running WeChat accounts.',
          'zh-hans': '腾讯微信公众号开放平台',
          'zh-hant': '騰訊微信公眾號開放平台',
        },
        href: 'https://mp.weixin.qq.com/',
        logo: '/directory/logos/wechat-official.png',
      },
    ],
  },
  {
    id: 'design-assets',
    title: {
      en: 'Design Assets',
      'zh-hans': '设计素材',
      'zh-hant': '設計素材',
    },
    icon: 'assets',
    items: [
      {
        title: 'Iconfont',
        description: {
          en: "Alibaba's icon exchange community.",
          'zh-hans': '阿里旗下的图标交流社区',
          'zh-hant': '阿里旗下的圖標交流社區',
        },
        href: 'https://www.iconfont.cn/',
        logo: '/directory/logos/iconfont.png',
      },
      {
        title: 'Unsplash',
        description: {
          en: 'Free-to-use photography and reference images.',
          'zh-hans': '摄影师交流社区，免费可商用版权图片',
          'zh-hant': '攝影師交流社區，免費可商用版權圖片',
        },
        href: 'https://unsplash.com/',
        logo: '/directory/logos/unsplash.png',
      },
      {
        title: 'Pexels',
        description: {
          en: 'A broad library of free commercial photo assets.',
          'zh-hans': '免费可商用图片社区',
          'zh-hant': '免費可商用圖片社區',
        },
        href: 'https://www.pexels.com/zh-cn/',
        logo: '/directory/logos/pexels.png',
      },
    ],
  },
  {
    id: 'ai-tools',
    title: {
      en: 'AI Tools',
      'zh-hans': 'AI 工具',
      'zh-hant': 'AI 工具',
    },
    icon: 'ai-tools',
    items: [
      {
        title: 'Midjourney',
        description: {
          en: 'A strong image generation workflow for visual exploration.',
          'zh-hans': '最强大的 AI 绘画工具',
          'zh-hant': '最強大的 AI 繪畫工具',
        },
        href: 'https://www.midjourney.com/home',
        logo: '/directory/logos/midjourney.jpg',
      },
      {
        title: 'ChatGPT',
        description: {
          en: 'A versatile AI conversation assistant for daily work.',
          'zh-hans': '最好用的 AI 对话助理',
          'zh-hant': '最好用的 AI 對話助理',
        },
        href: 'https://chatgpt.com/',
        logo: '/directory/logos/chatgpt.jpg',
      },
    ],
  },
];

function resolveText(value: LocalizedValue, locale: Locale): string {
  if (typeof value === 'string') return value;
  if (value[locale]) return value[locale]!;
  if (locale === 'zh-hant' && value['zh-hans']) return value['zh-hans']!;
  return value.en ?? value['zh-hans'] ?? Object.values(value)[0] ?? '';
}

function resolveHref(
  source: DirectoryLinkSource,
  locale: Locale,
): { href: string; external: boolean } {
  if (source.localPath) {
    return {
      href: getLocalizedPath(source.localPath, locale),
      external: false,
    };
  }

  return {
    href: source.href ?? '#',
    external: true,
  };
}

export function getDirectoryContent(locale: Locale): DirectoryPageContent {
  return {
    heroTitle: resolveText(pageCopy.heroTitle, locale),
    heroSubtitle: resolveText(pageCopy.heroSubtitle, locale),
    heroImage: '/directory/cover/index-cover2.jpg',
    logoImage: '/directory/logo/sidebar-logo.png',
    sidebarFooter: resolveText(pageCopy.sidebarFooter, locale),
    sidebarThemeAttribution: resolveText(pageCopy.sidebarThemeAttribution, locale),
    groups: groups.map((group) => ({
      id: group.id,
      title: resolveText(group.title, locale),
      icon: group.icon,
      items: group.items.map((item) => {
        const { href, external } = resolveHref(item, locale);
        return {
          title: resolveText(item.title, locale),
          description: resolveText(item.description, locale),
          href,
          external,
          logo: item.logo,
        };
      }),
    })),
  };
}
