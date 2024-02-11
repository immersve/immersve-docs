#!/bin/bash

set -euo pipefail

cd "$(dirname "$0")"

yarn workspace imsv-docs-docusaurus build
yarn workspace imsv-docs-astro build --outDir "$(pwd)/dist"
# RSync is necessary because Astro build generates api-reference redirects for
# paths that overlap with the Docusaurus build output. A simple move is not
# able to resolve the conflicts.
rsync -r imsv-docs-docusaurus/build/ dist/api-reference/
