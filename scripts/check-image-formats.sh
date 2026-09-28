#!/bin/bash
#
# Fail if any image under imsv-docs-astro/src is not PNG, SVG or WebP, the
# only formats the site uses. Images are recognised by content type, and the
# content type has to agree with the file extension.

set -euo pipefail

cd "$(dirname "$0")/.."

status=0
while IFS= read -r file; do
  ext="$(printf '%s' "${file##*.}" | tr '[:upper:]' '[:lower:]')"
  mime="$(file --brief --mime-type "$file")"
  case "$ext:$mime" in
    png:image/png | webp:image/webp | svg:image/svg+xml) continue ;;
    # `file` reports some SVGs as generic XML or text.
    svg:text/xml | svg:text/plain) continue ;;
    png:* | webp:* | svg:* | *:image/*)
      echo "::error::Unsupported image format: $file. Use PNG, SVG or WebP."
      status=1
      ;;
  esac
done < <(find imsv-docs-astro/src -type f)

exit "$status"
