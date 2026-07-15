# Plan: Documentation Style Guide

## Delivery

The whole project ships as a **single PR**. Stages structure the work
but each stage amends the same PR rather than landing independently.
The PR opens as a draft once Stage 1 has a reviewable surface; later
stages add commits to the same branch. Final merge happens after
Stage 4, when the guide is feature-complete at v1.

## Conventions

Cross-cutting rules every section must follow. Full rationale lives
in `decisions.md`; restated here as a writing reminder for each
stage.

- **No numbered headings** in the published guide (`## Casing`, not
  `## 1. Casing`). Cross-references between sections use the
  section name, not `§N`. The plan's internal `§N` shorthand stays
  — it does not leak into the guide.
- **Bullet shape consistency** — every list picks one of three
  shapes: pure label (Title Case, no period); pure paragraph
  (sentence case, period); or labeled paragraph (**Bold Label**
  followed by em-dash or colon, then sentence-case body with
  period). Mixing within a list is the failure mode.
- **Document Structure vs Elements** — the published guide groups
  page-level rules under *Document Structure* and per-element rules
  (headings, lists, tables, figures, captions, links, callouts)
  under *Elements*. New rules pick the right home. The plan's
  `§N` shorthand tracks stage content, not published location.

## Stage 0 — Prerequisites (done)

- [x] Scope artifact published in Notion (AI Artifacts DB)
- [x] Sibling artifacts (*Ubiquitous Title Case*, *Code Captions*) scoped
      and cross-referenced
- [x] Stale `STYLE_GUIDE_PLAN.md` branch retired in favour of this
      structure; worktree relocated to the conventional path

## Stage 1 — Skeleton and Foundational Sections (done)

Page published at `resources/style-guide`, surfaced in the existing
"Resources" sidebar group via autogeneration. Draft §1 Casing, §2
English Variant, and §5 Figures and Captions landed — the three
sections the sibling projects depend on. `CLAUDE.md` slimmed to a
one-line pointer at the published guide. Note: published headings
are not numbered; the `§N` shorthand is plan-internal only.

## Stage 2 — Structural Sections (done)

- [x] **§3 Headings and Document Structure** — introductions explain
      *what* and *why*; subheadings introduce their topic; every section
      contains at least one paragraph of prose (no heading-then-figure-only
      sections); **no numbered headings** — `## Casing`, not
      `## 1. Casing`; section cross-references in prose use the section
      name, not `§N`; guides describe patterns not single use cases
      (repeating content → page per variant); a list that grows past a
      few items or carries multiple columns of information prefers a
      table or icon list; **bullet rule** — every list picks one of three
      shapes (pure label: Title Case, no period; pure paragraph: sentence
      case, period; labeled paragraph: **Bold Label** followed by em-dash
      or colon, then sentence-case body with period), and mixing shapes
      within a list is the failure mode;
      **Callouts subsection** — three callout forms ship today:
      `{% note %}` (important facts a careful reader has already
      absorbed — immutable identifiers, reasoned defaults),
      `{% warning %}` (hazards with real cost — data loss,
      irreversible state, account lockout, security exposure), and
      `{% endpointref %}` (highlight the API endpoint being described
      in an integration guide); use sparingly; a callout reinforces a
      point already made in the surrounding prose, never summarizes
      it, and never introduces a new constraint a reader could miss
      by skipping the box
- [x] **§4 Links** — use the `{% link %}` Markdoc tag in `.mdoc`
      files (forms: docs page, API reference endpoint, external URL;
      link text defaults from the target, customisable via `title`);
      use Markdown `[link]()` syntax inside OpenAPI files; never set
      the `target` attribute
- [x] **§10 URLs and Redirects** — page slugs are kebab-case
      (`api-fundamentals/xrpl-login`); redirects from old slug to new are
      mandatory whenever a page is renamed or moved

End state: PR branch additionally contains §3, §4, §10. PR remains
draft.

## Stage 3 — Code and Reference Sections (done)

- [x] **§6 Code Samples** — minimise dependencies (prefer bash or vanilla
      JS/TS); short and single-purpose; no comments in example response
      payloads; every example must actually run; per-language sub-sections
      cover bash (curl flag style, line continuation, variable
      substitution), JSON (indent, quote style, key ordering against the
      OpenAPI schema), JavaScript and TypeScript (indent, quotes,
      `async`/`await` over `.then`, `const`/`let` over `var`)
- [x] **§7 Terminology** — short glossary of canonical terms (`endpoint`
      vs "API", `webhook`, `Immersve`, product names) and the
      authoritative list of domain resources that count as proper nouns
      under §1
- [x] **§9 OpenAPI Authoring** — endpoint summaries and descriptions;
      attribute descriptions; when to use enums versus open strings; how
      to mark deprecation; YAML wrapping and indentation; inline links
      in OpenAPI descriptions use Markdown `[link]()` syntax (the
      `{% link %}` Markdoc tag does not render here — see §4)

End state: PR branch additionally contains §6, §7, §9. PR remains
draft.

## Stage 4 — Prose Conventions (done)

§8 Prose Conventions landed between *Terminology* and *OpenAPI
Authoring*. Four subsections — *Quotes*, *Line Length*, *Oxford
Comma*, *Referring to Endpoints*.

## Stage 5 — Iteration Pass (done)

Worked the *Pending Feedback (2026-06-18)* backlog as a series of
small commits. Each item below landed in its own commit; see
`git log` for the changeset.

- [x] §8 corrections: drop the prose-vs-code aside in *Quotes*;
      rewrite *Line Length* to allow breaks inside block tags
      while disallowing them inside URLs or before inline tags;
      refer to endpoints by title, not `operationId`.
