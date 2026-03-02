import { describe, expect, it } from 'vitest';
import { parseShowFutureOverride, shouldShowScheduledPost } from '../../src/utils/blog-schedule';

describe('blog schedule helpers', () => {
  it('parses showFuture override from the query string', () => {
    expect(parseShowFutureOverride('?showFuture=1')).toBe(true);
    expect(parseShowFutureOverride('?showFuture=yes')).toBe(true);
    expect(parseShowFutureOverride('?showFuture=true')).toBe(true);
    expect(parseShowFutureOverride('')).toBe(false);
  });

  it('hides future posts unless override is enabled', () => {
    const now = new Date('2026-02-28T12:00:00Z');
    expect(shouldShowScheduledPost('2026-03-03', false, now)).toBe(false);
    expect(shouldShowScheduledPost('2026-02-28', false, now)).toBe(true);
    expect(shouldShowScheduledPost('2026-03-03', true, now)).toBe(true);
  });
});
