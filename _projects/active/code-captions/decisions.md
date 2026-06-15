# Decisions: Code Captions

## Stage A1 — Caption Rendering Paths (2026-06-13)

Three caption affordances live in `imsv-docs-astro/`. Their
rendering paths diverge enough that a CSS-only unification would
not produce identical output.

### Table Captions

Markdoc syntax: `{% table title="..." %}`.

- Schema: `markdoc.config.mjs:43-56` defines a custom `transform()`
  that emits a native HTML `<caption>` inside a
  `<div class="prose dark:prose-invert overflow-x-auto">` wrapper.
- DOM: `<div class="prose"> → <table> → <caption class="italic
  caption-bottom">`.
- Styling: `italic caption-bottom` on the element, plus prose
  defaults at `typography.ts:213-218`
  (`caption, figcaption { color: var(--tw-prose-captions);
  font-size: xs; margin-top: 2; }`).

### Image Captions

Markdown image title syntax: `![alt](src "title")`.

- Schema: `markdoc.config.mjs:31-41` overrides the default image
  node and delegates rendering to a custom component.
- Component: `src/components/Figure.astro:16-21` wraps the image in
  a semantic `<figure>` and renders the title as
  `<figcaption class="text-center italic">`.
- DOM: `<figure> → <div.flex.justify-center> → <img> ;
  <figcaption>`.
- Styling: explicit `text-center italic`, plus the same prose
  `caption, figcaption` rule at `typography.ts:213-218`.

### Code-Block Titles

Fenced-block annotation: `{% title="..." %}`.

- Schema: `markdoc.config.mjs:58-64` passes `title` through as an
  attribute on the `fence` node.
- Component: `src/components/CodeFence.astro:10-19` forwards
  `title` straight to the `<ExpressiveCode>` component
  (`astro-expressive-code` v0.35.3).
- Config: `ec.config.mjs` only sets themes and border-radius —
  no title-bar style override.
- DOM: title is rendered **inside** Expressive Code's frame as
  part of its title bar; it is not a semantic `<caption>` or
  `<figcaption>`, and the prose `caption, figcaption` rule does
  not reach it.

### Recommendation: Renderer-Level Unification

A CSS-only fix could restyle Expressive Code's title bar to
approximate the prose caption look, but it would not give us the
same DOM shape — code titles would still live inside the code
frame, while table and image captions live as semantic siblings of
the content. That divergence makes the styling brittle (any
Expressive Code update can move the title bar markup) and leaves
the accessibility story uneven.

Preferred path: lift the code-block title out of Expressive Code's
frame in `CodeFence.astro` and emit it as a sibling caption
element, mirroring the table/image wrapper pattern.

```astro
<figure class="not-prose">
  <ExpressiveCode {...rest} />
  {title && <figcaption class="text-center italic">{title}</figcaption>}
</figure>
```

Trade-offs:

- **Pro:** Single source of truth for caption styling (prose
  `caption, figcaption` rule). Semantic markup. Insulated from
  Expressive Code internals.
- **Con:** Requires touching the renderer, not just CSS. Existing
  pages that depended on the in-frame title bar will visually
  shift (caption moves below the block). That is the desired
  unification — table captions already render below — but Stage
  A2 needs visual diffs on the sample pages
  (`guides/api-fundamentals/xrpl-login`,
  `guides/api-fundamentals/authentication`) to confirm.

### Risks

- Expressive Code may still render its own title bar from the
  `title` prop. The renderer-level change must either stop passing
  `title` into Expressive Code or accept that the in-frame title
  bar disappears (verify in Stage A2).
- The `not-prose` class on the wrapper is to prevent typography
  plugin styles from interfering with Expressive Code's own
  styling; the figcaption may need explicit re-application of the
  prose caption rule.

## Stage B2 — Endpoint Naming in Captions (2026-06-14)

Captions name endpoints by their title from the `endpointref`
registry, not by method+path.

- Use: "from Get Spending Prerequisites", "to Create Account",
  "via Submit Challenge Outcome".
- Do not use: "from POST /spending-prerequisites", "to POST
  /accounts".

The endpoint title is the canonical name surfaced in the surrounding
`endpointref` block and in the API reference sidebar. The method+path
form is reference data that already appears one block away; the
caption restates the *action* the call performs in the API's own
vocabulary.

## Stage B2 — Domain-Resource Casing in Captions (2026-06-14)

Captions surfaced an unresolved inconsistency in how the wider docs
case named platform concepts. A `grep` of `imsv-docs-astro/src/content/docs/guides/`
counted:

- Funding Source: 53 Title Case vs 31 lowercase
- Funding Channel: 21 vs 6
- Funds Storage: 15 vs 1
- Card Program: 6 vs 5
- Cardholder Account: 4 vs 10
- Partner Account: 9 vs 4

No single rule explains the split. Two rules are in play and they
disagree:

1. **"Is it the name of a defined platform concept?"** Under this
   rule, every concept defined in the data model gets Title Case
   in every appearance. This is the rule the API reference
   approximates when introducing a concept formally.
2. **"Is it functioning as a name here, or as a description?"**
   Under this rule, the same word swings on its grammatical role.
   "Create a Funding Source" (resource type, named) vs. "the
   cardholder's funding source" (instance, possessed). English
   does this constantly: "the President" vs. "a president".

### Interim Rule Applied in Captions

For the captions PR, the second rule:

- **Title Case when naming the resource type as a concept.**
  Markers: the word is acting as the type name, often after
  "a/the/list/create/get". "Create a Funding Channel.",
  "List Webhook Listeners.", "Register a Funding Source."
- **lowercase when describing an instance, a possessive, or a
  compound noun phrase.** Markers: possessive, indefinite article
  with modifiers, or generic plural. "the cardholder's funding
  source", "a custodial cardholder funding source", "their card
  program ID", "listing funding sources".

Test: if the phrase could be replaced with "the [Resource]" in
API-reference prose without sounding off, capitalize. If it reads
naturally with a possessive or with an instance-specific modifier
mid-sentence, leave it lowercase.

### Why Not Rule 1

Rule 1 is mechanically simpler and unambiguous but would require
retro-editing ~70 lowercase occurrences in the existing guides to
match — work that touches every integration walkthrough. Captions
alone cannot drive that. The *Documentation Style Guide* project
is the appropriate venue for picking a rule and conforming the
corpus.

### Trade-offs of Rule 2

- **Pro:** Matches English convention; most current docs already
  lean this way (the lowercase-loser bucket is mostly possessives
  and instance descriptions, not random).
- **Con:** Requires judgment per use site. Two reviewers can read
  the same sentence differently. A house style guide entry with
  examples is needed.
- **Con:** Captions get this right in isolation but the
  surrounding prose is inconsistent. Reads as polish in one
  block, sloppiness in the next.

### Handoff to Documentation Style Guide

The Documentation Style Guide project should:

1. Decide between rule 1 and rule 2 (or a hybrid).
2. If rule 2 wins, lift the markers and test from this entry into
   the style guide with worked examples.
3. Retro-edit existing guides so the corpus is consistent with the
   chosen rule. Caption text in this PR will conform without
   further changes if rule 2 is chosen; will need a sweep if rule
   1 is chosen.
