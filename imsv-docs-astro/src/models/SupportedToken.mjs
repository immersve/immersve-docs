import path from 'node:path';
import { NetworkToken } from './NetworkToken.mjs';
import { FundingType } from './FundingType.mjs';

export class SupportedToken {

  /** @type {Array<NetworkToken>} */
  instances = [];

  /** @type {Array<FundingType>} */
  fundingTypes = [];

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

  get docsPath() {
    return '/' + this.content.slug;
  }

  /**
   * @param {NetworkToken} networkToken
   */
  addInstance(networkToken) {
    this.instances.push(networkToken);
  }

  /**
   * @param {string} networkName
   * @returns {NetworkToken}
   */
  getInstance(networkName) {
    const networkToken = this.instances.find(i => i.network.name == networkName);
    if (!networkToken) {
      throw Error(`Token ${this.name} not registered with network: ${networkName}`);
    }
    return networkToken;
  }

  /**
   * @param {FundingType} fundingType
   */
  addFundingType(fundingType) {
    this.fundingTypes.push(fundingType);
  }

  /**
   * @param {CollectionEntry} content
   */
  static fromContent(content) {
    const name = path.basename(content.id).split('.')[0];
    return new SupportedToken({ name, content });
  }

}
