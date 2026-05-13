# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [CalVer](https://calver.org/) versioning (`YYYY.0M.0D`).

## astro-theme-aither v2026.05.13

### Changed
- Release version to `2026.05.13`
- Promoted locale identifiers to region-code form across the shipped theme surface: `zh-CN`, `zh-TW`, and `pt-BR`
- Renamed localized content directories, i18n message modules, README locale filenames, and generated route prefixes to match the new region-code locale scheme
- Updated translation section configuration and locale-aware runtime helpers so section routing, fallback logic, and agent-facing docs all resolve through the canonical region-code locales

### Fixed
- Build output, Open Graph assets, RSS, API payloads, language switchers, and schema metadata now emit consistent `zh-CN`, `zh-TW`, and `pt-BR` paths

### Breaking
- Removed `zh-hans`, `zh-hant`, and `pt-br` compatibility aliases and redirects; the canonical locale paths are now strictly `zh-CN`, `zh-TW`, and `pt-BR`

## astro-theme-aither v2026.04.21

### Added
- An English-first `Recommendations` section with locale fallback, source metadata fields, and dedicated editorial list/detail UI
- A localized recommendation-note layer so recommendation blurbs can be translated independently from the original title and body content
- Editorial shelf notices for `Recommendations` and `Translations` with concise channel framing and locale-aware copy

### Changed
- Release version to `2026.04.21`
- Renamed the earlier `Picks` surface to `Recommendations` across routes, navigation, footer links, section config, content collection, and section copy
- Homepage/blog section headings now use a `Latest ...` framing, and the recommendations experience now uses `Why it matters / 推荐理由` as a consistent editorial label across list and detail pages
- Recommendation channel copy now explicitly credits 湾区日报 while keeping the external-link styling on the publication name only

### Fixed
- Restored the locale suggestion banner on `/photos`, keeping it consistent with the rest of the top-level site sections
- Recommendation fallback routes now preserve English titles while surfacing localized recommendation notes in list cards, article summaries, and page metadata
- Translation and recommendation notice cards now use a leaner two-block structure with cleaner copy and aligned straight-edge visual treatment

## astro-theme-aither v2026.04.19

### Added
- Shared navigation pathname helpers so desktop nav, mobile nav, and footer all resolve active routes from the same source of truth
- A shared `@aither/astro/expressive-code-aither` plugin that maps code fence languages to human-readable labels and supports `showLanguage` / `languageLabel`
- Root Expressive Code dependencies so line numbers and custom code-block plugins load reliably in local development, builds, and package smoke tests

### Changed
- Release version to `2026.04.19`
- Public repository, homepage, and issue links now consistently point to `justinhuangai/astro-theme-aither`
- Markdown guide examples now use explicit language headers where they improve clarity, and macOS shell snippets now use `zsh`

### Fixed
- Navbar, mobile navigation, and footer now share one active-path model, including descendant routes under the homepage reading surface
- Fixed-content-locale section entries now canonicalize with a trailing slash, fixing `/translations/{slug}/` canonical URLs
- Ordinary Expressive Code blocks now render visible language headers when authors opt in with `showLanguage`, instead of hiding badges inside collapsed headers

## astro-theme-aither v2026.04.17

### Added
- A first-class `translations` section with sample Simplified Chinese translation content, source metadata fields, and an editorial-style source context card on translation articles
- Shared content section header/count UI so custom sections can match the homepage listing treatment
- `contentLocale` support in `ContentSection` config so a section can publish one canonical content language while the surrounding site shell stays localized

### Changed
- Release version to `2026.04.17`
- Navbar section items now appear directly after `Blog`, keeping long-form reading surfaces grouped together
- Translation list and detail pages now reuse the blog/article design system instead of shipping a separate feature-specific template
- Translation pages now canonicalize to their fixed content locale and suppress misleading locale alternates when the content itself is not localized

### Fixed
- Section heading count chips now align correctly on narrow screens and match the homepage header layout
- Translation pages now resolve source links, content language, and SEO metadata consistently across every localized shell

## astro-theme-aither v2026.04.08

