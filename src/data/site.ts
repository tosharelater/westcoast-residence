import { withBase } from '../utils/paths';

export const site = {
  name: 'West Coast Residence',
  tagline: 'Mohammedia',
  url: 'https://tosharelater.github.io/westcoast-residence',
  address: 'Boulevard Hassan II, Mohammedia',
  city: 'Mohammedia',
  country: 'Maroc',
  phone: '+212661502502',
  phoneDisplay: '06 61 50 25 02',
  email: 'contact@westcoastresidence.ma', // à renseigner
  hours: 'Lun – Sam : 10h – 19h',
  whatsapp: '212661502502', // format international sans +
  whatsappDefaultMessage:
    "Bonjour, je m'intéresse à West Coast Residence à Mohammedia.",
  // Embed centré sur la fiche Google Maps "West coast Résidence" (33.693386, -7.3915007)
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500!2d-7.3915007!3d33.693386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b700723a1f81%3A0x5445e7d6d79be724!2sWest%20coast%20R%C3%A9sidence!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma',
  mapsLink: 'https://maps.app.goo.gl/B1zmS67wkt4D868w5',
  geo: { latitude: 33.693386, longitude: -7.3915007 },
};

export function whatsappUrl(message = site.whatsappDefaultMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: withBase('/'), label: 'Accueil' },
  { href: withBase('/programme'), label: 'Le Programme' },
  { href: withBase('/appartements'), label: 'Appartements' },
  { href: withBase('/commerces'), label: 'Commerces' },
  { href: withBase('/bureaux'), label: 'Bureaux' },
  { href: withBase('/blog'), label: 'Blog' },
  { href: withBase('/faq'), label: 'FAQ' },
  { href: withBase('/contact'), label: 'Contact' },
];

export const typologies = [
  {
    id: 'studios',
    title: 'Studios',
    price: 'dès 500 000 DH',
    surface: '36 à 53 m²',
    hook: 'Idéal premier achat',
    href: withBase('/appartements') + '#studios',
    image: withBase('/images/bedroom.webp'),
    alt: 'Studio à vendre à Mohammedia, West Coast Residence',
  },
  {
    id: 'appartements',
    title: 'Appartements',
    price: 'sur demande',
    surface: '65 à 114 m²',
    hook: 'Pour les familles et résidences secondaires',
    href: withBase('/appartements') + '#appartements-familiaux',
    image: withBase('/images/interior-22.webp'),
    alt: 'Appartement familial à vendre à Mohammedia, West Coast Residence',
  },
  {
    id: 'commerces',
    title: 'Commerces',
    price: 'emplacement passant',
    surface: '58 à 119 m²',
    hook: "En pied d'immeuble",
    href: withBase('/commerces'),
    image: withBase('/images/commerce.webp'),
    alt: 'Local commercial à vendre à Mohammedia, West Coast Residence',
  },
  {
    id: 'bureaux',
    title: 'Bureaux',
    price: 'dès 650 000 DH',
    surface: '45 à 107 m²',
    hook: 'Pour professionnels et PME',
    href: withBase('/bureaux'),
    image: withBase('/images/interior-15.webp'),
    alt: 'Bureau à vendre à Mohammedia, West Coast Residence',
  },
];

export const advantages = [
  {
    title: 'Chantier livré',
    text: 'Prêt à visiter et à habiter immédiatement, zéro risque de retard.',
  },
  {
    title: 'Tout en un seul endroit',
    text: 'Studios, appartements, bureaux et commerces réunis.',
  },
  {
    title: 'Finitions soignées',
    text: 'Marbre, verrières, façade moderne.',
  },
  {
    title: "Aide de l'État possible",
    text: "Jusqu'à 70 000 DH via Daam Sakane pour les biens éligibles.",
  },
  {
    title: 'Réponse rapide sur WhatsApp',
    text: 'On vous répond vite, tous les jours.',
  },
  {
    title: 'Emplacement stratégique',
    text: 'À Mohammedia, sur l\'axe Casablanca–Rabat.',
  },
];

