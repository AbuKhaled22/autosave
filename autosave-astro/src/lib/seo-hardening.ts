import type { Language } from './i18n';

interface ThinContentInput {
  primaryTextLength: number;
  faqCount: number;
  keyBlockCount: number;
  linkHubCount: number;
}

export function shouldNoindexThinContent(input: ThinContentInput): boolean {
  const score =
    (input.primaryTextLength >= 220 ? 1 : 0) +
    (input.faqCount >= 3 ? 1 : 0) +
    (input.keyBlockCount >= 3 ? 1 : 0) +
    (input.linkHubCount >= 3 ? 1 : 0);

  return score < 3;
}

const MIN_DESCRIPTION_LENGTH = 130;
const MAX_DESCRIPTION_LENGTH = 160;

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

  const pattern = lang === 'ar' ? danglingAr : danglingEn;
  return normalized.replace(pattern, '').trim();
}

function ensureSentenceEnd(text: string): string {
  const normalized = text.trim().replace(/[\s,;:-]+$/, '');
  if (!normalized) return normalized;
  if (/[.!?؟]$/.test(normalized)) return normalized;
  return `${normalized}.`;
}

function smartTrimMetaDescription(text: string, lang: Language): string {
  const normalized = cleanWhitespace(text);
  if (!normalized) return normalized;

  if (normalized.length <= MAX_DESCRIPTION_LENGTH) {
    return ensureSentenceEnd(normalized);
  }

  const sentences = normalized
    .split(/(?<=[.!?؟])\s+/)
    .map((sentence) => cleanWhitespace(sentence))
    .filter(Boolean);

  let composed = '';
  for (const sentence of sentences) {
    if (!composed) {
      if (sentence.length <= MAX_DESCRIPTION_LENGTH) {
        composed = sentence;
      }
      continue;
    }

    const next = `${composed} ${sentence}`;
    if (next.length > MAX_DESCRIPTION_LENGTH) break;
    composed = next;
  }

  if (composed.length >= MIN_DESCRIPTION_LENGTH) {
    return ensureSentenceEnd(stripDanglingConnector(composed, lang));
  }

  if (composed.length >= 105) {
    const expanded = trimToWordBoundary(normalized, MAX_DESCRIPTION_LENGTH);
    return ensureSentenceEnd(stripDanglingConnector(expanded, lang));
  }

  const trimmed = trimToWordBoundary(normalized, MAX_DESCRIPTION_LENGTH);
  return ensureSentenceEnd(stripDanglingConnector(trimmed, lang));
}

function enrichShortMetaDescription(text: string, lang: Language, topic: string): string {
  let normalized = cleanWhitespace(text);
  if (!normalized || normalized.length >= MIN_DESCRIPTION_LENGTH) return normalized;

  const additions =
    lang === 'ar'
      ? [
          `يشمل ذلك خطوات فحص واضحة لتحديد سبب العطل بدقة في ${topic}.`,
          'احجز الموعد الآن عبر واتساب مع شرح التكلفة قبل التنفيذ.',
        ]
      : [
          `Includes a clear root-cause checklist tailored for ${topic}.`,
          'Book now on WhatsApp for same-day guidance and transparent pricing.',
        ];

  for (const addition of additions) {
    if (normalized.length >= MIN_DESCRIPTION_LENGTH) break;
    normalized = `${normalized} ${addition}`;
  }

  return normalized;
}

function getServiceFamilyKey(slug: string): string {
  if (slug.includes('recharge')) return 'recharge';
  if (slug.includes('leak')) return 'leak';
  if (slug.includes('diagnostic')) return 'diagnostic';
  if (slug.includes('cleaning')) return 'cleaning';
  if (slug.includes('replacement')) return 'replacement';
  return 'general';
}

function getSymptomFamilyKey(slug: string): string {
  if (slug.includes('smell')) return 'smell';
  if (slug.includes('noise')) return 'noise';
  if (slug.includes('cooling') || slug.includes('warm-air')) return 'cooling';
  if (slug.includes('airflow')) return 'airflow';
  if (slug.includes('water') || slug.includes('lines-freezing')) return 'fluid';
  if (slug.includes('compressor-not-engaging') || slug.includes('fuse') || slug.includes('stopped-working')) {
    return 'electrical';
  }
  if (slug.includes('shakes')) return 'load';
  return 'general';
}

