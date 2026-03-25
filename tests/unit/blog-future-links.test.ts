/* global document */
// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest';
import {
  downgradeFutureBlogLinks,
  normalizeBlogSlugFromHref,
} from '../../src/utils/blog-future-links';

describe('blog future links helpers', () => {
  it('normalizes blog slugs from href values', () => {
    expect(normalizeBlogSlugFromHref('/blog/monthly-squeeze-housing/')).toBe(
      'monthly-squeeze-housing'
    );
    expect(normalizeBlogSlugFromHref('/blog/monthly-squeeze-summary')).toBe(
      'monthly-squeeze-summary'
    );
  });

  it('downgrades only future-dated blog links into coming-soon text', () => {
    document.body.innerHTML = `
      <div id="content">
        <a href="/blog/monthly-squeeze-housing/">Housing: The Bill That Sets the Whole Month on Fire</a>
        <a href="/blog/monthly-squeeze-series-index/">The Monthly Squeeze Series</a>
        <a href="/case-studies/housing-guardrails-and-squeeze/">Housing Case Study</a>
      </div>
    `;

    const root = document.getElementById('content');
    expect(root).toBeTruthy();
    if (!root) return;

    const futureDate = new Date(Date.now() + 86_400_000).toISOString();
    const pubDates = new Map([
      ['monthly-squeeze-housing', futureDate],
      ['monthly-squeeze-series-index', new Date(Date.now() - 86_400_000).toISOString()],
    ]);
    const updated = downgradeFutureBlogLinks(root, pubDates);
    expect(updated).toBe(1);

    expect(root.querySelector('a[href="/blog/monthly-squeeze-housing/"]')).toBeNull();
    expect(root.querySelector('.coming-soon-link')?.textContent).toBe(
      'Housing: The Bill That Sets the Whole Month on Fire'
    );
    expect(root.querySelector('.coming-soon-note')?.textContent).toBe(' (coming soon)');

    expect(root.querySelector('a[href="/blog/monthly-squeeze-series-index/"]')?.textContent).toBe(
      'The Monthly Squeeze Series'
    );
    expect(
      root.querySelector('a[href="/case-studies/housing-guardrails-and-squeeze/"]')?.textContent
    ).toBe('Housing Case Study');
  });
});
