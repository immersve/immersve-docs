import { readFileSync } from 'node:fs';
import { describe, expect } from 'vitest';
import { parse } from 'yaml';
import { ContentRegistry } from '../ContentRegistry.mjs';

const SCHEMA_PATH = new URL(
  '../../../../imsv-docs-docusaurus/openapi/endpoints/funding-channel/models/create-funding-channel.yaml',
  import.meta.url,
);

function fundingTypeNameEnum() {
  const schema = parse(readFileSync(SCHEMA_PATH, 'utf8'));
  return schema.properties.fundingTypeName.enum;
}

describe('funding type names', () => {

  test('the create funding channel enum matches the documented funding types', async () => {
    const registry = await ContentRegistry.create();
    const documented = registry.allFundingTypes().map(fundingType => fundingType.name);
    expect(fundingTypeNameEnum().sort()).toEqual(documented.sort());
  });

});