interface ServiceIntent {
  titleSuffixAr: string;
  titleSuffixEn: string;
  descriptionAr: (serviceName: string, durationMinutes: number) => string;
  descriptionEn: (serviceName: string, durationMinutes: number) => string;
}

const serviceIntentBySlug: Record<string, ServiceIntent> = {
  'ac-recharge': {
    titleSuffixAr: 'تعبئة دقيقة مع اختبار الضغط',
    titleSuffixEn: 'Precision Recharge & Pressure Validation',
    descriptionAr: (serviceName, durationMinutes) =>
      `خدمة ${serviceName} تبدأ بكشف التسريب وقياس الضغط قبل التعبئة. المدة التقريبية ${durationMinutes} دقيقة لتثبيت برودة المكيف تحت حر الرياض.`,
    descriptionEn: (serviceName, durationMinutes) =>
      `${serviceName} starts with leak screening and pressure checks before recharge. Around ${durationMinutes} minutes to restore stable cooling in Riyadh heat.`,
  },
  'leak-detection': {
    titleSuffixAr: 'تحديد مصدر التسريب قبل أي إصلاح',
    titleSuffixEn: 'Pinpoint Leak Source Before Repair',
    descriptionAr: (serviceName, durationMinutes) =>
      `خدمة ${serviceName} تعتمد كشفاً إلكترونياً وصبغة UV لعزل مكان التسريب بدقة. المدة التقريبية ${durationMinutes} دقيقة لتقليل تكرار فقدان الفريون.`,
    descriptionEn: (serviceName, durationMinutes) =>
      `${serviceName} uses electronic tracing and UV dye to isolate the exact leak path. About ${durationMinutes} minutes to reduce repeat refrigerant loss.`,
  },
  'ac-diagnostic': {
    titleSuffixAr: 'تشخيص السبب الجذري قبل تغيير القطع',
    titleSuffixEn: 'Root-Cause Diagnosis Before Parts Swap',
    descriptionAr: (serviceName, durationMinutes) =>
      `خدمة ${serviceName} تفحص دورة التبريد والكهرباء وتدفق الهواء ضمن تقرير واضح. المدة التقريبية ${durationMinutes} دقيقة لاختيار الإصلاح الأدق بأقل تكلفة.`,
    descriptionEn: (serviceName, durationMinutes) =>
      `${serviceName} checks cooling-cycle pressure, electrical control, and airflow in one diagnosis report. Around ${durationMinutes} minutes to choose the right repair scope.`,
  },
  'ac-cleaning': {
    titleSuffixAr: 'تنظيف الدورة وتحسين جودة الهواء',
    titleSuffixEn: 'Airflow Path Cleaning & Odor Control',
    descriptionAr: (serviceName, durationMinutes) =>
      `خدمة ${serviceName} تستهدف الرواسب والروائح داخل دورة الهواء مع فحص حالة الفلتر. المدة التقريبية ${durationMinutes} دقيقة لتحسين تدفق الهواء داخل المقصورة.`,
    descriptionEn: (serviceName, durationMinutes) =>
      `${serviceName} targets residue and odor sources inside the airflow path while checking cabin-filter condition. About ${durationMinutes} minutes for cleaner cabin air.`,
  },
  'compressor-replacement': {
    titleSuffixAr: 'تبديل الكمبروسر وضبط الأداء بعد التركيب',
    titleSuffixEn: 'Compressor Replacement With Performance Tuning',
    descriptionAr: (serviceName, durationMinutes) =>
      `خدمة ${serviceName} تشمل فحص الدائرة قبل التركيب واختبار الأداء بعده. المدة التقريبية ${durationMinutes} دقيقة لضمان تشغيل مستقر دون ضغط زائد.`,
    descriptionEn: (serviceName, durationMinutes) =>
      `${serviceName} includes system checks before installation plus post-install performance validation. Around ${durationMinutes} minutes for stable compressor operation.`,
  },
  'condenser-repair': {
    titleSuffixAr: 'إصلاح المكثف واستعادة كفاءة التبريد',
    titleSuffixEn: 'Condenser Repair for Cooling Recovery',
    descriptionAr: (serviceName, durationMinutes) =>
      `خدمة ${serviceName} تعالج ضعف تبديد الحرارة الناتج عن تلف المكثف أو الانسداد. المدة التقريبية ${durationMinutes} دقيقة لاستعادة كفاءة التبريد في الوقوف والقيادة.`,
    descriptionEn: (serviceName, durationMinutes) =>
      `${serviceName} addresses heat-rejection loss from condenser damage or airflow restriction. About ${durationMinutes} minutes to recover cooling in idle and driving conditions.`,
  },
  'evaporator-replacement': {
    titleSuffixAr: 'تبديل الثلاجة مع معالجة التسريب المتكرر',
    titleSuffixEn: 'Evaporator Replacement for Recurring Leaks',
    descriptionAr: (serviceName, durationMinutes) =>
      `خدمة ${serviceName} تُنفذ عند ثبوت تسريب الثلاجة أو تراجع كفاءتها. المدة التقريبية ${durationMinutes} دقيقة مع اختبار إحكام الدورة بعد التركيب.`,
    descriptionEn: (serviceName, durationMinutes) =>
      `${serviceName} is applied when evaporator leakage or performance drop is confirmed. Around ${durationMinutes} minutes with post-install sealing and cooling checks.`,
  },
  'full-ac-overhaul': {
    titleSuffixAr: 'إعادة تأهيل كاملة لدورة التكييف',
    titleSuffixEn: 'Full AC Overhaul With Stepwise Validation',
    descriptionAr: (serviceName, durationMinutes) =>
      `خدمة ${serviceName} تجمع الفحص العميق والإصلاحات المترابطة للدورة بالكامل. المدة التقريبية ${durationMinutes} دقيقة عند تعدد الأعطال أو تكرار فقدان الأداء.`,
    descriptionEn: (serviceName, durationMinutes) =>
      `${serviceName} combines deep diagnostics with coordinated repairs across the full AC cycle. Around ${durationMinutes} minutes when multiple faults overlap.`,
  },
  'cabin-filter-replacement': {
    titleSuffixAr: 'تحسين تدفق الهواء عبر فلتر جديد',
    titleSuffixEn: 'Cabin Filter Renewal for Better Airflow',
    descriptionAr: (serviceName, durationMinutes) =>
      `خدمة ${serviceName} ترفع كفاءة تدفق الهواء وتقلل الروائح داخل المقصورة. المدة التقريبية ${durationMinutes} دقيقة وتوصية واضحة بجدول الاستبدال المناسب.`,
    descriptionEn: (serviceName, durationMinutes) =>
      `${serviceName} improves vent airflow consistency and reduces odor buildup in the cabin. Around ${durationMinutes} minutes with replacement-interval guidance.`,
  },
  'ac-belt-replacement': {
    titleSuffixAr: 'تبديل السير وضبط الشدّ التشغيلي',
    titleSuffixEn: 'Belt Replacement With Correct Tension Setup',
    descriptionAr: (serviceName, durationMinutes) =>
      `خدمة ${serviceName} تعالج الصرير وعدم ثبات دوران المجموعة الأمامية. المدة التقريبية ${durationMinutes} دقيقة مع فحص شد السير بعد التشغيل.`,
    descriptionEn: (serviceName, durationMinutes) =>
      `${serviceName} resolves squeal and unstable front-end drive behavior. Around ${durationMinutes} minutes with post-install tension and rotation checks.`,
  },
};

