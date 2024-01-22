import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
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
  },
});
