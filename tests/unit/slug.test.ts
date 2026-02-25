import { describe, expect, it } from 'vitest';
import { slugify } from '../../src/utils/slug';

describe('slugify', () => {
  it('converts title-like strings to URL slugs', () => {
    expect(slugify('Truth over tribe')).toBe('truth-over-tribe');
  });

  it('normalizes spacing and punctuation', () => {
    expect(slugify('  One call. One meeting. One calm conversation.  ')).toBe(
      'one-call-one-meeting-one-calm-conversation'
    );
  });
});
