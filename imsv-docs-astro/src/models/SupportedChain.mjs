import path from 'node:path';

export class SupportedChain {

  /**
   * @param {Object} opts
   * @param {string} opts.name
   * @param {CollectionEntry} opts.content
   */
  constructor({ name, content }) {
    this.name = name;
    this.content = content;
  }

  get title() {
    return this.content.data.title;
  }

  /**
   * @param {CollectionEntry} content
   */
  static fromContent(content) {
    const name = path.basename(content.id).split('.')[0];
    return new SupportedChain({ name, content });
  }

}
