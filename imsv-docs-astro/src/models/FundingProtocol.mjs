import path from 'node:path';
import { DeployedFundingProtocol } from './DeployedFundingProtocol.mjs';

export class FundingProtocol {

  /** @type {Array<DeployedFundingProtocol>} */
  deployedInstances = [];

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

  get description() {
    return this.content.data.description;
  }

  get docsPath() {
    return '/' + this.content.slug;
  }

  get sourceUrl() {
    return this.content.data.fundingProtocol.source;
  }

  /**
   * @param {DeployedFundingProtocol} deployedInstance
   */
  addDeployedInstance(deployedInstance) {
    this.deployedInstances.push(deployedInstance);
  }

  /**
   * @param {string} networkName
   * @returns {DeployedFundingProtocol}
   */
  getDeployedInstance(networkName) {
    const deployedInstance = this.deployedInstances.find(i => i.network.name == networkName);
    if (!deployedInstance) {
      throw Error(`Funding protocol ${this.name} not registered with network: ${networkName}`);
    }
    return deployedInstance;
  }

  /**
   * @param {CollectionEntry} content
   */
  static fromContent(content) {
    const name = path.basename(content.id).split('.')[0].replace('-funding-protocol', '');
    return new FundingProtocol({ name, content });
  }

}
