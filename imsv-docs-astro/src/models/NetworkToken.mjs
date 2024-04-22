import path from 'node:path';
import { ContentRegistry } from './ContentRegistry.mjs';
import { SupportedToken } from './SupportedToken.mjs';
import { SupportedNetwork } from './SupportedNetwork.mjs';

export class NetworkToken {

  /**
   * @param {Object} opts
   * @param {SupportedToken} opts.token
   * @param {SupportedNetwork} opts.network
   * @param {string} opts.address
   * @param {string} opts.faucetUrl
   * @param {string} opts.faucetTitle
   */
  constructor({ token, network, address, faucetUrl, faucetTitle }) {
    this.token = token;
    this.network = network;
    this.address = address;
    this.faucetUrl = faucetUrl;
    this.faucetTitle = faucetTitle;
  }

  get url() {
    return this.network.formatAddressUrl(this.address);
  }

  get title() {
    return this.content.data.title;
  }

  /**
   * @param {Object} opts
   * @param {CollectionEntry} opts.content
   * @param {ContentRegistry} opts.registry
   */
  static fromContent({ content, registry }) {
    const tokenName = content.id.split('-')[0];
    const networkName = content.id.split('.')[0].replace(/^[^-]*-/, '');
    const network = registry.getNetwork(networkName);
    const token = registry.getToken(tokenName);
    const networkToken = new NetworkToken({
      network,
      token,
      address: content.data.address,
      faucetUrl: content.data.faucet,
      faucetTitle: content.data.faucetTitle,
    });
    network.addToken(networkToken);
    token.addInstance(networkToken);
    return networkToken;
  }

}
