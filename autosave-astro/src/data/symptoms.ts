/**
 * Symptom/Problem data for programmatic SEO pages.
 * Each symptom generates a bilingual page at /symptoms/[slug] and /en/symptoms/[slug].
 */

export interface SymptomCause {
  titleAr: string;
  titleEn: string;
  explanationAr: string;
  explanationEn: string;
  likelihood: 'high' | 'medium' | 'low';
}

export interface Symptom {
  slug: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  keywordsAr: string[];
  keywordsEn: string[];
  causes: SymptomCause[];
  diagnosticStepsAr: string[];
  diagnosticStepsEn: string[];
  costRangeMin: number;
  costRangeMax: number;
  relatedSymptomSlugs: string[];
  relatedComponentSlugs: string[];
  faqs: {
    questionAr: string;
    questionEn: string;
    answerAr: string;
    answerEn: string;
  }[];
}

export const symptoms: Symptom[] = [
  {
    slug: 'ac-not-cooling',
    titleAr: 'مكيف السيارة لا يبرد',
    titleEn: 'Car AC Not Cooling',
    descriptionAr:
      'مكيف السيارة يعمل لكنه لا يخرج هواء بارد. هذه المشكلة شائعة جداً خاصة في فصل الصيف في السعودية وقد تكون لها أسباب متعددة.',
    descriptionEn:
      'The car AC runs but does not produce cold air. This is a very common problem especially during summer in Saudi Arabia and can have multiple causes.',
    keywordsAr: ['مكيف السيارة لا يبرد', 'المكيف ما يبرد', 'مكيف السيارة حار', 'المكيف لا يعمل بارد'],
    keywordsEn: ['car ac not cooling', 'ac not blowing cold', 'car ac warm air', 'ac not cold'],
    causes: [
      {
        titleAr: 'نقص الفريون',
        titleEn: 'Low Refrigerant',
        explanationAr: 'نقص كمية الفريون في النظام بسبب تسريب أو استهلاك طبيعي مع الوقت.',
        explanationEn: 'Low refrigerant level due to a leak or natural consumption over time.',
        likelihood: 'high',
      },
      {
        titleAr: 'تلف الكمبروسر',
        titleEn: 'Compressor Failure',
        explanationAr: 'الكمبروسر لا يضغط الفريون بشكل كافٍ أو توقف عن العمل بالكامل.',
        explanationEn: 'The compressor is not compressing refrigerant sufficiently or has stopped working entirely.',
        likelihood: 'medium',
      },
      {
        titleAr: 'انسداد المكثف',
        titleEn: 'Blocked Condenser',
        explanationAr: 'تراكم الأوساخ والحشرات على المكثف يمنع تبريد الفريون بكفاءة.',
        explanationEn: 'Dirt and debris buildup on the condenser prevents efficient refrigerant cooling.',
        likelihood: 'medium',
      },
      {
        titleAr: 'عطل كهربائي',
        titleEn: 'Electrical Fault',
        explanationAr: 'إشكال في الأسلاك أو الريلي أو الفيوز يمنع تشغيل نظام التكييف.',
        explanationEn: 'Wiring, relay, or fuse issues preventing the AC system from operating.',
        likelihood: 'low',
      },
    ],
    diagnosticStepsAr: [
      'شغل المكيف على أقصى برودة وتحقق من درجة حرارة الهواء الخارج',
      'تحقق من دوران الكمبروسر عند تشغيل المكيف',
      'افحص المكثف أمام الرديتر للتأكد من نظافته',
      'تحقق من مستوى الفريون بمقياس الضغط',
      'افحص الفيوزات والريلي المتعلقة بالمكيف',
    ],
    diagnosticStepsEn: [
      'Turn AC to maximum cold and check vent air temperature',
      'Verify the compressor is spinning when AC is on',
      'Inspect the condenser in front of the radiator for cleanliness',
      'Check refrigerant level with a pressure gauge',
      'Inspect AC-related fuses and relays',
    ],
    costRangeMin: 80,
    costRangeMax: 3500,
    relatedSymptomSlugs: ['ac-weak-cooling', 'ac-blowing-warm-air', 'ac-compressor-not-engaging'],
    relatedComponentSlugs: ['compressor', 'condenser', 'receiver-dryer'],
    faqs: [
      {
        questionAr: 'مكيف السيارة لا يبرد، ما السبب الأكثر شيوعاً؟',
        questionEn: 'Car AC not cooling, what is the most common cause?',
        answerAr: 'السبب الأكثر شيوعاً هو نقص الفريون بسبب تسريب. تعبئة الفريون مع كشف التسريب يحل المشكلة في أغلب الحالات.',
        answerEn: 'The most common cause is low refrigerant due to a leak. A freon recharge with leak detection solves the issue in most cases.',
      },
    ],
  },
  {
    slug: 'ac-blowing-warm-air',
    titleAr: 'مكيف السيارة يطلع هواء حار',
    titleEn: 'Car AC Blowing Warm Air',
    descriptionAr:
      'مكيف السيارة يعمل لكنه يخرج هواء حار أو دافئ بدلاً من الهواء البارد. مشكلة محبطة خاصة في حرارة السعودية.',
    descriptionEn:
      'The car AC is running but blowing warm or hot air instead of cold air. A frustrating problem especially in Saudi Arabia\'s heat.',
    keywordsAr: ['مكيف السيارة يطلع حار', 'هواء حار من المكيف', 'المكيف يطلع هواء دافئ'],
    keywordsEn: ['ac blowing warm air', 'ac blowing hot air', 'car ac not blowing cold'],
    causes: [
      {
        titleAr: 'فريون فارغ بالكامل',
        titleEn: 'Empty Refrigerant',
        explanationAr: 'الفريون نفد بالكامل من النظام بسبب تسريب كبير.',
        explanationEn: 'Refrigerant has completely leaked out of the system due to a significant leak.',
        likelihood: 'high',
      },
      {
        titleAr: 'كلتش الكمبروسر لا يعمل',
        titleEn: 'Compressor Clutch Failure',
        explanationAr: 'كلتش الكمبروسر لا يتشبك فلا يدور الكمبروسر ولا يحدث ضغط للفريون.',
        explanationEn: 'The compressor clutch is not engaging, so the compressor does not spin and no refrigerant compression occurs.',
        likelihood: 'medium',
      },
      {
        titleAr: 'مشكلة في باب الخلط (بليند دور)',
        titleEn: 'Blend Door Issue',
        explanationAr: 'باب الخلط عالق على وضع التدفئة فيخلط الهواء البارد بالحار.',
        explanationEn: 'The blend door is stuck on the heat position, mixing cold air with hot air.',
        likelihood: 'low',
      },
    ],
    diagnosticStepsAr: [
      'تحقق من دوران كلتش الكمبروسر',
      'قس ضغط الفريون في النظام',
      'افحص فيوزات وريلي المكيف',
      'تحقق من عمل باب الخلط',
    ],
    diagnosticStepsEn: [
      'Check if compressor clutch is engaging',
      'Measure system refrigerant pressure',
      'Inspect AC fuses and relays',
      'Verify blend door operation',
    ],
    costRangeMin: 100,
    costRangeMax: 3500,
    relatedSymptomSlugs: ['ac-not-cooling', 'ac-compressor-not-engaging'],
    relatedComponentSlugs: ['compressor', 'compressor-clutch', 'ac-relay'],
    faqs: [
      {
        questionAr: 'مكيف السيارة يطلع هواء حار فجأة، ماذا أفعل؟',
        questionEn: 'Car AC suddenly blowing warm air, what should I do?',
        answerAr: 'توقف عن استخدام المكيف واتصل بفني متخصص. السبب غالباً تسريب فريون كبير أو عطل في الكمبروسر يحتاج فحص فوري.',
        answerEn: 'Stop using the AC and contact a specialist. The cause is usually a significant freon leak or compressor failure that needs immediate inspection.',
      },
    ],
  },
  {
    slug: 'ac-weak-cooling',
    titleAr: 'مكيف السيارة تبريده ضعيف',
    titleEn: 'Car AC Weak Cooling',
    descriptionAr:
      'مكيف السيارة يبرد لكن بشكل ضعيف وغير كافٍ. الهواء ليس حاراً تماماً لكنه ليس بارداً بما يكفي للراحة في حرارة السعودية.',
    descriptionEn:
      'The car AC cools but weakly and insufficiently. The air is not completely warm but not cold enough for comfort in Saudi Arabia\'s heat.',
    keywordsAr: ['ضعف تبريد المكيف', 'المكيف ما يبرد زين', 'تبريد المكيف ضعيف'],
    keywordsEn: ['car ac weak cooling', 'ac not cold enough', 'ac weak performance'],
    causes: [
      {
        titleAr: 'نقص جزئي في الفريون',
        titleEn: 'Partial Refrigerant Loss',
        explanationAr: 'كمية الفريون أقل من المطلوب بسبب تسريب بطيء.',
        explanationEn: 'Refrigerant level is below required amount due to a slow leak.',
        likelihood: 'high',
      },
      {
        titleAr: 'فلتر مقصورة مسدود',
        titleEn: 'Clogged Cabin Filter',
        explanationAr: 'فلتر المقصورة المتسخ يقلل تدفق الهواء عبر المبخر.',
        explanationEn: 'A dirty cabin filter reduces airflow through the evaporator.',
        likelihood: 'high',
      },
      {
        titleAr: 'مكثف متسخ',
        titleEn: 'Dirty Condenser',
        explanationAr: 'تراكم الأوساخ على المكثف يقلل قدرته على تبريد الفريون.',
        explanationEn: 'Dirt buildup on the condenser reduces its ability to cool refrigerant.',
        likelihood: 'medium',
      },
      {
        titleAr: 'صمام تمدد معطوب',
        titleEn: 'Faulty Expansion Valve',
        explanationAr: 'صمام التمدد لا ينظم تدفق الفريون بشكل صحيح.',
        explanationEn: 'The expansion valve is not regulating refrigerant flow properly.',
        likelihood: 'low',
      },
    ],
    diagnosticStepsAr: [
      'قس درجة حرارة الهواء من فتحات التهوية (المثالي 3-8 درجات)',
      'غير فلتر المقصورة إن كان متسخاً',
      'نظف المكثف من الأوساخ والحشرات',
      'افحص مستوى الفريون بمقياس الضغط',
      'تحقق من عمل المروحة والمبخر',
    ],
    diagnosticStepsEn: [
      'Measure vent air temperature (ideal is 3-8 degrees C)',
      'Replace cabin filter if dirty',
      'Clean condenser from dirt and debris',
      'Check refrigerant level with pressure gauge',
      'Verify fan and evaporator operation',
    ],
    costRangeMin: 50,
    costRangeMax: 1500,
    relatedSymptomSlugs: ['ac-not-cooling', 'ac-only-cools-driving', 'ac-weak-airflow'],
    relatedComponentSlugs: ['cabin-filter', 'condenser', 'expansion-valve', 'receiver-dryer'],
    faqs: [
      {
        questionAr: 'المكيف يبرد بس ما يبرد زين، وش الحل؟',
        questionEn: 'AC cools but not well enough, what is the fix?',
        answerAr: 'ابدأ بتغيير فلتر المقصورة وتنظيف المكثف. إذا استمرت المشكلة، افحص مستوى الفريون. هذه الخطوات تحل المشكلة في 80% من الحالات.',
        answerEn: 'Start by replacing the cabin filter and cleaning the condenser. If the problem persists, check the refrigerant level. These steps solve the problem in 80% of cases.',
      },
    ],
  },
  {
    slug: 'ac-stopped-working',
    titleAr: 'مكيف السيارة توقف عن العمل',
    titleEn: 'Car AC Stopped Working',
    descriptionAr:
      'مكيف السيارة توقف فجأة عن العمل بالكامل. لا يعمل الكمبروسر ولا تخرج بارد من فتحات التهوية.',
    descriptionEn:
      'The car AC has completely stopped working. The compressor does not engage and no cold air comes from the vents.',
    keywordsAr: ['المكيف توقف', 'مكيف السيارة ما يشتغل', 'المكيف لا يعمل'],
    keywordsEn: ['ac stopped working', 'car ac not working', 'ac won\'t turn on'],
    causes: [
      {
        titleAr: 'فيوز محترق',
        titleEn: 'Blown Fuse',
        explanationAr: 'فيوز المكيف احترق بسبب حمل زائد أو قصر في الدائرة.',
        explanationEn: 'AC fuse has blown due to overload or short circuit.',
        likelihood: 'high',
      },
      {
        titleAr: 'ريلي تالف',
        titleEn: 'Faulty Relay',
        explanationAr: 'ريلي المكيف تالف ولا يوصل الكهرباء للكمبروسر.',
        explanationEn: 'AC relay is faulty and not sending power to the compressor.',
        likelihood: 'medium',
      },
      {
        titleAr: 'سير مقطوع',
        titleEn: 'Broken Belt',
        explanationAr: 'سير المكيف انقطع فلا يستطيع المحرك تشغيل الكمبروسر.',
        explanationEn: 'AC belt has snapped so the engine cannot drive the compressor.',
        likelihood: 'medium',
      },
      {
        titleAr: 'تلف الكمبروسر',
        titleEn: 'Compressor Failure',
        explanationAr: 'الكمبروسر نفسه تلف داخلياً أو احتجز ولا يدور.',
        explanationEn: 'The compressor itself has failed internally or seized and won\'t spin.',
        likelihood: 'low',
      },
    ],
    diagnosticStepsAr: [
      'افحص فيوز المكيف في صندوق الفيوزات',
      'تحقق من ريلي المكيف (استبدله بريلي مشابه للاختبار)',
      'افحص سير المكيف بصرياً',
      'تحقق من توصيلات الكهرباء للكمبروسر',
      'افحص حساس الضغط',
    ],
    diagnosticStepsEn: [
      'Check AC fuse in the fuse box',
      'Test AC relay (swap with a similar relay)',
      'Visually inspect AC belt',
      'Check electrical connections to the compressor',
      'Inspect pressure sensor',
    ],
    costRangeMin: 10,
    costRangeMax: 3500,
    relatedSymptomSlugs: ['ac-not-cooling', 'ac-compressor-not-engaging', 'ac-fuse-blowing'],
    relatedComponentSlugs: ['ac-fuse', 'ac-relay', 'ac-belt', 'compressor'],
    faqs: [
      {
        questionAr: 'مكيف السيارة وقف فجأة، هل أقدر أسوقها؟',
        questionEn: 'Car AC stopped suddenly, can I still drive?',
        answerAr: 'نعم، يمكنك قيادة السيارة بأمان. لكن في حرارة السعودية الشديدة ننصح بعدم القيادة لمسافات طويلة بدون مكيف لسلامتك.',
        answerEn: 'Yes, you can drive safely. However, in Saudi Arabia\'s extreme heat, we advise against long drives without AC for your safety.',
      },
    ],
  },
  {
    slug: 'ac-intermittent-cooling',
    titleAr: 'مكيف السيارة يبرد ويوقف',
    titleEn: 'Car AC Intermittent Cooling',
    descriptionAr:
      'مكيف السيارة يبرد لفترة ثم يتوقف عن التبريد ثم يعود مرة أخرى. تذبذب مزعج في أداء التبريد.',
    descriptionEn:
      'The car AC cools for a while then stops cooling, then resumes again. An annoying fluctuation in cooling performance.',
    keywordsAr: ['المكيف يشتغل ويطفي', 'تبريد متقطع', 'المكيف يبرد ويوقف'],
    keywordsEn: ['ac intermittent cooling', 'ac cycles on and off', 'ac works then stops'],
    causes: [
      {
        titleAr: 'فريون منخفض',
        titleEn: 'Low Refrigerant',
        explanationAr: 'مستوى الفريون قريب من الحد الأدنى مما يجعل حساس الضغط يقطع ويوصل.',
        explanationEn: 'Refrigerant level is near the minimum, causing the pressure sensor to cycle on and off.',
        likelihood: 'high',
      },
      {
        titleAr: 'حساس ضغط معطوب',
        titleEn: 'Faulty Pressure Sensor',
        explanationAr: 'حساس الضغط يعطي قراءات خاطئة فيفصل الكمبروسر في أوقات غير مناسبة.',
        explanationEn: 'Pressure sensor gives false readings, disconnecting the compressor at inappropriate times.',
        likelihood: 'medium',
      },
      {
        titleAr: 'مشكلة في كلتش الكمبروسر',
        titleEn: 'Compressor Clutch Issue',
        explanationAr: 'كلتش الكمبروسر يتشبك وينفك بشكل غير منتظم بسبب تآكل أو ضعف.',
        explanationEn: 'Compressor clutch engages and disengages irregularly due to wear or weakness.',
        likelihood: 'medium',
      },
    ],
    diagnosticStepsAr: [
      'راقب الكمبروسر أثناء التشغيل لملاحظة نمط التشبيك والفك',
      'قس ضغط الفريون أثناء التشغيل والتوقف',
      'افحص حساس الضغط بالكمبيوتر',
      'افحص أسلاك كلتش الكمبروسر',
    ],
    diagnosticStepsEn: [
      'Observe compressor engagement pattern during operation',
      'Measure refrigerant pressure during cycling',
      'Scan pressure sensor with diagnostic computer',
      'Inspect compressor clutch wiring',
    ],
    costRangeMin: 80,
    costRangeMax: 1500,
    relatedSymptomSlugs: ['ac-weak-cooling', 'ac-compressor-not-engaging', 'ac-one-side-only'],
    relatedComponentSlugs: ['pressure-sensor', 'compressor-clutch', 'receiver-dryer'],
    faqs: [
      {
        questionAr: 'مكيف السيارة يبرد ثم يوقف، هل المشكلة خطيرة؟',
        questionEn: 'AC cools then stops, is this a serious problem?',
        answerAr: 'ليست خطيرة عادة لكن يجب فحصها قريباً. غالباً السبب نقص فريون مع تسريب بسيط، وتأخير الفحص قد يتلف الكمبروسر.',
        answerEn: 'Usually not serious but should be inspected soon. Most often caused by low freon with a small leak, and delaying diagnosis can damage the compressor.',
      },
    ],
  },
  {
    slug: 'ac-one-side-only',
    titleAr: 'مكيف السيارة يبرد من جهة واحدة',
    titleEn: 'Car AC Cools One Side Only',
    descriptionAr:
      'مكيف السيارة يبرد من جهة واحدة فقط (السائق أو الراكب) بينما الجهة الأخرى تخرج هواء حار أو دافئ.',
    descriptionEn:
      'The car AC cools on only one side (driver or passenger) while the other side blows warm or hot air.',
    keywordsAr: ['المكيف يبرد من جهة واحدة', 'المكيف جهة باردة وجهة حارة'],
    keywordsEn: ['ac cools one side only', 'dual zone ac problem', 'ac one side hot'],
    causes: [
      {
        titleAr: 'باب خلط معطوب (بليند دور)',
        titleEn: 'Faulty Blend Door',
        explanationAr: 'باب الخلط في إحدى الجهتين عالق أو محركه تالف فلا يفتح للهواء البارد.',
        explanationEn: 'The blend door on one side is stuck or its actuator has failed, blocking cold air.',
        likelihood: 'high',
      },
      {
        titleAr: 'مشكلة في محرك باب الخلط (أكتويتر)',
        titleEn: 'Blend Door Actuator Failure',
        explanationAr: 'المحرك الصغير الذي يتحكم في باب الخلط لا يعمل.',
        explanationEn: 'The small motor that controls the blend door is not functioning.',
        likelihood: 'high',
      },
    ],
    diagnosticStepsAr: [
      'تحقق من إعدادات التكييف ثنائي المنطقة',
      'استمع لصوت محركات أبواب الخلط عند تغيير الحرارة',
      'افحص بالكمبيوتر أكواد أخطاء نظام التحكم في المناخ',
    ],
    diagnosticStepsEn: [
      'Check dual zone AC settings',
      'Listen for blend door actuator sounds when changing temperature',
      'Scan for climate control error codes',
    ],
    costRangeMin: 200,
    costRangeMax: 1200,
    relatedSymptomSlugs: ['ac-weak-cooling', 'ac-intermittent-cooling'],
    relatedComponentSlugs: [],
    faqs: [
      {
        questionAr: 'المكيف يبرد من جهة السائق فقط، ما الحل؟',
        questionEn: 'AC cools only on driver side, what is the fix?',
        answerAr: 'غالباً المشكلة في محرك باب الخلط (أكتويتر) في جهة الراكب. يحتاج استبدال ويتراوح سعره بين 200-500 ريال مع التركيب.',
        answerEn: 'Usually the issue is the blend door actuator on the passenger side. It needs replacement, costing 200-500 SAR including installation.',
      },
    ],
  },
  {
    slug: 'ac-only-cools-driving',
    titleAr: 'المكيف يبرد أثناء القيادة فقط',
    titleEn: 'AC Only Cools While Driving',
    descriptionAr:
      'مكيف السيارة يبرد جيداً أثناء القيادة على الطريق لكنه يضعف أو يتوقف عن التبريد عند الوقوف أو في الزحام.',
    descriptionEn:
      'The car AC cools well while driving on the road but weakens or stops cooling when idling or in traffic.',
    keywordsAr: ['المكيف يبرد بس وأنا ماشي', 'المكيف ما يبرد وأنا واقف', 'ضعف المكيف عند الوقوف'],
    keywordsEn: ['ac only cools driving', 'ac weak at idle', 'ac stops cooling in traffic'],
    causes: [
      {
        titleAr: 'مروحة المكثف لا تعمل',
        titleEn: 'Condenser Fan Not Working',
        explanationAr: 'المروحة التي تبرد المكثف عند الوقوف لا تعمل. أثناء القيادة الهواء الطبيعي يعوض عنها.',
        explanationEn: 'The fan that cools the condenser at idle is not working. While driving, natural airflow compensates.',
        likelihood: 'high',
      },
      {
        titleAr: 'فريون منخفض قليلاً',
        titleEn: 'Slightly Low Refrigerant',
        explanationAr: 'الفريون أقل من الكمية المطلوبة بقليل فيظهر الضعف عند بطء التدفق.',
        explanationEn: 'Refrigerant is slightly below the required amount, showing weakness at low airflow.',
        likelihood: 'medium',
      },
    ],
    diagnosticStepsAr: [
      'شغل المكيف والسيارة واقفة وتحقق من دوران مروحة المكثف',
      'افحص فيوز وريلي مروحة المكثف',
      'قس ضغط الفريون عند الوقوف',
      'تحقق من نظافة المكثف',
    ],
    diagnosticStepsEn: [
      'Turn AC on at idle and check if condenser fan spins',
      'Inspect condenser fan fuse and relay',
      'Measure refrigerant pressure at idle',
      'Check condenser cleanliness',
    ],
    costRangeMin: 100,
    costRangeMax: 800,
    relatedSymptomSlugs: ['ac-weak-cooling', 'ac-not-cooling'],
    relatedComponentSlugs: ['condenser-fan', 'condenser'],
    faqs: [
      {
        questionAr: 'لماذا المكيف يضعف في الزحام فقط؟',
        questionEn: 'Why does AC weaken only in traffic?',
        answerAr: 'أثناء الوقوف لا يتدفق هواء طبيعي على المكثف. مروحة المكثف تقوم بهذه المهمة، فإذا كانت معطوبة يضعف التبريد.',
        answerEn: 'At idle, no natural airflow reaches the condenser. The condenser fan does this job, and if it\'s faulty, cooling weakens.',
      },
    ],
  },
  {
    slug: 'ac-clicking-noise',
    titleAr: 'صوت طقطقة من مكيف السيارة',
    titleEn: 'Car AC Clicking Noise',
    descriptionAr:
      'سماع صوت طقطقة أو نقر متكرر عند تشغيل مكيف السيارة. الصوت قد يكون من الكمبروسر أو من داخل لوحة القيادة.',
    descriptionEn:
      'Hearing a clicking or tapping sound when the car AC is turned on. The noise may come from the compressor or from inside the dashboard.',
    keywordsAr: ['طقطقة المكيف', 'صوت نقر من المكيف', 'صوت مكيف السيارة'],
    keywordsEn: ['ac clicking noise', 'clicking sound from ac', 'car ac tapping noise'],
    causes: [
      {
        titleAr: 'كلتش الكمبروسر يتشبك وينفك',
        titleEn: 'Compressor Clutch Cycling',
        explanationAr: 'كلتش الكمبروسر يتشبك ويفك بسرعة بسبب نقص فريون أو عطل في حساس الضغط.',
        explanationEn: 'Compressor clutch rapidly engages and disengages due to low refrigerant or pressure sensor fault.',
        likelihood: 'high',
      },
      {
        titleAr: 'جسم غريب في المروحة',
        titleEn: 'Debris in Blower Fan',
        explanationAr: 'أوراق أو جسم صغير دخل في مروحة المقصورة يسبب صوت طقطقة.',
        explanationEn: 'Leaves or small debris inside the blower fan causing a clicking sound.',
        likelihood: 'medium',
      },
    ],
    diagnosticStepsAr: [
      'حدد مصدر الصوت (الأمام من المحرك أو داخل المقصورة)',
      'راقب كلتش الكمبروسر أثناء الصوت',
      'افحص مستوى الفريون',
      'افحص مروحة المقصورة لوجود أجسام غريبة',
    ],
    diagnosticStepsEn: [
      'Locate the noise source (engine bay or inside cabin)',
      'Observe compressor clutch during the noise',
      'Check refrigerant level',
      'Inspect blower fan for debris',
    ],
    costRangeMin: 50,
    costRangeMax: 1500,
    relatedSymptomSlugs: ['ac-intermittent-cooling', 'ac-compressor-not-engaging'],
    relatedComponentSlugs: ['compressor-clutch', 'compressor', 'fan-motor'],
    faqs: [
      {
        questionAr: 'صوت طقطقة من المكيف، هل المشكلة خطيرة؟',
        questionEn: 'Clicking from AC, is it serious?',
        answerAr: 'يعتمد على المصدر. إذا كان من الكمبروسر فقد يشير لمشكلة تحتاج فحص سريع. إذا كان من المقصورة فغالباً جسم غريب في المروحة.',
        answerEn: 'It depends on the source. If from the compressor, it may indicate an issue needing quick inspection. If from the cabin, it\'s likely debris in the blower fan.',
      },
    ],
  },
  {
    slug: 'ac-bad-smell',
    titleAr: 'رائحة كريهة من مكيف السيارة',
    titleEn: 'Car AC Bad Smell',
    descriptionAr:
      'خروج رائحة كريهة أو مزعجة من فتحات مكيف السيارة عند تشغيله. الرائحة قد تكون عفنة أو حمضية أو تشبه رائحة الجوارب.',
    descriptionEn:
      'A bad or unpleasant odor coming from the car AC vents when turned on. The smell may be musty, sour, or like dirty socks.',
    keywordsAr: ['رائحة المكيف كريهة', 'ريحة المكيف', 'رائحة عفنة من المكيف'],
    keywordsEn: ['ac bad smell', 'car ac smells bad', 'ac musty smell', 'ac odor'],
    causes: [
      {
        titleAr: 'بكتيريا وفطريات في المبخر',
        titleEn: 'Bacteria and Mold on Evaporator',
        explanationAr: 'تراكم البكتيريا والفطريات على سطح المبخر الرطب يسبب رائحة كريهة.',
        explanationEn: 'Bacteria and mold buildup on the moist evaporator surface causes bad odor.',
        likelihood: 'high',
      },
      {
        titleAr: 'فلتر مقصورة متسخ',
        titleEn: 'Dirty Cabin Filter',
        explanationAr: 'الفلتر المتسخ يتراكم فيه الغبار والرطوبة ويصبح مصدراً للرائحة.',
        explanationEn: 'A dirty filter accumulates dust and moisture, becoming a source of odor.',
        likelihood: 'high',
      },
    ],
    diagnosticStepsAr: [
      'افحص فلتر المقصورة واستبدله إن كان متسخاً',
      'شغل المكيف وشمّ الهواء الخارج لتحديد نوع الرائحة',
      'افحص المبخر بصرياً إن أمكن',
      'تحقق من عدم وجود تسريب ماء في المقصورة',
    ],
    diagnosticStepsEn: [
      'Inspect cabin filter and replace if dirty',
      'Turn AC on and smell the vent air to identify the odor type',
      'Visually inspect evaporator if accessible',
      'Check for water leaks inside the cabin',
    ],
    costRangeMin: 50,
    costRangeMax: 300,
    relatedSymptomSlugs: ['ac-musty-smell', 'ac-weak-airflow'],
    relatedComponentSlugs: ['evaporator', 'cabin-filter'],
    faqs: [
      {
        questionAr: 'كيف أتخلص من رائحة مكيف السيارة الكريهة؟',
        questionEn: 'How do I get rid of car AC bad smell?',
        answerAr: 'غيّر فلتر المقصورة وأجرِ تنظيف وتعقيم للمبخر ومجاري الهواء. هذا يزيل البكتيريا المسببة للرائحة.',
        answerEn: 'Replace the cabin filter and have the evaporator and air ducts cleaned and sanitized. This removes odor-causing bacteria.',
      },
    ],
  },
  {
    slug: 'ac-musty-smell',
    titleAr: 'رائحة عفنة من مكيف السيارة',
    titleEn: 'Car AC Musty Smell',
    descriptionAr:
      'رائحة عفن أو رطوبة تخرج من مكيف السيارة خاصة عند التشغيل الأول. تشبه رائحة الأماكن الرطبة أو المغلقة.',
    descriptionEn:
      'A musty or damp smell from the car AC especially on first start. Smells like humid or closed spaces.',
    keywordsAr: ['رائحة عفن من المكيف', 'ريحة رطوبة من المكيف'],
    keywordsEn: ['musty ac smell', 'ac damp smell', 'ac mildew smell'],
    causes: [
      {
        titleAr: 'نمو فطريات على المبخر',
        titleEn: 'Mold Growth on Evaporator',
        explanationAr: 'الرطوبة المتبقية على المبخر بعد إيقاف المكيف تسمح بنمو الفطريات.',
        explanationEn: 'Residual moisture on the evaporator after AC shutdown allows mold growth.',
        likelihood: 'high',
      },
      {
        titleAr: 'انسداد أنبوب تصريف التكثيف',
        titleEn: 'Clogged Condensate Drain',
        explanationAr: 'انسداد أنبوب تصريف الماء من المبخر يسبب تجمع الماء وظهور العفن.',
        explanationEn: 'A clogged condensate drain tube causes water to pool, promoting mold growth.',
        likelihood: 'medium',
      },
    ],
    diagnosticStepsAr: [
      'تحقق من تصريف ماء التكثيف أسفل السيارة',
      'نظف أنبوب التصريف إن كان مسدوداً',
      'غير فلتر المقصورة',
      'اطلب تنظيف وتعقيم المبخر',
    ],
    diagnosticStepsEn: [
      'Check condensate drain under the car',
      'Clean drain tube if clogged',
      'Replace cabin filter',
      'Request evaporator cleaning and sanitization',
    ],
    costRangeMin: 50,
    costRangeMax: 250,
    relatedSymptomSlugs: ['ac-bad-smell', 'ac-water-leak'],
    relatedComponentSlugs: ['evaporator', 'cabin-filter'],
    faqs: [
      {
        questionAr: 'كيف أمنع رائحة العفن من المكيف؟',
        questionEn: 'How do I prevent musty AC smell?',
        answerAr: 'أطفئ المكيف قبل الوصول بـ 5 دقائق وشغل المروحة فقط لتجفيف المبخر. وغير فلتر المقصورة بانتظام.',
        answerEn: 'Turn off AC 5 minutes before arriving and run the fan only to dry the evaporator. Also replace the cabin filter regularly.',
      },
    ],
  },
  {
    slug: 'ac-compressor-not-engaging',
    titleAr: 'كمبروسر المكيف لا يعمل',
    titleEn: 'AC Compressor Not Engaging',
    descriptionAr:
      'عند تشغيل المكيف لا يتحرك كلتش الكمبروسر ولا يدور الكمبروسر. نظام التكييف لا يعمل بالكامل.',
    descriptionEn:
      'When AC is turned on, the compressor clutch does not engage and the compressor does not spin. The AC system is completely non-functional.',
    keywordsAr: ['الكمبروسر ما يشتغل', 'كلتش الكمبروسر لا يعمل', 'الكمبروسر لا يدور'],
    keywordsEn: ['compressor not engaging', 'ac clutch not working', 'compressor won\'t start'],
    causes: [
      {
        titleAr: 'فريون فارغ (حماية تلقائية)',
        titleEn: 'Empty Refrigerant (Auto Protection)',
        explanationAr: 'حساس الضغط يمنع تشغيل الكمبروسر عندما يكون الفريون منخفضاً جداً لحماية الكمبروسر من التلف.',
        explanationEn: 'The pressure sensor prevents compressor engagement when refrigerant is too low to protect the compressor from damage.',
        likelihood: 'high',
      },
      {
        titleAr: 'عطل كهربائي',
        titleEn: 'Electrical Fault',
        explanationAr: 'فيوز أو ريلي أو سلك تالف يمنع وصول الكهرباء لكلتش الكمبروسر.',
        explanationEn: 'A blown fuse, faulty relay, or damaged wire preventing power from reaching the clutch.',
        likelihood: 'medium',
      },
      {
        titleAr: 'كلتش الكمبروسر تالف',
        titleEn: 'Failed Compressor Clutch',
        explanationAr: 'ملف الكلتش محترق أو الكلتش نفسه تالف ميكانيكياً.',
        explanationEn: 'Clutch coil burned out or clutch mechanically failed.',
        likelihood: 'medium',
      },
    ],
    diagnosticStepsAr: [
      'تحقق من مستوى الفريون',
      'افحص فيوز وريلي المكيف',
      'قس الجهد الكهربائي على كلتش الكمبروسر',
      'افحص حساس الضغط',
      'اختبر ملف الكلتش بالمقاومة الكهربائية',
    ],
    diagnosticStepsEn: [
      'Check refrigerant level',
      'Inspect AC fuse and relay',
      'Measure voltage at compressor clutch',
      'Test pressure sensor',
      'Check clutch coil resistance',
    ],
    costRangeMin: 50,
    costRangeMax: 2000,
    relatedSymptomSlugs: ['ac-not-cooling', 'ac-stopped-working', 'ac-clicking-noise'],
    relatedComponentSlugs: ['compressor-clutch', 'ac-relay', 'ac-fuse', 'pressure-sensor'],
    faqs: [
      {
        questionAr: 'الكمبروسر ما يشتغل، هل لازم أغيره؟',
        questionEn: 'Compressor not engaging, do I need to replace it?',
        answerAr: 'ليس بالضرورة. في كثير من الحالات السبب نقص فريون أو عطل كهربائي بسيط. التشخيص الدقيق يحدد إذا كان الكمبروسر نفسه تالف.',
        answerEn: 'Not necessarily. In many cases the cause is low refrigerant or a simple electrical fault. Accurate diagnosis determines if the compressor itself is faulty.',
      },
    ],
  },
  {
    slug: 'ac-fuse-blowing',
    titleAr: 'فيوز مكيف السيارة يحترق',
    titleEn: 'Car AC Fuse Keeps Blowing',
    descriptionAr:
      'فيوز مكيف السيارة يحترق بشكل متكرر عند تشغيل المكيف. مشكلة كهربائية تحتاج تشخيص دقيق.',
    descriptionEn:
      'The car AC fuse keeps blowing repeatedly when the AC is turned on. An electrical problem that needs accurate diagnosis.',
    keywordsAr: ['فيوز المكيف يحترق', 'فيوز المكيف ينقطع', 'مشكلة كهربائية في المكيف'],
    keywordsEn: ['ac fuse keeps blowing', 'ac fuse burns out', 'ac electrical problem'],
    causes: [
      {
        titleAr: 'قصر في ملف كلتش الكمبروسر',
        titleEn: 'Short in Compressor Clutch Coil',
        explanationAr: 'ملف كلتش الكمبروسر يسحب تيار زائد بسبب قصر داخلي.',
        explanationEn: 'Compressor clutch coil draws excessive current due to internal short circuit.',
        likelihood: 'high',
      },
      {
        titleAr: 'كمبروسر محتجز',
        titleEn: 'Seized Compressor',
        explanationAr: 'الكمبروسر محتجز ميكانيكياً ويسحب تيار زائد عند محاولة التشغيل.',
        explanationEn: 'Compressor is mechanically seized and draws excessive current when trying to start.',
        likelihood: 'medium',
      },
      {
        titleAr: 'سلك مقشور أو مكشوف',
        titleEn: 'Exposed or Damaged Wire',
        explanationAr: 'سلك كهربائي في دائرة المكيف مكشوف ويلمس جسم السيارة.',
        explanationEn: 'An AC circuit wire is exposed and touching the vehicle body, causing a short.',
        likelihood: 'medium',
      },
    ],
    diagnosticStepsAr: [
      'لا تستبدل الفيوز أكثر من مرة بدون تشخيص',
      'افحص ملف كلتش الكمبروسر بالمقاومة',
      'تحقق من حرية دوران الكمبروسر يدوياً',
      'افحص أسلاك دائرة المكيف بصرياً',
      'استخدم جهاز قياس الأمبير لتحديد مكان السحب الزائد',
    ],
    diagnosticStepsEn: [
      'Do not replace the fuse multiple times without diagnosis',
      'Check compressor clutch coil resistance',
      'Verify compressor spins freely by hand',
      'Visually inspect AC circuit wiring',
      'Use an ammeter to locate excessive current draw',
    ],
    costRangeMin: 50,
    costRangeMax: 3500,
    relatedSymptomSlugs: ['ac-stopped-working', 'ac-compressor-not-engaging'],
    relatedComponentSlugs: ['ac-fuse', 'compressor-clutch', 'compressor'],
    faqs: [
      {
        questionAr: 'فيوز المكيف يحترق كل ما شغلته، ماذا أفعل؟',
        questionEn: 'AC fuse blows every time I turn it on, what should I do?',
        answerAr: 'لا تستمر في تغيير الفيوز لأن المشكلة أعمق. اذهب لفني متخصص لفحص الدائرة الكهربائية وتحديد سبب السحب الزائد للتيار.',
        answerEn: 'Stop replacing the fuse as the problem is deeper. Visit a specialist to inspect the electrical circuit and identify the cause of excessive current draw.',
      },
    ],
  },
  {
    slug: 'ac-weak-airflow',
    titleAr: 'ضعف تدفق هواء المكيف',
    titleEn: 'Car AC Weak Airflow',
    descriptionAr:
      'تدفق الهواء من فتحات مكيف السيارة ضعيف رغم أن الهواء بارد. المشكلة في كمية الهواء وليس في درجة الحرارة.',
    descriptionEn:
      'Airflow from the car AC vents is weak even though the air is cold. The problem is with air volume, not temperature.',
    keywordsAr: ['ضعف هواء المكيف', 'المكيف هواه ضعيف', 'تدفق هواء ضعيف'],
    keywordsEn: ['weak ac airflow', 'ac low air volume', 'ac not blowing hard enough'],
    causes: [
      {
        titleAr: 'فلتر مقصورة مسدود',
        titleEn: 'Clogged Cabin Filter',
        explanationAr: 'فلتر المقصورة المتسخ يعيق مرور الهواء ويقلل التدفق بشكل كبير.',
        explanationEn: 'A dirty cabin filter blocks airflow and significantly reduces air volume.',
        likelihood: 'high',
      },
      {
        titleAr: 'ضعف موتور المروحة',
        titleEn: 'Weak Blower Motor',
        explanationAr: 'موتور المروحة أصبح ضعيفاً بسبب تآكل الفحمات أو عطل داخلي.',
        explanationEn: 'Blower motor has weakened due to worn brushes or internal failure.',
        likelihood: 'medium',
      },
      {
        titleAr: 'انسداد في مجاري الهواء',
        titleEn: 'Blocked Air Ducts',
        explanationAr: 'مجاري الهواء داخل لوحة القيادة مسدودة جزئياً بأوراق أو أجسام غريبة.',
        explanationEn: 'Air ducts inside the dashboard partially blocked by leaves or foreign objects.',
        likelihood: 'low',
      },
    ],
    diagnosticStepsAr: [
      'غير فلتر المقصورة وتحقق من تحسن التدفق',
      'شغل المروحة على جميع السرعات وتحقق من الاستجابة',
      'استمع لأصوات غير طبيعية من المروحة',
      'افحص مقاومة المروحة (إذا كانت تعمل على سرعة واحدة فقط)',
    ],
    diagnosticStepsEn: [
      'Replace cabin filter and check if airflow improves',
      'Run blower on all speeds and verify response',
      'Listen for abnormal sounds from the blower',
      'Check blower resistor (if fan only works on one speed)',
    ],
    costRangeMin: 30,
    costRangeMax: 700,
    relatedSymptomSlugs: ['ac-weak-cooling', 'ac-bad-smell'],
    relatedComponentSlugs: ['cabin-filter', 'fan-motor'],
    faqs: [
      {
        questionAr: 'المكيف هواه ضعيف بس بارد، وش المشكلة؟',
        questionEn: 'AC air is cold but weak, what is the problem?',
        answerAr: 'السبب الأكثر شيوعاً هو فلتر مقصورة مسدود. غيره أولاً، وإذا لم يتحسن التدفق فالمشكلة غالباً في موتور المروحة.',
        answerEn: 'The most common cause is a clogged cabin filter. Replace it first, and if airflow does not improve, the issue is likely the blower motor.',
      },
    ],
  },
  {
    slug: 'ac-squealing-noise',
    titleAr: 'صوت صرير من مكيف السيارة',
    titleEn: 'Car AC Squealing Noise',
    descriptionAr:
      'صوت صرير أو صفير حاد عند تشغيل مكيف السيارة أو عند تشغيل المحرك. الصوت عادة يأتي من منطقة المحرك.',
    descriptionEn:
      'A squealing or high-pitched whistling sound when the car AC is turned on or when the engine starts. The noise usually comes from the engine area.',
    keywordsAr: ['صوت صرير من المكيف', 'صفير المكيف', 'صوت سير المكيف'],
    keywordsEn: ['ac squealing noise', 'ac belt squeal', 'ac whistling sound'],
    causes: [
      {
        titleAr: 'سير المكيف متهالك أو مرتخي',
        titleEn: 'Worn or Loose AC Belt',
        explanationAr: 'السير المتآكل أو المرتخي ينزلق على البكرات ويسبب صوت صرير.',
        explanationEn: 'A worn or loose belt slips on pulleys, creating a squealing sound.',
        likelihood: 'high',
      },
      {
        titleAr: 'بيرنق الكمبروسر تالف',
        titleEn: 'Worn Compressor Bearing',
        explanationAr: 'بيرنق بكرة الكمبروسر متآكل ويحتاج تغيير.',
        explanationEn: 'The compressor pulley bearing is worn and needs replacement.',
        likelihood: 'medium',
      },
    ],
    diagnosticStepsAr: [
      'افتح غطاء المحرك وشغل المكيف لتحديد مصدر الصوت',
      'افحص السير بصرياً للتشققات والتآكل',
      'ارش ماء على السير أثناء التشغيل (إذا توقف الصوت فالسير هو السبب)',
      'أدر بكرة الكمبروسر يدوياً للتحقق من سلاسة الدوران',
    ],
    diagnosticStepsEn: [
      'Open hood and turn AC on to locate noise source',
      'Visually inspect belt for cracks and wear',
      'Spray water on belt while running (if noise stops, belt is the cause)',
      'Hand-spin compressor pulley to check for smooth rotation',
    ],
    costRangeMin: 50,
    costRangeMax: 500,
    relatedSymptomSlugs: ['ac-grinding-noise', 'ac-stopped-working'],
    relatedComponentSlugs: ['ac-belt', 'compressor-bearing'],
    faqs: [
      {
        questionAr: 'صوت صرير عند تشغيل المكيف فقط، ما الحل؟',
        questionEn: 'Squealing only when AC turns on, what is the fix?',
        answerAr: 'غالباً السبب سير المكيف. غيره إذا كان متشققاً، أو اشدّه إذا كان مرتخياً. إذا استمر الصوت فالبيرنق يحتاج فحص.',
        answerEn: 'Usually the AC belt is the cause. Replace it if cracked, or tighten it if loose. If the noise persists, the bearing needs inspection.',
      },
    ],
  },
  {
    slug: 'ac-grinding-noise',
    titleAr: 'صوت احتكاك من مكيف السيارة',
    titleEn: 'Car AC Grinding Noise',
    descriptionAr:
      'صوت احتكاك أو طحن معدني من منطقة الكمبروسر عند تشغيل المكيف. يشير عادة لمشكلة ميكانيكية خطيرة.',
    descriptionEn:
      'A grinding or metal-on-metal sound from the compressor area when AC is on. Usually indicates a serious mechanical problem.',
    keywordsAr: ['صوت احتكاك من المكيف', 'صوت طحن من الكمبروسر', 'صوت معدن من المكيف'],
    keywordsEn: ['ac grinding noise', 'ac metal sound', 'compressor grinding'],
    causes: [
      {
        titleAr: 'بيرنق الكمبروسر تالف بشدة',
        titleEn: 'Severely Worn Compressor Bearing',
        explanationAr: 'البيرنق تآكل بشكل كبير ويسبب احتكاك معدني خطير.',
        explanationEn: 'The bearing is severely worn, causing dangerous metal-on-metal grinding.',
        likelihood: 'high',
      },
      {
        titleAr: 'تلف داخلي في الكمبروسر',
        titleEn: 'Internal Compressor Damage',
        explanationAr: 'أجزاء داخلية في الكمبروسر تكسرت وتسبب صوت طحن.',
        explanationEn: 'Internal compressor parts have broken and are causing grinding sounds.',
        likelihood: 'medium',
      },
    ],
    diagnosticStepsAr: [
      'أوقف تشغيل المكيف فوراً لمنع تلف أكبر',
      'افحص الكمبروسر بصرياً لعلامات التلف',
      'أدر بكرة الكمبروسر يدوياً للتحقق من الاحتكاك',
      'تحقق من وجود برادة معدنية في الفريون',
    ],
    diagnosticStepsEn: [
      'Turn off AC immediately to prevent further damage',
      'Visually inspect compressor for damage signs',
      'Hand-spin compressor pulley to check for grinding',
      'Check for metal shavings in the refrigerant',
    ],
    costRangeMin: 200,
    costRangeMax: 3500,
    relatedSymptomSlugs: ['ac-squealing-noise', 'ac-stopped-working'],
    relatedComponentSlugs: ['compressor-bearing', 'compressor'],
    faqs: [
      {
        questionAr: 'صوت طحن من المكيف، هل أستمر في استخدامه؟',
        questionEn: 'Grinding noise from AC, should I keep using it?',
        answerAr: 'لا، أوقف المكيف فوراً. الاستمرار في تشغيله قد يتلف الكمبروسر بالكامل ويلوث النظام ببرادة معدنية مما يضاعف تكلفة الإصلاح.',
        answerEn: 'No, turn off the AC immediately. Continued use may completely destroy the compressor and contaminate the system with metal debris, doubling repair costs.',
      },
    ],
  },
  {
    slug: 'ac-hissing-noise',
    titleAr: 'صوت هسهسة من مكيف السيارة',
    titleEn: 'Car AC Hissing Noise',
    descriptionAr:
      'صوت هسهسة أو تسريب هواء من نظام التكييف. قد يكون طبيعياً في بعض الحالات أو يشير لتسريب.',
    descriptionEn:
      'A hissing or air-leak sound from the AC system. It may be normal in some cases or indicate a leak.',
    keywordsAr: ['صوت هسهسة من المكيف', 'صوت تسريب هواء من المكيف'],
    keywordsEn: ['ac hissing noise', 'ac hissing sound', 'ac air leak sound'],
    causes: [
      {
        titleAr: 'تسريب فريون',
        titleEn: 'Refrigerant Leak',
        explanationAr: 'تسريب فريون من وصلة أو خرطوم يسبب صوت هسهسة مسموع.',
        explanationEn: 'A refrigerant leak from a fitting or hose creates an audible hissing sound.',
        likelihood: 'medium',
      },
      {
        titleAr: 'صوت طبيعي من صمام التمدد',
        titleEn: 'Normal Expansion Valve Sound',
        explanationAr: 'في بعض السيارات صوت هسهسة خفيف من صمام التمدد طبيعي تماماً.',
        explanationEn: 'In some vehicles, a slight hissing from the expansion valve is completely normal.',
        likelihood: 'medium',
      },
    ],
    diagnosticStepsAr: [
      'حدد مصدر الهسهسة بدقة (داخل المقصورة أو من المحرك)',
      'إذا كان من المحرك، افحص وصلات وخطوط المكيف',
      'استخدم جهاز كشف التسريب',
      'قارن الصوت مع سيارة مشابهة لتحديد إن كان طبيعياً',
    ],
    diagnosticStepsEn: [
      'Pinpoint the hissing source (inside cabin or engine bay)',
      'If from engine bay, inspect AC fittings and lines',
      'Use a leak detector',
      'Compare the sound with a similar vehicle to determine if normal',
    ],
    costRangeMin: 0,
    costRangeMax: 500,
    relatedSymptomSlugs: ['ac-weak-cooling', 'ac-not-cooling'],
    relatedComponentSlugs: ['ac-hoses', 'expansion-valve'],
    faqs: [
      {
        questionAr: 'صوت هسهسة من المكيف، هل هو طبيعي؟',
        questionEn: 'Hissing from AC, is it normal?',
        answerAr: 'قد يكون طبيعياً (صوت صمام التمدد). لكن إذا كان الصوت عالياً أو مصحوباً بضعف تبريد، فغالباً هناك تسريب يحتاج إصلاح.',
        answerEn: 'It may be normal (expansion valve sound). But if it\'s loud or accompanied by weak cooling, there\'s likely a leak that needs repair.',
      },
    ],
  },
  {
    slug: 'ac-burning-smell',
    titleAr: 'رائحة احتراق من مكيف السيارة',
    titleEn: 'Car AC Burning Smell',
    descriptionAr:
      'رائحة احتراق أو بلاستيك أو أسلاك محترقة عند تشغيل المكيف. مشكلة تحتاج فحص فوري.',
    descriptionEn:
      'A burning, plastic, or electrical smell when the AC is on. A problem that needs immediate inspection.',
    keywordsAr: ['رائحة حريق من المكيف', 'رائحة احتراق من المكيف', 'رائحة أسلاك من المكيف'],
    keywordsEn: ['ac burning smell', 'ac electrical smell', 'burning plastic from ac'],
    causes: [
      {
        titleAr: 'سلك كهربائي محترق',
        titleEn: 'Burnt Electrical Wire',
        explanationAr: 'سلك في دائرة المكيف يسخن بسبب حمل زائد أو قصر.',
        explanationEn: 'An AC circuit wire is overheating due to overload or short circuit.',
        likelihood: 'high',
      },
      {
        titleAr: 'احتكاك سير المكيف',
        titleEn: 'AC Belt Friction',
        explanationAr: 'السير ينزلق ويحتك بالبكرات فيتولد حرارة ورائحة احتراق.',
        explanationEn: 'The belt is slipping and rubbing against pulleys, generating heat and burning smell.',
        likelihood: 'medium',
      },
      {
        titleAr: 'موتور المروحة محترق',
        titleEn: 'Burnt Blower Motor',
        explanationAr: 'موتور مروحة المقصورة بدأ يحترق بسبب تآكل داخلي.',
        explanationEn: 'The cabin blower motor is burning out due to internal wear.',
        likelihood: 'medium',
      },
    ],
    diagnosticStepsAr: [
      'أوقف المكيف فوراً عند ملاحظة رائحة الاحتراق',
      'افحص الأسلاك والوصلات بصرياً لعلامات الاحتراق',
      'افحص السير وتحقق من عدم انزلاقه',
      'تحقق من موتور المروحة للحرارة الزائدة',
    ],
    diagnosticStepsEn: [
      'Turn off AC immediately when burning smell is noticed',
      'Visually inspect wires and connectors for burn marks',
      'Check belt for slipping',
      'Check blower motor for excessive heat',
    ],
    costRangeMin: 50,
    costRangeMax: 1000,
    relatedSymptomSlugs: ['ac-fuse-blowing', 'ac-stopped-working', 'ac-squealing-noise'],
    relatedComponentSlugs: ['ac-belt', 'fan-motor', 'ac-fuse'],
    faqs: [
      {
        questionAr: 'رائحة احتراق من المكيف، هل هي خطيرة؟',
        questionEn: 'Burning smell from AC, is it dangerous?',
        answerAr: 'نعم، قد تكون خطيرة. أوقف المكيف فوراً واذهب لفني متخصص. رائحة الاحتراق قد تشير لمشكلة كهربائية قد تسبب حريق إن أُهملت.',
        answerEn: 'Yes, it can be dangerous. Turn off AC immediately and visit a specialist. A burning smell may indicate an electrical problem that could cause a fire if ignored.',
      },
    ],
  },
  {
    slug: 'ac-water-leak',
    titleAr: 'تسريب ماء من مكيف السيارة',
    titleEn: 'Car AC Water Leak',
    descriptionAr:
      'تسريب ماء داخل السيارة من منطقة لوحة القيادة أو من أسفل السيارة عند تشغيل المكيف.',
    descriptionEn:
      'Water leaking inside the car from the dashboard area or under the vehicle when the AC is running.',
    keywordsAr: ['تسريب ماء من المكيف', 'ماء داخل السيارة من المكيف', 'تنقيط ماء المكيف'],
    keywordsEn: ['ac water leak', 'water dripping from ac', 'ac condensation leak'],
    causes: [
      {
        titleAr: 'انسداد أنبوب تصريف التكثيف',
        titleEn: 'Clogged Condensate Drain',
        explanationAr: 'أنبوب تصريف الماء المتكثف مسدود فيتجمع الماء ويتسرب داخل المقصورة.',
        explanationEn: 'The condensate drain tube is clogged, causing water to pool and leak into the cabin.',
        likelihood: 'high',
      },
      {
        titleAr: 'تلف صينية المبخر',
        titleEn: 'Damaged Evaporator Tray',
        explanationAr: 'صينية تجميع الماء تحت المبخر متشققة أو تالفة.',
        explanationEn: 'The water collection tray under the evaporator is cracked or damaged.',
        likelihood: 'low',
      },
    ],
    diagnosticStepsAr: [
      'تحقق من تصريف الماء أسفل السيارة (يجب أن ينقط عند عمل المكيف)',
      'إذا لا ينقط من تحت، فأنبوب التصريف مسدود',
      'نظف أنبوب التصريف بسلك أو هواء مضغوط',
      'افحص المنطقة حول المبخر لعلامات تسريب',
    ],
    diagnosticStepsEn: [
      'Check water dripping under the car (should drip when AC is on)',
      'If no dripping underneath, drain tube is clogged',
      'Clean drain tube with a wire or compressed air',
      'Inspect area around evaporator for leak signs',
    ],
    costRangeMin: 30,
    costRangeMax: 300,
    relatedSymptomSlugs: ['ac-musty-smell', 'ac-bad-smell'],
    relatedComponentSlugs: ['evaporator'],
    faqs: [
      {
        questionAr: 'ماء على أرضية السيارة عند تشغيل المكيف، ما السبب؟',
        questionEn: 'Water on the car floor when AC is on, why?',
        answerAr: 'السبب غالباً انسداد أنبوب تصريف التكثيف. تنظيفه بسيط ورخيص ويحل المشكلة فوراً.',
        answerEn: 'Usually caused by a clogged condensate drain tube. Cleaning it is simple, inexpensive, and solves the problem immediately.',
      },
    ],
  },
  {
    slug: 'ac-lines-freezing',
    titleAr: 'تجمد خطوط مكيف السيارة',
    titleEn: 'Car AC Lines Freezing',
    descriptionAr:
      'تشكل جليد أو صقيع على خطوط وأنابيب مكيف السيارة. مؤشر على مشكلة في تدفق الفريون أو تدفق الهواء.',
    descriptionEn:
      'Ice or frost forming on the car AC lines and pipes. Indicates a problem with refrigerant flow or airflow.',
    keywordsAr: ['تجمد خطوط المكيف', 'ثلج على أنابيب المكيف', 'خطوط المكيف متجمدة'],
    keywordsEn: ['ac lines freezing', 'frost on ac pipes', 'ac icing up'],
    causes: [
      {
        titleAr: 'نقص الفريون',
        titleEn: 'Low Refrigerant',
        explanationAr: 'نقص الفريون يسبب انخفاض مفرط في الضغط مما يؤدي لتجمد الخطوط.',
        explanationEn: 'Low refrigerant causes excessive pressure drop, leading to line freezing.',
        likelihood: 'high',
      },
      {
        titleAr: 'صمام تمدد عالق مفتوح',
        titleEn: 'Expansion Valve Stuck Open',
        explanationAr: 'صمام التمدد عالق في وضع مفتوح فيسمح بتدفق فريون أكثر من اللازم.',
        explanationEn: 'Expansion valve stuck in open position, allowing too much refrigerant flow.',
        likelihood: 'medium',
      },
      {
        titleAr: 'ضعف تدفق الهواء على المبخر',
        titleEn: 'Poor Airflow Over Evaporator',
        explanationAr: 'فلتر مسدود أو مروحة ضعيفة تمنع تدفق هواء كافٍ على المبخر فيتجمد.',
        explanationEn: 'A clogged filter or weak blower prevents sufficient airflow over the evaporator, causing freezing.',
        likelihood: 'medium',
      },
    ],
    diagnosticStepsAr: [
      'أوقف المكيف واترك الخطوط تذوب',
      'افحص مستوى الفريون',
      'غير فلتر المقصورة',
      'افحص صمام التمدد',
      'تحقق من تدفق الهواء عبر المبخر',
    ],
    diagnosticStepsEn: [
      'Turn off AC and let lines defrost',
      'Check refrigerant level',
      'Replace cabin filter',
      'Inspect expansion valve',
      'Verify airflow through evaporator',
    ],
    costRangeMin: 50,
    costRangeMax: 800,
    relatedSymptomSlugs: ['ac-weak-cooling', 'ac-intermittent-cooling', 'ac-weak-airflow'],
    relatedComponentSlugs: ['expansion-valve', 'receiver-dryer', 'cabin-filter'],
    faqs: [
      {
        questionAr: 'خطوط المكيف عليها ثلج، هل المشكلة خطيرة؟',
        questionEn: 'Frost on AC lines, is it serious?',
        answerAr: 'نعم، التجمد يشير لمشكلة في النظام. أوقف المكيف مؤقتاً واطلب فحص. تجاهل المشكلة قد يتلف الكمبروسر.',
        answerEn: 'Yes, freezing indicates a system problem. Turn off AC temporarily and request inspection. Ignoring it can damage the compressor.',
      },
    ],
  },
  {
    slug: 'car-shakes-with-ac',
    titleAr: 'السيارة ترتجف عند تشغيل المكيف',
    titleEn: 'Car Shakes When AC Is On',
    descriptionAr:
      'السيارة ترتجف أو تهتز بشكل ملحوظ عند تشغيل مكيف السيارة، خاصة عند الوقوف أو على السرعات المنخفضة.',
    descriptionEn:
      'The car shakes or vibrates noticeably when the AC is turned on, especially at idle or low speeds.',
    keywordsAr: ['السيارة ترج عند تشغيل المكيف', 'اهتزاز السيارة مع المكيف', 'رجة مع المكيف'],
    keywordsEn: ['car shakes with ac', 'car vibrates when ac on', 'engine shaking with ac'],
    causes: [
      {
        titleAr: 'كمبروسر يحمّل المحرك بزيادة',
        titleEn: 'Compressor Overloading Engine',
        explanationAr: 'الكمبروسر يسبب حمل إضافي كبير على محرك ضعيف أو له مشكلة أخرى.',
        explanationEn: 'The compressor puts extra load on an engine that is weak or has another issue.',
        likelihood: 'medium',
      },
      {
        titleAr: 'قاعدة محرك (ماونت) تالفة',
        titleEn: 'Bad Engine Mount',
        explanationAr: 'قاعدة المحرك التالفة تسمح بنقل اهتزازات الكمبروسر للسيارة بشكل مبالغ.',
        explanationEn: 'A bad engine mount allows compressor vibrations to transfer excessively to the vehicle.',
        likelihood: 'medium',
      },
      {
        titleAr: 'RPM منخفض عند الوقوف',
        titleEn: 'Low Idle RPM',
        explanationAr: 'دورات المحرك منخفضة عند الوقوف ولا ترتفع تلقائياً عند تشغيل المكيف.',
        explanationEn: 'Engine idle RPM is low and does not increase automatically when AC is engaged.',
        likelihood: 'medium',
      },
    ],
    diagnosticStepsAr: [
      'راقب دورات المحرك (RPM) عند تشغيل وإيقاف المكيف',
      'افحص قواعد المحرك (الماونت) بصرياً',
      'تأكد من أن المحرك يعمل بسلاسة بدون المكيف',
      'افحص بوجيهات وفلتر الهواء',
    ],
    diagnosticStepsEn: [
      'Monitor engine RPM when toggling AC on/off',
      'Visually inspect engine mounts',
      'Verify engine runs smoothly without AC',
      'Check spark plugs and air filter',
    ],
    costRangeMin: 100,
    costRangeMax: 1500,
    relatedSymptomSlugs: ['ac-not-cooling'],
    relatedComponentSlugs: ['compressor'],
    faqs: [
      {
        questionAr: 'سيارتي ترج لما أشغل المكيف، هل المشكلة من المكيف؟',
        questionEn: 'Car shakes when I turn on AC, is the AC the problem?',
        answerAr: 'ليس بالضرورة. قد تكون المشكلة في المحرك نفسه (قواعد، بوجيهات، خنق) وتظهر فقط مع الحمل الإضافي للمكيف. يحتاج تشخيص شامل.',
        answerEn: 'Not necessarily. The issue may be with the engine itself (mounts, spark plugs, throttle) and only shows up with the extra AC load. Comprehensive diagnosis is needed.',
      },
    ],
  },
];

/**
 * Get a symptom by slug.
 */
export function getSymptomBySlug(slug: string): Symptom | undefined {
  return symptoms.find((s) => s.slug === slug);
}

/**
 * Get all symptom slugs (for static path generation).
 */
export function getAllSymptomSlugs(): string[] {
  return symptoms.map((s) => s.slug);
}
