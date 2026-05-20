import { defineCollection, z } from "astro:content";
import categories from "../data/categories.json";

const categoryKeys = categories.map((category) => category.key) as [string, ...string[]];

const posts = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(categoryKeys),
    cover: image().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { posts };
