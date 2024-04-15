import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
import fs from 'node:fs';
import yaml from 'yaml';

const redirects = yaml.parse(await fs.promises.readFile('./src/redirects.yml', 'utf-8'));

export const siteBaseUrl = 'https://docs.immersve.com/';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Immersve Docs',
      logo: {
        src: './src/assets/logo-small.svg',
      },
      social: {
        github: 'https://github.com/immersve/'
      },
      editLink: {
        baseUrl: 'https://github.com/immersve/immersve-docs/edit/main/imsv-docs-astro',
      },
      favicon: '/favicon.ico',
      customCss: ['./src/styles/tailwind.css'],
      components: {
        Head: './src/components/Head.astro',
        MarkdownContent: './src/components/MarkdownContent.astro',
        Pagination: './src/components/FooterNavigation.astro',
      },
      sidebar: [
        { label: 'Use Cases', autogenerate: { directory: 'use-cases' } },
        {
          label: 'Guides',
          items: [
            { label: 'Introduction', link: 'guides' } ,
            { label: 'Core Concepts', autogenerate: { directory: 'guides/core-concepts' } },
            { label: 'Card Issuing Apps', autogenerate: { directory: 'guides/card-issuing-apps' } },
            { label: 'KYC Modes' , autogenerate : { directory: 'guides/kyc-modes' } },
            { label: 'Funding Protocols', autogenerate: { directory: 'guides/funding-protocols' } },
            { label: 'Reports', autogenerate: { directory: 'guides/reports' } } ,
            { label: 'Testing', autogenerate: { directory: 'guides/testing' } } ,
            { label: 'Authentication', link: 'guides/authentication' } ,
            { label: 'HTTP Status Codes', link: 'guides/http-status-codes' } ,
            { label: 'Webhooks', link: 'guides/webhooks' } ,
            { label: 'Cardholder Support', link: 'guides/cardholder-support' } ,
            { label: 'Supported Tokens', autogenerate: { directory: 'guides/supported-tokens' } },
            { label: 'Supported Chains', autogenerate: { directory: 'guides/supported-chains' } },
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