- [x] Rebase the branch onto `main` (clean — no conflicts).
- [x] Document code-block captions (`{% title %}`) and replace
      the placeholder Bash caption.
- [x] Restore class-vs-instance casing nuance for domain nouns.
- [x] Markdoc tag audit and documentation — `{% table %}`,
      `{% wrap %}`, and `{% list %}` / `{% listitem %}` now have
      their own subsections; unused tags (`{% button %}`,
      `{% tab %}`, registry views, etc.) intentionally left out.
- [x] Rewrite *Tables* intro to cover comparison and key/value
      flavours.
- [x] Switch the per-language Code Style subsections to tables.
- [x] Heading-brevity rule + rename offenders ("JavaScript and
      TypeScript" → "JavaScript", etc.). Spell out the rule that
      Title Case contexts use the English tag name ("Markdoc
      Table Tag", not "`{% table %}` Tag").
- [x] Use `operationId` for the OpenAPI endpoint slug.
- [x] Top-level reorder + Document Structure restructure:
      Document Structure leads (with Section Introductions,
      Variant Pages, Slugs, Redirects); OpenAPI Authoring lands
      last; voice sections (Casing, English Variant, Prose,
      Terminology) cluster between Document Structure and
      Elements.
- [x] Markdoc fence transform fix: `{% process=false %}` now
      displays raw Markdoc syntax in a code block (was breaking
      the build).
- [x] Split *Code Samples* into *Code Blocks* (under Elements)
      and *Code Style* (top-level); per-language subsections
      renamed to Bash Style / JSON Style / JavaScript Style.
- [x] Terminology rework against house usage: Domain Resources
      expanded from 6 to 18 entries; glossary entries added for
      the funding-* family; adjectival-use rule spelled out under
      *Domain Nouns*.

End state: guide is feature-complete at v1, Markdoc tags and
Code Captions documented, layout finalized, Terminology
validated. PR is ready for review.

## Stage 6 — ChatGPT Feedback Pass

A ChatGPT conversation reviewing the guide is attached to the
Notion project doc
(https://app.notion.com/p/37d1d446ed8a81d28077d444ba1fd8ed). Walk
through it and triage:

- [ ] Read the attached conversation end-to-end.
- [ ] Bucket each suggestion as Apply / Defer / Reject with a
      one-line rationale.
- [ ] Land the Apply bucket as a series of small commits, same
      cadence as Stage 5.
- [ ] Record the Defer / Reject decisions in `decisions.md` so
      the choices don't get re-litigated.

End state: every actionable item from the ChatGPT review is
either landed on the branch or recorded as a deliberate
non-change.

## Stage 7 — Revisit First-Class Domain Resources

The "first-class domain resource" framing — introduced in Stage
5 to distinguish the 18-entry authoritative Title-Case list from
arbitrary API-exposed resources — has been challenged in review
as having unclear provenance. The term reads as house jargon
but does not appear to come from a settled internal convention,
and a reader has no way to learn what makes a resource
"first-class" beyond the list itself.

- [ ] Trace where the term came from: pre-existing in Immersve
      docs, surfaced in code-captions / style-guide drafting, or
      introduced fresh by this guide.
- [ ] Decide between three resolutions: (a) keep the term and
      anchor it in a one-line definition the reader can apply
      themselves; (b) rename to something the team already uses;
      (c) drop the qualifier and accept that the authoritative
      list IS the definition.
- [ ] Apply the chosen resolution across the guide (the
      *Casing / Domain Nouns* and *Terminology / First-Class
      Domain Resources* sections, plus the Webhook glossary
      cross-reference).
- [ ] Record the decision in `decisions.md`.

End state: the term either earns its place with a definition the
reader can apply, or is replaced / dropped.

## Stage 8 — Tweak Vertical Spacing Around Code Blocks and Tables

The style guide page itself stresses the component spacing more
than any other page on the site — heavy use of tables and code
blocks, often adjacent to each other or to surrounding prose.
That density exposes gaps in the current component styles:
margins read inconsistently between block-after-prose,
block-after-block, and block-before-caption configurations.

- [ ] Audit the style guide page in the browser; note each
      spacing gap (excessive, missing, or asymmetric) by section.
- [ ] Decide whether the fix lives in component CSS
      (`CodeFence.astro`, the table transform in
      `markdoc.config.mjs`) or in a shared prose-spacing rule
      higher up the tree.
- [ ] Land the spacing changes; recheck the style guide page
      and a sample integration guide (one that's text-heavy with
      a few code blocks) to confirm nothing regresses outside
      the stressed cases.

End state: tables and code blocks read with consistent vertical
rhythm whether they appear alone, adjacent to each other, or
adjacent to captions.

## Open Questions

- Whether to cross-link from each section to specific Markdoc tag
  reference docs, or keep the guide self-contained
- Captions section contradicts itself on the sentence rule. The
  opening paragraph says a caption "is not a sentence describing
  what the element shows", but the subsequent code-block rule
  says code-block captions are full sentences in sentence case
  with a terminal period, leading with "Example". Decide whether
  all captions are full sentences (in which case the opening
  paragraph needs to soften), or whether code-block captions are
  the special case (in which case the opening paragraph needs to
  scope itself to image/table captions only)

## Known Risks

- The Notion brainstorm includes details that may be stale or wrong;
  expect a few corrections during Stage 1
- Sections risk growing beyond "short and skim-able" — discipline
  required to keep each section roughly one paragraph + a few bullets +
  one example
- Sidebar / nav placement may collide with an existing structure that
  isn't obvious until we look — confirm during Stage 1
