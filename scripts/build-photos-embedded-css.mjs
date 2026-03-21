import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const cssDir = path.join(rootDir, 'public/photos-ui/assets/css');

const mainSourcePath = path.join(cssDir, 'main.css');
const noscriptSourcePath = path.join(cssDir, 'noscript.css');
const embeddedMainPath = path.join(cssDir, 'embedded-main.css');
const embeddedNoscriptPath = path.join(cssDir, 'embedded-noscript.css');

const PAGE_SCOPE = 'body.photos-gallery-page';
const CONTENT_SCOPE = `${PAGE_SCOPE} .photos-gallery-scope`;

const POPUP_TOKENS = ['.poptrox-popup', '.poptrox-overlay'];
const KEYFRAME_RULE = /@(-[\w]+-)?keyframes\b/i;

function splitSelectorList(input) {
  const selectors = [];
  let current = '';
  let quote = null;
  let bracketDepth = 0;
  let parenDepth = 0;

  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];
    const next = input[index + 1];

    if (quote) {
      current += char;
      if (char === '\\') {
        current += next ?? '';
        index += 1;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === '"' || char === '\'') {
      quote = char;
      current += char;
      continue;
    }

    if (char === '[') {
      bracketDepth += 1;
      current += char;
      continue;
    }

    if (char === ']') {
      bracketDepth = Math.max(0, bracketDepth - 1);
      current += char;
      continue;
    }

    if (char === '(') {
      parenDepth += 1;
      current += char;
      continue;
    }

    if (char === ')') {
      parenDepth = Math.max(0, parenDepth - 1);
      current += char;
      continue;
    }

    if (char === ',' && bracketDepth === 0 && parenDepth === 0) {
      selectors.push(current.trim());
      current = '';
      continue;
    }

    current += char;
  }

  if (current.trim()) selectors.push(current.trim());
  return selectors;
}

function injectScopeAfterBody(selector) {
  const bodyMatch = selector.match(/^body\.photos-gallery-page(?<suffix>(?:[.#:][^\s>+~]+|\[[^\]]+\])*)/);
  if (!bodyMatch) return selector;
  return selector.replace(bodyMatch[0], `${bodyMatch[0]} .photos-gallery-scope`);
}

function transformSelector(selector) {
  const trimmed = selector.trim();
  if (!trimmed) return trimmed;

  if (trimmed === ':root') {
    return PAGE_SCOPE;
  }

  if (trimmed.startsWith('::')) {
    return `${PAGE_SCOPE} ${trimmed}`;
  }

  const isPopupSelector = POPUP_TOKENS.some((token) => trimmed.includes(token));

  if (isPopupSelector) {
    const withBodyScope = /\bbody\b/.test(trimmed)
      ? trimmed.replace(/\bbody\b/g, PAGE_SCOPE)
      : `${PAGE_SCOPE} ${trimmed}`;
    return withBodyScope;
  }

  if (/\bbody\b/.test(trimmed)) {
    const withBodyScope = trimmed.replace(/\bbody\b/g, PAGE_SCOPE);
    return injectScopeAfterBody(withBodyScope);
  }

  if (/\bhtml\b/.test(trimmed)) {
    return trimmed.replace(/\bhtml\b/g, CONTENT_SCOPE);
  }

  return `${CONTENT_SCOPE} ${trimmed}`;
}

function transformSelectorList(input) {
  return splitSelectorList(input)
    .map(transformSelector)
    .join(', ');
}

function findMatchingBrace(input, startIndex) {
  let depth = 0;
  let quote = null;

  for (let index = startIndex; index < input.length; index += 1) {
    const char = input[index];
    const next = input[index + 1];

    if (quote) {
      if (char === '\\') {
        index += 1;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === '"' || char === '\'') {
      quote = char;
      continue;
    }

    if (char === '/' && next === '*') {
      const end = input.indexOf('*/', index + 2);
      if (end === -1) throw new Error('Unterminated comment while matching braces');
      index = end + 1;
      continue;
    }

    if (char === '{') {
      depth += 1;
      continue;
    }

    if (char === '}') {
      depth -= 1;
      if (depth === 0) {
        return index;
      }
    }
  }

  throw new Error('Unterminated block while matching braces');
}

function processCss(input) {
  let output = '';
  let index = 0;

  while (index < input.length) {
    if (/\s/.test(input[index])) {
      output += input[index];
      index += 1;
      continue;
    }

    if (input[index] === '/' && input[index + 1] === '*') {
      const end = input.indexOf('*/', index + 2);
      if (end === -1) throw new Error('Unterminated comment');
      output += input.slice(index, end + 2);
      index = end + 2;
      continue;
    }

    const ruleStart = index;
    let quote = null;
    let bracketDepth = 0;
    let parenDepth = 0;

    while (index < input.length) {
      const char = input[index];
      const next = input[index + 1];

      if (quote) {
        if (char === '\\') {
          index += 2;
          continue;
        }
        if (char === quote) {
          quote = null;
        }
        index += 1;
        continue;
      }

      if (char === '"' || char === '\'') {
        quote = char;
        index += 1;
        continue;
      }

      if (char === '/' && next === '*') {
        const end = input.indexOf('*/', index + 2);
        if (end === -1) throw new Error('Unterminated comment');
        index = end + 2;
        continue;
      }

      if (char === '[') {
        bracketDepth += 1;
        index += 1;
        continue;
      }

      if (char === ']') {
        bracketDepth = Math.max(0, bracketDepth - 1);
        index += 1;
        continue;
      }

      if (char === '(') {
        parenDepth += 1;
        index += 1;
        continue;
      }

      if (char === ')') {
        parenDepth = Math.max(0, parenDepth - 1);
        index += 1;
        continue;
      }

      if (bracketDepth === 0 && parenDepth === 0 && (char === '{' || char === ';')) {
        break;
      }

      index += 1;
    }

    const prelude = input.slice(ruleStart, index).trim();
    if (!prelude) {
      if (index < input.length) {
        output += input[index];
        index += 1;
      }
      continue;
    }

    if (input[index] === ';') {
      output += `${prelude};`;
      index += 1;
      continue;
    }

    if (input[index] !== '{') {
      output += prelude;
      continue;
    }

    const blockStart = index + 1;
    const blockEnd = findMatchingBrace(input, index);
    const blockBody = input.slice(blockStart, blockEnd);

    if (prelude.startsWith('@')) {
      if (KEYFRAME_RULE.test(prelude) || /^@font-face\b/i.test(prelude)) {
        output += `${prelude}{${blockBody}}`;
      } else {
        output += `${prelude}{${processCss(blockBody)}}`;
      }
    } else {
      output += `${transformSelectorList(prelude)}{${blockBody}}`;
    }

    index = blockEnd + 1;
  }

  return output;
}

async function buildEmbeddedStyles() {
  const [mainSource, noscriptSource] = await Promise.all([
    readFile(mainSourcePath, 'utf8'),
    readFile(noscriptSourcePath, 'utf8'),
  ]);

  const embeddedMain = processCss(mainSource);
  const embeddedNoscript = processCss(noscriptSource);

  await mkdir(cssDir, { recursive: true });
  await Promise.all([
    writeFile(embeddedMainPath, embeddedMain),
    writeFile(embeddedNoscriptPath, embeddedNoscript),
  ]);
}

await buildEmbeddedStyles();
