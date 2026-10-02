import fs from 'fs';
import path from 'path';

const archiveDir = 'd:/Astral-Digital/West-coast/Archive';
const outDir = 'd:/Astral-Digital/West-coast/westcoast-site/src/content/blog';
fs.mkdirSync(outDir, { recursive: true });

const meta = {
  'comment-acheter-un-bien-a-mohammedia': {
    date: '2026-09-28',
    featured: true,
    category: 'appartements',
    ctaHref: '/appartements',
    ctaLabel: 'Voir les appartements',
    excerpt:
      'Budget, demarches, financement et pieges a eviter pour reussir votre achat immobilier a Mohammedia en 2026.',
  },
  'daam-sakane-guide-complet': {
    date: '2026-09-26',
    featured: false,
    category: 'appartements',
    ctaHref: '/appartements#studios',
    ctaLabel: 'Voir les studios eligibles',
    excerpt:
      "Conditions, montants et biens concernes : tout comprendre avant de demander l'aide Daam Sakane.",
  },
  'studio-ou-appartement-familial-comment-choisir': {
    date: '2026-09-24',
    featured: false,
    category: 'appartements',
    ctaHref: '/appartements',
    ctaLabel: 'Comparer les typologies',
    excerpt:
      'Premier achat, famille ou investissement : comment trancher entre studio et appartement familial.',
  },
  'investir-a-mohammedia-rendement-opportunites': {
    date: '2026-09-22',
    featured: false,
    category: 'actualite',
    ctaHref: '/commerces',
    ctaLabel: 'Voir les commerces',
    excerpt:
      "Rendement locatif, emplacements et typologies pour investir dans l'immobilier a Mohammedia.",
  },
  'guide-mre-acheter-a-mohammedia': {
    date: '2026-09-20',
    featured: false,
    category: 'appartements',
    ctaHref: '/contact',
    ctaLabel: 'Parler a un conseiller',
    excerpt:
      'Procuration, financement et parcours a distance : le guide pratique pour les MRE qui achettent a Mohammedia.',
  },
  'meilleurs-quartiers-mohammedia': {
    date: '2026-09-18',
    featured: false,
    category: 'actualite',
    ctaHref: '/programme',
    ctaLabel: 'Decouvrir le programme',
    excerpt:
      'Ou vivre ou investir a Mohammedia : reperes pour choisir le bon quartier selon votre projet.',
  },
  'prix-immobilier-mohammedia': {
    date: '2026-09-16',
    featured: false,
    category: 'actualite',
    ctaHref: '/appartements',
    ctaLabel: "Voir les prix d'appel",
    excerpt:
      "Prix au m2, budgets par typologie et reperes 2026 pour estimer le cout d'un bien a Mohammedia.",
  },
  'acheter-sur-plan-ou-residence-livree': {
    date: '2026-09-14',
    featured: false,
    category: 'appartements',
    ctaHref: '/programme',
    ctaLabel: 'Voir la residence livree',
    excerpt:
      'Avantages, risques et delais : comment choisir entre achat sur plan et residence deja livree.',
  },
  'ouvrir-un-commerce-a-mohammedia': {
    date: '2026-09-12',
    featured: false,
    category: 'commerces',
    ctaHref: '/commerces',
    ctaLabel: 'Voir les commerces',
    excerpt:
      'Emplacement, surface et flux : les criteres cles pour bien choisir son local commercial a Mohammedia.',
  },
  'commerces-a-vendre-a-mohammedia': {
    date: '2026-09-10',
    featured: false,
    category: 'commerces',
    ctaHref: '/commerces',
    ctaLabel: 'Voir les commerces disponibles',
    excerpt:
      "Surfaces, prix d'appel et disponibilites pour acheter un commerce a Mohammedia.",
  },
  'bureau-a-vendre-a-mohammedia': {
    date: '2026-09-08',
    featured: false,
    category: 'bureaux',
    ctaHref: '/bureaux',
    ctaLabel: 'Voir les bureaux',
    excerpt:
      "Prix, surfaces et usages : ce qu'il faut savoir avant d'acheter un bureau a Mohammedia.",
  },
  'louer-ou-acheter-bureau-professionnel-mohammedia': {
    date: '2026-09-06',
    featured: false,
    category: 'bureaux',
    ctaHref: '/bureaux',
    ctaLabel: 'Voir les bureaux disponibles',
    excerpt:
      'Location ou achat : quel choix pour un cabinet, une profession liberale ou une PME a Mohammedia ?',
  },
  'credit-immobilier-maroc': {
    date: '2026-09-04',
    featured: false,
    category: 'actualite',
    ctaHref: '/contact',
    ctaLabel: 'Discuter de votre projet',
    excerpt:
      "Taux, capacite d'emprunt et simulation : comment financer un achat immobilier a Mohammedia.",
  },
};

