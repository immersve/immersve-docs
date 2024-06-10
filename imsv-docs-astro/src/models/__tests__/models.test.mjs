
import { describe, expect } from 'vitest';
import { getEntry } from 'astro:content';
import { FundingProtocol } from '../FundingProtocol.mjs';
import { SupportedToken } from '../SupportedToken.mjs';
import { SupportedChain } from '../SupportedChain.mjs';
import { SupportedNetwork } from '../SupportedNetwork.mjs';
import { DeployedFundingProtocol } from '../DeployedFundingProtocol.mjs';
import { ContentRegistry } from '../ContentRegistry.mjs';
import { NetworkToken } from '../NetworkToken.mjs';
import { FundingType } from '../FundingType.mjs';


describe('models', () => {

  describe('SupportedToken', () => {

    test('fromContent', async () => {
      const usdcContent = await getEntry('docs', 'guides/usdc');
      const supportedToken = SupportedToken.fromContent(usdcContent);
      expect(supportedToken.name).toEqual('usdc');
      expect(supportedToken.content.data.title).toEqual('USDC');
      expect(supportedToken.title).toEqual('USDC');
    });
  });

  describe('FundingProtocol', () => {

    test('fromContent', async () => {
      const universalEvmContent = await getEntry('docs', 'guides/universal-evm-funding-protocol');
      const protocol = FundingProtocol.fromContent(universalEvmContent);
      expect(protocol.name).toEqual('universal-evm');
      expect(protocol.content.data.title).toEqual('Universal EVM Funding Protocol');
      expect(protocol.title).toEqual('Universal EVM Funding Protocol');
    });

  });

  describe('SupportedChain', () => {

    test('fromContent', async () => {
      const polygonContent = await getEntry('docs', 'guides/polygon');
      const chain = SupportedChain.fromContent(polygonContent);
      expect(chain.name).toEqual('polygon');
      expect(chain.content.data.title).toEqual('Polygon');
      expect(chain.title).toEqual('Polygon');
    });

  });

  describe('SupportedNetwork', () => {

    test('fromContent', async () => {
      const registry = await ContentRegistry.create();
      const content = await getEntry('networks', 'polygon-amoy');
      const network = SupportedNetwork.fromContent({ registry, content });
      expect(network.name).toEqual('polygon-amoy');
      expect(network.content.data.title).toEqual('Polygon Amoy');
      expect(network.title).toEqual('Polygon Amoy');
      expect(network.chain).toEqual(registry.getChain('polygon'));
      expect(network.type).toEqual('testnet');
    });

  });

  describe('DeployedFundingProtocol', () => {

    test('create', async () => {
      const registry = await ContentRegistry.create();
      const network = registry.getNetwork('polygon-amoy');
      const data = {
        name: 'universal-evm',
        masterContractAddress: '0xe50FF3C352C',
      };
      const deployedProtocol = DeployedFundingProtocol.create({ network, registry, data });
      expect(deployedProtocol.protocol).toEqual(registry.getFundingProtocol('universal-evm'));
      expect(deployedProtocol.network).toEqual(network);
      expect(deployedProtocol.address).toEqual('0xe50FF3C352C');
      expect(deployedProtocol.url).toEqual('https://amoy.polygonscan.com/address/0xe50FF3C352C');
    });

  });

  describe('NetworkToken', () => {

    describe('fromContent', async () => {

      test('valid content', async () => {
        const registry = await ContentRegistry.create();
        const content = await getEntry('network-tokens', 'usdc-ethereum-sepolia');
        const networkToken = NetworkToken.fromContent({ registry, content });
        expect(networkToken.network).toEqual(registry.getNetwork('ethereum-sepolia'));
        expect(networkToken.token).toEqual(registry.getToken('usdc'));
        expect(networkToken.address).toEqual('0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238');
        expect(networkToken.url).toEqual('https://sepolia.etherscan.io/address/0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238');
        expect(networkToken.faucetTitle).toEqual('Circle USDC Faucet');
        expect(networkToken.faucetUrl).toEqual('https://faucet.circle.com/');
      });

      test('fails when faucet configured on mainnet', async () => {
        const registry = await ContentRegistry.create();
        const content = {
          id: 'usdc-polygon-mainnet',
          data: {
            address: '0x1234',
            faucet: 'http://faucet',
            faucetTitle: 'USDC Faucet',
          }
        };
        expect(() => NetworkToken.fromContent({ registry, content })).toThrow('Faucet should not be defined on mainnet asset');
      });

      test('fails when faucet url missing on testnet', async () => {
        const registry = await ContentRegistry.create();
        const content = {
          id: 'usdc-algorand-testnet',
          data: {
            address: 'ADDR1234',
            faucetTitle: 'USDC Faucet',
          }
        };
        expect(() => NetworkToken.fromContent({ registry, content })).toThrow('Faucet url must be defined on testnet asset');
      });

      test('fails when faucet title missing on testnet', async () => {
        const registry = await ContentRegistry.create();
        const content = {
          id: 'usdc-algorand-testnet',
          data: {
            address: 'ADDR1234',
            faucet: 'http://faucet',
          }
        };
        expect(() => NetworkToken.fromContent({ registry, content })).toThrow('Faucet title must be defined on testnet asset');
      });

    });

  });

  describe('FundingType', () => {

    describe('fromContent', () => {

      test('should parse universal-evm funding type', async () => {
        const registry = await ContentRegistry.create();
        const content = await getEntry('funding-types', 'ethereum-sepolia-usdc-universal-evm-test');
        const fundingType = FundingType.fromContent({ registry, content });
        expect(fundingType.network).toEqual(registry.getNetwork('ethereum-sepolia'));
        expect(fundingType.token).toEqual(registry.getToken('usdc'));
        expect(fundingType.protocol.name).toEqual('universal-evm');
        expect(fundingType.deployedProtocol.address).toEqual('0xe50FF3C352C0176c12c0a130dCa7655eC518fc40');
      });

      test('should allow arbitrary file name', async () => {
        const registry = await ContentRegistry.create();
        const content = {
          id: 'algorand-usdc-flexi-live.md',
          data: {
            protocol: 'universal-evm',
            network: 'polygon-mainnet',
            token: 'usdc',
          }
        };
        const fundingType = FundingType.fromContent({ registry, content });
        expect(fundingType.token).toEqual(registry.getToken('usdc'));
      });

    });

  });

  describe('ContentRegistry', () => {

    describe('create', async () => {

      test('tokens are registered', async () => {
        const registry = await ContentRegistry.create();
        const token = registry.getToken('usdc');
        expect(token.title).toEqual('USDC');
      });

      test('funding protocols are registered', async () => {
        const registry = await ContentRegistry.create();
        const protocol = registry.getFundingProtocol('universal-evm');
        expect(protocol.title).toEqual('Universal EVM Funding Protocol');
      });

      test('chains are registered', async () => {
        const registry = await ContentRegistry.create();
        const chain = registry.getChain('polygon');
        expect(chain.title).toEqual('Polygon');
      });

      test('networks are registered', async () => {
        const registry = await ContentRegistry.create();
        const network = registry.getNetwork('polygon-amoy');
        expect(network.title).toEqual('Polygon Amoy');
      });

      test('deployed funding protocols are registered by network and protocol', async () => {
        const registry = await ContentRegistry.create();
        const deployedProtocol = registry.getDeployedFundingProtocol({
          networkName: 'polygon-amoy',
          protocolName: 'universal-evm',
        });
        expect(deployedProtocol.address).toEqual('0xe50FF3C352C0176c12c0a130dCa7655eC518fc40');
      });

      test('deployed funding protocols are linked from networks', async () => {
        const registry = await ContentRegistry.create();
        const network = registry.getNetwork('polygon-amoy');
        expect(network.deployedProtocols).toHaveLength(1);
        const deployedProtocol = network.deployedProtocols[0];
        expect(deployedProtocol.address).toEqual('0xe50FF3C352C0176c12c0a130dCa7655eC518fc40');
      });

      test('deployed funding protocols are linked from protocols', async () => {
        const registry = await ContentRegistry.create();
        const deployedProtocol = registry.getNetwork('polygon-amoy').deployedProtocols[0];
        const protocol = registry.getFundingProtocol('universal-evm');
        expect(protocol.deployedInstances).toContain(deployedProtocol);
      });

      test('network tokens are registered by network and token', async () => {
        const registry = await ContentRegistry.create();
        const networkToken = registry.getNetworkToken({
          networkName: 'polygon-amoy',
          tokenName: 'usdc',
        });
        expect(networkToken.address).toEqual('0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582');
      });

      test('network tokens are linked from networks', async () => {
        const registry = await ContentRegistry.create();
        const network = registry.getNetwork('polygon-amoy');
        expect(network.tokens).toHaveLength(1);
        const networkToken = network.tokens[0];
        expect(networkToken.address).toEqual('0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582');
      });

      test('network tokens are linked from tokens', async () => {
        const registry = await ContentRegistry.create();
        const token = registry.getToken('usdc');
        const amoyUsdc = registry.getNetwork('polygon-amoy').tokens[0];
        expect(token.instances).toContain(amoyUsdc);
      });

      test('funding types are registered by name', async () => {
        const registry = await ContentRegistry.create();
        const fundingType = registry.getFundingType('ethereum-sepolia-usdc-universal-evm-test');
        expect(fundingType.name).toEqual('ethereum-sepolia-usdc-universal-evm-test');
      });

      test('funding types are linked from networks', async () => {
        const registry = await ContentRegistry.create();
        const network = registry.getNetwork('ethereum-sepolia');
        const fundingType = registry.getFundingType('ethereum-sepolia-usdc-universal-evm-test');
        expect(network.fundingTypes).toContain(fundingType);
      });

      test('funding types are linked from tokens', async () => {
        const registry = await ContentRegistry.create();
        const token = registry.getToken('usdc');
        const fundingType = registry.getFundingType('ethereum-sepolia-usdc-universal-evm-test');
        expect(token.fundingTypes).toContain(fundingType);
      });

    });

    describe('findDeployedFundingProtocols', async () => {

      test('deployed instances are found by networkType', async () => {
        const registry = await ContentRegistry.create();
        const universalEvmSepolia = registry.getDeployedFundingProtocol({
          networkName: 'ethereum-sepolia',
          protocolName: 'universal-evm',
        });
        const deployedProtocols = registry.findDeployedFundingProtocols({
          networkType: 'testnet',
        });
        expect(deployedProtocols).toContain(universalEvmSepolia);
      });

      test('deployed instances are found by protocolName and networkType', async () => {
        const registry = await ContentRegistry.create();
        const universalEvmSepolia = registry.getDeployedFundingProtocol({
          networkName: 'ethereum-sepolia',
          protocolName: 'universal-evm',
        });
        const deployedProtocols = registry.findDeployedFundingProtocols({
          protocolName: 'universal-evm',
          networkType: 'testnet',
        });
        expect(deployedProtocols).toContain(universalEvmSepolia);
      });

      test('deployed instances are found by protocolName only', async () => {
        const registry = await ContentRegistry.create();
        const universalEvmSepolia = registry.getDeployedFundingProtocol({
          networkName: 'ethereum-sepolia',
          protocolName: 'universal-evm',
        });
        const deployedProtocols = registry.findDeployedFundingProtocols({
          protocolName: 'universal-evm',
        });
        expect(deployedProtocols).toContain(universalEvmSepolia);
      });

      test('deployed instances are found by chainName and networkType', async () => {
        const registry = await ContentRegistry.create();
        const universalEvmSepolia = registry.getDeployedFundingProtocol({
          networkName: 'ethereum-sepolia',
          protocolName: 'universal-evm',
        });
        const universalEvmAmoy = registry.getDeployedFundingProtocol({
          networkName: 'polygon-amoy',
          protocolName: 'universal-evm',
        });
        const deployedProtocols = registry.findDeployedFundingProtocols({
          chainName: 'ethereum',
          networkType: 'testnet',
        });
        expect(deployedProtocols).toContain(universalEvmSepolia);
        expect(deployedProtocols).not.toContain(universalEvmAmoy);
      });

    });
  });

});