export const blogPosts = [
  {
    slug: 'acheter-mohammedia-2026',
    title: 'Comment acheter à Mohammedia en 2026',
    excerpt:
      'Les étapes clés pour réussir votre achat immobilier à Mohammedia cette année.',
    image: withBase('/images/facade-angle.webp'),
    featured: true,
    date: '2026-09-01',
    ctaHref: withBase('/appartements'),
    ctaLabel: 'Voir les appartements',
  },
  {
    slug: 'daam-sakane-guide',
    title: 'Daam Sakane, le guide complet',
    excerpt:
      "Conditions, montants et biens éligibles : tout comprendre avant de demander l'aide.",
    image: withBase('/images/hall.webp'),
    featured: false,
    date: '2026-08-20',
    ctaHref: withBase('/appartements') + '#studios',
    ctaLabel: 'Voir les studios éligibles',
  },
  {
    slug: 'studio-ou-appartement',
    title: 'Studio ou appartement familial : comment choisir',
    excerpt:
      'Premier achat, famille ou investissement : comment trancher selon votre projet.',
    image: withBase('/images/bedroom.webp'),
    featured: false,
    date: '2026-08-10',
    ctaHref: withBase('/appartements'),
    ctaLabel: 'Comparer les typologies',
  },
  {
    slug: 'investir-mohammedia',
    title: 'Investir à Mohammedia : rendement et opportunités',
    excerpt:
      'Rendement locatif, emplacements et typologies pour investir à Mohammedia.',
    image: withBase('/images/stairs.webp'),
    featured: false,
    date: '2026-07-28',
    ctaHref: withBase('/commerces'),
    ctaLabel: 'Voir les commerces',
  },
];

export const faqItems = [
  {
    category: 'Le bien',
    items: [
      {
        q: 'Le chantier est-il vraiment terminé ?',
        a: "Oui. West Coast Residence est entièrement livré. Ce que vous visitez, c'est ce que vous achetez, pas un rendu 3D.",
      },
      {
        q: 'Puis-je visiter cette semaine ?',
        a: 'Oui, les visites sont possibles rapidement. Écrivez-nous sur WhatsApp pour organiser un créneau.',
      },
      {
        q: 'Quelles typologies sont disponibles ?',
        a: 'Des studios (36–53 m²), des appartements familiaux (65–114 m²), des bureaux (45–107 m²) et des commerces (58–119 m²).',
      },
    ],
  },
  {
    category: 'Financement',
    items: [
      {
        q: "Puis-je bénéficier de l'aide de l'État Daam Sakane ?",
        a: "Certains lots à moins de 700 000 DH peuvent être éligibles, avec une aide allant jusqu'à 70 000 DH. L'éligibilité définitive dépend de conditions précises (premier achat, date du permis d'habiter). Contactez-nous pour vérifier votre situation.",
      },
      {
        q: 'Puis-je financer mon achat avec un crédit bancaire ?',
        a: 'Oui, comme pour tout achat immobilier neuf. On peut vous orienter selon votre profil, écrivez-nous pour en discuter.',
      },
      {
        q: 'Le prix affiché comprend-il les frais ?',
        a: "Les prix communiqués sont des prix d'appel de départ. Le détail complet vous est communiqué directement, en fonction du bien qui vous intéresse.",
      },
    ],
  },
  {
    category: "Étapes d'achat",
    items: [
      {
        q: 'Quelles sont les étapes, de la visite à la signature ?',
        a: "Visite du bien, choix du lot, réservation, montage du financement si besoin, signature chez le notaire. Comme le bien est déjà construit, ce parcours est plus rapide que sur un achat sur plan.",
      },
      {
        q: "De quels documents ai-je besoin pour réserver ?",
        a: "Une pièce d'identité et un justificatif de revenus suffisent pour démarrer. Le détail complet vous est donné lors du premier contact.",
      },
    ],
  },
  {
    category: 'Après-vente',
    items: [
      {
        q: 'Que se passe-t-il après la signature ?',
        a: "Vous récupérez les clés selon le calendrier convenu, sans attendre la fin d'un chantier puisque le bien est déjà terminé.",
      },
      {
        q: 'Puis-je louer mon bien après achat ?',
        a: 'Oui, notamment pour les studios et petits appartements, avec un rendement locatif à Mohammedia estimé entre 4 et 5,5%.',
      },
    ],
  },
];