### Added
- Local Pagefind-powered search for the directory experience in both dev and production builds
- A compact footer disclosure for icon sourcing, licensing, and brand-use notes on the directory page
- `directoryPage` config typing in the shared `@aither/astro/site` surface

### Changed
- Release version to `2026.04.08`
- Directory assets, scripts, and runtime naming are now standardized around `directory` and `ui` terminology instead of the previous upstream-specific naming
- Directory icons now support `selfhst:` references alongside local fallback assets and generated favicons
- Navbar and photos page layout spacing now align with the directory experience more cleanly

### Fixed
- Production builds now generate the directory search index as part of the main build flow
- Directory card markup, search state handling, and empty-state rendering now behave consistently across locales
- Removed remaining upstream-specific naming from shipped source and built output paths

## astro-theme-aither v2026.03.20

### Added
- New localized sample article `ai-agent-best-practices.mdx` across all 11 locales
- `published_at` in `/api/posts.json` for machine consumers that need full timestamps
- Giscus comments on the About page
- Locale-aware Crisp runtime language mapping
- A unified `Reader / Agent` model and implementation-aligned documentation across all README variants

### Changed
- Release version to `2026.03.20`
- Content schema now prefers full ISO 8601 timestamps with timezone while remaining backward-compatible with date-only entries
- Existing sample posts updated to timezone-aware frontmatter timestamps across locales
- Date rendering now respects `siteConfig.blog.timeZone`
- Crisp is disabled on post and about reading surfaces to keep those pages calmer and comment-focused
- CJK font stacks now include stronger locale-specific fallback chains

### Fixed
- Homepage audience guidance now renders as two left-aligned numbered step lines instead of a centered inline row
- Homepage Human and Agent panels now share a cleaner, consistent visual treatment
- Homepage audience copy is now localized across all 11 locales with locale-specific Human and Agent messaging
- Markdown and JSON consumers can now distinguish canonical publish dates from full publish timestamps
- Agent-facing and human-facing docs now describe the current product surface more accurately

## astro-theme-aither v2026.03.14

### Added
- MDX support — all content now uses `.mdx` format, enabling React components in posts
- Generic content sections system — add custom sections (translations, notes, etc.) via config, auto-generates list + detail pages for all 11 locales
- `intlLocales` and `htmlLangs` mappings in i18n for cleaner locale handling
- Shared `contentSchema` in content config for consistent schema across sections
- Theme mode active state — dropdown and mobile switcher now highlight the actual displayed mode (light/dark)
- Mobile responsive improvements: 44px touch targets, overflow prevention, responsive typography
- i18n completeness: ModeSwitcher labels, footer section titles, BuiltWithButton all translated across 11 locales

### Changed
- Default theme mode from `dark` to `system` (respects OS preference)
- Version scheme to CalVer `YYYY.0M.0D` with same-day patch suffix (e.g. `2026.03.13.1`)
- Content files from `.md` to `.mdx` for MDX component support
- BlogCard component now supports `section` prop for linking to custom content sections
- Navbar auto-appends section nav items from config
- Hamburger icon to proper 3-line Geist fill-based SVG

### Fixed
- ModeSwitcher active state showing wrong mode (hardcoded `dark` fallback)
- NavbarMobile: Astro rocket logo removed, language switching via localStorage, proper touch targets
- Footer: social icon touch targets, bottom bar mobile alignment, hover color consistency
- Code blocks and tables overflow on mobile
- Markdown endpoint path updated for `.mdx` files

## astro-theme-aither v2026.03.13

### Added
- Initial public release of Astro-Theme-Aither
- Astro 6 + React 19 + Tailwind CSS v4
- 11-language i18n support (en, zh-CN, zh-TW, ko, fr, de, it, es, ru, id, pt-BR)
- Blog with pagination, categories, tags
- Dark/light/system theme with View Transitions animation
- OG image generation with Satori
- SEO: sitemap, RSS, robots.txt, llms.txt, JSON-LD
- Giscus comments integration
- GitHub Actions CI/CD with Cloudflare Pages deployment
- MIT License
