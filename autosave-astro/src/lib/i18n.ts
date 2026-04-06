export type Language = 'ar' | 'en';

export const SUPPORTED_LANGUAGES: Language[] = ['ar', 'en'];
export const DEFAULT_LANGUAGE: Language = 'ar';

function splitPathAndSuffix(path: string): { pathname: string; suffix: string } {
  const normalizedInput = path.startsWith('/') ? path : `/${path}`;
  const match = normalizedInput.match(/^([^?#]*)(.*)$/);
  return {
    pathname: match?.[1] || normalizedInput,
    suffix: match?.[2] || '',
  };
}

function withTrailingSlash(pathname: string): string {
  if (pathname === '/') return '/';
  if (/\.[a-z0-9]+$/i.test(pathname)) return pathname;
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

/**
 * Get the current language from the Astro URL.
 * - If the path starts with /en, it's English.
 * - Otherwise, it's Arabic (the default locale with no prefix).
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'ar';
}

/**
 * Build a localized path.
 * Arabic (default) has no prefix, English uses /en prefix.
 */
export function getLocalizedPath(path: string, lang: Language): string {
  const { pathname, suffix } = splitPathAndSuffix(path);
  const normalizedPathname = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const pathWithoutEnPrefix = normalizedPathname.replace(/^\/en(?=\/|$)/, '') || '/';

  // Keep one canonical URL style by always linking to trailing-slash pages.
  const localizedPath =
    lang === 'en'
      ? pathWithoutEnPrefix === '/'
        ? '/en'
        : `/en${pathWithoutEnPrefix}`
      : pathWithoutEnPrefix;

  return `${withTrailingSlash(localizedPath)}${suffix}`;
}

/**
 * Get the alternate language.
 */
export function getAlternateLang(lang: Language): Language {
  return lang === 'ar' ? 'en' : 'ar';
}
