/**
 * Car brand & model data for programmatic SEO pages.
 * High-popularity brands get individual model pages.
 * Each brand page: /brands/[brand], /en/brands/[brand]
 * Model pages (high popularity): /brands/[brand]/[model], /en/brands/[brand]/[model]
 */

export interface CarModel {
  slug: string;
  nameAr: string;
  nameEn: string;
  years: string;
  commonAcIssuesAr: string[];
  commonAcIssuesEn: string[];
}

export interface CarBrand {
  slug: string;
  nameAr: string;
  nameEn: string;
  logoPath: string;
  popularity: 'high' | 'medium' | 'low';
  models: CarModel[];
  generalIssuesAr: string;
  generalIssuesEn: string;
  faqs: {
    questionAr: string;
    questionEn: string;
    answerAr: string;
    answerEn: string;
  }[];
}

export const carBrands: CarBrand[] = [
  // ── TOP 8 (high popularity — get model sub-pages) ─────────────────────────
  {
    slug: 'toyota',
    nameAr: 'تويوتا',
    nameEn: 'Toyota',
    logoPath: '/images/brands/toyota.webp',
    popularity: 'high',
    models: [
      {
        slug: 'camry',
        nameAr: 'كامري',
        nameEn: 'Camry',
        years: '2012-2026',
        commonAcIssuesAr: [
          'ضعف تبريد بسبب نقص فريون',
          'صوت طقطقة من أكتويتر باب الخلط',
          'تسريب من المبخر في الموديلات القديمة',
        ],
        commonAcIssuesEn: [
          'Weak cooling due to low refrigerant',
          'Clicking noise from blend door actuator',
          'Evaporator leak in older models',
        ],
      },
      {
        slug: 'corolla',
        nameAr: 'كورولا',
        nameEn: 'Corolla',
        years: '2014-2026',
        commonAcIssuesAr: [
          'ضعف تبريد في الحرارة الشديدة',
          'تسريب فريون من وصلات الخطوط',
          'رائحة عفنة من المبخر',
        ],
        commonAcIssuesEn: [
          'Weak cooling in extreme heat',
          'Refrigerant leak from line fittings',
          'Musty smell from evaporator',
        ],
      },
      {
        slug: 'hilux',
        nameAr: 'هايلكس',
        nameEn: 'Hilux',
        years: '2010-2026',
        commonAcIssuesAr: [
          'تلف الكمبروسر بسبب الاستخدام الشاق',
          'تسريب من المكثف بسبب الحصى والأتربة',
          'ضعف تبريد المكيف الخلفي',
        ],
        commonAcIssuesEn: [
          'Compressor failure due to heavy use',
          'Condenser leak from gravel and dust',
          'Weak rear AC cooling',
        ],
      },
      {
        slug: 'land-cruiser',
        nameAr: 'لاند كروزر',
        nameEn: 'Land Cruiser',
        years: '2008-2026',
        commonAcIssuesAr: [
          'ضعف تبريد المكيف الخلفي',
          'تسريب من صمامات المكيف المزدوج',
          'تلف الكمبروسر في المناطق الصحراوية',
        ],
        commonAcIssuesEn: [
          'Weak rear AC cooling',
          'Leak from dual AC valves',
          'Compressor failure in desert conditions',
        ],
      },
      {
        slug: 'fortuner',
        nameAr: 'فورتشنر',
        nameEn: 'Fortuner',
        years: '2012-2026',
        commonAcIssuesAr: [
          'ضعف تبريد بسبب فلتر مقصورة مسدود',
          'تسريب من المكثف',
          'صوت صرير من سير المكيف',
        ],
        commonAcIssuesEn: [
          'Weak cooling from clogged cabin filter',
          'Condenser leak',
          'AC belt squealing',
        ],
      },
      {
        slug: 'rav4',
        nameAr: 'راف فور',
        nameEn: 'RAV4',
        years: '2013-2026',
        commonAcIssuesAr: [
          'ضعف تبريد في الصيف',
          'رائحة كريهة عند التشغيل الأول',
          'تسريب فريون بطيء',
        ],
        commonAcIssuesEn: [
          'Weak cooling in summer',
          'Bad smell on first start',
          'Slow refrigerant leak',
        ],
      },
    ],
    generalIssuesAr:
      'سيارات تويوتا معروفة بموثوقيتها لكن مع حرارة السعودية الشديدة، تعاني من مشاكل التكييف خاصة نقص الفريون وتسريبات المكثف. الصيانة الدورية كل 6 أشهر ضرورية.',
    generalIssuesEn:
      'Toyota vehicles are known for reliability, but in Saudi Arabia\'s extreme heat, they suffer from AC issues especially low refrigerant and condenser leaks. Regular maintenance every 6 months is essential.',
    faqs: [
      {
        questionAr: 'كم يكلف إصلاح مكيف تويوتا في السعودية؟',
        questionEn: 'How much does Toyota AC repair cost in Saudi Arabia?',
        answerAr: 'تتراوح تكلفة إصلاح مكيف تويوتا من 100 ريال لتعبئة الفريون إلى 3000+ ريال لتغيير الكمبروسر حسب الموديل ونوع القطعة.',
        answerEn: 'Toyota AC repair costs range from 100 SAR for a freon recharge to 3000+ SAR for compressor replacement depending on model and part type.',
      },
    ],
  },
  {
    slug: 'hyundai',
    nameAr: 'هيونداي',
    nameEn: 'Hyundai',
    logoPath: '/images/brands/hyundai.webp',
    popularity: 'high',
    models: [
      {
        slug: 'accent',
        nameAr: 'أكسنت',
        nameEn: 'Accent',
        years: '2012-2026',
        commonAcIssuesAr: [
          'تلف الكمبروسر (مشكلة شائعة)',
          'ضعف تبريد بسبب مكثف صغير',
          'انسداد فلتر المقصورة بسرعة بسبب الغبار',
        ],
        commonAcIssuesEn: [
          'Compressor failure (common issue)',
          'Weak cooling due to small condenser',
          'Cabin filter clogs quickly due to dust',
        ],
      },
      {
        slug: 'elantra',
        nameAr: 'النترا',
        nameEn: 'Elantra',
        years: '2011-2026',
        commonAcIssuesAr: [
          'تسريب فريون من المبخر',
          'ضعف تبريد في الصيف',
          'صوت من موتور المروحة',
        ],
        commonAcIssuesEn: [
          'Refrigerant leak from evaporator',
          'Weak cooling in summer',
          'Noise from blower motor',
        ],
      },
      {
        slug: 'sonata',
        nameAr: 'سوناتا',
        nameEn: 'Sonata',
        years: '2011-2026',
        commonAcIssuesAr: [
          'ضعف كلتش الكمبروسر',
          'تسريب من خطوط المكيف',
          'رائحة عفنة من المبخر',
        ],
        commonAcIssuesEn: [
          'Weak compressor clutch',
          'Leak from AC lines',
          'Musty smell from evaporator',
        ],
      },
      {
        slug: 'tucson',
        nameAr: 'توسان',
        nameEn: 'Tucson',
        years: '2015-2026',
        commonAcIssuesAr: [
          'ضعف تبريد بسبب حجم المقصورة',
          'تسريب من المكثف',
          'مشكلة في حساس الضغط',
        ],
        commonAcIssuesEn: [
          'Weak cooling due to cabin size',
          'Condenser leak',
          'Pressure sensor issue',
        ],
      },
      {
        slug: 'santa-fe',
        nameAr: 'سانتافي',
        nameEn: 'Santa Fe',
        years: '2013-2026',
        commonAcIssuesAr: [
          'ضعف تبريد المكيف الخلفي',
          'تلف الكمبروسر في الموديلات الأقدم',
          'تسريب فريون',
        ],
        commonAcIssuesEn: [
          'Weak rear AC cooling',
          'Compressor failure in older models',
          'Refrigerant leak',
        ],
      },
    ],
    generalIssuesAr:
      'سيارات هيونداي منتشرة في السعودية وأكثر مشاكل المكيف شيوعاً فيها هي تلف الكمبروسر وتسريب الفريون. قطع الغيار متوفرة بأسعار مناسبة.',
    generalIssuesEn:
      'Hyundai vehicles are widespread in Saudi Arabia. The most common AC problems are compressor failure and refrigerant leaks. Spare parts are available at reasonable prices.',
    faqs: [
      {
        questionAr: 'هل قطع غيار مكيف هيونداي متوفرة؟',
        questionEn: 'Are Hyundai AC spare parts available?',
        answerAr: 'نعم، قطع غيار مكيف هيونداي متوفرة بكثرة بالأصلي والبديل. الأسعار مناسبة مقارنة بالسيارات الأوروبية.',
        answerEn: 'Yes, Hyundai AC parts are widely available in OEM and aftermarket options. Prices are reasonable compared to European cars.',
      },
    ],
  },
  {
    slug: 'kia',
    nameAr: 'كيا',
    nameEn: 'Kia',
    logoPath: '/images/brands/kia.webp',
    popularity: 'high',
    models: [
      {
        slug: 'cerato',
        nameAr: 'سيراتو',
        nameEn: 'Cerato',
        years: '2013-2026',
        commonAcIssuesAr: [
          'تلف كلتش الكمبروسر',
          'تسريب فريون من الخطوط',
          'رائحة كريهة بسبب الرطوبة',
        ],
        commonAcIssuesEn: [
          'Compressor clutch failure',
          'Refrigerant leak from lines',
          'Bad smell due to moisture',
        ],
      },
      {
        slug: 'optima',
        nameAr: 'أوبتيما',
        nameEn: 'Optima',
        years: '2011-2023',
        commonAcIssuesAr: [
          'ضعف التبريد في الحرارة الشديدة',
          'تسريب من المبخر',
          'مشكلة في نظام التحكم الآلي',
        ],
        commonAcIssuesEn: [
          'Weak cooling in extreme heat',
          'Evaporator leak',
          'Automatic climate control issues',
        ],
      },
      {
        slug: 'sportage',
        nameAr: 'سبورتاج',
        nameEn: 'Sportage',
        years: '2011-2026',
        commonAcIssuesAr: [
          'ضعف تبريد المكيف الخلفي',
          'تلف المكثف من الحجارة',
          'تسريب فريون بطيء',
        ],
        commonAcIssuesEn: [
          'Weak rear AC cooling',
          'Condenser damage from stones',
          'Slow refrigerant leak',
        ],
      },
      {
        slug: 'k5',
        nameAr: 'كي 5',
        nameEn: 'K5',
        years: '2020-2026',
        commonAcIssuesAr: [
          'ضعف تبريد بسيط في الصيف',
          'صوت من أكتويتر باب الخلط',
          'انسداد فلتر المقصورة من الغبار',
        ],
        commonAcIssuesEn: [
          'Slight cooling weakness in summer',
          'Blend door actuator noise',
          'Cabin filter clogging from dust',
        ],
      },
    ],
    generalIssuesAr:
      'سيارات كيا تشارك العديد من مكونات المكيف مع هيونداي. أكثر المشاكل شيوعاً في السعودية هي تلف كلتش الكمبروسر ونقص الفريون.',
    generalIssuesEn:
      'Kia vehicles share many AC components with Hyundai. The most common issues in Saudi Arabia are compressor clutch failure and low refrigerant.',
    faqs: [
      {
        questionAr: 'هل قطع مكيف كيا وهيونداي متشابهة؟',
        questionEn: 'Are Kia and Hyundai AC parts interchangeable?',
        answerAr: 'بعض القطع متشابهة أو متوافقة بين كيا وهيونداي بسبب المنصة المشتركة، لكن ليس الكل. يجب التأكد من رقم القطعة.',
        answerEn: 'Some parts are similar or compatible between Kia and Hyundai due to shared platforms, but not all. Always verify part numbers.',
      },
    ],
  },
  {
    slug: 'nissan',
    nameAr: 'نيسان',
    nameEn: 'Nissan',
    logoPath: '/images/brands/nissan.webp',
    popularity: 'high',
    models: [
      {
        slug: 'patrol',
        nameAr: 'باترول',
        nameEn: 'Patrol',
        years: '2010-2026',
        commonAcIssuesAr: [
          'ضعف تبريد المكيف الخلفي',
          'تلف الكمبروسر من الحمل الزائد',
          'تسريب من المبخر الخلفي',
        ],
        commonAcIssuesEn: [
          'Weak rear AC cooling',
          'Compressor failure from overload',
          'Rear evaporator leak',
        ],
      },
      {
        slug: 'altima',
        nameAr: 'ألتيما',
        nameEn: 'Altima',
        years: '2013-2026',
        commonAcIssuesAr: [
          'تسريب فريون من المكثف',
          'ضعف تبريد في الصيف',
          'مشكلة في حساس الحرارة',
        ],
        commonAcIssuesEn: [
          'Refrigerant leak from condenser',
          'Weak cooling in summer',
          'Temperature sensor issue',
        ],
      },
      {
        slug: 'sunny',
        nameAr: 'صني',
        nameEn: 'Sunny',
        years: '2012-2026',
        commonAcIssuesAr: [
          'تلف الكمبروسر بسبب صغر حجمه',
          'ضعف تبريد شديد في الصيف',
          'تسريب من الخطوط',
        ],
        commonAcIssuesEn: [
          'Compressor failure due to small size',
          'Very weak cooling in summer',
          'Line leak',
        ],
      },
      {
        slug: 'x-trail',
        nameAr: 'إكس تريل',
        nameEn: 'X-Trail',
        years: '2015-2026',
        commonAcIssuesAr: [
          'ضعف تبريد بسبب حجم المقصورة',
          'رائحة عفنة من المبخر',
          'انسداد أنبوب التصريف',
        ],
        commonAcIssuesEn: [
          'Weak cooling due to cabin size',
          'Musty smell from evaporator',
          'Clogged drain tube',
        ],
      },
    ],
    generalIssuesAr:
      'سيارات نيسان وخاصة باترول من أكثر السيارات شيوعاً في السعودية. مشاكل المكيف الرئيسية تتركز في ضعف التبريد وتسريب الفريون خاصة في المكيف الخلفي.',
    generalIssuesEn:
      'Nissan vehicles, especially the Patrol, are among the most popular in Saudi Arabia. Main AC problems focus on weak cooling and refrigerant leaks, especially in rear AC systems.',
    faqs: [
      {
        questionAr: 'كم يكلف كمبروسر نيسان باترول؟',
        questionEn: 'How much does a Nissan Patrol compressor cost?',
        answerAr: 'كمبروسر نيسان باترول الأصلي يتراوح بين 2000-3500 ريال. البديل الجيد يبدأ من 800 ريال. أضف 300-500 ريال للتركيب.',
        answerEn: 'An OEM Nissan Patrol compressor ranges from 2000-3500 SAR. Good aftermarket options start from 800 SAR. Add 300-500 SAR for installation.',
      },
    ],
  },
  {
    slug: 'chevrolet',
    nameAr: 'شيفروليه',
    nameEn: 'Chevrolet',
    logoPath: '/images/brands/chevrolet.webp',
    popularity: 'high',
    models: [
      {
        slug: 'tahoe',
        nameAr: 'تاهو',
        nameEn: 'Tahoe',
        years: '2010-2026',
        commonAcIssuesAr: [
          'ضعف تبريد المكيف الخلفي',
          'تسريب فريون من المبخر الأمامي',
          'أكتويتر باب الخلط يحتاج تغيير',
        ],
        commonAcIssuesEn: [
          'Weak rear AC cooling',
          'Front evaporator refrigerant leak',
          'Blend door actuator needs replacement',
        ],
      },
      {
        slug: 'suburban',
        nameAr: 'سوبربان',
        nameEn: 'Suburban',
        years: '2010-2026',
        commonAcIssuesAr: [
          'ضعف تبريد بسبب حجم المقصورة الكبير',
          'تلف الكمبروسر من الحمل المستمر',
          'تسريب من المبخر',
        ],
        commonAcIssuesEn: [
          'Weak cooling due to large cabin',
          'Compressor failure from continuous load',
          'Evaporator leak',
        ],
      },
      {
        slug: 'silverado',
        nameAr: 'سلفرادو',
        nameEn: 'Silverado',
        years: '2010-2026',
        commonAcIssuesAr: [
          'تسريب فريون من الخطوط',
          'تلف مروحة المكثف',
          'سير مكيف يحتاج تغيير دوري',
        ],
        commonAcIssuesEn: [
          'Refrigerant leak from lines',
          'Condenser fan failure',
          'AC belt needs regular replacement',
        ],
      },
      {
        slug: 'captiva',
        nameAr: 'كابتيفا',
        nameEn: 'Captiva',
        years: '2012-2022',
        commonAcIssuesAr: [
          'تلف المكثف بسبب موقعه المكشوف',
          'ضعف تبريد في الصيف',
          'تسريب من وصلات الخطوط',
        ],
        commonAcIssuesEn: [
          'Condenser damage due to exposed position',
          'Weak cooling in summer',
          'Leak from line fittings',
        ],
      },
    ],
    generalIssuesAr:
      'سيارات شيفروليه الكبيرة (تاهو، سوبربان) تعاني من مشاكل المكيف بسبب حجم المقصورة الكبير والحمل على الكمبروسر. تحتاج صيانة دورية أكثر.',
    generalIssuesEn:
      'Large Chevrolet vehicles (Tahoe, Suburban) suffer from AC issues due to large cabin size and compressor load. They require more frequent maintenance.',
    faqs: [
      {
        questionAr: 'المكيف الخلفي في تاهو ضعيف، ما الحل؟',
        questionEn: 'Rear AC in Tahoe is weak, what is the fix?',
        answerAr: 'تحقق من مستوى الفريون أولاً. ثم افحص المبخر الخلفي وصمام التمدد الخلفي. في بعض الموديلات يحتاج تغيير صمام التمدد.',
        answerEn: 'Check refrigerant level first. Then inspect the rear evaporator and expansion valve. In some models, the expansion valve needs replacement.',
      },
    ],
  },
  {
    slug: 'ford',
    nameAr: 'فورد',
    nameEn: 'Ford',
    logoPath: '/images/brands/ford.webp',
    popularity: 'high',
    models: [
      {
        slug: 'expedition',
        nameAr: 'اكسبدشن',
        nameEn: 'Expedition',
        years: '2010-2026',
        commonAcIssuesAr: [
          'ضعف المكيف الخلفي',
          'تسريب من المبخر',
          'أكتويتر باب الخلط يتلف بشكل متكرر',
        ],
        commonAcIssuesEn: [
          'Weak rear AC',
          'Evaporator leak',
          'Blend door actuator fails frequently',
        ],
      },
      {
        slug: 'taurus',
        nameAr: 'تورس',
        nameEn: 'Taurus',
        years: '2010-2020',
        commonAcIssuesAr: [
          'تسريب فريون من الخطوط',
          'ضعف تبريد في الصيف',
          'مشكلة في كلتش الكمبروسر',
        ],
        commonAcIssuesEn: [
          'Refrigerant leak from lines',
          'Weak cooling in summer',
          'Compressor clutch issue',
        ],
      },
      {
        slug: 'f-150',
        nameAr: 'اف 150',
        nameEn: 'F-150',
        years: '2012-2026',
        commonAcIssuesAr: [
          'تسريب من المكثف بسبب الحصى',
          'تلف سير المكيف',
          'ضعف تبريد أثناء الوقوف',
        ],
        commonAcIssuesEn: [
          'Condenser leak from gravel',
          'AC belt wear',
          'Weak cooling at idle',
        ],
      },
      {
        slug: 'explorer',
        nameAr: 'اكسبلورر',
        nameEn: 'Explorer',
        years: '2013-2026',
        commonAcIssuesAr: [
          'ضعف المكيف الخلفي',
          'رائحة عفنة من المبخر',
          'تسريب بطيء من الوصلات',
        ],
        commonAcIssuesEn: [
          'Weak rear AC',
          'Musty smell from evaporator',
          'Slow leak from fittings',
        ],
      },
    ],
    generalIssuesAr:
      'سيارات فورد الأمريكية تعاني من مشاكل أكتويتر باب الخلط بشكل خاص. كما أن المكيف الخلفي في اكسبدشن واكسبلورر يحتاج عناية خاصة.',
    generalIssuesEn:
      'American Ford vehicles particularly suffer from blend door actuator issues. The rear AC in Expedition and Explorer also needs special attention.',
    faqs: [
      {
        questionAr: 'كم يكلف إصلاح أكتويتر باب الخلط في فورد؟',
        questionEn: 'How much does a Ford blend door actuator repair cost?',
        answerAr: 'القطعة بين 150-400 ريال والتركيب بين 200-500 ريال حسب الموديل. بعض الموديلات تحتاج فك لوحة القيادة مما يزيد التكلفة.',
        answerEn: 'The part costs 150-400 SAR and installation 200-500 SAR depending on model. Some models require dashboard removal, increasing the cost.',
      },
    ],
  },
  {
    slug: 'honda',
    nameAr: 'هوندا',
    nameEn: 'Honda',
    logoPath: '/images/brands/honda.webp',
    popularity: 'high',
    models: [
      {
        slug: 'accord',
        nameAr: 'أكورد',
        nameEn: 'Accord',
        years: '2012-2026',
        commonAcIssuesAr: [
          'تسريب فريون من المكثف',
          'ضعف تبريد في الصيف',
          'صوت من الكمبروسر',
        ],
        commonAcIssuesEn: [
          'Refrigerant leak from condenser',
          'Weak cooling in summer',
          'Compressor noise',
        ],
      },
      {
        slug: 'civic',
        nameAr: 'سيفيك',
        nameEn: 'Civic',
        years: '2012-2026',
        commonAcIssuesAr: [
          'ضعف تبريد بسبب كمبروسر صغير',
          'تسريب من المبخر',
          'رائحة كريهة من المكيف',
        ],
        commonAcIssuesEn: [
          'Weak cooling due to small compressor',
          'Evaporator leak',
          'Bad AC smell',
        ],
      },
      {
        slug: 'crv',
        nameAr: 'سي آر في',
        nameEn: 'CR-V',
        years: '2012-2026',
        commonAcIssuesAr: [
          'تسريب من المكثف',
          'ضعف تبريد في الحرارة الشديدة',
          'مشكلة في مروحة المكثف',
        ],
        commonAcIssuesEn: [
          'Condenser leak',
          'Weak cooling in extreme heat',
          'Condenser fan issue',
        ],
      },
      {
        slug: 'pilot',
        nameAr: 'بايلوت',
        nameEn: 'Pilot',
        years: '2016-2026',
        commonAcIssuesAr: [
          'ضعف المكيف الخلفي',
          'تسريب بطيء من الخطوط',
          'انسداد فلتر المقصورة',
        ],
        commonAcIssuesEn: [
          'Weak rear AC',
          'Slow leak from lines',
          'Clogged cabin filter',
        ],
      },
    ],
    generalIssuesAr:
      'سيارات هوندا تتميز بنظام تكييف موثوق عموماً. أكثر المشاكل شيوعاً تسريب المكثف والمبخر مع التقدم في العمر.',
    generalIssuesEn:
      'Honda vehicles generally have reliable AC systems. The most common problems are condenser and evaporator leaks with age.',
    faqs: [
      {
        questionAr: 'مكيف هوندا سيفيك ما يبرد زين في الصيف، وش الحل؟',
        questionEn: 'Honda Civic AC not cooling well in summer, what is the fix?',
        answerAr: 'سيفيك لها كمبروسر أصغر نسبياً. تأكد من كمية الفريون المناسبة وحالة المكثف. تنظيف المكثف وتعبئة الفريون يحسن الأداء كثيراً.',
        answerEn: 'Civic has a relatively small compressor. Ensure proper freon charge and condenser condition. Cleaning the condenser and recharging freon improves performance significantly.',
      },
    ],
  },
  {
    slug: 'lexus',
    nameAr: 'لكزس',
    nameEn: 'Lexus',
    logoPath: '/images/brands/lexus.webp',
    popularity: 'high',
    models: [
      {
        slug: 'es',
        nameAr: 'إي إس',
        nameEn: 'ES',
        years: '2013-2026',
        commonAcIssuesAr: [
          'ضعف تبريد بسيط في الحرارة الشديدة',
          'رائحة عفنة عند التشغيل الأول',
          'تسريب بطيء من المكثف',
        ],
        commonAcIssuesEn: [
          'Slight cooling weakness in extreme heat',
          'Musty smell on first start',
          'Slow condenser leak',
        ],
      },
      {
        slug: 'lx',
        nameAr: 'إل إكس',
        nameEn: 'LX',
        years: '2008-2026',
        commonAcIssuesAr: [
          'ضعف المكيف الخلفي',
          'تسريب من صمامات المكيف المزدوج',
          'تلف الكمبروسر في المناطق الصحراوية',
        ],
        commonAcIssuesEn: [
          'Weak rear AC',
          'Dual AC valve leaks',
          'Compressor failure in desert conditions',
        ],
      },
      {
        slug: 'rx',
        nameAr: 'آر إكس',
        nameEn: 'RX',
        years: '2015-2026',
        commonAcIssuesAr: [
          'ضعف تبريد في الصيف',
          'رائحة كريهة من المبخر',
          'مشكلة في نظام المناخ الآلي',
        ],
        commonAcIssuesEn: [
          'Weak cooling in summer',
          'Bad smell from evaporator',
          'Auto climate control issues',
        ],
      },
      {
        slug: 'is',
        nameAr: 'آي إس',
        nameEn: 'IS',
        years: '2014-2026',
        commonAcIssuesAr: [
          'تسريب فريون بطيء',
          'ضعف تبريد عند الوقوف',
          'مشكلة في مروحة المكثف',
        ],
        commonAcIssuesEn: [
          'Slow refrigerant leak',
          'Weak cooling at idle',
          'Condenser fan issue',
        ],
      },
    ],
    generalIssuesAr:
      'لكزس تستخدم مكونات تويوتا في نظام التكييف مع إضافة ميزات فاخرة. مشاكلها مشابهة لتويوتا لكن تكلفة الإصلاح أعلى بسبب القطع الأصلية.',
    generalIssuesEn:
      'Lexus uses Toyota components in its AC system with luxury features added. Issues are similar to Toyota but repair costs are higher due to OEM parts.',
    faqs: [
      {
        questionAr: 'هل يمكن استخدام قطع تويوتا في مكيف لكزس؟',
        questionEn: 'Can Toyota parts be used for Lexus AC?',
        answerAr: 'بعض القطع الأساسية متوافقة مثل فلاتر المقصورة والفريون. لكن الكمبروسر والمبخر عادةً مختلفين ويجب استخدام القطع المخصصة.',
        answerEn: 'Some basic parts are compatible like cabin filters and refrigerant. But the compressor and evaporator are usually different and require specific parts.',
      },
    ],
  },

  // ── MEDIUM POPULARITY (12 brands) ──────────────────────────────────────────
  {
    slug: 'gmc',
    nameAr: 'جي إم سي',
    nameEn: 'GMC',
    logoPath: '/images/brands/gmc.webp',
    popularity: 'medium',
    models: [
      {
        slug: 'yukon',
        nameAr: 'يوكن',
        nameEn: 'Yukon',
        years: '2010-2026',
        commonAcIssuesAr: ['ضعف المكيف الخلفي', 'تسريب من المبخر', 'أكتويتر باب الخلط'],
        commonAcIssuesEn: ['Weak rear AC', 'Evaporator leak', 'Blend door actuator'],
      },
      {
        slug: 'sierra',
        nameAr: 'سييرا',
        nameEn: 'Sierra',
        years: '2010-2026',
        commonAcIssuesAr: ['تسريب فريون', 'تلف مروحة المكثف', 'ضعف تبريد'],
        commonAcIssuesEn: ['Refrigerant leak', 'Condenser fan failure', 'Weak cooling'],
      },
    ],
    generalIssuesAr:
      'جي إم سي تشارك نفس منصة شيفروليه. مشاكل المكيف متشابهة وتتركز في أكتويتر باب الخلط وضعف المكيف الخلفي.',
    generalIssuesEn:
      'GMC shares the same platform as Chevrolet. AC problems are similar, focusing on blend door actuators and weak rear AC.',
    faqs: [],
  },
  {
    slug: 'mercedes',
    nameAr: 'مرسيدس',
    nameEn: 'Mercedes-Benz',
    logoPath: '/images/brands/mercedes.webp',
    popularity: 'medium',
    models: [
      {
        slug: 's-class',
        nameAr: 'إس كلاس',
        nameEn: 'S-Class',
        years: '2014-2026',
        commonAcIssuesAr: ['مشكلة في نظام المناخ الآلي', 'تسريب فريون', 'أكتويتر باب الخلط'],
        commonAcIssuesEn: ['Auto climate control issues', 'Refrigerant leak', 'Blend door actuator'],
      },
      {
        slug: 'e-class',
        nameAr: 'إي كلاس',
        nameEn: 'E-Class',
        years: '2014-2026',
        commonAcIssuesAr: ['تسريب من المكثف', 'ضعف تبريد', 'رائحة عفنة'],
        commonAcIssuesEn: ['Condenser leak', 'Weak cooling', 'Musty smell'],
      },
    ],
    generalIssuesAr:
      'سيارات مرسيدس تستخدم أنظمة تكييف متطورة. الإصلاح يتطلب فنيين متخصصين وقطع غيار أصلية مرتفعة الثمن.',
    generalIssuesEn:
      'Mercedes vehicles use advanced AC systems. Repair requires specialized technicians and expensive OEM parts.',
    faqs: [],
  },
  {
    slug: 'bmw',
    nameAr: 'بي إم دبليو',
    nameEn: 'BMW',
    logoPath: '/images/brands/bmw.webp',
    popularity: 'medium',
    models: [
      {
        slug: '5-series',
        nameAr: 'الفئة الخامسة',
        nameEn: '5 Series',
        years: '2014-2026',
        commonAcIssuesAr: ['تسريب فريون', 'مشكلة في نظام المناخ', 'تلف الكمبروسر'],
        commonAcIssuesEn: ['Refrigerant leak', 'Climate system issue', 'Compressor failure'],
      },
      {
        slug: '3-series',
        nameAr: 'الفئة الثالثة',
        nameEn: '3 Series',
        years: '2012-2026',
        commonAcIssuesAr: ['ضعف تبريد', 'رائحة كريهة', 'تسريب من المبخر'],
        commonAcIssuesEn: ['Weak cooling', 'Bad smell', 'Evaporator leak'],
      },
    ],
    generalIssuesAr:
      'بي إم دبليو تعاني من تسريبات الفريون أكثر من السيارات اليابانية. قطع الغيار مرتفعة الثمن وتحتاج أجهزة تشخيص متخصصة.',
    generalIssuesEn:
      'BMW suffers from refrigerant leaks more than Japanese cars. Parts are expensive and require specialized diagnostic equipment.',
    faqs: [],
  },
  {
    slug: 'mitsubishi',
    nameAr: 'ميتسوبيشي',
    nameEn: 'Mitsubishi',
    logoPath: '/images/brands/mitsubishi.webp',
    popularity: 'medium',
    models: [
      {
        slug: 'pajero',
        nameAr: 'باجيرو',
        nameEn: 'Pajero',
        years: '2010-2021',
        commonAcIssuesAr: ['تلف الكمبروسر', 'تسريب فريون', 'ضعف المكيف الخلفي'],
        commonAcIssuesEn: ['Compressor failure', 'Refrigerant leak', 'Weak rear AC'],
      },
      {
        slug: 'outlander',
        nameAr: 'أوتلاندر',
        nameEn: 'Outlander',
        years: '2016-2026',
        commonAcIssuesAr: ['ضعف تبريد', 'تسريب من المكثف', 'رائحة كريهة'],
        commonAcIssuesEn: ['Weak cooling', 'Condenser leak', 'Bad smell'],
      },
    ],
    generalIssuesAr:
      'ميتسوبيشي باجيرو من السيارات الشائعة في السعودية. مشاكل المكيف تتركز في الكمبروسر والتسريبات بسبب الاستخدام الشاق.',
    generalIssuesEn:
      'Mitsubishi Pajero is common in Saudi Arabia. AC problems focus on compressor and leaks due to heavy use.',
    faqs: [],
  },
  {
    slug: 'mazda',
    nameAr: 'مازدا',
    nameEn: 'Mazda',
    logoPath: '/images/brands/mazda.webp',
    popularity: 'medium',
    models: [
      {
        slug: 'cx-5',
        nameAr: 'سي إكس 5',
        nameEn: 'CX-5',
        years: '2013-2026',
        commonAcIssuesAr: ['ضعف تبريد في الصيف', 'رائحة عفنة', 'تسريب بطيء'],
        commonAcIssuesEn: ['Weak cooling in summer', 'Musty smell', 'Slow leak'],
      },
      {
        slug: 'mazda-3',
        nameAr: 'مازدا 3',
        nameEn: 'Mazda 3',
        years: '2014-2026',
        commonAcIssuesAr: ['ضعف تبريد', 'تسريب فريون', 'انسداد فلتر المقصورة'],
        commonAcIssuesEn: ['Weak cooling', 'Refrigerant leak', 'Clogged cabin filter'],
      },
    ],
    generalIssuesAr:
      'مازدا تتميز بأنظمة تكييف جيدة لكنها تعاني في حرارة السعودية الشديدة من ضعف التبريد خاصة مع المكينات الصغيرة.',
    generalIssuesEn:
      'Mazda has good AC systems but struggles in Saudi Arabia\'s extreme heat with weak cooling, especially with smaller engines.',
    faqs: [],
  },
  {
    slug: 'volkswagen',
    nameAr: 'فولكس واجن',
    nameEn: 'Volkswagen',
    logoPath: '/images/brands/volkswagen.webp',
    popularity: 'medium',
    models: [
      {
        slug: 'tiguan',
        nameAr: 'تيجوان',
        nameEn: 'Tiguan',
        years: '2016-2026',
        commonAcIssuesAr: ['تسريب فريون', 'مشكلة في الكمبروسر', 'ضعف تبريد'],
        commonAcIssuesEn: ['Refrigerant leak', 'Compressor issue', 'Weak cooling'],
      },
    ],
    generalIssuesAr: 'فولكس واجن تحتاج قطع غيار أوروبية وتكلفة صيانة أعلى. التشخيص بالكمبيوتر ضروري.',
    generalIssuesEn: 'Volkswagen needs European parts and higher maintenance costs. Computer diagnostics are essential.',
    faqs: [],
  },
  {
    slug: 'audi',
    nameAr: 'أودي',
    nameEn: 'Audi',
    logoPath: '/images/brands/audi.webp',
    popularity: 'medium',
    models: [
      {
        slug: 'a6',
        nameAr: 'أي 6',
        nameEn: 'A6',
        years: '2015-2026',
        commonAcIssuesAr: ['تسريب فريون', 'مشكلة في نظام المناخ', 'تلف الكمبروسر'],
        commonAcIssuesEn: ['Refrigerant leak', 'Climate system issue', 'Compressor failure'],
      },
    ],
    generalIssuesAr: 'أودي تشارك أنظمة التكييف مع فولكس واجن. القطع مرتفعة الثمن وتحتاج فنيين متخصصين.',
    generalIssuesEn: 'Audi shares AC systems with Volkswagen. Parts are expensive and require specialized technicians.',
    faqs: [],
  },
  {
    slug: 'suzuki',
    nameAr: 'سوزوكي',
    nameEn: 'Suzuki',
    logoPath: '/images/brands/suzuki.webp',
    popularity: 'medium',
    models: [
      {
        slug: 'vitara',
        nameAr: 'فيتارا',
        nameEn: 'Vitara',
        years: '2015-2026',
        commonAcIssuesAr: ['ضعف تبريد في الصيف', 'تسريب فريون', 'تلف المكثف'],
        commonAcIssuesEn: ['Weak cooling in summer', 'Refrigerant leak', 'Condenser damage'],
      },
    ],
    generalIssuesAr: 'سوزوكي سيارات اقتصادية بأنظمة تكييف بسيطة. الصيانة سهلة والقطع رخيصة.',
    generalIssuesEn: 'Suzuki vehicles are economical with simple AC systems. Maintenance is easy and parts are affordable.',
    faqs: [],
  },
  {
    slug: 'subaru',
    nameAr: 'سوبارو',
    nameEn: 'Subaru',
    logoPath: '/images/brands/subaru.webp',
    popularity: 'medium',
    models: [
      {
        slug: 'outback',
        nameAr: 'أوتباك',
        nameEn: 'Outback',
        years: '2015-2026',
        commonAcIssuesAr: ['ضعف تبريد', 'تسريب فريون بطيء', 'رائحة كريهة'],
        commonAcIssuesEn: ['Weak cooling', 'Slow refrigerant leak', 'Bad smell'],
      },
    ],
    generalIssuesAr: 'سوبارو ليست شائعة جداً في السعودية لكنها تعاني من مشاكل التبريد في الحرارة الشديدة.',
    generalIssuesEn: 'Subaru is not very common in Saudi Arabia but suffers from cooling problems in extreme heat.',
    faqs: [],
  },
  {
    slug: 'geely',
    nameAr: 'جيلي',
    nameEn: 'Geely',
    logoPath: '/images/brands/geely.webp',
    popularity: 'medium',
    models: [
      {
        slug: 'emgrand',
        nameAr: 'إمجراند',
        nameEn: 'Emgrand',
        years: '2016-2026',
        commonAcIssuesAr: ['ضعف تبريد', 'تلف الكمبروسر مبكراً', 'جودة قطع منخفضة'],
        commonAcIssuesEn: ['Weak cooling', 'Early compressor failure', 'Low part quality'],
      },
      {
        slug: 'coolray',
        nameAr: 'كول راي',
        nameEn: 'Coolray',
        years: '2020-2026',
        commonAcIssuesAr: ['ضعف تبريد في الصيف', 'تسريب فريون', 'مشكلة كهربائية'],
        commonAcIssuesEn: ['Weak cooling in summer', 'Refrigerant leak', 'Electrical issue'],
      },
    ],
    generalIssuesAr: 'جيلي سيارات صينية انتشرت في السعودية مؤخراً. أنظمة التكييف فيها أضعف من اليابانية وتحتاج صيانة أكثر.',
    generalIssuesEn: 'Geely is a Chinese brand recently popular in Saudi Arabia. AC systems are weaker than Japanese ones and need more maintenance.',
    faqs: [],
  },
  {
    slug: 'changan',
    nameAr: 'شانجان',
    nameEn: 'Changan',
    logoPath: '/images/brands/changan.webp',
    popularity: 'medium',
    models: [
      {
        slug: 'alsvin',
        nameAr: 'ألسفن',
        nameEn: 'Alsvin',
        years: '2020-2026',
        commonAcIssuesAr: ['ضعف تبريد', 'تلف كمبروسر مبكر', 'تسريب فريون'],
        commonAcIssuesEn: ['Weak cooling', 'Early compressor failure', 'Refrigerant leak'],
      },
      {
        slug: 'cs35-plus',
        nameAr: 'سي إس 35 بلس',
        nameEn: 'CS35 Plus',
        years: '2020-2026',
        commonAcIssuesAr: ['ضعف تبريد في الصيف', 'جودة قطع منخفضة', 'مشكلة في حساس الضغط'],
        commonAcIssuesEn: ['Weak cooling in summer', 'Low part quality', 'Pressure sensor issue'],
      },
    ],
    generalIssuesAr: 'شانجان سيارات صينية اقتصادية. التكييف يعاني في حرارة السعودية الشديدة وقد يحتاج تبديل كمبروسر مبكر.',
    generalIssuesEn: 'Changan vehicles are economical Chinese cars. AC struggles in Saudi heat and may need early compressor replacement.',
    faqs: [],
  },
  {
    slug: 'mg',
    nameAr: 'إم جي',
    nameEn: 'MG',
    logoPath: '/images/brands/mg.webp',
    popularity: 'medium',
    models: [
      {
        slug: 'mg5',
        nameAr: 'إم جي 5',
        nameEn: 'MG5',
        years: '2020-2026',
        commonAcIssuesAr: ['ضعف تبريد', 'تسريب فريون', 'مشكلة كهربائية'],
        commonAcIssuesEn: ['Weak cooling', 'Refrigerant leak', 'Electrical issue'],
      },
      {
        slug: 'zs',
        nameAr: 'زد إس',
        nameEn: 'ZS',
        years: '2020-2026',
        commonAcIssuesAr: ['ضعف تبريد في الصيف', 'تلف مبكر للمكثف', 'رائحة كريهة'],
        commonAcIssuesEn: ['Weak cooling in summer', 'Early condenser damage', 'Bad smell'],
      },
    ],
    generalIssuesAr: 'إم جي سيارات صينية-بريطانية انتشرت مؤخراً. أنظمة التكييف مقبولة لكنها تحتاج صيانة دورية في حرارة السعودية.',
    generalIssuesEn: 'MG vehicles are Chinese-British cars recently popular. AC systems are acceptable but need regular maintenance in Saudi heat.',
    faqs: [],
  },

  // ── LOW POPULARITY (10 brands) ─────────────────────────────────────────────
  {
    slug: 'dodge',
    nameAr: 'دودج',
    nameEn: 'Dodge',
    logoPath: '/images/brands/dodge.webp',
    popularity: 'low',
    models: [
      {
        slug: 'charger',
        nameAr: 'تشارجر',
        nameEn: 'Charger',
        years: '2011-2024',
        commonAcIssuesAr: ['ضعف تبريد', 'تسريب فريون', 'أكتويتر باب الخلط'],
        commonAcIssuesEn: ['Weak cooling', 'Refrigerant leak', 'Blend door actuator'],
      },
    ],
    generalIssuesAr: 'دودج سيارات أمريكية قوية. مشاكل المكيف مشابهة لشيفروليه وفورد مع تكلفة قطع أعلى قليلاً.',
    generalIssuesEn: 'Dodge vehicles are powerful American cars. AC problems are similar to Chevrolet and Ford with slightly higher part costs.',
    faqs: [],
  },
  {
    slug: 'jeep',
    nameAr: 'جيب',
    nameEn: 'Jeep',
    logoPath: '/images/brands/jeep.webp',
    popularity: 'low',
    models: [
      {
        slug: 'grand-cherokee',
        nameAr: 'جراند شيروكي',
        nameEn: 'Grand Cherokee',
        years: '2011-2026',
        commonAcIssuesAr: ['تسريب فريون', 'ضعف المكيف الخلفي', 'تلف الكمبروسر'],
        commonAcIssuesEn: ['Refrigerant leak', 'Weak rear AC', 'Compressor failure'],
      },
    ],
    generalIssuesAr: 'جيب من السيارات الشائعة في السعودية للاستخدام الصحراوي. المكيف يتعرض لضغط إضافي بسبب الغبار والحرارة.',
    generalIssuesEn: 'Jeep is popular in Saudi Arabia for desert use. AC faces extra stress from dust and heat.',
    faqs: [],
  },
  {
    slug: 'range-rover',
    nameAr: 'رنج روفر',
    nameEn: 'Range Rover',
    logoPath: '/images/brands/range-rover.webp',
    popularity: 'low',
    models: [
      {
        slug: 'range-rover-sport',
        nameAr: 'رنج روفر سبورت',
        nameEn: 'Range Rover Sport',
        years: '2014-2026',
        commonAcIssuesAr: ['تسريب فريون', 'مشكلة في نظام المناخ', 'تلف الكمبروسر'],
        commonAcIssuesEn: ['Refrigerant leak', 'Climate system issue', 'Compressor failure'],
      },
    ],
    generalIssuesAr: 'رنج روفر سيارات فاخرة بأنظمة تكييف معقدة. الإصلاح مكلف ويحتاج فنيين متخصصين وأجهزة تشخيص.',
    generalIssuesEn: 'Range Rover vehicles are luxury with complex AC systems. Repairs are costly and need specialized technicians and diagnostic tools.',
    faqs: [],
  },
  {
    slug: 'porsche',
    nameAr: 'بورش',
    nameEn: 'Porsche',
    logoPath: '/images/brands/porsche.webp',
    popularity: 'low',
    models: [
      {
        slug: 'cayenne',
        nameAr: 'كايين',
        nameEn: 'Cayenne',
        years: '2015-2026',
        commonAcIssuesAr: ['تسريب فريون', 'مشكلة في نظام المناخ', 'تلف مكثف من الحصى'],
        commonAcIssuesEn: ['Refrigerant leak', 'Climate control issue', 'Condenser damage from gravel'],
      },
    ],
    generalIssuesAr: 'بورش سيارات رياضية فاخرة. نظام التكييف متطور وتكلفة الإصلاح مرتفعة جداً.',
    generalIssuesEn: 'Porsche vehicles are luxury sports cars. AC systems are advanced and repair costs are very high.',
    faqs: [],
  },
  {
    slug: 'infiniti',
    nameAr: 'إنفينيتي',
    nameEn: 'Infiniti',
    logoPath: '/images/brands/infiniti.webp',
    popularity: 'low',
    models: [
      {
        slug: 'qx80',
        nameAr: 'كيو إكس 80',
        nameEn: 'QX80',
        years: '2014-2026',
        commonAcIssuesAr: ['ضعف المكيف الخلفي', 'تسريب فريون', 'ضعف مروحة المكثف'],
        commonAcIssuesEn: ['Weak rear AC', 'Refrigerant leak', 'Weak condenser fan'],
      },
    ],
    generalIssuesAr: 'إنفينيتي تستخدم مكونات نيسان مع ميزات فاخرة. مشاكلها مشابهة لنيسان لكن بتكلفة أعلى.',
    generalIssuesEn: 'Infiniti uses Nissan components with luxury features. Problems are similar to Nissan but at higher cost.',
    faqs: [],
  },
  {
    slug: 'cadillac',
    nameAr: 'كاديلاك',
    nameEn: 'Cadillac',
    logoPath: '/images/brands/cadillac.webp',
    popularity: 'low',
    models: [
      {
        slug: 'escalade',
        nameAr: 'اسكاليد',
        nameEn: 'Escalade',
        years: '2015-2026',
        commonAcIssuesAr: ['ضعف المكيف الخلفي', 'أكتويتر باب الخلط', 'تسريب من المبخر'],
        commonAcIssuesEn: ['Weak rear AC', 'Blend door actuator', 'Evaporator leak'],
      },
    ],
    generalIssuesAr: 'كاديلاك تشارك منصة شيفروليه وجي إم سي. المشاكل مشابهة لكن القطع الفاخرة أغلى.',
    generalIssuesEn: 'Cadillac shares the Chevrolet and GMC platform. Problems are similar but luxury parts cost more.',
    faqs: [],
  },
  {
    slug: 'lincoln',
    nameAr: 'لينكون',
    nameEn: 'Lincoln',
    logoPath: '/images/brands/lincoln.webp',
    popularity: 'low',
    models: [
      {
        slug: 'navigator',
        nameAr: 'نافيجيتور',
        nameEn: 'Navigator',
        years: '2015-2026',
        commonAcIssuesAr: ['ضعف المكيف الخلفي', 'تسريب فريون', 'أكتويتر باب الخلط'],
        commonAcIssuesEn: ['Weak rear AC', 'Refrigerant leak', 'Blend door actuator'],
      },
    ],
    generalIssuesAr: 'لينكون تشارك منصة فورد. المكيف يعاني من نفس مشاكل اكسبدشن مع تكلفة أعلى للقطع الفاخرة.',
    generalIssuesEn: 'Lincoln shares the Ford platform. AC suffers the same Expedition issues but with higher luxury part costs.',
    faqs: [],
  },
  {
    slug: 'chery',
    nameAr: 'شيري',
    nameEn: 'Chery',
    logoPath: '/images/brands/chery.webp',
    popularity: 'low',
    models: [
      {
        slug: 'tiggo',
        nameAr: 'تيجو',
        nameEn: 'Tiggo',
        years: '2019-2026',
        commonAcIssuesAr: ['ضعف تبريد', 'تلف كمبروسر مبكر', 'تسريب فريون'],
        commonAcIssuesEn: ['Weak cooling', 'Early compressor failure', 'Refrigerant leak'],
      },
    ],
    generalIssuesAr: 'شيري سيارات صينية اقتصادية. أنظمة التكييف فيها أبسط وقد تحتاج قطع غيار صينية أصلية.',
    generalIssuesEn: 'Chery vehicles are economical Chinese cars. AC systems are simpler and may need OEM Chinese parts.',
    faqs: [],
  },
  {
    slug: 'haval',
    nameAr: 'هافال',
    nameEn: 'Haval',
    logoPath: '/images/brands/haval.webp',
    popularity: 'low',
    models: [
      {
        slug: 'h6',
        nameAr: 'إتش 6',
        nameEn: 'H6',
        years: '2021-2026',
        commonAcIssuesAr: ['ضعف تبريد في الصيف', 'تسريب فريون', 'جودة قطع متوسطة'],
        commonAcIssuesEn: ['Weak cooling in summer', 'Refrigerant leak', 'Average part quality'],
      },
    ],
    generalIssuesAr: 'هافال سيارات صينية جديدة نسبياً في السعودية. لم تثبت أنظمة التكييف فيها بعد في الحرارة الشديدة.',
    generalIssuesEn: 'Haval vehicles are relatively new Chinese cars in Saudi Arabia. AC systems are not yet proven in extreme heat.',
    faqs: [],
  },
  {
    slug: 'genesis',
    nameAr: 'جينيسيس',
    nameEn: 'Genesis',
    logoPath: '/images/brands/genesis.webp',
    popularity: 'low',
    models: [
      {
        slug: 'g80',
        nameAr: 'جي 80',
        nameEn: 'G80',
        years: '2017-2026',
        commonAcIssuesAr: ['تسريب فريون بطيء', 'ضعف تبريد في الصيف', 'مشكلة في نظام المناخ الآلي'],
        commonAcIssuesEn: ['Slow refrigerant leak', 'Weak cooling in summer', 'Auto climate control issue'],
      },
    ],
    generalIssuesAr: 'جينيسيس هي علامة هيونداي الفاخرة. أنظمة التكييف موثوقة لكن قطع الغيار أغلى من هيونداي العادية.',
    generalIssuesEn: 'Genesis is Hyundai\'s luxury brand. AC systems are reliable but parts cost more than standard Hyundai.',
    faqs: [],
  },
];

/**
 * Get a car brand by slug.
 */
export function getBrandBySlug(slug: string): CarBrand | undefined {
  return carBrands.find((b) => b.slug === slug);
}

/**
 * Get all brand slugs (for static path generation).
 */
export function getAllBrandSlugs(): string[] {
  return carBrands.map((b) => b.slug);
}

/**
 * Get top brands (high popularity) for featured sections.
 */
export function getTopBrands(): CarBrand[] {
  return carBrands.filter((b) => b.popularity === 'high');
}

/**
 * Get brands that should have model sub-pages (high popularity).
 */
export function getBrandsWithModelPages(): CarBrand[] {
  return carBrands.filter((b) => b.popularity === 'high');
}

/**
 * Get all models across all high-popularity brands (for model page generation).
 */
export function getAllModelPaths(): { brand: string; model: string }[] {
  return carBrands
    .filter((b) => b.popularity === 'high')
    .flatMap((b) => b.models.map((m) => ({ brand: b.slug, model: m.slug })));
}
