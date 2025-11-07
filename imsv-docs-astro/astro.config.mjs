import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
import fs from 'node:fs';
import yaml from 'yaml';

const redirects = yaml.parse(await fs.promises.readFile('./src/redirects.yml', 'utf-8'));

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.immersve.com/',
  integrations: [
    starlight({
      title: 'Immersve Docs',
      logo: {
        src: './src/assets/logo-small.svg',
      },
      editLink: {
        baseUrl: 'https://github.com/immersve/immersve-docs/edit/main/imsv-docs-astro',
      },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/tailwind.css'],
      components: {},
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'API Reference', link: 'https://docs.immersve.com/api-reference' },
        { label: 'Use Cases', autogenerate: { directory: 'use-cases' } },
        {
          label: 'Guides',
          items: [
            { label: 'HTTP Status Codes', link: 'guides/http-status-codes' } ,
            { label: 'Supported Regions', link: 'guides/regions' } ,
            { label: 'Authentication', autogenerate: { directory: 'guides/authentication' } } ,
            { label: 'Core Concepts', autogenerate: { directory: 'guides/core-concepts' } },
            { label: 'Card Issuing Apps', autogenerate: { directory: 'guides/card-issuing-apps' } },
            { label: 'KYC' , items: [
              // Customizing the label of the KYC intro guide means we cannot
              // autogenerate the items.
              { label: 'Introduction', link: 'guides/kyc' },
              { label: 'Partner Conducted KYC', link: 'guides/partner-conducted-kyc' },
              { label: 'Immersve Conducted KYC', link: 'guides/immersve-conducted-kyc' },
              { label: 'Detecting when KYC is complete', link: 'guides/detecting-kyc-completed' },
              { label: 'KYC Spending Prerequisites', link: 'guides/kyc-spending-prerequisites' },
            ]},
            { label: 'Supported Chains', autogenerate: { directory: 'guides/supported-chains' } },
            { label: 'Supported Tokens', autogenerate: { directory: 'guides/supported-tokens' } },
            { label: 'Funding Protocols', items: [
              // Hiding the concrete protocols
              // This is to draw attention instead to the supported chains and
              // protocol abstractions (direct spend, custodial, etc).
              { label: 'Funding Protocols', link: 'guides/funding-protocols' },
              { label: 'Funding Types', link: 'guides/funding-types' },
            ]},
            { label: 'Webhooks', autogenerate: { directory: 'guides/webhooks' }},
            { label: 'Testing', autogenerate: { directory: 'guides/testing' } },
          ]
        },
        { label: 'Resources', autogenerate: { directory: 'resources' } },
        { label: 'Contact Us', link: 'https://immersve.com/contact' },
      ],
    }),
    tailwind({
      applyBaseStyles: false
    }),
    markdoc({
      allowHTML: true,
    }),
  ],

  redirects,
});
