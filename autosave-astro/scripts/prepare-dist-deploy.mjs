import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const deployDir = path.join(projectRoot, 'deploy-dist');

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

async function validateDeployDirNoNoindex() {
  const htmlFiles = await listHtmlFiles(deployDir);
  const violations = [];

  for (const filePath of htmlFiles) {
    const html = await fs.readFile(filePath, 'utf8');
    if (hasNoindexMeta(html) && !isRedirectShimPage(html)) {
      violations.push(path.relative(deployDir, filePath).split(path.sep).join('/'));
    }
  }

  if (violations.length > 0) {
    throw new Error(
      `deploy-dist contains noindex pages:\n${violations.map((v) => ` - ${v}`).join('\n')}`
    );
  }
}

async function main() {
  try {
    await fs.access(distDir);
  } catch {
    throw new Error('dist folder is missing. Run build first.');
  }

  await fs.rm(deployDir, { recursive: true, force: true });
  await fs.cp(distDir, deployDir, { recursive: true });

  await validateDeployDirNoNoindex();

  console.log('[deploy-dist] deploy-dist prepared from dist with no noindex pages.');
}

main().catch((error) => {
  console.error('[deploy-dist] failed:', error.message);
  process.exitCode = 1;
});
