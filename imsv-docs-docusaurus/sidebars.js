const openApiSidebar = require('./docs/sidebar');
const webhookSidebar = require('./docs/webhook-topics/sidebar');

function getSidebarItems(sidebar, excludeId) {
  const items = Array.isArray(sidebar)
    ? sidebar
    : sidebar.default

  // exclude auto-generated "introduction"
  return items.filter((item) => item.id !== excludeId);
}

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
        items: getSidebarItems(openApiSidebar, 'immersve-api')
      },
      {
        type: 'category',
        label: 'Webhook Topics',
        link: {
          type: 'generated-index',
        },
        collapsed: false,
        items: getSidebarItems(webhookSidebar, 'webhook-topics/immersve-webhooks'),
      },
  ],
};

module.exports = sidebars;
