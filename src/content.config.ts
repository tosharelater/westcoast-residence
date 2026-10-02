import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const blogCategoryIds = [
  'appartements',
  'bureaux',
  'commerces',
  'actualite',
] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    image: z.string(),
    category: z.enum(blogCategoryIds),
    featured: z.boolean().default(false),
    ctaHref: z.string(),
    ctaLabel: z.string(),
  }),
});

export const collections = { blog };
