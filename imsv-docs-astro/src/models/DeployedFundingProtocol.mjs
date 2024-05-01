import { ContentRegistry } from './ContentRegistry.mjs';
import { FundingProtocol } from './FundingProtocol.mjs';
import { SupportedNetwork } from './SupportedNetwork.mjs';

export class DeployedFundingProtocol {

  /**
   * @param {Object} opts
   * @param {SupportedNetwork} opts.network
   * @param {FundingProtocol} opts.protocol
   */
  constructor({ network, protocol, address }) {
    this.network = network;
    this.protocol = protocol;
    this.address = address;
  }

  get url() {
    return this.network.formatAddressUrl(this.address);
  }

  /**
   * @param {Object} opts
   * @param {SupportedNetwork} opts.network
   * @param {ContentRegistry} opts.registry
   * @param {Object} opts.data
   */
  static create({ network, registry, data }) {
    const protocol = registry.getFundingProtocol(data.name);
    const deployedInstance = new DeployedFundingProtocol({
      network,
      protocol,
      address: data.masterContractAddress,
    });
    network.chain.addSupportedProtocol(protocol);
    network.addDeployedProtocol(deployedInstance);
    protocol.addDeployedInstance(deployedInstance);
    return deployedInstance;
  }

}
