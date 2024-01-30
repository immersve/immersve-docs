#!/bin/bash
set -eo pipefail

while [[ $# -gt 0 ]]; do
  case $1 in
    --branch)
      shift
      branch="$1"
    ;;
    --dir)
      shift
      dir="$1"
    ;;
  esac
  shift
done

function err_exit () {
  >&2 echo "$*"
  exit 1
}

if [[ -z "${branch}" ]]; then
  err_exit missing arg: --branch
fi

if [[ -z "${dir}" ]]; then
  err_exit missing arg: --dir
fi

if [[ -z "${NETLIFY_TOKEN}" ]]; then
  err_exit missing env var: NETLIFY_TOKEN
fi

zip -rq site.zip "${dir}"

branch_name="${branch:0:30}"
site_id=0c58a1f7-64b8-46a1-8fde-fbc69e71449b
curl --fail-with-body \
  -X POST "https://api.netlify.com/api/v1/sites/${site_id}/deploys?branch=${branch_name}" \
  -H "Authorization: Bearer ${NETLIFY_TOKEN}" \
  -H "Content-Type: application/zip" \
  --data-binary @site.zip | tee netlify-deploy.json
