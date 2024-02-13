#!/bin/bash

set -euo pipefail

cd "$(dirname "$0")/.."

fix=no
astro_dir=imsv-docs-astro
docusaurus_dir=imsv-docs-docusaurus

while [[ $# -gt 0 ]]; do
  case $1 in
    --fix)
      fix="yes"
    ;;
  esac
  shift
done

function err_exit () {
  >&2 echo "$*"
  exit 1
}

failed=no
found_link_match=no
found_double_redirect=no
link_match_outcome="found (use --fix to replace)"
[[ "${fix}" == "yes" ]] && link_match_outcome=fixed

redirects_json="$(yq -o json "${astro_dir}/src/redirects.yml")"
redirect_from_paths="$(echo "${redirects_json}" | jq -r 'keys | .[]')"

function replace_links () {
  old_link="$1"
  files="$2"
  new_link="$(echo "${redirects_json}" | jq -r ".[\"${old_link}\"]")"
  echo "replacing: ${old_link} -> ${new_link}"
  echo "${files}" | xargs sed -i.bak -e "s,${old_link},${new_link},g"
}

IFS=$'\n'
for redirect_from in ${redirect_from_paths}
do
  double_redirect_match="$(echo "${redirects_json}" | jq -r "to_entries[] | select(.value==\"${redirect_from}\") | .key")"
  if [[ -n "${double_redirect_match}" ]]; then
    echo "Double redirect via: ${redirect_from}, from:
$(echo "${double_redirect_match}" | awk '{ print "  " $0 }')"
    found_double_redirect=yes
  fi
done
[[ "${found_double_redirect}" == "yes" ]] && err_exit "Double redirects found"

IFS=$'\n'
for redirect_from in ${redirect_from_paths}
do
  link_match="$(grep \
    --exclude redirects.yml \
    --exclude "*.bak" \
    -rl "${redirect_from}" \
    "${astro_dir}/src" \
    "${docusaurus_dir}/openapi" \
      || true)"
  if [[ -n "${link_match}" ]]; then
    found_link_match=yes
    if [[ "${fix}" == "yes" ]]; then
      replace_links "${redirect_from}" "${link_match}"
    else
      echo "link to redirected page: ${redirect_from}"
      echo "${link_match}" | awk '{ print "  " $0 }'
    fi
  fi
done

[[ "${found_link_match}" == "yes" ]] && err_exit "Stale links ${link_match_outcome}"

echo "OK"
