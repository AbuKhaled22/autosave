/**
 * AC Component/Parts data for programmatic SEO pages.
 * Each component generates a bilingual page at /parts/[slug] and /en/parts/[slug].
 */

export interface ACComponent {
  slug: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  functionAr: string;
  functionEn: string;
  failureSignsAr: string[];
  failureSignsEn: string[];
  priceRangeOEM: { min: number; max: number };
  priceRangeAftermarket: { min: number; max: number };
  relatedSymptomSlugs: string[];
  faqs: {
    questionAr: string;
    questionEn: string;
    answerAr: string;
    answerEn: string;
  }[];
}

export const components: ACComponent[] = [
  {
    slug: 'compressor',
    nameAr: 'كمبروسر مكيف السيارة',
    nameEn: 'Car AC Compressor',
    descriptionAr:
      'الكمبروسر هو القلب النابض لنظام تكييف السيارة. يقوم بضغط غاز الفريون وضخه في الدورة لتوفير التبريد. تلفه يعني توقف نظام التكييف بالكامل.',
    descriptionEn:
      'The compressor is the heart of the car AC system. It compresses and circulates refrigerant through the system to provide cooling. Its failure means complete AC system shutdown.',
    functionAr:
      'يضغط غاز الفريون من حالة الضغط المنخفض إلى الضغط العالي، مما يرفع درجة حرارته تمهيداً لتبريده في المكثف.',
    functionEn:
      'Compresses refrigerant gas from low to high pressure, raising its temperature in preparation for cooling in the condenser.',
    failureSignsAr: [
      'المكيف لا يبرد على الإطلاق',
      'صوت طقطقة أو صرير عند تشغيل المكيف',
      'تسريب زيت حول الكمبروسر',
      'الكمبروسر لا يدور (الكلتش لا يعمل)',
      'فيوز المكيف يحترق باستمرار',
    ],
    failureSignsEn: [
      'AC does not cool at all',
      'Clicking or grinding noise when AC is on',
      'Oil leak around the compressor',
      'Compressor clutch not engaging',
      'AC fuse keeps blowing',
    ],
    priceRangeOEM: { min: 1200, max: 3500 },
    priceRangeAftermarket: { min: 600, max: 1800 },
    relatedSymptomSlugs: ['ac-not-cooling', 'ac-clicking-noise', 'ac-compressor-not-engaging', 'ac-fuse-blowing'],
    faqs: [
      {
        questionAr: 'كم عمر كمبروسر المكيف الافتراضي؟',
        questionEn: 'What is the expected lifespan of an AC compressor?',
        answerAr:
          'عادة يستمر كمبروسر المكيف من 8 إلى 15 سنة حسب نوع السيارة وظروف الاستخدام والصيانة الدورية.',
        answerEn:
          'An AC compressor typically lasts 8 to 15 years depending on the vehicle type, usage conditions, and regular maintenance.',
      },
      {
        questionAr: 'هل يمكن إصلاح الكمبروسر أم يجب تغييره؟',
        questionEn: 'Can a compressor be repaired or must it be replaced?',
        answerAr:
          'في بعض الحالات يمكن إصلاح الكمبروسر (مثل تغيير الكلتش أو البيرنق)، لكن في حالة التلف الداخلي يجب تغييره بالكامل.',
        answerEn:
          'In some cases the compressor can be repaired (e.g., clutch or bearing replacement), but internal damage requires full replacement.',
      },
    ],
  },
  {
    slug: 'condenser',
    nameAr: 'مكثف مكيف السيارة (كوندنسر)',
    nameEn: 'Car AC Condenser',
    descriptionAr:
      'المكثف (الكوندنسر) يقع أمام الرديتر ويقوم بتبريد غاز الفريون المضغوط وتحويله من حالة غازية إلى سائلة. معرض للحصى والأتربة أثناء القيادة.',
    descriptionEn:
      'The condenser sits in front of the radiator and cools compressed refrigerant gas, converting it from gas to liquid. It is exposed to road debris and dust while driving.',
    functionAr:
      'يبرد غاز الفريون عالي الضغط القادم من الكمبروسر ويحوله إلى سائل عبر تبادل الحرارة مع الهواء الخارجي.',
    functionEn:
      'Cools high-pressure refrigerant gas from the compressor and converts it to liquid through heat exchange with outside air.',
    failureSignsAr: [
      'ضعف ملحوظ في التبريد',
      'ارتفاع غير طبيعي في ضغط النظام',
      'تسريب فريون مرئي من الأمام',
      'ارتفاع حرارة المحرك عند تشغيل المكيف',
    ],
    failureSignsEn: [
      'Noticeable decrease in cooling',
      'Abnormally high system pressure',
      'Visible freon leak from the front',
      'Engine overheating when AC is on',
    ],
    priceRangeOEM: { min: 500, max: 1500 },
    priceRangeAftermarket: { min: 250, max: 800 },
    relatedSymptomSlugs: ['ac-weak-cooling', 'ac-not-cooling', 'ac-water-leak'],
    faqs: [
      {
        questionAr: 'كيف أحافظ على مكثف المكيف؟',
        questionEn: 'How do I maintain the AC condenser?',
        answerAr:
          'قم بتنظيف المكثف بالماء بانتظام لإزالة الأوساخ والحشرات، وافحصه بصرياً للتأكد من عدم وجود تلف أو انسداد في الزعانف.',
        answerEn:
          'Regularly clean the condenser with water to remove dirt and insects, and visually inspect it for damage or blocked fins.',
      },
    ],
  },
  {
    slug: 'evaporator',
    nameAr: 'مبخر مكيف السيارة (إيفابوريتور)',
    nameEn: 'Car AC Evaporator',
    descriptionAr:
      'المبخر يقع داخل لوحة القيادة وهو المسؤول عن تبريد الهواء الذي يدخل المقصورة. يمتص الحرارة من الهواء الداخلي ويرسل هواءً بارداً.',
    descriptionEn:
      'The evaporator is located inside the dashboard and is responsible for cooling the air entering the cabin. It absorbs heat from interior air and delivers cold air.',
    functionAr:
      'يتحول الفريون السائل إلى غاز داخل المبخر، وهذا التحول يمتص الحرارة من الهواء المحيط مما يبرد الهواء الداخل للمقصورة.',
    functionEn:
      'Liquid refrigerant evaporates inside the evaporator, absorbing heat from the surrounding air, which cools the air entering the cabin.',
    failureSignsAr: [
      'ضعف في التبريد رغم امتلاء الفريون',
      'رائحة كريهة أو عفنة من فتحات التهوية',
      'تسريب ماء داخل المقصورة',
      'تجمد على خطوط التكييف',
    ],
    failureSignsEn: [
      'Weak cooling despite full freon charge',
      'Musty or bad smell from vents',
      'Water leak inside the cabin',
      'Frost on AC lines',
    ],
    priceRangeOEM: { min: 800, max: 2500 },
    priceRangeAftermarket: { min: 400, max: 1200 },
    relatedSymptomSlugs: ['ac-weak-cooling', 'ac-bad-smell', 'ac-musty-smell', 'ac-water-leak', 'ac-lines-freezing'],
    faqs: [
      {
        questionAr: 'لماذا تغيير المبخر مكلف؟',
        questionEn: 'Why is evaporator replacement so expensive?',
        answerAr:
          'لأنه يتطلب فك لوحة القيادة بالكامل للوصول إليه، وهذا يحتاج ساعات عمل طويلة بالإضافة لتكلفة القطعة.',
        answerEn:
          'Because accessing it requires removing the entire dashboard, which takes many hours of labor in addition to the part cost.',
      },
    ],
  },
  {
    slug: 'expansion-valve',
    nameAr: 'صمام التمدد (إكسبانشن فالف)',
    nameEn: 'Expansion Valve',
    descriptionAr:
      'صمام التمدد يتحكم في كمية الفريون السائل التي تدخل المبخر. يقلل ضغط الفريون ويحوله من سائل عالي الضغط إلى رذاذ منخفض الضغط.',
    descriptionEn:
      'The expansion valve controls the amount of liquid refrigerant entering the evaporator. It reduces refrigerant pressure, converting it from high-pressure liquid to low-pressure mist.',
    functionAr:
      'ينظم تدفق الفريون إلى المبخر حسب حاجة النظام للتبريد، ويحافظ على التوازن بين الضغط العالي والمنخفض في الدورة.',
    functionEn:
      'Regulates refrigerant flow to the evaporator based on cooling demand, maintaining balance between high and low pressure in the system.',
    failureSignsAr: [
      'تذبذب في درجة التبريد',
      'تجمد على خطوط التكييف أو المبخر',
      'ضعف مستمر في التبريد',
      'صوت هسهسة غير طبيعي',
    ],
    failureSignsEn: [
      'Fluctuating cooling temperature',
      'Frost on AC lines or evaporator',
      'Consistently weak cooling',
      'Abnormal hissing sound',
    ],
    priceRangeOEM: { min: 200, max: 600 },
    priceRangeAftermarket: { min: 100, max: 350 },
    relatedSymptomSlugs: ['ac-intermittent-cooling', 'ac-lines-freezing', 'ac-weak-cooling', 'ac-hissing-noise'],
    faqs: [
      {
        questionAr: 'كيف أعرف أن صمام التمدد تالف؟',
        questionEn: 'How do I know if the expansion valve is bad?',
        answerAr:
          'إذا لاحظت تذبذب في التبريد (يبرد ثم يتوقف) أو تجمد على خطوط المكيف، فغالباً صمام التمدد يحتاج فحص أو تغيير.',
        answerEn:
          'If you notice fluctuating cooling (cools then stops) or frost on AC lines, the expansion valve likely needs inspection or replacement.',
      },
    ],
  },
  {
    slug: 'receiver-dryer',
    nameAr: 'فلتر التجفيف (رسيفر دراير)',
    nameEn: 'Receiver Dryer',
    descriptionAr:
      'فلتر التجفيف يقع بين المكثف وصمام التمدد. يزيل الرطوبة والشوائب من الفريون ويخزن الفريون الزائد لضمان تدفق منتظم.',
    descriptionEn:
      'The receiver-dryer sits between the condenser and expansion valve. It removes moisture and contaminants from the refrigerant and stores excess refrigerant for consistent flow.',
    functionAr:
      'يمتص الرطوبة من الفريون بواسطة مادة مجففة داخلية (ديسيكانت)، ويصفي الشوائب لحماية باقي المكونات من التلف.',
    functionEn:
      'Absorbs moisture from the refrigerant using an internal desiccant and filters contaminants to protect other components from damage.',
    failureSignsAr: [
      'ضعف تدريجي في التبريد',
      'رطوبة في النظام تسبب تجمد',
      'ضوضاء من نظام التكييف',
      'ارتفاع في ضغوط النظام',
    ],
    failureSignsEn: [
      'Gradual decrease in cooling',
      'Moisture in system causing freezing',
      'Noise from the AC system',
      'Elevated system pressures',
    ],
    priceRangeOEM: { min: 100, max: 350 },
    priceRangeAftermarket: { min: 50, max: 200 },
    relatedSymptomSlugs: ['ac-weak-cooling', 'ac-lines-freezing'],
    faqs: [
      {
        questionAr: 'متى يجب تغيير فلتر التجفيف؟',
        questionEn: 'When should the receiver-dryer be replaced?',
        answerAr:
          'يجب تغييره كلما تم فتح نظام التكييف للإصلاح (مثل تغيير الكمبروسر أو المكثف)، أو كل 3-4 سنوات كصيانة وقائية.',
        answerEn:
          'It should be replaced whenever the AC system is opened for repair (e.g., compressor or condenser replacement), or every 3-4 years as preventive maintenance.',
      },
    ],
  },
  {
    slug: 'cabin-filter',
    nameAr: 'فلتر المقصورة (فلتر المكيف)',
    nameEn: 'Cabin Air Filter',
    descriptionAr:
      'فلتر المقصورة ينقي الهواء الداخل من الخارج قبل دخوله لنظام التكييف والمقصورة. يحجز الغبار والأتربة وحبوب اللقاح والملوثات.',
    descriptionEn:
      'The cabin air filter purifies outside air before it enters the AC system and cabin. It captures dust, dirt, pollen, and pollutants.',
    functionAr:
      'يرشح الهواء من الجزيئات الضارة والأتربة والروائح، ويحمي المبخر من تراكم الأوساخ التي تقلل كفاءته.',
    functionEn:
      'Filters air from harmful particles, dust, and odors, and protects the evaporator from dirt buildup that reduces its efficiency.',
    failureSignsAr: [
      'ضعف تدفق الهواء من فتحات التهوية',
      'رائحة كريهة أو غبار عند تشغيل المكيف',
      'ضعف في أداء التبريد',
      'زيادة الغبار داخل السيارة',
    ],
    failureSignsEn: [
      'Weak airflow from vents',
      'Bad smell or dust when AC is on',
      'Reduced cooling performance',
      'Increased dust inside the car',
    ],
    priceRangeOEM: { min: 40, max: 120 },
    priceRangeAftermarket: { min: 20, max: 60 },
    relatedSymptomSlugs: ['ac-weak-airflow', 'ac-bad-smell', 'ac-musty-smell'],
    faqs: [
      {
        questionAr: 'هل يمكنني تغيير فلتر المقصورة بنفسي؟',
        questionEn: 'Can I replace the cabin air filter myself?',
        answerAr:
          'في معظم السيارات، نعم. فلتر المقصورة عادة يكون خلف صندوق القفازات ويمكن تغييره بسهولة. لكن بعض السيارات تحتاج أدوات خاصة.',
        answerEn:
          'In most cars, yes. The cabin air filter is usually behind the glove box and can be easily replaced. However, some vehicles require special tools.',
      },
    ],
  },
  {
    slug: 'ac-hoses',
    nameAr: 'خراطيم مكيف السيارة',
    nameEn: 'Car AC Hoses',
    descriptionAr:
      'خراطيم المكيف تنقل الفريون بين مكونات نظام التكييف. تتعرض للتآكل والتشقق مع الوقت مما يسبب تسريب الفريون.',
    descriptionEn:
      'AC hoses transport refrigerant between AC system components. They deteriorate and crack over time, causing freon leaks.',
    functionAr:
      'تربط مكونات نظام التكييف ببعضها وتنقل الفريون تحت ضغوط مختلفة (خرطوم الضغط العالي وخرطوم الضغط المنخفض).',
    functionEn:
      'Connect AC system components and transport refrigerant under different pressures (high-pressure and low-pressure hoses).',
    failureSignsAr: [
      'تسريب فريون مستمر',
      'بقع زيتية على الخراطيم أو الوصلات',
      'تشققات مرئية على الخراطيم',
      'انتفاخ أو تلف في الخرطوم',
    ],
    failureSignsEn: [
      'Continuous freon leak',
      'Oily spots on hoses or fittings',
      'Visible cracks on hoses',
      'Swelling or damage to hose',
    ],
    priceRangeOEM: { min: 150, max: 500 },
    priceRangeAftermarket: { min: 80, max: 300 },
    relatedSymptomSlugs: ['ac-not-cooling', 'ac-weak-cooling', 'ac-hissing-noise'],
    faqs: [
      {
        questionAr: 'كم عمر خراطيم المكيف الافتراضي؟',
        questionEn: 'How long do AC hoses last?',
        answerAr:
          'عادة تستمر خراطيم المكيف من 5 إلى 10 سنوات، لكن الحرارة الشديدة في السعودية وأملاح المناطق الساحلية قد تقصر عمرها.',
        answerEn:
          'AC hoses typically last 5 to 10 years, but extreme heat in Saudi Arabia and salt in coastal areas can shorten their lifespan.',
      },
    ],
  },
  {
    slug: 'compressor-clutch',
    nameAr: 'كلتش كمبروسر المكيف',
    nameEn: 'AC Compressor Clutch',
    descriptionAr:
      'كلتش الكمبروسر هو الجزء المسؤول عن تشبيك وفك الكمبروسر مع المحرك. يعمل كهربائياً ويسمح للكمبروسر بالدوران عند الحاجة فقط.',
    descriptionEn:
      'The compressor clutch engages and disengages the compressor from the engine. It operates electrically and allows the compressor to spin only when needed.',
    functionAr:
      'يوصل ويفصل الكمبروسر عن المحرك حسب الحاجة. عند تشغيل المكيف يتشبك الكلتش فيدور الكمبروسر، وعند الإيقاف ينفصل.',
    functionEn:
      'Connects and disconnects the compressor from the engine as needed. When AC is turned on, the clutch engages to spin the compressor; when off, it disengages.',
    failureSignsAr: [
      'الكمبروسر لا يدور عند تشغيل المكيف',
      'صوت طقطقة متكرر من الكمبروسر',
      'المكيف يعمل بشكل متقطع',
      'رائحة احتراق بالقرب من الكمبروسر',
    ],
    failureSignsEn: [
      'Compressor does not spin when AC is on',
      'Repeated clicking sound from compressor',
      'AC works intermittently',
      'Burning smell near the compressor',
    ],
    priceRangeOEM: { min: 200, max: 600 },
    priceRangeAftermarket: { min: 100, max: 350 },
    relatedSymptomSlugs: ['ac-compressor-not-engaging', 'ac-clicking-noise', 'ac-intermittent-cooling'],
    faqs: [
      {
        questionAr: 'هل يمكن تغيير الكلتش بدون تغيير الكمبروسر؟',
        questionEn: 'Can the clutch be replaced without changing the compressor?',
        answerAr:
          'نعم، في كثير من الحالات يمكن تغيير الكلتش فقط إذا كان الكمبروسر نفسه سليماً، مما يوفر تكلفة كبيرة.',
        answerEn:
          'Yes, in many cases the clutch can be replaced separately if the compressor itself is in good condition, saving significant cost.',
      },
    ],
  },
  {
    slug: 'compressor-bearing',
    nameAr: 'بيرنق كمبروسر المكيف',
    nameEn: 'AC Compressor Bearing',
    descriptionAr:
      'بيرنق الكمبروسر يسمح لبكرة الكمبروسر بالدوران بسلاسة. تلفه يسبب أصوات صرير مزعجة وقد يؤدي لتلف الكمبروسر بالكامل.',
    descriptionEn:
      'The compressor bearing allows the compressor pulley to spin smoothly. Its failure causes annoying squealing noises and can lead to complete compressor failure.',
    functionAr:
      'يدعم دوران بكرة الكمبروسر بسلاسة وبدون احتكاك، سواء كان المكيف يعمل أو متوقف.',
    functionEn:
      'Supports smooth, friction-free rotation of the compressor pulley, whether the AC is on or off.',
    failureSignsAr: [
      'صوت صرير مستمر من منطقة الكمبروسر',
      'الصوت يزداد عند تشغيل المكيف',
      'اهتزاز غير طبيعي في السير',
      'حرارة مرتفعة حول بكرة الكمبروسر',
    ],
    failureSignsEn: [
      'Continuous squealing from compressor area',
      'Noise increases when AC is turned on',
      'Abnormal belt vibration',
      'Excessive heat around compressor pulley',
    ],
    priceRangeOEM: { min: 100, max: 300 },
    priceRangeAftermarket: { min: 50, max: 150 },
    relatedSymptomSlugs: ['ac-squealing-noise', 'ac-grinding-noise'],
    faqs: [
      {
        questionAr: 'هل صوت الصرير دائماً بسبب البيرنق؟',
        questionEn: 'Is squealing noise always caused by the bearing?',
        answerAr:
          'ليس دائماً. قد يكون السبب سير المكيف المتهالك أو شداد السير. التشخيص الدقيق يحدد مصدر الصوت.',
        answerEn:
          'Not always. It could be a worn AC belt or belt tensioner. Accurate diagnosis pinpoints the noise source.',
      },
    ],
  },
  {
    slug: 'ac-belt',
    nameAr: 'سير مكيف السيارة',
    nameEn: 'Car AC Belt',
    descriptionAr:
      'سير المكيف (حزام السربنتاين) ينقل الحركة من المحرك إلى كمبروسر المكيف. يتآكل مع الاستخدام ويحتاج تغيير دوري.',
    descriptionEn:
      'The AC belt (serpentine belt) transfers power from the engine to the AC compressor. It wears over time and needs periodic replacement.',
    functionAr:
      'ينقل الطاقة الميكانيكية من بكرة المحرك إلى بكرة الكمبروسر لتشغيله. بدونه لا يعمل الكمبروسر.',
    functionEn:
      'Transfers mechanical power from the engine pulley to the compressor pulley to drive it. Without it, the compressor cannot operate.',
    failureSignsAr: [
      'صوت صرير عند تشغيل المكيف أو المحرك',
      'تشققات أو تآكل مرئي على السير',
      'انزلاق السير عند التحميل',
      'توقف مفاجئ للمكيف أثناء القيادة',
    ],
    failureSignsEn: [
      'Squealing noise when AC or engine starts',
      'Visible cracks or wear on the belt',
      'Belt slipping under load',
      'Sudden AC failure while driving',
    ],
    priceRangeOEM: { min: 60, max: 200 },
    priceRangeAftermarket: { min: 30, max: 100 },
    relatedSymptomSlugs: ['ac-squealing-noise', 'ac-stopped-working'],
    faqs: [
      {
        questionAr: 'كم عمر سير المكيف الافتراضي؟',
        questionEn: 'How long does an AC belt last?',
        answerAr:
          'عادة يستمر سير المكيف من 60,000 إلى 100,000 كم. في المناخ الحار مثل السعودية قد يحتاج تغيير أبكر.',
        answerEn:
          'An AC belt typically lasts 60,000 to 100,000 km. In hot climates like Saudi Arabia, it may need earlier replacement.',
      },
    ],
  },
  {
    slug: 'condenser-fan',
    nameAr: 'مروحة مكثف المكيف',
    nameEn: 'AC Condenser Fan',
    descriptionAr:
      'مروحة المكثف تساعد في تبريد المكثف عن طريق دفع الهواء من خلاله، خاصة عند التوقف أو القيادة البطيئة حيث لا يوجد تدفق هواء طبيعي كافٍ.',
    descriptionEn:
      'The condenser fan helps cool the condenser by pushing air through it, especially at idle or low speeds where natural airflow is insufficient.',
    functionAr:
      'تدفع الهواء عبر المكثف لتبريد الفريون عالي الضغط، وهي ضرورية جداً عند التوقف في الزحام أو الإشارات.',
    functionEn:
      'Pushes air through the condenser to cool high-pressure refrigerant. Essential when stopped in traffic or at traffic lights.',
    failureSignsAr: [
      'المكيف لا يبرد عند التوقف لكن يبرد أثناء القيادة',
      'ارتفاع حرارة المحرك عند تشغيل المكيف في الوقوف',
      'المروحة لا تعمل عند تشغيل المكيف',
    ],
    failureSignsEn: [
      'AC does not cool at idle but cools while driving',
      'Engine overheating with AC on at idle',
      'Fan does not spin when AC is on',
    ],
    priceRangeOEM: { min: 200, max: 800 },
    priceRangeAftermarket: { min: 100, max: 400 },
    relatedSymptomSlugs: ['ac-only-cools-driving', 'ac-weak-cooling'],
    faqs: [
      {
        questionAr: 'لماذا المكيف يبرد فقط أثناء القيادة؟',
        questionEn: 'Why does AC only cool while driving?',
        answerAr:
          'عادة هذا يعني أن مروحة المكثف لا تعمل. أثناء القيادة الهواء الطبيعي يبرد المكثف، لكن عند التوقف تحتاج المروحة لتعمل.',
        answerEn:
          'This usually means the condenser fan is not working. While driving, natural airflow cools the condenser, but at idle the fan is needed.',
      },
    ],
  },
  {
    slug: 'fan-motor',
    nameAr: 'موتور مروحة المكيف',
    nameEn: 'AC Blower Motor',
    descriptionAr:
      'موتور المروحة (البلور) يدفع الهواء من خلال المبخر إلى داخل مقصورة السيارة. يتحكم في قوة تدفق الهواء من فتحات التهوية.',
    descriptionEn:
      'The blower motor pushes air through the evaporator into the car cabin. It controls the airflow force from the vents.',
    functionAr:
      'يسحب الهواء ويدفعه عبر المبخر ثم إلى فتحات التهوية في المقصورة بسرعات مختلفة حسب إعداد المروحة.',
    functionEn:
      'Draws air and pushes it through the evaporator, then to the cabin vents at different speeds based on the fan setting.',
    failureSignsAr: [
      'لا يخرج هواء من فتحات التهوية',
      'ضعف شديد في تدفق الهواء',
      'المروحة تعمل على سرعة واحدة فقط',
      'صوت خشخشة أو طنين من خلف لوحة القيادة',
    ],
    failureSignsEn: [
      'No air coming from vents',
      'Very weak airflow',
      'Fan only works on one speed',
      'Rattling or humming noise from behind dashboard',
    ],
    priceRangeOEM: { min: 200, max: 700 },
    priceRangeAftermarket: { min: 100, max: 400 },
    relatedSymptomSlugs: ['ac-weak-airflow'],
    faqs: [
      {
        questionAr: 'المكيف يبرد لكن الهواء ضعيف، ما السبب؟',
        questionEn: 'AC is cold but airflow is weak, what is the cause?',
        answerAr:
          'قد يكون السبب موتور المروحة الضعيف، فلتر مقصورة مسدود، أو مشكلة في مقاومة المروحة.',
        answerEn:
          'It could be a weak blower motor, clogged cabin filter, or a blower motor resistor issue.',
      },
    ],
  },
  {
    slug: 'ac-relay',
    nameAr: 'ريلي مكيف السيارة',
    nameEn: 'Car AC Relay',
    descriptionAr:
      'ريلي المكيف مفتاح كهربائي يتحكم في تشغيل الكمبروسر والمراوح. تلفه يمنع وصول الكهرباء لمكونات المكيف.',
    descriptionEn:
      'The AC relay is an electrical switch that controls the compressor and fans. Its failure prevents electrical current from reaching AC components.',
    functionAr:
      'يعمل كمفتاح كهربائي يتحكم في تيار كهربائي كبير باستخدام إشارة كهربائية صغيرة من وحدة التحكم.',
    functionEn:
      'Acts as an electrical switch that controls a large current using a small signal from the control unit.',
    failureSignsAr: [
      'المكيف لا يعمل بالكامل',
      'المكيف يعمل بشكل متقطع',
      'طقطقة سريعة من صندوق الفيوزات',
    ],
    failureSignsEn: [
      'AC does not work at all',
      'AC works intermittently',
      'Rapid clicking from the fuse box',
    ],
    priceRangeOEM: { min: 30, max: 100 },
    priceRangeAftermarket: { min: 15, max: 50 },
    relatedSymptomSlugs: ['ac-stopped-working', 'ac-intermittent-cooling', 'ac-compressor-not-engaging'],
    faqs: [
      {
        questionAr: 'كيف أفحص ريلي المكيف؟',
        questionEn: 'How do I test the AC relay?',
        answerAr:
          'يمكن استبداله بريلي مشابه من صندوق الفيوزات (مثل ريلي الكشافات). إذا عمل المكيف فالريلي القديم تالف.',
        answerEn:
          'You can swap it with a similar relay from the fuse box (like the headlight relay). If the AC works, the old relay is faulty.',
      },
    ],
  },
  {
    slug: 'ac-fuse',
    nameAr: 'فيوز مكيف السيارة',
    nameEn: 'Car AC Fuse',
    descriptionAr:
      'فيوز المكيف يحمي الدائرة الكهربائية لنظام التكييف من الحمل الزائد. احتراقه المتكرر يشير لمشكلة كهربائية تحتاج فحص.',
    descriptionEn:
      'The AC fuse protects the AC electrical circuit from overload. Repeated blowing indicates an electrical problem that needs diagnosis.',
    functionAr:
      'يقطع التيار الكهربائي تلقائياً عند حدوث حمل زائد أو قصر في الدائرة لحماية مكونات المكيف من التلف.',
    functionEn:
      'Automatically cuts electrical current during overload or short circuit to protect AC components from damage.',
    failureSignsAr: [
      'المكيف يتوقف فجأة عن العمل',
      'الفيوز يحترق بشكل متكرر',
      'المكيف لا يستجيب لأي أمر',
    ],
    failureSignsEn: [
      'AC suddenly stops working',
      'Fuse blows repeatedly',
      'AC does not respond to any command',
    ],
    priceRangeOEM: { min: 5, max: 20 },
    priceRangeAftermarket: { min: 3, max: 10 },
    relatedSymptomSlugs: ['ac-fuse-blowing', 'ac-stopped-working'],
    faqs: [
      {
        questionAr: 'هل يمكنني تغيير فيوز المكيف بنفسي؟',
        questionEn: 'Can I replace the AC fuse myself?',
        answerAr:
          'نعم، تغيير الفيوز بسيط جداً. لكن إذا احترق الفيوز الجديد بسرعة، هناك مشكلة كهربائية أعمق تحتاج فني متخصص.',
        answerEn:
          'Yes, replacing a fuse is very simple. But if the new fuse blows quickly, there is a deeper electrical problem that needs a specialist.',
      },
    ],
  },
  {
    slug: 'pressure-sensor',
    nameAr: 'حساس ضغط مكيف السيارة',
    nameEn: 'AC Pressure Sensor',
    descriptionAr:
      'حساس الضغط يراقب ضغط الفريون في النظام ويرسل البيانات لوحدة التحكم. يحمي النظام من العمل بضغط منخفض أو مرتفع جداً.',
    descriptionEn:
      'The pressure sensor monitors refrigerant pressure in the system and sends data to the control unit. It protects the system from operating at dangerously low or high pressure.',
    functionAr:
      'يقيس ضغط الفريون ويرسل إشارة كهربائية لوحدة التحكم التي تقرر تشغيل أو إيقاف الكمبروسر بناءً على القراءة.',
    functionEn:
      'Measures refrigerant pressure and sends an electrical signal to the control unit, which decides to engage or disengage the compressor based on the reading.',
    failureSignsAr: [
      'الكمبروسر لا يشتغل رغم وجود فريون',
      'المكيف يشتغل ويطفي بشكل متكرر',
      'ظهور أكواد خطأ متعلقة بالمكيف في الكمبيوتر',
    ],
    failureSignsEn: [
      'Compressor does not engage despite having freon',
      'AC turns on and off frequently',
      'AC-related error codes in the vehicle computer',
    ],
    priceRangeOEM: { min: 80, max: 250 },
    priceRangeAftermarket: { min: 40, max: 120 },
    relatedSymptomSlugs: ['ac-compressor-not-engaging', 'ac-intermittent-cooling'],
    faqs: [
      {
        questionAr: 'كيف أعرف أن حساس الضغط تالف؟',
        questionEn: 'How do I know if the pressure sensor is bad?',
        answerAr:
          'إذا كان الفريون ممتلئ والكمبروسر لا يعمل، أو المكيف يشتغل ويطفي بسرعة، فقد يكون حساس الضغط تالفاً. فحص الكمبيوتر يؤكد ذلك.',
        answerEn:
          'If freon is full but the compressor won\'t engage, or AC cycles on and off rapidly, the pressure sensor may be faulty. A computer scan can confirm this.',
      },
    ],
  },
];

/**
 * Get a component by slug.
 */
export function getComponentBySlug(slug: string): ACComponent | undefined {
  return components.find((c) => c.slug === slug);
}

/**
 * Get all component slugs (for static path generation).
 */
export function getAllComponentSlugs(): string[] {
  return components.map((c) => c.slug);
}
