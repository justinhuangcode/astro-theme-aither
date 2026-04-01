import type { Locale } from '@/i18n';

export type LocalizedDirectoryValue = string | Partial<Record<Locale, string>>;

export interface DirectorySourceLink {
  spec: {
    displayName: LocalizedDirectoryValue;
    description: LocalizedDirectoryValue;
    url: string;
    logo?: string;
  };
  annotations?: {
    show_link_anonymous?: 'true' | 'false';
    to_post_radio?: 'true' | 'false';
  };
}

export interface DirectorySourceGroup {
  spec: {
    displayName: LocalizedDirectoryValue;
  };
  annotations: {
    icon: string;
    show_on_heolink?: 'true' | 'false';
    show_group_anonymous?: 'true' | 'false';
  };
  links: DirectorySourceLink[];
}

export const directoryGroupsSource: DirectorySourceGroup[] = [
  {
    spec: {
      displayName: {
        en: 'Self-Hosted Services',
        'zh-hans': '自建服务',
        'zh-hant': '自建服務',
      },
    },
    annotations: {
      icon: 'ri-magic-fill',
      show_on_heolink: 'true',
      show_group_anonymous: 'false',
    },
    links: [
      {
        spec: {
          displayName: {
            en: 'App Icon Library',
            'zh-hans': '应用图标库',
            'zh-hant': '應用圖標庫',
          },
          description: {
            en: 'Quickly fetch polished app icon assets.',
            'zh-hans': '快速获取应用图标图片',
            'zh-hant': '快速獲取應用圖標圖片',
          },
          url: 'https://icon.zhheo.com/#!/',
          logo: '/directory/heolink/upload/787defba-6f64-4440-821b-3f9f95a403a6.webp',
        },
        annotations: {
          show_link_anonymous: 'false',
          to_post_radio: 'false',
        },
      },
      {
        spec: {
          displayName: 'HeoChat',
          description: {
            en: 'A free GPT chat public-interest service.',
            'zh-hans': '免费GPT对话公益服务',
            'zh-hant': '免費 GPT 對話公益服務',
          },
          url: 'https://chat.zhheo.com/',
          logo: '/directory/heolink/upload/gpt.webp',
        },
        annotations: {
          show_link_anonymous: 'false',
          to_post_radio: 'false',
        },
      },
      {
        spec: {
          displayName: {
            en: 'Bilibili Summary',
            'zh-hans': 'B站摘要生成',
            'zh-hant': 'B 站摘要生成',
          },
          description: {
            en: 'Turn long videos into AI-written summary notes.',
            'zh-hans': '通过 AI 将视频转换为摘要笔记，公益服务',
            'zh-hant': '透過 AI 將影片轉換為摘要筆記，公益服務',
          },
          url: 'https://b.zhheo.com/',
          logo: '/directory/assets/bilibili-logo-v2.svg',
        },
        annotations: {
          show_link_anonymous: 'false',
          to_post_radio: 'false',
        },
      },
    ],
  },
  {
    spec: {
      displayName: {
        en: 'Design Sites',
        'zh-hans': '设计网站',
        'zh-hant': '設計網站',
      },
    },
    annotations: {
      icon: 'ri-paint-brush-fill',
      show_on_heolink: 'true',
      show_group_anonymous: 'false',
    },
    links: [
      {
        spec: {
          displayName: {
            en: 'Article Demo',
            'zh-hans': '文章演示',
            'zh-hant': '文章演示',
          },
          description: '',
          url: '/about',
          logo: '/directory/heolink/upload/logo.jpg',
        },
        annotations: {
          show_link_anonymous: 'false',
          to_post_radio: 'false',
        },
      },
      {
        spec: {
          displayName: 'Pinterest',
          description: {
            en: 'A giant visual library for references and moodboards.',
            'zh-hans': '全球最大的素材管理与分享社区',
            'zh-hant': '全球最大的素材管理與分享社區',
          },
          url: 'https://www.pinterest.com/',
          logo: '/directory/heolink/upload/pinterest-icon-512x512-3vn0ggs9.png',
        },
        annotations: {
          show_link_anonymous: 'false',
          to_post_radio: 'false',
        },
      },
      {
        spec: {
          displayName: 'Dribbble',
          description: {
            en: 'A community for illustration and UI design work.',
            'zh-hans': '插画与UI设计交流社区',
            'zh-hant': '插畫與 UI 設計交流社區',
          },
          url: 'https://dribbble.com/shots',
          logo: '/directory/heolink/upload/dribbble-5-logo-png-transparent.png',
        },
        annotations: {
          show_link_anonymous: 'false',
          to_post_radio: 'false',
        },
      },
      {
        spec: {
          displayName: 'Behance',
          description: {
            en: "Adobe's showcase platform for design portfolios.",
            'zh-hans': 'Adobe旗下设计作品发布网站',
            'zh-hant': 'Adobe 旗下設計作品發布網站',
          },
          url: 'https://www.behance.net/',
          logo: '/directory/heolink/upload/Behance-Emblem.png',
        },
        annotations: {
          show_link_anonymous: 'false',
          to_post_radio: 'false',
        },
      },
    ],
  },
  {
    spec: {
      displayName: {
        en: 'Operations Links',
        'zh-hans': '运营链接',
        'zh-hant': '運營鏈接',
      },
    },
    annotations: {
      icon: 'ri-mac-fill',
      show_on_heolink: 'true',
      show_group_anonymous: 'false',
    },
    links: [
      {
        spec: {
          displayName: {
            en: 'WeChat Official Account',
            'zh-hans': '微信公众号',
            'zh-hant': '微信公眾號',
          },
          description: {
            en: "Tencent's official platform for operating WeChat accounts.",
            'zh-hans': '腾讯微信公众号开放平台',
            'zh-hant': '騰訊微信公眾號開放平台',
          },
          url: 'https://mp.weixin.qq.com/',
          logo: '/directory/heolink/upload/aa34c55c-fb37-4ba9-a9f5-1a94210a497c.png',
        },
        annotations: {
          show_link_anonymous: 'false',
          to_post_radio: 'false',
        },
      },
    ],
  },
  {
    spec: {
      displayName: {
        en: 'Design Assets',
        'zh-hans': '设计素材',
        'zh-hant': '設計素材',
      },
    },
    annotations: {
      icon: 'ri-landscape-fill',
      show_on_heolink: 'true',
      show_group_anonymous: 'false',
    },
    links: [
      {
        spec: {
          displayName: 'Iconfont',
          description: {
            en: "Alibaba's icon exchange community.",
            'zh-hans': '阿里旗下的图标交流社区',
            'zh-hant': '阿里旗下的圖標交流社區',
          },
          url: 'https://www.iconfont.cn/',
          logo: '/directory/heolink/upload/87d820fb-161b-4eb9-b52b-790703ef34b8.png',
        },
        annotations: {
          show_link_anonymous: 'false',
          to_post_radio: 'false',
        },
      },
      {
        spec: {
          displayName: 'Unsplash',
          description: {
            en: 'A free-to-use photography community and image library.',
            'zh-hans': '摄影师交流社区，免费可商用版权图片',
            'zh-hant': '攝影師交流社區，免費可商用版權圖片',
          },
          url: 'https://unsplash.com/',
          logo: '/directory/heolink/upload/5968763.png',
        },
        annotations: {
          show_link_anonymous: 'false',
          to_post_radio: 'false',
        },
      },
      {
        spec: {
          displayName: 'Pexels',
          description: {
            en: 'A broad library of free commercial-use photos.',
            'zh-hans': '免费可商用图片社区',
            'zh-hant': '免費可商用圖片社區',
          },
          url: 'https://www.pexels.com/zh-cn/',
          logo: '/directory/heolink/upload/下载.png',
        },
        annotations: {
          show_link_anonymous: 'false',
          to_post_radio: 'false',
        },
      },
    ],
  },
  {
    spec: {
      displayName: {
        en: 'AI Tools',
        'zh-hans': 'AI工具',
        'zh-hant': 'AI 工具',
      },
    },
    annotations: {
      icon: 'ri-robot-fill',
      show_on_heolink: 'true',
      show_group_anonymous: 'false',
    },
    links: [
      {
        spec: {
          displayName: 'Midjourney',
          description: {
            en: 'A powerful image-generation workflow for visual exploration.',
            'zh-hans': '最强大的AI绘画工具',
            'zh-hant': '最強大的 AI 繪畫工具',
          },
          url: 'https://www.midjourney.com/home',
          logo: '/directory/heolink/upload/Midjourney_Emblem.jpg',
        },
        annotations: {
          show_link_anonymous: 'false',
          to_post_radio: 'false',
        },
      },
      {
        spec: {
          displayName: 'ChatGPT',
          description: {
            en: 'A versatile AI conversation assistant for daily work.',
            'zh-hans': '最好用的AI对话助理',
            'zh-hant': '最好用的 AI 對話助理',
          },
          url: 'https://chat.openai.com/',
          logo: '/directory/heolink/upload/chatgpt-logo-chat-gpt-icon-on-black-background-free-vector.jpg',
        },
        annotations: {
          show_link_anonymous: 'false',
          to_post_radio: 'false',
        },
      },
    ],
  },
];
