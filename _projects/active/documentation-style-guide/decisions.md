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