const serviceIntentByFamily: Record<string, ServiceIntent> = {
  recharge: {
    titleSuffixAr: 'استقرار تبريد المكيف تحت الحرارة العالية',
    titleSuffixEn: 'Cooling Stability Under Extreme Heat',
    descriptionAr: (serviceName, durationMinutes) =>
      `خدمة ${serviceName} موجهة لاستعادة استقرار التبريد بعد فحص الضغط والتسريب. المدة التقريبية ${durationMinutes} دقيقة مع توصية وقائية واضحة.`,
    descriptionEn: (serviceName, durationMinutes) =>
      `${serviceName} is designed to restore stable cooling after pressure and leak checks. Around ${durationMinutes} minutes with clear preventive guidance.`,
  },
  leak: {
    titleSuffixAr: 'عزل مسار التسريب بخطوات تشخيص واضحة',
    titleSuffixEn: 'Leak Path Isolation With Clear Diagnostics',
    descriptionAr: (serviceName, durationMinutes) =>
      `خدمة ${serviceName} تحدد مصدر التسريب بدقة قبل الإصلاح. المدة التقريبية ${durationMinutes} دقيقة لتقليل تكرار فقدان الفريون.`,
    descriptionEn: (serviceName, durationMinutes) =>
      `${serviceName} identifies the exact leak source before repair decisions. Around ${durationMinutes} minutes to reduce repeated refrigerant loss.`,
  },
  diagnostic: {
    titleSuffixAr: 'تشخيص السبب الجذري أولاً',
    titleSuffixEn: 'Root-Cause Confirmation First',
    descriptionAr: (serviceName, durationMinutes) =>
      `خدمة ${serviceName} تدمج فحص الضغط والكهرباء وتدفق الهواء في مسار واحد. المدة التقريبية ${durationMinutes} دقيقة قبل اعتماد خطة الإصلاح.`,
    descriptionEn: (serviceName, durationMinutes) =>
      `${serviceName} combines pressure, electrical, and airflow checks into one decision path. Around ${durationMinutes} minutes before confirming the repair plan.`,
  },
  cleaning: {
    titleSuffixAr: 'تحسين جودة الهواء وكفاءة الدورة',
    titleSuffixEn: 'Airflow Quality and Cycle Efficiency',
    descriptionAr: (serviceName, durationMinutes) =>
      `خدمة ${serviceName} تركز على تنظيف دورة الهواء وتقليل الروائح وتحسين التدفق. المدة التقريبية ${durationMinutes} دقيقة بنتيجة محسوسة داخل المقصورة.`,
    descriptionEn: (serviceName, durationMinutes) =>
      `${serviceName} focuses on cleaning the airflow path, reducing odor, and improving vent consistency. Around ${durationMinutes} minutes for noticeable cabin comfort gains.`,
  },
  replacement: {
    titleSuffixAr: 'تبديل القطعة مع ضبط الأداء بعد التركيب',
    titleSuffixEn: 'Component Replacement With Post-Install Validation',
    descriptionAr: (serviceName, durationMinutes) =>
      `خدمة ${serviceName} تضمن توافق القطعة وفحص الأداء بعد التركيب. المدة التقريبية ${durationMinutes} دقيقة مع شرح واضح لخيارات القطع.`,
    descriptionEn: (serviceName, durationMinutes) =>
      `${serviceName} validates part compatibility and post-install performance. Around ${durationMinutes} minutes with clear part-option guidance.`,
  },
  general: {
    titleSuffixAr: 'مسار تنفيذ واضح ومدة متوقعة',
    titleSuffixEn: 'Clear Workflow and Estimated Timing',
    descriptionAr: (serviceName, durationMinutes) =>
      `خدمة ${serviceName} تعرض خطوات التنفيذ العملية والمدة التقريبية ${durationMinutes} دقيقة مع توصية فنية بعد الفحص.`,
    descriptionEn: (serviceName, durationMinutes) =>
      `${serviceName} provides a practical workflow and estimated timing of ${durationMinutes} minutes with post-inspection guidance.`,
  },
};

