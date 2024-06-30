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
   * @param {string} opts.contractUrlTemplate
   * @param {string} opts.assetUrlTemplate
   * @param {SupportedChain} opts.chain
   * @param {Array<DeployedFundingProtocol>} opts.deployedProtocols
   * @param {CollectionEntry} opts.content
   */
  constructor({ name, type, addressUrlTemplate, contractUrlTemplate, assetUrlTemplate, chain, content }) {
    this.name = name;
    this.type = type;
    this.addressUrlTemplate = addressUrlTemplate;
    this.contractUrlTemplate = contractUrlTemplate;
    this.assetUrlTemplate = assetUrlTemplate;
    this.chain = chain;
    this.content = content;
  }

  static NULL_NETWORK = new SupportedNetwork({
    name: 'none',
    addressUrlTemplate: '',
    chain: SupportedChain.NULL_CHAIN,
    content: {
      data: {
        title: 'No Network',
      },
    },
  });

  get title() {
    return this.content.data.title;
  }

  get networkName() {
    return this.name;
  }

  /**
   * @param {DeployedFundingProtocol} deployedProtocol
   */
  addDeployedProtocol(deployedProtocol) {
    if (this.name == 'none') {
      throw Error('Cannot add protocol to "none" network');
    }
    this.deployedProtocols.push(deployedProtocol);
  }

  /**
   * @param {string} protocolName
   * @returns {DeployedFundingProtocol}
   */
  getDeployedProtocol(protocolName) {
    if (this.name == 'none') {
      return undefined;
    }
    const deployedInstance = this.deployedProtocols.find(i => i.protocol.name == protocolName);
    if (!deployedInstance) {
      throw Error(`Network ${this.name} does not have protocol registered: ${protocolName}`);
    }
    return deployedInstance;
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
   * @param {string} address
   * @returns {string}
   */
  formatContractUrl(address) {
    const template = this.contractUrlTemplate ?? this.addressUrlTemplate;
    return template.replace('{address}', address);
  }

  /**
   * @param {string} address
   * @returns {string}
   */
  formatAssetUrl(address) {
    const template = this.assetUrlTemplate ?? this.addressUrlTemplate;
    return template.replace('{address}', address);
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
    const contractUrlTemplate = content.data.contractUrlTemplate;
    const assetUrlTemplate = content.data.assetUrlTemplate;
    const network = new SupportedNetwork({ name, type, addressUrlTemplate, contractUrlTemplate, assetUrlTemplate, chain, content });
    content.data.protocols.forEach(data => {
      DeployedFundingProtocol.create({ network, registry, data });
    });
    return network;
  }

}
