# Progress: Documentation Style Guide

**Current Status:** Stage 3 shipped onto PR #906. The guide now
covers §1 Casing, §2 English Variant, §3 Headings and Document
Structure (with Callouts), §4 Links, §5 Figures and Captions, §6
Code Samples, §7 Terminology, §9 OpenAPI Authoring, and §10 URLs
and Redirects. Paused awaiting Stage 4 approval.

## Last Session (2026-06-17)

- Completed: Stage 3 landed as three commits on
  `docs-style-guide-skeleton`, one per section. §6 codifies
  dependency-minimisation, single-purpose samples, the
  no-comments-in-response-payloads rule, and per-language
  conventions for bash, JSON, and JavaScript/TypeScript. §7
  introduces a glossary (endpoint vs API, webhook, Immersve) and
  becomes the authoritative home for the domain-resources list —
  §1 Casing now cites §7 rather than duplicating the list, so the
  rule and the list cannot drift apart. §9 codifies endpoint
  summary and description shape, attribute descriptions, enum
  versus open-string guidance, the `**Deprecated.**` prefix
  alongside `deprecated: true`, YAML indent and 80-column block-
  scalar wrapping, and the Markdown-link-syntax carve-out for
  inline links in OpenAPI descriptions.
- Outcome: code, reference, and OpenAPI rules now ship inside the
  published guide. All Stage 3 bullets in `plan.md` ticked.

## Next Session

- Pick up from:
  `/Users/nathan/code/immersve/worktrees/immersve-docs/documentation-style-guide`
  on branch `docs-style-guide-skeleton`.
- First task: **wait for user approval before starting Stage 4.**
  When approved, draft §8 Prose Conventions (no smart quotes, no
  single quotes in prose, sentence case for body prose, hard-wrap
  at 80, Oxford comma, no "this endpoint…", do not refer to
  endpoints as "APIs") and then mark the PR ready for review.
