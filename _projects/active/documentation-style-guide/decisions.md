# Decisions: Documentation Style Guide

## 2026-06-13 — Publish to the docs site under a `contributors/` slug

**Decision:** The style guide will be published as a page on the docs
site under a `contributors/` slug (recommended: `contributors/style-guide`),
not as a top-level `CONTRIBUTING.md`.

**Rationale:** The docs site is the same content stack contributors are
reviewing — the guide gets read in the act of authoring docs. It also
doubles as a reference for partners writing integration notes against
Immersve's API. A `CONTRIBUTING.md` would be invisible to the same
audience that's writing the docs and would not surface at all to
partners.

**Alternatives considered:** (a) Top-level `CONTRIBUTING.md` — rejected
because the audience writing docs PRs isn't reading the repo root
regularly, and partners couldn't see it at all. (b) Both — a stub
`CONTRIBUTING.md` pointing at the published guide — viable but adds a
maintenance surface for marginal benefit; revisit if a clear need
arises.

## 2026-06-14 — Final slug: `contributors/style-guide`

**Decision:** The published page lives at
`https://docs.immersve.com/contributors/style-guide` (sourced from
`imsv-docs-astro/src/content/docs/contributors/style-guide.mdoc`).

**Rationale:** Matches the section directory cleanly, leaves room
for a future Contributors landing page or sibling pages (e.g. local
dev setup) without restructuring URLs.

**Alternatives considered:** (a) `contributors/docs-style-guide` —
more specific but redundant inside the `contributors/` section,
where "style guide" is unambiguous. (b) `contributors` — promotes
the page to the section root for a shorter URL, but forecloses on a
future Contributors landing page.

## 2026-06-14 — `CLAUDE.md` slims to a pointer

**Decision:** The repo-root `CLAUDE.md` (previously uncommitted, with
casing rules duplicated from the guide) is committed as a slim
pointer to the published style guide, with no rule restatement.

**Rationale:** Single source of truth — agents and humans read the
same page. Slim file still picks up automatically by Claude Code's
project-instructions loader, so any future agent-specific
instructions (build commands, repo layout notes) have a place to
live without polluting the published guide.

**Alternatives considered:** (a) Remove `CLAUDE.md` entirely —
viable, but loses the agent-specific hook for future repo-level
instructions. (b) Leave `CLAUDE.md` duplicating the guide — rejected
because it perpetuates the drift problem the project exists to
solve.

## 2026-06-15 — Move the published page under `resources/`

**Decision:** Supersedes the 2026-06-13 and 2026-06-14 slug decisions.
The style guide is published at `resources/style-guide` (sourced from
`imsv-docs-astro/src/content/docs/resources/style-guide.mdoc`) and
appears in the existing "Resources" sidebar group via Starlight's
autogeneration. The provisional "Contributors" top-level sidebar
group is removed.

**Rationale:** "Resources" already hosts reference material the docs
audience reaches for (Postman collection, sandbox account, smart
contracts, supported-tokens tables). The style guide fits that shape
— it's a reference that contributors and partners consult while
authoring or reading docs. Promoting a separate "Contributors" group
overstates the section's volume (one page) and splits navigation for
no real benefit.

**Alternatives considered:** (a) Keep the new "Contributors" sidebar
group — rejected as premature: one page does not justify a top-level
group. Re-promote if a second contributor-facing page lands.
(b) Top-level `CONTRIBUTING.md` — already rejected on 2026-06-13 and
the reasoning still holds.

## 2026-06-17 — Published headings are not numbered

**Decision:** Section headings in the published guide are bare titles
(`## Casing`), not number-prefixed (`## 1. Casing`). The project plan
continues to use `§N` shorthand internally, but the published guide
never does.

**Rationale:** Numbered sections are pleasant for readers but high
maintenance for authors without auto-numbering tooling — inserting,
deleting, or reordering a section silently breaks every numbered
cross-reference, and the breakage is invisible until a reader chases
a dead link. Without LaTeX-style auto-numbering (which would need
plugin selection plus ongoing maintenance), the manual cost outweighs
the reader benefit.

**Alternatives considered:** (a) Manual numbering across the guide —
rejected as above. (b) An Astro/Markdoc auto-numbering plugin — out
of scope and adds a maintenance surface for marginal reader benefit.
(c) Number top-level sections only — still requires manual upkeep on
inserts and still leaks numbered refs into cross-links.

**How to apply:** Cross-references in published text use the section
name ("see *Terminology*", "per the casing rules"), never `§N`. The
plan's internal `§N` shorthand stays — it makes plan discussion
concise without leaking into the guide.

## 2026-06-17 — Bullet shape rule: label, paragraph, or labeled paragraph

**Decision:** Every list in the guide picks one bullet shape and
stays consistent. Three shapes are valid:

- **Pure label** — Title Case, no trailing period. The bullet names a
  category, term, or value.
- **Pure paragraph** — sentence case, full sentence with trailing
  period. The bullet states or describes a thing.
- **Labeled paragraph** — **Bold Label** followed by an em-dash or a
  colon, then a sentence-case body ending in a period.

Mixing shapes within one list is the failure mode.

**Rationale:** Shape signals what kind of content the bullet carries;
consistency lets readers scan one shape at a time. Bolding the label
in the labeled-paragraph shape gives the eye an anchor — without
weight contrast, the label/body boundary becomes invisible. Allowing
both em-dash and colon as the separator matches existing house
preference without forcing one stylistic choice.

The §5 Figures and Captions rule (captions are label-or-paragraph)
is a direct application of this rule to caption text.

**Alternatives considered:** (a) Restrict to pure-label-or-pure-
paragraph — rejected, the labeled-paragraph shape is genuinely
useful (e.g. the *Correct Spelling / Incorrect Spelling* list in §2
English Variant). (b) Allow unbolded labels with separator — rejected,
the label boundary becomes invisible without weight contrast.
(c) Mandate one separator (em-dash only, or colon only) — rejected
as a stylistic constraint with no functional benefit.

**How to apply:** Decide a list's shape before writing the first
bullet. On review, treat shape mismatches as defects — fix the
inconsistent bullet or convert the whole list to the dominant shape.
