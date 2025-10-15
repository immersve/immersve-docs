const openApiSidebar = require('./docs/sidebar');
const webhookSidebar = require('./docs/webhook-topics/sidebar');

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  primarySidebar: [
      {
      type: 'doc',
      id: 'home/home',
      },
        {
          type: 'category',
          label: 'Endpoints',
          link: {
            type: 'generated-index',
          },
          collapsed: false,
                    items: Array.isArray(openApiSidebar)
            ? openApiSidebar.filter(item => item.id !== 'immersve-api')
            : openApiSidebar.default.filter(item => item.id !== 'immersve-api')
        },
        {
          type: 'category',
          label: 'Webhook Topics',
          link: {
            type: 'generated-index',
          },
          collapsed: false,
          items: Array.isArray(webhookSidebar)
            ? webhookSidebar.filter(item => item.id !== 'webhook-topics/immersve-webhooks')
            : webhookSidebar.default.filter(item => item.id !== 'webhook-topics/immersve-webhooks')
        },
  ],
};

module.exports = sidebars;