// Proper French excerpts (script meta above was ASCII-safe fallback; overwrite with UTF-8)
const excerptsFr = {
  'comment-acheter-un-bien-a-mohammedia':
    'Budget, démarches, financement et pièges à éviter pour réussir votre achat immobilier à Mohammedia en 2026.',
  'daam-sakane-guide-complet':
    "Conditions, montants et biens concernés : tout comprendre avant de demander l'aide Daam Sakane.",
  'studio-ou-appartement-familial-comment-choisir':
    'Premier achat, famille ou investissement : comment trancher entre studio et appartement familial.',
  'investir-a-mohammedia-rendement-opportunites':
    "Rendement locatif, emplacements et typologies pour investir dans l'immobilier à Mohammedia.",
  'guide-mre-acheter-a-mohammedia':
    'Procuration, financement et parcours à distance : le guide pratique pour les MRE qui achètent à Mohammedia.',
  'meilleurs-quartiers-mohammedia':
    'Où vivre ou investir à Mohammedia : repères pour choisir le bon quartier selon votre projet.',
  'prix-immobilier-mohammedia':
    "Prix au m², budgets par typologie et repères 2026 pour estimer le coût d'un bien à Mohammedia.",
  'acheter-sur-plan-ou-residence-livree':
    'Avantages, risques et délais : comment choisir entre achat sur plan et résidence déjà livrée.',
  'ouvrir-un-commerce-a-mohammedia':
    'Emplacement, surface et flux : les critères clés pour bien choisir son local commercial à Mohammedia.',
  'commerces-a-vendre-a-mohammedia':
    "Surfaces, prix d'appel et disponibilités pour acheter un commerce à Mohammedia.",
  'bureau-a-vendre-a-mohammedia':
    "Prix, surfaces et usages : ce qu'il faut savoir avant d'acheter un bureau à Mohammedia.",
  'louer-ou-acheter-bureau-professionnel-mohammedia':
    'Location ou achat : quel choix pour un cabinet, une profession libérale ou une PME à Mohammedia ?',
  'credit-immobilier-maroc':
    "Taux, capacité d'emprunt et simulation : comment financer un achat immobilier à Mohammedia.",
};

const labelsFr = {
  'daam-sakane-guide-complet': 'Voir les studios éligibles',
  'guide-mre-acheter-a-mohammedia': 'Parler à un conseiller',
  'meilleurs-quartiers-mohammedia': 'Découvrir le programme',
  'prix-immobilier-mohammedia': "Voir les prix d'appel",
  'acheter-sur-plan-ou-residence-livree': 'Voir la résidence livrée',
  'louer-ou-acheter-bureau-professionnel-mohammedia': 'Voir les bureaux disponibles',
};

const files = fs.readdirSync(archiveDir).filter((f) => f.endsWith('.md')).sort();
const posts = [];

for (const file of files) {
  const raw = fs.readFileSync(path.join(archiveDir, file), 'utf8');
  const slug = (raw.match(/\*\*Slug\*\*\s*:\s*\/blog\/([^\s\r\n]+)/) || [])[1];
  const title = (raw.match(/^#\s+(.+)$/m) || [])[1]?.trim();
  if (!slug || !title) throw new Error('Missing slug/title in ' + file);

  let body = raw;
  const firstFence = body.indexOf('\n---\n');
  const firstFenceCR = body.indexOf('\n---\r\n');
  const cutAt = firstFence >= 0 ? firstFence : firstFenceCR;
  if (cutAt >= 0) {
    body = body.slice(cutAt).replace(/^\r?\n---\r?\n\r?\n/, '');
  }
  body = body.replace(/^#\s+.+\r?\n\r?\n/, '');
  body = body.replace(
    /\r?\n---\r?\n\r?\n## À propos de West Coast Residence[\s\S]*?(?=\r?\n---\r?\n|\r?\n## Sources|$)/,
    '\n'
  );
  body = body.replace(/\r?\n---\r?\n\r?\n## Sources externes utilisées[\s\S]*$/m, '\n');
  body = body.replace(/\r?\n\*?\(Note interne[\s\S]*?\*?(\r?\n|$)/g, '\n');
  body = body.replace(/\r?\n---\r?\n\r?\n## Méta-description proposée[\s\S]*$/m, '\n');
  body = body.replace(/\r?\n## Méta-description proposée[\s\S]*$/m, '\n');
  body = body.replace(/\r?\n{3,}/g, '\n\n').trim();

  const m = meta[slug];
  if (!m) throw new Error('No meta for ' + slug);

  const excerpt = excerptsFr[slug] || m.excerpt;
  const ctaLabel = labelsFr[slug] || m.ctaLabel;
  const image = `/images/blog/${slug}.webp`;

  const fm = `---
title: ${JSON.stringify(title)}
excerpt: ${JSON.stringify(excerpt)}
date: ${JSON.stringify(m.date)}
image: ${JSON.stringify(image)}
category: ${JSON.stringify(m.category)}
featured: ${m.featured}
ctaHref: ${JSON.stringify(m.ctaHref)}
ctaLabel: ${JSON.stringify(ctaLabel)}
---

${body}
`;

  fs.writeFileSync(path.join(outDir, `${slug}.md`), fm, 'utf8');
  posts.push({
    slug,
    title,
    excerpt,
    date: m.date,
    image,
    category: m.category,
    featured: m.featured,
    ctaHref: m.ctaHref,
    ctaLabel,
  });
  console.log('wrote', slug, '→', m.category);
}

fs.writeFileSync(
  'd:/Astral-Digital/West-coast/westcoast-site/src/data/blog-index.json',
  JSON.stringify(posts, null, 2),
  'utf8'
);
console.log('done', posts.length);
