/** Prefix public asset / internal path with Astro `base` (GitHub Pages safe). */
export function withBase(path = '') {
  const base = import.meta.env.BASE_URL || '/';
  if (!path || path === '/') return base;
  if (/^https?:\/\//i.test(path) || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }
  const clean = path.replace(/^\//, '');
  return `${base}${clean}`;
}
