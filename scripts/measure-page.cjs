#!/usr/bin/env node
'use strict';

/*
 * Repeatable browser-page measurement without installing packages.
 * Reports timing aggregates only; excludes bodies, cookies, local storage,
 * headers, and resource URLs.
 *
 * Usage:
 *   node scripts/measure-page.cjs --url https://example.com --width 390 --height 844 --runs 5 --observe-ms 3500
 *   node scripts/measure-page.cjs --url http://127.0.0.1:4173 --width 390 --height 844 --dpr 2 --mobile --touch --cold-cache --latency-ms 120 --download-kbps 1600 --upload-kbps 800
 *   node scripts/measure-page.cjs --url http://127.0.0.1:4173 --output ./page-metrics.json
 *
 * Requires an existing playwright or playwright-core package and Chromium.
 * Optional overrides: PLAYWRIGHT_CORE_PATH and PLAYWRIGHT_BROWSER_PATH.
 */

const fs = require('node:fs');
const path = require('node:path');

function usage(message) {
  if (message) process.stderr.write(message + '\n');
  process.stderr.write('Usage: node measure-page.cjs --url URL [--width 1366] [--height 768] [--dpr 1] [--mobile] [--touch] [--cold-cache] [--latency-ms 0] [--download-kbps 0] [--upload-kbps 0] [--runs 3] [--observe-ms 3000] [--output FILE] [--browser PATH] [--playwright-core PATH]\n');
  process.exit(message ? 1 : 0);
}

function parseArgs(argv) {
  const options = {
    width: 1366, height: 768, dpr: 1, mobile: false, touch: false, coldCache: false,
    latencyMs: 0, downloadKbps: 0, uploadKbps: 0, runs: 3, observeMs: 3000,
    output: null, browser: null, core: null, url: null
  };
  const mapping = {
    '--url': 'url', '--width': 'width', '--height': 'height', '--dpr': 'dpr',
    '--latency-ms': 'latencyMs', '--download-kbps': 'downloadKbps', '--upload-kbps': 'uploadKbps',
    '--runs': 'runs', '--observe-ms': 'observeMs', '--output': 'output',
    '--browser': 'browser', '--playwright-core': 'core'
  };
  const flags = { '--mobile': 'mobile', '--touch': 'touch', '--cold-cache': 'coldCache' };
  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    if (key === '--help' || key === '-h') usage();
    if (Object.hasOwn(flags, key)) {
      options[flags[key]] = true;
      continue;
    }
    if (!Object.hasOwn(mapping, key) || i + 1 >= argv.length) usage('Unknown or incomplete option.');
    options[mapping[key]] = argv[++i];
  }
  const limits = {
    width: [1, 10000], height: [1, 10000], runs: [1, 10000], observeMs: [1, 60000],
    latencyMs: [0, 120000], downloadKbps: [0, 8000000], uploadKbps: [0, 8000000]
  };
  for (const [name, [minimum, maximum]] of Object.entries(limits)) {
    options[name] = Number(options[name]);
    if (!Number.isInteger(options[name]) || options[name] < minimum || options[name] > maximum) usage('Invalid --' + name.replace(/[A-Z]/g, m => '-' + m.toLowerCase()));
  }
  options.dpr = Number(options.dpr);
  if (!Number.isFinite(options.dpr) || options.dpr < 0.5 || options.dpr > 4) usage('Invalid --dpr');
  if (!options.url) usage('Missing --url');
  let parsed;
  try { parsed = new URL(options.url); } catch (_) { usage('Invalid --url'); }
  if (!['http:', 'https:'].includes(parsed.protocol)) usage('--url must use http or https');
  return options;
}

