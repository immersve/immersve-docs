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
    return this.network.formatAssetUrl(this.address);
  }

  validate() {
    if (this.network.type == 'mainnet') {
      if (this.faucetUrl || this.faucetTitle) {
        throw Error('Faucet should not be defined on mainnet asset');
      }
    } else {
      if (!this.faucetUrl) {
        throw Error('Faucet url must be defined on testnet asset');
      }
      if(!this.faucetTitle) {
        throw Error('Faucet title must be defined on testnet asset');
      }
    }
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
    networkToken.validate();
    network.addToken(networkToken);
    token.addInstance(networkToken);
    return networkToken;
  }

}
