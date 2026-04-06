import type { Language } from './i18n';

interface NormalizeSeoMetaInput {
  title: string;
  description: string;
  lang: Language;
  keywords?: string[];
}

interface NormalizeSeoMetaOutput {
  title: string;
  description: string;
}

const TITLE_MAX_LENGTH = 60;
const DESC_MIN_LENGTH = 130;
const DESC_MAX_LENGTH = 155;

function cleanWhitespace(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

function trimToWordBoundary(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;

  const preview = text.slice(0, maxLength + 1);
  const lastSpace = preview.lastIndexOf(' ');

  if (lastSpace >= Math.floor(maxLength * 0.55)) {
    return preview.slice(0, lastSpace).trim();
  }

  return text.slice(0, maxLength).trim();
}

function stripDanglingConnector(text: string, lang: Language): string {
  const normalized = text.trim();

  const danglingEn = /\b(and|or|to|for|with|the|a|an|of|in|on|at|from|by|is|are|was|were|be|been|being|that|this|these|those|which|who|when|while|whether)$/i;
  const danglingAr = /\b(و|أو|في|من|على|إلى|عن|مع|قبل|بعد|حتى|ثم|بين|الذي|التي|هذا|هذه|ذلك)$/;

  return normalized.replace(lang === 'ar' ? danglingAr : danglingEn, '').trim();
}

function ensureTerminalPunctuation(text: string, maxLength = Number.POSITIVE_INFINITY): string {
  const normalized = text.trim().replace(/[\s,;:-]+$/, '');
  if (!normalized) return normalized;
  if (/[.!?؟]$/.test(normalized)) return normalized;
  if (normalized.length + 1 > maxLength) return normalized;
  return `${normalized}.`;
}

function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?؟])\s+/)
    .map((sentence) => cleanWhitespace(sentence))
    .filter(Boolean);
}

function fitDescriptionWithoutClipping(text: string, lang: Language): string {
  const normalized = cleanWhitespace(text);
  if (normalized.length <= DESC_MAX_LENGTH) {
    return ensureTerminalPunctuation(normalized, DESC_MAX_LENGTH);
  }

  const sentences = splitSentences(normalized);
  let composed = '';

  for (const sentence of sentences) {
    if (!composed) {
      if (sentence.length <= DESC_MAX_LENGTH) {
        composed = sentence;
      }
      continue;
    }

    const next = `${composed} ${sentence}`;
    if (next.length > DESC_MAX_LENGTH) break;
    composed = next;
  }

  if (composed.length >= DESC_MIN_LENGTH) {
    return ensureTerminalPunctuation(stripDanglingConnector(composed, lang), DESC_MAX_LENGTH);
  }

  if (composed.length >= 95) {
    const expanded = trimToWordBoundary(normalized, DESC_MAX_LENGTH);
    return ensureTerminalPunctuation(stripDanglingConnector(expanded, lang), DESC_MAX_LENGTH);
  }

  const fallback = trimToWordBoundary(normalized, DESC_MAX_LENGTH);
  return ensureTerminalPunctuation(stripDanglingConnector(fallback, lang), DESC_MAX_LENGTH);
}

function appendIfFits(base: string, segment: string, maxLength: number): string {
  if (!segment) return base;
  const joined = cleanWhitespace(`${base} ${segment}`);
  return joined.length <= maxLength ? joined : base;
}

function appendForMinimum(base: string, segment: string, maxLength: number): string {
  if (!segment || base.length >= DESC_MIN_LENGTH) return base;

  const joined = cleanWhitespace(`${base} ${segment}`);
  if (joined.length <= maxLength) return joined;

  const available = maxLength - base.length - 1;
  if (available < 14) return base;

  const clippedSegment = trimToWordBoundary(segment, available);
  if (!clippedSegment) return base;

  return cleanWhitespace(`${base} ${clippedSegment}`);
}

function getKeywordSegment(lang: Language, keywords: string[]): string {
  const selected = keywords.slice(0, 2).filter(Boolean);
  if (selected.length === 0) return '';

  if (lang === 'ar') {
    return `يغطي هذا الدليل ${selected.join(' و')} بأسلوب تشخيص عملي.`;
  }

  return `Covers ${selected.join(' and ')} with workshop-level diagnostics.`;
}

function getClickIntentSegment(lang: Language): string {
  return lang === 'ar'
    ? 'احجز فحصاً دقيقاً عبر واتساب اليوم.'
    : 'Book a precise AC inspection on WhatsApp today.';
}

function getSupportSegment(lang: Language): string {
  return lang === 'ar'
    ? 'تشمل الخدمة فحص السبب الجذري قبل تغيير القطع.'
    : 'Includes root-cause checks before parts replacement.';
}

function normalizeDescription(description: string, lang: Language, keywords: string[]): string {
  let normalized = cleanWhitespace(description);

  if (!normalized) {
    normalized =
      lang === 'ar'
        ? 'خدمة صيانة مكيف السيارة في الرياض مع تشخيص دقيق وخيارات إصلاح واضحة لجميع السيارات.'
        : 'Car AC service in Riyadh with precise diagnostics and clear repair options for all vehicles.';
  }

  normalized = ensureTerminalPunctuation(normalized, DESC_MAX_LENGTH);

  if (normalized.length < DESC_MIN_LENGTH) {
    normalized = appendForMinimum(normalized, getKeywordSegment(lang, keywords), DESC_MAX_LENGTH);
  }

  if (normalized.length < DESC_MIN_LENGTH) {
    normalized = appendForMinimum(normalized, getSupportSegment(lang), DESC_MAX_LENGTH);
  }

  if (normalized.length < DESC_MIN_LENGTH) {
    normalized = appendForMinimum(normalized, getClickIntentSegment(lang), DESC_MAX_LENGTH);
  }

  if (normalized.length > DESC_MAX_LENGTH) {
    normalized = fitDescriptionWithoutClipping(normalized, lang);
  }

  if (normalized.length < DESC_MIN_LENGTH) {
    const padded = appendForMinimum(normalized, getClickIntentSegment(lang), DESC_MAX_LENGTH);
    if (padded !== normalized) {
      normalized = padded;
    }
  }

  if (normalized.length > DESC_MAX_LENGTH) {
    normalized = fitDescriptionWithoutClipping(normalized, lang);
  }

  return ensureTerminalPunctuation(stripDanglingConnector(normalized, lang), DESC_MAX_LENGTH);
}

function normalizeTitle(title: string, lang: Language): string {
  let normalized = cleanWhitespace(title);

  if (!normalized) {
    normalized =
      lang === 'ar'
        ? 'صيانة مكيف السيارة في الرياض | اوتو سيف'
        : 'Car AC Repair in Riyadh | Auto Save';
  }

  if (normalized.length > TITLE_MAX_LENGTH) {
    normalized = trimToWordBoundary(normalized, TITLE_MAX_LENGTH);
  }

  if (normalized.length < 30 && !normalized.includes('|')) {
    const suffix = lang === 'ar' ? ' | خدمة مكيف السيارة' : ' | Car AC Service';
    normalized = trimToWordBoundary(`${normalized}${suffix}`, TITLE_MAX_LENGTH);
  }

  return normalized;
}

export function normalizeSeoMeta(input: NormalizeSeoMetaInput): NormalizeSeoMetaOutput {
  const keywords = (input.keywords ?? []).filter(Boolean);

  return {
    title: normalizeTitle(input.title, input.lang),
    description: normalizeDescription(input.description, input.lang, keywords),
  };
}
