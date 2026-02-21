import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(60, 'SEO Title must be under 60 characters'),
    description: z.string().min(50).max(160, 'Optimal meta description length'),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    canonicalUrl: z.string().url().optional(),
    ogImage: z.string().default('/og-image.jpg'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    readTime: z.string().optional(),
    lang: z.enum(['ar', 'en']).default('ar'),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
