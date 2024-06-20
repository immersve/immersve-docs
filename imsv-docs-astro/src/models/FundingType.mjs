import path from 'node:path';
import { ContentRegistry } from './ContentRegistry.mjs';
import { DeployedFundingProtocol } from './DeployedFundingProtocol.mjs';
import { NetworkToken } from './NetworkToken.mjs';
import { SupportedNetwork } from './SupportedNetwork.mjs';

export class FundingType {

  /**
   * @param {Object} opts
   * @param {string} opts.name
   * @param {FundingProtocol} opts.protocol
   * @param {SupportedToken} opts.token
   * @param {SupportedNetwork} opts.network
   */
  constructor({ name, protocol, token, network  }) {
    this.name = name;
    this.protocol = protocol;
    this.token = token;
    this.network = network;
  }

  /**
   * @param {Object} opts
   * @param {string} opts.name
   * @param {FundingProtocol} opts.protocol
   * @param {SupportedToken} opts.token
   * @param {SupportedNetwork} opts.network
   * @param {ContentRegistry} opts.registry
   */
  static createOnchainFundingType({ name, protocol, network, token, registry }) {
    const networkName = network.name;
    const tokenName = token.name;
    const deployedProtocol = network.getDeployedProtocol(protocol.name);
    const networkToken = registry.getNetworkToken({ networkName, tokenName });
    const fundingType = new FundingType({
      name,
      network: networkToken.network,
      token: networkToken.token,
      protocol: deployedProtocol.protocol,
    });
    networkToken.network.addFundingType(fundingType);
    networkToken.token.addFundingType(fundingType);
    return fundingType;
  }

  /**
   * @param {Object} opts
   * @param {string} opts.name
   * @param {FundingProtocol} opts.protocol
   * @param {SupportedToken} opts.token
   */
  static createOffchainFundingType({ name, protocol, token }) {
    const network = SupportedNetwork.NULL_NETWORK;
    network.chain.addSupportedProtocol(protocol);
    return new FundingType({
      name,
      protocol,
      token,
      network,
    });
  }

  /**
   * @param {Object} opts
   * @param {CollectionEntry} opts.content
   * @param {ContentRegistry} opts.registry
   * @returns {FundingType}
   */
  static fromContent({ registry, content }) {
    const name = path.basename(content.id).split('.')[0];
    const protocol = registry.getFundingProtocol(content.data.protocol);
    const token = registry.getToken(content.data.token);
    const networkName = content.data.network;
    if (!networkName) {
      return FundingType.createOffchainFundingType({ name, protocol, token });
    }
    const network = registry.getNetwork(networkName);
    return FundingType.createOnchainFundingType({ name, network, protocol, token, registry });
  }

}
