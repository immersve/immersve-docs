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
              { label: 'Introduction', link: 'guides/kyc' },
              { label: 'Partner Conducted KYC', link: 'guides/partner-conducted-kyc' },
              { label: 'Immersve Conducted KYC', link: 'guides/immersve-conducted-kyc' },
            ]},
            { label: 'Supported Chains', autogenerate: { directory: 'guides/supported-chains' } },
            { label: 'Funding Protocols', items: [
              // Hiding the concrete protocols
              // This is to draw attention instead to the supported chains and
              // protocol abstractions (direct spend, custodial, etc).
              { label: 'Funding Protocols', link: 'guides/funding-protocols' },
              { label: 'Funding Types', link: 'guides/funding-types' },
            ]},
            { label: 'Testing', autogenerate: { directory: 'guides/testing' } } ,
            { label: 'Supported Tokens', autogenerate: { directory: 'guides/supported-tokens' } },
          ]
        },
        { label: 'Resources', autogenerate: { directory: 'resources' } },
        {
          label: 'API Reference',
          link: '/api-reference/',
        },
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
