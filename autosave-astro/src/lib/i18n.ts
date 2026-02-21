export type Language = 'ar' | 'en';

export const SUPPORTED_LANGUAGES: Language[] = ['ar', 'en'];
export const DEFAULT_LANGUAGE: Language = 'ar';

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
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (lang === 'ar') {
    return normalizedPath;
  }

  // English: prepend /en
  return normalizedPath === '/' ? '/en' : `/en${normalizedPath}`;
}

/**
 * Get the alternate language.
 */
export function getAlternateLang(lang: Language): Language {
  return lang === 'ar' ? 'en' : 'ar';
}
