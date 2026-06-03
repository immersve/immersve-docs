# Progress: Partner Conducted KYC Guide Tidy-Up

**Current Status:** All four stages landed and pushed to draft PR #897.
The project is ready for review; once #897 merges, archive under
`_projects/archive/2026-06-partner-kyc-tidy-up/`.

## Last Session (2026-06-04)

- Completed: Stage 4 added `### Passport` to Supported Evidence Types
  (leading entry, mirroring the other three) and `## Full Statement
  Example` at the end of the page — a complete curl with DOB + Full Name +
  structured Address claims, passport evidence, and an `attachments` array
  using the file IDs returned from Upload Supporting Documents.
- Outcome: page closes with one comprehensive copy-paste example; all four
  evidence types are documented under Supported Evidence Types.

## Next Session

- Pick up from: PR #897 on GitHub. If reviewers leave comments, address
  them on `partner-kyc-tidy-up` and push.
- First task: after #897 merges, archive the project — collapse
  `progress.md` to a summary, move `_projects/active/partner-kyc-tidy-up/`
  to `_projects/archive/2026-06-partner-kyc-tidy-up/` on a new branch,
  open the archival PR, then `git worktree remove` the project worktree
  once merged.
