import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
import fs from 'node:fs';
import yaml from 'yaml';

const redirects = yaml.parse(await fs.promises.readFile('./src/redirects.yml', 'utf-8'));

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Immersve Docs',
      social: {
        github: 'https://github.com/immersve/'
      },
      favicon: '/favicon.ico',
      customCss: ['./src/styles/tailwind.css'],
      components: {
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
            { label: 'Funding Protocols', autogenerate: { directory: 'guides/funding-protocols' } },
            { label: 'Reports', autogenerate: { directory: 'guides/reports' } } ,
            { label: 'Testing', autogenerate: { directory: 'guides/testing' } } ,
            { label: 'Authentication', link: 'guides/authentication' } ,
            { label: 'Webhooks', link: 'guides/webhooks' } ,
          ]
        },
        {
          label: 'API Reference',
          link: '/api-reference/',
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false
    }),
    markdoc(),
  ],

  redirects,
});
