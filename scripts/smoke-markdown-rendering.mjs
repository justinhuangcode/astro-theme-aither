import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.join(process.cwd(), 'dist');

async function readBuiltPage(relativePath) {
  return readFile(path.join(distDir, relativePath), 'utf8');
}

const englishGuide = await readBuiltPage(path.join('posts', 'markdown-guide', 'index.html'));
assert.match(englishGuide, /class="expressive-code"/, 'Expected Expressive Code output in English markdown guide.');
assert.match(englishGuide, /class="ec-line"/, 'Expected line-numbered code rows in English markdown guide.');
assert.match(englishGuide, /class="katex"/, 'Expected KaTeX output in English markdown guide.');
assert.match(englishGuide, /id="mermaid-\d+"/, 'Expected Mermaid SVG output in English markdown guide.');
assert.match(
  englishGuide,
  /class="aither-markmap" data-markmap-source="/,
  'Expected Markmap placeholder output in English markdown guide.',
);

for (const locale of ['zh-CN', 'zh-TW']) {
  const localizedGuide = await readBuiltPage(path.join(locale, 'posts', 'markdown-guide', 'index.html'));
  assert.match(localizedGuide, /class="katex"/, `Expected KaTeX output in ${locale} markdown guide.`);
  assert.match(localizedGuide, /id="mermaid-\d+"/, `Expected Mermaid SVG output in ${locale} markdown guide.`);
  assert.match(
    localizedGuide,
    /class="aither-markmap" data-markmap-source="/,
    `Expected Markmap placeholder output in ${locale} markdown guide.`,
  );
}

console.log('Markdown rendering smoke tests passed.');
