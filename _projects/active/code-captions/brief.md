# Code Captions

**Lead:** Nathan Jones
**Started:** 2026-06-13
**Status:** Active
**Document:** https://app.notion.com/p/immersve/Code-Captions-37d1d446ed8a81df8d2bd7653686f250

The Notion document is the canonical scope artifact. This file
captures only what the coding session needs to reload context
without re-fetching the page.

## Problem

Code blocks in `imsv-docs-astro/src/content/docs/` mostly carry no
caption, and the `{% title="..." %}` annotation that does exist
renders in a different style from the unified table and image
caption affordance.

## Scope

In scope:

- A caption on every fenced code block under
  `imsv-docs-astro/src/content/docs/`. Each caption is either a
  title (via `{% title="..." %}`, Title Case) or an introducing
  paragraph (sentence case prose), chosen per block — same
  title/paragraph latitude as list items.
- Title-form captions render in the same visual style as table
  and image captions.
- A committed captions convention in the docs style guide,
  including guidance on when to choose title vs paragraph form.

Out of scope:

- Renaming the Markdoc `title` annotation.
- Rewriting code samples.
- Captioning inline code or short fragments.
- A linter or CI check enforcing presence (deferred follow-up).

## Success Criteria

- Every fenced code block under
  `imsv-docs-astro/src/content/docs/` has a caption — either a
  title annotation or an introducing paragraph.
- Title-form captions render in a style visually indistinguishable
  from table and image captions on the same page.
- The captions convention (including title vs paragraph guidance)
  is committed to the docs style guide.

## Dependencies

- **Documentation Style Guide** — captions-required rule lives
  there; its Captions section is the durable hook contributors and
  reviewers point at.
- **Ubiquitous Title Case** — shares the proper-noun allowlist
  used for caption casing.