export function getServiceSeoByFamily(
  slug: string,
  serviceName: string,
  durationMinutes: number,
  lang: Language
): { title: string; description: string; familyKey: string } {
  const familyKey = getServiceFamilyKey(slug);
  const intent = serviceIntentBySlug[slug] ?? serviceIntentByFamily[familyKey] ?? serviceIntentByFamily.general;

  const title =
    lang === 'ar'
      ? `${serviceName} في الرياض | ${intent.titleSuffixAr}`
      : `${serviceName} in Riyadh | ${intent.titleSuffixEn}`;

  const rawDescription =
    lang === 'ar'
      ? intent.descriptionAr(serviceName, durationMinutes)
      : intent.descriptionEn(serviceName, durationMinutes);
  const enrichedDescription = enrichShortMetaDescription(rawDescription, lang, serviceName);

  return {
    title,
    description: smartTrimMetaDescription(enrichedDescription, lang),
    familyKey,
  };
}

interface SymptomIntent {
  titleSuffixAr: string;
  titleSuffixEn: string;
  descriptionAr: (symptomTitle: string) => string;
  descriptionEn: (symptomTitle: string) => string;
}

const symptomIntentBySlug: Record<string, SymptomIntent> = {
  'ac-bad-smell': {
    titleSuffixAr: 'تشخيص مصدر الرائحة من الثلاجة أو الفلتر',
    titleSuffixEn: 'Trace Odor Source in Evaporator or Filter Path',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يبدأ بفحص الثلاجة وفلتر المقصورة وخط التصريف لمنع عودة الرائحة بعد التنظيف أو الاستبدال.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} starts with evaporator, cabin-filter, and drain-path checks to prevent recurring odor after service.`,
  },
  'ac-musty-smell': {
    titleSuffixAr: 'فحص العفن والرطوبة داخل دورة الهواء',
    titleSuffixEn: 'Check Moisture and Mold Inside Airflow Path',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يركز على رطوبة الثلاجة وفلتر المقصورة وحالة التصريف، مع خطوات عملية لتقليل تكرار العفن.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} focuses on evaporator moisture, filter condition, and drain behavior with practical recurrence control steps.`,
  },
  'ac-burning-smell': {
    titleSuffixAr: 'تمييز السبب الكهربائي قبل تلف المكونات',
    titleSuffixEn: 'Isolate Electrical Source Before Component Damage',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يركز على دائرة الكهرباء، الأحمال الزائدة، واحتكاك السير قبل حدوث تلف أكبر في الكمبروسر أو الأسلاك.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} prioritizes electrical load, belt-friction, and control-circuit checks before major compressor or wiring damage.`,
  },
  'ac-clicking-noise': {
    titleSuffixAr: 'تحليل الطقطقة من الأكتويتر أو الكلتش',
    titleSuffixEn: 'Analyze Clicking From Actuator or Clutch',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يحدد إن كان الصوت من أكتويتر بوابات الهواء أو من كلتش الكمبروسر لتجنب تبديل قطع غير ضرورية.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} separates blend-door actuator noise from compressor-clutch noise to avoid unnecessary part replacement.`,
  },
  'ac-grinding-noise': {
    titleSuffixAr: 'تحديد الاحتكاك الميكانيكي قبل تعطل كامل',
    titleSuffixEn: 'Identify Mechanical Friction Before Full Failure',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يركز على البيرنق، الكلتش، وحركة البكرات لاكتشاف نقطة الاحتكاك قبل توقف النظام بشكل كامل.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} focuses on bearings, clutch hardware, and pulley motion to locate friction before complete AC shutdown.`,
  },
  'ac-hissing-noise': {
    titleSuffixAr: 'فحص التسريب والضغط عند سماع الهسهسة',
    titleSuffixEn: 'Check Leak and Pressure When Hissing Appears',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يتتبع علاقة الصوت بضغط الفريون واحتمال التسريب من الصمامات أو الوصلات قبل إعادة التعبئة.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} connects hissing behavior to refrigerant pressure and valve/line leak probability before any recharge.`,
  },
  'ac-squealing-noise': {
    titleSuffixAr: 'فحص السير والبكرة والشد التشغيلي',
    titleSuffixEn: 'Inspect Belt, Pulley, and Operating Tension',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يركز على شد السير، البكرات، وحالة الكلتش لتقليل احتمال انقطاع السير أو توقف الكمبروسر.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} targets belt tension, pulley condition, and clutch behavior to reduce sudden belt or compressor failure risk.`,
  },
  'ac-not-cooling': {
    titleSuffixAr: 'تحديد سبب فقدان البرودة بخطوات مرتبة',
    titleSuffixEn: 'Stepwise Root-Cause Map for Cooling Loss',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يبدأ بقياس الضغط وحرارة الفتحات ثم فحص الكمبروسر والمكثف لتحديد السبب الحقيقي قبل تغيير القطع.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} starts with pressure and vent-temperature checks, then compressor and condenser validation before parts replacement.`,
  },
  'ac-weak-cooling': {
    titleSuffixAr: 'تحليل ضعف التبريد تحت الحمل الحراري',
    titleSuffixEn: 'Analyze Weak Cooling Under Thermal Load',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يراجع كفاءة الدورة تحت حرارة الظهيرة مع مقارنة أداء الوقوف والقيادة لتحديد نقطة الضعف بدقة.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} reviews cooling-cycle efficiency under midday heat and compares idle versus driving behavior.`,
  },
  'ac-blowing-warm-air': {
    titleSuffixAr: 'فحص فوري لدورة الفريون والكمبروسر',
    titleSuffixEn: 'Immediate Check for Refrigerant and Compressor Path',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يركز على ضغط الفريون، كلتش الكمبروسر، وتدفق الهواء لتحديد إن كانت المشكلة نقص شحنة أو خللاً ميكانيكياً.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} focuses on refrigerant pressure, compressor-clutch response, and airflow to separate charge versus mechanical faults.`,
  },
  'ac-intermittent-cooling': {
    titleSuffixAr: 'تتبع التبريد المتقطع بين الوقوف والقيادة',
    titleSuffixEn: 'Track Intermittent Cooling Between Idle and Driving',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يحدد متى ينخفض الأداء ولماذا، عبر مقارنة الضغط والكفاءة الحرارية في سيناريوهات تشغيل مختلفة.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} tracks where and when performance drops by comparing pressure and thermal efficiency across operating states.`,
  },
  'ac-weak-airflow': {
    titleSuffixAr: 'فحص مسار الهواء من المروحة حتى الفتحات',
    titleSuffixEn: 'Inspect Airflow Path From Blower to Vents',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يراجع الفلتر والمروحة وبوابات التوزيع للوصول إلى سبب ضعف الدفع داخل المقصورة دون تخمين.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} checks cabin filter, blower motor, and distribution doors to isolate airflow loss without guesswork.`,
  },
  'ac-lines-freezing': {
    titleSuffixAr: 'تشخيص التجمد والضغط غير المتوازن',
    titleSuffixEn: 'Diagnose Freezing and Pressure Imbalance',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يركز على تمدد غير صحيح أو نقص تدفق الهواء الذي يسبب تجمد الخطوط وتراجع التبريد بعد فترة تشغيل قصيرة.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} focuses on expansion imbalance or airflow restriction that freezes lines and drops cooling output.`,
  },
  'ac-water-leak': {
    titleSuffixAr: 'فحص تصريف المياه والرطوبة داخل المقصورة',
    titleSuffixEn: 'Check Drain Path and Cabin Moisture Behavior',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يحدد إن كان التسرب مرتبطاً بانسداد التصريف أو تجمد الثلاجة أو عزل ضعيف داخل مجموعة التكييف.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} verifies whether leakage comes from blocked drain flow, evaporator icing, or poor AC housing sealing.`,
  },
  'ac-compressor-not-engaging': {
    titleSuffixAr: 'اختبار كلتش الكمبروسر ومسار التغذية',
    titleSuffixEn: 'Test Compressor Clutch and Control Supply Path',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يراجع الفيوز والريليه والإشارات الكهربائية قبل الحكم على الكمبروسر نفسه لتجنب إصلاحات مكلفة غير لازمة.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} checks fuse, relay, and control signals before condemning the compressor itself.`,
  },
  'ac-fuse-blowing': {
    titleSuffixAr: 'عزل سبب الحمل الكهربائي الزائد',
    titleSuffixEn: 'Isolate Source of Electrical Overload',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يبحث عن قصر كهربائي أو حمل زائد في المروحة أو الكلتش قبل استبدال الفيوز بشكل متكرر.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} isolates short-circuit or overload behavior in clutch and fan circuits before repeated fuse replacement.`,
  },
  'ac-stopped-working': {
    titleSuffixAr: 'فحص شامل عند التوقف المفاجئ',
    titleSuffixEn: 'Full-System Check After Sudden AC Failure',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يجمع الفحص الكهربائي والميكانيكي لتحديد نقطة التوقف بسرعة، سواء كانت في التحكم أو في دورة التبريد نفسها.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} combines electrical and mechanical checks to identify the exact failure point quickly.`,
  },
  'car-shakes-with-ac': {
    titleSuffixAr: 'تحليل حمل المكيف وتأثيره على المحرك',
    titleSuffixEn: 'Analyze AC Load Effect on Engine Stability',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يربط اهتزاز السيارة بحمل الكمبروسر وضبط الخمول وكفاءة الاحتراق لتحديد السبب بدقة.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} links vehicle vibration to compressor load, idle-control response, and engine balance factors.`,
  },
  'ac-one-side-only': {
    titleSuffixAr: 'فحص توزيع الهواء بين جانبي المقصورة',
    titleSuffixEn: 'Check Cabin Air Distribution Side-to-Side',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يركز على بوابات الخلط والحساسات لضبط توزيع البرودة بين اليمين واليسار بشكل متوازن.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} focuses on blend-door and sensor behavior to restore balanced cooling across both cabin sides.`,
  },
  'ac-only-cools-driving': {
    titleSuffixAr: 'قياس فرق الأداء بين الوقوف والحركة',
    titleSuffixEn: 'Measure Cooling Gap Between Idle and Driving',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يراجع كفاءة المراوح وتبديد حرارة المكثف عند الوقوف، لأن التبريد أثناء الحركة فقط مؤشر مهم على سبب محدد.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} reviews fan efficiency and condenser heat rejection at idle, since cooling only while driving is a key signal.`,
  },
};

