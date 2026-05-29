# Projects

This directory tracks multi-session initiatives in this repo. It exists so a
future coding session can reload the state of any in-flight project in a single
read.

## Directory Structure

```
_projects/
  README.md
  active/
    <project-name>/
      brief.md
      plan.md
      progress.md
      decisions.md
      design.md         # optional
  archive/
    <YYYY-MM>-<project-name>/
      (same files)
```

- **Active projects** use a kebab-case description, no date prefix
  (e.g. `api-gateway-refactor`).
- **Archived projects** prepend `<YYYY-MM>-` at archival time
  (e.g. `2026-03-api-gateway-refactor`).

Each project runs in its own dedicated git worktree at
`/workspace/worktrees/immersve-docs/<project-name>`. The primary worktree (the
one at `/workspace/immersve-docs`) stays on `main` and is reserved for
integration only — never edit project code there.

## The Four Files

The split is by **update cadence**, not by topic. Mixing cadences in one file is
what causes staleness.

- **`brief.md`** — written once at kickoff. Problem, scope (in and out), success
  criteria, dependencies, and a link to the external project document. Updated
  only when scope fundamentally changes.
- **`plan.md`** — written at kickoff and updated when the approach changes
  (not when tasks complete — checkboxes show task progress). Stages with
  observable "End state:" lines; atomic tasks within each stage; Open Questions
  and Known Risks.
- **`progress.md`** — updated at the **end of every session**. Primary continuity
  mechanism: one `Last Session` entry, one `Next Session` entry. Replace, don't
  accrete.
- **`decisions.md`** — append-only dated log of architectural or design
  decisions. Long archival value — explains *why* the code is the way it is.

## Optional file: `design.md`

Created at kickoff when the project inherits substantial design context
(external Notion design doc, cross-cutting principles, or forward-looking
design for deferred work). Skip when every design choice will be a fresh dated
decision made during execution. Thematically organized — not chronological.

## Commit Discipline

Every commit on a project branch advances the plan. The plan update that
reflects the advance — at minimum a checkbox flip in `plan.md` — belongs in
the same commit, not a follow-up doc commit.
