/**
 * AC Service data for programmatic SEO pages.
 * Each service generates a bilingual page at /services/[slug] and /en/services/[slug].
 */

export interface ACService {
  slug: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  processStepsAr: string[];
  processStepsEn: string[];
  durationMinutes: number;
  priceRangeMin: number;
  priceRangeMax: number;
  partsInvolved: string[];
  keywordsAr: string[];
  keywordsEn: string[];
  faqs: {
    questionAr: string;
    questionEn: string;
    answerAr: string;
    answerEn: string;
  }[];
}

export const services: ACService[] = [
  {
    slug: 'ac-recharge',
    nameAr: 'تعبئة فريون مكيف السيارة',
    nameEn: 'Car AC Freon Recharge',
    descriptionAr:
      'خدمة تعبئة فريون مكيف السيارة بالكمية المناسبة حسب مواصفات الشركة المصنعة. نستخدم غاز R134a أو R1234yf حسب نوع السيارة لضمان أداء تبريد مثالي.',
    descriptionEn:
      'Professional car AC freon recharge service using the correct amount per manufacturer specifications. We use R134a or R1234yf refrigerant depending on your vehicle type for optimal cooling performance.',
    processStepsAr: [
      'فحص مستوى الفريون الحالي',
      'فحص نظام التكييف للتأكد من عدم وجود تسريبات',
      'تفريغ الفريون القديم بالكامل',
      'تعبئة الفريون الجديد بالكمية المحددة',
      'اختبار أداء التبريد والضغط',
    ],
    processStepsEn: [
      'Check current freon level',
      'Inspect AC system for leaks',
      'Evacuate old refrigerant completely',
      'Recharge with correct amount of new refrigerant',
      'Test cooling performance and pressure readings',
    ],
    durationMinutes: 45,
    priceRangeMin: 150,
    priceRangeMax: 350,
    partsInvolved: ['receiver-dryer'],
    keywordsAr: [
      'تعبئة فريون',
      'شحن فريون مكيف السيارة',
      'تعبئة غاز المكيف',
      'فريون السيارة',
      'شحن مكيف السيارة',
    ],
    keywordsEn: [
      'car ac recharge',
      'freon recharge',
      'ac refrigerant refill',
      'car ac gas refill',
      'ac top up',
    ],
    faqs: [
      {
        questionAr: 'كم مرة يحتاج مكيف السيارة لتعبئة الفريون؟',
        questionEn: 'How often does a car AC need a freon recharge?',
        answerAr:
          'في الظروف الطبيعية، يحتاج مكيف السيارة لتعبئة الفريون كل 2-3 سنوات. لكن إذا لاحظت ضعف التبريد قبل ذلك، فقد يكون هناك تسريب يحتاج إصلاح.',
        answerEn:
          'Under normal conditions, a car AC needs a freon recharge every 2-3 years. However, if you notice weak cooling before that, there may be a leak that needs repair.',
      },
      {
        questionAr: 'كم سعر تعبئة فريون مكيف السيارة؟',
        questionEn: 'How much does a car AC freon recharge cost?',
        answerAr:
          'تتراوح تكلفة تعبئة فريون مكيف السيارة بين 150 و 350 ريال سعودي حسب نوع الفريون وحجم نظام التكييف.',
        answerEn:
          'The cost of a car AC freon recharge ranges between 150 and 350 SAR depending on the refrigerant type and AC system size.',
      },
      {
        questionAr: 'ما نوع الفريون المناسب لسيارتي؟',
        questionEn: 'What type of freon is right for my car?',
        answerAr:
          'معظم السيارات تستخدم فريون R134a، بينما السيارات الحديثة (2017 وما بعد) قد تستخدم R1234yf. نحدد النوع المناسب حسب مواصفات الشركة المصنعة.',
        answerEn:
          'Most cars use R134a refrigerant, while newer models (2017 and later) may use R1234yf. We determine the correct type based on manufacturer specifications.',
      },
    ],
  },
  {
    slug: 'compressor-replacement',
    nameAr: 'تغيير كمبروسر مكيف السيارة',
    nameEn: 'Car AC Compressor Replacement',
    descriptionAr:
      'خدمة تغيير كمبروسر مكيف السيارة بقطع غيار أصلية أو بديلة عالية الجودة. الكمبروسر هو قلب نظام التكييف، ونضمن تركيبه بشكل احترافي مع ضمان على القطعة والتركيب.',
    descriptionEn:
      'Professional car AC compressor replacement using OEM or high-quality aftermarket parts. The compressor is the heart of the AC system, and we ensure professional installation with warranty on parts and labor.',
    processStepsAr: [
      'تشخيص عطل الكمبروسر وتأكيد الحاجة للتغيير',
      'تفريغ غاز الفريون بالكامل',
      'فك الكمبروسر القديم',
      'تركيب الكمبروسر الجديد مع الأويل المناسب',
      'تعبئة الفريون وفحص النظام بالكامل',
      'اختبار الأداء والتأكد من التبريد',
    ],
    processStepsEn: [
      'Diagnose compressor failure and confirm replacement need',
      'Evacuate all refrigerant',
      'Remove old compressor',
      'Install new compressor with correct oil charge',
      'Recharge refrigerant and inspect full system',
      'Performance test and verify cooling',
    ],
    durationMinutes: 180,
    priceRangeMin: 800,
    priceRangeMax: 3500,
    partsInvolved: ['compressor', 'receiver-dryer', 'ac-belt'],
    keywordsAr: [
      'تغيير كمبروسر المكيف',
      'كمبروسر مكيف السيارة',
      'تبديل كمبروسر',
      'سعر كمبروسر المكيف',
      'كمبرسر تكييف السيارة',
    ],
    keywordsEn: [
      'ac compressor replacement',
      'car ac compressor',
      'compressor repair',
      'ac compressor cost',
      'replace car ac compressor',
    ],
    faqs: [
      {
        questionAr: 'كيف أعرف أن كمبروسر المكيف تالف؟',
        questionEn: 'How do I know if my AC compressor is bad?',
        answerAr:
          'من أبرز علامات تلف الكمبروسر: صوت طقطقة أو صرير عند تشغيل المكيف، عدم خروج هواء بارد، أو تسريب زيت حول الكمبروسر.',
        answerEn:
          'Common signs of a bad compressor include: clicking or grinding noise when AC is on, no cold air output, or oil leaks around the compressor.',
      },
      {
        questionAr: 'كم سعر تغيير كمبروسر مكيف السيارة؟',
        questionEn: 'How much does AC compressor replacement cost?',
        answerAr:
          'تتراوح تكلفة تغيير كمبروسر مكيف السيارة بين 800 و 3,500 ريال سعودي حسب نوع السيارة ونوع القطعة (أصلية أو بديلة).',
        answerEn:
          'AC compressor replacement costs range from 800 to 3,500 SAR depending on the vehicle type and whether OEM or aftermarket parts are used.',
      },
    ],
  },
  {
    slug: 'leak-detection',
    nameAr: 'كشف تسريب فريون مكيف السيارة',
    nameEn: 'Car AC Leak Detection',
    descriptionAr:
      'خدمة كشف تسريب فريون مكيف السيارة باستخدام أحدث أجهزة الكشف الإلكترونية وصبغة الأشعة فوق البنفسجية. نحدد مكان التسريب بدقة ونقدم حلول الإصلاح المناسبة.',
    descriptionEn:
      'Professional car AC leak detection using the latest electronic detectors and UV dye methods. We pinpoint the exact leak location and provide appropriate repair solutions.',
    processStepsAr: [
      'فحص مبدئي لضغط نظام التكييف',
      'حقن صبغة UV في النظام',
      'استخدام جهاز كشف التسريب الإلكتروني',
      'تحديد مكان التسريب بدقة',
      'تقديم تقرير مفصل وخيارات الإصلاح',
    ],
    processStepsEn: [
      'Initial pressure test of the AC system',
      'Inject UV dye into the system',
      'Use electronic leak detector',
      'Pinpoint the exact leak location',
      'Provide detailed report and repair options',
    ],
    durationMinutes: 60,
    priceRangeMin: 100,
    priceRangeMax: 250,
    partsInvolved: ['ac-hoses', 'condenser', 'evaporator'],
    keywordsAr: [
      'كشف تسريب فريون',
      'تسريب مكيف السيارة',
      'فحص تسريب المكيف',
      'تسريب غاز المكيف',
    ],
    keywordsEn: [
      'ac leak detection',
      'car ac leak',
      'freon leak test',
      'ac refrigerant leak',
    ],
    faqs: [
      {
        questionAr: 'كيف أعرف أن مكيف السيارة يسرب فريون؟',
        questionEn: 'How do I know if my car AC is leaking freon?',
        answerAr:
          'من علامات تسريب الفريون: ضعف تدريجي في التبريد، الحاجة لتعبئة الفريون بشكل متكرر، ووجود بقع زيتية حول مكونات المكيف.',
        answerEn:
          'Signs of a freon leak include: gradual decrease in cooling, frequent need for recharges, and oily spots around AC components.',
      },
    ],
  },
  {
    slug: 'ac-cleaning',
    nameAr: 'تنظيف مكيف السيارة',
    nameEn: 'Car AC Cleaning & Sanitization',
    descriptionAr:
      'خدمة تنظيف وتعقيم مكيف السيارة للتخلص من البكتيريا والفطريات والروائح الكريهة. نستخدم مواد تنظيف متخصصة آمنة على نظام التكييف وصحة الركاب.',
    descriptionEn:
      'Professional car AC cleaning and sanitization service to eliminate bacteria, mold, and bad odors. We use specialized cleaning agents that are safe for the AC system and passenger health.',
    processStepsAr: [
      'فحص فلتر المقصورة واستبداله إن لزم',
      'تنظيف المبخر بالمواد المتخصصة',
      'تعقيم مجاري الهواء',
      'تنظيف فتحات التهوية',
      'اختبار جودة الهواء بعد التنظيف',
    ],
    processStepsEn: [
      'Inspect cabin filter and replace if needed',
      'Clean evaporator with specialized agents',
      'Sanitize air ducts',
      'Clean air vents',
      'Test air quality after cleaning',
    ],
    durationMinutes: 60,
    priceRangeMin: 100,
    priceRangeMax: 250,
    partsInvolved: ['cabin-filter', 'evaporator'],
    keywordsAr: [
      'تنظيف مكيف السيارة',
      'تعقيم مكيف السيارة',
      'غسيل مكيف السيارة',
      'ازالة رائحة المكيف',
    ],
    keywordsEn: [
      'car ac cleaning',
      'ac sanitization',
      'car ac deodorize',
      'ac duct cleaning',
    ],
    faqs: [
      {
        questionAr: 'متى يجب تنظيف مكيف السيارة؟',
        questionEn: 'When should I clean my car AC?',
        answerAr:
          'يُنصح بتنظيف مكيف السيارة كل 6 أشهر أو عند ملاحظة رائحة كريهة من فتحات التهوية. التنظيف المنتظم يحسن جودة الهواء ويمنع تراكم البكتيريا.',
        answerEn:
          'It is recommended to clean your car AC every 6 months or when you notice a bad smell from the vents. Regular cleaning improves air quality and prevents bacteria buildup.',
      },
    ],
  },
  {
    slug: 'condenser-repair',
    nameAr: 'إصلاح مكثف مكيف السيارة',
    nameEn: 'Car AC Condenser Repair',
    descriptionAr:
      'خدمة إصلاح أو تغيير مكثف (كوندنسر) مكيف السيارة. المكثف يلعب دوراً حيوياً في تحويل غاز الفريون من حالة غازية إلى سائلة، وتلفه يؤدي لضعف شديد في التبريد.',
    descriptionEn:
      'Professional car AC condenser repair or replacement service. The condenser plays a vital role in converting refrigerant from gas to liquid, and its failure leads to severe cooling loss.',
    processStepsAr: [
      'فحص المكثف بصرياً وبأجهزة الضغط',
      'تحديد نوع العطل (انسداد، تسريب، أو تلف)',
      'تفريغ الفريون',
      'إصلاح أو تغيير المكثف',
      'إعادة تعبئة الفريون واختبار الأداء',
    ],
    processStepsEn: [
      'Visual and pressure inspection of the condenser',
      'Identify fault type (blockage, leak, or damage)',
      'Evacuate refrigerant',
      'Repair or replace condenser',
      'Recharge refrigerant and performance test',
    ],
    durationMinutes: 120,
    priceRangeMin: 400,
    priceRangeMax: 1500,
    partsInvolved: ['condenser', 'receiver-dryer'],
    keywordsAr: [
      'إصلاح مكثف المكيف',
      'تغيير كوندنسر المكيف',
      'كوندنسر مكيف السيارة',
      'مكثف التكييف',
    ],
    keywordsEn: [
      'ac condenser repair',
      'car ac condenser',
      'condenser replacement',
      'ac condenser cost',
    ],
    faqs: [
      {
        questionAr: 'ما هي علامات تلف مكثف المكيف؟',
        questionEn: 'What are the signs of a bad AC condenser?',
        answerAr:
          'من علامات تلف المكثف: ضعف ملحوظ في التبريد، ارتفاع ضغط النظام، تسريب فريون من المكثف، أو وجود انسداد في زعانف المكثف.',
        answerEn:
          'Signs of a bad condenser include: noticeable decrease in cooling, high system pressure, freon leak from the condenser, or blocked condenser fins.',
      },
    ],
  },
  {
    slug: 'evaporator-replacement',
    nameAr: 'تغيير مبخر مكيف السيارة',
    nameEn: 'Car AC Evaporator Replacement',
    descriptionAr:
      'خدمة تغيير مبخر (إيفابوريتور) مكيف السيارة. المبخر مسؤول عن تبريد الهواء داخل المقصورة، وتلفه أو تسريبه يتطلب استبداله بقطعة جديدة.',
    descriptionEn:
      'Professional car AC evaporator replacement service. The evaporator is responsible for cooling the cabin air, and when it fails or leaks, it requires replacement with a new unit.',
    processStepsAr: [
      'تشخيص تلف المبخر',
      'تفريغ نظام التكييف من الفريون',
      'فك لوحة القيادة للوصول للمبخر',
      'تركيب المبخر الجديد',
      'إعادة تجميع لوحة القيادة',
      'تعبئة الفريون واختبار التبريد',
    ],
    processStepsEn: [
      'Diagnose evaporator failure',
      'Evacuate AC system refrigerant',
      'Remove dashboard to access evaporator',
      'Install new evaporator',
      'Reassemble dashboard',
      'Recharge refrigerant and test cooling',
    ],
    durationMinutes: 300,
    priceRangeMin: 1000,
    priceRangeMax: 3000,
    partsInvolved: ['evaporator', 'expansion-valve', 'receiver-dryer'],
    keywordsAr: [
      'تغيير مبخر المكيف',
      'إيفابوريتور مكيف السيارة',
      'مبخر التكييف',
      'استبدال مبخر المكيف',
    ],
    keywordsEn: [
      'evaporator replacement',
      'car ac evaporator',
      'ac evaporator cost',
      'evaporator repair',
    ],
    faqs: [
      {
        questionAr: 'لماذا تغيير المبخر مكلف؟',
        questionEn: 'Why is evaporator replacement expensive?',
        answerAr:
          'تغيير المبخر مكلف لأنه يتطلب فك لوحة القيادة بالكامل للوصول إليه، مما يستغرق وقتاً طويلاً في العمالة بالإضافة لتكلفة القطعة نفسها.',
        answerEn:
          'Evaporator replacement is expensive because it requires removing the entire dashboard to access it, which takes significant labor time in addition to the part cost.',
      },
    ],
  },
  {
    slug: 'cabin-filter-replacement',
    nameAr: 'تغيير فلتر مكيف السيارة',
    nameEn: 'Cabin Air Filter Replacement',
    descriptionAr:
      'خدمة تغيير فلتر مكيف السيارة (فلتر المقصورة) لتحسين جودة الهواء داخل السيارة وكفاءة التبريد. فلتر نظيف يحمي من الغبار والأتربة والملوثات.',
    descriptionEn:
      'Cabin air filter replacement service to improve interior air quality and cooling efficiency. A clean filter protects against dust, dirt, and pollutants.',
    processStepsAr: [
      'تحديد موقع فلتر المقصورة',
      'إزالة الفلتر القديم',
      'تنظيف حجرة الفلتر',
      'تركيب الفلتر الجديد',
      'اختبار تدفق الهواء',
    ],
    processStepsEn: [
      'Locate the cabin air filter',
      'Remove old filter',
      'Clean filter housing',
      'Install new filter',
      'Test airflow',
    ],
    durationMinutes: 15,
    priceRangeMin: 50,
    priceRangeMax: 150,
    partsInvolved: ['cabin-filter'],
    keywordsAr: [
      'تغيير فلتر المكيف',
      'فلتر مكيف السيارة',
      'فلتر المقصورة',
      'فلتر الهواء الداخلي',
    ],
    keywordsEn: [
      'cabin filter replacement',
      'car ac filter',
      'cabin air filter',
      'ac filter change',
    ],
    faqs: [
      {
        questionAr: 'كم مرة يجب تغيير فلتر مكيف السيارة؟',
        questionEn: 'How often should I change my cabin air filter?',
        answerAr:
          'يُنصح بتغيير فلتر مكيف السيارة كل 15,000 - 20,000 كم أو كل سنة، أيهما أقرب. في المناطق كثيرة الغبار مثل المملكة العربية السعودية، قد تحتاج لتغييره بشكل أكثر تكراراً.',
        answerEn:
          'It is recommended to change the cabin air filter every 15,000-20,000 km or annually, whichever comes first. In dusty regions like Saudi Arabia, you may need to change it more frequently.',
      },
    ],
  },
  {
    slug: 'ac-diagnostic',
    nameAr: 'تشخيص أعطال مكيف السيارة',
    nameEn: 'Car AC Diagnostic Service',
    descriptionAr:
      'خدمة تشخيص شاملة لأعطال مكيف السيارة باستخدام أحدث أجهزة الفحص. نحدد المشكلة بدقة ونقدم تقريراً مفصلاً مع تقدير التكلفة قبل البدء بأي إصلاح.',
    descriptionEn:
      'Comprehensive car AC diagnostic service using the latest testing equipment. We accurately identify the problem and provide a detailed report with cost estimate before any repair begins.',
    processStepsAr: [
      'فحص ضغط نظام التكييف (الجانب العالي والمنخفض)',
      'فحص درجة حرارة الهواء الخارج من المكيف',
      'فحص الكهرباء والأسلاك والفيوزات',
      'فحص أداء الكمبروسر',
      'فحص التسريبات',
      'تقديم تقرير مفصل وتوصيات الإصلاح',
    ],
    processStepsEn: [
      'Check AC system pressure (high and low side)',
      'Measure AC vent output temperature',
      'Inspect electrical connections, wiring, and fuses',
      'Test compressor performance',
      'Check for leaks',
      'Provide detailed report and repair recommendations',
    ],
    durationMinutes: 45,
    priceRangeMin: 80,
    priceRangeMax: 200,
    partsInvolved: [],
    keywordsAr: [
      'تشخيص مكيف السيارة',
      'فحص مكيف السيارة',
      'كشف أعطال المكيف',
      'فحص تكييف السيارة',
    ],
    keywordsEn: [
      'ac diagnostic',
      'car ac inspection',
      'ac system check',
      'ac troubleshooting',
    ],
    faqs: [
      {
        questionAr: 'هل يجب تشخيص المكيف قبل الإصلاح؟',
        questionEn: 'Should I get a diagnostic before AC repair?',
        answerAr:
          'نعم، التشخيص الدقيق يوفر عليك المال والوقت. بدون تشخيص قد يتم استبدال قطع غير تالفة، مما يزيد التكلفة دون حل المشكلة الحقيقية.',
        answerEn:
          'Yes, accurate diagnostics save you money and time. Without proper diagnosis, non-faulty parts may be replaced, increasing costs without solving the real problem.',
      },
    ],
  },
  {
    slug: 'ac-belt-replacement',
    nameAr: 'تغيير سير مكيف السيارة',
    nameEn: 'Car AC Belt Replacement',
    descriptionAr:
      'خدمة تغيير سير (حزام) مكيف السيارة. السير يربط الكمبروسر بالمحرك، وتآكله أو قطعه يؤدي لتوقف المكيف عن العمل بالكامل.',
    descriptionEn:
      'Car AC belt replacement service. The belt connects the compressor to the engine, and wear or breakage causes the AC to stop working completely.',
    processStepsAr: [
      'فحص السير الحالي للتآكل والشقوق',
      'فك السير القديم',
      'فحص البكرات والشدادات',
      'تركيب السير الجديد بالشد المناسب',
      'اختبار عمل المكيف',
    ],
    processStepsEn: [
      'Inspect current belt for wear and cracks',
      'Remove old belt',
      'Check pulleys and tensioners',
      'Install new belt with proper tension',
      'Test AC operation',
    ],
    durationMinutes: 30,
    priceRangeMin: 80,
    priceRangeMax: 250,
    partsInvolved: ['ac-belt'],
    keywordsAr: [
      'تغيير سير المكيف',
      'سير مكيف السيارة',
      'حزام الكمبروسر',
      'سير التكييف',
    ],
    keywordsEn: [
      'ac belt replacement',
      'car ac belt',
      'compressor belt',
      'ac drive belt',
    ],
    faqs: [
      {
        questionAr: 'ما هي علامات تلف سير المكيف؟',
        questionEn: 'What are signs of a worn AC belt?',
        answerAr:
          'من علامات تلف سير المكيف: صوت صرير عند تشغيل المكيف، تشققات مرئية على السير، أو توقف المكيف فجأة عن العمل.',
        answerEn:
          'Signs of a worn AC belt include: squealing noise when AC is turned on, visible cracks on the belt, or sudden AC failure.',
      },
    ],
  },
  {
    slug: 'full-ac-overhaul',
    nameAr: 'صيانة شاملة لمكيف السيارة',
    nameEn: 'Full Car AC System Overhaul',
    descriptionAr:
      'خدمة صيانة شاملة لنظام تكييف السيارة تشمل فحص وإصلاح جميع مكونات المكيف. مثالية للسيارات القديمة أو التي تعاني من مشاكل متعددة في التكييف.',
    descriptionEn:
      'Comprehensive car AC system overhaul including inspection and repair of all AC components. Ideal for older vehicles or those with multiple AC issues.',
    processStepsAr: [
      'فحص شامل لجميع مكونات نظام التكييف',
      'تفريغ الفريون القديم بالكامل',
      'غسل النظام داخلياً (فلاش)',
      'استبدال القطع التالفة',
      'تغيير فلتر التجفيف والأويل',
      'تعبئة الفريون الجديد',
      'اختبار أداء شامل',
    ],
    processStepsEn: [
      'Comprehensive inspection of all AC components',
      'Complete refrigerant evacuation',
      'Internal system flush',
      'Replace damaged parts',
      'Change receiver-dryer and oil',
      'Recharge with new refrigerant',
      'Full performance test',
    ],
    durationMinutes: 360,
    priceRangeMin: 1500,
    priceRangeMax: 5000,
    partsInvolved: ['compressor', 'condenser', 'evaporator', 'receiver-dryer', 'expansion-valve', 'ac-hoses'],
    keywordsAr: [
      'صيانة شاملة مكيف السيارة',
      'عمرة مكيف السيارة',
      'إصلاح كامل للتكييف',
      'صيانة دورية للمكيف',
    ],
    keywordsEn: [
      'full ac overhaul',
      'complete ac service',
      'ac system rebuild',
      'full ac repair',
    ],
    faqs: [
      {
        questionAr: 'متى تحتاج السيارة لصيانة شاملة للمكيف؟',
        questionEn: 'When does a car need a full AC overhaul?',
        answerAr:
          'تحتاج السيارة لصيانة شاملة عندما تعاني من مشاكل متعددة مثل ضعف التبريد مع تسريبات وأصوات غريبة، أو عندما يكون عمر السيارة أكثر من 8-10 سنوات بدون صيانة سابقة للمكيف.',
        answerEn:
          'A car needs a full AC overhaul when experiencing multiple issues like weak cooling with leaks and strange noises, or when the vehicle is over 8-10 years old without prior AC maintenance.',
      },
    ],
  },
];

/**
 * Get a service by slug.
 */
export function getServiceBySlug(slug: string): ACService | undefined {
  return services.find((s) => s.slug === slug);
}

/**
 * Get all service slugs (for static path generation).
 */
export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
