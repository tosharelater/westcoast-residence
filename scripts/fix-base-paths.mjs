import fs from 'fs';
import path from 'path';

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.astro')) out.push(p);
  }
  return out;
}

function importPathFor(file) {
  const rel = path.relative(path.dirname(file), path.join('src', 'utils', 'paths.ts'))
    .replace(/\\/g, '/')
    .replace(/\.ts$/, '');
  return rel.startsWith('.') ? rel : `./${rel}`;
}

const files = walk('src');

for (const file of files) {
  let c = fs.readFileSync(file, 'utf8');
  const importLine = `import { withBase } from '${importPathFor(file)}';`;

  // Deduplicate / repair frontmatter imports of withBase
  const parts = c.split('---');
  if (parts.length >= 3) {
    let fm = parts[1];
    fm = fm
      .split(/\r?\n/)
      .filter((line, idx, arr) => {
        if (!/^import \{ withBase \} from /.test(line.trim())) return true;
        // keep only first later
        return true;
      })
      .join('\n');
    const fmLines = [];
    let seen = false;
    for (const line of fm.split(/\r?\n/)) {
      if (/^import \{ withBase \} from /.test(line.trim())) {
        if (seen) continue;
        seen = true;
        fmLines.push(importLine);
        continue;
      }
      // drop stray duplicate import lines that escaped frontmatter
      if (line.trim() === importLine) continue;
      fmLines.push(line);
    }
    fm = fmLines.join('\n');
    if (!seen && (/["'`]\/(images|logos|theme)\//.test(c) || /href=["']\/(?!\/)/.test(c) || /url\(['"]?\/(images|theme)/.test(c))) {
      fm = `\n${importLine}${fm.startsWith('\n') ? '' : '\n'}${fm}`;
    }
    parts[1] = fm;
    // Also remove stray imports left in body
    parts[2] = parts.slice(2).join('---').replace(/^import \{ withBase \} from '[^']+';\r?\n/m, '');
    c = parts[0] + '---' + parts[1] + '---' + parts[2];
  }

  // object fields
  c = c.replace(/(image|src|href):\s*'(\/(?:images|logos|theme)\/[^']+)'/g, (_, k, p) => `${k}: withBase('${p}')`);

  // attributes src="/images/..." image="/images/..."
  c = c.replace(/\b(src|image)="(\/(?:images|logos|theme)\/[^"]+)"/g, (_, a, p) => `${a}={withBase("${p}")}`);

  // internal hrefs
  c = c.replace(
    /\bhref="(\/(?:programme|appartements|commerces|bureaux|blog|faq|contact|mentions-legales|politique-confidentialite)[^"]*)"/g,
    (_, p) => `href={withBase("${p}")}`
  );

  // style="...url('/images/...')..."
  c = c.replace(/style="([^"]*)"/g, (full, inner) => {
    if (!/url\('\/(?:images|theme)\//.test(inner)) return full;
    const replaced = inner.replace(/url\('(\/(?:images|theme)\/[^']+)'\)/g, (_, p) => `url(\${withBase('${p}')})`);
    return `style={\`${replaced}\`}`;
  });

  fs.writeFileSync(file, c);
  console.log('ok', file);
}
