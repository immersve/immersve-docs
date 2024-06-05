import { getCollection } from 'astro:content';

import { SupportedToken } from './SupportedToken.mjs';
import { FundingProtocol } from './FundingProtocol.mjs';
import { SupportedChain } from './SupportedChain.mjs';
import { SupportedNetwork } from './SupportedNetwork.mjs';
import { NetworkToken } from './NetworkToken.mjs';
import { FundingType } from './FundingType.mjs';
import { DeployedFundingProtocol } from './DeployedFundingProtocol.mjs';

/**
 * The content registry exposes a rich interconnected domain model of all
 * content relating to funding protocols.
 *
 * Atomic Resources:
 *
 * - Token
 * - Protocol
 * - Chain
 *
 * Complex Resources:
 *
 * - Network         --depends-on-->  Chain, NetworkProtocol
 * - NetworkProtocol --depends-on-->  Network, Protocol
 * - NetworkToken    --depends-on-->  Network, Token
 * - FundingType     --depends-on-->  NetworkToken, NetworkProtocol
 */
export class ContentRegistry {

  /** @type {Object<string,FundingProtocol>} */
  #protocolsByName = {};

  /** @type {Object<string,SupportedToken>} */
  #tokensByName = {};

  /** @type {Object<string,SupportedChain>} */
  #chainsByName = {};

  /** @type {Object<string,SupportedNetwork>} */
  #networksByName = {};

  /** @type {Object<string,FundingType>} */
  #fundingTypesByName = {};

  /**
   * @param {CollectionEntry} content
   */
  registerToken(content) {
    const token = SupportedToken.fromContent(content);
    this.#tokensByName[token.name] = token;
  }

  getToken(name) {
    if (!this.#tokensByName[name]) {
      throw Error(`Unregistered token: ${name}`);
    }
    return this.#tokensByName[name];
  }

  allTokens() {
    return Object.values(this.#tokensByName);
  }

  /**
   * @param {CollectionEntry} content
   */
  registerFundingProtocol(content) {
    const protocol = FundingProtocol.fromContent(content);
    this.#protocolsByName[protocol.name] = protocol;
  }

  getFundingProtocol(name) {
    if (!this.#protocolsByName[name]) {
      throw Error(`Unregistered protocol: ${name}`);
    }
    return this.#protocolsByName[name];
  }

  allFundingProtocols() {
    return Object.values(this.#protocolsByName);
  }


  /**
 * Retrieves all networks associated with a specific chain name.
 * @param {string} chainName The name of the chain.
 * @returns {Array<SupportedNetwork>} A list of supported networks for the specified chain.
 */
allNetworksByChainName(chainName) {
  return Object.values(this.#networksByName).filter(network => network.chain.name === chainName);
}

  /**
   * @param {Object} opts
   * @param {string} opts.networkName
   * @param {string} opts.protocolName
   * @returns {DeployedFundingProtocol}
   * */
  getDeployedFundingProtocol({ networkName, protocolName }) {
    return this.getFundingProtocol(protocolName).getDeployedInstance(networkName);
  }

  /**
   * @param {Object} opts
   * @param {string} [opts.chainName]
   * @param {string} [opts.protocolName]
   * @param {string} [opts.networkType]
   * @returns {Array<DeployedFundingProtocol>}
   * */
  findDeployedFundingProtocols({ chainName, networkType, protocolName }) {
    return Object.values(this.#protocolsByName)
      .flatMap(p => p.deployedInstances)
      .filter(i => !chainName || i.network.chain.name == chainName)
      .filter(i => !protocolName || i.protocol.name == protocolName)
      .filter(i => i.network.type == networkType);
  }

  /**
   * @param {CollectionEntry} content
   */
  registerChain(content) {
    const chain = SupportedChain.fromContent(content);
    this.#chainsByName[chain.name] = chain;
  }

  getChain(name) {
    if (!this.#chainsByName[name]) {
      throw Error(`Unregistered chain: ${name}`);
    }
    return this.#chainsByName[name];
  }

  /**
   * @returns {Array<SupportedChain>}
   */
  allChains() {
    return Object.values(this.#chainsByName);
  }

  /**
   * @param {CollectionEntry} content
   */
  registerNetwork(content) {
    const network = SupportedNetwork.fromContent({ registry: this, content });
    this.#networksByName[network.name] = network;
  }

  getNetwork(name) {
    if (!this.#networksByName[name]) {
      throw Error(`Unregistered network: ${name}`);
    }
    return this.#networksByName[name];
  }

  /**
   * @param {CollectionEntry} content
   */
  registerNetworkToken(content) {
    NetworkToken.fromContent({ registry: this, content });
  }

  /**
   * @param {Object} opts
   * @param {string} opts.tokenName
   * @param {string} opts.networkName
   * @returns {NetworkToken}
   */
  getNetworkToken({ tokenName, networkName }) {
    return this.getToken(tokenName).getInstance(networkName);
  }

  allNetworkTokens() {
    return this.allTokens().flatMap(token => token.instances);
  }

  /**
   * @param {CollectionEntry} content
   */
  registerFundingType(content) {
    const fundingType = FundingType.fromContent({ registry: this, content });
    this.#fundingTypesByName[fundingType.name] = fundingType;
  }

  allFundingTypes() {
    return Object.values(this.#fundingTypesByName);
  }

  getFundingType(name) {
    if (!this.#fundingTypesByName[name]) {
      throw Error(`Unregistered funding type: ${name}`);
    }
    return this.#fundingTypesByName[name];
  }

  static async create() {
    const registry = new ContentRegistry();
    const allDocs = await getCollection('docs');
    allDocs
      .filter(content => content.data.supportedToken)
      .forEach(content => registry.registerToken(content));
    allDocs
      .filter(content => content.data.fundingProtocol)
      .forEach(content => registry.registerFundingProtocol(content));
    allDocs
      .filter(content => content.data.supportedChain)
      .forEach(content => registry.registerChain(content));
    (await getCollection('networks'))
      .forEach(content => registry.registerNetwork(content));
    (await getCollection('network-tokens'))
      .forEach(content => registry.registerNetworkToken(content));
    (await getCollection('funding-types'))
      .forEach(content => registry.registerFundingType(content));
    return registry;
  }
}
