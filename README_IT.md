# Aither

[English](./README.md) | [简体中文](./README_ZH-HANS.md) | [繁體中文](./README_ZH-HANT.md) | [한국어](./README_KO.md) | [Français](./README_FR.md) | [Deutsch](./README_DE.md) | **Italiano** | [Español](./README_ES.md) | [Русский](./README_RU.md) | [Bahasa Indonesia](./README_ID.md) | [Português (BR)](./README_PT-BR.md)

[![Deploy](https://github.com/justinhuangcode/astro-theme-aither/actions/workflows/deploy-cloudflare-pages.yml/badge.svg)](https://github.com/justinhuangcode/astro-theme-aither/actions/workflows/deploy-cloudflare-pages.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Astro](https://img.shields.io/badge/astro-6.0%2B-BC52EE.svg?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-v4-06B6D4.svg?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![GitHub Stars](https://img.shields.io/github/stars/justinhuangcode/astro-theme-aither?style=flat-square&logo=github)](https://github.com/justinhuangcode/astro-theme-aither/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/justinhuangcode/astro-theme-aither?style=flat-square)](https://github.com/justinhuangcode/astro-theme-aither/commits/main)

**[Anteprima dal vivo](https://astro-theme-aither.pages.dev)**

An AI-native Astro theme built around beautiful text.  ✍️

## Perché Aither?

Una buona scrittura merita una buona tipografia. La maggior parte dei temi seppellisce le tue parole sotto immagini hero, animazioni e decorazioni UI. Aither fa l'opposto — lascia che il testo sia il design.

Tipografia sans-serif pulita con titoli Bricolage Grotesque, un ritmo di lettura attentamente calibrato e un layout che non si mette in mezzo. Tutto è al servizio di un unico obiettivo: far apparire e sentire bella la tua scrittura.

## Funzionalità

- **Tipografia sans-serif** -- Titoli Bricolage Grotesque abbinati a corpo in system-ui, con fallback CJK (PingFang SC, Microsoft YaHei), coerente su macOS, Windows, Linux e Android
- **Modalità scura** -- Commutazione Chiaro / Scuro / Sistema con persistenza localStorage, animata tramite l'API View Transitions (rivelazione circolare)
- **Tailwind CSS v4** -- Stile utility-first con token di design `@theme`, facile da personalizzare
- **i18n 11 lingue** -- English, 简体中文, 繁體中文, 한국어, Français, Deutsch, Italiano, Español, Русский, Bahasa Indonesia, Português (BR)
- **55 articoli demo localizzati** -- Ogni lingua include gli stessi 5 articoli iniziali (`11 locale x 5 slug`) così demo e controlli di copertura restano allineati
- **Immagini OG dinamiche** -- Immagini Open Graph generate automaticamente per articolo tramite Satori + resvg-js
- **Commenti Giscus** -- Sistema di commenti basato su GitHub Discussions
- **Chat Crisp** -- Widget di chat dal vivo opzionale tramite Crisp
- **Categorie e tag** -- Organizzazione degli articoli con categorie e tag opzionali
- **Articoli in evidenza** -- Impostare `pinned: true` nel frontmatter per mettere in evidenza gli articoli
- **Paginazione** -- Dimensione pagina configurabile per l'elenco del blog
- **Indice** -- Generato automaticamente dai titoli dell'articolo
- **Informazioni autore** -- Nome e avatar dell'autore configurabili
- **Endpoint AI-nativi** -- `/protocol.json`, `/skill.md`, `/policy.md`, `/reading.md`, `/subscribe.md`, `/auth.md`, `/agent/home.json`, `/llms.txt`, `/llms-full.txt`, `/api/posts.json` e endpoint `.md` per articolo
- **Feed RSS** -- `/rss.xml` integrato tramite `@astrojs/rss`
- **Sitemap** -- Generata automaticamente tramite `@astrojs/sitemap`
- **SEO** -- Tag Open Graph, URL canonici, descrizioni per articolo
- **Responsive** -- Layout mobile-friendly che preserva il ritmo di lettura su tutte le dimensioni dello schermo
- **Google Analytics** -- Opzionale, zero configurazione tramite variabile d'ambiente `PUBLIC_GA_ID`
- **Astro Content Collections** -- Articoli Markdown type-safe con validazione schema Zod
- **Cloudflare Pages** -- Workflow CI/CD incluso per il deploy automatico

## Avvio rapido

### Usare come template GitHub

1. Clicca su **"Use this template"** su [GitHub](https://github.com/justinhuangcode/astro-theme-aither)
2. Clona il tuo nuovo repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

3. Installa le dipendenze:

```bash
pnpm install
```

4. Configura il tuo sito:

```bash
# astro.config.mjs -- imposta l'URL del tuo sito (l'unico punto in cui devi impostare l'URL)
site: 'https://your-domain.com'

# src/config/site.ts -- imposta nome, descrizione, link social, navigazione, footer
# (l'url viene letto automaticamente da astro.config.mjs)
```

5. Configura le variabili d'ambiente (opzionale):

```bash
cp .env.example .env
# Modifica .env con i tuoi valori (GA, Giscus, Crisp)
```

6. Inizia a scrivere:

```bash
pnpm dev
```

7. Deploy: push su `main`, GitHub Actions compila e distribuisce automaticamente.

### Installazione manuale

```bash
git clone https://github.com/justinhuangcode/astro-theme-aither.git my-blog
cd my-blog
rm -rf .git && git init
pnpm install
pnpm dev
```

## Formato degli articoli

Crea file Markdown in `src/content/posts/{locale}/`:

```markdown
---
title: Titolo dell'articolo
date: 2026-01-01
description: Descrizione opzionale per il SEO
category: Technology
tags: [opzionale, tag]
pinned: false
image: ./optional-cover.jpg
---

Il tuo contenuto qui.
```

| Campo | Tipo | Richiesto | Predefinito | Descrizione |
|---|---|---|---|---|
| `title` | string | Sì | -- | Titolo dell'articolo |
| `date` | date | Sì | -- | Data di pubblicazione (AAAA-MM-GG) |
| `description` | string | No | -- | Usato nel feed RSS e nei meta tag |
| `category` | string | No | `"General"` | Categoria dell'articolo |
| `tags` | string[] | No | -- | Tag dell'articolo |
| `pinned` | boolean | No | `false` | `true` mette l'articolo in evidenza in cima alla lista |
| `image` | image | No | -- | Immagine di copertina (percorso relativo o import) |

## Comandi

| Comando | Descrizione |
|---|---|
| `pnpm dev` | Avvia il server di sviluppo locale |
| `pnpm check` | Esegue i controlli di tipo e contenuto Astro |
| `pnpm check:post-coverage` | Verifica che ogni lingua abbia la stessa copertura di slug degli articoli |
| `pnpm build` | Compila il sito statico in `dist/` |
| `pnpm smoke` | Esegue gli smoke test sugli artefatti del protocollo AI in `dist/` |
| `pnpm preview` | Anteprima locale della build di produzione |
| `pnpm validate` | Esegue insieme `check`, `check:post-coverage`, `build` e `smoke` |

## Protocollo AI-native

Se stai costruendo un'integrazione AI o agent, l'ordine consigliato è questo:

1. `/protocol.json` per un manifesto strutturato leggero
2. `/skill.md` come punto d'ingresso narrativo canonico del protocollo
3. `/agent/home.json` per metadati correnti del sito e articoli più recenti
4. `/policy.md` per regole e confini di sicurezza
5. `/reading.md` per la guida di lettura / retrieval
6. `/subscribe.md` per monitoraggio e polling
7. `/auth.md` per confermare che i flussi di scrittura / autenticazione sono ancora riservati

Al momento il protocollo è intenzionalmente di sola lettura. Gli agent possono scoprire, indicizzare, riassumere, sottoscrivere e recuperare Markdown, ma non devono presumere che esistano posting, commenti o API di scrittura autenticate.

Sono disponibili anche endpoint schema per integrazioni più rigide:

- `/schemas/agent-protocol.schema.json`
- `/schemas/agent-home.schema.json`

Best practice: se modifichi `protocol.json`, `skill.md`, `agent/home.json` o altri documenti Markdown rivolti agli agent, esegui almeno `pnpm smoke`.

## Configurazione

### Impostazioni del sito (`src/config/site.ts`)

```typescript
export const siteConfig = {
  name: 'Aither',
  title: 'An AI-native Astro theme built around beautiful text.',
  description: '...',
  author: {
    name: 'Aither',
    avatar: '', // Importa da src/assets/ per l'ottimizzazione, o usa stringa URL
  },
  // l'url viene letto automaticamente da astro.config.mjs, quindi qui non va ripetuto
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

Imposta `ui.showMoreThemesMenu` su `false` se vuoi mantenere il toggle Chiaro / Scuro / Sistema ma nascondere il selettore dei temi personalizzati.

### Configurazione Astro (`astro.config.mjs`)

```javascript
export default defineConfig({
  site: 'https://your-domain.com', // Richiesto per RSS e sitemap
  integrations: [react(), mdx(), sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-hans', 'zh-hant', 'ko', 'fr', 'de', 'it', 'es', 'ru', 'id', 'pt-br'],
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
```

### Variabili d'ambiente (`.env`)

```bash
# Google Analytics (lasciare vuoto per disabilitare)
PUBLIC_GA_ID=

# Chat Crisp (lasciare vuoto per disabilitare)
PUBLIC_CRISP_WEBSITE_ID=

# Commenti Giscus (lasciare tutti vuoti per disabilitare)
PUBLIC_GISCUS_REPO=
PUBLIC_GISCUS_REPO_ID=
PUBLIC_GISCUS_CATEGORY=
PUBLIC_GISCUS_CATEGORY_ID=
```

### i18n

La configurazione delle lingue è in `src/i18n/index.ts`, le traduzioni in `src/i18n/messages/*.ts`.

| Codice | Lingua |
|---|---|
| `en` | English (predefinito) |
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

La locale predefinita (`en`) non ha prefisso URL. Le altre locale usano il loro codice come prefisso (es. `/it/`, `/ko/`).

## Struttura del progetto

```
src/
├── config/
│   ├── site.ts              # Nome del sito, link social, navigazione, footer, analytics, Giscus, Crisp
│   └── themes.ts            # Gruppi di temi ed etichette tema localizzate
├── content.config.ts         # Schema Content Collections (Zod)
├── i18n/
│   ├── index.ts              # Definizioni locale, getMessages(), helper di routing
│   └── messages/             # File di traduzione (en.ts, zh-hans.ts, ko.ts, fr.ts, ...)
├── layouts/
│   └── Layout.astro          # Layout globale (head, navigazione, cambio tema, analytics)
├── lib/
│   └── theme.ts              # Helper di stato per le preferenze del tema
├── components/
│   ├── Navbar.astro          # Navbar stile Bootstrap 3 con gradiente
│   ├── NavbarMobile.astro    # Navigazione mobile con controlli di locale e tema
│   ├── ModeSwitcher.astro    # Switcher desktop per modalità e stile del tema
│   ├── LanguageSwitcher.astro# Switcher desktop della locale
│   ├── BlogGrid.astro        # Griglia articoli con paginazione
│   ├── BlogCard.astro        # Card articolo con categoria, tag, data
│   ├── TableOfContents.astro # Indice auto-generato dai titoli
│   ├── AuthorInfo.astro      # Nome e avatar dell'autore
│   ├── Giscus.astro          # Commenti GitHub Discussions
│   ├── Crisp.astro           # Widget chat Crisp
│   ├── Analytics.astro       # Script Google Analytics
│   └── Prose.astro           # Wrapper tipografico per il contenuto
├── pages/
│   ├── index.astro           # Home (English, locale predefinita)
│   ├── about.astro           # Pagina Chi siamo
│   ├── page/                 # Lista blog paginata
│   ├── posts/
│   │   ├── [slug].astro      # Dettaglio articolo (English)
│   │   └── [slug].md.ts      # Endpoint Markdown per articolo per l'AI
│   ├── og/                   # Generazione dinamica immagini OG
│   ├── rss.xml.ts            # Feed RSS
│   ├── llms.txt.ts           # llms.txt per agenti AI
│   ├── llms-full.txt.ts      # Contenuto completo per LLM
│   ├── skill.md.ts           # Descrittore skill AI
│   ├── api/
│   │   └── posts.json.ts     # API JSON degli articoli
│   └── [locale]/             # Pagine per ogni locale supportata
├── content/
│   └── posts/
│       ├── en/*.md           # Articoli English (locale predefinita)
│       └── {locale}/*.md     # Articoli per ogni locale supportata
└── styles/
    └── global.css            # Token @theme Tailwind CSS v4 + stili di base
public/
├── favicon.svg
├── robots.txt
└── .well-known/
.github/
└── workflows/
    ├── deploy-cloudflare-pages.yml     # Deploy Cloudflare Pages (predefinito)
```

## Distribuzione

### Cloudflare Pages (predefinito)

Il workflow incluso (`.github/workflows/deploy-cloudflare-pages.yml`) distribuisce automaticamente:

1. Vai su **Settings** > **Pages** > **Source** del repository: seleziona **GitHub Actions**
2. Aggiorna `site` in `astro.config.mjs` con il tuo URL Cloudflare Pages
3. Push su `main` — il sito viene distribuito automaticamente

### Altre piattaforme

L'output è HTML statico in `dist/`, distribuibile ovunque:

```bash
pnpm build
# Carica dist/ su Netlify, Vercel o qualsiasi host statico
```

## Filosofia di design

1. **La tipografia è il design** -- Titoli sans-serif in Bricolage Grotesque, corpo testo pulito in system-ui e un ritmo di lettura attentamente calibrato. Il carattere tipografico *è* l'identità visiva.
2. **Il testo è bello** -- Un testo ben composto su una pagina tranquilla è l'interfaccia più elegante.
3. **Funziona ovunque** -- Stack di font multipiattaforma con fallback CJK (PingFang SC, Microsoft YaHei). Nessun ritardo di caricamento font web, nessuno spostamento del layout.
4. **AI-nativo** -- Scopribilità LLM di prima classe con llms.txt, endpoint strutturati e contenuto leggibile dalle macchine.
5. **Raffinato, non complesso** -- I token di design `@theme` di Tailwind CSS v4 rendono la personalizzazione semplice. Un solo file di configurazione (`src/config/site.ts`) controlla l'intero sito.

## Ringraziamenti

Ispirato da [yinwang.org](https://www.yinwang.org).

Sistema di temi ispirato a [Raphael Publish](https://github.com/liuxiaopai-ai/raphael-publish).

## Contribuire

I contributi sono benvenuti. Si prega di aprire prima un issue per discutere le modifiche desiderate.

## Licenza

[MIT](LICENSE)
