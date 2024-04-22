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
    link: {
      render: component('./src/components/Link.astro'),
      attributes: {
        href: { type: String },
        title: { type: String },
        page: { type: String },
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
      render: component('./src/components/registry-views/FundingTypeTable.astro'),
      attributes: {
        netType: { type: String },
        chain: { type: String },
        columns: { type: Array }
      },
    },
    supportedNetworksTable: {
      render: component('./src/components/registry-views/SupportedNetworksTable.astro'),
      attributes: {
        chain: { type: String },
        netType: { type: String },
      },
    },
    fundingProtocolsTable: {
      render: component('./src/components/registry-views/FundingProtocolsTable.astro'),
    },
    networkTokensTable: {
      render: component('./src/components/registry-views/NetworkTokensTable.astro'),
      attributes: {
        token: { type: String },
        netType: { type: String },
        columns: { type: Array },
      },
    },
    supportedChainsTable: {
      render: component('./src/components/registry-views/SupportedChainsTable.astro'),
    },
    supportedTokensTable: {
      render: component('./src/components/registry-views/SupportedTokensTable.astro'),
    },
  },
});
