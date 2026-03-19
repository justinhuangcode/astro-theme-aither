# Aither

[English](./README.md) | [简体中文](./README_ZH-HANS.md) | [繁體中文](./README_ZH-HANT.md) | [한국어](./README_KO.md) | **Français** | [Deutsch](./README_DE.md) | [Italiano](./README_IT.md) | [Español](./README_ES.md) | [Русский](./README_RU.md) | [Bahasa Indonesia](./README_ID.md) | [Português (BR)](./README_PT-BR.md)

[![Deploy](https://github.com/justinhuangcode/astro-theme-aither/actions/workflows/deploy-cloudflare-pages.yml/badge.svg)](https://github.com/justinhuangcode/astro-theme-aither/actions/workflows/deploy-cloudflare-pages.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Astro](https://img.shields.io/badge/astro-6.0%2B-BC52EE.svg?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-v4-06B6D4.svg?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![GitHub Stars](https://img.shields.io/github/stars/justinhuangcode/astro-theme-aither?style=flat-square&logo=github)](https://github.com/justinhuangcode/astro-theme-aither/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/justinhuangcode/astro-theme-aither?style=flat-square)](https://github.com/justinhuangcode/astro-theme-aither/commits/main)

**[Aperçu en ligne](https://astro-theme-aither.pages.dev)**

An AI-native Astro theme built around beautiful text.  ✍️

## Pourquoi Aither ?

Une bonne écriture mérite une bonne typographie. La plupart des thèmes enfouissent vos mots sous des images hero, des animations et des décorations UI. Aither prend l'approche inverse — il laisse le texte être le design.

Une typographie sans-serif épurée avec des titres Bricolage Grotesque, un rythme de lecture soigneusement ajusté et une mise en page qui ne gêne pas. Tout est au service d'un seul objectif : rendre votre écriture belle à voir et à lire.

## Fonctionnalités

- **Typographie sans-serif** -- Titres Bricolage Grotesque associés à un corps en system-ui, avec des fallbacks CJK (PingFang SC, Microsoft YaHei), cohérent sur macOS, Windows, Linux et Android
- **Mode sombre** -- Basculement Clair / Sombre / Système avec persistance localStorage, animé via l'API View Transitions (révélation circulaire)
- **Tailwind CSS v4** -- Stylisation utility-first avec des tokens de design `@theme`, facile à personnaliser
- **i18n 11 langues** -- English, 简体中文, 繁體中文, 한국어, Français, Deutsch, Italiano, Español, Русский, Bahasa Indonesia, Português (BR)
- **55 articles d'exemple localisés** -- Chaque langue embarque les mêmes 5 articles de départ (`11 locales x 5 slugs`) afin que la démo et les vérifications de couverture restent alignées
- **Images OG dynamiques** -- Images Open Graph générées automatiquement par article via Satori + resvg-js
- **Commentaires Giscus** -- Système de commentaires basé sur GitHub Discussions
- **Chat Crisp** -- Widget de chat en direct optionnel via Crisp
- **Catégories et tags** -- Organisation des articles par catégories et tags optionnels
- **Articles épinglés** -- Définir `pinned: true` dans le frontmatter pour mettre en avant un article
- **Pagination** -- Taille de page configurable pour la liste du blog
- **Table des matières** -- Générée automatiquement à partir des titres de l'article
- **Informations auteur** -- Nom et avatar de l'auteur configurables
- **Endpoints AI-natifs** -- `/protocol.json`, `/skill.md`, `/policy.md`, `/reading.md`, `/subscribe.md`, `/auth.md`, `/agent/home.json`, `/llms.txt`, `/llms-full.txt`, `/api/posts.json`, et endpoints `.md` par article
- **Flux RSS** -- `/rss.xml` intégré via `@astrojs/rss`
- **Sitemap** -- Généré automatiquement via `@astrojs/sitemap`
- **SEO** -- Balises Open Graph, URLs canoniques, descriptions par article
- **Responsive** -- Mise en page adaptée au mobile, rythme de lecture préservé sur toutes les tailles d'écran
- **Google Analytics** -- Optionnel, zéro configuration via la variable d'environnement `PUBLIC_GA_ID`
- **Astro Content Collections** -- Articles Markdown typés avec validation de schéma Zod
- **Cloudflare Pages** -- Workflow CI/CD inclus pour le déploiement automatique

## Démarrage rapide

### Utiliser comme template GitHub

1. Cliquez sur **"Use this template"** sur [GitHub](https://github.com/justinhuangcode/astro-theme-aither)
2. Clonez votre nouveau dépôt :

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

3. Installez les dépendances :

```bash
pnpm install
```

4. Configurez votre site :

```bash
# astro.config.mjs -- définir l'URL de votre site (le seul endroit où renseigner l'URL)
site: 'https://your-domain.com'

# src/config/site.ts -- définir le nom, la description, les liens sociaux, la navigation, le pied de page
# (l'url est automatiquement lue depuis astro.config.mjs)
```

5. Configurer les variables d'environnement (optionnel) :

```bash
cp .env.example .env
# Éditez .env avec vos valeurs (GA, Giscus, Crisp)
```

6. Commencez à écrire :

```bash
pnpm dev
```

7. Déploiement : poussez vers `main`, GitHub Actions construit et déploie automatiquement.

### Installation manuelle

```bash
git clone https://github.com/justinhuangcode/astro-theme-aither.git my-blog
cd my-blog
rm -rf .git && git init
pnpm install
pnpm dev
```

## Format des articles

Créez des fichiers Markdown dans `src/content/posts/{locale}/` :

```markdown
---
title: Titre de l'article
date: 2026-01-01
description: Description optionnelle pour le SEO
category: Technology
tags: [optionnel, tags]
pinned: false
image: ./optional-cover.jpg
---

Votre contenu ici.
```

| Champ | Type | Requis | Défaut | Description |
|---|---|---|---|---|
| `title` | string | Oui | -- | Titre de l'article |
| `date` | date | Oui | -- | Date de publication (AAAA-MM-JJ) |
| `description` | string | Non | -- | Utilisé dans le flux RSS et les balises meta |
| `category` | string | Non | `"General"` | Catégorie de l'article |
| `tags` | string[] | Non | -- | Tags de l'article |
| `pinned` | boolean | Non | `false` | `true` met l'article en avant en haut de la liste |
| `image` | image | Non | -- | Image de couverture (chemin relatif ou import) |

## Commandes

| Commande | Description |
|---|---|
| `pnpm dev` | Démarrer le serveur de développement local |
| `pnpm check` | Exécuter les vérifications de type et de contenu Astro |
| `pnpm check:post-coverage` | Vérifier que chaque langue possède le même ensemble de slugs d'articles |
| `pnpm build` | Construire le site statique dans `dist/` |
| `pnpm smoke` | Exécuter les smoke tests des artefacts du protocole AI dans `dist/` |
| `pnpm preview` | Prévisualiser la version de production localement |
| `pnpm validate` | Lancer `check`, `check:post-coverage`, `build` et `smoke` d'un seul coup |

## Protocole AI-native

Pour construire une intégration AI ou agent, l'ordre recommandé est le suivant :

1. `/protocol.json` pour un manifeste structuré léger
2. `/skill.md` pour l'entrée narrative canonique du protocole
3. `/agent/home.json` pour les métadonnées du site et les derniers articles
4. `/policy.md` pour les règles et limites de sécurité
5. `/reading.md` pour les conseils de lecture / récupération
6. `/subscribe.md` pour les conseils de surveillance et de polling
7. `/auth.md` pour confirmer que les flux d'écriture / d'authentification sont encore réservés

Le protocole est volontairement en lecture seule pour le moment. Les agents peuvent découvrir, indexer, résumer, s'abonner et récupérer le Markdown, mais ne doivent pas supposer que l'écriture, les commentaires ou des API authentifiées existent déjà.

Des endpoints de schéma sont aussi disponibles pour des intégrations plus strictes :

- `/schemas/agent-protocol.schema.json`
- `/schemas/agent-home.schema.json`

Bonne pratique : si vous modifiez `protocol.json`, `skill.md`, `agent/home.json` ou tout document Markdown destiné aux agents, exécutez au minimum `pnpm smoke`.

## Configuration

### Paramètres du site (`src/config/site.ts`)

```typescript
export const siteConfig = {
  name: 'Aither',
  title: 'An AI-native Astro theme built around beautiful text.',
  description: '...',
  author: {
    name: 'Aither',
    avatar: '', // Importer depuis src/assets/ pour l'optimisation, ou utiliser une URL
  },
  // l'url est automatiquement lue depuis astro.config.mjs, inutile de la répéter ici
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

Définissez `ui.showMoreThemesMenu` sur `false` si vous voulez conserver le sélecteur Clair / Sombre / Système tout en masquant le sélecteur de thèmes personnalisés.

### Configuration Astro (`astro.config.mjs`)

```javascript
export default defineConfig({
  site: 'https://your-domain.com', // Requis pour RSS et sitemap
  integrations: [react(), mdx(), sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-hans', 'zh-hant', 'ko', 'fr', 'de', 'it', 'es', 'ru', 'id', 'pt-br'],
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
```

### Variables d'environnement (`.env`)

```bash
# Google Analytics (laisser vide pour désactiver)
PUBLIC_GA_ID=

# Chat Crisp (laisser vide pour désactiver)
PUBLIC_CRISP_WEBSITE_ID=

# Commentaires Giscus (tout laisser vide pour désactiver)
PUBLIC_GISCUS_REPO=
PUBLIC_GISCUS_REPO_ID=
PUBLIC_GISCUS_CATEGORY=
PUBLIC_GISCUS_CATEGORY_ID=
```

### i18n

La configuration des langues se trouve dans `src/i18n/index.ts`, les traductions dans `src/i18n/messages/*.ts`.

| Code | Langue |
|---|---|
| `en` | English (défaut) |
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

La locale par défaut (`en`) n'a pas de préfixe URL. Les autres locales utilisent leur code comme préfixe (ex. `/fr/`, `/ko/`).

## Structure du projet

```
src/
├── config/
│   ├── site.ts              # Nom du site, liens sociaux, navigation, pied de page, analytics, Giscus, Crisp
│   └── themes.ts            # Groupes de thèmes et libellés de thèmes localisés
├── content.config.ts         # Schéma Content Collections (Zod)
├── i18n/
│   ├── index.ts              # Définitions des locales, getMessages(), helpers de routage
│   └── messages/             # Fichiers de traduction (en.ts, zh-hans.ts, ko.ts, fr.ts, ...)
├── layouts/
│   └── Layout.astro          # Layout global (head, navigation, thème, analytics)
├── lib/
│   └── theme.ts              # Helpers d'état des préférences de thème
├── components/
│   ├── Navbar.astro          # Barre de navigation style Bootstrap 3 avec dégradé
│   ├── NavbarMobile.astro    # Navigation mobile avec contrôles de locale et de thème
│   ├── ModeSwitcher.astro    # Sélecteur desktop du mode et du style de thème
│   ├── LanguageSwitcher.astro# Sélecteur desktop de locale
│   ├── BlogGrid.astro        # Grille d'articles avec pagination
│   ├── BlogCard.astro        # Carte d'article avec catégorie, tags, date
│   ├── TableOfContents.astro # Table des matières auto-générée
│   ├── AuthorInfo.astro      # Nom et avatar de l'auteur
│   ├── Giscus.astro          # Commentaires GitHub Discussions
│   ├── Crisp.astro           # Widget de chat Crisp
│   ├── Analytics.astro       # Script Google Analytics
│   └── Prose.astro           # Wrapper typographique pour le contenu
├── pages/
│   ├── index.astro           # Accueil (English, locale par défaut)
│   ├── about.astro           # Page À propos
│   ├── page/                 # Liste paginée du blog
│   ├── posts/
│   │   ├── [slug].astro      # Détail de l'article (English)
│   │   └── [slug].md.ts      # Endpoint Markdown par article pour l'IA
│   ├── og/                   # Génération dynamique d'images OG
│   ├── rss.xml.ts            # Flux RSS
│   ├── llms.txt.ts           # llms.txt pour agents IA
│   ├── llms-full.txt.ts      # Contenu complet pour LLMs
│   ├── skill.md.ts           # Descripteur de compétence IA
│   ├── api/
│   │   └── posts.json.ts     # API JSON des articles
│   └── [locale]/             # Pages pour chaque locale supportée
├── content/
│   └── posts/
│       ├── en/*.md           # Articles English (locale par défaut)
│       └── {locale}/*.md     # Articles pour chaque locale supportée
└── styles/
    └── global.css            # Tokens @theme Tailwind CSS v4 + styles de base
public/
├── favicon.svg
├── robots.txt
└── .well-known/
.github/
└── workflows/
    └── deploy-cloudflare-pages.yml     # Déploiement Cloudflare Pages (défaut)
```

## Déploiement

### Cloudflare Pages (défaut)

Le workflow inclus (`.github/workflows/deploy-cloudflare-pages.yml`) déploie automatiquement :

1. Allez dans **Settings** > **Pages** > **Source** de votre dépôt : sélectionnez **GitHub Actions**
2. Mettez à jour `site` dans `astro.config.mjs` avec votre URL Cloudflare Pages
3. Poussez vers `main` — le site se déploie automatiquement

### Autres plateformes

La sortie est du HTML statique dans `dist/`, déployable partout :

```bash
pnpm build
# Uploadez dist/ vers Netlify, Vercel ou tout hébergement statique
```

## Philosophie de design

1. **La typographie est le design** -- Titres sans-serif en Bricolage Grotesque, corps de texte épuré en system-ui, et un rythme de lecture soigneusement ajusté. La police *est* l'identité visuelle.
2. **Le texte est beau** -- Un texte bien composé sur une page calme est l'interface la plus élégante.
3. **Fonctionne partout** -- Piles de polices multi-plateformes avec fallbacks CJK (PingFang SC, Microsoft YaHei). Pas de délai de chargement de polices web, pas de décalage de mise en page.
4. **AI-natif** -- Découvrabilité LLM de premier ordre avec llms.txt, endpoints structurés et contenu lisible par les machines.
5. **Raffiné, pas complexe** -- Les tokens de design `@theme` de Tailwind CSS v4 rendent la personnalisation simple. Un seul fichier de configuration (`src/config/site.ts`) contrôle tout le site.

## Remerciements

Inspiré par [yinwang.org](https://www.yinwang.org).

Système de thèmes inspiré par [Raphael Publish](https://github.com/liuxiaopai-ai/raphael-publish).

## Contribuer

Les contributions sont les bienvenues. Veuillez d'abord ouvrir une issue pour discuter de ce que vous souhaitez modifier.

## Licence

[MIT](LICENSE)
