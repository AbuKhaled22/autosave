import type { CarBrand, CarModel } from '../data/car-brands';
import type { Language } from './i18n';

interface ModelSeoCopy {
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  sectionTitle: string;
  paragraphs: string[];
}

function getIssue(issues: string[], index: number, fallback: string): string {
  return issues[index] ?? fallback;
}

function hashSeed(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function pickBySeed<T>(items: T[], seed: number, offset = 0): T {
  return items[(seed + offset) % items.length];
}

export function getModelSeoCopy(brand: CarBrand, model: CarModel, lang: Language): ModelSeoCopy {
  const seed = hashSeed(`${brand.slug}:${model.slug}`);

  if (lang === 'ar') {
    const keyword = pickBySeed(
      [
        `أعطال مكيف ${brand.nameAr} ${model.nameAr} في صيف الرياض`,
        `صيانة مكيف ${brand.nameAr} ${model.nameAr} في زحام الرياض`,
        `ضعف تبريد ${brand.nameAr} ${model.nameAr} وقت الظهيرة`,
        `تشخيص مكيف ${brand.nameAr} ${model.nameAr} قبل تلف الكمبروسر`,
      ],
      seed
    );

    const metaTitle = pickBySeed(
      [
        `${brand.nameAr} ${model.nameAr}: إصلاح مكيف السيارة في الرياض | اوتو سيف`,
        `صيانة مكيف ${brand.nameAr} ${model.nameAr} في الرياض | اوتو سيف`,
        `${brand.nameAr} ${model.nameAr} لا يبرد؟ تشخيص دقيق في الرياض | اوتو سيف`,
        `أعطال تكييف ${brand.nameAr} ${model.nameAr} الشائعة في الرياض | اوتو سيف`,
      ],
      seed,
      1
    );

    const issueOne = getIssue(model.commonAcIssuesAr, 0, 'ضعف التبريد وقت الظهيرة');
    const issueTwo = getIssue(model.commonAcIssuesAr, 1, 'تسريب الفريون من دورة التكييف');
    const issueThree = getIssue(model.commonAcIssuesAr, 2, 'ارتفاع ضغط دورة التكييف في الحر الشديد');

    const contextCue = pickBySeed(
      ['بعد الوقوف تحت الشمس', 'أثناء الزحام الطويل', 'وقت الظهيرة', 'في المشاوير المتتابعة داخل المدينة'],
      seed,
      2
    );

    const inspectionCue = pickBySeed(
      [
        'قياس ضغط الدائرة واختبار حرارة الفتحات',
        'كشف التسريب الإلكتروني وصبغة UV',
        'فحص كلتش الكمبروسر ومروحة المكثف',
        'مقارنة أداء التبريد بين الوقوف والقيادة',
      ],
      seed,
      3
    );

    const outcomeCue = pickBySeed(
      ['استقرار التبريد داخل المقصورة', 'تقليل الحمل على الكمبروسر', 'خفض احتمالات تكرار التسريب', 'استعادة كفاءة التكييف في الحر العالي'],
      seed,
      4
    );

    const heroDescription = `فحص متخصص لمكيف ${brand.nameAr} ${model.nameAr} موديلات ${model.years} ${contextCue}، مع تشخيص السبب الجذري قبل أي تبديل قطع.`;
    const metaDescription = `${keyword}. نبدأ بـ ${inspectionCue} لمعالجة ${issueOne} و${issueTwo} بدقة، ثم نحدد الإصلاح الأنسب لتثبيت ${outcomeCue}.`;
    const sectionTitle = pickBySeed(
      [
        `خطة تشخيص ${brand.nameAr} ${model.nameAr} في حرارة الرياض`,
        `كيف نعالج ${keyword} بخطوات فنية واضحة؟`,
        `متى يتحول ${keyword} إلى عطل مكلف؟`,
        `دليل ورشة اوتو سيف لـ ${brand.nameAr} ${model.nameAr}`,
      ],
      seed,
      5
    );

    return {
      keyword,
      metaTitle,
      metaDescription,
      heroDescription,
      sectionTitle,
      paragraphs: [
        `${keyword} يظهر عادةً ${contextCue}، خصوصاً عندما يتكرر ${issueOne} أو يبدأ ${issueTwo} بالظهور بشكل متقطع. هذا النمط لا يعني دائماً تلف قطعة واحدة، لكنه إشارة مبكرة على خلل في كفاءة الدورة أو توازن الضغط داخل النظام.`,
        `في أوتو سيف نبدأ أولاً بـ ${inspectionCue} ثم نطابق النتائج مع مواصفات ${brand.nameAr} ${model.nameAr} لموديلات ${model.years}. بهذه الطريقة نعرف هل المشكلة مرتبطة بـ ${issueThree}، أم تحتاج معالجة أبسط قبل أن تتفاقم التكلفة.`,
        `الهدف من هذا المسار ليس تغيير قطع أكثر، بل تثبيت ${outcomeCue} وتقديم قرار واضح: إصلاح موضعي، صيانة وقائية، أو تبديل محدد عند الحاجة فقط. إذا لاحظت تراجع الأداء نهاراً، فالحجز المبكر يقلل احتمالات الأعطال المفاجئة.` ,
      ],
    };
  }

  const keyword = pickBySeed(
    [
      `${brand.nameEn} ${model.nameEn} AC issues in Riyadh heat`,
      `${brand.nameEn} ${model.nameEn} AC repair for stop-and-go traffic`,
      `${brand.nameEn} ${model.nameEn} weak AC at midday in Riyadh`,
      `${brand.nameEn} ${model.nameEn} AC diagnosis before compressor damage`,
    ],
    seed
  );

  const metaTitle = pickBySeed(
    [
      `${brand.nameEn} ${model.nameEn} AC Repair in Riyadh | Auto Save`,
      `${brand.nameEn} ${model.nameEn} AC Not Cooling? Riyadh Fixes | Auto Save`,
      `${brand.nameEn} ${model.nameEn} AC Diagnosis & Repair | Auto Save`,
      `${brand.nameEn} ${model.nameEn} Summer AC Service in Riyadh | Auto Save`,
    ],
    seed,
    1
  );

  const issueOne = getIssue(model.commonAcIssuesEn, 0, 'weak cooling under peak heat');
  const issueTwo = getIssue(model.commonAcIssuesEn, 1, 'refrigerant leak in the AC circuit');
  const issueThree = getIssue(model.commonAcIssuesEn, 2, 'pressure instability under heavy thermal load');

  const contextCue = pickBySeed(
    ['after long sun exposure', 'in stop-and-go traffic', 'during midday heat peaks', 'on repeated city trips'],
    seed,
    2
  );

  const inspectionCue = pickBySeed(
    [
      'pressure readings plus vent-temperature validation',
      'electronic leak tracing and UV confirmation',
      'compressor clutch and condenser-fan performance checks',
      'cooling comparison between idle and driving conditions',
    ],
    seed,
    3
  );

  const outcomeCue = pickBySeed(
    ['stable cabin cooling', 'lower compressor stress', 'reduced leak recurrence risk', 'consistent AC performance in extreme heat'],
    seed,
    4
  );

  const heroDescription = `Specialized diagnostics for ${brand.nameEn} ${model.nameEn} (${model.years}) ${contextCue}, with root-cause confirmation before any parts replacement.`;
  const metaDescription = `${keyword}. We start with ${inspectionCue} to resolve ${issueOne} and ${issueTwo}, then map the right fix to restore ${outcomeCue}.`;
  const sectionTitle = pickBySeed(
    [
      `${brand.nameEn} ${model.nameEn} AC Diagnostic Plan for Riyadh Heat`,
      `How We Resolve ${keyword} Step by Step`,
      `When ${keyword} Turns Into a Costly Failure`,
      `Auto Save Workshop Guide for ${brand.nameEn} ${model.nameEn}`,
    ],
    seed,
    5
  );

  return {
    keyword,
    metaTitle,
    metaDescription,
    heroDescription,
    sectionTitle,
    paragraphs: [
      `${keyword} tends to surface ${contextCue}, especially when ${issueOne} appears together with ${issueTwo}. In many cases this is an early warning of cycle imbalance rather than a single failed part.`,
      `Our workflow begins with ${inspectionCue}, then compares findings against ${brand.nameEn} ${model.nameEn} specs for ${model.years}. This helps separate real root causes from symptoms and avoids random replacement decisions, including cases linked to ${issueThree}.`,
      `The objective is clear: restore ${outcomeCue} with the smallest effective repair scope. If your AC drops performance in daytime traffic, early workshop diagnosis is the safest way to prevent expensive summer breakdowns.`,
    ],
  };
}
