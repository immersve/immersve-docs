#!/bin/bash
set -euo pipefail

function err_exit() {
  >&2 echo "$1"
  exit 1
}

deploy_json_file=./netlify-deploy.json
deploy_url="$(jq -r .deploy_ssl_url "${deploy_json_file}")"
echo "deploy_url=${deploy_url}"
