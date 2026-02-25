import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildCspLine, extractInlineScripts, hashScript } from './lib/csp-utils.mjs';

const DIST_DIR = new URL('../dist', import.meta.url);

const SCRIPT_SRC_ALLOWLIST = ["'self'"];
const STYLE_SRC = "style-src 'self'";
const OTHER_DIRECTIVES = [
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "object-src 'none'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self'",
  "media-src 'self'",
  'upgrade-insecure-requests',
  'block-all-mixed-content',
];

const STATIC_HEADERS = [
  'X-Content-Type-Options: nosniff',
  'Referrer-Policy: strict-origin-when-cross-origin',
  'X-Frame-Options: DENY',
  'X-XSS-Protection: 0',
  'Permissions-Policy: accelerometer=(), autoplay=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
  'Cross-Origin-Resource-Policy: same-origin',
  'Cross-Origin-Opener-Policy: same-origin',
  'Cross-Origin-Embedder-Policy: require-corp',
  'Strict-Transport-Security: max-age=63072000; includeSubDomains; preload',
  'Cache-Control: public, max-age=0, must-revalidate',
];

const walkHtmlFiles = async (dir, files = []) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const resolved = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkHtmlFiles(resolved, files);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(resolved);
    }
  }
  return files;
};

const main = async () => {
  const distPath = fileURLToPath(DIST_DIR);
  const outputFilePath = path.join(distPath, '_headers');
  const htmlFiles = await walkHtmlFiles(distPath);

  if (htmlFiles.length === 0) {
    throw new Error('No HTML files found in dist/. Run the Astro build before generating CSP.');
  }

  const hashes = new Set();

  for (const file of htmlFiles) {
    const html = await fs.readFile(file, 'utf8');
    const inlineScripts = extractInlineScripts(html);
    inlineScripts.forEach((script) => hashes.add(hashScript(script)));
  }

  const sortedHashes = Array.from(hashes).sort();
  const cspLine = buildCspLine({
    otherDirectives: OTHER_DIRECTIVES,
    scriptSrcAllowlist: SCRIPT_SRC_ALLOWLIST,
    styleSrc: STYLE_SRC,
    scriptHashes: sortedHashes,
  });

  const headerLines = ['/*', `  ${cspLine}`, ...STATIC_HEADERS.map((h) => `  ${h}`), '*/', ''];

  await fs.mkdir(path.dirname(outputFilePath), { recursive: true });
  await fs.writeFile(outputFilePath, headerLines.join('\n'), 'utf8');

  console.log(
    `Generated dist/_headers with ${sortedHashes.length} inline script hash(es) for CSP.`
  );
};

await main();
