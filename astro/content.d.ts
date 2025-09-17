declare module 'astro:content' {
	interface Render {
		'.mdoc': Promise<{
			Content(props: Record<string, any>): import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"guides/authentication/algorand-login.mdoc": {
	id: "guides/authentication/algorand-login.mdoc";
  slug: "guides/algorand-login";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/authentication/authentication.mdoc": {
	id: "guides/authentication/authentication.mdoc";
  slug: "guides/authentication";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/authentication/siwe-login.mdoc": {
	id: "guides/authentication/siwe-login.mdoc";
  slug: "guides/siwe-login";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/authentication/xrpl-login.mdoc": {
	id: "guides/authentication/xrpl-login.mdoc";
  slug: "guides/xrpl-login";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/card-issuing-apps/add-card-to-xpay-wallet.mdoc": {
	id: "guides/card-issuing-apps/add-card-to-xpay-wallet.mdoc";
  slug: "guides/add-card-to-xpay-wallet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/card-issuing-apps/cardholder-support.mdoc": {
	id: "guides/card-issuing-apps/cardholder-support.mdoc";
  slug: "guides/card-issuing-apps/cardholder-support";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/card-issuing-apps/creating-a-funding-channel.mdoc": {
	id: "guides/card-issuing-apps/creating-a-funding-channel.mdoc";
  slug: "guides/creating-a-funding-channel";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/card-issuing-apps/custodial-card-issuing-integration.mdoc": {
	id: "guides/card-issuing-apps/custodial-card-issuing-integration.mdoc";
  slug: "guides/custodial-card-issuing-integration";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/card-issuing-apps/custodial-on-chain-card-issuing-integration.mdoc": {
	id: "guides/card-issuing-apps/custodial-on-chain-card-issuing-integration.mdoc";
  slug: "guides/custodial-on-chain-card-issuing-integration";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/card-issuing-apps/fetching-secure-card-information.mdoc": {
	id: "guides/card-issuing-apps/fetching-secure-card-information.mdoc";
  slug: "guides/fetching-secure-card-information";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/card-issuing-apps/issue-a-virtual-card.mdoc": {
	id: "guides/card-issuing-apps/issue-a-virtual-card.mdoc";
  slug: "guides/issue-a-virtual-card";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/card-issuing-apps/legal-document-requirements.mdoc": {
	id: "guides/card-issuing-apps/legal-document-requirements.mdoc";
  slug: "guides/presenting-legal-documents";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/card-issuing-apps/web3-wallet-card-issuing-integration.mdoc": {
	id: "guides/card-issuing-apps/web3-wallet-card-issuing-integration.mdoc";
  slug: "guides/web3-wallet-card-issuing-integration";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/core-concepts/card-funding.mdoc": {
	id: "guides/core-concepts/card-funding.mdoc";
  slug: "guides/card-funding";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/core-concepts/card-lifecycle.mdoc": {
	id: "guides/core-concepts/card-lifecycle.mdoc";
  slug: "guides/card-lifecycle";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/core-concepts/card-payments-101.mdoc": {
	id: "guides/core-concepts/card-payments-101.mdoc";
  slug: "guides/card-payments-101";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/core-concepts/monetary-units.mdoc": {
	id: "guides/core-concepts/monetary-units.mdoc";
  slug: "guides/monetary-units";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/core-concepts/payment-lifecycle.mdoc": {
	id: "guides/core-concepts/payment-lifecycle.mdoc";
  slug: "guides/payment-lifecycle";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/funding-protocols/custodial-funding-protocol.mdoc": {
	id: "guides/funding-protocols/custodial-funding-protocol.mdoc";
  slug: "guides/custodial-funding-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/funding-protocols/flexi-algorand-funding-protocol.mdoc": {
	id: "guides/funding-protocols/flexi-algorand-funding-protocol.mdoc";
  slug: "guides/algorand-funding-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/funding-protocols/funding-protocols.mdoc": {
	id: "guides/funding-protocols/funding-protocols.mdoc";
  slug: "guides/funding-protocols";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/funding-protocols/funding-types.mdoc": {
	id: "guides/funding-protocols/funding-types.mdoc";
  slug: "guides/funding-types";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/funding-protocols/simulator-funding-protocol.mdoc": {
	id: "guides/funding-protocols/simulator-funding-protocol.mdoc";
  slug: "guides/simulator-funding-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/funding-protocols/universal-evm-funding-protocol.mdoc": {
	id: "guides/funding-protocols/universal-evm-funding-protocol.mdoc";
  slug: "guides/universal-evm-funding-protocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/http-status-codes.mdoc": {
	id: "guides/http-status-codes.mdoc";
  slug: "guides/http-status-codes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/kyc/immersve-conducted-kyc.mdoc": {
	id: "guides/kyc/immersve-conducted-kyc.mdoc";
  slug: "guides/immersve-conducted-kyc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/kyc/introduction.mdoc": {
	id: "guides/kyc/introduction.mdoc";
  slug: "guides/kyc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/kyc/kyc-spending-prerequisites.mdoc": {
	id: "guides/kyc/kyc-spending-prerequisites.mdoc";
  slug: "guides/kyc-spending-prerequisites";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/kyc/partner-conducted-kyc.mdoc": {
	id: "guides/kyc/partner-conducted-kyc.mdoc";
  slug: "guides/partner-conducted-kyc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/regions.mdoc": {
	id: "guides/regions.mdoc";
  slug: "guides/regions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/supported-chains/algorand.mdoc": {
	id: "guides/supported-chains/algorand.mdoc";
  slug: "guides/algorand";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/supported-chains/arbitrum.mdoc": {
	id: "guides/supported-chains/arbitrum.mdoc";
  slug: "guides/arbitrum";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/supported-chains/base.mdoc": {
	id: "guides/supported-chains/base.mdoc";
  slug: "guides/base";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/supported-chains/ethereum.mdoc": {
	id: "guides/supported-chains/ethereum.mdoc";
  slug: "guides/ethereum";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/supported-chains/polygon.mdoc": {
	id: "guides/supported-chains/polygon.mdoc";
  slug: "guides/polygon";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/supported-chains/sei.mdoc": {
	id: "guides/supported-chains/sei.mdoc";
  slug: "guides/sei";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/supported-chains/supported-chains.mdoc": {
	id: "guides/supported-chains/supported-chains.mdoc";
  slug: "guides/supported-chains";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/supported-tokens/supported-tokens.mdoc": {
	id: "guides/supported-tokens/supported-tokens.mdoc";
  slug: "guides/supported-tokens";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/supported-tokens/usdc.mdoc": {
	id: "guides/supported-tokens/usdc.mdoc";
  slug: "guides/usdc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/testing/obtaining-test-tokens.mdoc": {
	id: "guides/testing/obtaining-test-tokens.mdoc";
  slug: "guides/obtaining-test-tokens";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/testing/passing-kyc-in-test.mdoc": {
	id: "guides/testing/passing-kyc-in-test.mdoc";
  slug: "guides/pass-kyc-in-testmode";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/testing/payment-simulator.mdoc": {
	id: "guides/testing/payment-simulator.mdoc";
  slug: "guides/simulator";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"index.mdoc": {
	id: "index.mdoc";
  slug: "index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"resources/postman-collection.mdoc": {
	id: "resources/postman-collection.mdoc";
  slug: "resources/postman-collection";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"resources/public-sandbox-account.mdoc": {
	id: "resources/public-sandbox-account.mdoc";
  slug: "resources/public-sandbox-account";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"resources/smart-contracts.mdoc": {
	id: "resources/smart-contracts.mdoc";
  slug: "resources/smart-contracts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"resources/tables.mdoc": {
	id: "resources/tables.mdoc";
  slug: "tables";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"resources/typography.mdoc": {
	id: "resources/typography.mdoc";
  slug: "typography";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"use-cases/blockchains.mdoc": {
	id: "use-cases/blockchains.mdoc";
  slug: "use-cases/blockchains";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"use-cases/custodial-wallets.mdoc": {
	id: "use-cases/custodial-wallets.mdoc";
  slug: "use-cases/custodial-wallets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"use-cases/defi-applications.mdoc": {
	id: "use-cases/defi-applications.mdoc";
  slug: "use-cases/defi-applications";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"use-cases/exchanges.mdoc": {
	id: "use-cases/exchanges.mdoc";
  slug: "use-cases/exchanges";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"use-cases/web3-wallets.mdoc": {
	id: "use-cases/web3-wallets.mdoc";
  slug: "use-cases/web3-wallets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
};
"funding-types": {
"algorand-testnet-usdc.md": {
	id: "algorand-testnet-usdc.md";
  slug: "algorand-testnet-usdc";
  body: string;
  collection: "funding-types";
  data: InferEntrySchema<"funding-types">
} & { render(): Render[".md"] };
"algorand-usdc.md": {
	id: "algorand-usdc.md";
  slug: "algorand-usdc";
  body: string;
  collection: "funding-types";
  data: InferEntrySchema<"funding-types">
} & { render(): Render[".md"] };
"arbitrum-mainnet-usdc-universal-evm.md": {
	id: "arbitrum-mainnet-usdc-universal-evm.md";
  slug: "arbitrum-mainnet-usdc-universal-evm";
  body: string;
  collection: "funding-types";
  data: InferEntrySchema<"funding-types">
} & { render(): Render[".md"] };
"arbitrum-sepolia-usdc-universal-evm.md": {
	id: "arbitrum-sepolia-usdc-universal-evm.md";
  slug: "arbitrum-sepolia-usdc-universal-evm";
  body: string;
  collection: "funding-types";
  data: InferEntrySchema<"funding-types">
} & { render(): Render[".md"] };
"base-mainnet-usdc-universal-evm.md": {
	id: "base-mainnet-usdc-universal-evm.md";
  slug: "base-mainnet-usdc-universal-evm";
  body: string;
  collection: "funding-types";
  data: InferEntrySchema<"funding-types">
} & { render(): Render[".md"] };
"base-sepolia-usdc-universal-evm.md": {
	id: "base-sepolia-usdc-universal-evm.md";
  slug: "base-sepolia-usdc-universal-evm";
  body: string;
  collection: "funding-types";
  data: InferEntrySchema<"funding-types">
} & { render(): Render[".md"] };
"custodial-usdc.md": {
	id: "custodial-usdc.md";
  slug: "custodial-usdc";
  body: string;
  collection: "funding-types";
  data: InferEntrySchema<"funding-types">
} & { render(): Render[".md"] };
"ethereum-sepolia-usdc-universal-evm-test.md": {
	id: "ethereum-sepolia-usdc-universal-evm-test.md";
  slug: "ethereum-sepolia-usdc-universal-evm-test";
  body: string;
  collection: "funding-types";
  data: InferEntrySchema<"funding-types">
} & { render(): Render[".md"] };
"polygon-amoy-usdc-universal-evm-test.md": {
	id: "polygon-amoy-usdc-universal-evm-test.md";
  slug: "polygon-amoy-usdc-universal-evm-test";
  body: string;
  collection: "funding-types";
  data: InferEntrySchema<"funding-types">
} & { render(): Render[".md"] };
"polygon-usdc-universal-evm-live.md": {
	id: "polygon-usdc-universal-evm-live.md";
  slug: "polygon-usdc-universal-evm-live";
  body: string;
  collection: "funding-types";
  data: InferEntrySchema<"funding-types">
} & { render(): Render[".md"] };
"sei-mainnet-usdc-universal-evm.md": {
	id: "sei-mainnet-usdc-universal-evm.md";
  slug: "sei-mainnet-usdc-universal-evm";
  body: string;
  collection: "funding-types";
  data: InferEntrySchema<"funding-types">
} & { render(): Render[".md"] };
"sei-testnet-usdc-universal-evm.md": {
	id: "sei-testnet-usdc-universal-evm.md";
  slug: "sei-testnet-usdc-universal-evm";
  body: string;
  collection: "funding-types";
  data: InferEntrySchema<"funding-types">
} & { render(): Render[".md"] };
"simulator-usdc.md": {
	id: "simulator-usdc.md";
  slug: "simulator-usdc";
  body: string;
  collection: "funding-types";
  data: InferEntrySchema<"funding-types">
} & { render(): Render[".md"] };
};
"network-tokens": {
"usdc-algorand-mainnet.md": {
	id: "usdc-algorand-mainnet.md";
  slug: "usdc-algorand-mainnet";
  body: string;
  collection: "network-tokens";
  data: InferEntrySchema<"network-tokens">
} & { render(): Render[".md"] };
"usdc-algorand-testnet.md": {
	id: "usdc-algorand-testnet.md";
  slug: "usdc-algorand-testnet";
  body: string;
  collection: "network-tokens";
  data: InferEntrySchema<"network-tokens">
} & { render(): Render[".md"] };
"usdc-arbitrum-mainnet.md": {
	id: "usdc-arbitrum-mainnet.md";
  slug: "usdc-arbitrum-mainnet";
  body: string;
  collection: "network-tokens";
  data: InferEntrySchema<"network-tokens">
} & { render(): Render[".md"] };
"usdc-arbitrum-sepolia.md": {
	id: "usdc-arbitrum-sepolia.md";
  slug: "usdc-arbitrum-sepolia";
  body: string;
  collection: "network-tokens";
  data: InferEntrySchema<"network-tokens">
} & { render(): Render[".md"] };
"usdc-base-mainnet.md": {
	id: "usdc-base-mainnet.md";
  slug: "usdc-base-mainnet";
  body: string;
  collection: "network-tokens";
  data: InferEntrySchema<"network-tokens">
} & { render(): Render[".md"] };
"usdc-base-sepolia.md": {
	id: "usdc-base-sepolia.md";
  slug: "usdc-base-sepolia";
  body: string;
  collection: "network-tokens";
  data: InferEntrySchema<"network-tokens">
} & { render(): Render[".md"] };
"usdc-ethereum-sepolia.md": {
	id: "usdc-ethereum-sepolia.md";
  slug: "usdc-ethereum-sepolia";
  body: string;
  collection: "network-tokens";
  data: InferEntrySchema<"network-tokens">
} & { render(): Render[".md"] };
"usdc-polygon-amoy.md": {
	id: "usdc-polygon-amoy.md";
  slug: "usdc-polygon-amoy";
  body: string;
  collection: "network-tokens";
  data: InferEntrySchema<"network-tokens">
} & { render(): Render[".md"] };
"usdc-polygon-mainnet.md": {
	id: "usdc-polygon-mainnet.md";
  slug: "usdc-polygon-mainnet";
  body: string;
  collection: "network-tokens";
  data: InferEntrySchema<"network-tokens">
} & { render(): Render[".md"] };
"usdc-sei-mainnet.md": {
	id: "usdc-sei-mainnet.md";
  slug: "usdc-sei-mainnet";
  body: string;
  collection: "network-tokens";
  data: InferEntrySchema<"network-tokens">
} & { render(): Render[".md"] };
"usdc-sei-testnet.md": {
	id: "usdc-sei-testnet.md";
  slug: "usdc-sei-testnet";
  body: string;
  collection: "network-tokens";
  data: InferEntrySchema<"network-tokens">
} & { render(): Render[".md"] };
};
"networks": {
"algorand-mainnet.md": {
	id: "algorand-mainnet.md";
  slug: "algorand-mainnet";
  body: string;
  collection: "networks";
  data: InferEntrySchema<"networks">
} & { render(): Render[".md"] };
"algorand-testnet.md": {
	id: "algorand-testnet.md";
  slug: "algorand-testnet";
  body: string;
  collection: "networks";
  data: InferEntrySchema<"networks">
} & { render(): Render[".md"] };
"arbitrum-mainnet.md": {
	id: "arbitrum-mainnet.md";
  slug: "arbitrum-mainnet";
  body: string;
  collection: "networks";
  data: InferEntrySchema<"networks">
} & { render(): Render[".md"] };
"arbitrum-sepolia.md": {
	id: "arbitrum-sepolia.md";
  slug: "arbitrum-sepolia";
  body: string;
  collection: "networks";
  data: InferEntrySchema<"networks">
} & { render(): Render[".md"] };
"base-mainnet.md": {
	id: "base-mainnet.md";
  slug: "base-mainnet";
  body: string;
  collection: "networks";
  data: InferEntrySchema<"networks">
} & { render(): Render[".md"] };
"base-sepolia.md": {
	id: "base-sepolia.md";
  slug: "base-sepolia";
  body: string;
  collection: "networks";
  data: InferEntrySchema<"networks">
} & { render(): Render[".md"] };
"ethereum-mainnet.md": {
	id: "ethereum-mainnet.md";
  slug: "ethereum-mainnet";
  body: string;
  collection: "networks";
  data: InferEntrySchema<"networks">
} & { render(): Render[".md"] };
"ethereum-sepolia.md": {
	id: "ethereum-sepolia.md";
  slug: "ethereum-sepolia";
  body: string;
  collection: "networks";
  data: InferEntrySchema<"networks">
} & { render(): Render[".md"] };
"polygon-amoy.md": {
	id: "polygon-amoy.md";
  slug: "polygon-amoy";
  body: string;
  collection: "networks";
  data: InferEntrySchema<"networks">
} & { render(): Render[".md"] };
"polygon-mainnet.md": {
	id: "polygon-mainnet.md";
  slug: "polygon-mainnet";
  body: string;
  collection: "networks";
  data: InferEntrySchema<"networks">
} & { render(): Render[".md"] };
"sei-mainnet.md": {
	id: "sei-mainnet.md";
  slug: "sei-mainnet";
  body: string;
  collection: "networks";
  data: InferEntrySchema<"networks">
} & { render(): Render[".md"] };
"sei-testnet.md": {
	id: "sei-testnet.md";
  slug: "sei-testnet";
  body: string;
  collection: "networks";
  data: InferEntrySchema<"networks">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"i18n": {
"ignore": {
	id: "ignore";
  collection: "i18n";
  data: InferEntrySchema<"i18n">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
