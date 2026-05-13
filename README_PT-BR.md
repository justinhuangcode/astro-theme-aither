# Aither

[English](./README.md) | [简体中文](./README_ZH-CN.md) | [繁體中文](./README_ZH-TW.md) | [한국어](./README_KO.md) | [Français](./README_FR.md) | [Deutsch](./README_DE.md) | [Italiano](./README_IT.md) | [Español](./README_ES.md) | [Русский](./README_RU.md) | [Bahasa Indonesia](./README_ID.md) | **Português (BR)**

[![Deploy](https://github.com/justinhuangai/astro-theme-aither/actions/workflows/deploy-cloudflare-pages.yml/badge.svg)](https://github.com/justinhuangai/astro-theme-aither/actions/workflows/deploy-cloudflare-pages.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Astro](https://img.shields.io/badge/astro-6.0%2B-BC52EE.svg?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-v4-06B6D4.svg?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![GitHub Stars](https://img.shields.io/github/stars/justinhuangai/astro-theme-aither?style=flat-square&logo=github)](https://github.com/justinhuangai/astro-theme-aither/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/justinhuangai/astro-theme-aither?style=flat-square)](https://github.com/justinhuangai/astro-theme-aither/commits/main)

**[Preview ao vivo](https://astro-theme-aither.pages.dev)**

Um tema Astro AI-native construído em torno de texto bonito. ✍️

Tipografia em primeiro lugar para humanos, endpoints legíveis por máquina para agentes de IA.

Aither é um tema de publicação multilíngue que trata as duas superfícies como produto de verdade: páginas calmas e legíveis para pessoas, e documentos públicos de protocolo com endpoints Markdown para agentes.

## Modelo Leitor / Agente

- `Leitor` significa uma pessoa lendo o site HTML: home, páginas de artigo, página About, comentários e controles de tema.
- `Agente` significa software consumindo a superfície pública legível por máquina: `protocol.json`, `skill.md`, `agent/home.json` por locale, `llms.txt`, `api/posts.json` e Markdown por artigo.
- `Somente leitura` significa que hoje há suporte para descoberta, leitura, indexação e monitoramento; publicação, comentários e escrita autenticada não estão expostos.

```mermaid
flowchart LR
  A["Aither"] --> B["Superfície do leitor<br/>Páginas HTML"]
  A --> C["Superfície de agentes<br/>JSON / Markdown"]
  B --> D["URLs canônicas de artigos"]
  C --> E["protocol.json -> skill.md -> agent/home.json"]
  C --> F["llms.txt / api/posts.json / posts/{slug}.md"]
```

## Por que Aither?

A maioria dos temas de blog otimiza seções hero, animações e enfeites visuais. Aither otimiza ritmo de leitura, sobriedade tipográfica e densidade de informação.

Ao mesmo tempo, o projeto assume que o site será lido tanto por software quanto por pessoas. Por isso o repositório inclui uma superfície real de protocolo: `protocol.json`, `skill.md`, documentos legíveis por máquina localizados, `llms.txt`, corpos em Markdown, JSON Schema e uma API de posts entre locales.

## O que já vem incluído

- **Leitura focada em tipografia**
- **Duas visões na home**
- **41 temas curados**
- **Superfície AI-native completa**
- **Modo somente leitura por padrão**
- **11 idiomas**
- **66 posts de exemplo localizados**
- **Base editorial completa**
- **Extensível além de posts**
- **Stack Astro moderna**

## Requisitos

- **Node.js** -- `22 LTS` recomendado. Mínimo `20.19.1+` ou `22.12.0+`
- **pnpm** -- `pnpm@10.32.1` fixado via `packageManager`
- **Corepack** -- execute `corepack enable` uma vez
- **Cloudflare Pages** -- só se você usar o fluxo incluído

## Início Rápido

### Usar como template do GitHub

1. Clique em **"Use this template"** no [GitHub](https://github.com/justinhuangai/astro-theme-aither)
2. Clone o novo repositório:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

3. Ative o Corepack e instale dependências:

```bash
corepack enable
pnpm install
```

4. Configure o site:

```bash
# astro.config.mjs -- defina a URL do site (apenas aqui)
site: 'https://your-domain.com'

# src/config/site.ts -- defina nome, descrição, links sociais, nav e footer
# a URL é lida automaticamente de astro.config.mjs
```

5. Configure variáveis de ambiente (opcional):

```bash
cp .env.example .env
# Preencha o .env com seus valores (GA, Giscus, Crisp)
```

6. Valide antes de grandes mudanças:

```bash
pnpm validate
```

7. Inicie o desenvolvimento:

```bash
pnpm dev
```

## Atualizar sites existentes

Aither hoje é distribuído como um tema `starter-first`, não como um pacote de integração Astro instalável. Para sites já criados, a atualização correta é por release e por Git, não por `pnpm up`. Se você mantiver um clone upstream limpo, também pode executar `pnpm upgrade:diff -- --from <tag-antiga> --to <tag-nova>` para ver um diff categorizado antes de portar mudanças. O fluxo completo está em [UPGRADING.md](./UPGRADING.md).

## Modelo de conteúdo

Crie arquivos MDX em `src/content/posts/{locale}/`.

## Comandos

| Comando | Descrição |
|---|---|
| `pnpm dev` | Inicia o servidor local |
| `pnpm check` | Executa checagens do Astro |
| `pnpm check:post-coverage` | Verifica paridade de slugs |
| `pnpm build` | Gera `dist/` |
| `pnpm smoke:package` | Verifica a superfície do pacote `@aither/astro` e o mapa de exports |
| `pnpm smoke` | Executa os testes de verificação do pacote e do protocolo |
| `pnpm preview` | Faz preview do build |
| `pnpm validate` | Executa check + coverage + build + as duas suites de smoke |

## Protocolo AI-native

A ordem recomendada é: `protocol.json` -> `skill.md` -> `agent/home.json` -> `policy.md` / `reading.md` / `subscribe.md`.

Use `/api/posts.json` para descoberta multi-locale e `/{locale}/posts/{slug}.md` para recuperar o corpo final do artigo.

## Configuração

Arquivos principais:

- `astro.config.mjs`
- `src/config/site.ts`
- `src/config/themes.ts`
- `src/content.config.ts`
- `src/i18n/index.ts`
- `src/i18n/messages/*.ts`
- `.env`

### Configuração do Astro (`astro.config.mjs`)

```javascript
import { defineConfig } from 'astro/config';
import aither from '@aither/astro';

export default defineConfig({
  site: 'https://your-domain.com',
  integrations: [aither()],
});
```

## Estrutura do Projeto

```text
src/
├── config/
├── content/
├── i18n/
├── components/
├── lib/
├── layouts/
├── pages/
└── styles/
public/
scripts/
```

## Implantação

O fluxo padrão usa Cloudflare Pages, exige `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID`, e usa o nome do repositório como nome do projeto por padrão. Defina a variável de repositório `CLOUDFLARE_PAGES_PROJECT_NAME` se precisar sobrescrever.

## Princípios

1. Tipografia é a interface.
2. Humanos e agentes importam igualmente.
3. Paridade multilíngue deve ser verificada.
4. Extensões devem ficar próximas do conteúdo.
5. Menos mágica, mais clareza.

## Agradecimentos

- Inspirado por [yinwang.org](https://www.yinwang.org).
- Partes do sistema de temas se inspiram em [Raphael Publish](https://github.com/liuxiaopai-ai/raphael-publish) e [EvoMap](https://evomap.ai).

## Contribuindo

Contribuições são bem-vindas. Abra uma issue antes de propor mudanças.

## Licença

[MIT](LICENSE)