const symptomIntentByFamily: Record<string, SymptomIntent> = {
  smell: {
    titleSuffixAr: 'مسار تشخيص الروائح داخل دورة الهواء',
    titleSuffixEn: 'Odor Diagnosis Path in AC Airflow Circuit',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يحدد مصدر الرائحة بين الثلاجة والفلتر ومسار التصريف قبل اختيار خطوة المعالجة المناسبة.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} isolates odor origin across evaporator, filter, and drain-path checks before treatment decisions.`,
  },
  noise: {
    titleSuffixAr: 'تحليل الصوت قبل حدوث تلف ميكانيكي',
    titleSuffixEn: 'Noise Analysis Before Mechanical Failure',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يربط نوع الصوت بمصدره الميكانيكي أو الكهربائي لتقليل احتمالات التوقف المفاجئ.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} maps sound pattern to mechanical or electrical source to reduce sudden-failure risk.`,
  },
  cooling: {
    titleSuffixAr: 'فحص كفاءة التبريد تحت حرارة الرياض',
    titleSuffixEn: 'Cooling-Cycle Check Under Riyadh Heat',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يقارن الضغط وحرارة الفتحات عبر ظروف تشغيل مختلفة لتحديد سبب فقدان البرودة بدقة.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} compares pressure and vent temperature across operating states to confirm cooling-loss root cause.`,
  },
  airflow: {
    titleSuffixAr: 'تتبع مسار الهواء داخل المقصورة',
    titleSuffixEn: 'Cabin Airflow Path Diagnosis',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يركز على الفلتر والمروحة وبوابات التوزيع للوصول إلى سبب ضعف تدفق الهواء.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} focuses on filter, blower, and distribution-door behavior to isolate airflow weakness.`,
  },
  fluid: {
    titleSuffixAr: 'فحص التسريب والتجمد وحركة السوائل',
    titleSuffixEn: 'Leak, Freezing, and Fluid Behavior Checks',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يراجع خطوط الدورة والرطوبة والتكاثف لتأكيد سبب التسريب أو التجمد قبل الإصلاح.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} reviews line behavior, moisture, and condensate patterns before repair planning.`,
  },
  electrical: {
    titleSuffixAr: 'تحقق من دائرة التحكم والتغذية',
    titleSuffixEn: 'Control-Circuit and Power-Supply Validation',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يختبر الفيوز والريليه والإشارات الكهربائية قبل استبدال المكونات الرئيسية.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} validates fuse, relay, and control-signal flow before replacing major components.`,
  },
  load: {
    titleSuffixAr: 'تحليل تأثير التكييف على حمل المحرك',
    titleSuffixEn: 'Engine Load Response Analysis With AC On',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يربط سلوك المحرك بحمل الكمبروسر لضبط الأداء وتقليل الاهتزاز أثناء التشغيل.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} links engine behavior to compressor load response for smoother operation with AC engaged.`,
  },
  general: {
    titleSuffixAr: 'مسار فحص عملي قبل قرار الإصلاح',
    titleSuffixEn: 'Practical Diagnosis Path Before Repair Decision',
    descriptionAr: (symptomTitle) =>
      `تشخيص ${symptomTitle} يقدم ترتيباً عملياً للخطوات لتأكيد السبب الحقيقي قبل أي إصلاح أو تبديل قطع.`,
    descriptionEn: (symptomTitle) =>
      `Diagnosing ${symptomTitle} provides a practical step order to confirm the root cause before repair or replacement.`,
  },
};

export function getSymptomSeoByFamily(
  slug: string,
  symptomTitle: string,
  lang: Language
): { title: string; description: string; familyKey: string } {
  const familyKey = getSymptomFamilyKey(slug);
  const intent = symptomIntentBySlug[slug] ?? symptomIntentByFamily[familyKey] ?? symptomIntentByFamily.general;

  const title =
    lang === 'ar'
      ? `${symptomTitle} | ${intent.titleSuffixAr}`
      : `${symptomTitle} | ${intent.titleSuffixEn}`;

  const rawDescription =
    lang === 'ar'
      ? intent.descriptionAr(symptomTitle)
      : intent.descriptionEn(symptomTitle);
  const enrichedDescription = enrichShortMetaDescription(rawDescription, lang, symptomTitle);

  return {
    title,
    description: smartTrimMetaDescription(enrichedDescription, lang),
    familyKey,
  };
}
