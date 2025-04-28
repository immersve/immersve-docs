// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

async function createConfig() {
  return {
    title: 'Immersve Documentation',
    tagline: 'Immersve Documentation',
    url: 'https://docs.immersve.com',
    baseUrl: '/api-reference',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.svg',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'immersve', // Usually your GitHub org/user name.
    projectName: 'immersve-docs', // Usually your repo name.
    trailingSlash: true,

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            routeBasePath: '/',
            sidebarPath: require.resolve('./sidebars.js'),
            // docLayoutComponent: '@theme/DocPage',
            docItemComponent: '@theme/ApiItem', // add @theme/ApiItem here
          },
          blog: false,
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          logo: {
            alt: 'Immersve Logo',
            src: 'img/logo-light.png',
            srcDark: 'img/logo-dark.png',
            href: 'https://docs.immersve.com',
            target: '_self',
            className: 'navbar-logo',
          },
          items: [
            {
              label: 'APIs',
              href: '/',
              position: 'right',
            },
            {
              label: 'Guides',
              position: 'right',
              href: '//docs.immersve.com/',
              target: '_self',
            },
            {
              label: 'Sales',
              href: '//www.immersve.com/',
              position: 'right',
              target: '_self',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [],
          copyright: `Copyright © ${new Date().getFullYear()} Immersve. All rights reserved. Built with Docusaurus.`,
        },
        prism: {
          additionalLanguages: [
            'bash',
            'ruby',
            'csharp',
            'php',
            'java',
            'powershell',
            'json',
          ],
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),

    themes: ['docusaurus-theme-openapi-docs'],

    plugins: [
      [
        require.resolve('docusaurus-lunr-search'),
        {
          indexBaseUrl: true,
        },
      ],
      [
        require.resolve('docusaurus-plugin-openapi-docs'),
        {
          id: 'openapi',
          docsPluginId: 'classic', // e.g. "classic" or the plugin-content-docs id
          config: {
            immersve: {
              specPath: 'openapi/immersve.yaml', // path or URL to the OpenAPI spec
              outputDir: 'docs', // output directory for generated *.mdx and sidebar.js files
              sidebarOptions: {
                groupPathsBy: 'tag', // generate a sidebar.js slice that groups operations by tag
                categoryLinkSource: 'tag',
              },
            },
          },
        },
      ],
    ],
  };
}

module.exports = createConfig;
