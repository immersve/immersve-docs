#!/usr/bin/env node

const buildNumber = [ 'GITHUB_RUN_NUMBER', 'GITHUB_RUN_ATTEMPT', 'GITHUB_RUN_ID']
  .map(envVar => process.env[envVar])
  .filter(x => x)
  .join('.');

const buildInfo = {
  buildNumber,
  commit: process.env['GITHUB_SHA'],
  timestamp: Date.now(),
};

console.log(JSON.stringify(buildInfo, null, 2));
