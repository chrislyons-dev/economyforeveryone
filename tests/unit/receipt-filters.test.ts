import { describe, expect, it } from 'vitest';
import { matchesReceiptFilters, splitFilterList } from '../../src/utils/receipt-filters';

describe('receipt filter helpers', () => {
  it('splits comma-delimited values cleanly', () => {
    expect(splitFilterList('housing, scarcity,  official-data')).toEqual([
      'housing',
      'scarcity',
      'official-data',
    ]);
  });

  it('matches an item when all filters line up', () => {
    expect(
      matchesReceiptFilters(
        {
          typeId: 'official-data',
          caseSlugs: 'housing-guardrails-and-squeeze',
          postSlugs: 'monthly-squeeze-housing',
          tags: 'housing,scarcity,zoning',
          search: 'housing scarcity upzoning throughput',
        },
        {
          type: 'official-data',
          caseSlug: 'housing-guardrails-and-squeeze',
          postSlug: 'monthly-squeeze-housing',
          tag: 'scarcity',
          search: 'upzoning',
        }
      )
    ).toBe(true);
  });

  it('rejects an item when any active filter misses', () => {
    expect(
      matchesReceiptFilters(
        {
          typeId: 'official-data',
          caseSlugs: 'housing-guardrails-and-squeeze',
          postSlugs: '',
          tags: 'housing,scarcity,zoning',
          search: 'housing scarcity upzoning throughput',
        },
        {
          type: 'official-data',
          caseSlug: 'housing-guardrails-and-squeeze',
          postSlug: 'monthly-squeeze-housing',
          tag: 'scarcity',
          search: 'upzoning',
        }
      )
    ).toBe(false);
  });
});
