import { defineCollection, z } from "astro:content";
// z is a schema validation library

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        image: z.string().url(),
        readtime: z.number(),
        description: z.string(),
        buy: z.object({
            gt: z.string().url(),
            world: z.string().url(),
        })
    })
})

export const collections = {books};
