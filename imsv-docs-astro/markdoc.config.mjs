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
      }
    },
    fundingContractsTable: {
      render: component('./src/components/FundingContractsTable.astro'),
    },
  }
});
