// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

async function createConfig() {
  const mdxMermaid = await import('mdx-mermaid');
  return {
    title: 'Immersve Documentation',
    tagline: 'Just like that',
    url: 'https://docs.immersve.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'immersve', // Usually your GitHub org/user name.
    projectName: 'immersve-docs', // Usually your repo name.
    trailingSlash: false,

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            routeBasePath: '/',
            sidebarPath: require.resolve('./sidebars.js'),
            remarkPlugins: [mdxMermaid.default],
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
          title: 'Immersve Documentation',
          logo: {
            alt: 'Immersve Logo',
            src: 'img/logo-small.svg',
          },
          items: [],
        },
        footer: {
          style: 'dark',
          links: [],
          copyright: `Copyright © ${new Date().getFullYear()} Immersve. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),

    plugins: [
      [
        require.resolve('docusaurus-lunr-search'),
        {
          indexBaseUrl: true,
        },
      ],
    ],
  };
}

module.exports = createConfig;
