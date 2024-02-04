import { URL } from 'node:url';
import { glob } from 'glob';
import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

const tagsDir = new URL('markdoc', import.meta.url).pathname;
const tagConfigs = await Promise.all(glob
  .sync('*.tag.mjs', { cwd: tagsDir })
  .map(f => f.replace('.tag.mjs', ''))
  .map(async tagName => ({
    tagName,
    tag: (await import(`./markdoc/${tagName}.tag.mjs`)).default,
  })));

const tags = {};
tagConfigs.forEach(config => {
  tags[config.tagName] = config.tag;
})

export default defineMarkdocConfig({ tags });
