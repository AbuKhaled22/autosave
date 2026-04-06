const fs = require('fs');
const path = require('path');

const root = path.join(process.cwd(), 'dist');
const files = [];
const MIN_DESC_LENGTH = 130;
const MAX_DESC_LENGTH = 155;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && (entry.name === 'index.html' || entry.name === '404.html')) files.push(full);
  }
}

walk(root);

function routeFrom(filePath) {
  const rel = path.relative(root, filePath).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  if (rel === '404.html') return '/404/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'/index.html'.length) + '/';
  return '/' + rel;
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getTagAttribute(tag, attributeName) {
  const pattern = new RegExp(`${attributeName}\\s*=\\s*(["'])([\\s\\S]*?)\\1`, 'i');
  return tag.match(pattern)?.[2] || '';
}

function getMetaContentByName(html, metaName) {
  const metaTags = html.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of metaTags) {
    const name = getTagAttribute(tag, 'name').toLowerCase();
    if (name === metaName.toLowerCase()) {
      return getTagAttribute(tag, 'content').trim();
    }
  }
  return '';
}

function decodeHtmlEntities(text) {
  return text
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

const pages = [];

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const route = routeFrom(file);
  const title = decodeHtmlEntities((html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || '').trim());

  const desc = decodeHtmlEntities(getMetaContentByName(html, 'description'));
  const robots = getMetaContentByName(html, 'robots').toLowerCase();

  const noindex = robots.includes('noindex');
  const canonical = (
    html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i)?.[1] || ''
  ).trim();

  const hreflangCount = (html.match(/<link[^>]*rel=["']alternate["'][^>]*hreflang=["'][^"']+["'][^>]*>/gi) || []).length;
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  const jsonLdCount = (html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>/gi) || []).length;
  const linkCount = (html.match(/<a\b/gi) || []).length;
  const wordCount = stripHtml(html).split(' ').filter(Boolean).length;
  const isRedirectDoc = /Redirecting to:|http-equiv="refresh"|window\.location\.replace/i.test(html);

  pages.push({
    route,
    file: path.relative(process.cwd(), file).replace(/\\/g, '/'),
    title,
    desc,
    titleLen: title.length,
    descLen: desc.length,
    noindex,
    canonical,
    hreflangCount,
    h1Count,
    jsonLdCount,
    linkCount,
    wordCount,
    isRedirectDoc,
  });
}

const indexable = pages.filter((p) => !p.noindex && !p.isRedirectDoc && !p.route.startsWith('/404'));

function dupGroups(rows, key) {
  const map = new Map();
  for (const r of rows) {
    const v = (r[key] || '').trim();
    if (!v) continue;
    const normalized = v.toLowerCase();
    if (!map.has(normalized)) map.set(normalized, []);
    map.get(normalized).push(r.route);
  }
  return [...map.entries()]
    .filter(([, routes]) => routes.length > 1)
    .map(([value, routes]) => ({ value, count: routes.length, sample: routes.slice(0, 10) }));
}

const dupTitles = dupGroups(indexable, 'title');
const dupDescs = dupGroups(indexable, 'desc');

const report = {
  stats: {
    totalPages: pages.length,
    indexablePages: indexable.length,
    noindexPages: pages.filter((p) => p.noindex).length,
    redirectDocs: pages.filter((p) => p.isRedirectDoc).length,
    missingTitle: indexable.filter((p) => !p.title).length,
    shortTitle: indexable.filter((p) => p.titleLen > 0 && p.titleLen < 30).length,
    longTitle: indexable.filter((p) => p.titleLen > 65).length,
    missingDesc: indexable.filter((p) => !p.desc).length,
    shortDesc: indexable.filter((p) => p.descLen > 0 && p.descLen < MIN_DESC_LENGTH).length,
    longDesc: indexable.filter((p) => p.descLen > MAX_DESC_LENGTH).length,
    missingCanonical: indexable.filter((p) => !p.canonical).length,
    missingH1: indexable.filter((p) => p.h1Count === 0).length,
    multiH1: indexable.filter((p) => p.h1Count > 1).length,
    lowWordCount: indexable.filter((p) => p.wordCount < 250).length,
    noSchema: indexable.filter((p) => p.jsonLdCount === 0).length,
    missingHreflang: indexable.filter((p) => p.hreflangCount < 2).length,
    duplicateTitleGroups: dupTitles.length,
    duplicateDescriptionGroups: dupDescs.length,
  },
  topIssues: {
    longTitle: indexable.filter((p) => p.titleLen > 65).slice(0, 40),
    shortDesc: indexable.filter((p) => p.descLen > 0 && p.descLen < MIN_DESC_LENGTH).slice(0, 40),
    longDesc: indexable.filter((p) => p.descLen > MAX_DESC_LENGTH).slice(0, 40),
    lowWordCount: indexable.filter((p) => p.wordCount < 250).slice(0, 60),
    noSchema: indexable.filter((p) => p.jsonLdCount === 0).slice(0, 40),
    missingHreflang: indexable.filter((p) => p.hreflangCount < 2).slice(0, 40),
    duplicateTitles: dupTitles.slice(0, 20),
    duplicateDescriptions: dupDescs.slice(0, 20),
  },
};

fs.writeFileSync(path.join(process.cwd(), 'SEO_SCAN_REPORT.json'), JSON.stringify(report, null, 2), 'utf8');
console.log('WROTE SEO_SCAN_REPORT.json');
console.log(JSON.stringify(report.stats, null, 2));
