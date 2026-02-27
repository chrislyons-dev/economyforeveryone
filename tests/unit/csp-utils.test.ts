import { describe, expect, it } from 'vitest';
import { buildCspLine, extractInlineScripts, hashScript } from '../../scripts/lib/csp-utils.mjs';

describe('csp-utils', () => {
  it('extracts only inline script bodies', () => {
    const html = `
      <script>window.a=1;</script>
      <script src="/bundle.js"></script>
      <script type="application/json">{}</script>
      <script> console.log("x") </script>
    `;
    const result = extractInlineScripts(html);
    expect(result).toHaveLength(3);
    expect(result[0]).toContain('window.a=1');
    expect(result[1]).toContain('{}');
  });

  it('hashes script content deterministically', () => {
    const a = hashScript("console.log('a')");
    const b = hashScript("console.log('a')");
    expect(a).toBe(b);
    expect(a.startsWith('sha256-')).toBe(true);
  });

  it('builds CSP line including hashes', () => {
    const csp = buildCspLine({
      otherDirectives: ["default-src 'self'"],
      scriptSrcAllowlist: ["'self'"],
      styleSrc: "style-src 'self'",
      scriptHashes: ['sha256-testhash'],
    });
    expect(csp).toContain("default-src 'self';");
    expect(csp).toContain("script-src 'self' 'sha256-testhash';");
    expect(csp).toContain("style-src 'self';");
  });
});
