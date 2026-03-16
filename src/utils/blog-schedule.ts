const SITE_TIME_ZONE = 'America/Chicago';

function toDateKey(value: string): string | null {
  const directMatch = value.match(/^(\d{4}-\d{2}-\d{2})/);
  if (directMatch) return directMatch[1];

  const parsed = new Date(value);
  if (Number.isNaN(parsed.valueOf())) return null;

  return new Intl.DateTimeFormat('en-CA', {
    timeZone: SITE_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(parsed);
}

function getTodayKey(now: Date): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: SITE_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
}

export function parseShowFutureOverride(search: string | undefined): boolean {
  const params = new globalThis.URLSearchParams(search ?? '');
  return ['1', 'true', 'yes'].includes((params.get('showFuture') || '').toLowerCase());
}

export function shouldShowScheduledPost(
  pubDate: string,
  showFuture: boolean,
  earlyReleaseOrNow: boolean | Date = false,
  now: Date = new Date()
): boolean {
  const pubDateKey = toDateKey(pubDate);
  if (!pubDateKey) return false;

  const earlyRelease = typeof earlyReleaseOrNow === 'boolean' ? earlyReleaseOrNow : false;
  const effectiveNow = earlyReleaseOrNow instanceof Date ? earlyReleaseOrNow : now;

  return showFuture || earlyRelease || pubDateKey <= getTodayKey(effectiveNow);
}
