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
	interface Render {
		'.mdoc': Promise<{
			Content(props: Record<string, any>): import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
				import('astro/zod').ZodLiteral<'avif'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
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
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
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
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"guides/authentication.mdoc": {
	id: "guides/authentication.mdoc";
  slug: "guides/authentication";
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
"guides/card-issuing-apps/creating-a-funding-channel.mdoc": {
	id: "guides/card-issuing-apps/creating-a-funding-channel.mdoc";
  slug: "guides/creating-a-funding-channel";
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
"guides/cardholder-support.mdoc": {
	id: "guides/cardholder-support.mdoc";
  slug: "guides/cardholder-support";
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
"guides/funding-protocols/universal-evm-smart-contract.mdoc": {
	id: "guides/funding-protocols/universal-evm-smart-contract.mdoc";
  slug: "guides/universal-evm-smart-contract";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/guides-intro.mdoc": {
	id: "guides/guides-intro.mdoc";
  slug: "guides";
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
"guides/kyc-modes/partner-conducted-kyc.mdoc": {
	id: "guides/kyc-modes/partner-conducted-kyc.mdoc";
  slug: "guides/partner-conducted-kyc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/reports/authorization-reports.mdoc": {
	id: "guides/reports/authorization-reports.mdoc";
  slug: "guides/reports/authorization-reports";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/reports/clearing-reports.mdoc": {
	id: "guides/reports/clearing-reports.mdoc";
  slug: "guides/reports/clearing-reports";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/reports/introduction.mdoc": {
	id: "guides/reports/introduction.mdoc";
  slug: "guides/reports";
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
"guides/testing/payment-simulator.mdoc": {
	id: "guides/testing/payment-simulator.mdoc";
  slug: "guides/simulator";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"guides/webhooks.mdoc": {
	id: "guides/webhooks.mdoc";
  slug: "guides/webhooks";
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
"resources/smart-contracts.mdoc": {
	id: "resources/smart-contracts.mdoc";
  slug: "resources/smart-contracts";
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
"use-cases/non-custodial-wallets.mdoc": {
	id: "use-cases/non-custodial-wallets.mdoc";
  slug: "use-cases/non-custodial-wallets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
"use-cases/use-cases-intro.mdoc": {
	id: "use-cases/use-cases-intro.mdoc";
  slug: "use-cases";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdoc"] };
};
"funding-types": {
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
};
"network-tokens": {
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
"usdc-polygon-pos.md": {
	id: "usdc-polygon-pos.md";
  slug: "usdc-polygon-pos";
  body: string;
  collection: "network-tokens";
  data: InferEntrySchema<"network-tokens">
} & { render(): Render[".md"] };
};
"networks": {
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
"polygon-pos.md": {
	id: "polygon-pos.md";
  slug: "polygon-pos";
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

	export type ContentConfig = typeof import("../src/content/config.js");
}
