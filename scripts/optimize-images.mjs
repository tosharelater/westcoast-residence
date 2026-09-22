import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const roots = [
  path.resolve('public/images'),
  path.resolve('public/logos'),
  path.resolve('public/theme'),
];

const PHOTO_MAX = 1600; // max width for photos
const PHOTO_QUALITY = 72;
const LOGO_QUALITY = 84;
const THEME_QUALITY = 78;

async function convertFile(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return null;

  const out = file.replace(/\.(jpe?g|png)$/i, '.webp');
  const base = path.basename(file).toLowerCase();
  const isLogo = file.includes(`${path.sep}logos${path.sep}`);
  const isTheme = file.includes(`${path.sep}theme${path.sep}`);

  let pipeline = sharp(file).rotate();

  if (!isLogo && !isTheme) {
    const meta = await sharp(file).metadata();
    if ((meta.width || 0) > PHOTO_MAX) {
      pipeline = pipeline.resize({
        width: PHOTO_MAX,
        withoutEnlargement: true,
      });
    }
  }

  if (isLogo || ext === '.png') {
    await pipeline.webp({ quality: isLogo ? LOGO_QUALITY : THEME_QUALITY, alphaQuality: 90 }).toFile(out);
  } else {
    await pipeline.webp({ quality: PHOTO_QUALITY }).toFile(out);
  }

  const before = fs.statSync(file).size;
  const after = fs.statSync(out).size;
  fs.unlinkSync(file);
  return {
    file: path.relative(process.cwd(), file),
    out: path.relative(process.cwd(), out),
    before,
    after,
    saved: before - after,
  };
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const files = roots.flatMap((r) => walk(r));
const results = [];
for (const file of files) {
  try {
    const r = await convertFile(file);
    if (r) results.push(r);
  } catch (err) {
    console.error('fail', file, err.message);
  }
}

const saved = results.reduce((s, r) => s + r.saved, 0);
console.log(
  JSON.stringify(
    {
      count: results.length,
      savedKB: Math.round(saved / 1024),
      samples: results.slice(0, 8),
    },
    null,
    2
  )
);