function loadChromium(options) {
  // Resolve from the consuming project, even when this skill lives elsewhere.
  const explicit = options.core || process.env.PLAYWRIGHT_CORE_PATH;
  let modulePath;
  if (explicit) {
    modulePath = require.resolve(path.resolve(explicit));
  } else {
    for (const name of ['playwright', 'playwright-core']) {
      try {
        modulePath = require.resolve(name, { paths: [process.cwd(), __dirname] });
        break;
      } catch (error) {
        if (error.code !== 'MODULE_NOT_FOUND') throw error;
      }
    }
  }
  if (!modulePath) throw new Error('Use an existing Playwright project or pass --playwright-core PATH.');
  const chromium = require(modulePath).chromium;
  const browser = options.browser || process.env.PLAYWRIGHT_BROWSER_PATH || chromium.executablePath();
  if (!fs.existsSync(browser)) throw new Error('Point --browser at an installed Chromium executable.');
  return { chromium, browser };
}
function median(values) {
  const sorted = values.filter(Number.isFinite).sort((a, b) => a - b);
  if (!sorted.length) return null;
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : Math.round((sorted[middle - 1] + sorted[middle]) / 2);
}

async function measureRun(browser, options) {
  const context = await browser.newContext({
    viewport: { width: options.width, height: options.height },
    deviceScaleFactor: options.dpr,
    isMobile: options.mobile,
    hasTouch: options.touch
  });
  const page = await context.newPage();
  let pageErrors = 0;
  page.on('pageerror', () => { pageErrors += 1; });
  try {
    const throttle = options.latencyMs > 0 || options.downloadKbps > 0 || options.uploadKbps > 0;
    try {
      if (options.coldCache || throttle) {
        const cdp = await context.newCDPSession(page);
        if (options.coldCache) await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
        if (throttle) {
          await cdp.send('Network.emulateNetworkConditions', {
            offline: false,
            latency: options.latencyMs,
            downloadThroughput: options.downloadKbps ? options.downloadKbps * 125 : -1,
            uploadThroughput: options.uploadKbps ? options.uploadKbps * 125 : -1
          });
        }
      }
    } catch (error) {
      return { success: false, httpStatus: null, fcpMs: null, lcpMs: null, lcpStatus: 'missing', ttfbMs: null, navigationStatus: 'environment_error', resourceCount: null, transferBytes: null, decodedBytes: null, pageErrors: 0, environmentError: error.name || 'configuration_error' };
    }
    await page.addInitScript(() => {
      window.__measureLcp = [];
      try {
        new PerformanceObserver(list => {
          for (const entry of list.getEntries()) window.__measureLcp.push(Math.round(entry.startTime));
        }).observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (_) { window.__measureLcpUnavailable = true; }
    });
    const response = await page.goto(options.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    const httpStatus = response ? response.status() : null;
    if (httpStatus === null || httpStatus < 200 || httpStatus >= 300) {
      return { success: false, httpStatus, fcpMs: null, lcpMs: null, lcpStatus: 'missing', ttfbMs: null, navigationStatus: httpStatus === null ? 'missing_response' : 'http_error', resourceCount: null, transferBytes: null, decodedBytes: null, pageErrors };
    }
    await page.waitForTimeout(options.observeMs);
    const observation = await page.evaluate(httpStatus => {
      const nav = performance.getEntriesByType('navigation')[0];
      const resources = performance.getEntriesByType('resource');
      const firstPaint = performance.getEntriesByName('first-contentful-paint', 'paint')[0];
      const transferBytes = resources.reduce((sum, entry) => sum + (entry.transferSize || 0), 0);
      const decodedBytes = resources.reduce((sum, entry) => sum + (entry.decodedBodySize || 0), 0);
      return {
        success: true,
        httpStatus,
        fcpMs: firstPaint ? Math.round(firstPaint.startTime) : null,
        lcpMs: window.__measureLcp && window.__measureLcp.length ? window.__measureLcp[window.__measureLcp.length - 1] : null,
        lcpStatus: window.__measureLcpUnavailable ? 'unsupported' : (window.__measureLcp && window.__measureLcp.length ? 'observed' : 'missing'),
        ttfbMs: nav && Number.isFinite(nav.responseStart) ? Math.round(nav.responseStart - nav.startTime) : null,
        navigationStatus: nav ? 'observed' : 'missing',
        resourceCount: resources.length,
        transferBytes,
        decodedBytes,
        pageErrors: null
      };
    }, httpStatus);
    observation.pageErrors = pageErrors;
    return observation;
  } catch (error) {
    const navigationError = error.name || 'navigation_error';
    return { success: false, httpStatus: null, fcpMs: null, lcpMs: null, lcpStatus: 'missing', ttfbMs: null, navigationStatus: navigationError, resourceCount: null, transferBytes: null, decodedBytes: null, pageErrors };
  } finally {
    await context.close();
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const runtime = loadChromium(options);
  const browser = await runtime.chromium.launch({ headless: true, executablePath: runtime.browser });
  try {
    const samples = [];
    for (let index = 0; index < options.runs; index += 1) samples.push(await measureRun(browser, options));
    const successful = samples.filter(sample => sample.success);
    const report = {
      measuredAt: new Date().toISOString(),
      target: { origin: new URL(options.url).origin, viewport: { width: options.width, height: options.height }, runs: options.runs, observeMs: options.observeMs },
      conditions: {
        chromiumVersion: browser.version(),
        deviceScaleFactor: options.dpr,
        isMobile: options.mobile,
        hasTouch: options.touch,
        cacheDisabled: options.coldCache,
        network: options.latencyMs || options.downloadKbps || options.uploadKbps
          ? {
            latencyMs: options.latencyMs,
            downloadKbps: options.downloadKbps || null,
            uploadKbps: options.uploadKbps || null
          }
          : null
      },
      samples,
      median: {
        fcpMs: median(successful.map(sample => sample.fcpMs)),
        lcpMs: median(successful.map(sample => sample.lcpMs)),
        ttfbMs: median(successful.map(sample => sample.ttfbMs)),
        transferBytes: median(successful.map(sample => sample.transferBytes)),
        decodedBytes: median(successful.map(sample => sample.decodedBytes)),
        resourceCount: median(successful.map(sample => sample.resourceCount))
      },
      missing: {
        fcpSamples: successful.filter(sample => sample.fcpMs === null).length,
        lcpSamples: successful.filter(sample => sample.lcpMs === null).length,
        ttfbSamples: successful.filter(sample => sample.ttfbMs === null).length,
        failedNavigations: samples.filter(sample => !sample.success && sample.navigationStatus !== 'environment_error').length,
        httpErrorSamples: samples.filter(sample => sample.navigationStatus === 'http_error').length,
        environmentErrorSamples: samples.filter(sample => sample.navigationStatus === 'environment_error').length
      },
      successfulSamples: successful.length,
      notes: [
        'Each sample uses a new browser context.',
        'Only completed samples with a final HTTP 2xx response contribute to medians.',
        'Cold-cache disables browser cache for the sample. New contexts also start without cookies and local storage.',
        'Network conditions use Chromium laboratory emulation. Download and upload limits can be set separately in decimal kilobits per second.',
        'FCP and LCP start at navigation start. The script waits for DOMContentLoaded, then observes for observeMs, so late LCP candidates can be collected within that window.',
        'Only aggregate timing and byte observations are recorded. Page bodies, cookies, local storage, response headers, and resource URLs are excluded.'
      ]
    };
    const serialized = JSON.stringify(report, null, 2) + '\n';
    if (options.output) {
      fs.mkdirSync(path.dirname(path.resolve(options.output)), { recursive: true });
      fs.writeFileSync(options.output, serialized, { encoding: 'utf8', mode: 0o600, flag: 'wx' });
    }
    process.stdout.write(serialized);
    if (!successful.length) process.exitCode = 1;
  } finally { await browser.close(); }
}

main().catch(error => { process.stderr.write((error && error.message ? error.message : String(error)) + '\n'); process.exitCode = 1; });
