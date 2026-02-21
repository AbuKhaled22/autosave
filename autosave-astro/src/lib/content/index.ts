import { enContent } from './en';
import { arContent } from './ar';
import type { Language } from '../i18n';

export type SiteContent = typeof enContent;

export function getContentByLanguage(language: Language): SiteContent {
  return language === 'ar' ? arContent : enContent;
}

export { enContent, arContent };
