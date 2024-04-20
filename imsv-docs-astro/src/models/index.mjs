

class FundingType {

}

class Network {


  createBlockExplorerUrl(address) {
    return '';
  }

}

class NetworkToken {

}

class NetworkFundingProtocol {

  /**
   * @param {Object} opts
   * @param {Network} opts.network
   * @param {FundingProtocol} opts.protocol
   * @param {string} opts.masterAddress
   */
  constructor({ network, protocol, masterAddress }) {
    this.network = network;
    this.protocol = protocol;
    this.masterAddress = masterAddress;
  }

  get masterContractUrl() {
    return this.network.createBlockExplorerUrl(this.masterAddress);
  }
}

class SupportedTokenRegistry {
  /**
   * @returns {SupportedToken}
   */
  static forName(name) {
    return SupportedToken.all[name];
  }

}
