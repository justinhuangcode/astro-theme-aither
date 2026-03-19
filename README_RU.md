# Aither

[English](./README.md) | [简体中文](./README_ZH-HANS.md) | [繁體中文](./README_ZH-HANT.md) | [한국어](./README_KO.md) | [Français](./README_FR.md) | [Deutsch](./README_DE.md) | [Italiano](./README_IT.md) | [Español](./README_ES.md) | **Русский** | [Bahasa Indonesia](./README_ID.md) | [Português (BR)](./README_PT-BR.md)

[![Deploy](https://github.com/justinhuangcode/astro-theme-aither/actions/workflows/deploy-cloudflare-pages.yml/badge.svg)](https://github.com/justinhuangcode/astro-theme-aither/actions/workflows/deploy-cloudflare-pages.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Astro](https://img.shields.io/badge/astro-6.0%2B-BC52EE.svg?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-v4-06B6D4.svg?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![GitHub Stars](https://img.shields.io/github/stars/justinhuangcode/astro-theme-aither?style=flat-square&logo=github)](https://github.com/justinhuangcode/astro-theme-aither/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/justinhuangcode/astro-theme-aither?style=flat-square)](https://github.com/justinhuangcode/astro-theme-aither/commits/main)

**[Онлайн-превью](https://astro-theme-aither.pages.dev)**

An AI-native Astro theme built around beautiful text.  ✍️

## Почему Aither?

Хорошее письмо заслуживает хорошей типографики. Большинство тем прячут ваши слова под hero-изображениями, анимациями и UI-декорациями. Aither идёт от обратного — позволяет тексту быть дизайном.

Чистая безсерифная типографика с заголовками Bricolage Grotesque, тщательно настроенный ритм чтения и макет, который не мешает. Всё служит одной цели: сделать ваше письмо красивым на вид и приятным для чтения.

## Возможности

- **Безсерифная типографика** -- Заголовки Bricolage Grotesque в сочетании с основным текстом system-ui и CJK-fallback (PingFang SC, Microsoft YaHei), единообразно на macOS, Windows, Linux и Android
- **Тёмный режим** -- Переключение Светлый / Тёмный / Системный с сохранением в localStorage, анимация через View Transitions API (круговое раскрытие)
- **Tailwind CSS v4** -- Utility-first стилизация с дизайн-токенами `@theme`, легко настраивается
- **i18n на 11 языках** -- English, 简体中文, 繁體中文, 한국어, Français, Deutsch, Italiano, Español, Русский, Bahasa Indonesia, Português (BR)
- **55 локализованных демо-статей** -- Каждая локаль включает одни и те же 5 стартовых статей (`11 локалей x 5 slug`), чтобы демо и проверки покрытия оставались синхронизированы
- **Динамические OG-изображения** -- Автоматическая генерация изображений Open Graph для каждой статьи через Satori + resvg-js
- **Комментарии Giscus** -- Система комментариев на основе GitHub Discussions
- **Чат Crisp** -- Опциональный виджет живого чата через Crisp
- **Категории и теги** -- Организация статей по категориям и опциональным тегам
- **Закреплённые статьи** -- Установите `pinned: true` в frontmatter для закрепления статей
- **Пагинация** -- Настраиваемый размер страницы для списка блога
- **Оглавление** -- Автоматически генерируется из заголовков статьи
- **Информация об авторе** -- Настраиваемые имя и аватар автора
- **AI-нативные эндпоинты** -- `/protocol.json`, `/skill.md`, `/policy.md`, `/reading.md`, `/subscribe.md`, `/auth.md`, `/agent/home.json`, `/llms.txt`, `/llms-full.txt`, `/api/posts.json` и `.md` эндпоинты для каждой статьи
- **RSS-лента** -- Встроенный `/rss.xml` через `@astrojs/rss`
- **Карта сайта** -- Автоматическая генерация через `@astrojs/sitemap`
- **SEO** -- Теги Open Graph, канонические URL, описания для каждой статьи
- **Адаптивность** -- Дружественный к мобильным устройствам макет, сохраняющий ритм чтения на всех размерах экрана
- **Google Analytics** -- Опционально, нулевая конфигурация через переменную окружения `PUBLIC_GA_ID`
- **Astro Content Collections** -- Типобезопасные Markdown-статьи с валидацией схемы Zod
- **Cloudflare Pages** -- CI/CD workflow для автоматического развёртывания

## Быстрый старт

### Использование шаблона GitHub

1. Нажмите **"Use this template"** на [GitHub](https://github.com/justinhuangcode/astro-theme-aither)
2. Клонируйте свой новый репозиторий:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

3. Установите зависимости:

```bash
pnpm install
```

4. Настройте свой сайт:

```bash
# astro.config.mjs -- установите URL вашего сайта (единственное место, где нужно задавать URL)
site: 'https://your-domain.com'

# src/config/site.ts -- установите название, описание, социальные ссылки, навигацию, подвал
# (url автоматически читается из astro.config.mjs)
```

5. Настройте переменные окружения (опционально):

```bash
cp .env.example .env
# Отредактируйте .env с вашими значениями (GA, Giscus, Crisp)
```

6. Начните писать:

```bash
pnpm dev
```

7. Деплой: push в `main`, GitHub Actions автоматически собирает и развёртывает.

### Ручная установка

```bash
git clone https://github.com/justinhuangcode/astro-theme-aither.git my-blog
cd my-blog
rm -rf .git && git init
pnpm install
pnpm dev
```

## Формат статей

Создавайте Markdown-файлы в `src/content/posts/{locale}/`:

```markdown
---
title: Заголовок статьи
date: 2026-01-01
description: Опциональное описание для SEO
category: Technology
tags: [опционально, теги]
pinned: false
image: ./optional-cover.jpg
---

Ваш контент здесь.
```

| Поле | Тип | Обязательно | По умолчанию | Описание |
|---|---|---|---|---|
| `title` | string | Да | -- | Заголовок статьи |
| `date` | date | Да | -- | Дата публикации (ГГГГ-ММ-ДД) |
| `description` | string | Нет | -- | Для RSS-ленты и мета-тегов |
| `category` | string | Нет | `"General"` | Категория статьи |
| `tags` | string[] | Нет | -- | Теги статьи |
| `pinned` | boolean | Нет | `false` | `true` закрепляет статью вверху списка |
| `image` | image | Нет | -- | Обложка (относительный путь или import) |

## Команды

| Команда | Описание |
|---|---|
| `pnpm dev` | Запустить локальный сервер разработки |
| `pnpm check` | Запустить проверки типов и контента Astro |
| `pnpm check:post-coverage` | Проверить, что все локали содержат одинаковый набор article slug |
| `pnpm build` | Собрать статический сайт в `dist/` |
| `pnpm smoke` | Запустить smoke-тесты AI-протокольных артефактов в `dist/` |
| `pnpm preview` | Локальный предпросмотр продакшн-сборки |
| `pnpm validate` | Запустить `check`, `check:post-coverage`, `build` и `smoke` вместе |

## AI-нативный протокол

Если вы строите интеграцию AI или agent, рекомендуемый порядок чтения такой:

1. `/protocol.json` для лёгкого структурированного манифеста
2. `/skill.md` как каноническая narrative-точка входа в протокол
3. `/agent/home.json` для текущих метаданных сайта и последних статей
4. `/policy.md` для правил и границ безопасности
5. `/reading.md` для рекомендаций по чтению / retrieval
6. `/subscribe.md` для мониторинга и polling
7. `/auth.md`, чтобы подтвердить, что потоки записи / авторизации пока остаются зарезервированными

Сейчас протокол намеренно остаётся только для чтения. Agents могут обнаруживать, индексировать, суммировать, подписываться и получать Markdown, но не должны предполагать, что публикация, комментарии или авторизованные write API уже существуют.

Для более строгих интеграций доступны и schema-endpoints:

- `/schemas/agent-protocol.schema.json`
- `/schemas/agent-home.schema.json`

Лучшая практика: если вы меняете `protocol.json`, `skill.md`, `agent/home.json` или любой Markdown-документ, ориентированный на agents, минимум выполните `pnpm smoke`.

## Конфигурация

### Настройки сайта (`src/config/site.ts`)

```typescript
export const siteConfig = {
  name: 'Aither',
  title: 'An AI-native Astro theme built around beautiful text.',
  description: '...',
  author: {
    name: 'Aither',
    avatar: '', // Импорт из src/assets/ для оптимизации, или URL-строка
  },
  // url автоматически читается из astro.config.mjs, поэтому повторно задавать его здесь не нужно
  social: [
    { title: 'GitHub', href: 'https://github.com/...', icon: 'github' },
    { title: 'Twitter', href: '#', icon: 'x' },
  ],
  blog: { paginationSize: 20 },
  analytics: { googleAnalyticsId: import.meta.env.PUBLIC_GA_ID || '' },
  crisp: { websiteId: import.meta.env.PUBLIC_CRISP_WEBSITE_ID || '' },
  ui: {
    defaultMode: 'system',
    defaultStyle: 'default',
    enableModeSwitch: true,
    showMoreThemesMenu: true,
  },
  giscus: { repo: '...', repoId: '...', category: '...', categoryId: '...' },
  nav: [
    { labelKey: 'blog', href: '/' },
    { labelKey: 'about', href: '/about' },
  ],
  footer: { copyrightYear: 'auto', sections: [/* ... */] },
};
```

Установите `ui.showMoreThemesMenu` в `false`, если хотите сохранить переключатель Светлый / Тёмный / Системный, но скрыть селектор кастомных тем.

### Конфигурация Astro (`astro.config.mjs`)

```javascript
export default defineConfig({
  site: 'https://your-domain.com', // Обязательно для RSS и sitemap
  integrations: [react(), mdx(), sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-hans', 'zh-hant', 'ko', 'fr', 'de', 'it', 'es', 'ru', 'id', 'pt-br'],
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
```

### Переменные окружения (`.env`)

```bash
# Google Analytics (оставьте пустым для отключения)
PUBLIC_GA_ID=

# Чат Crisp (оставьте пустым для отключения)
PUBLIC_CRISP_WEBSITE_ID=

# Комментарии Giscus (оставьте все пустыми для отключения)
PUBLIC_GISCUS_REPO=
PUBLIC_GISCUS_REPO_ID=
PUBLIC_GISCUS_CATEGORY=
PUBLIC_GISCUS_CATEGORY_ID=
```

### i18n

Конфигурация языков в `src/i18n/index.ts`, переводы в `src/i18n/messages/*.ts`.

| Код | Язык |
|---|---|
| `en` | English (по умолчанию) |
| `zh-hans` | 简体中文 |
| `zh-hant` | 繁體中文 |
| `ko` | 한국어 |
| `fr` | Français |
| `de` | Deutsch |
| `it` | Italiano |
| `es` | Español |
| `ru` | Русский |
| `id` | Bahasa Indonesia |
| `pt-br` | Português (BR) |

Локаль по умолчанию (`en`) не имеет URL-префикса. Остальные локали используют свой код как префикс (напр. `/ru/`, `/ko/`).

## Структура проекта

```
src/
├── config/
│   ├── site.ts              # Название сайта, соцссылки, навигация, подвал, аналитика, Giscus, Crisp
│   └── themes.ts            # Группы тем и локализованные названия тем
├── content.config.ts         # Схема Content Collections (Zod)
├── i18n/
│   ├── index.ts              # Определения локалей, getMessages(), хелперы маршрутизации
│   └── messages/             # Файлы переводов (en.ts, zh-hans.ts, ko.ts, fr.ts, ...)
├── layouts/
│   └── Layout.astro          # Глобальный макет (head, навигация, переключатель темы, аналитика)
├── lib/
│   └── theme.ts              # Хелперы состояния предпочтений темы
├── components/
│   ├── Navbar.astro          # Навбар в стиле Bootstrap 3 с градиентом
│   ├── NavbarMobile.astro    # Мобильная навигация с управлением локалью и темой
│   ├── ModeSwitcher.astro    # Десктопный переключатель режима и стиля темы
│   ├── LanguageSwitcher.astro# Десктопный переключатель локали
│   ├── BlogGrid.astro        # Сетка статей с пагинацией
│   ├── BlogCard.astro        # Карточка статьи с категорией, тегами, датой
│   ├── TableOfContents.astro # Автогенерируемое оглавление
│   ├── AuthorInfo.astro      # Имя и аватар автора
│   ├── Giscus.astro          # Комментарии GitHub Discussions
│   ├── Crisp.astro           # Виджет чата Crisp
│   ├── Analytics.astro       # Скрипт Google Analytics
│   └── Prose.astro           # Типографический враппер для контента
├── pages/
│   ├── index.astro           # Главная (English, локаль по умолчанию)
│   ├── about.astro           # Страница «О нас»
│   ├── page/                 # Пагинированный список блога
│   ├── posts/
│   │   ├── [slug].astro      # Детали статьи (English)
│   │   └── [slug].md.ts      # Markdown-эндпоинт для AI
│   ├── og/                   # Динамическая генерация OG-изображений
│   ├── rss.xml.ts            # RSS-лента
│   ├── llms.txt.ts           # llms.txt для AI-агентов
│   ├── llms-full.txt.ts      # Полный контент для LLM
│   ├── skill.md.ts           # Дескриптор AI-навыка
│   ├── api/
│   │   └── posts.json.ts     # JSON API статей
│   └── [locale]/             # Страницы для каждой поддерживаемой локали
├── content/
│   └── posts/
│       ├── en/*.md           # Статьи на English (локаль по умолчанию)
│       └── {locale}/*.md     # Статьи для каждой поддерживаемой локали
└── styles/
    └── global.css            # Токены @theme Tailwind CSS v4 + базовые стили
public/
├── favicon.svg
├── robots.txt
└── .well-known/
.github/
└── workflows/
    └── deploy-cloudflare-pages.yml     # Деплой Cloudflare Pages (по умолчанию)
```

## Развёртывание

### Cloudflare Pages (по умолчанию)

Встроенный workflow (`.github/workflows/deploy-cloudflare-pages.yml`) развёртывает автоматически:

1. Перейдите в **Settings** > **Pages** > **Source**: выберите **GitHub Actions**
2. Обновите `site` в `astro.config.mjs` на ваш URL Cloudflare Pages
3. Push в `main` — сайт развёртывается автоматически

### Другие платформы

Выходные данные — статический HTML в `dist/`, развёртываемый где угодно:

```bash
pnpm build
# Загрузите dist/ на Netlify, Vercel или любой статический хостинг
```

## Философия дизайна

1. **Типографика — это дизайн** -- Безсерифные заголовки Bricolage Grotesque, чистый основной текст system-ui и тщательно настроенный ритм чтения. Шрифт — *это* визуальная идентичность.
2. **Текст прекрасен** -- Хорошо набранный текст на спокойной странице — самый элегантный интерфейс.
3. **Работает везде** -- Кроссплатформенные стеки шрифтов с CJK-fallback (PingFang SC, Microsoft YaHei). Без задержек загрузки веб-шрифтов, без сдвигов макета.
4. **AI-нативный** -- Первоклассная обнаруживаемость для LLM через llms.txt, структурированные эндпоинты и машиночитаемый контент.
5. **Изысканный, не сложный** -- Дизайн-токены `@theme` Tailwind CSS v4 делают настройку простой. Один файл конфигурации (`src/config/site.ts`) управляет всем сайтом.

## Благодарности

Вдохновлено [yinwang.org](https://www.yinwang.org).

Система тем вдохновлена проектом [Raphael Publish](https://github.com/liuxiaopai-ai/raphael-publish).

## Вклад

Мы приветствуем вклад. Пожалуйста, сначала откройте issue для обсуждения желаемых изменений.

## Лицензия

[MIT](LICENSE)
