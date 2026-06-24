# Documentation Style Guide

**Lead:** Nathan Jones
**Started:** 2026-06-13
**Status:** Active
**Document:** https://app.notion.com/p/37d1d446ed8a81d28077d444ba1fd8ed

## Problem

`immersve-docs` grows by ad-hoc contributions from engineers and AI agents.
There is no committed source of truth for tone, casing, terminology,
structure, or markup conventions, so each contributor invents (or forgets)
house style. The result is visible inconsistency across pages, and two
pieces of existing guidance — an uncommitted `CLAUDE.md` at the repo root
and a Notion brainstorm page — have been drifting unpublished for the
better part of two years.

## Scope

This project covers publishing a contributor-facing style guide on the docs
site, organised into ten sections matching the scope laid out in the Notion
artifact. The full section list with rationale lives in that document; this
brief restates only what's load-bearing for project continuity.

In scope:

- A new page on the docs site under the `resources/` slug
  (`resources/style-guide`)
- Ten sections in priority order: Casing, English Variant, Headings and
  Document Structure, Links, Figures and Captions, Code Samples,
  Terminology, Prose Conventions, OpenAPI Authoring, URLs and Redirects
- A short proper-noun and domain-resource glossary used by §1 Casing and
  §7 Terminology
- Slimming or replacing the uncommitted `CLAUDE.md` so there is one source
  of truth that both humans and AI agents read

Out of scope (deferred to follow-up work, in rough priority order):

- Sweeping existing docs to comply with the new guide — handled by the
  *Ubiquitous Title Case* and *Code Captions* sibling projects
- Tooling, linting, or CI checks for style compliance
- API design guidance (URL structure, request/response shape, HTTP
  semantics) — that belongs to the engineering API Design corpus, not the
  docs style guide
- Changes to OpenAPI-generated reference doc style beyond what the §9
  OpenAPI Authoring section captures

## Success Criteria

- A reader (engineer or AI agent) can navigate to the published guide,
  read it in one sitting, and apply its rules to a new docs PR without
  further questions.
- The two sibling projects (*Ubiquitous Title Case*, *Code Captions*) can
  point at a committed style guide section as the rule their changes
  enforce.
- `CLAUDE.md` either delegates to the guide or is replaced by it — one
  source of truth for humans and agents both.

## Dependencies

- No upstream blockers.
- Downstream: *Ubiquitous Title Case* depends on §1 Casing landing. *Code
  Captions* depends on §5 Figures and Captions landing. Stage 1 of this
  project unblocks both.
