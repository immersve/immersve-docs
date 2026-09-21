#!/bin/bash
#
# Build the site at two git refs and diff the output.
#
#   scripts/build-diff.sh [options] [BASE_REF] [HEAD_REF]
#
#   BASE_REF   git ref to build as the baseline      (default: origin/main)
#   HEAD_REF   git ref to build as the candidate, or the literal word
#              "worktree" for the current working tree including
#              uncommitted changes                    (default: worktree)
#
# Options:
#   --full      run ./build.sh (docusaurus + astro) instead of the astro
#               build only. Slow: regenerates the API reference.
#   --verbose   print unified diffs of changed files after the summary
#   --keep      keep the temporary build directory (path is printed)
#   -h, --help  this text
#
# Refs are built in throw-away `git worktree add --detach` checkouts; the
# working tree itself is only touched when HEAD_REF is "worktree", and even
# then only to run `yarn install` and an astro build into a temp directory.
# The user's checkout is never switched, stashed or cleaned.
#
# Known nondeterminism is normalised before diffing (see
# scripts/build-diff-normalise.mjs): content-hashed filenames under _astro/
# and every reference to them, and pagefind's hash-named search fragments,
# which are decoded and renamed by page URL. Nothing else is touched, so a
# real change to any of those files still shows up.
#
# Exit status: 0 when the two builds are identical, 1 when they differ,
# 2 on usage or build errors.

set -euo pipefail

usage() { sed -n '2,/^$/p' "$0" | sed 's/^# \{0,1\}//'; }

FULL=0
VERBOSE=0
KEEP=0
POSITIONAL=()
while [ $# -gt 0 ]; do
  case "$1" in
    --full) FULL=1 ;;
    --verbose) VERBOSE=1 ;;
    --keep) KEEP=1 ;;
    -h|--help) usage; exit 0 ;;
    -*) echo "unknown option: $1" >&2; usage >&2; exit 2 ;;
    *) POSITIONAL+=("$1") ;;
  esac
  shift
done
BASE_REF="${POSITIONAL[0]:-origin/main}"
HEAD_REF="${POSITIONAL[1]:-worktree}"

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
NORMALISE="$REPO_ROOT/scripts/build-diff-normalise.mjs"

TMP="$(mktemp -d "${TMPDIR:-/tmp}/build-diff.XXXXXX")"
WORKTREES=()

cleanup() {
  local status=$?
  for wt in "${WORKTREES[@]+"${WORKTREES[@]}"}"; do
    git -C "$REPO_ROOT" worktree remove --force "$wt" >/dev/null 2>&1 || true
  done
  if [ "$KEEP" = 1 ]; then
    echo "kept build directory: $TMP"
  else
    rm -rf "$TMP"
  fi
  exit "$status"
}
trap cleanup EXIT

log() { echo "==> $*" >&2; }

# checkout_ref REF DIR — detached worktree of REF at DIR
checkout_ref() {
  local ref="$1" dir="$2"
  log "checking out $ref into $dir"
  git -C "$REPO_ROOT" worktree add --detach --quiet "$dir" "$ref"
  WORKTREES+=("$dir")
}

# build_tree SRC_DIR OUT_DIR SIDE LABEL — install + build the tree at SRC_DIR
# into OUT_DIR; SIDE (a|b) names the log file, LABEL is for messages.
build_tree() {
  local src="$1" out="$2" side="$3" label="$4"
  local logfile="$TMP/build-$side.log"
  log "installing dependencies for $label"
  if ! (cd "$src" && yarn install) > "$logfile" 2>&1; then
    echo "yarn install failed for $label; log: $logfile" >&2
    tail -20 "$logfile" >&2
    exit 2
  fi
  log "building $label"
  if [ "$FULL" = 1 ]; then
    if ! (cd "$src" && ./build.sh) >> "$logfile" 2>&1; then
      echo "./build.sh failed for $label; log: $logfile" >&2
      tail -20 "$logfile" >&2
      exit 2
    fi
    cp -R "$src/dist" "$out"
  else
    if ! (cd "$src" && yarn workspace imsv-docs-astro exec astro build --outDir "$out") >> "$logfile" 2>&1; then
      echo "astro build failed for $label; log: $logfile" >&2
      tail -20 "$logfile" >&2
      exit 2
    fi
  fi
}

# --- build A ---------------------------------------------------------------
checkout_ref "$BASE_REF" "$TMP/src-a"
build_tree "$TMP/src-a" "$TMP/out-a" a "A ($BASE_REF)"

# --- build B ---------------------------------------------------------------
if [ "$HEAD_REF" = worktree ]; then
  build_tree "$REPO_ROOT" "$TMP/out-b" b "B (working tree)"
else
  checkout_ref "$HEAD_REF" "$TMP/src-b"
  build_tree "$TMP/src-b" "$TMP/out-b" b "B ($HEAD_REF)"
fi

# --- normalise + diff ------------------------------------------------------
log "normalising"
node "$NORMALISE" "$TMP/out-a" "$TMP/norm-a"
node "$NORMALISE" "$TMP/out-b" "$TMP/norm-b"

set +e
BRIEF="$(cd "$TMP" && diff -rq norm-a norm-b)"
DIFF_STATUS=$?
set -e
if [ "$DIFF_STATUS" -gt 1 ]; then
  echo "diff failed:" >&2
  echo "$BRIEF" >&2
  exit 2
fi

ONLY_A="$(printf '%s\n' "$BRIEF" | grep -c '^Only in norm-a' || true)"
ONLY_B="$(printf '%s\n' "$BRIEF" | grep -c '^Only in norm-b' || true)"
CHANGED="$(printf '%s\n' "$BRIEF" | grep -c ' differ$' || true)"

echo
echo "build-diff: A=$BASE_REF  B=$HEAD_REF$([ "$FULL" = 1 ] && echo '  (full build)')"
echo "build-diff: only-in-A=$ONLY_A only-in-B=$ONLY_B changed=$CHANGED"

if [ "$DIFF_STATUS" = 0 ]; then
  echo "build-diff: IDENTICAL"
  exit 0
fi

echo
printf '%s\n' "$BRIEF" \
  | sed -e 's#^Only in norm-a: #only in A: #' \
        -e 's#^Only in norm-a/\([^:]*\): #only in A: \1/#' \
        -e 's#^Only in norm-b: #only in B: #' \
        -e 's#^Only in norm-b/\([^:]*\): #only in B: \1/#' \
        -e 's#^Files norm-a/\(.*\) and norm-b/.* differ$#changed:   \1#' \
  | sort

if [ "$VERBOSE" = 1 ]; then
  echo
  (cd "$TMP" && diff -ru norm-a norm-b) || true
fi

echo
echo "build-diff: DIFFERENT"
exit 1
