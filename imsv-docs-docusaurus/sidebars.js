const openApiSidebar = require('./docs/sidebar');
const webhookSidebar = require('./docs/webhook-topics/sidebar');

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  primarySidebar: [
      {
      type: 'doc',
      id: 'redirects/home',
      },
        {
          type: 'category',
          label: 'Endpoints',
          link: {
            type: 'generated-index',
          },
          collapsed: false,
          items: openApiSidebar
        },
        {
          type: 'category',
          label: 'Webhook Topics',
          link: {
            type: 'generated-index',
          },
          collapsed: false,
          items: webhookSidebar
        },
  ],
};

module.exports = sidebars;
