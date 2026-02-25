import { describe, expect, it } from 'vitest';
import { isNavActive } from '../../src/utils/nav';

describe('isNavActive', () => {
  it('matches root exactly', () => {
    expect(isNavActive('/', '/')).toBe(true);
    expect(isNavActive('/about', '/')).toBe(false);
  });

  it('matches exact route', () => {
    expect(isNavActive('/case-studies', '/case-studies')).toBe(true);
  });

  it('matches nested route under section', () => {
    expect(isNavActive('/blog/my-post', '/blog')).toBe(true);
  });

  it('does not match partial prefix collisions', () => {
    expect(isNavActive('/blogger', '/blog')).toBe(false);
  });
});
