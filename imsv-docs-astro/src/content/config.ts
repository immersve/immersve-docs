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
        supportedChain: z.boolean().optional(),
        supportedToken: z.boolean().optional(),
      }),
    }),
  }),
  i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
  'funding-types': defineCollection({
    schema: z.object({
      network: z.string().optional(),
      protocol: z.string(),
      token: z.string(),
    }),
  }),
  'network-tokens': defineCollection({
    schema: z.object({
      title: z.string(),
      address: z.string(),
      faucet: z.string().optional(),
      faucetTitle: z.string().optional(),
    }),
  }),
  networks: defineCollection({
    schema: z.object({
      title: z.string(),
      chain: z.string(),
      netType: z.string(),
      addressUrlTemplate: z.string(),
      protocols: z
        .object({
          name: z.string(),
          masterContractAddress: z.string(),
        })
        .array(),
    }),
  }),
};
