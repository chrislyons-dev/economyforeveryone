import crypto from 'node:crypto';

export function extractInlineScripts(html) {
  const inlineScripts = [];
  const scriptRegex = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = scriptRegex.exec(html))) {
    const body = match[1];
    if (body.trim()) inlineScripts.push(body);
  }
  return inlineScripts;
}

export function hashScript(content) {
  return `sha256-${crypto.createHash('sha256').update(content, 'utf8').digest('base64')}`;
}

export function buildCspLine({ otherDirectives, scriptSrcAllowlist, styleSrc, scriptHashes }) {
  const scriptSrcParts = [...scriptSrcAllowlist, ...scriptHashes.map((hash) => `'${hash}'`)];
  const cspSegments = [...otherDirectives, `script-src ${scriptSrcParts.join(' ')}`, styleSrc];
  return `Content-Security-Policy: ${cspSegments.map((d) => `${d};`).join(' ')}`;
}
