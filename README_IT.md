# Aither

[English](./README.md) | [简体中文](./README_ZH-HANS.md) | [繁體中文](./README_ZH-HANT.md) | [한국어](./README_KO.md) | [Français](./README_FR.md) | [Deutsch](./README_DE.md) | **Italiano** | [Español](./README_ES.md) | [Русский](./README_RU.md) | [Bahasa Indonesia](./README_ID.md) | [Português (BR)](./README_PT-BR.md)

[![Deploy](https://github.com/justinhuangcode/astro-theme-aither/actions/workflows/deploy-cloudflare-pages.yml/badge.svg)](https://github.com/justinhuangcode/astro-theme-aither/actions/workflows/deploy-cloudflare-pages.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Astro](https://img.shields.io/badge/astro-6.0%2B-BC52EE.svg?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-v4-06B6D4.svg?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![GitHub Stars](https://img.shields.io/github/stars/justinhuangcode/astro-theme-aither?style=flat-square&logo=github)](https://github.com/justinhuangcode/astro-theme-aither/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/justinhuangcode/astro-theme-aither?style=flat-square)](https://github.com/justinhuangcode/astro-theme-aither/commits/main)

**[Anteprima live](https://astro-theme-aither.pages.dev)**

Un tema Astro AI-native costruito attorno a un testo bello da leggere. ✍️

Tipografia al centro per i lettori umani, endpoint machine-readable per gli agenti AI.

Aither è un tema di publishing multilingue che tratta entrambe le superfici come capacità di prodotto di primo livello: pagine sobrie e leggibili per le persone, documenti di protocollo pubblici ed endpoint Markdown per gli agenti. Non è un semplice starter blog a cui è stata aggiunta l'etichetta AI in un secondo momento.

## Modello Lettore / Agente

- `Reader` indica una persona che legge il sito HTML: home, pagine articolo, pagina About, commenti e controlli del tema.
- `Agent` indica software che consuma la superficie pubblica machine-readable: `protocol.json`, `skill.md`, `agent/home.json` per locale, `llms.txt`, `api/posts.json` e Markdown per articolo.
- `Read-only` significa che oggi sono supportati discovery, lettura, indicizzazione e monitoraggio; pubblicazione, commenti e scritture autenticate non sono esposti.

```mermaid
flowchart LR
  A["Aither"] --> B["Reader Surface<br/>HTML pages"]
  A --> C["Agent Surface<br/>JSON / Markdown"]
  B --> D["Canonical article URLs"]
  C --> E["protocol.json -> skill.md -> agent/home.json"]
  C --> F["llms.txt / api/posts.json / posts/{slug}.md"]
```

## Perché Aither?

La maggior parte dei temi blog ottimizza hero section, animazioni e chrome UI. Aither ottimizza ritmo di lettura, sobrietà tipografica e densità informativa.

Allo stesso tempo, il progetto assume che il sito sarà letto tanto dal software quanto dagli esseri umani. Per questo il repository include una vera superficie di protocollo: `protocol.json`, `skill.md`, documenti machine-readable localizzati, `llms.txt`, corpi articolo in Markdown, JSON Schema e un'API dei post cross-locale.

## Cosa include oggi

- **Esperienza di lettura tipografica** -- titoli Bricolage Grotesque, corpo testo di sistema, fallback CJK e font distribuiti localmente
- **Doppia vista in homepage** -- vista lettore e vista agente; gli umani vedono card, gli agenti vedono accesso diretto ai Markdown e `/for-agents/` spiega il protocollo
- **41 temi curati** -- Light / Dark / System più 41 stili nominati in `src/config/themes.ts`
- **Superficie AI-native completa** -- `/protocol.json`, `/skill.md`, `/agent/home.json` localizzati, `/policy.md`, `/reading.md`, `/subscribe.md`, `/auth.md`, `/llms.txt`, `/llms-full.txt`, `/api/posts.json`, `.md` per articolo, About Markdown, JSON Schema e `/.well-known/ai-plugin.json`
- **Read-only per scelta** -- gli agenti possono scoprire, leggere, indicizzare, riassumere, monitorare e citare il contenuto, ma non esistono ancora API di scrittura né flussi autenticati
- **11 lingue** -- UI localizzata, hreflang, route e feed in 11 locali
- **66 sample post localizzati** -- 6 slug iniziali replicati in 11 locali (`11 x 6 = 66`) e verificati da `pnpm check:post-coverage`
- **Base editoriale completa** -- OG dinamiche, RSS, sitemap, JSON-LD, canonical, tag, pinned post, paginazione, TOC e Giscus / Crisp / Google Analytics opzionali
- **Estendibile oltre i post** -- il routing supporta già altre collection tramite Astro Content Collections e `siteConfig.sections`
- **Stack Astro moderno** -- Astro 6, MDX, React 19 dove utile, Tailwind CSS v4 e una pipeline di validazione per contenuto, build e protocollo

## Requisiti

- **Node.js** -- `22 LTS` consigliato. Versioni minime: `20.19.1+` o `22.12.0+`
- **pnpm** -- il repository fissa `pnpm@10.32.1` tramite `packageManager`
- **Corepack** -- esegui `corepack enable` una volta per usare automaticamente la versione prevista di pnpm
- **Cloudflare Pages** -- serve solo se vuoi usare il workflow GitHub Actions incluso

## Avvio rapido

### Usa come template GitHub

1. Clicca **"Use this template"** su [GitHub](https://github.com/justinhuangcode/astro-theme-aither)
2. Clona il tuo nuovo repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

3. Attiva Corepack e installa le dipendenze:

```bash
corepack enable
pnpm install
```

4. Configura il sito:

```bash
# astro.config.mjs -- set your site URL (only place you need to set it)
site: 'https://your-domain.com'

# src/config/site.ts -- set name, description, social links, nav, footer
# (url is automatically read from astro.config.mjs)
```

5. Configura le variabili d'ambiente (opzionale):

```bash
cp .env.example .env
# Edit .env with your values (GA, Giscus, Crisp)
```

6. Valida lo starter prima di modifiche grandi:

```bash
pnpm validate
```

7. Avvia lo sviluppo:

```bash
pnpm dev
```

8. Se userai il workflow Cloudflare integrato, completa prima la sezione [Distribuzione](#distribuzione)

### Setup manuale

```bash
git clone https://github.com/justinhuangcode/astro-theme-aither.git my-blog
cd my-blog
corepack enable
pnpm install
pnpm validate
pnpm dev
```

Buona pratica: per un nuovo sito, preferisci il flow template GitHub. Se cloni upstream manualmente, verifica prima che tutto funzioni in locale.

## Modello dei contenuti

Crea file MDX in `src/content/posts/{locale}/`:

```markdown
---
title: Your Post Title
date: "2026-01-01T16:00:00+08:00"
description: Optional description for SEO
category: Technology
tags: [optional, tags]
pinned: false
image: ./optional-cover.jpg
---

Your content here.
```

| Campo | Tipo | Obbligatorio | Default | Descrizione |
|---|---|---|---|---|
| `title` | string | Sì | -- | Titolo del post |
| `date` | date | Sì | -- | Data di pubblicazione, meglio ISO 8601 con timezone |
| `description` | string | No | -- | Per RSS e meta tag |
| `category` | string | No | `"General"` | Categoria |
| `tags` | string[] | No | -- | Tag |
| `pinned` | boolean | No | `false` | Fissa il post in alto |
| `image` | image | No | -- | Immagine di copertina |

Buone pratiche:

- Usa timestamp ISO 8601 completi con timezone, ad esempio `2026-03-19T16:27:43+08:00`
- Mantieni lo stesso slug in ogni locale per permettere a `pnpm check:post-coverage` di verificare la parità
- Tratta l'inglese come baseline e riusa lo stesso nome file in ogni lingua

## Comandi

| Comando | Descrizione |
|---|---|
| `pnpm dev` | Avvia il server di sviluppo |
| `pnpm check` | Esegue i controlli Astro e contenuto |
| `pnpm check:post-coverage` | Verifica la parità degli slug tra locali |
| `pnpm build` | Genera il sito statico in `dist/` |
| `pnpm smoke` | Esegue smoke test del protocollo AI |
| `pnpm preview` | Anteprima del build di produzione |
| `pnpm validate` | Check consigliato prima del push: `check`, `check:post-coverage`, `build`, `smoke` |

## Protocollo AI-native

`/for-agents/` è la guida per gli umani, ma il contratto machine-readable reale è il seguente:

| Endpoint | Ambito | Scopo |
|---|---|---|
| `/protocol.json` | Globale | Manifest leggero e link agli schema |
| `/skill.md` | Globale | Punto d'ingresso narrativo canonico |
| `/{locale}/agent/home.json` | Per locale | Stato corrente del sito e ultimi post |
| `/{locale}/policy.md` | Per locale | Regole, ordine di discovery e limiti |
| `/{locale}/reading.md` | Per locale | Workflow di lettura consigliato |
| `/{locale}/subscribe.md` | Per locale | Guida a polling e monitoraggio |
| `/{locale}/auth.md` | Per locale | Contratto auth riservato; il sito resta read-only |
| `/{locale}/llms.txt` | Per locale | Indice compatto per LLM |
| `/{locale}/llms-full.txt` | Per locale | Contenuto inline completo per workflow bulk |
| `/api/posts.json` | Tutte le locali | Metadati strutturati in tutte le lingue |
| `/{locale}/posts/{slug}.md` | Per locale | Corpo Markdown canonico di un articolo |
| `/{locale}/about.md` | Per locale | Pagina About in Markdown |
| `/.well-known/ai-plugin.json` | Globale | Metadati leggeri di discovery |
| `/schemas/agent-protocol.schema.json` | Globale | JSON Schema di `protocol.json` |
| `/schemas/agent-home.schema.json` | Globale | JSON Schema di `agent/home.json` |

La locale predefinita `en` non ha prefisso. Il Markdown inglese vive quindi in `/posts/{slug}.md`, quello italiano in `/it/posts/{slug}.md`.

Buone pratiche:

1. Parti da `/protocol.json`, poi leggi `/skill.md`, poi recupera `agent/home.json`
2. Usa `/api/posts.json` per discovery multi-locale e gli endpoint `.md` per il recupero finale
3. Cita l'URL HTML canonico quando rimandi a utenti umani
4. Refetcha gli endpoint se la freschezza conta
5. Esegui almeno `pnpm smoke` quando modifichi il protocollo

## Configurazione

File principali:

- `astro.config.mjs` -- URL di produzione, integrazioni Astro e routing delle locali
- `src/config/site.ts` -- metadati del sito, nav/footer, paginazione, timezone, controlli del tema, link social e sections opzionali
- `src/config/themes.ts` -- catalogo dei 41 temi e label localizzate
- `src/content.config.ts` -- schema Zod e registrazione delle collection
- `src/i18n/index.ts` e `src/i18n/messages/*.ts` -- locali, helper di routing e testi tradotti
- `.env` -- Google Analytics, Crisp e Giscus opzionali

### Impostazioni del sito (`src/config/site.ts`)

```typescript
export const siteConfig = {
  name: 'Aither',
  title: 'An AI-native Astro theme built around beautiful text.',
  description: '...',
  author: {
    name: 'Aither',
    avatar: '', // Import from src/assets/ for optimization, or use URL string
  },
  // url is automatically read from astro.config.mjs — no need to set it here
  social: [
    { title: 'GitHub', href: 'https://github.com/...', icon: 'github' },
    { title: 'Twitter', href: '', icon: 'x' },
  ],
  blog: { paginationSize: 20, timeZone: 'Asia/Shanghai' },
  analytics: { googleAnalyticsId: import.meta.env.PUBLIC_GA_ID || '' },
  crisp: { websiteId: import.meta.env.PUBLIC_CRISP_WEBSITE_ID || '' },
  ui: {
    defaultMode: 'system',
    defaultStyle: 'default',
    enableModeSwitch: true,
    showMoreThemesMenu: true,
  },
  sections: [
    // Optional extra collections beyond posts
    // { id: 'translations', labelKey: 'translations' },
  ],
  giscus: { repo: '...', repoId: '...', category: '...', categoryId: '...' },
  nav: [
    { labelKey: 'blog', href: '/' },
    { labelKey: 'about', href: '/about' },
  ],
  footer: { copyrightYear: 'auto', sections: [/* ... */] },
};
```

Imposta `ui.showMoreThemesMenu` su `false` se vuoi mantenere Light / Dark / System ma nascondere il picker completo.

### Sezioni di contenuto aggiuntive

Il progetto è già pronto per più di una collection:

```typescript
// src/config/site.ts
sections: [{ id: 'translations', labelKey: 'translations' }]

// src/content.config.ts
const translations = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/translations' }),
  schema: contentSchema,
});

export const collections = { posts, translations };
```

Poi crea il contenuto in `src/content/translations/{locale}/`. Le route vengono generate automaticamente.

### Configurazione Astro (`astro.config.mjs`)

```javascript
export default defineConfig({
  site: 'https://your-domain.com',
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
# Google Analytics (leave empty to disable)
PUBLIC_GA_ID=

# Crisp Chat (leave empty to disable)
PUBLIC_CRISP_WEBSITE_ID=

# Giscus Comments (leave all empty to disable)
PUBLIC_GISCUS_REPO=
PUBLIC_GISCUS_REPO_ID=
PUBLIC_GISCUS_CATEGORY=
PUBLIC_GISCUS_CATEGORY_ID=
```

### i18n

La configurazione linguistica si trova in `src/i18n/index.ts`, le traduzioni in `src/i18n/messages/*.ts`.

| Codice | Lingua |
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

Buona pratica: tratta l'inglese come baseline canonica per gli slug ed esegui `pnpm check:post-coverage` prima del deploy.

## Struttura del progetto

```text
src/
├── config/
│   ├── site.ts                     # Site metadata, nav/footer, theme controls, optional sections
│   └── themes.ts                   # 41 curated themes + localized labels
├── content.config.ts               # Content Collections schema (Zod)
├── content/
│   └── posts/{locale}/*.mdx        # Multilingual post content
├── i18n/
│   ├── index.ts                    # Locale definitions and routing helpers
│   └── messages/*.ts               # UI translations for all locales
├── components/
│   ├── pages/                      # Page-level UI: home, post, about, for-agents
│   ├── AIAccessList.astro          # Agent-facing Markdown post list
│   ├── Navbar.astro                # Nav, locale switcher, theme controls
│   ├── ModeSwitcher.astro          # Light/Dark/System + custom theme picker
│   ├── TableOfContents.astro       # Heading-driven TOC
│   └── Giscus.astro                # Optional comments
├── lib/
│   ├── agent-protocol.ts           # Protocol manifest + agent docs generation
│   ├── markdown-endpoint.ts        # Markdown response helpers
│   ├── og-image.ts                 # Dynamic OG image generation
│   ├── posts.ts                    # Locale-aware content fetching + sorting
│   ├── site-content.ts             # Paths, pagination, RSS, llms.txt helpers
│   └── theme.ts                    # Theme preference state helpers
├── layouts/
│   └── Layout.astro                # SEO, hreflang, JSON-LD, alternates, global shell
├── pages/
│   ├── index.astro                 # Home (default locale)
│   ├── about.astro                 # About page
│   ├── for-agents.astro            # Human-facing protocol landing page
│   ├── page/[num].astro            # Paginated home listing
│   ├── posts/
│   │   ├── [slug].astro            # Post detail
│   │   └── [slug].md.ts            # Per-post Markdown endpoint
│   ├── agent/home.json.ts          # Aggregated machine-readable site state
│   ├── protocol.json.ts            # Structured manifest
│   ├── skill.md.ts                 # Canonical narrative protocol document
│   ├── policy.md.ts                # Agent rules and safety guidance
│   ├── reading.md.ts               # Retrieval workflow guidance
│   ├── subscribe.md.ts             # Monitoring guidance
│   ├── auth.md.ts                  # Reserved auth contract
│   ├── llms.txt.ts                 # Compact LLM index
│   ├── llms-full.txt.ts            # Full inlined content for LLMs
│   ├── api/posts.json.ts           # Cross-locale posts metadata
│   ├── schemas/*.json.ts           # JSON Schemas for protocol endpoints
│   ├── [section]/...               # Auto-generated extra collection routes
│   └── [locale]/...                # Localized counterparts for all major routes
├── styles/
│   ├── fonts.css                   # Local Bricolage Grotesque font faces
│   └── global.css                  # Tailwind v4 tokens, typography, theme variables
public/
├── .well-known/ai-plugin.json      # Public machine discovery metadata
├── favicon.svg
├── logo.svg / logo-dark.svg
└── og.png
scripts/
├── check-post-coverage.mjs         # Enforce slug parity across locales
└── smoke-agent-protocol.mjs        # Validate generated protocol artifacts
```

## Distribuzione

### Cloudflare Pages (predefinito)

Il workflow `.github/workflows/deploy-cloudflare-pages.yml` è orientato a Cloudflare Pages e valida il sito prima del deploy.

1. Crea un progetto Cloudflare Pages. Il workflow usa di default il nome del repository, oppure `CLOUDFLARE_PAGES_PROJECT_NAME` se vuoi sovrascriverlo
2. Aggiungi `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID` nei GitHub Secrets
3. Aggiorna `site` in `astro.config.mjs`
4. Esegui `pnpm validate`
5. Fai push su `main`

Buona pratica: tieni allineati nome del repository e progetto Pages, oppure imposta la variabile di repository `CLOUDFLARE_PAGES_PROJECT_NAME` se ti serve un target diverso.

### Altre piattaforme

L'output è HTML statico in `dist/`:

```bash
pnpm build
# Upload dist/ to Netlify, Vercel, GitHub Pages, or any static host
```

## Principi

1. **La tipografia è l'interfaccia** -- il buon testo non dovrebbe lottare contro il tema.
2. **Umani e agenti contano allo stesso modo** -- il protocollo pubblico è parte del prodotto.
3. **La parità multilingue va verificata** -- non va data per scontata.
4. **I punti di estensione restano vicini al contenuto** -- tramite Collections e configurazione.
5. **Meno magia, più chiarezza** -- output statico, documenti espliciti e contratti chiari.

## Ringraziamenti

- Ispirato da [yinwang.org](https://www.yinwang.org).
- Parti del sistema di temi si ispirano a [Raphael Publish](https://github.com/liuxiaopai-ai/raphael-publish) e a [EvoMap](https://evomap.ai).

## Contribuire

I contributi sono benvenuti. Apri prima una issue per discutere il cambiamento.

## Licenza

[MIT](LICENSE)
