import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const schema = z.object({
  title: z.string(),
  description: z.string().optional(),
  order: z.number().default(99),
});

const docsEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './docs-en' }),
  schema,
});

const docsZh = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './docs' }),
  schema,
});

export const collections = { docsEn, docsZh };
