import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const repoRoot = process.cwd();
const sourceRoot = path.join(
  repoRoot,
  '.references/halo-theme-heolink/templates/assets',
);
const destinationRoot = path.join(repoRoot, 'public/directory/heolink');
const liveSnapshotUploadRoot = path.join(
  repoRoot,
  '.references/live-sites/halo-zhheo-com-snapshot/halo.zhheo.com/upload',
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

async function copyUploadAssets(sourceDir) {
  try {
    await cp(sourceDir, uploadDestination, {
      recursive: true,
      force: true,
    });
    return true;
  } catch {
    return false;
  }
}

const copiedUploadAssets = await copyUploadAssets(liveSnapshotUploadRoot);

if (!copiedUploadAssets) {
  throw new Error('Unable to sync HeoLink upload assets from snapshot reference.');
}

const legacySidebarLogo = path.join(uploadDestination, 'logo_cover备份.png');
const normalizedSidebarLogo = path.join(uploadDestination, 'logo_cover.png');

await cp(legacySidebarLogo, normalizedSidebarLogo, { force: true });

console.log(`Synced HeoLink assets from ${sourceRoot} to ${destinationRoot}`);
