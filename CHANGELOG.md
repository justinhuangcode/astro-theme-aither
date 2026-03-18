# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [CalVer](https://calver.org/) versioning (`YYYY.0M.0D`).

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
- 11-language i18n support (en, zh-hans, zh-hant, ko, fr, de, it, es, ru, id, pt-br)
- Blog with pagination, categories, tags
- Dark/light/system theme with View Transitions animation
- OG image generation with Satori
- SEO: sitemap, RSS, robots.txt, llms.txt, JSON-LD
- Giscus comments integration
- GitHub Actions CI/CD with Cloudflare Pages deployment
- MIT License
