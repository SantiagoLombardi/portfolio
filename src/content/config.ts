import { defineCollection, z } from "astro:content";
// z -> zod schema

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.array(z.string()),
    className: z.string(),
    technologies: z.array(z.string()), // array of strings
  })
});

export const collections = { projects }