// contentlayer.config.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "content/blog",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    published: z.boolean().default(true),
    image: z.string(),
    authors: z.array(z.string()),
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document, {
      rehypePlugins: [
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["subheading-anchor"],
              ariaLabel: "Link to section",
            },
          },
        ],
      ],
    });
    return {
      ...document,
      slug: `/blogs/${document._meta.path}`,
      slugAsParams: document._meta.path,
      body: {
        raw: document.content,
        code: body,
      },
    };
  },
});

const authors = defineCollection({
  name: "authors",
  directory: "content/authors",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    avatar: z.string(),
    twitter: z.string(),
  }),
});

export default defineConfig({
  collections: [posts, authors],
});
