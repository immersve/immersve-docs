import path from 'node:path';
import { component, defineMarkdocConfig } from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';

function registryViewComponent(componentPath) {
  return {
    name: path.basename(componentPath).replace(/^./, s => s.toLowerCase()),
    render: component(`./src/components/registry-views/${componentPath}.astro`),
    attributes: {
      chain: { type: String },
      token: { type: String },
      protocol: { type: String },
      netType: { type: String },
      columns: { type: Array },
    },
  }
}

function registryViewComponents(paths) {
  const components = {};
  paths
    .map(registryViewComponent)
    .forEach(component => {
      components[component.name] = component;
    });
  return components;
}

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
    tab: {
      render: component('./src/components/Tab.astro'),
    },
    tabItem: {
      render: component('./src/components/TabItem.astro'),
      attributes: {
        title: { type: String },
      },
    },
    ...registryViewComponents([
      'chains/SupportedChainsTable',
      'protocols/FundingProtocolsTable',
      'protocols/DeployedFundingProtocolsTable',
      'protocols/FundingTypeTable',
      'tokens/NetworkTokensTable',
      'tokens/SupportedTokensTable',
    ]),
  },
});
