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
