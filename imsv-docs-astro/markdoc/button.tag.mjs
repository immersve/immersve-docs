import { component } from '@astrojs/markdoc/config';
/** @type {import('@markdoc/markdoc').Schema} */
export default {
  render: component('./src/components/Button.astro'),
  attributes: {
    href: { type: String },
    variant: { type: String, matches: [ 'primary', 'secondary', 'filled', 'outline', 'text' ] },
    arrow: { type: String, matches: [ 'left', 'right'] },
    class: { type: String },
  },
};
