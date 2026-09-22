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

for (const file of walk('src')) {
  let c = fs.readFileSync(file, 'utf8');
  const n = c.replace(/<img\b([^>]*?)>/g, (full, attrs) => {
    if (/\bwidth\s*=/.test(attrs)) return full;
    if (!/\bsrc\s*=/.test(attrs)) return full;

    let dims = ' width="1600" height="1067"';
    if (/logos\//.test(attrs)) dims = ' width="180" height="56"';
    else if (/theme\//.test(attrs)) dims = ' width="240" height="240"';
    else if (/apartment-card|offer-card|gallery|blog-card|news-card|typo__media/.test(full)) {
      dims = ' width="1200" height="900"';
    }

    const decoding = /\bdecoding\s*=/.test(attrs) ? '' : ' decoding="async"';
    const loading =
      /\bloading\s*=/.test(attrs) || /\bfetchpriority\s*=\s*["']high["']/.test(attrs)
        ? ''
        : ' loading="lazy"';

    return `<img${attrs}${dims}${decoding}${loading}>`;
  });

  if (n !== c) {
    fs.writeFileSync(file, n);
    console.log('updated', file);
  }
}
