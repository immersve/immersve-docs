import { z, defineCollection } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        'funding-protocol': z
          .object({
            source: z.string(),
          })
          .optional(),
        'supported-chain': z
          .object({
            docsUrl: z.string(),
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
  'tokens-installed-on-network': defineCollection({
    schema: z.object({
      label: z.string(),
      netType: z.string(),
      address: z.string(),
      url: z.string(),
      faucet: z.string().optional(),
      faucetLabel: z.string().optional(),
    }),
  }),
  networks: defineCollection({
    schema: z.object({
      label: z.string(),
      chain: z.string(),
      liveness: z.string(),
      netType: z.string(),
      protocols: z
        .object({
          protocolName: z.string(),
          protocolLabel: z.string(),
          docsUrl: z.string(),
          fundsManagerAddress: z.string(),
          fundsManagerUrl: z.string(),
        })
        .array(),
    }),
  }),
};
