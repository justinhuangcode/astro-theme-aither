import type { Locale } from '@/i18n';

interface PicksUiCopy {
  sectionTitle: string;
  shelfEyebrow: string;
  shelfTitle: string;
  shelfDescription: string;
  shelfNote: string;
  detailEyebrow: string;
  sourceTitleLabel: string;
  sourcePublicationLabel: string;
  sourceLanguageLabel: string;
  sourceLinkAction: string;
}

const enCopy: PicksUiCopy = {
  sectionTitle: 'Latest Picks',
  shelfEyebrow: 'Reading desk',
  shelfTitle: 'A hand-picked stream of worth-reading links',
  shelfDescription:
    'Picks is where Aither surfaces outside writing, essays, and references that deserve another pass, with a short editorial note on why they matter.',
  shelfNote: 'The surrounding interface follows your site language. Individual picks can fall back to English until a localized version exists.',
  detailEyebrow: 'Source context',
  sourceTitleLabel: 'Source title',
  sourcePublicationLabel: 'Publication',
  sourceLanguageLabel: 'Source language',
  sourceLinkAction: 'Open source',
};

const zhHansCopy: PicksUiCopy = {
  sectionTitle: '最新推荐',
  shelfEyebrow: '推荐栏目',
  shelfTitle: '一个人工筛选、值得再读一遍的阅读流',
  shelfDescription:
    '这里收录 Aither 主动递给你的外部文章、论文与参考材料，并附上一句简短判断，说明它为什么值得你打开。',
  shelfNote: '站点界面会跟随你的语言设置变化；某些推荐在尚未翻译时，会先回退显示英文原稿。',
  detailEyebrow: '来源信息',
  sourceTitleLabel: '原文标题',
  sourcePublicationLabel: '来源',
  sourceLanguageLabel: '原文语言',
  sourceLinkAction: '打开原文',
};

const zhHantCopy: PicksUiCopy = {
  sectionTitle: '最新推薦',
  shelfEyebrow: '推薦欄目',
  shelfTitle: '一條人工篩選、值得再讀一遍的閱讀流',
  shelfDescription:
    '這裡收錄 Aither 主動遞給你的外部文章、論文與參考資料，並附上一句簡短判斷，說明它為什麼值得你打開。',
  shelfNote: '站點介面會跟隨你的語言設定變化；某些推薦在尚未翻譯時，會先回退顯示英文原稿。',
  detailEyebrow: '來源資訊',
  sourceTitleLabel: '原文標題',
  sourcePublicationLabel: '來源',
  sourceLanguageLabel: '原文語言',
  sourceLinkAction: '打開原文',
};

export function getPicksUiCopy(locale: Locale): PicksUiCopy {
  if (locale === 'zh-hans') return zhHansCopy;
  if (locale === 'zh-hant') return zhHantCopy;
  return enCopy;
}
