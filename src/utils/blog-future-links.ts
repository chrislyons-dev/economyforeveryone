export function normalizeBlogSlugFromHref(href: string): string {
  return href
    .replace(/^\/blog\//, '')
    .replace(/\/$/, '')
    .trim();
}

export function downgradeFutureBlogLinks(
  root: { querySelectorAll: (selector: string) => Iterable<unknown> },
  postPubDates: Map<string, string>
): number {
  let updated = 0;
  const now = new Date();

  for (const candidate of Array.from(root.querySelectorAll('a[href^="/blog/"]'))) {
    if (!candidate || typeof candidate !== 'object') continue;
    if (!('getAttribute' in candidate) || !('replaceWith' in candidate)) continue;
    if (!('textContent' in candidate)) continue;

    const link = candidate as {
      getAttribute: (name: string) => string | null;
      replaceWith: (...nodes: unknown[]) => void;
      textContent: string | null;
    };

    const href = link.getAttribute('href') || '';
    const normalized = normalizeBlogSlugFromHref(href);
    if (!normalized) continue;

    const pubDateStr = postPubDates.get(normalized);
    if (!pubDateStr || new Date(pubDateStr) <= now) continue;

    const label = (link.textContent || '').trim();
    const text = globalThis.document.createElement('span');
    text.className = 'coming-soon-link';
    text.textContent = label;

    const note = globalThis.document.createElement('span');
    note.className = 'coming-soon-note';
    note.textContent = ' (coming soon)';

    link.replaceWith(text, note);
    updated += 1;
  }

  return updated;
}
