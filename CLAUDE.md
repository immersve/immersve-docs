# Claude Instructions

When authoring or reviewing docs in this repo, follow the
**Documentation Style Guide** at
`imsv-docs-astro/src/content/docs/resources/style-guide.mdoc`
(published at https://docs.immersve.com/resources/style-guide).

The guide is the single source of truth for tone, casing, English
variant, structure, links, figures, code samples, terminology, prose
conventions, OpenAPI authoring, and URLs. Read it before making
non-trivial changes.

Do not duplicate guide rules here. If a rule needs to change, change
it in the guide.

## Repo Structure

This repo has two independently-built sub-sites: `imsv-docs-astro/`
(guides, Markdoc) and `imsv-docs-docusaurus/` (API Reference,
Docusaurus). See README.md's "Source Layout" section for where things
live, including OpenAPI spec locations.

## Redirects

All redirects -- guides and API Reference alike -- go in
`imsv-docs-astro/src/redirects.yml`, even for `/api-reference/*`
paths. See README.md's "Redirects" section for why that works and
the chained-redirect pitfall.
