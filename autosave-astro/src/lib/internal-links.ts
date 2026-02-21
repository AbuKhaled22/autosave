/**
 * Internal linking utility for programmatic SEO pages.
 * Provides related page suggestions based on data cross-references.
 */
import type { Language } from './i18n';
import { services, getServiceBySlug } from '../data/services';
import { cities, getCityBySlug } from '../data/cities';
import { components, getComponentBySlug } from '../data/components';
import { symptoms, getSymptomBySlug } from '../data/symptoms';
import { carBrands, getBrandBySlug } from '../data/car-brands';

export type PageType = 'city' | 'service' | 'symptom' | 'component' | 'brand';

export interface InternalLink {
  title: string;
  href: string;
  description?: string;
}

/**
 * Get the base path prefix for a given language.
 */
function langPrefix(lang: Language): string {
  return lang === 'ar' ? '' : '/en';
}

/**
 * Get related city links (excluding the current city).
 */
export function getRelatedCities(
  currentSlug: string,
  lang: Language,
  limit: number = 5
): InternalLink[] {
  return cities
    .filter((c) => c.slug !== currentSlug)
    .slice(0, limit)
    .map((c) => ({
      title: lang === 'ar' ? c.nameAr : c.nameEn,
      href: `${langPrefix(lang)}/services/${c.slug}/`,
      description: lang === 'ar' ? c.regionAr : c.regionEn,
    }));
}

/**
 * Get related service links (excluding the current service).
 */
export function getRelatedServices(
  currentSlug: string,
  lang: Language,
  limit: number = 5
): InternalLink[] {
  return services
    .filter((s) => s.slug !== currentSlug)
    .slice(0, limit)
    .map((s) => ({
      title: lang === 'ar' ? s.nameAr : s.nameEn,
      href: `${langPrefix(lang)}/services/${s.slug}/`,
      description: lang === 'ar' ? s.descriptionAr.slice(0, 80) + '...' : s.descriptionEn.slice(0, 80) + '...',
    }));
}

/**
 * Get related symptom links based on relatedSymptomSlugs from a symptom.
 */
export function getRelatedSymptoms(
  currentSlug: string,
  lang: Language,
  limit: number = 5
): InternalLink[] {
  const current = getSymptomBySlug(currentSlug);
  if (!current) {
    return symptoms
      .filter((s) => s.slug !== currentSlug)
      .slice(0, limit)
      .map((s) => ({
        title: lang === 'ar' ? s.titleAr : s.titleEn,
        href: `${langPrefix(lang)}/symptoms/${s.slug}/`,
      }));
  }

  // Prefer explicitly related symptoms, then fill with others
  const related = current.relatedSymptomSlugs
    .map((slug) => getSymptomBySlug(slug))
    .filter(Boolean)
    .map((s) => ({
      title: lang === 'ar' ? s!.titleAr : s!.titleEn,
      href: `${langPrefix(lang)}/symptoms/${s!.slug}/`,
    }));

  if (related.length >= limit) return related.slice(0, limit);

  const remaining = symptoms
    .filter((s) => s.slug !== currentSlug && !current.relatedSymptomSlugs.includes(s.slug))
    .slice(0, limit - related.length)
    .map((s) => ({
      title: lang === 'ar' ? s.titleAr : s.titleEn,
      href: `${langPrefix(lang)}/symptoms/${s.slug}/`,
    }));

  return [...related, ...remaining].slice(0, limit);
}

/**
 * Get related component links based on relatedComponentSlugs from a symptom.
 */
export function getRelatedComponents(
  currentSlug: string,
  lang: Language,
  limit: number = 5
): InternalLink[] {
  const current = getSymptomBySlug(currentSlug);
  if (current?.relatedComponentSlugs?.length) {
    return current.relatedComponentSlugs
      .map((slug) => getComponentBySlug(slug))
      .filter(Boolean)
      .slice(0, limit)
      .map((c) => ({
        title: lang === 'ar' ? c!.nameAr : c!.nameEn,
        href: `${langPrefix(lang)}/parts/${c!.slug}/`,
        description: lang === 'ar' ? c!.descriptionAr.slice(0, 80) + '...' : c!.descriptionEn.slice(0, 80) + '...',
      }));
  }

  return components
    .filter((c) => c.slug !== currentSlug)
    .slice(0, limit)
    .map((c) => ({
      title: lang === 'ar' ? c.nameAr : c.nameEn,
      href: `${langPrefix(lang)}/parts/${c.slug}/`,
      description: lang === 'ar' ? c.descriptionAr.slice(0, 80) + '...' : c.descriptionEn.slice(0, 80) + '...',
    }));
}

/**
 * Get related brand links.
 */
export function getRelatedBrands(
  currentSlug: string,
  lang: Language,
  limit: number = 5
): InternalLink[] {
  return carBrands
    .filter((b) => b.slug !== currentSlug)
    .slice(0, limit)
    .map((b) => ({
      title: lang === 'ar' ? b.nameAr : b.nameEn,
      href: `${langPrefix(lang)}/car-ac/${b.slug}/`,
    }));
}

/**
 * Get services related to a component (based on partsInvolved in services data).
 */
export function getServicesForComponent(
  componentSlug: string,
  lang: Language,
  limit: number = 5
): InternalLink[] {
  return services
    .filter((s) => s.partsInvolved.includes(componentSlug))
    .slice(0, limit)
    .map((s) => ({
      title: lang === 'ar' ? s.nameAr : s.nameEn,
      href: `${langPrefix(lang)}/services/${s.slug}/`,
      description: lang === 'ar' ? s.descriptionAr.slice(0, 80) + '...' : s.descriptionEn.slice(0, 80) + '...',
    }));
}

/**
 * Get components related to a service (based on partsInvolved).
 */
export function getComponentsForService(
  serviceSlug: string,
  lang: Language,
  limit: number = 5
): InternalLink[] {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return [];

  return service.partsInvolved
    .map((slug) => getComponentBySlug(slug))
    .filter(Boolean)
    .slice(0, limit)
    .map((c) => ({
      title: lang === 'ar' ? c!.nameAr : c!.nameEn,
      href: `${langPrefix(lang)}/parts/${c!.slug}/`,
    }));
}

/**
 * Get a mixed set of related pages for any page type (for footer cross-links).
 */
export function getCrossLinks(
  lang: Language,
  limit: number = 6
): InternalLink[] {
  const prefix = langPrefix(lang);
  const links: InternalLink[] = [];

  // Top 2 cities
  cities.slice(0, 2).forEach((c) =>
    links.push({
      title: lang === 'ar' ? `خدمة مكيف في ${c.nameAr}` : `AC Service in ${c.nameEn}`,
      href: `${prefix}/services/${c.slug}/`,
    })
  );

  // Top 2 services
  services.slice(0, 2).forEach((s) =>
    links.push({
      title: lang === 'ar' ? s.nameAr : s.nameEn,
      href: `${prefix}/services/${s.slug}/`,
    })
  );

  // Top symptom
  if (symptoms[0]) {
    links.push({
      title: lang === 'ar' ? symptoms[0].titleAr : symptoms[0].titleEn,
      href: `${prefix}/symptoms/${symptoms[0].slug}/`,
    });
  }

  // Top brand
  if (carBrands[0]) {
    links.push({
      title: lang === 'ar' ? `مكيف ${carBrands[0].nameAr}` : `${carBrands[0].nameEn} AC`,
      href: `${prefix}/car-ac/${carBrands[0].slug}/`,
    });
  }

  return links.slice(0, limit);
}
