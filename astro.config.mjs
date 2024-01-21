import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Immersve Docs',
      social: {
        github: 'https://github.com/immersve/immersve-docs'
      },
      customCss: [
        './src/styles/tailwind.css',
      ],
      components: {
        MarkdownContent: './src/components/MarkdownContent.astro',
      },
    }), 
    tailwind({
      applyBaseStyles: false,
    }),
  ]
});
