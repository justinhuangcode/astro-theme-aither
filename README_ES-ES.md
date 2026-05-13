# Aither

[English](./README.md) | [简体中文](./README_ZH-CN.md) | [繁體中文](./README_ZH-TW.md) | [한국어](./README_KO-KR.md) | [Français](./README_FR-FR.md) | [Deutsch](./README_DE-DE.md) | [Italiano](./README_IT-IT.md) | **Español** | [Русский](./README_RU-RU.md) | [Bahasa Indonesia](./README_ID-ID.md) | [Português (BR)](./README_PT-BR.md)

[![Deploy](https://github.com/justinhuangai/astro-theme-aither/actions/workflows/deploy-cloudflare-pages.yml/badge.svg)](https://github.com/justinhuangai/astro-theme-aither/actions/workflows/deploy-cloudflare-pages.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Astro](https://img.shields.io/badge/astro-6.0%2B-BC52EE.svg?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-v4-06B6D4.svg?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![GitHub Stars](https://img.shields.io/github/stars/justinhuangai/astro-theme-aither?style=flat-square&logo=github)](https://github.com/justinhuangai/astro-theme-aither/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/justinhuangai/astro-theme-aither?style=flat-square)](https://github.com/justinhuangai/astro-theme-aither/commits/main)

**[Vista previa en vivo](https://astro-theme-aither.pages.dev)**

Un tema Astro AI-native construido alrededor de un texto hermoso. ✍️

Tipografía primero para lectores humanos, endpoints legibles por máquina para agentes IA.

Aither es un tema de publicación multilingüe que trata ambas superficies como trabajo de producto real: páginas sobrias y legibles para personas, y documentos de protocolo públicos con endpoints Markdown para agentes. No es un starter de blog genérico al que después se le añadió una capa de IA.

## Modelo Lector / Agente

- `Lector` significa una persona leyendo el sitio HTML: home, páginas de artículos, página About, comentarios y controles de tema.
- `Agente` significa software consumiendo la superficie pública legible por máquina: `protocol.json`, `skill.md`, `agent/home.json` por locale, `llms.txt`, `api/posts.json` y Markdown por artículo.
- `Solo lectura` significa que hoy se soportan descubrimiento, lectura, indexación y monitoreo; no existen publicación, comentarios ni escrituras autenticadas.

```mermaid
flowchart LR
  A["Aither"] --> B["Superficie de lectura<br/>Páginas HTML"]
  A --> C["Superficie de agentes<br/>JSON / Markdown"]
  B --> D["URL canónicas de artículos"]
  C --> E["protocol.json -> skill.md -> agent/home.json"]
  C --> F["llms.txt / api/posts.json / posts/{slug}.md"]
```

## ¿Por qué Aither?

La mayoría de los temas de blog optimizan secciones hero, animaciones y adornos visuales. Aither optimiza ritmo de lectura, sobriedad tipográfica y densidad informativa.

Al mismo tiempo, asume que el sitio será leído por software tanto como por personas. Por eso el repositorio incluye una superficie de protocolo real: `protocol.json`, `skill.md`, documentos máquina localizados, `llms.txt`, cuerpos de artículos en Markdown, JSON Schema y una API de posts multi-locale.

## Qué incluye hoy

- **Lectura centrada en tipografía** -- títulos con Bricolage Grotesque, texto del sistema, fallbacks CJK y fuentes empaquetadas localmente
- **Dos vistas de inicio** -- la home tiene vista de lector y vista de agente; humanos ven tarjetas, agentes ven acceso directo a Markdown y `/for-agents/` explica el protocolo
- **41 temas curados** -- Light / Dark / System más 41 estilos nombrados en `src/config/themes.ts`
- **Superficie AI-native** -- `/protocol.json`, `/skill.md`, `/agent/home.json` localizado, `/policy.md`, `/reading.md`, `/subscribe.md`, `/auth.md`, `/llms.txt`, `/llms-full.txt`, `/api/posts.json`, `.md` por artículo, About Markdown, esquemas JSON y `/.well-known/ai-plugin.json`
- **Solo lectura por diseño** -- los agentes pueden descubrir, leer, indexar, resumir, monitorear y citar contenido, pero no existe API de escritura ni flujo autenticado para agentes
- **11 idiomas** -- UI localizada, hreflang, rutas y feeds para 11 locales
- **66 posts de ejemplo localizados** -- 6 slugs de arranque replicados en 11 locales (`11 x 6 = 66`), verificados con `pnpm check:post-coverage`
- **Base editorial completa** -- OG dinámicas, RSS, sitemap, JSON-LD, URLs canónicas, etiquetas, artículos fijados, paginación, TOC y Giscus / Crisp / Google Analytics opcionales
- **Extensible más allá de posts** -- el enrutado ya soporta otras colecciones con Astro Content Collections y `siteConfig.sections`
- **Stack Astro moderno** -- Astro 6, MDX, React 19 cuando aporta valor, Tailwind CSS v4 y una pipeline de validación para contenido, build y protocolo

## Requisitos

- **Node.js** -- `22 LTS` recomendado. Versiones mínimas: `20.19.1+` o `22.12.0+`
- **pnpm** -- el repo fija `pnpm@10.32.1` mediante `packageManager`
- **Corepack** -- ejecuta `corepack enable` una vez para usar la versión esperada de pnpm
- **Cloudflare Pages** -- solo si vas a usar el flujo de despliegue incluido

## Inicio rápido

### Usar como plantilla de GitHub

1. Haz clic en **"Use this template"** en [GitHub](https://github.com/justinhuangai/astro-theme-aither)
2. Clona tu nuevo repositorio:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

3. Activa Corepack e instala dependencias:

```bash
corepack enable
pnpm install
```

4. Configura tu sitio:

```bash
# astro.config.mjs -- configura la URL del sitio (solo hace falta aqui)
site: 'https://your-domain.com'

# src/config/site.ts -- configura nombre, descripcion, enlaces sociales, nav y footer
# la URL se lee automaticamente desde astro.config.mjs
```

5. Configura variables de entorno (opcional):

```bash
cp .env.example .env
# Edita .env con tus valores (GA, Giscus, Crisp)
```

6. Valida el starter antes de cambios grandes:

```bash
pnpm validate
```

7. Arranca desarrollo:

```bash
pnpm dev
```

8. Si vas a usar el flujo de Cloudflare, completa antes la sección [Despliegue](#despliegue)

### Configuración manual

```bash
git clone https://github.com/justinhuangai/astro-theme-aither.git my-blog
cd my-blog
corepack enable
pnpm install
pnpm validate
pnpm dev
```

Buena práctica: para un sitio nuevo, usa la plantilla de GitHub. Si clonas el repositorio upstream manualmente, verifica primero que todo funcione en local.

## Actualizar sitios existentes

Aither se distribuye hoy como un tema `starter-first`, no como un paquete de integración instalable de Astro. Para sitios ya creados, la actualización correcta es por releases y Git, no con `pnpm up`. Si mantienes un clon upstream limpio, también puedes ejecutar `pnpm upgrade:diff -- --from <tag-anterior> --to <tag-nuevo>` para ver un diff clasificado antes de portar cambios. La guía completa está en [UPGRADING.md](./UPGRADING.md).

## Modelo de contenido

Crea archivos MDX en `src/content/posts/{locale}/`:

```markdown
---
title: Titulo de tu articulo
date: "2026-01-01T16:00:00+08:00"
description: Descripcion opcional para SEO
category: Technology
tags: [ejemplo, tags]
pinned: false
image: ./optional-cover.jpg
---

Your content here.
```

| Campo | Tipo | Requerido | Por defecto | Descripción |
|---|---|---|---|---|
| `title` | string | Sí | -- | Título del artículo |
| `date` | date | Sí | -- | Fecha de publicación, idealmente ISO 8601 con zona horaria |
| `description` | string | No | -- | Para RSS y meta tags |
| `category` | string | No | `"General"` | Categoría |
| `tags` | string[] | No | -- | Etiquetas |
| `pinned` | boolean | No | `false` | Fija el artículo arriba |
| `image` | image | No | -- | Imagen de portada |

Buenas prácticas:

- Usar timestamps ISO 8601 completos con zona horaria, por ejemplo `2026-03-19T16:27:43+08:00`
- Mantener el mismo slug en cada locale para que `pnpm check:post-coverage` pueda validar paridad
- Tratar el inglés como baseline y usar el mismo nombre de archivo en cada idioma

## Comandos

| Comando | Descripción |
|---|---|
| `pnpm dev` | Inicia el servidor local |
| `pnpm check` | Ejecuta comprobaciones de Astro y contenido |
| `pnpm check:post-coverage` | Verifica paridad de slugs entre locales |
| `pnpm build` | Genera el sitio estático en `dist/` |
| `pnpm smoke:package` | Verifica la superficie del paquete `@aither/astro` y su mapa de exports |
| `pnpm smoke` | Ejecuta las pruebas de verificación del paquete y del protocolo IA |
| `pnpm preview` | Previsualiza el build de producción |
| `pnpm validate` | Chequeo recomendado antes de push: `check`, `check:post-coverage`, `build` y ambas suites de smoke |

## Protocolo AI-native

`/for-agents/` es la guía humana, pero el contrato legible por máquina real es este:

| Endpoint | Alcance | Propósito |
|---|---|---|
| `/protocol.json` | Global | Manifiesto ligero y enlaces a esquemas |
| `/skill.md` | Global | Punto de entrada narrativo canónico |
| `/{locale}/agent/home.json` | Por locale | Estado actual del sitio y últimos posts |
| `/{locale}/policy.md` | Por locale | Reglas, orden de descubrimiento y límites |
| `/{locale}/reading.md` | Por locale | Flujo recomendado de lectura |
| `/{locale}/subscribe.md` | Por locale | Guía de sondeo y monitoreo |
| `/{locale}/auth.md` | Por locale | Contrato de autenticación reservado; el modo sigue siendo de solo lectura |
| `/{locale}/llms.txt` | Por locale | Índice compacto para LLMs |
| `/{locale}/llms-full.txt` | Por locale | Contenido inline completo para flujos por lotes |
| `/api/posts.json` | Todas las locales | Metadatos estructurados en todos los idiomas |
| `/{locale}/posts/{slug}.md` | Por locale | Cuerpo Markdown canónico de un artículo |
| `/{locale}/about.md` | Por locale | Página About en Markdown |
| `/.well-known/ai-plugin.json` | Global | Metadatos ligeros de descubrimiento |
| `/schemas/agent-protocol.schema.json` | Global | JSON Schema de `protocol.json` |
| `/schemas/agent-home.schema.json` | Global | JSON Schema de `agent/home.json` |

La locale por defecto `en-US` no lleva prefijo. El Markdown en inglés vive en `/posts/{slug}.md`, el español en `/es-ES/posts/{slug}.md`.

Buenas prácticas:

1. Empieza por `/protocol.json`, luego `/skill.md`, luego `agent/home.json`
2. Usa `/api/posts.json` para descubrimiento multi-locale y endpoints `.md` para recuperar el artículo final
3. Cita la URL HTML canónica al enlazar hacia humanos
4. Vuelve a consultar los endpoints si la frescura importa
5. Ejecuta al menos `pnpm smoke` al modificar documentos del protocolo

## Configuración

Archivos principales:

- `astro.config.mjs` -- URL de producción y defaults compartidos de `@aither/astro` para integraciones, Vite y routing de locales
- `src/config/site.ts` -- metadatos del sitio, nav/footer, paginación, timezone, controles de tema, enlaces sociales y sections opcionales
- `src/config/themes.ts` -- catálogo de 41 temas y etiquetas localizadas
- `src/content.config.ts` -- esquema Zod y registro de colecciones
- `src/i18n/index.ts` y `src/i18n/messages/*.ts` -- locales, helpers de routing y textos traducidos
- `.env` -- Google Analytics, Crisp y Giscus opcionales

### Ajustes del sitio (`src/config/site.ts`)

```typescript
export const siteConfig = {
  name: 'Aither',
  title: 'An AI-native Astro theme built around beautiful text.',
  description: '...',
  author: {
    name: 'Aither',
    avatar: '', // Importa desde src/assets/ para optimizacion o usa una URL directa
  },
  // la URL se lee automaticamente desde astro.config.mjs — no hace falta repetirla aqui
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

Pon `ui.showMoreThemesMenu` en `false` si quieres conservar Light / Dark / System pero ocultar el picker completo.

### Secciones de contenido adicionales

El proyecto ya está preparado para más de una colección:

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

Luego crea contenido en `src/content/translations/{locale}/`. Las rutas se generan automáticamente.

### Configuración de Astro (`astro.config.mjs`)

```javascript
import { defineConfig } from 'astro/config';
import aither from '@aither/astro';

export default defineConfig({
  site: 'https://your-domain.com',
  integrations: [aither()],
});
```

### Variables de entorno (`.env`)

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

La configuración de idioma está en `src/i18n/index.ts`, las traducciones en `src/i18n/messages/*.ts`.

| Código | Idioma |
|---|---|
| `en-US` | English (default) |
| `zh-CN` | 简体中文 |
| `zh-TW` | 繁體中文 |
| `ko-KR` | 한국어 |
| `fr-FR` | Français |
| `de-DE` | Deutsch |
| `it-IT` | Italiano |
| `es-ES` | Español |
| `ru-RU` | Русский |
| `id-ID` | Bahasa Indonesia |
| `pt-BR` | Português (BR) |

Buena práctica: tratar el conjunto de slugs en inglés como baseline canónico y ejecutar `pnpm check:post-coverage` antes de desplegar.

## Estructura del proyecto

```text
src/
├── config/
│   ├── site.ts                     # Metadatos del sitio, nav/footer, controles de tema y secciones opcionales
│   └── themes.ts                   # 41 temas curados + etiquetas localizadas
├── content.config.ts               # esquema de Content Collections (Zod)
├── content/
│   └── posts/{locale}/*.mdx        # contenido de posts multilingüe
├── i18n/
│   ├── index.ts                    # definiciones de idioma y utilidades de enrutado
│   └── messages/*.ts               # traducciones de interfaz para todos los idiomas
├── components/
│   ├── pages/                      # interfaz de páginas: inicio, artículo, about, for-agents
│   ├── AIAccessList.astro          # Lista Markdown de artículos para agentes
│   ├── Navbar.astro                # Navegacion, selector de idioma y controles de tema
│   ├── ModeSwitcher.astro          # Light/Dark/System + selector de tema personalizado
│   ├── TableOfContents.astro       # TOC generado desde encabezados
│   └── Giscus.astro                # Comentarios opcionales
├── lib/
│   ├── agent-protocol.ts           # Generación del manifiesto de protocolo y documentos para agentes
│   ├── markdown-endpoint.ts        # Utilidades de respuesta Markdown
│   ├── og-image.ts                 # Generación dinámica de imágenes OG
│   ├── posts.ts                    # Carga y ordenación de contenido por locale
│   ├── site-content.ts             # Utilidades de rutas, paginación, RSS y llms.txt
│   └── theme.ts                    # Estado y utilidades de preferencia de tema
├── layouts/
│   └── Layout.astro                # SEO, hreflang, JSON-LD, alternates y armazón global
├── pages/
│   ├── index.astro                 # Inicio (locale por defecto)
│   ├── about.astro                 # Página About
│   ├── for-agents.astro            # Página del protocolo orientada a personas
│   ├── page/[num].astro            # Listado paginado de la home
│   ├── posts/
│   │   ├── [slug].astro            # Detalle del artículo
│   │   └── [slug].md.ts            # Endpoint Markdown por artículo
│   ├── agent/home.json.ts          # Estado agregado legible por maquinas
│   ├── protocol.json.ts            # Manifest estructurado
│   ├── skill.md.ts                 # Documento narrativo canonico del protocolo
│   ├── policy.md.ts                # Reglas para agentes y limites de seguridad
│   ├── reading.md.ts               # Flujo de recuperacion recomendado
│   ├── subscribe.md.ts             # Guia de monitorizacion
│   ├── auth.md.ts                  # Contrato de autenticacion reservado
│   ├── llms.txt.ts                 # Índice compacto para LLM
│   ├── llms-full.txt.ts            # Contenido inline completo para LLM
│   ├── api/posts.json.ts           # Metadatos de artículos entre locales
│   ├── schemas/*.json.ts           # Esquemas JSON de los endpoints de protocolo
│   ├── [section]/...               # Rutas extra autogeneradas para colecciones
│   └── [locale]/...                # Contrapartes localizadas de las rutas principales
├── styles/
│   ├── fonts.css                   # Fuentes Bricolage Grotesque locales
│   └── global.css                  # Tokens de Tailwind v4, tipografía y variables de tema
public/
├── .well-known/ai-plugin.json      # Metadatos públicos de descubrimiento para máquinas
├── favicon.svg
├── logo.svg / logo-dark.svg
└── og.png
scripts/
├── check-post-coverage.mjs         # Fuerza la paridad de slugs entre locales
└── smoke-agent-protocol.mjs        # Valida los artefactos de protocolo generados
```

## Despliegue

### Cloudflare Pages (por defecto)

El flujo `.github/workflows/deploy-cloudflare-pages.yml` está orientado a Cloudflare Pages y valida el sitio antes de desplegar.

1. Crea un proyecto de Cloudflare Pages. El flujo usa por defecto el nombre del repositorio, o `CLOUDFLARE_PAGES_PROJECT_NAME` si quieres sobrescribirlo
2. Añade `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID` en GitHub Secrets
3. Actualiza `site` en `astro.config.mjs`
4. Ejecuta `pnpm validate`
5. Haz push a `main`

Buena práctica: mantén alineados el nombre del repositorio y el proyecto de Pages, o define la variable de repositorio `CLOUDFLARE_PAGES_PROJECT_NAME` si necesitas otro destino.

### Otras plataformas

La salida es HTML estático en `dist/`:

```bash
pnpm build
# Sube dist/ a Netlify, Vercel, GitHub Pages o cualquier host estático
```

## Principios

1. **La tipografía es la interfaz** -- el buen texto no debería pelear con el tema.
2. **Humanos y agentes importan igual** -- el protocolo público es parte del producto.
3. **La paridad multilingüe se comprueba** -- no se supone.
4. **Los puntos de extensión viven cerca del contenido** -- vía Collections y configuración.
5. **Menos magia, más claridad** -- salida estática, documentos explícitos y contratos claros.

## Agradecimientos

- Inspirado en [yinwang.org](https://www.yinwang.org).
- Partes del sistema de temas están inspiradas en [Raphael Publish](https://github.com/liuxiaopai-ai/raphael-publish) y [EvoMap](https://evomap.ai).

## Contribuir

Las contribuciones son bienvenidas. Abre primero un issue para discutir el cambio.

## Licencia

[MIT](LICENSE)
