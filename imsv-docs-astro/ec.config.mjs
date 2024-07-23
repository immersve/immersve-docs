import { defineEcConfig } from 'astro-expressive-code';

export default defineEcConfig({
  themes: ['material-theme-palenight', 'material-theme-ocean'],
  themeCssSelector: () => '[data-theme=dark]',
  styleOverrides: {
    borderRadius: '0.5rem',
  },
});
