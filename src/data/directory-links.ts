import type { Locale } from "@/i18n";

export type LocalizedDirectoryValue = string | Partial<Record<Locale, string>>;

export interface DirectorySourceLink {
  spec: {
    displayName: LocalizedDirectoryValue;
    description: LocalizedDirectoryValue;
    url: string;
    logo?: string;
  };
  annotations?: {
    show_link_anonymous?: "true" | "false";
    to_post_radio?: "true" | "false";
  };
}

export interface DirectorySourceGroup {
  spec: {
    displayName: LocalizedDirectoryValue;
  };
  annotations: {
    icon: string;
    show_in_directory?: "true" | "false";
    show_group_anonymous?: "true" | "false";
  };
  links: DirectorySourceLink[];
}

export const directoryGroupsSource: DirectorySourceGroup[] = [
  {
    spec: {
      displayName: {
        'en-US': "Self-Hosted Services",
        "zh-CN": "自建服务",
        "zh-TW": "自建服務",
      },
    },
    annotations: {
      icon: "ri-magic-fill",
      show_in_directory: "true",
      show_group_anonymous: "false",
    },
    links: [
      {
        spec: {
          displayName: {
            'en-US': "selfh.st Icons",
            "zh-CN": "selfh.st 图标库",
            "zh-TW": "selfh.st 圖標庫",
          },
          description: {
            'en-US': "Open-source product icons for dashboards and directories.",
            "zh-CN": "适合仪表盘与导航站的开源产品图标库",
            "zh-TW": "適合儀表板與導航站的開源產品圖標庫",
          },
          url: "https://selfh.st/icons/",
        },
        annotations: {
          show_link_anonymous: "false",
          to_post_radio: "false",
        },
      },
    ],
  },
  {
    spec: {
      displayName: {
        'en-US': "Design Sites",
        "zh-CN": "设计网站",
        "zh-TW": "設計網站",
      },
    },
    annotations: {
      icon: "ri-paint-brush-fill",
      show_in_directory: "true",
      show_group_anonymous: "false",
    },
    links: [
      {
        spec: {
          displayName: "Pinterest",
          description: {
            'en-US': "A giant visual library for references and moodboards.",
            "zh-CN": "全球最大的素材管理与分享社区",
            "zh-TW": "全球最大的素材管理與分享社區",
          },
          url: "https://www.pinterest.com/",
          logo: "selfhst:pinterest",
        },
        annotations: {
          show_link_anonymous: "false",
          to_post_radio: "false",
        },
      },
      {
        spec: {
          displayName: "Dribbble",
          description: {
            'en-US': "A community for illustration and UI design work.",
            "zh-CN": "插画与UI设计交流社区",
            "zh-TW": "插畫與 UI 設計交流社區",
          },
          url: "https://dribbble.com/shots",
          logo: "/directory/ui/upload/dribbble-5-logo-png-transparent.png",
        },
        annotations: {
          show_link_anonymous: "false",
          to_post_radio: "false",
        },
      },
      {
        spec: {
          displayName: "Behance",
          description: {
            'en-US': "Adobe's showcase platform for design portfolios.",
            "zh-CN": "Adobe旗下设计作品发布网站",
            "zh-TW": "Adobe 旗下設計作品發布網站",
          },
          url: "https://www.behance.net/",
          logo: "/directory/ui/upload/Behance-Emblem.png",
        },
        annotations: {
          show_link_anonymous: "false",
          to_post_radio: "false",
        },
      },
    ],
  },
  {
    spec: {
      displayName: {
        'en-US': "Operations Links",
        "zh-CN": "运营链接",
        "zh-TW": "運營鏈接",
      },
    },
    annotations: {
      icon: "ri-mac-fill",
      show_in_directory: "true",
      show_group_anonymous: "false",
    },
    links: [
      {
        spec: {
          displayName: {
            'en-US': "WeChat Official Account",
            "zh-CN": "微信公众号",
            "zh-TW": "微信公眾號",
          },
          description: {
            'en-US': "Tencent's official platform for operating WeChat accounts.",
            "zh-CN": "腾讯微信公众号开放平台",
            "zh-TW": "騰訊微信公眾號開放平台",
          },
          url: "https://mp.weixin.qq.com/",
          logo: "selfhst:wechat",
        },
        annotations: {
          show_link_anonymous: "false",
          to_post_radio: "false",
        },
      },
    ],
  },
  {
    spec: {
      displayName: {
        'en-US': "Design Assets",
        "zh-CN": "设计素材",
        "zh-TW": "設計素材",
      },
    },
    annotations: {
      icon: "ri-landscape-fill",
      show_in_directory: "true",
      show_group_anonymous: "false",
    },
    links: [
      {
        spec: {
          displayName: "Iconfont",
          description: {
            'en-US': "Alibaba's icon exchange community.",
            "zh-CN": "阿里旗下的图标交流社区",
            "zh-TW": "阿里旗下的圖標交流社區",
          },
          url: "https://www.iconfont.cn/",
          logo: "/directory/ui/upload/87d820fb-161b-4eb9-b52b-790703ef34b8.png",
        },
        annotations: {
          show_link_anonymous: "false",
          to_post_radio: "false",
        },
      },
      {
        spec: {
          displayName: "Unsplash",
          description: {
            'en-US': "A free-to-use photography community and image library.",
            "zh-CN": "摄影师交流社区，免费可商用版权图片",
            "zh-TW": "攝影師交流社區，免費可商用版權圖片",
          },
          url: "https://unsplash.com/",
          logo: "/directory/ui/upload/5968763.png",
        },
        annotations: {
          show_link_anonymous: "false",
          to_post_radio: "false",
        },
      },
      {
        spec: {
          displayName: "Pexels",
          description: {
            'en-US': "A broad library of free commercial-use photos.",
            "zh-CN": "免费可商用图片社区",
            "zh-TW": "免費可商用圖片社區",
          },
          url: "https://www.pexels.com/zh-cn/",
          logo: "/directory/ui/upload/下载.png",
        },
        annotations: {
          show_link_anonymous: "false",
          to_post_radio: "false",
        },
      },
    ],
  },
  {
    spec: {
      displayName: {
        'en-US': "AI Tools",
        "zh-CN": "AI工具",
        "zh-TW": "AI 工具",
      },
    },
    annotations: {
      icon: "ri-robot-fill",
      show_in_directory: "true",
      show_group_anonymous: "false",
    },
    links: [
      {
        spec: {
          displayName: "Midjourney",
          description: {
            'en-US': "A powerful image-generation workflow for visual exploration.",
            "zh-CN": "最强大的AI绘画工具",
            "zh-TW": "最強大的 AI 繪畫工具",
          },
          url: "https://www.midjourney.com/home",
          logo: "selfhst:midjourney",
        },
        annotations: {
          show_link_anonymous: "false",
          to_post_radio: "false",
        },
      },
      {
        spec: {
          displayName: "ChatGPT",
          description: {
            'en-US': "A versatile AI conversation assistant for daily work.",
            "zh-CN": "最好用的AI对话助理",
            "zh-TW": "最好用的 AI 對話助理",
          },
          url: "https://chat.openai.com/",
          logo: "selfhst:chatgpt",
        },
        annotations: {
          show_link_anonymous: "false",
          to_post_radio: "false",
        },
      },
    ],
  },
];
