import { z, defineCollection } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
  'funding-types': defineCollection({
    schema: z.object({
      categories: z.string().array(),
      chain: z.string(),
      address: z.string(),
      url: z.string(),
      tokens: z.object({
        name: z.string(),
        url: z.string(),
      }).array(),
      draft: z.boolean().optional().default(false),
    }),
  }),
};
