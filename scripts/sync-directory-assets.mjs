import { access, cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const repoRoot = process.cwd();
const sourceRoot = path.resolve(
  repoRoot,
  process.env.DIRECTORY_ASSET_SOURCE_ROOT ??
    '.references/directory-theme-source/templates/assets',
);
const destinationRoot = path.resolve(
  repoRoot,
  process.env.DIRECTORY_ASSET_DESTINATION_ROOT ?? 'public/directory/ui',
);
const liveSnapshotUploadRoot = path.resolve(
  repoRoot,
  process.env.DIRECTORY_ASSET_UPLOAD_ROOT ??
    '.references/live-sites/directory-source-snapshot/site-source/upload',
);

const skipPatterns = [
  /\.less$/i,
  /\.module\.less$/i,
  /\.scss$/i,
  /\.styl$/i,
  /\.glyph\.json$/i,
  /\/index\.html$/i,
  /\/symbol\.html$/i,
  /\/unicode\.html$/i,
];

function shouldCopy(sourcePath) {
  return !skipPatterns.some((pattern) => pattern.test(sourcePath));
}

async function pathExists(targetPath) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

function formatRepoPath(targetPath) {
  const relativePath = path.relative(repoRoot, targetPath);

  return relativePath && !relativePath.startsWith('..') ? relativePath : targetPath;
}

async function main() {
  const hasSourceAssets = await pathExists(sourceRoot);
  const hasUploadAssets = await pathExists(liveSnapshotUploadRoot);

  if (!hasSourceAssets || !hasUploadAssets) {
    const hasCommittedAssets = await pathExists(destinationRoot);
    const missingSources = [];

    if (!hasSourceAssets) {
      missingSources.push(formatRepoPath(sourceRoot));
    }

    if (!hasUploadAssets) {
      missingSources.push(formatRepoPath(liveSnapshotUploadRoot));
    }

    if (!hasCommittedAssets) {
      throw new Error(
        `Unable to sync Directory assets because ${missingSources.join(', ')} ${
          missingSources.length === 1 ? 'is' : 'are'
        } missing and no committed fallback exists at ${formatRepoPath(destinationRoot)}.`,
      );
    }

    console.warn(
      `Skipping Directory asset sync because ${missingSources.join(', ')} ${
        missingSources.length === 1 ? 'is' : 'are'
      } unavailable. Keeping committed assets in ${formatRepoPath(destinationRoot)}.`,
    );
    return;
  }

  await rm(destinationRoot, { recursive: true, force: true });
  await mkdir(destinationRoot, { recursive: true });

  for (const directory of ['css', 'fonts', 'images', 'js']) {
    await cp(path.join(sourceRoot, directory), path.join(destinationRoot, directory), {
      recursive: true,
      filter: shouldCopy,
    });
  }

  const remixiconCssPath = path.join(destinationRoot, 'fonts/remixicon.css');
  const remixiconCss = await readFile(remixiconCssPath, 'utf8');
  const normalizedRemixiconCss = remixiconCss.replace(/\?t=\d+(#[^)'\"]+)?/g, '$1');

  if (normalizedRemixiconCss !== remixiconCss) {
    await writeFile(remixiconCssPath, normalizedRemixiconCss, 'utf8');
  }

  const uploadDestination = path.join(destinationRoot, 'upload');

  await cp(liveSnapshotUploadRoot, uploadDestination, {
    recursive: true,
    force: true,
  });

  const legacySidebarLogo = path.join(uploadDestination, 'logo_cover备份.png');
  const normalizedSidebarLogo = path.join(uploadDestination, 'logo_cover.png');

  await cp(legacySidebarLogo, normalizedSidebarLogo, { force: true });

  console.log(
    `Synced Directory assets from ${formatRepoPath(sourceRoot)} to ${formatRepoPath(destinationRoot)}`,
  );
}

await main();
