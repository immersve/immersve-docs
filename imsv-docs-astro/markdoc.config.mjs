import path from 'node:path';
import markdoc from '@markdoc/markdoc';
import { component, defineMarkdocConfig, nodes } from '@astrojs/markdoc/config';

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
  nodes: {
    image:{
      ...nodes.image,
      render: component('./src/components/Figure.astro'),
      attributes: {
        src: { type: String },
        alt: { type: String },
        title: { type: String },
        // https://discord.com/channels/830184174198718474/1182681722215743578/1204466454922002452
        __optimizedSrc: { type: 'Object' },
      },
    },
    /* Enable table captions via the "title" attribute. */
    table: {
      ...nodes.table,
      attributes: {
        title: { type: String },
      },
      transform(node, config) {
        const children = node.children.map(n => n.transform(config))
        if (node.attributes.title) {
          children.unshift(
            new markdoc.Tag('caption', { class: 'italic caption-bottom' }, [ node.attributes.title ]),
          )
        }
        return new markdoc.Tag( 'table', {}, children);
      },
    },
    fence: {
      attributes: {
        ...nodes.fence.attributes,
        title: { type: String, render: 'title' }
      },
      render: component('./src/components/CodeFence.astro'),
    },
  },
  tags: {
    table: {
      ...markdoc.tags.table,
      attributes: {
        title: { type: String },
      }
    },
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
        endpoint: { type: String },
        anchor: {type: String }
      },
    },
    endpointref: {
      render: component('./src/components/EndpointRef.astro'),
      attributes: { name: { type: String } },
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
    warning:{
      render: component('./src/components/Warning.astro'),
      attributes: {
        class: { type: String },
      },
    },
    tab: {
      render: component('./src/components/Tab.astro'),
      attributes: {
        key: { type: String },
      },
    },
    item: {
      render: component('./src/components/Item.astro'),
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
