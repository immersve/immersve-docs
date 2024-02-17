# Immersve Docs

This website hosts documentation for [docs.immersve.com](https://docs.immersve.com). It is
built using [Astro](https://astro.build/), [Tailwind](https://tailwindcss.com/)
and [Markdoc](https://markdoc.dev/).


## Installation

```shell
corepack enable
yarn
```

## Local Development


To start the Astro dev server at http://localhost:4321/, run:

```shell
yarn start
```

To start the Docusaurus dev server at http://localhost:3000/, run:

```shell
yarn start:docusaurus
```

## Source Layout

Important locations for content authoring:

 - `imsv-docs-astro/src/content/docs/` -- Content authored as Markdoc.
 - `imsv-docs-astro/src/components/` -- Custom Astro components.
 - `imsv-docs-astro/markdoc.config.mjs` -- Markdoc tag declarations.
 - `imsv-docs-astro/astro.config.mjs` -- Sidebar nav configuration and redirects.
 - `imsv-docs-docusaurus/openapi/` -- Open API specs for API Reference section.
 - `imsv-docs-docusaurus/docs/redirects/` -- API Reference redirects.


### Build

To generate static content into the `dist` directory, run:

```shell
yarn build
```

The contents of the dist dir can be served using any static contents hosting
service.


### OpenAPI documentation

Endpoint specs are defined as Open API yaml files under
`imsv-docs-docusaurus/openapi/`. These specs are used to generate the API
Reference section which is a separate [Docusaurus 2](https://docusaurus.io/)
site.

The contents of the `imsv-docs-docusaurus/docs/` folder is generated by
the Docusaurus openapi-docs plugin. The plugin uses immersve.yaml as an input. To edit api
references, modify immersve.yaml (not the derived mdx files). Then run:

```shell
yarn api-re-gen
```

## Redirects

When changing URLs, redirects should be declared to preserve inbound links to
old content locations.

 * Guides redirects are defined at: `imsv-docs-astro/astro.config.mjs`.
 * API Reference redirects are defind at: `imsv-docs-docusaurus/docs/redirects/`.

To avoid changing URLs, Astro offers the `slug` frontmatter attribute which
overrides the content URL. By default, Astro content uses the file path of a
content item as its URL.


## Formatting Markdown

Wrap your markdown. It makes diffs easier to read.

Install the [Rewrap
extension](https://marketplace.visualstudio.com/items?itemName=stkb.rewrap)
Select text then hit the chord `Alt + Q`

## Style

Check your spelling, grammar and readability using [Hemingway
Editor](https://hemingwayapp.com/)


## Run Link Checker

Check for broken links by running link checker.

```
docker compose run linkchecker -F csv --check-extern --verbose http://nginx
```

The status of all links will be reported in the generated `linkchecker-out.csv`
file.

