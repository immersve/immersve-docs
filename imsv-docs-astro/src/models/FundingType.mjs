import path from 'node:path';
import { ContentRegistry } from './ContentRegistry.mjs';
import { DeployedFundingProtocol } from './DeployedFundingProtocol.mjs';
import { NetworkToken } from './NetworkToken.mjs';

export class FundingType {

  /**
   * @param {Object} opts
   * @param {string} opts.name
   * @param {NetworkToken} opts.networkToken
   * @param {DeployedFundingProtocol} opts.deployedProtocol
   */
  constructor({ name, networkToken, deployedProtocol }) {
    this.name = name;
    this.networkToken = networkToken;
    this.deployedProtocol = deployedProtocol;
  }

  get network() {
    return this.networkToken.network;
  }

  get token() {
    return this.networkToken.token;
  }

  get protocol() {
    return this.deployedProtocol.protocol;
  }

  /**
   * @param {Object} opts
   * @param {CollectionEntry} opts.content
   * @param {ContentRegistry} opts.registry
   */
  static fromContent({ registry, content }) {
    const name = path.basename(content.id).split('.')[0];
    const networkName = content.data.network;
    const protocolName = content.data.protocol;
    const tokenName = name
      .replace(/(-test|-live)$/, '')
      .replace(protocolName, '')
      .split('-')
      .reverse()[1];
    const deployedProtocol = registry.getDeployedFundingProtocol({ networkName, protocolName });
    const networkToken = registry.getNetworkToken({ networkName, tokenName });
    const fundingType = new FundingType({ name, networkToken, deployedProtocol });
    networkToken.network.addFundingType(fundingType);
    networkToken.token.addFundingType(fundingType);
    return fundingType;
  }

}