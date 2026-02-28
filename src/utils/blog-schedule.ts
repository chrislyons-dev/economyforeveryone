export function parseShowFutureOverride(search: string | undefined, isDev: boolean): boolean {
  if (!isDev) return false;
  const params = new globalThis.URLSearchParams(search ?? '');
  return ['1', 'true', 'yes'].includes((params.get('showFuture') || '').toLowerCase());
}

export function shouldShowScheduledPost(
  pubDate: string,
  showFuture: boolean,
  now: Date = new Date()
): boolean {
  const pubTime = new Date(pubDate).valueOf();
  if (Number.isNaN(pubTime)) return false;

  const today = new Date(now);
  today.setHours(23, 59, 59, 999);

  return showFuture || pubTime <= today.valueOf();
}

export function getScheduledLinkState(
  pubDate: string | undefined,
  showFuture: boolean,
  now: Date = new Date()
): 'live' | 'coming-soon' | 'unknown' {
  if (!pubDate) return 'unknown';
  if (showFuture) return 'live';

  const releaseDate = new Date(`${pubDate}T00:00:00`);
  if (Number.isNaN(releaseDate.getTime())) return 'unknown';

  const today = new Date(now);
  today.setHours(0, 0, 0, 0);

  return releaseDate <= today ? 'live' : 'coming-soon';
}
