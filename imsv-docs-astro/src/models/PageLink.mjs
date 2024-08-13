import {getEntry} from 'astro:content';

/**
 * Link abstraction used by Link.astro component.
 */
export default class PageLink {
  constructor(entry, anchor) {
    this.entry = entry;
    this.anchor = anchor;
  }

  static async forDocsContentId(id, anchor) {
    const entry = await getEntry('docs', id);
    if (!entry) {
      throw Error(`Linked page not found: ${id}`);
    }
    return new PageLink(entry, anchor);
  }

  get href() {
    return `/${this.entry.slug}/${this.anchor ? '#' + this.anchor.toLowerCase() : ''}`;
  }

  get title() {
    return this.entry.data.title;
  }
}
