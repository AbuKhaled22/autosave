import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const backupRootDir = path.join(projectRoot, 'backup', 'noindex-pages');

function getRunStamp() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

function normalizeRoutePath(pathname) {
  if (!pathname.startsWith('/')) {
    pathname = `/${pathname}`;
  }

  if (pathname !== '/' && !pathname.endsWith('/')) {
    pathname = `${pathname}/`;
  }

  return pathname;
}

function routeFromRelativeHtmlPath(relativePath) {
  const posixPath = relativePath.split(path.sep).join('/');

  if (posixPath === 'index.html') {
    return '/';
  }

  if (posixPath.endsWith('/index.html')) {
    return normalizeRoutePath(`/${posixPath.slice(0, -'/index.html'.length)}`);
  }

  return normalizeRoutePath(`/${posixPath.replace(/\.html$/i, '')}`);
}

function hasNoindexMeta(html) {
  const metaTags = html.match(/<meta\b[^>]*>/gi) ?? [];

  return metaTags.some((tag) => {
    const isRobotsMeta = /name\s*=\s*["']robots["']/i.test(tag);
    const hasNoindex = /content\s*=\s*["'][^"']*noindex/i.test(tag);
    return isRobotsMeta && hasNoindex;
  });
}

function isRedirectShimPage(html) {
  return /<meta\s+http-equiv\s*=\s*["']refresh["']/i.test(html) && /<title>\s*Redirecting to:/i.test(html);
}

async function listHtmlFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await listHtmlFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

async function pruneEmptyDirectories(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const subDir = path.join(dir, entry.name);
    await pruneEmptyDirectories(subDir);
  }

  const postEntries = await fs.readdir(dir);
  if (postEntries.length === 0 && dir !== distDir) {
    await fs.rmdir(dir);
  }
}

async function cleanSitemaps(routesToRemove) {
  const entries = await fs.readdir(distDir, { withFileTypes: true });
  const sitemapFiles = entries
    .filter((entry) => entry.isFile() && /^sitemap.*\.xml$/i.test(entry.name))
    .map((entry) => path.join(distDir, entry.name));

  if (sitemapFiles.length === 0 || routesToRemove.size === 0) {
    return;
  }

  for (const sitemapPath of sitemapFiles) {
    const xml = await fs.readFile(sitemapPath, 'utf8');

    const updatedXml = xml.replace(/<url>[\s\S]*?<\/url>/gi, (block) => {
      const locMatch = block.match(/<loc>([^<]+)<\/loc>/i);
      if (!locMatch) {
        return block;
      }

      let pathname;
      try {
        pathname = new URL(locMatch[1]).pathname;
      } catch {
        return block;
      }

      const normalized = normalizeRoutePath(pathname);
      if (routesToRemove.has(normalized)) {
        return '';
      }

      return block;
    });

    if (updatedXml !== xml) {
      await fs.writeFile(sitemapPath, updatedXml, 'utf8');
    }
  }
}

async function main() {
  try {
    await fs.access(distDir);
  } catch {
    console.log('[noindex-cleanup] dist folder not found, skipping.');
    return;
  }

  const htmlFiles = await listHtmlFiles(distDir);

  if (htmlFiles.length === 0) {
    console.log('[noindex-cleanup] no html files found in dist, skipping.');
    return;
  }

  const runStamp = getRunStamp();
  const runBackupDir = path.join(backupRootDir, runStamp);
  const moved = [];
  const removedRoutes = new Set();

  for (const filePath of htmlFiles) {
    const html = await fs.readFile(filePath, 'utf8');

    // Keep redirect shim pages even if they include noindex.
    if (!hasNoindexMeta(html) || isRedirectShimPage(html)) {
      continue;
    }

    const relativePath = path.relative(distDir, filePath);
    const backupPath = path.join(runBackupDir, relativePath);

    await fs.mkdir(path.dirname(backupPath), { recursive: true });
    await fs.copyFile(filePath, backupPath);
    await fs.unlink(filePath);

    const route = routeFromRelativeHtmlPath(relativePath);
    removedRoutes.add(route);

    moved.push({
      route,
      source: relativePath.split(path.sep).join('/'),
      backup: path.relative(projectRoot, backupPath).split(path.sep).join('/'),
    });
  }

  if (moved.length === 0) {
    console.log('[noindex-cleanup] no noindex pages found.');
    return;
  }

  await cleanSitemaps(removedRoutes);
  await pruneEmptyDirectories(distDir);

  const manifest = {
    generatedAt: new Date().toISOString(),
    totalMoved: moved.length,
    moved,
  };

  await fs.writeFile(
    path.join(runBackupDir, 'manifest.json'),
    `${JSON.stringify(manifest, null, 2)}\n`,
    'utf8'
  );

  console.log(`[noindex-cleanup] moved ${moved.length} noindex page(s) to ${path.relative(projectRoot, runBackupDir)}.`);
}

main().catch((error) => {
  console.error('[noindex-cleanup] failed:', error);
  process.exitCode = 1;
});
