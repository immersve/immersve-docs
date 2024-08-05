import { getEntry } from 'astro:content';

/**
  * Link abstraction used by Link.astro component.
  */
export default class PageLink {
  constructor(entry) {
    this.entry = entry;
  }
  static async forDocsContentId(id) {
    const entry = await getEntry('docs', id);
    if (!entry) {
      throw Error(`Linked page not found: ${id}`);
    }
    return new PageLink(entry);
  }
  get href() {
    return '/' + this.entry.slug;
  }
  get title() {
    return this.entry.data.title;
  }
}
