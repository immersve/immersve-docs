const openApiSidebar = require('./docs/sidebar');
const webhookSidebar = require('./docs/webhook-topics/sidebar');

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  primarySidebar: [
    {
      type: 'category',
      label: 'API Endpoints',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: openApiSidebar.filter(
        // exclude auto-generated "introduction"
        (item) => item.id != 'immersve-api'
      ),
    },
    {
      type: 'category',
      label: 'Webhook Topics',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: webhookSidebar.filter(
        // exclude auto-generated "introduction"
        (item) => item.id != 'webhook-topics/immersve-webhooks'
      ),
    }
  ],
};

module.exports = sidebars;
