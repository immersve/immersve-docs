/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Types for the Starlight internals the component overrides in
// src/components/starlight/ rely on. Starlight 0.24 declares these in its own
// virtual.d.ts and global.d.ts, which are not exposed to consuming projects.
declare module 'virtual:starlight/user-config' {
  const Config: import('@astrojs/starlight/types').StarlightConfig;
  export default Config;
}

declare var StarlightThemeProvider: {
  updatePickers(theme?: string | undefined): void;
};
