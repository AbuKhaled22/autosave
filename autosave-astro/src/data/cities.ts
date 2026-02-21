/**
 * City data for programmatic SEO pages.
 * Each city generates a bilingual landing page at /services/[slug] and /en/services/[slug].
 * Riyadh also generates neighborhood sub-pages.
 */

export interface CityNeighborhood {
  slug: string;
  nameAr: string;
  nameEn: string;
}

export interface City {
  slug: string;
  nameAr: string;
  nameEn: string;
  regionAr: string;
  regionEn: string;
  population: string;
  climateNoteAr: string;
  climateNoteEn: string;
  neighborhoods: CityNeighborhood[];
  introAr: string;
  introEn: string;
  faqs: {
    questionAr: string;
    questionEn: string;
    answerAr: string;
    answerEn: string;
  }[];
}

export const cities: City[] = [
  {
    slug: 'riyadh',
    nameAr: 'الرياض',
    nameEn: 'Riyadh',
    regionAr: 'منطقة الرياض',
    regionEn: 'Riyadh Region',
    population: '7,600,000',
    climateNoteAr:
      'تتميز الرياض بمناخ صحراوي حار جداً صيفاً حيث تتجاوز درجات الحرارة 50 درجة مئوية، مما يجعل مكيف السيارة ضرورة لا غنى عنها.',
    climateNoteEn:
      'Riyadh features an extremely hot desert climate with summer temperatures exceeding 50C, making car AC an absolute necessity.',
    neighborhoods: [
      { slug: 'north', nameAr: 'شمال الرياض', nameEn: 'North Riyadh' },
      { slug: 'south', nameAr: 'جنوب الرياض', nameEn: 'South Riyadh' },
      { slug: 'east', nameAr: 'شرق الرياض', nameEn: 'East Riyadh' },
      { slug: 'west', nameAr: 'غرب الرياض', nameEn: 'West Riyadh' },
      { slug: 'al-naseem', nameAr: 'النسيم', nameEn: 'Al Naseem' },
      { slug: 'al-malaz', nameAr: 'الملز', nameEn: 'Al Malaz' },
      { slug: 'al-olaya', nameAr: 'العليا', nameEn: 'Al Olaya' },
      { slug: 'al-sulimaniyah', nameAr: 'السليمانية', nameEn: 'Al Sulimaniyah' },
      { slug: 'al-murabba', nameAr: 'المربع', nameEn: 'Al Murabba' },
      { slug: 'al-shifa', nameAr: 'الشفاء', nameEn: 'Al Shifa' },
      { slug: 'al-rawdah', nameAr: 'الروضة', nameEn: 'Al Rawdah' },
      { slug: 'al-khaleej', nameAr: 'الخليج', nameEn: 'Al Khaleej' },
    ],
    introAr:
      'اوتو سيف تقدم خدمات إصلاح وصيانة مكيف السيارة في الرياض بأعلى جودة وأفضل الأسعار. فريقنا المتخصص جاهز لخدمتك في جميع أحياء الرياض مع ضمان على جميع الخدمات.',
    introEn:
      'Auto Save offers top-quality car AC repair and maintenance services in Riyadh at the best prices. Our specialized team is ready to serve you across all Riyadh neighborhoods with a warranty on all services.',
    faqs: [
      {
        questionAr: 'أين أجد أفضل ورشة مكيف سيارات في الرياض؟',
        questionEn: 'Where can I find the best car AC repair shop in Riyadh?',
        answerAr:
          'اوتو سيف من أفضل مراكز خدمة مكيف السيارات في الرياض. نقدم خدماتنا في جميع أحياء الرياض مع ضمان على القطع والعمل.',
        answerEn:
          'Auto Save is one of the best car AC service centers in Riyadh. We offer our services across all Riyadh neighborhoods with warranty on parts and labor.',
      },
      {
        questionAr: 'كم تكلفة إصلاح مكيف السيارة في الرياض؟',
        questionEn: 'How much does car AC repair cost in Riyadh?',
        answerAr:
          'تختلف التكلفة حسب نوع الخدمة: تعبئة الفريون من 150 ريال، تغيير الكمبروسر من 800 ريال، والتشخيص من 80 ريال. نقدم أفضل الأسعار في الرياض.',
        answerEn:
          'Costs vary by service: freon recharge from 150 SAR, compressor replacement from 800 SAR, and diagnostics from 80 SAR. We offer the best prices in Riyadh.',
      },
      {
        questionAr: 'هل توفرون خدمة مكيف السيارة المتنقلة في الرياض؟',
        questionEn: 'Do you offer mobile car AC service in Riyadh?',
        answerAr:
          'نعم، نوفر خدمة الصيانة المتنقلة في جميع أحياء الرياض. يصلك الفني إلى موقعك لتشخيص وإصلاح مكيف سيارتك.',
        answerEn:
          'Yes, we offer mobile maintenance service across all Riyadh neighborhoods. A technician comes to your location to diagnose and repair your car AC.',
      },
    ],
  },
  {
    slug: 'jeddah',
    nameAr: 'جدة',
    nameEn: 'Jeddah',
    regionAr: 'منطقة مكة المكرمة',
    regionEn: 'Makkah Region',
    population: '4,700,000',
    climateNoteAr:
      'تتميز جدة بمناخ رطب وحار مع درجات حرارة مرتفعة طوال العام، مما يزيد الضغط على مكيف السيارة ويتطلب صيانة دورية.',
    climateNoteEn:
      'Jeddah features a hot and humid climate with high temperatures year-round, putting extra strain on car AC systems and requiring regular maintenance.',
    neighborhoods: [],
    introAr:
      'خدمات إصلاح وصيانة مكيف السيارة في جدة من اوتو سيف. نتعامل مع جميع أنواع السيارات ونقدم حلول تبريد فعالة تناسب مناخ جدة الرطب والحار.',
    introEn:
      'Car AC repair and maintenance services in Jeddah by Auto Save. We handle all vehicle types and provide effective cooling solutions suited to Jeddah\'s hot and humid climate.',
    faqs: [
      {
        questionAr: 'لماذا يضعف مكيف السيارة بسرعة في جدة؟',
        questionEn: 'Why does car AC weaken quickly in Jeddah?',
        answerAr:
          'الرطوبة العالية في جدة تزيد الحمل على نظام التكييف وتسرع تآكل المكونات. ننصح بالفحص الدوري كل 6 أشهر.',
        answerEn:
          'High humidity in Jeddah increases the load on the AC system and accelerates component wear. We recommend inspection every 6 months.',
      },
      {
        questionAr: 'كم سعر تعبئة فريون المكيف في جدة؟',
        questionEn: 'How much does AC freon recharge cost in Jeddah?',
        answerAr:
          'تتراوح تكلفة تعبئة الفريون في جدة بين 150 و 350 ريال سعودي حسب نوع السيارة ونوع الفريون المستخدم.',
        answerEn:
          'Freon recharge costs in Jeddah range from 150 to 350 SAR depending on the vehicle type and refrigerant used.',
      },
    ],
  },
  {
    slug: 'dammam',
    nameAr: 'الدمام',
    nameEn: 'Dammam',
    regionAr: 'المنطقة الشرقية',
    regionEn: 'Eastern Province',
    population: '1,200,000',
    climateNoteAr:
      'تتميز الدمام بمناخ حار ورطب صيفاً بسبب قربها من الخليج العربي، مما يتطلب أداء مثالي من نظام تكييف السيارة.',
    climateNoteEn:
      'Dammam has a hot and humid summer climate due to its proximity to the Arabian Gulf, demanding optimal car AC performance.',
    neighborhoods: [],
    introAr:
      'اوتو سيف تقدم خدمات صيانة وإصلاح مكيف السيارة في الدمام والمنطقة الشرقية. فريقنا متخصص في التعامل مع تحديات المناخ الساحلي الرطب.',
    introEn:
      'Auto Save provides car AC maintenance and repair services in Dammam and the Eastern Province. Our team specializes in handling the challenges of the humid coastal climate.',
    faqs: [
      {
        questionAr: 'هل تخدمون الخبر والظهران أيضاً؟',
        questionEn: 'Do you also serve Khobar and Dhahran?',
        answerAr:
          'نعم، نقدم خدماتنا في الدمام والخبر والظهران وجميع مدن المنطقة الشرقية.',
        answerEn:
          'Yes, we provide services in Dammam, Khobar, Dhahran, and all cities in the Eastern Province.',
      },
    ],
  },
  {
    slug: 'khobar',
    nameAr: 'الخبر',
    nameEn: 'Khobar',
    regionAr: 'المنطقة الشرقية',
    regionEn: 'Eastern Province',
    population: '600,000',
    climateNoteAr:
      'الخبر تتميز بمناخ ساحلي رطب وحار، والرطوبة العالية تؤثر على كفاءة مكيف السيارة وتتطلب صيانة منتظمة.',
    climateNoteEn:
      'Khobar features a hot and humid coastal climate, and the high humidity affects AC efficiency, requiring regular maintenance.',
    neighborhoods: [],
    introAr:
      'خدمات إصلاح مكيف السيارة في الخبر من اوتو سيف. نقدم حلول تبريد متكاملة تناسب المناخ الساحلي للمنطقة الشرقية.',
    introEn:
      'Car AC repair services in Khobar by Auto Save. We offer comprehensive cooling solutions suited to the Eastern Province\'s coastal climate.',
    faqs: [
      {
        questionAr: 'ما أهمية صيانة مكيف السيارة في الخبر؟',
        questionEn: 'Why is car AC maintenance important in Khobar?',
        answerAr:
          'الرطوبة العالية في الخبر تسبب تراكم الفطريات والبكتيريا في نظام التكييف، مما يجعل التنظيف والصيانة الدورية ضرورية لصحتك وراحتك.',
        answerEn:
          'High humidity in Khobar causes mold and bacteria buildup in the AC system, making regular cleaning and maintenance essential for your health and comfort.',
      },
    ],
  },
  {
    slug: 'makkah',
    nameAr: 'مكة المكرمة',
    nameEn: 'Makkah',
    regionAr: 'منطقة مكة المكرمة',
    regionEn: 'Makkah Region',
    population: '2,000,000',
    climateNoteAr:
      'مكة المكرمة تتميز بمناخ صحراوي حار جداً خاصة في فصل الصيف ومواسم الحج والعمرة، مما يتطلب نظام تكييف سيارة يعمل بكفاءة عالية.',
    climateNoteEn:
      'Makkah features an extremely hot desert climate especially during summer and Hajj/Umrah seasons, requiring a highly efficient car AC system.',
    neighborhoods: [],
    introAr:
      'اوتو سيف تقدم خدمات إصلاح مكيف السيارة في مكة المكرمة. نضمن أن سيارتك جاهزة لمواجهة حرارة مكة الشديدة بأعلى كفاءة تبريد.',
    introEn:
      'Auto Save offers car AC repair services in Makkah. We ensure your vehicle is ready to handle Makkah\'s extreme heat with maximum cooling efficiency.',
    faqs: [
      {
        questionAr: 'هل تقدمون خدمة صيانة مكيف السيارة قبل موسم الحج؟',
        questionEn: 'Do you offer car AC service before Hajj season?',
        answerAr:
          'نعم، ننصح بفحص وصيانة مكيف السيارة قبل موسم الحج والعمرة لتجنب أي أعطال أثناء التنقل في الحرارة الشديدة.',
        answerEn:
          'Yes, we recommend AC inspection and maintenance before Hajj and Umrah seasons to avoid breakdowns during travel in extreme heat.',
      },
    ],
  },
  {
    slug: 'madinah',
    nameAr: 'المدينة المنورة',
    nameEn: 'Madinah',
    regionAr: 'منطقة المدينة المنورة',
    regionEn: 'Madinah Region',
    population: '1,500,000',
    climateNoteAr:
      'المدينة المنورة تتميز بمناخ صحراوي حار صيفاً ومعتدل شتاءً. الحرارة الشديدة صيفاً تتطلب مكيف سيارة يعمل بكامل طاقته.',
    climateNoteEn:
      'Madinah has a hot desert summer and mild winter climate. The intense summer heat requires a fully functional car AC system.',
    neighborhoods: [],
    introAr:
      'خدمات صيانة وإصلاح مكيف السيارة في المدينة المنورة من اوتو سيف. نوفر جميع خدمات التكييف بأسعار منافسة وجودة عالية.',
    introEn:
      'Car AC maintenance and repair services in Madinah by Auto Save. We provide all AC services at competitive prices with high quality.',
    faqs: [
      {
        questionAr: 'كم تستغرق خدمة تعبئة الفريون في المدينة؟',
        questionEn: 'How long does a freon recharge take in Madinah?',
        answerAr:
          'تستغرق خدمة تعبئة الفريون حوالي 30-45 دقيقة. يمكنك حجز موعد مسبق لتقليل وقت الانتظار.',
        answerEn:
          'A freon recharge service takes about 30-45 minutes. You can book an appointment in advance to minimize wait time.',
      },
    ],
  },
  {
    slug: 'buraidah',
    nameAr: 'بريدة',
    nameEn: 'Buraidah',
    regionAr: 'منطقة القصيم',
    regionEn: 'Qassim Region',
    population: '600,000',
    climateNoteAr:
      'بريدة تتميز بمناخ صحراوي قاري مع صيف شديد الحرارة وشتاء بارد نسبياً. درجات الحرارة العالية صيفاً تجعل صيانة المكيف أولوية.',
    climateNoteEn:
      'Buraidah has a continental desert climate with extremely hot summers and relatively cold winters. High summer temperatures make AC maintenance a priority.',
    neighborhoods: [],
    introAr:
      'اوتو سيف تقدم خدمات مكيف السيارة في بريدة ومنطقة القصيم. نتعامل مع جميع أنواع السيارات بخبرة واحترافية.',
    introEn:
      'Auto Save offers car AC services in Buraidah and the Qassim region. We handle all vehicle types with expertise and professionalism.',
    faqs: [
      {
        questionAr: 'هل تغطون جميع مدن القصيم؟',
        questionEn: 'Do you cover all cities in Qassim?',
        answerAr:
          'نعم، نقدم خدماتنا في بريدة وعنيزة والرس وجميع مدن منطقة القصيم.',
        answerEn:
          'Yes, we provide services in Buraidah, Unaizah, Al Rass, and all cities in the Qassim region.',
      },
    ],
  },
  {
    slug: 'abha',
    nameAr: 'أبها',
    nameEn: 'Abha',
    regionAr: 'منطقة عسير',
    regionEn: 'Asir Region',
    population: '400,000',
    climateNoteAr:
      'أبها تتميز بمناخ معتدل نسبياً مقارنة بباقي المملكة بفضل ارتفاعها، لكن المكيف يظل مهماً خلال أشهر الصيف.',
    climateNoteEn:
      'Abha has a relatively moderate climate compared to other Saudi cities due to its elevation, but AC remains important during summer months.',
    neighborhoods: [],
    introAr:
      'خدمات إصلاح مكيف السيارة في أبها من اوتو سيف. نقدم صيانة متخصصة تناسب جميع أنواع السيارات في منطقة عسير.',
    introEn:
      'Car AC repair services in Abha by Auto Save. We provide specialized maintenance for all vehicle types in the Asir region.',
    faqs: [
      {
        questionAr: 'هل يحتاج مكيف السيارة صيانة في أبها رغم المناخ المعتدل؟',
        questionEn: 'Does car AC need maintenance in Abha despite the moderate climate?',
        answerAr:
          'نعم، حتى في المناخ المعتدل يحتاج مكيف السيارة لصيانة دورية للحفاظ على كفاءته ومنع تراكم البكتيريا والأعطال المستقبلية.',
        answerEn:
          'Yes, even in moderate climates, car AC needs regular maintenance to maintain efficiency and prevent bacteria buildup and future failures.',
      },
    ],
  },
  {
    slug: 'tabuk',
    nameAr: 'تبوك',
    nameEn: 'Tabuk',
    regionAr: 'منطقة تبوك',
    regionEn: 'Tabuk Region',
    population: '600,000',
    climateNoteAr:
      'تبوك تتميز بمناخ صحراوي حار صيفاً وبارد شتاءً مع تفاوت كبير في درجات الحرارة، مما يتطلب نظام تكييف موثوق.',
    climateNoteEn:
      'Tabuk has a hot desert summer and cold winter climate with significant temperature variation, requiring a reliable AC system.',
    neighborhoods: [],
    introAr:
      'اوتو سيف تقدم خدمات مكيف السيارة في تبوك. صيانة وإصلاح احترافي مع ضمان على جميع الخدمات.',
    introEn:
      'Auto Save provides car AC services in Tabuk. Professional maintenance and repair with warranty on all services.',
    faqs: [
      {
        questionAr: 'هل تتوفر خدمات مكيف السيارة في تبوك؟',
        questionEn: 'Are car AC services available in Tabuk?',
        answerAr:
          'نعم، نقدم جميع خدمات مكيف السيارة في تبوك من تعبئة الفريون إلى تغيير الكمبروسر والتشخيص الشامل.',
        answerEn:
          'Yes, we offer all car AC services in Tabuk from freon recharge to compressor replacement and comprehensive diagnostics.',
      },
    ],
  },
  {
    slug: 'taif',
    nameAr: 'الطائف',
    nameEn: 'Taif',
    regionAr: 'منطقة مكة المكرمة',
    regionEn: 'Makkah Region',
    population: '700,000',
    climateNoteAr:
      'الطائف تتميز بمناخ معتدل صيفاً بفضل ارتفاعها الجبلي، لكنها تشهد درجات حرارة مرتفعة في بعض الأشهر تستدعي صيانة المكيف.',
    climateNoteEn:
      'Taif enjoys a moderate summer climate due to its mountain elevation, but some months see high temperatures that require AC maintenance.',
    neighborhoods: [],
    introAr:
      'خدمات مكيف السيارة في الطائف من اوتو سيف. نقدم صيانة شاملة وإصلاح متخصص بأسعار تنافسية.',
    introEn:
      'Car AC services in Taif by Auto Save. We offer comprehensive maintenance and specialized repair at competitive prices.',
    faqs: [
      {
        questionAr: 'هل الطائف تحتاج لصيانة مكيف سيارة مثل المدن الأخرى؟',
        questionEn: 'Does Taif need car AC maintenance like other cities?',
        answerAr:
          'رغم أن مناخ الطائف أخف، إلا أن السيارات تتنقل لمكة وجدة حيث الحرارة شديدة. لذا صيانة المكيف مهمة لسكان الطائف.',
        answerEn:
          'Although Taif\'s climate is milder, vehicles travel to Makkah and Jeddah where heat is extreme. So AC maintenance is important for Taif residents.',
      },
    ],
  },
  {
    slug: 'hail',
    nameAr: 'حائل',
    nameEn: 'Hail',
    regionAr: 'منطقة حائل',
    regionEn: 'Hail Region',
    population: '400,000',
    climateNoteAr:
      'حائل تتميز بمناخ قاري مع صيف حار وشتاء بارد. التفاوت الكبير في درجات الحرارة يتطلب نظام تكييف يعمل بكفاءة.',
    climateNoteEn:
      'Hail has a continental climate with hot summers and cold winters. The significant temperature variation requires an efficient AC system.',
    neighborhoods: [],
    introAr:
      'اوتو سيف توفر خدمات مكيف السيارة في حائل. فريقنا جاهز لتقديم أفضل خدمات الصيانة والإصلاح.',
    introEn:
      'Auto Save provides car AC services in Hail. Our team is ready to deliver the best maintenance and repair services.',
    faqs: [
      {
        questionAr: 'هل تخدمون منطقة حائل بالكامل؟',
        questionEn: 'Do you serve the entire Hail region?',
        answerAr:
          'نعم، نقدم خدماتنا في حائل وجميع المدن والقرى المحيطة في منطقة حائل.',
        answerEn:
          'Yes, we provide services in Hail city and all surrounding towns and villages in the Hail region.',
      },
    ],
  },
  {
    slug: 'al-ahsa',
    nameAr: 'الأحساء',
    nameEn: 'Al Ahsa',
    regionAr: 'المنطقة الشرقية',
    regionEn: 'Eastern Province',
    population: '1,200,000',
    climateNoteAr:
      'الأحساء من أكثر المناطق حرارة في المملكة صيفاً مع رطوبة مرتفعة، مما يجعل صيانة مكيف السيارة أمراً حيوياً.',
    climateNoteEn:
      'Al Ahsa is one of the hottest regions in Saudi Arabia during summer with high humidity, making car AC maintenance vital.',
    neighborhoods: [],
    introAr:
      'خدمات مكيف السيارة في الأحساء من اوتو سيف. نقدم حلول تبريد متكاملة تواجه حرارة الأحساء الشديدة.',
    introEn:
      'Car AC services in Al Ahsa by Auto Save. We provide comprehensive cooling solutions to combat Al Ahsa\'s extreme heat.',
    faqs: [
      {
        questionAr: 'لماذا يتعطل مكيف السيارة بسرعة في الأحساء؟',
        questionEn: 'Why does car AC fail quickly in Al Ahsa?',
        answerAr:
          'الحرارة والرطوبة الشديدة في الأحساء تضع ضغطاً كبيراً على نظام التكييف. الصيانة الدورية كل 4-6 أشهر تحمي المكيف من الأعطال.',
        answerEn:
          'Extreme heat and humidity in Al Ahsa put significant strain on the AC system. Regular maintenance every 4-6 months protects the AC from failures.',
      },
    ],
  },
  {
    slug: 'najran',
    nameAr: 'نجران',
    nameEn: 'Najran',
    regionAr: 'منطقة نجران',
    regionEn: 'Najran Region',
    population: '350,000',
    climateNoteAr:
      'نجران تتميز بمناخ صحراوي حار مع صيف طويل وشتاء دافئ. الحاجة لمكيف سيارة فعال مستمرة طوال العام تقريباً.',
    climateNoteEn:
      'Najran has a hot desert climate with long summers and warm winters. The need for an effective car AC is nearly year-round.',
    neighborhoods: [],
    introAr:
      'اوتو سيف تخدم منطقة نجران بجميع خدمات مكيف السيارة. صيانة احترافية بأسعار مناسبة.',
    introEn:
      'Auto Save serves the Najran region with all car AC services. Professional maintenance at affordable prices.',
    faqs: [
      {
        questionAr: 'هل تتوفر قطع غيار مكيف السيارة في نجران؟',
        questionEn: 'Are car AC spare parts available in Najran?',
        answerAr:
          'نعم، نوفر جميع قطع غيار مكيف السيارة الأصلية والبديلة في نجران مع ضمان على الجودة.',
        answerEn:
          'Yes, we provide all OEM and aftermarket car AC spare parts in Najran with quality guarantee.',
      },
    ],
  },
  {
    slug: 'jubail',
    nameAr: 'الجبيل',
    nameEn: 'Jubail',
    regionAr: 'المنطقة الشرقية',
    regionEn: 'Eastern Province',
    population: '400,000',
    climateNoteAr:
      'الجبيل مدينة صناعية ساحلية تتميز بمناخ حار ورطب جداً صيفاً بسبب موقعها على الخليج العربي.',
    climateNoteEn:
      'Jubail is a coastal industrial city with a very hot and humid summer climate due to its location on the Arabian Gulf.',
    neighborhoods: [],
    introAr:
      'خدمات مكيف السيارة في الجبيل من اوتو سيف. نقدم صيانة متخصصة تناسب بيئة الجبيل الصناعية والساحلية.',
    introEn:
      'Car AC services in Jubail by Auto Save. We offer specialized maintenance suited to Jubail\'s industrial and coastal environment.',
    faqs: [
      {
        questionAr: 'هل البيئة الصناعية تؤثر على مكيف السيارة في الجبيل؟',
        questionEn: 'Does the industrial environment affect car AC in Jubail?',
        answerAr:
          'نعم، الأملاح والرطوبة والملوثات الصناعية تسرع تآكل مكونات المكيف. ننصح بالفحص الدوري وتنظيف المكثف بانتظام.',
        answerEn:
          'Yes, salts, humidity, and industrial pollutants accelerate AC component corrosion. We recommend regular inspection and condenser cleaning.',
      },
    ],
  },
  {
    slug: 'yanbu',
    nameAr: 'ينبع',
    nameEn: 'Yanbu',
    regionAr: 'منطقة المدينة المنورة',
    regionEn: 'Madinah Region',
    population: '300,000',
    climateNoteAr:
      'ينبع مدينة ساحلية على البحر الأحمر تتميز بمناخ حار ورطب صيفاً ومعتدل شتاءً.',
    climateNoteEn:
      'Yanbu is a coastal city on the Red Sea with a hot and humid summer and moderate winter climate.',
    neighborhoods: [],
    introAr:
      'اوتو سيف تقدم خدمات مكيف السيارة في ينبع. حلول تبريد احترافية لمواجهة مناخ ينبع الساحلي.',
    introEn:
      'Auto Save provides car AC services in Yanbu. Professional cooling solutions to handle Yanbu\'s coastal climate.',
    faqs: [
      {
        questionAr: 'ما أكثر أعطال المكيف شيوعاً في ينبع؟',
        questionEn: 'What are the most common AC problems in Yanbu?',
        answerAr:
          'بسبب الرطوبة العالية، أكثر الأعطال شيوعاً هي تسريب الفريون وتآكل المكثف وتراكم الفطريات في المبخر.',
        answerEn:
          'Due to high humidity, the most common issues are freon leaks, condenser corrosion, and mold buildup in the evaporator.',
      },
    ],
  },
  {
    slug: 'khamis-mushait',
    nameAr: 'خميس مشيط',
    nameEn: 'Khamis Mushait',
    regionAr: 'منطقة عسير',
    regionEn: 'Asir Region',
    population: '500,000',
    climateNoteAr:
      'خميس مشيط تقع على ارتفاع يمنحها مناخاً معتدلاً نسبياً، لكن قربها من المناطق الحارة يتطلب مكيف سيارة فعال.',
    climateNoteEn:
      'Khamis Mushait sits at an elevation that gives it a relatively moderate climate, but its proximity to hot areas requires an effective car AC.',
    neighborhoods: [],
    introAr:
      'خدمات مكيف السيارة في خميس مشيط من اوتو سيف. صيانة وإصلاح شامل لجميع أنواع السيارات في منطقة عسير.',
    introEn:
      'Car AC services in Khamis Mushait by Auto Save. Comprehensive maintenance and repair for all vehicle types in the Asir region.',
    faqs: [
      {
        questionAr: 'هل تخدمون أبها وخميس مشيط معاً؟',
        questionEn: 'Do you serve both Abha and Khamis Mushait?',
        answerAr:
          'نعم، نقدم خدماتنا في أبها وخميس مشيط وجميع مدن منطقة عسير.',
        answerEn:
          'Yes, we serve Abha, Khamis Mushait, and all cities in the Asir region.',
      },
    ],
  },
];

/**
 * Get a city by slug.
 */
export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

/**
 * Get all city slugs (for static path generation).
 */
export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}

/**
 * Get the top N cities (for cross-dimensional pages).
 */
export function getTopCities(count: number = 5): City[] {
  return cities.slice(0, count);
}
