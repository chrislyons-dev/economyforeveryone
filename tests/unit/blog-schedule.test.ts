import { describe, expect, it } from 'vitest';
import {
  getScheduledLinkState,
  parseShowFutureOverride,
  shouldShowScheduledPost,
} from '../../src/utils/blog-schedule';

describe('blog schedule helpers', () => {
  it('parses showFuture override only in dev', () => {
    expect(parseShowFutureOverride('?showFuture=1', true)).toBe(true);
    expect(parseShowFutureOverride('?showFuture=yes', true)).toBe(true);
    expect(parseShowFutureOverride('?showFuture=1', false)).toBe(false);
    expect(parseShowFutureOverride('', true)).toBe(false);
  });

  it('hides future posts unless override is enabled', () => {
    const now = new Date('2026-02-28T12:00:00Z');
    expect(shouldShowScheduledPost('2026-03-03', false, now)).toBe(false);
    expect(shouldShowScheduledPost('2026-02-28', false, now)).toBe(true);
    expect(shouldShowScheduledPost('2026-03-03', true, now)).toBe(true);
  });

  it('classifies scheduled blog links as live or coming soon', () => {
    const now = new Date('2026-02-28T12:00:00Z');
    expect(getScheduledLinkState('2026-03-03', false, now)).toBe('coming-soon');
    expect(getScheduledLinkState('2026-02-28', false, now)).toBe('live');
    expect(getScheduledLinkState('2026-03-03', true, now)).toBe('live');
    expect(getScheduledLinkState(undefined, false, now)).toBe('unknown');
  });
});
