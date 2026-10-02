import sharp from 'sharp';
import fs from 'fs';

const logoPath = 'public/logos/westcoast-logo.webp';
const out = 'public';
const bg = { r: 34, g: 28, b: 19, alpha: 1 }; // #221c13

async function makeSquare(size, padRatio = 0.14) {
  const pad = Math.max(2, Math.round(size * padRatio));
  const inner = size - pad * 2;
  const logo = await sharp(logoPath)
    .resize(inner, inner, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: bg,
    },
  }).composite([{ input: logo, gravity: 'centre' }]);
}

const sizes = [
  ['favicon-32.png', 32, 0.06],
  ['favicon-48.png', 48, 0.06],
  ['favicon-192.png', 192, 0.08],
  ['apple-touch-icon.png', 180, 0.08],
];

for (const [name, size, pad] of sizes) {
  await (await makeSquare(size, pad)).png().toFile(`${out}/${name}`);
  console.log('wrote', name);
}

await (await makeSquare(48, 0.06)).png().toFile(`${out}/favicon.ico`);

// Simple SVG pointing at the 48px asset concept: inline PNG for reliability
const png48 = fs.readFileSync(`${out}/favicon-48.png`);
const b64 = png48.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <image href="data:image/png;base64,${b64}" width="48" height="48"/>
</svg>`;
fs.writeFileSync(`${out}/favicon.svg`, svg);
console.log('done');
