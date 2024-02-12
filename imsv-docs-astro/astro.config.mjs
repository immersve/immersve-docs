import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";

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
    markdoc({
      allowHTML: true,
    }),
  ],

  redirects: {
    '/api-reference/accounts-custodial': '/guides/custodial-wallets',
    '/api-reference/activate-a-card-for-physical-cards-only': '/api-reference/card',
    '/api-reference/assets': '/api-reference/asset-activities',
    '/api-reference/block-a-card': '/api-reference/card',
    '/api-reference/cancel-a-card-asynchronously': '/api-reference/cancel-a-card',
    '/api-reference/cancel-an-account': '/use-cases/custodial-wallets',
    '/api-reference/cards-custodial': '/api-reference/card',
    '/api-reference/claim-a-funding-source-for-an-account': '/api-reference/create-a-funding-source-for-an-account',
    '/api-reference/close-a-card': '/api-reference/cancel-a-card',
    '/api-reference/create-a-new-card': '/api-reference/order-card',
    '/api-reference/create-an-account': '/use-cases/custodial-wallets',
    '/api-reference/get-card-information': '/api-reference/get-card-details',
    '/api-reference/get-detailed-account-info': '/use-cases/custodial-wallets',
    '/api-reference/get-prerequisites': '/api-reference/get-spending-prerequisites',
    '/api-reference/get-secure-card-information': '/guides/fetching-secure-card-information',
    '/api-reference/kyc-custodial': '/api-reference/kyc',
    '/api-reference/register-a-funding-source-for-an-account': '/api-reference/create-a-funding-source-for-an-account',
    '/api-reference/set-card-pin': '/api-reference/card',
    '/api-reference/unblock-a-card': '/api-reference/card',
    '/api-reference/update-an-account': '/use-cases/custodial-wallets',
    '/api-reference/upload-a-kyc-resource': '/api-reference/submit-partner-kyc-statement',
    '/category/custodial-wallets': '/use-cases/custodial-wallets',
    '/category/non-custodial-wallets': '/use-cases/non-custodial-wallets',
    '/contracts/payment-protocol': '/guides/universal-evm-smart-contract',
    '/guides/add-card-to-digital-wallet': '/guides/add-card-to-xpay-wallet',
    '/guides/custodial wallets/authentication': '/guides/authentication',
    '/guides/custodial wallets/card-lifecycle': '/guides/card-lifecycle',
    '/guides/custodial wallets/physical-cards': '/guides/issue-a-virtual-card',
    '/guides/custodial-wallets': '/use-cases/custodial-wallets',
    '/guides/introduction': '/',
    '/guides/non-custodial wallets/authentication': '/guides/authentication',
    '/guides/non-custodial wallets/card-lifecycle': '/guides/card-lifecycle',
    '/guides/non-custodial wallets/issue-a-virtual-card': '/guides/issue-a-virtual-card',
    '/guides/non-custodial-wallets': '/use-cases/non-custodial-wallets',
    '/guides/simulator/authorization': '/guides/simulator',
    '/guides/simulator/clearing': '/guides/simulator',
    '/guides/simulator/clearing-without-auth': '/guides/simulator',
    '/guides/simulator/introduction': '/guides/simulator',
    '/guides/simulator/reversal': '/guides/simulator',
  }
});
