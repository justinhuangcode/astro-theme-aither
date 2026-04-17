# Upgrading Existing Aither Sites

Aither currently ships as a `starter-first` Astro theme.

That means:

- New sites should start from the GitHub template or a fresh clone.
- Existing sites do **not** upgrade with `pnpm up astro-theme-aither`.
- The safe upgrade unit today is a tagged release, for example `v2026.04.08 -> v2026.04.17`.

If you want dependency-style upgrades later, the repo needs a separate published package or Astro integration layer. That is not the shipped distribution model today, so this guide focuses on the upgrade path that works with the current project.

## Pick The Right Upgrade Flow

### If your site still has upstream git history

Use this flow if you cloned the repo directly and kept the original history.

```bash
git remote add upstream https://github.com/justinhuangai/astro-theme-aither.git
git fetch upstream --tags
git switch -c codex/upgrade-v2026.04.17
git log --oneline --left-right --cherry-pick origin/main...upstream/main
pnpm upgrade:diff -- --from v2026.04.08 --to v2026.04.17
```

Then either:

1. Merge the release branch or selected commits into your upgrade branch.
2. Resolve conflicts in your site-specific files.
3. Run `pnpm install` and `pnpm validate`.

Best practice: merge or cherry-pick release-tagged changes, not arbitrary `main` commits, unless you explicitly want unreleased work.

### If your site was created from GitHub Template

This is the common case. Template repositories usually do not share a clean upstream history, so `git merge upstream/main` is not the right tool.

Use a side-by-side release diff instead:

```bash
git clone --depth 1 --branch v2026.04.17 https://github.com/justinhuangai/astro-theme-aither.git ../aither-v2026.04.17
git clone --depth 1 --branch v2026.04.08 https://github.com/justinhuangai/astro-theme-aither.git ../aither-v2026.04.08
diff -ru ../aither-v2026.04.08 ../aither-v2026.04.17
```

Then port the relevant theme changes into your site on an upgrade branch.

Best practice: compare upstream release to upstream release first, then apply only the pieces you want. Do not diff your customized site directly against upstream and blindly overwrite files.

If you keep one clean upstream clone locally, you can also run:

```bash
pnpm upgrade:diff -- --from v2026.04.08 --to v2026.04.17
```

That command groups changed files into `site-owned`, `theme/runtime`, and `other` buckets so it is easier to review upgrade impact.

## Know Which Files Are Yours

These paths are usually **site-owned** and deserve extra caution during upgrades:

- `src/content/`
- `src/config/site.ts`
- `.env` and any deployment secrets
- Any analytics, comments, or chat configuration you turned on
- Any pages or components you customized for your brand

These paths are usually **theme/runtime-owned** and are the first place to look for upstream fixes:

- `src/components/`
- `src/layouts/`
- `src/lib/`
- `src/i18n/`
- `src/styles/`
- `src/config/themes.ts`
- `src/pages/`
- `scripts/`
- `.github/workflows/`

Best practice: keep your own branding, content, and business logic in a small number of obvious files. The less you fork the theme runtime, the easier each release upgrade becomes.

## Upgrade Checklist

1. Read the target release notes and changelog.
2. Create a dedicated upgrade branch.
3. Compare the previous shipped release to the new release.
4. Port theme/runtime changes first.
5. Re-apply any local brand or content customizations intentionally.
6. Run `pnpm install` if dependencies changed.
7. Run `pnpm validate`.
8. Preview the production build with `pnpm preview`.
9. Ship only after both the HTML site and the agent-facing protocol still look correct.

## What To Avoid

- Do not treat this starter like a versioned npm integration and run `pnpm up astro-theme-aither`.
- Do not overwrite `src/config/site.ts` or `src/content/` without reviewing your local changes.
- Do not upgrade from arbitrary moving `main` commits when a tagged release exists.
- Do not skip `pnpm validate`; protocol regressions are easy to miss if you only check the homepage.

## Recommended Long-Term Setup

If you expect frequent upstream sync, keep one clean upstream reference around:

- either a separate local clone checked out to release tags
- or a dedicated internal branch that mirrors pristine Aither releases

That gives you a stable vendor reference for every future upgrade and keeps your production branch focused on your own site customizations.
