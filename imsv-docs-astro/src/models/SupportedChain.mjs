import path from 'node:path';
import { FundingProtocol } from './FundingProtocol.mjs';
import SupportedChainsTable from '@components/registry-views/chains/SupportedChainsTable.astro';

export class SupportedChain {

  /** @type {Set<FundingProtocol>} */
  supportedProtocols = new Set();

  /**
   * @param {Object} opts
   * @param {string} opts.name
   * @param {CollectionEntry} opts.content
   */
  constructor({ name, content }) {
    this.name = name;
    this.content = content;
  }

  static NULL_CHAIN = new SupportedChain({
    name: 'none',
    content: {
      data: {
        title: 'None',
      }
    }
  });

  get title() {
    return this.content.data.title;
  }

  get docsPath() {
    return '/' + this.content.slug;
  }

  addSupportedProtocol(protocol) {
    this.supportedProtocols.add(protocol);
  }

  /**
   * @param {CollectionEntry} content
   */
  static fromContent(content) {
    const name = path.basename(content.id).split('.')[0];
    return new SupportedChain({ name, content });
  }

}
