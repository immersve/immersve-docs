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

  /**
   * @param {DeployedFundingProtocol} deployedInstance
   */
  addDeployedInstance(deployedInstance) {
    this.deployedInstances.push(deployedInstance);
  }

  /**
   * @param {CollectionEntry} content
   */
  static fromContent(content) {
    const name = path.basename(content.id).split('.')[0].replace('-funding-protocol', '');
    return new FundingProtocol({ name, content });
  }

}
