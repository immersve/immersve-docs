import { z, defineCollection } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        fundingProtocol: z
          .object({
            source: z.string(),
          })
          .optional(),
        supportedChain: z
          .object({
            docsPath: z.string(),
          })
          .optional(),
        supportedToken: z
          .object({
            docsPath: z.string(),
          })
          .optional(),
      }),
    }),
  }),
  i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
  'funding-types': defineCollection({
    schema: z.object({
      categories: z.string().array(),
      chain: z.string(),
      networks: z.string().array(),
    }),
  }),
  'network-tokens': defineCollection({
    schema: z.object({
      title: z.string(),
      address: z.string(),
      url: z.string(),
      faucet: z.string().optional(),
      faucetTitle: z.string().optional(),
    }),
  }),
  networks: defineCollection({
    schema: z.object({
      title: z.string(),
      chain: z.string(),
      netType: z.string(),
      protocols: z
        .object({
          name: z.string(),
          title: z.string(),
          docsPath: z.string(),
          masterContractAddress: z.string(),
          masterContractUrl: z.string(),
        })
        .array(),
    }),
  }),
};
