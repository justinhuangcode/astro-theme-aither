# Aither

[English](./README.md) | [简体中文](./README_ZH-HANS.md) | [繁體中文](./README_ZH-HANT.md) | [한국어](./README_KO.md) | [Français](./README_FR.md) | [Deutsch](./README_DE.md) | [Italiano](./README_IT.md) | [Español](./README_ES.md) | [Русский](./README_RU.md) | **Bahasa Indonesia** | [Português (BR)](./README_PT-BR.md)

[![Deploy](https://github.com/justinhuangcode/astro-theme-aither/actions/workflows/deploy-cloudflare-pages.yml/badge.svg)](https://github.com/justinhuangcode/astro-theme-aither/actions/workflows/deploy-cloudflare-pages.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Astro](https://img.shields.io/badge/astro-6.0%2B-BC52EE.svg?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-v4-06B6D4.svg?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![GitHub Stars](https://img.shields.io/github/stars/justinhuangcode/astro-theme-aither?style=flat-square&logo=github)](https://github.com/justinhuangcode/astro-theme-aither/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/justinhuangcode/astro-theme-aither?style=flat-square)](https://github.com/justinhuangcode/astro-theme-aither/commits/main)

**[Pratinjau Langsung](https://astro-theme-aither.pages.dev)**

An AI-native Astro theme built around beautiful text.  ✍️

## Mengapa Aither?

Tulisan yang baik layak mendapatkan tipografi yang baik. Kebanyakan tema mengubur kata-kata Anda di bawah gambar hero, animasi, dan dekorasi UI. Aither mengambil pendekatan sebaliknya — membiarkan teks menjadi desain.

Tipografi sans-serif yang bersih dengan heading Bricolage Grotesque, ritme baca yang disetel dengan cermat, dan tata letak yang tidak menghalangi. Semuanya melayani satu tujuan: membuat tulisan Anda terlihat dan terasa indah.

## Fitur

- **Tipografi sans-serif** -- Heading Bricolage Grotesque dipasangkan dengan body text system-ui dan fallback CJK (PingFang SC, Microsoft YaHei), konsisten di macOS, Windows, Linux, dan Android
- **Mode gelap** -- Toggle Terang / Gelap / Sistem dengan persistensi localStorage, dianimasikan melalui View Transitions API (reveal melingkar)
- **Tailwind CSS v4** -- Styling utility-first dengan token desain `@theme`, mudah dikustomisasi
- **i18n 11 bahasa** -- English, 简体中文, 繁體中文, 한국어, Français, Deutsch, Italiano, Español, Русский, Bahasa Indonesia, Português (BR)
- **55 artikel contoh terlokalisasi** -- Setiap locale membawa 5 artikel awal yang sama (`11 locale x 5 slug`) agar demo dan pemeriksaan cakupan selalu sinkron
- **Gambar OG dinamis** -- Gambar Open Graph yang dihasilkan otomatis per artikel melalui Satori + resvg-js
- **Komentar Giscus** -- Sistem komentar berbasis GitHub Discussions
- **Chat Crisp** -- Widget chat langsung opsional melalui Crisp
- **Kategori dan tag** -- Organisasi artikel dengan kategori dan tag opsional
- **Artikel disematkan** -- Atur `pinned: true` di frontmatter untuk menyematkan artikel di atas
- **Paginasi** -- Ukuran halaman yang dapat dikonfigurasi untuk daftar blog
- **Daftar isi** -- Dihasilkan otomatis dari heading artikel
- **Info penulis** -- Nama dan avatar penulis yang dapat dikonfigurasi
- **Endpoint AI-native** -- `/protocol.json`, `/skill.md`, `/policy.md`, `/reading.md`, `/subscribe.md`, `/auth.md`, `/agent/home.json`, `/llms.txt`, `/llms-full.txt`, `/api/posts.json`, dan endpoint `.md` per artikel
- **Feed RSS** -- `/rss.xml` bawaan melalui `@astrojs/rss`
- **Sitemap** -- Dihasilkan otomatis melalui `@astrojs/sitemap`
- **SEO** -- Tag Open Graph, URL kanonik, deskripsi per artikel
- **Responsif** -- Tata letak ramah seluler yang menjaga ritme baca di semua ukuran layar
- **Google Analytics** -- Opsional, tanpa konfigurasi melalui variabel lingkungan `PUBLIC_GA_ID`
- **Astro Content Collections** -- Artikel Markdown type-safe dengan validasi skema Zod
- **Cloudflare Pages** -- Workflow CI/CD disertakan untuk deployment otomatis

## Mulai Cepat

### Gunakan sebagai template GitHub

1. Klik **"Use this template"** di [GitHub](https://github.com/justinhuangcode/astro-theme-aither)
2. Clone repositori baru Anda:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

3. Instal dependensi:

```bash
pnpm install
```

4. Konfigurasi situs Anda:

```bash
# astro.config.mjs -- atur URL situs Anda (satu-satunya tempat Anda perlu mengatur URL)
site: 'https://your-domain.com'

# src/config/site.ts -- atur nama, deskripsi, tautan sosial, navigasi, footer
# (url akan otomatis dibaca dari astro.config.mjs)
```

5. Atur variabel lingkungan (opsional):

```bash
cp .env.example .env
# Edit .env dengan nilai Anda (GA, Giscus, Crisp)
```

6. Mulai menulis:

```bash
pnpm dev
```

7. Deploy: push ke `main`, GitHub Actions membangun dan men-deploy secara otomatis.

### Instalasi manual

```bash
git clone https://github.com/justinhuangcode/astro-theme-aither.git my-blog
cd my-blog
rm -rf .git && git init
pnpm install
pnpm dev
```

## Format Artikel

Buat file Markdown di `src/content/posts/{locale}/`:

```markdown
---
title: Judul Artikel
date: 2026-01-01
description: Deskripsi opsional untuk SEO
category: Technology
tags: [opsional, tag]
pinned: false
image: ./optional-cover.jpg
---

Konten Anda di sini.
```

| Field | Tipe | Wajib | Default | Deskripsi |
|---|---|---|---|---|
| `title` | string | Ya | -- | Judul artikel |
| `date` | date | Ya | -- | Tanggal publikasi (TTTT-BB-HH) |
| `description` | string | Tidak | -- | Digunakan di feed RSS dan tag meta |
| `category` | string | Tidak | `"General"` | Kategori artikel |
| `tags` | string[] | Tidak | -- | Tag artikel |
| `pinned` | boolean | Tidak | `false` | `true` menyematkan artikel di atas daftar |
| `image` | image | Tidak | -- | Gambar sampul (path relatif atau import) |

## Perintah

| Perintah | Deskripsi |
|---|---|
| `pnpm dev` | Mulai server pengembangan lokal |
| `pnpm check` | Jalankan pemeriksaan tipe dan konten Astro |
| `pnpm check:post-coverage` | Verifikasi bahwa setiap locale memiliki cakupan slug artikel yang sama |
| `pnpm build` | Bangun situs statis ke `dist/` |
| `pnpm smoke` | Jalankan smoke test untuk artefak protokol AI di `dist/` |
| `pnpm preview` | Pratinjau build produksi secara lokal |
| `pnpm validate` | Jalankan `check`, `check:post-coverage`, `build`, dan `smoke` sekaligus |

## Protokol AI-native

Jika Anda membangun integrasi AI atau agent, urutan baca yang disarankan adalah:

1. `/protocol.json` untuk manifes terstruktur yang ringan
2. `/skill.md` sebagai titik masuk naratif canonical untuk protokol
3. `/agent/home.json` untuk metadata situs saat ini dan artikel terbaru
4. `/policy.md` untuk aturan dan batas keamanan
5. `/reading.md` untuk panduan membaca / retrieval
6. `/subscribe.md` untuk monitoring dan polling
7. `/auth.md` untuk memastikan alur tulis / autentikasi masih berstatus reserved

Saat ini protokol sengaja dibuat read-only. Agent dapat menemukan, mengindeks, merangkum, berlangganan, dan mengambil Markdown, tetapi tidak boleh berasumsi bahwa posting, komentar, atau write API terautentikasi sudah tersedia.

Endpoint schema juga tersedia untuk integrasi yang lebih ketat:

- `/schemas/agent-protocol.schema.json`
- `/schemas/agent-home.schema.json`

Best practice: jika Anda mengubah `protocol.json`, `skill.md`, `agent/home.json`, atau dokumen Markdown lain yang ditujukan untuk agent, minimal jalankan `pnpm smoke`.

## Konfigurasi

### Pengaturan situs (`src/config/site.ts`)

```typescript
export const siteConfig = {
  name: 'Aither',
  title: 'An AI-native Astro theme built around beautiful text.',
  description: '...',
  author: {
    name: 'Aither',
    avatar: '', // Import dari src/assets/ untuk optimisasi, atau gunakan string URL
  },
  // url dibaca otomatis dari astro.config.mjs, jadi tidak perlu diulang di sini
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

Setel `ui.showMoreThemesMenu` ke `false` jika Anda ingin mempertahankan toggle Terang / Gelap / Sistem tetapi menyembunyikan pemilih tema kustom.

### Konfigurasi Astro (`astro.config.mjs`)

```javascript
export default defineConfig({
  site: 'https://your-domain.com', // Diperlukan untuk RSS dan sitemap
  integrations: [react(), mdx(), sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-hans', 'zh-hant', 'ko', 'fr', 'de', 'it', 'es', 'ru', 'id', 'pt-br'],
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
```

### Variabel lingkungan (`.env`)

```bash
# Google Analytics (kosongkan untuk menonaktifkan)
PUBLIC_GA_ID=

# Chat Crisp (kosongkan untuk menonaktifkan)
PUBLIC_CRISP_WEBSITE_ID=

# Komentar Giscus (kosongkan semua untuk menonaktifkan)
PUBLIC_GISCUS_REPO=
PUBLIC_GISCUS_REPO_ID=
PUBLIC_GISCUS_CATEGORY=
PUBLIC_GISCUS_CATEGORY_ID=
```

### i18n

Konfigurasi bahasa ada di `src/i18n/index.ts`, terjemahan di `src/i18n/messages/*.ts`.

| Kode | Bahasa |
|---|---|
| `en` | English (default) |
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

Locale default (`en`) tidak memiliki prefiks URL. Locale lainnya menggunakan kode mereka sebagai prefiks (misal `/id/`, `/ko/`).

## Struktur Proyek

```
src/
├── config/
│   ├── site.ts              # Nama situs, tautan sosial, navigasi, footer, analytics, Giscus, Crisp
│   └── themes.ts            # Grup tema dan label tema yang dilokalkan
├── content.config.ts         # Skema Content Collections (Zod)
├── i18n/
│   ├── index.ts              # Definisi locale, getMessages(), helper routing
│   └── messages/             # File terjemahan (en.ts, zh-hans.ts, ko.ts, fr.ts, ...)
├── layouts/
│   └── Layout.astro          # Layout global (head, navigasi, pengalih tema, analytics)
├── lib/
│   └── theme.ts              # Helper status preferensi tema
├── components/
│   ├── Navbar.astro          # Navbar gaya Bootstrap 3 dengan gradien
│   ├── NavbarMobile.astro    # Navigasi mobile dengan kontrol locale dan tema
│   ├── ModeSwitcher.astro    # Pengalih mode/gaya tema desktop
│   ├── LanguageSwitcher.astro# Pengalih locale desktop
│   ├── BlogGrid.astro        # Grid artikel dengan paginasi
│   ├── BlogCard.astro        # Kartu artikel dengan kategori, tag, tanggal
│   ├── TableOfContents.astro # Daftar isi yang dihasilkan otomatis
│   ├── AuthorInfo.astro      # Nama dan avatar penulis
│   ├── Giscus.astro          # Komentar GitHub Discussions
│   ├── Crisp.astro           # Widget chat Crisp
│   ├── Analytics.astro       # Skrip Google Analytics
│   └── Prose.astro           # Wrapper tipografi untuk konten
├── pages/
│   ├── index.astro           # Beranda (English, locale default)
│   ├── about.astro           # Halaman Tentang
│   ├── page/                 # Daftar blog berpaginasi
│   ├── posts/
│   │   ├── [slug].astro      # Detail artikel (English)
│   │   └── [slug].md.ts      # Endpoint Markdown per artikel untuk AI
│   ├── og/                   # Pembuatan gambar OG dinamis
│   ├── rss.xml.ts            # Feed RSS
│   ├── llms.txt.ts           # llms.txt untuk agen AI
│   ├── llms-full.txt.ts      # Konten lengkap untuk LLM
│   ├── skill.md.ts           # Deskriptor skill AI
│   ├── api/
│   │   └── posts.json.ts     # API JSON artikel
│   └── [locale]/             # Halaman untuk setiap locale yang didukung
├── content/
│   └── posts/
│       ├── en/*.md           # Artikel English (locale default)
│       └── {locale}/*.md     # Artikel untuk setiap locale yang didukung
└── styles/
    └── global.css            # Token @theme Tailwind CSS v4 + gaya dasar
public/
├── favicon.svg
├── robots.txt
└── .well-known/
.github/
└── workflows/
    └── deploy-cloudflare-pages.yml     # Deploy Cloudflare Pages (default)
```

## Deployment

### Cloudflare Pages (default)

Workflow yang disertakan (`.github/workflows/deploy-cloudflare-pages.yml`) men-deploy secara otomatis:

1. Buka **Settings** > **Pages** > **Source** repositori: pilih **GitHub Actions**
2. Perbarui `site` di `astro.config.mjs` dengan URL Cloudflare Pages Anda
3. Push ke `main` — situs di-deploy secara otomatis

### Platform lain

Output adalah HTML statis di `dist/`, dapat di-deploy di mana saja:

```bash
pnpm build
# Upload dist/ ke Netlify, Vercel, atau host statis mana pun
```

## Filosofi Desain

1. **Tipografi adalah desain** -- Heading sans-serif Bricolage Grotesque, body text bersih system-ui, dan ritme baca yang disetel dengan cermat. Tipografi *adalah* identitas visual.
2. **Teks itu indah** -- Teks yang diatur dengan baik di halaman yang tenang adalah antarmuka yang paling elegan.
3. **Berfungsi di mana saja** -- Stack font lintas platform dengan fallback CJK (PingFang SC, Microsoft YaHei). Tanpa penundaan pemuatan font web, tanpa pergeseran tata letak.
4. **AI-native** -- Discoverability LLM kelas satu dengan llms.txt, endpoint terstruktur, dan konten yang dapat dibaca mesin.
5. **Halus, bukan rumit** -- Token desain `@theme` Tailwind CSS v4 membuat kustomisasi mudah. Satu file konfigurasi (`src/config/site.ts`) mengontrol seluruh situs.

## Penghargaan

Terinspirasi oleh [yinwang.org](https://www.yinwang.org).

Sistem tema terinspirasi dari [Raphael Publish](https://github.com/liuxiaopai-ai/raphael-publish).

## Berkontribusi

Kontribusi disambut. Silakan buka issue terlebih dahulu untuk mendiskusikan perubahan yang ingin Anda lakukan.

## Lisensi

[MIT](LICENSE)
