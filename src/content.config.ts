import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    repo: z.url().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const publications = defineCollection({
  loader: file('src/content/publications.yaml'),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number().int(),
    type: z.enum(['journal', 'conference', 'preprint', 'thesis']),
    links: z
      .object({
        pdf: z.url(),
        arxiv: z.url(),
        doi: z.url(),
        code: z.url(),
      })
      .partial()
      .default({}),
    bibtex: z.string().optional(),
  }),
});

const talks = defineCollection({
  loader: file('src/content/talks.yaml'),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    location: z.string(),
    date: z.coerce.date(),
    links: z.object({ slides: z.url(), video: z.url() }).partial().default({}),
  }),
});

export const collections = { projects, publications, talks };
