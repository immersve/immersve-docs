/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 // This file is a build artefact. It is generated by `docusaurus gen-api-docs`
const openApiSidebar = require('../immersve-docs/docs/api-reference/sidebar');

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  primarySidebar: [
    'intro',
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'autogenerated',
          dirName: 'guides',
        },
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: openApiSidebar.filter(
        (item) => item.id != 'api-reference/immersve-api'
      ),
    }
  ],
};

module.exports = sidebars;
