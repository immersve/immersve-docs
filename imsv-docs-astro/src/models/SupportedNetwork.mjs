import path from 'node:path';
import { ContentRegistry } from './ContentRegistry.mjs';
import { SupportedChain } from './SupportedChain.mjs';
import { DeployedFundingProtocol } from './DeployedFundingProtocol.mjs';

export class SupportedNetwork {

  /** @type {Array<DeployedFundingProtocol>} */
  deployedProtocols = [];

  /** @type {Array<NetworkToken>} */
  tokens = [];

  /** @type {Array<FundingType>} */
  fundingTypes = [];

  /**
   * @param {Object} opts
   * @param {string} opts.name
   * @param {string} opts.type
   * @param {string} opts.addressUrlTemplate
   * @param {SupportedChain} opts.chain
   * @param {Array<DeployedFundingProtocol>} opts.deployedProtocols
   * @param {CollectionEntry} opts.content
   */
  constructor({ name, type, addressUrlTemplate, chain, content }) {
    this.name = name;
    this.type = type;
    this.addressUrlTemplate = addressUrlTemplate;
    this.chain = chain;
    this.content = content;
  }

  get title() {
    return this.content.data.title;
  }

  get networkName() {
    return this.content.data.networkName;
  }

  /**
   * @param {DeployedFundingProtocol} deployedProtocol
   */
  addDeployedProtocol(deployedProtocol) {
    this.deployedProtocols.push(deployedProtocol);
  }

  /**
   * @param {NetworkToken} networkToken
   */
  addToken(networkToken) {
    this.tokens.push(networkToken);
  }

  /**
   * @param {FundingType} fundingType
   */
  addFundingType(fundingType) {
    this.fundingTypes.push(fundingType);
  }

  /**
   * @param {string} address
   * @returns {string}
   */
  formatAddressUrl(address) {
    return this.addressUrlTemplate.replace('{address}', address);
  }

  /**
   * @param {Object} opts
   * @param {CollectionEntry} opts.content
   * @param {ContentRegistry} opts.registry
   */
  static fromContent({ content, registry }) {
    const chain = registry.getChain(content.data.chain);
    const type = content.data.netType;
    const name = path.basename(content.id).split('.')[0];
    const addressUrlTemplate = content.data.addressUrlTemplate;
    const network = new SupportedNetwork({ name, type, addressUrlTemplate, chain, content });
    content.data.protocols.forEach(data => {
      DeployedFundingProtocol.create({ network, registry, data });
    });
    return network;
  }

}
