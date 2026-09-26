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
      // Immersve components registered under Starlight's override slots
      // (slot names are the keys of @astrojs/starlight/schemas/components.ts).
      // FooterPageLink, MobileMenu, Navigation, NavigationList, TocList,
      // starlight-toc and icons/ are internal helpers imported by these, not
      // slots. Navigation is rendered by PageFrame on every page, so the
      // Sidebar slot (which Starlight withholds on the 404 page) is unused.
      components: {
        Head: './src/components/starlight/Head.astro',
        ThemeProvider: './src/components/starlight/ThemeProvider.astro',
        SkipLink: './src/components/starlight/Empty.astro',
        PageFrame: './src/components/starlight/PageFrame.astro',
        Header: './src/components/starlight/Header.astro',
        Search: './src/components/starlight/Search.astro',
        ThemeSelect: './src/components/starlight/ThemeSelect.astro',
        MobileMenuToggle: './src/components/starlight/MobileMenuToggle.astro',
        Sidebar: './src/components/starlight/Empty.astro',
        TwoColumnContent: './src/components/starlight/TwoColumnContent.astro',
        PageSidebar: './src/components/starlight/TableOfContents.astro',
        Banner: './src/components/starlight/Empty.astro',
        Hero: './src/components/starlight/Empty.astro',
        ContentPanel: './src/components/starlight/ContentPanel.astro',
        PageTitle: './src/components/starlight/Empty.astro',
        MarkdownContent: './src/components/starlight/Prose.astro',
        Footer: './src/components/starlight/Footer.astro',
      },
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'API Reference', link: 'https://docs.immersve.com/api-reference' },
        { label: 'Use Cases', autogenerate: { directory: 'use-cases' } },
        {
          label: 'Guides',
          items: [
            { label: 'API Fundamentals', autogenerate: { directory: 'guides/api-fundamentals' } },
            { label: 'Core Concepts', autogenerate: { directory: 'guides/core-concepts' } },
            { label: 'Card Issuing Apps', autogenerate: { directory: 'guides/card-issuing-apps' } },
            { label: 'KYC' , items: [
              // Customizing the label of the KYC intro guide means we cannot
              // autogenerate the items.
              { label: 'Introduction', link: 'guides/kyc' },
              { label: 'Partner Conducted KYC', link: 'guides/partner-conducted-kyc' },
              { label: 'Immersve Conducted KYC', link: 'guides/immersve-conducted-kyc' },
              { label: 'Detecting KYC Completion', link: 'guides/detecting-kyc-completion' },
              { label: 'KYC Spending Prerequisites', link: 'guides/kyc-spending-prerequisites' },
              { label: 'Cardholder Activation', link: 'guides/cardholder-activation' },
            ]},
            { label: '3DS', autogenerate: { directory: 'guides/3ds' }},
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
            { label: 'Reports', autogenerate: { directory: 'guides/reports' }},
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
