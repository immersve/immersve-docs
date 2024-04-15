import { component, defineMarkdocConfig } from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';

export default defineMarkdocConfig({
  extends: [
    shiki({
      theme: 'rose-pine-dawn',
    }),
  ],
  tags: {
    button: {
      render: component('./src/components/Button.astro'),
      attributes: {
        href: { type: String },
        variant: { type: String, matches: [ 'primary', 'secondary', 'filled', 'outline', 'text' ] },
        arrow: { type: String, matches: [ 'left', 'right'] },
        class: { type: String },
      },
    },
    code: {
      render: component('./src/components/Code.astro'),
      attributes: {
        title: { type: String },
        class: { type: String },
      },
    },
    note: {
      render: component('./src/components/Note.astro'),
      attributes: {
        class: { type: String },
      },
    },
    fundingTypeTable: {
      render: component('./src/components/FundingTypeTable.astro'),
      attributes: {
        categories: { type: Array },
        chain: { type: String },
      },
    },
    networkProtocolTable: {
      render: component('./src/components/NetworkProtocolTable.astro'),
      attributes: {
        chain: { type: String },
        netType: { type: String },
      },
    },
    fundingContractsTable: {
      render: component('./src/components/FundingContractsTable.astro'),
    },
    tokenTable: {
      render: component('./src/components/TokenTable.astro'),
      attributes: {
        token: { type: String },
        type: { type: String },
      },
    },
    testTokenFaucetTable: {
      render: component('./src/components/TestTokenFaucetTable.astro'),
      attributes: {
        token: { type: String },
      },
    },
    supportedChainsTable: {
      render: component('./src/components/SupportedChainsTable.astro'),
    },
    supportedTokensTable: {
      render: component('./src/components/SupportedTokensTable.astro'),
    },
  },
});
