/**
 * Academy catalog — shared metadata for all courses and sessions.
 * Used by layout.js to render navigation, headers, and course pages.
 */
window.ACADEMY = {
  name: "مرجع علوم الويب",
  instructor: "محمد أسامة بيطار",
  instructorTitle: "مهندس معلوماتية · مدرب علوم ويب",
  year: "2026",
  courses: {
    web: {
      id: "web",
      slug: "web",
      pathPrefix: "",
      title: "أساسيات الويب",
      subtitle: "الكورس الأول",
      level: "مبتدئ",
      language: "العربية",
      hours: 40,
      sessionCount: 20,
      sessionMinutes: 120,
      registration: "التسجيل مفتوح",
      summary: "ابدأ رحلتك في تطوير الويب من الصفر، وتعلّم كيف تُبنى مواقع الإنترنت باستخدام HTML وCSS وJavaScript، ثم طبّق مهاراتك في مشروع ويب نهائي متكامل خلال 40 ساعة تدريبية.",
      promo: "ابدأ رحلتك في تطوير الويب من الصفر، وتعلّم كيف تُبنى مواقع الإنترنت باستخدام HTML وCSS وJavaScript، ثم طبّق مهاراتك في مشروع ويب نهائي متكامل خلال 40 ساعة تدريبية.",
      promoEn: "Start your web development journey from scratch. Learn how modern websites are built using HTML, CSS, and JavaScript, then apply your skills by developing a complete final web project throughout 40 hours of practical training.",
      accent: "gold",
      about: "ابدأ رحلتك في تطوير الويب من الصفر، وتعلّم كيف تُبنى مواقع الإنترنت باستخدام HTML وCSS وJavaScript، ثم طبّق مهاراتك في مشروع ويب نهائي متكامل خلال 40 ساعة تدريبية.",
      contentIncludes: [
        "شرح المفاهيم الأساسية",
        "أمثلة برمجية عملية",
        "تطبيقات مباشرة أثناء الجلسات",
        "تمارين تدريبية",
        "مهام عملية",
        "أكواد وأمثلة تعليمية",
        "مشروع نهائي متكامل"
      ],
      objectives: [
        "تعريف الطالب بأساسيات تطوير الويب وكيفية عمل مواقع الإنترنت",
        "بناء أساس قوي في HTML وCSS وJavaScript",
        "تعليم الطالب كيفية إنشاء صفحات ويب من الصفر",
        "تنمية التفكير البرمجي والمنطقي لدى الطالب",
        "فهم العلاقة بين HTML وCSS وJavaScript",
        "تعليم الطالب كيفية تنظيم وكتابة الكود بطريقة صحيحة",
        "تدريب الطالب على تحويل الأفكار والتصاميم إلى صفحات ويب حقيقية",
        "تطبيق المفاهيم من خلال تمارين ومشاريع عملية",
        "تأهيل الطالب للانتقال لاحقاً إلى تقنيات تطوير الويب الأكثر تقدماً",
        "تنفيذ مشروع نهائي يدمج المهارات التي تم تعلمها خلال الدورة"
      ],
      audience: [
        "المبتدئون الراغبون في دخول مجال تطوير الويب",
        "الأشخاص الذين لا يمتلكون خبرة سابقة في البرمجة",
        "طلاب المدارس والجامعات المهتمون بالبرمجة والتكنولوجيا",
        "الراغبون في تعلم HTML وCSS وJavaScript من الصفر",
        "الأشخاص الراغبون في إنشاء صفحات ومواقع ويب خاصة بهم",
        "المصممون الراغبون في فهم كيفية تحويل التصاميم إلى صفحات ويب",
        "الراغبون في دخول مجال Front-End Development",
        "الأشخاص الذين يريدون بناء أساس قوي قبل تعلم React أو تقنيات Front-End المتقدمة"
      ],
      requirements: [
        "لا يشترط وجود خبرة سابقة في البرمجة أو تطوير الويب",
        "معرفة أساسية باستخدام الحاسوب",
        "توفر جهاز حاسوب شخصي للتطبيق العملي",
        "القدرة على استخدام محرر أكواد مثل Visual Studio Code",
        "الالتزام بالحضور والتطبيق العملي",
        "تنفيذ التمارين والمهام المطلوبة خلال الدورة",
        "الرغبة في تعلم البرمجة وتطوير مواقع الويب"
      ],
      phases: [
        { id: "html", title: "HTML", hours: 12, sessions: ["01", "02", "03", "04", "17", "18"] },
        { id: "css", title: "CSS", hours: 12, sessions: ["05", "06", "07", "08", "19", "20"] },
        { id: "js", title: "JavaScript", hours: 12, sessions: ["09", "10", "11", "12", "13", "14"] },
        { id: "project", title: "المشروع النهائي", hours: 4, sessions: ["15", "16"] }
      ],
      sessions: {
        "01": { title: "مقدمة الويب وهيكل HTML", short: "مفهوم الويب، المتصفح، والفرق بين Front-End وBack-End", phase: "HTML", duration: "ساعتان", project: false },
        "02": { title: "النصوص والروابط والصور", short: "العناوين، الفقرات، الروابط، الصور، والقوائم", phase: "HTML", duration: "ساعتان", project: false },
        "03": { title: "الجداول والنماذج", short: "بناء جداول ونماذج إدخال بيانات", phase: "HTML", duration: "ساعتان", project: false },
        "04": { title: "مشروع HTML: صفحة شخصية", short: "بناء Portfolio كامل بـ HTML فقط", phase: "HTML", duration: "ساعتان", project: true },
        "05": { title: "مقدمة CSS والألوان", short: "المحددات، الألوان، الخطوط، والخلفيات", phase: "CSS", duration: "ساعتان", project: false },
        "06": { title: "Box Model والمسافات", short: "المسافات، الأبعاد، الحدود، وBox Model", phase: "CSS", duration: "ساعتان", project: false },
        "07": { title: "Flexbox والتخطيط", short: "ترتيب العناصر وتوزيعها بـ Flexbox", phase: "CSS", duration: "ساعتان", project: false },
        "08": { title: "مشروع CSS: موقع مصمّم", short: "تطبيق تصميم كامل على صفحة Portfolio", phase: "CSS", duration: "ساعتان", project: true },
        "09": { title: "المتغيرات وأنواع البيانات", short: "Variables وData Types والعمليات الحسابية والمنطقية", phase: "JavaScript", duration: "ساعتان", project: false },
        "10": { title: "الشروط if و else", short: "Conditional Statements واتخاذ القرارات", phase: "JavaScript", duration: "ساعتان", project: false },
        "11": { title: "الحلقات والتوابع", short: "Loops وFunctions من الصفر", phase: "JavaScript", duration: "ساعتان", project: false },
        "12": { title: "المصفوفات والأغراض", short: "Arrays وObjects بصورة أساسية", phase: "JavaScript", duration: "ساعتان", project: false },
        "13": { title: "Arrow و filter و map", short: "التوابع السهمية وتصفية البيانات", phase: "JavaScript", duration: "ساعتان", project: false },
        "14": { title: "DOM والأحداث", short: "التحكم بعناصر الصفحة وEvents مثل النقر والإدخال", phase: "JavaScript", duration: "ساعتان", project: false },
        "15": { title: "المشروع النهائي — البناء", short: "هيكل HTML وتصميم CSS للمشروع المتكامل", phase: "المشروع النهائي", duration: "ساعتان", project: true },
        "16": { title: "المشروع النهائي — التفاعل", short: "إضافة JavaScript ومراجعة المشروع النهائي", phase: "المشروع النهائي", duration: "ساعتان", project: true },
        "17": { title: "Semantic HTML", short: "تنظيم بنية الصفحة باستخدام HTML الدلالي", phase: "HTML", duration: "ساعتان", project: false },
        "18": { title: "Client و Server والمتصفح", short: "مفهوم Client/Server وكيف يتعامل المتصفح مع الصفحات", phase: "HTML", duration: "ساعتان", project: false },
        "19": { title: "أساسيات Responsive Design", short: "جعل الصفحة تتكيّف مع أحجام الشاشات المختلفة", phase: "CSS", duration: "ساعتان", project: false },
        "20": { title: "صفحات متوافقة مع الشاشات", short: "تطبيق عملي لتصميم متجاوب على أكثر من عرض", phase: "CSS", duration: "ساعتان", project: false }
      }
    },
    react: {
      id: "react",
      slug: "react",
      pathPrefix: "courses/react/",
      title: "React — تطوير الواجهات الحديثة",
      subtitle: "الكورس الثاني",
      level: "متوسط",
      language: "العربية",
      hours: 32,
      sessionCount: 16,
      sessionMinutes: 120,
      registration: "التسجيل مفتوح",
      summary: "دورة عملية متخصصة في تطوير واجهات الويب الحديثة باستخدام React، من المفاهيم الأساسية حتى بناء تطبيقات متكاملة عبر مشاريع عملية كبيرة.",
      promo: "انتقل من أساسيات JavaScript إلى عالم تطوير واجهات الويب الحديثة، وتعلّم React بشكل عملي من Components وHooks إلى Routing وAPIs وإدارة State، ثم طبّق مهاراتك في مشاريع حقيقية متكاملة.",
      promoEn: "Move beyond JavaScript fundamentals and enter modern Front-End Development with React. Learn Components, Hooks, Routing, APIs, and State Management through practical exercises, then apply your skills by building complete real-world React applications.",
      accent: "react",
      about: "دورة عملية متخصصة في تطوير واجهات الويب الحديثة باستخدام React، تبدأ من المفاهيم الأساسية للمكتبة وتنتقل تدريجياً إلى Components وProps وإدارة الحالة باستخدام Hooks، والتعامل مع Routing وAPIs وContext API وuseReducer، وصولاً إلى بناء تطبيقات React متكاملة من خلال مشاريع عملية كبيرة.",
      contentIncludes: [
        "شرح المفاهيم النظرية",
        "أمثلة برمجية عملية",
        "تطبيق مباشر أثناء الجلسات",
        "تمارين تدريبية",
        "تحديات برمجية",
        "مشاريع مصغرة أثناء الدورة",
        "أكواد تعليمية منظمة",
        "تطبيقات على APIs",
        "مشروعان عمليان كبيران في نهاية الدورة"
      ],
      objectives: [
        "تعريف الطالب بمفهوم React وآلية عملها",
        "الانتقال من JavaScript التقليدية إلى بناء تطبيقات تعتمد على Components",
        "فهم طريقة بناء وتنظيم تطبيقات React الحديثة",
        "إتقان استخدام أهم React Hooks",
        "تعلم إدارة State داخل التطبيقات",
        "فهم عملية انتقال البيانات بين Components",
        "التعامل مع Routing وإنشاء تطبيقات متعددة الصفحات",
        "التعامل مع APIs والبيانات الخارجية",
        "بناء واجهات ديناميكية وتفاعلية",
        "تعلم إدارة State المشتركة باستخدام Context API",
        "استخدام useReducer لإدارة الحالات الأكثر تعقيداً",
        "كتابة Components منظمة وقابلة لإعادة الاستخدام",
        "تطبيق أفضل الممارسات الأساسية في مشاريع React",
        "تأهيل الطالب للانتقال لاحقاً إلى تقنيات أكثر تقدماً ضمن منظومة React",
        "بناء مشاريع حقيقية وكبيرة في نهاية الدورة"
      ],
      phases: [
        { id: "fundamentals", title: "React Fundamentals", sessions: ["01", "02", "03", "04"] },
        { id: "state", title: "State Management", sessions: ["05", "06", "07"] },
        { id: "effects", title: "Effects & APIs", sessions: ["08", "09"] },
        { id: "routing", title: "Routing", sessions: ["10", "11"] },
        { id: "advanced-state", title: "Advanced State", sessions: ["12", "13"] },
        { id: "architecture", title: "React Project Architecture", sessions: ["14"] },
        { id: "projects", title: "المشاريع النهائية", sessions: ["15", "16"] }
      ],
      sessions: {
        "01": {
          title: "Introduction to React & Vite",
          titleAr: "مقدمة إلى React و Vite",
          short: "ما هي React، مفهوم SPA، وإنشاء المشروع باستخدام Vite",
          phase: "React Fundamentals",
          duration: "ساعتان",
          project: false,
          goal: "فهم فكرة React ومفهوم SPA، ثم إنشاء أول مشروع باستخدام Vite والتعرّف على JSX وهيكل الملفات.",
          topics: [
            "ما هي React؟",
            "لماذا نستخدم React؟",
            "مفهوم SPA",
            "إنشاء المشروع باستخدام Vite",
            "Project Structure",
            "JSX"
          ],
          outcomes: [
            "مقدمة إلى React ومميزاتها",
            "فهم مفهوم Single Page Applications – SPA",
            "إنشاء مشروع React حديث باستخدام Vite",
            "التعرف على هيكل مشروع React",
            "فهم JSX وطريقة استخدامه"
          ]
        },
        "02": {
          title: "Components",
          titleAr: "المكوّنات",
          short: "Functional Components وتقسيم الواجهة وإعادة الاستخدام",
          phase: "React Fundamentals",
          duration: "ساعتان",
          project: false,
          goal: "بناء الواجهة من Components صغيرة قابلة لإعادة الاستخدام، مع تنظيم الاستيراد والتصدير.",
          topics: [
            "Functional Components",
            "Component Structure",
            "تقسيم واجهة الموقع",
            "Reusable Components",
            "Import / Export Components"
          ],
          outcomes: [
            "إنشاء Functional Components",
            "تقسيم الواجهة إلى Components صغيرة ومنظمة",
            "إعادة استخدام Components"
          ]
        },
        "03": {
          title: "Props & Component Communication",
          titleAr: "Props والتواصل بين المكوّنات",
          short: "تمرير البيانات وChildren وتركيب الواجهة",
          phase: "React Fundamentals",
          duration: "ساعتان",
          project: false,
          goal: "تمرير البيانات بين المكوّنات عبر Props وChildren، وبناء UI قابل لإعادة الاستخدام.",
          topics: [
            "Props",
            "تمرير البيانات",
            "Children",
            "Component Composition",
            "Reusable UI Components"
          ],
          outcomes: [
            "التعامل مع Props",
            "تمرير البيانات بين Components",
            "التعامل مع Children"
          ]
        },
        "04": {
          title: "Rendering & Events",
          titleAr: "العرض والأحداث",
          short: "Conditional Rendering والقوائم والمفاتيح والأحداث",
          phase: "React Fundamentals",
          duration: "ساعتان",
          project: false,
          goal: "التحكم بما يظهر على الشاشة حسب الشرط، وعرض القوائم بشكل صحيح، والتعامل مع أحداث المستخدم.",
          topics: [
            "Conditional Rendering",
            "Lists",
            "Keys",
            "Events",
            "Event Handlers"
          ],
          outcomes: [
            "Conditional Rendering",
            "عرض البيانات باستخدام Lists",
            "مفهوم Keys في React",
            "التعامل مع Events"
          ]
        },
        "05": {
          title: "useState",
          titleAr: "إدارة الحالة باستخدام useState",
          short: "مفهوم State وتحديثه مع القيم والكائنات والمصفوفات",
          phase: "State Management",
          duration: "ساعتان",
          project: false,
          goal: "فهم State ودورة إعادة الرسم، واستخدام useState لإدارة قيم بسيطة وكائنات ومصفوفات.",
          topics: [
            "مفهوم State",
            "useState Hook",
            "تحديث State",
            "التعامل مع أكثر من State",
            "State مع Objects وArrays"
          ],
          outcomes: [
            "استخدام useState",
            "إدارة وتحديث State",
            "فهم دورة إعادة Rendering في React"
          ]
        },
        "06": {
          title: "Forms & State",
          titleAr: "النماذج والحالة",
          short: "Controlled Components والتحقق الأساسي من النماذج",
          phase: "State Management",
          duration: "ساعتان",
          project: false,
          goal: "بناء نماذج تفاعلية عبر Controlled Components والتعامل مع إدخال المستخدم والتحقق الأساسي.",
          topics: [
            "Forms",
            "Inputs",
            "Controlled Components",
            "التعامل مع بيانات المستخدم",
            "Form Validation بشكل أساسي"
          ],
          outcomes: [
            "التعامل مع Forms وInputs",
            "Controlled Components"
          ]
        },
        "07": {
          title: "State Lifting & Component Communication",
          titleAr: "رفع الحالة والتواصل بين المكوّنات",
          short: "مشاركة State بين الأب والابن وتصميم أفضل للواجهة",
          phase: "State Management",
          duration: "ساعتان",
          project: false,
          goal: "نقل الحالة إلى المكان المناسب ومشاركة البيانات بين الأب والابن بتصميم أوضح للمكوّنات.",
          topics: [
            "مشاركة State",
            "Lifting State Up",
            "Parent / Child Communication",
            "تصميم Components بصورة أفضل"
          ],
          outcomes: [
            "مفهوم State Lifting",
            "مشاركة البيانات بين Components"
          ]
        },
        "08": {
          title: "useEffect",
          titleAr: "الآثار الجانبية و useEffect",
          short: "Side Effects ومصفوفة الاعتماد ودوال التنظيف",
          phase: "Effects & APIs",
          duration: "ساعتان",
          project: false,
          goal: "تنفيذ عمليات عند التحميل أو تغيّر البيانات، وفهم دورة حياة المكوّن ودوال التنظيف الأساسية.",
          topics: [
            "Side Effects",
            "useEffect",
            "Dependency Array",
            "Component Lifecycle Concept",
            "Cleanup Functions بشكل أساسي"
          ],
          outcomes: [
            "استخدام useEffect",
            "التعامل مع Side Effects",
            "التعامل مع Dependency Array",
            "تنفيذ عمليات عند تحميل Component أو تغير البيانات"
          ]
        },
        "09": {
          title: "APIs & Data Fetching",
          titleAr: "جلب البيانات من الواجهات",
          short: "Fetch وGET وحالات التحميل والأخطاء وعرض البيانات",
          phase: "Effects & APIs",
          duration: "ساعتان",
          project: false,
          goal: "جلب بيانات خارجية عبر Fetch وعرضها داخل المكوّنات مع حالات التحميل والخطأ.",
          topics: [
            "التعامل مع APIs",
            "Fetch API",
            "GET Requests",
            "Loading",
            "Errors",
            "عرض البيانات داخل Components"
          ],
          outcomes: [
            "جلب البيانات من APIs",
            "التعامل مع Fetch وطلبات HTTP الأساسية",
            "التعامل مع Loading States",
            "التعامل مع Errors",
            "عرض البيانات القادمة من API"
          ]
        },
        "10": {
          title: "React Router",
          titleAr: "التوجيه باستخدام React Router",
          short: "Routes وLink وNavLink والتخطيطات والتنقّل",
          phase: "Routing",
          duration: "ساعتان",
          project: false,
          goal: "تحويل التطبيق إلى صفحات متعددة عبر React Router مع روابط وتخطيط مشترك.",
          topics: [
            "React Router",
            "Routes",
            "Route",
            "Link",
            "NavLink",
            "Layouts",
            "Navigation"
          ],
          outcomes: [
            "مقدمة إلى React Router",
            "إنشاء Routes والتنقل بين الصفحات",
            "استخدام Link وNavLink"
          ]
        },
        "11": {
          title: "Dynamic Routing",
          titleAr: "المسارات الديناميكية",
          short: "useParams وuseNavigate وصفحات التفاصيل",
          phase: "Routing",
          duration: "ساعتان",
          project: false,
          goal: "بناء صفحات تفاصيل تعتمد على معاملات الرابط والتنقّل البرمجي بين الصفحات.",
          topics: [
            "Dynamic Routes",
            "useParams",
            "useNavigate",
            "صفحات التفاصيل",
            "التعامل مع Parameters الموجودة في URL"
          ],
          outcomes: [
            "استخدام useNavigate",
            "استخدام Dynamic Routes",
            "استخدام useParams",
            "قراءة Parameters من رابط الصفحة"
          ]
        },
        "12": {
          title: "Context API",
          titleAr: "الحالة العامة عبر Context",
          short: "createContext وProvider وuseContext",
          phase: "Advanced State",
          duration: "ساعتان",
          project: false,
          goal: "مشاركة البيانات بين أجزاء بعيدة من التطبيق دون تمرير Props بشكل متكرر.",
          topics: [
            "مفهوم Global State",
            "createContext",
            "Provider",
            "useContext",
            "مشاركة البيانات بين Components"
          ],
          outcomes: [
            "استخدام Context API",
            "إنشاء Global Context",
            "مشاركة State بين أجزاء التطبيق",
            "استخدام useContext"
          ]
        },
        "13": {
          title: "useReducer",
          titleAr: "إدارة الحالة المعقّدة بـ useReducer",
          short: "Actions وDispatch ودمج Reducer مع Context",
          phase: "Advanced State",
          duration: "ساعتان",
          project: false,
          goal: "إدارة حالة أكثر تعقيداً عبر نمط Reducer، ثم دمجه مع Context لتطبيق أوسع.",
          topics: [
            "مفهوم Reducer",
            "useReducer",
            "State",
            "Actions",
            "Dispatch",
            "دمج useReducer مع Context API"
          ],
          outcomes: [
            "استخدام useReducer",
            "فهم Actions وReducer",
            "إدارة State الأكثر تعقيداً",
            "دمج useReducer مع Context API"
          ]
        },
        "14": {
          title: "Advanced React Fundamentals",
          titleAr: "أساسيات متقدمة وهيكل المشروع",
          short: "useRef وCustom Hooks وتنظيم المشروع وتحسين الأداء",
          phase: "React Project Architecture",
          duration: "ساعتان",
          project: false,
          goal: "تنظيم مشروع React بشكل احترافي، وإعادة استخدام المنطق، والتحضير للمشاريع النهائية.",
          topics: [
            "useRef",
            "Custom Hooks",
            "تنظيم Project Structure",
            "Components · Pages · Services",
            "Reusable Logic",
            "Environment Variables",
            "أساسيات تحسين الأداء",
            "Debugging",
            "React Developer Tools",
            "التحضير للمشاريع النهائية"
          ],
          outcomes: [
            "التعرف على useRef واستخداماته الأساسية",
            "إنشاء Custom Hooks",
            "إعادة استخدام المنطق البرمجي بين Components",
            "تنظيم الملفات والمجلدات داخل مشروع React",
            "فصل Components وPages وServices",
            "التعامل مع Environment Variables بصورة أساسية",
            "فهم أساسيات تحسين أداء تطبيق React",
            "التعرف على React Developer Tools",
            "اكتشاف وتصحيح الأخطاء داخل تطبيقات React"
          ]
        },
        "15": {
          title: "المشروع العملي الكبير الأول",
          titleAr: "المشروع العملي الكبير الأول",
          short: "بناء تطبيق React متكامل يطبّق مفاهيم الدورة",
          phase: "المشاريع النهائية",
          duration: "ساعتان",
          project: true,
          goal: "تحليل مشروع حقيقي، تصميم Architecture مناسبة، تقسيم التطبيق إلى Components، والبدء بالتنفيذ الفعلي.",
          topics: [
            "Components وProps وState",
            "useState وuseEffect",
            "Routing وDynamic Routes",
            "APIs وForms",
            "Context API عند الحاجة",
            "تنظيم المشروع بطريقة صحيحة",
            "تحليل المشروع وبناء Architecture",
            "تقسيم التطبيق والبدء بالتنفيذ"
          ],
          outcomes: [
            "بناء تطبيق React متكامل من البداية وحتى النهاية"
          ]
        },
        "16": {
          title: "المشروع العملي الكبير الثاني",
          titleAr: "المشروع العملي الكبير الثاني",
          short: "استكمال مشروع متقدم مع مراجعة الكود النهائي",
          phase: "المشاريع النهائية",
          duration: "ساعتان",
          project: true,
          goal: "دمج المفاهيم المتقدمة في تطبيق واحد، ثم تحسين المشروع ومراجعة الكود النهائي.",
          topics: [
            "State Management",
            "useReducer وContext API",
            "API Integration",
            "Routing",
            "Reusable Components",
            "معالجة Loading وErrors",
            "تنظيم الكود",
            "Debugging",
            "تحسين المشروع",
            "مراجعة الكود النهائي"
          ],
          outcomes: [
            "بناء تطبيق React متكامل من البداية وحتى النهاية"
          ]
        }
      }
    },
    git: {
      id: "git",
      slug: "git",
      pathPrefix: "courses/git/",
      title: "Git و GitHub",
      subtitle: "الكورس الثالث",
      level: "مبتدئ",
      language: "العربية",
      hours: 10,
      sessionCount: 5,
      sessionMinutes: 120,
      registration: "التسجيل مفتوح",
      summary: "دورة عملية من خمس جلسات لتعلم أساسيات Git بالكامل ثم استخدام GitHub بثقة: المستودعات، الفروع، السحب والدفع، والتعاون عبر Pull Requests.",
      promo: "احفظ عملك كتاريخ واضح، ارفع مشاريعك إلى GitHub، وتعاون مع الآخرين عبر الفروع وPull Requests وصفحات GitHub Pages.",
      promoEn: "Learn Git from scratch, then use GitHub with confidence: repositories, branches, push and pull, pull requests, and GitHub Pages.",
      accent: "git",
      about: "دورة مركّزة من خمس جلسات تغطي أساسيات Git على الجهاز ثم GitHub على الشبكة: التثبيت والإعداد، اللقطات والفروع، المستودعات البعيدة، التعاون عبر Issues وPull Requests، ثم حل التعارضات والنشر عبر GitHub Pages.",
      contentIncludes: [
        "شرح المفاهيم النظرية",
        "أوامر Git العملية خطوة بخطوة",
        "تطبيق مباشر على مستودع حقيقي",
        "تمارين تدريبية مع حلول",
        "استخدام واجهة GitHub",
        "مشروع ختامي: رفع موقع صغير ونشره"
      ],
      objectives: [
        "فهم الفرق بين Git وGitHub",
        "تهيئة Git وإنشاء أول مستودع محلي",
        "حفظ التغييرات عبر add وcommit وقراءة السجل",
        "العمل بالفروع ودمجها بأمان",
        "ربط المشروع بـ GitHub عبر remote وpush وpull وclone",
        "التعاون عبر Issues وPull Requests",
        "حل تعارضات الدمج الأساسية",
        "نشر صفحة بسيطة عبر GitHub Pages",
        "اتباع عادات آمنة: .gitignore وعدم رفع الأسرار"
      ],
      audience: [
        "طلاب تطوير الويب الذين يريدون حفظ مشاريعهم بشكل احترافي",
        "المبتدئون الذين لم يستخدموا Git من قبل",
        "أي شخص يريد رفع أعماله إلى GitHub والتعاون مع فريق"
      ],
      requirements: [
        "جهاز حاسوب واتصال بالإنترنت",
        "محرر أكواد مثل Visual Studio Code",
        "إنشاء حساب GitHub مجاني أثناء الدورة",
        "لا يشترط خبرة سابقة في Git"
      ],
      phases: [
        { id: "local", title: "Git على الجهاز", sessions: ["01", "02"] },
        { id: "github", title: "GitHub والمستودعات", sessions: ["03", "04"] },
        { id: "workflow", title: "مسار احترافي", sessions: ["05"] }
      ],
      sessions: {
        "01": {
          title: "Git Foundations",
          titleAr: "أساسيات Git واللقطات",
          short: "ما هو Git، التثبيت، الإعداد، init وstatus وadd وcommit وlog",
          phase: "Git على الجهاز",
          duration: "ساعتان",
          project: false,
          goal: "فهم نظام التحكم بالإصدارات، تثبيت Git، وإنشاء أول مستودع مع لقطات واضحة.",
          topics: [
            "ما هو Version Control؟",
            "الفرق بين Git وGitHub",
            "تثبيت Git وإعداد الاسم والبريد",
            "مناطق العمل الثلاث",
            "git init وgit status",
            "git add وgit commit",
            "git log"
          ],
          outcomes: [
            "شرح فكرة حفظ التاريخ بدل نسخ المجلدات",
            "التمييز بين Git المحلي وGitHub على الشبكة",
            "تنفيذ دورة add ثم commit ثم قراءة السجل"
          ]
        },
        "02": {
          title: "Branches & History",
          titleAr: "الفروع والتاريخ والتراجع الآمن",
          short: "diff وrestore و.gitignore والفروع والدمج والتراجع بحذر",
          phase: "Git على الجهاز",
          duration: "ساعتان",
          project: false,
          goal: "قراءة الفروقات، تجاهل الملفات غير المطلوبة، والعمل على فروع ثم دمجها دون تخريب main.",
          topics: [
            "git diff",
            "git restore",
            ".gitignore",
            "الفروع git branch وgit switch",
            "git merge",
            "قراءة السجل كشجرة",
            "التراجع الآمن: restore وreset"
          ],
          outcomes: [
            "إنشاء فرع ميزة ودمجه في main",
            "كتابة .gitignore مناسب لمشاريع الويب",
            "التراجع عن تغييرات غير committed بأمان"
          ]
        },
        "03": {
          title: "GitHub Repositories",
          titleAr: "GitHub والمستودعات البعيدة",
          short: "الحساب، إنشاء Repo، remote، clone، push، pull، وواجهة GitHub",
          phase: "GitHub والمستودعات",
          duration: "ساعتان",
          project: false,
          goal: "رفع المستودع المحلي إلى GitHub وجلب المشاريع عبر clone مع فهم الواجهة الأساسية.",
          topics: [
            "حساب GitHub والملف الشخصي",
            "مستودع عام وخاص",
            "إنشاء Repository",
            "git remote وgit push",
            "git clone وgit pull وgit fetch",
            "HTTPS ومفاتيح الوصول",
            "واجهة Code وCommits"
          ],
          outcomes: [
            "ربط origin والدفع إلى main",
            "استنساخ مستودع موجود والعمل عليه",
            "قراءة المشروع من واجهة GitHub"
          ]
        },
        "04": {
          title: "Collaboration on GitHub",
          titleAr: "التعاون عبر GitHub",
          short: "GitHub Flow وPull Requests وIssues والـ Fork والمراجعة",
          phase: "GitHub والمستودعات",
          duration: "ساعتان",
          project: false,
          goal: "التعاون مع الآخرين عبر فروع بعيدة وطلبات الدمج والمسائل دون الكتابة مباشرة على main.",
          topics: [
            "GitHub Flow",
            "رفع فرع بعيد",
            "Pull Requests",
            "المراجعة والدمج",
            "Issues",
            "Fork مقابل Collaborators",
            "وصف الـ PR الجيد"
          ],
          outcomes: [
            "فتح Pull Request من فرع ميزة",
            "ربط Issue بعمل محدد",
            "اختيار أسلوب تعاون مناسب (fork أو دعوة)"
          ]
        },
        "05": {
          title: "Conflicts, Pages & Release",
          titleAr: "التعارضات والنشر والإصدار",
          short: "حل التعارضات، GitHub Pages، SSH، الوسوم والإصدارات، وعادات الأمان",
          phase: "مسار احترافي",
          duration: "ساعتان",
          project: true,
          goal: "حل تعارض دمج بسيط، نشر صفحة عبر GitHub Pages، وإغلاق الدورة بمشروع مرفوع ومنشور.",
          topics: [
            "تعارضات الدمج",
            "GitHub Pages",
            "SSH مقابل HTTPS",
            "Tags وReleases",
            "رسائل الـ commit الجيدة",
            "حماية فرع main",
            "مشروع ختامي"
          ],
          outcomes: [
            "حل تعارض نصي وإكمال الدمج",
            "نشر موقع HTML بسيط على GitHub Pages",
            "تجهيز مستودع نظيف جاهز للتسليم"
          ]
        }
      }
    },
    "react-advanced": {
      id: "react-advanced",
      slug: "react-advanced",
      pathPrefix: "courses/react-advanced/",
      title: "React Advanced",
      subtitle: "الكورس الرابع",
      level: "متقدم",
      language: "العربية",
      hours: 32,
      sessionCount: 16,
      sessionMinutes: 120,
      registration: "التسجيل مفتوح",
      summary: "دورة متقدمة بعد كورس React الأساسي: أنماط التركيب، الأداء، التوجيه المحمي، طبقة البيانات، النماذج المعقّدة، الاختبارات، ثم مشروعان تطبيقيان كبيران.",
      promo: "انتقل من كتابة مكوّنات تعمل إلى بناء تطبيقات React متينة: أنماط قوية، أداء محسوب، بيانات بثقة، واختبارات، عبر مشاريع عملية.",
      promoEn: "Move from working components to robust React apps: composition patterns, measured performance, data layer, testing, and two large practical projects.",
      accent: "react-adv",
      about: "دورة عملية متقدمة تفترض إنهاء كورس React الأساسي. نتعمّق في نموذج الرسم، أنماط التركيب، تحسين الأداء، التوجيه المتقدم، جلب البيانات بدون سباقات، الواجهة المتفائلة، النماذج متعددة الخطوات، إمكانية الوصول، والاختبارات، ثم نطبّق كل ذلك في مشروعين كبيرين بأسعار باليورو واسم المدرب Osama Bittar.",
      contentIncludes: [
        "شرح نظري لأهم أفكار React المتقدمة",
        "أنماط عملية قابلة لإعادة الاستخدام",
        "أمثلة مشاريع مصغّرة داخل الجلسات",
        "تمارين واختبارات وواجبات",
        "طبقة بيانات وError Boundaries",
        "اختبار مكوّنات بـ Vitest",
        "مشروعان تطبيقيان كبيران"
      ],
      objectives: [
        "فهم متى يعيد React الرسم وكيف تعمل Reconciliation",
        "بناء واجهات بتركيب مرن (Compound Components)",
        "تحسين الأداء عن قياس لا عن تخمين",
        "تقسيم الكود بـ lazy وSuspense",
        "حماية المسارات وقراءة search params",
        "معالجة الأخطاء بـ Error Boundaries",
        "جلب بيانات بلا سباقات مع إلغاء الطلب",
        "بناء ذاكرة مؤقتة بسيطة وواجهة متفائلة",
        "نماذج متعددة الخطوات مع تحقق",
        "أساسيات إمكانية الوصول في React",
        "كتابة اختبارات للمكوّنات",
        "تنظيم تطبيق حسب الميزات",
        "تسليم مشروعين متكاملين"
      ],
      audience: [
        "من أنهى كورس React الأساسي في المنصة",
        "من يبني تطبيقات ويريد أنماطاً أوضح وأداء أفضل",
        "من يستعد لمشاريع عمل أو معرض أعمال أقوى"
      ],
      requirements: [
        "إنهاء كورس React الأساسي (Hooks، Router، Context، useReducer)",
        "معرفة JavaScript الحديثة",
        "Vite وreact-router-dom كما في الكورس السابق",
        "جهاز للتطبيق العملي"
      ],
      phases: [
        { id: "patterns", title: "Patterns & Internals", sessions: ["01", "02", "03", "04"] },
        { id: "shell", title: "App Shell & UX", sessions: ["05", "06", "07", "08"] },
        { id: "data", title: "Data Layer & Forms", sessions: ["09", "10", "11", "12"] },
        { id: "quality", title: "Quality & Architecture", sessions: ["13", "14"] },
        { id: "projects", title: "المشاريع النهائية", sessions: ["15", "16"] }
      ],
      sessions: {
        "01": {
          title: "Rendering & Reconciliation",
          titleAr: "نموذج الرسم وإعادة المطابقة",
          short: "متى يعيد React الرسم، المفاتيح، Strict Mode، وتجميع التحديثات",
          phase: "Patterns & Internals",
          duration: "ساعتان",
          project: false,
          goal: "فهم دورة الرسم بعمق حتى تتجنب أخطاء الأداء والسلوك الغريب.",
          topics: ["Render vs Commit", "Reconciliation", "Keys", "Batching", "Strict Mode"],
          outcomes: ["شرح متى يُعاد تشغيل المكوّن", "اختيار keys صحيحة", "تفسير سلوك Strict Mode"]
        },
        "02": {
          title: "Compound Components",
          titleAr: "التركيب المرن والمكوّنات المركّبة",
          short: "Compound Components وchildren كواجهة API بدل نفخ الـ props",
          phase: "Patterns & Internals",
          duration: "ساعتان",
          project: false,
          goal: "بناء مكوّنات تُركَّب كقطع ليغو بدل قائمة props لا تنتهي.",
          topics: ["Composition", "Compound Components", "Context داخل المجموعة", "Slots عبر children"],
          outcomes: ["بناء Tabs أو Card مركّب", "تقليل prop drilling داخل عائلة مكوّنات"]
        },
        "03": {
          title: "Measured Performance",
          titleAr: "تحسين الأداء عن قياس",
          short: "memo وuseMemo وuseCallback ومتى لا نستخدمها",
          phase: "Patterns & Internals",
          duration: "ساعتان",
          project: false,
          goal: "تحسين ما يُقاس في Profiler لا لفّ كل شيء بـ memo.",
          topics: ["React.memo", "useMemo", "useCallback", "Profiler", "تكلفة الذاكرة"],
          outcomes: ["معرفة متى memo يفيد", "تجنّب تحسين مبكر يضر القراءة"]
        },
        "04": {
          title: "Refs, Portals & IDs",
          titleAr: "Refs وPortals ومعرّفات مستقرة",
          short: "forwardRef وuseImperativeHandle وcreatePortal وuseId",
          phase: "Patterns & Internals",
          duration: "ساعتان",
          project: false,
          goal: "التحكم بالـ DOM بحذر، والنوافذ المنبثقة، ومعرّفات الوصول.",
          topics: ["forwardRef", "useImperativeHandle", "Portals", "useId"],
          outcomes: ["تمرير ref لمدخل", "عرض Modal فوق الشجرة", "ربط label بـ useId"]
        },
        "05": {
          title: "Code Splitting",
          titleAr: "تقسيم الكود وSuspense",
          short: "lazy وSuspense وتقسيم الصفحات الثقيلة",
          phase: "App Shell & UX",
          duration: "ساعتان",
          project: false,
          goal: "تحميل ما يحتاجه المستخدم الآن فقط مع واجهة انتظار واضحة.",
          topics: ["React.lazy", "Suspense", "تقسيم المسارات", "Fallback UI"],
          outcomes: ["تقسيم صفحة ثقيلة", "عرض هيكل انتظار أثناء التحميل"]
        },
        "06": {
          title: "Advanced Routing",
          titleAr: "توجيه متقدم وحماية المسارات",
          short: "تخطيطات متداخلة، search params، ومسارات محمية",
          phase: "App Shell & UX",
          duration: "ساعتان",
          project: false,
          goal: "بناء غلاف تطبيق بمسارات محمية واستعلام في الرابط.",
          topics: ["Nested layouts", "Outlet context", "useSearchParams", "Protected routes"],
          outcomes: ["بوابة تسجيل بسيطة", "فلاتر تُحفظ في URL"]
        },
        "07": {
          title: "Error Boundaries",
          titleAr: "حدود الأخطاء واستعادة الواجهة",
          short: "Error Boundaries وواجهات العطل وإعادة المحاولة",
          phase: "App Shell & UX",
          duration: "ساعتان",
          project: false,
          goal: "منع انهيار التطبيق كله بسبب خطأ في فرع واحد من الشجرة.",
          topics: ["componentDidCatch", "getDerivedStateFromError", "Fallback UI", "إعادة المحاولة"],
          outcomes: ["عزل خطأ صفحة التفاصيل", "زر إعادة ضبط الحد"]
        },
        "08": {
          title: "Accessibility",
          titleAr: "إمكانية الوصول في React",
          short: "لوحة المفاتيح، التركيز، ARIA الأساسي، والنماذج المتاحة",
          phase: "App Shell & UX",
          duration: "ساعتان",
          project: false,
          goal: "جعل الواجهة قابلة للاستخدام بالكيبورد وللقارئات.",
          topics: ["Keyboard", "Focus management", "aria-*", "Labels", "Dialogs"],
          outcomes: ["قائمة قابلة للتنقل بالكيبورد", "ربط أخطاء النموذج بالحقول"]
        },
        "09": {
          title: "Fetch Without Races",
          titleAr: "جلب البيانات بلا سباقات",
          short: "AbortController والإغلاقات القديمة وتجاهل الرد المتأخر",
          phase: "Data Layer & Forms",
          duration: "ساعتان",
          project: false,
          goal: "منع عرض بيانات كورس قديم بعد تغيير المسار بسرعة.",
          topics: ["AbortController", "Race conditions", "Stale closures", "cleanup"],
          outcomes: ["إلغاء الطلب عند المغادرة", "عرض نتيجة الطلب الأخير فقط"]
        },
        "10": {
          title: "Client Cache Hook",
          titleAr: "ذاكرة مؤقتة على العميل",
          short: "بناء خطاف cache بسيط: مفتاح، بيانات، إعادة الجلب",
          phase: "Data Layer & Forms",
          duration: "ساعتان",
          project: false,
          goal: "عدم إعادة طلب نفس القائمة في كل زيارة للصفحة خلال الجلسة.",
          topics: ["Cache map", "query keys", "invalidate", "shared hook"],
          outcomes: ["useQuery مبسّط", "إبطال المفتاح بعد حفظ نموذج"]
        },
        "11": {
          title: "Optimistic UI",
          titleAr: "الواجهة المتفائلة",
          short: "تحديث فوري ثم التراجع عند فشل الشبكة",
          phase: "Data Layer & Forms",
          duration: "ساعتان",
          project: false,
          goal: "جعل الإضافة والحذف يشعران بالسرعة مع مسار آمن للفشل.",
          topics: ["Optimistic updates", "rollback", "pending flags", "UX"],
          outcomes: ["إضافة عنصر فوراً", "إرجاع الحالة إن فشل الطلب"]
        },
        "12": {
          title: "Advanced Forms",
          titleAr: "نماذج متعددة الخطوات",
          short: "معالج خطوات، مصفوفة حقول، وتحقق متدرج",
          phase: "Data Layer & Forms",
          duration: "ساعتان",
          project: false,
          goal: "بناء تسجيل كورس أو حجز بخطوات مع أسعار باليورو.",
          topics: ["Multi-step wizard", "Field arrays", "Validation per step", "Draft state"],
          outcomes: ["معالج من 3 خطوات", "منع الانتقال والخطوة غير صالحة"]
        },
        "13": {
          title: "Testing Components",
          titleAr: "اختبار المكوّنات",
          short: "Vitest وTesting Library: سلوك المستخدم لا تفاصيل التنفيذ",
          phase: "Quality & Architecture",
          duration: "ساعتان",
          project: false,
          goal: "كتابة اختبارات تحاكي النقر والإدخال وتؤكّد النتيجة.",
          topics: ["Vitest", "React Testing Library", "user events", "async findBy"],
          outcomes: ["اختبار عداد", "اختبار نموذج يظهر خطأ"]
        },
        "14": {
          title: "Feature Architecture",
          titleAr: "هيكل الميزات وجلسة المستخدم",
          short: "مجلدات حسب الميزة، نمط auth بسيط، وProfiler",
          phase: "Quality & Architecture",
          duration: "ساعتان",
          project: false,
          goal: "تجهيز معمارية المشروعين النهائيين بشكل احترافي.",
          topics: ["Feature folders", "Auth session pattern", "Profiler", "env"],
          outcomes: ["تخطيط مجلدات dashboard", "حارس مسار يعتمد على جلسة"]
        },
        "15": {
          title: "Project: Academy Dashboard",
          titleAr: "المشروع الأول: لوحة الأكاديمية",
          short: "تخطيطات متداخلة، حماية، جدول مع فلاتر في URL، وذاكرة جلب",
          phase: "المشاريع النهائية",
          duration: "ساعتان",
          project: true,
          goal: "بناء لوحة تحكم كورسات باسم Osama Bittar مع بحث وأسعار €.",
          topics: ["Protected layout", "Search params", "Cache hook", "Error boundary"],
          outcomes: ["لوحة تعمل محلياً", "فلاتر تُشارك عبر الرابط"]
        },
        "16": {
          title: "Project: Studio Booking",
          titleAr: "المشروع الثاني: حجز الاستوديو",
          short: "معالج حجز، واجهة متفائلة، حدود أخطاء، ومراجعة نهائية",
          phase: "المشاريع النهائية",
          duration: "ساعتان",
          project: true,
          goal: "تطبيق حجز مواعيد/مقاعد مع خطوات ودفع رمزي باليورو.",
          topics: ["Wizard", "Optimistic UI", "Testing smoke", "Code review"],
          outcomes: ["تدفق حجز كامل", "تسليم بدون أخطاء حمراء في Console"]
        }
      }
    },
    vps: {
      id: "vps",
      slug: "vps",
      pathPrefix: "courses/vps/",
      title: "VPS والاستضافة عبر Hostinger",
      subtitle: "الكورس الخامس",
      level: "متوسط",
      language: "العربية",
      hours: 24,
      sessionCount: 12,
      sessionMinutes: 120,
      registration: "التسجيل مفتوح",
      summary: "دورة عملية للتعامل مع الاستضافة عبر VPS على Hostinger فقط: اختيار الخطة، سيرفر Ubuntu، سطر الأوامر، Docker، شراء الدومين، والتشغيل الاحترافي.",
      promo: "من لوحة hPanel إلى سيرفر Ubuntu يعمل: وصول SSH، أوامر لينكس، Docker، ونطاق مربوط بـ HTTPS — كل ذلك داخل Hostinger.",
      promoEn: "Go from Hostinger hPanel to a running Ubuntu VPS: SSH, Linux commands, Docker, and a domain with HTTPS — Hostinger only.",
      accent: "vps",
      about: "دورة متخصصة في أنظمة الاستضافة عبر VPS حصراً على Hostinger. نختار الخطة المناسبة للمشروع، نهيّئ Ubuntu، نتعلّم سطر الأوامر بالتفصيل، نثبت Docker ونشغّل تطبيقاً، نشتري نطاقاً من Hostinger ونربطه، ثم ننتقل لعادات العمل الاحترافية.",
      contentIncludes: [
        "شرح مفاهيم الاستضافة من الصفر",
        "اختيار خطة KVM المناسبة داخل Hostinger",
        "تهيئة سيرفر Ubuntu خطوة بخطوة",
        "سطر أوامر لينكس مفصل",
        "Docker وDocker Compose عملياً",
        "شراء نطاق وربطه من Hostinger",
        "مشروع نشر موقع على السيرفر"
      ],
      objectives: [
        "التمييز بين الاستضافة المشتركة وVPS",
        "اختيار موارد السيرفر حسب نوع المشروع",
        "إنشاء VPS أوبونتو من hPanel",
        "الوصول عبر Browser Terminal وSSH",
        "إدارة الملفات والمستخدمين والحزم من الطرفية",
        "تأمين أساسي: جدار ناري ومفاتيح SSH",
        "فهم Docker وتشغيل حاوية",
        "تشغيل تطبيق بـ Compose",
        "شراء نطاق من Hostinger وربطه بسجل A",
        "تفعيل HTTPS أمام التطبيق",
        "اعتماد عادات تشغيل مناسبة للعمل"
      ],
      audience: [
        "طلاب الويب الذين يريدون رفع مشروع حقيقي على سيرفر",
        "من انتقل من GitHub Pages إلى استضافة كاملة",
        "من يريد فهم Docker ولينكس دون تشتيت بين مزوّدين"
      ],
      requirements: [
        "حساب Hostinger (يُنشأ أثناء الدورة)",
        "جهاز حاسوب واتصال إنترنت",
        "معرفة أساسية بالحاسوب ويفضّل إنهاء كورس Git",
        "ميزانية باليورو لخطة VPS ونطاق (تُراجع الأسعار الحالية على الموقع)"
      ],
      phases: [
        { id: "choose", title: "الاستضافة واختيار السيرفر", sessions: ["01", "02", "03"] },
        { id: "access", title: "الوصول وسطر الأوامر", sessions: ["04", "05", "06"] },
        { id: "setup", title: "تهيئة Ubuntu والنطاق", sessions: ["07", "08"] },
        { id: "docker", title: "Docker والنشر", sessions: ["09", "10", "11"] },
        { id: "work", title: "التشغيل والعمل", sessions: ["12"] }
      ],
      sessions: {
        "01": {
          title: "Hosting & Hostinger",
          titleAr: "مفهوم الاستضافة وHostinger",
          short: "أنواع الاستضافة، لماذا VPS، ولوحة hPanel",
          phase: "الاستضافة واختيار السيرفر",
          duration: "ساعتان",
          project: false,
          goal: "فهم أين يعيش الموقع على الشبكة، ولماذا نستخدم VPS على Hostinger فقط في هذه الدورة.",
          topics: ["Shared vs VPS", "Root access", "hPanel", "KVM"],
          outcomes: ["شرح الفرق بين الاستضافة المشتركة وVPS", "التعرّف على hPanel"]
        },
        "02": {
          title: "Choosing the Right VPS",
          titleAr: "اختيار السيرفر المناسب للمشروع",
          short: "CPU وRAM وNVMe والموقع الجغرافي وخطط KVM",
          phase: "الاستضافة واختيار السيرفر",
          duration: "ساعتان",
          project: false,
          goal: "مطابقة موارد الخطة مع نوع المشروع (صفحة ثابتة، React، API، Docker).",
          topics: ["KVM 1–8", "vCPU", "RAM", "Disk", "Datacenter", "Ubuntu LTS"],
          outcomes: ["اختيار خطة لمشروع أكاديمية نموذجي", "تبرير موقع أوروبا"]
        },
        "03": {
          title: "Create Ubuntu VPS",
          titleAr: "شراء وإنشاء VPS أوبونتو",
          short: "الشراء من Hostinger، قالب Ubuntu، كلمة root، وعنوان IP",
          phase: "الاستضافة واختيار السيرفر",
          duration: "ساعتان",
          project: false,
          goal: "إنشاء سيرفر Ubuntu جاهز للدخول من hPanel.",
          topics: ["Checkout", "OS template", "Root password", "Dedicated IP", "Overview"],
          outcomes: ["سيرفر يعمل وحالته Running", "معرفة IP وبيانات SSH"]
        },
        "04": {
          title: "Accessing the Server",
          titleAr: "الوصول إلى السيرفر",
          short: "Browser Terminal، SSH، المفاتيح، وVS Code",
          phase: "الوصول وسطر الأوامر",
          duration: "ساعتان",
          project: false,
          goal: "الدخول بأمان دون الاعتماد على كلمة المرور وحدها على المدى الطويل.",
          topics: ["Browser Terminal", "ssh", "ssh-keygen", "authorized_keys", "hPanel SSH keys"],
          outcomes: ["دخول من المتصفح ومن الجهاز", "إضافة مفتاح عام"]
        },
        "05": {
          title: "Linux CLI Basics",
          titleAr: "سطر الأوامر — الأساسيات",
          short: "التنقّل، الملفات، المحررات، والصلاحيات",
          phase: "الوصول وسطر الأوامر",
          duration: "ساعتان",
          project: false,
          goal: "التحرّك بثقة داخل نظام ملفات Ubuntu دون كسر المجلدات الحساسة.",
          topics: ["pwd ls cd", "cat nano", "cp mv rm", "chmod", "sudo"],
          outcomes: ["إنشاء مجلد مشروع", "تعديل ملف بـ nano"]
        },
        "06": {
          title: "Linux CLI Operations",
          titleAr: "سطر الأوامر — العمليات",
          short: "الحزم، الخدمات، العمليات، السجلات، والنقل",
          phase: "الوصول وسطر الأوامر",
          duration: "ساعتان",
          project: false,
          goal: "تثبيت البرامج وإدارة الخدمات ونقل الملفات من الجهاز إلى السيرفر.",
          topics: ["apt", "systemctl", "journalctl", "htop", "scp rsync"],
          outcomes: ["تحديث النظام", "نسخ مجلد مشروع بـ scp"]
        },
        "07": {
          title: "Ubuntu Server Setup",
          titleAr: "تهيئة سيرفر Ubuntu بالتفصيل",
          short: "تحديثات، منطقة زمنية، جدار ناري، مستخدم نشر، وNginx",
          phase: "تهيئة Ubuntu والنطاق",
          duration: "ساعتان",
          project: false,
          goal: "تحويل السيرفر الفارغ إلى بيئة جاهزة لاستقبال موقع.",
          topics: ["apt upgrade", "timedatectl", "ufw", "adduser", "nginx"],
          outcomes: ["جدار ناري يسمح بـ 22 و80 و443", "صفحة Nginx الافتراضية تظهر على IP"]
        },
        "08": {
          title: "Domains on Hostinger",
          titleAr: "شراء الدومين وDNS",
          short: "اختيار الاسم، الشراء باليورو، Nameservers، وسجل A",
          phase: "تهيئة Ubuntu والنطاق",
          duration: "ساعتان",
          project: false,
          goal: "شراء نطاق من Hostinger وربطه بعنوان IP الخاص بالـ VPS.",
          topics: ["Domain search", "TLD", "Nameservers", "A record", "TTL", "www"],
          outcomes: ["نطاق يشير إلى IP السيرفر", "فتح الموقع بالاسم بعد الانتشار"]
        },
        "09": {
          title: "Docker Fundamentals",
          titleAr: "أساسيات Docker",
          short: "الصور، الحاويات، المنافذ، المجلدات، وDockerfile",
          phase: "Docker والنشر",
          duration: "ساعتان",
          project: false,
          goal: "فهم لماذا نستخدم الحاويات وتشغيل أول حاوية على Ubuntu.",
          topics: ["Image vs Container", "docker run", "ports", "volumes", "Dockerfile"],
          outcomes: ["تشغيل nginx في حاوية", "بناء صورة بسيطة"]
        },
        "10": {
          title: "Docker Compose",
          titleAr: "Docker Compose والتطبيق",
          short: "ملفات compose، الخدمات، السجلات، وإعادة التشغيل",
          phase: "Docker والنشر",
          duration: "ساعتان",
          project: false,
          goal: "تشغيل تطبيق أكاديمية بملف compose واحد.",
          topics: ["compose.yaml", "services", "restart", "logs", ".env"],
          outcomes: ["docker compose up -d", "قراءة السجلات وإعادة البناء"]
        },
        "11": {
          title: "Proxy, SSL & Go Live",
          titleAr: "البروكسي والشهادة والنشر الحي",
          short: "Nginx أمام Docker، Let's Encrypt، وربط النطاق",
          phase: "Docker والنشر",
          duration: "ساعتان",
          project: false,
          goal: "فتح الموقع على HTTPS عبر النطاق المشترى من Hostinger.",
          topics: ["Reverse proxy", "proxy_pass", "certbot", "HTTPS"],
          outcomes: ["الموقع يعمل على https://النطاق", "إعادة توجيه من 80 إلى 443"]
        },
        "12": {
          title: "Ops & Work Transition",
          titleAr: "التشغيل والانتقال للعمل",
          short: "نسخ hPanel، التحديثات، النشر بـ Git، وعادات الفريق",
          phase: "التشغيل والعمل",
          duration: "ساعتان",
          project: true,
          goal: "تسليم سيرفر يعمل بعادات يمكن نقلها إلى بيئة عمل حقيقية.",
          topics: ["Snapshots", "Backups", "git pull deploy", "logs", "checklist"],
          outcomes: ["قائمة تشغيل أسبوعية", "نشر تحديث من Git دون كسر الموقع"]
        }
      }
    },
    backend: {
      id: "backend",
      slug: "backend",
      pathPrefix: "courses/backend/",
      title: "Node.js Backend مع MongoDB",
      subtitle: "الكورس السادس",
      level: "متوسط",
      language: "العربية",
      hours: 30,
      sessionCount: 15,
      sessionMinutes: 120,
      registration: "التسجيل مفتوح",
      summary: "دورة عملية متخصصة في Backend Development باستخدام Node.js وExpress وMongoDB، لبناء REST APIs احترافية مع المصادقة والصلاحيات والتحقق ومعالجة الأخطاء ورفع الملفات.",
      promo: "حوّل معرفتك بـ JavaScript إلى مهارات Backend حقيقية، وتعلّم بناء REST APIs باستخدام Node.js وExpress وMongoDB، بدءاً من قواعد البيانات وCRUD وصولاً إلى Authentication وAuthorization وبناء Backend متكامل لتطبيقات الويب الحديثة.",
      promoEn: "Turn your JavaScript knowledge into real Backend development skills. Learn how to build REST APIs with Node.js, Express, and MongoDB, from database integration and CRUD operations to Authentication, Authorization, security, and a complete Backend application.",
      accent: "backend",
      about: "دورة عملية متخصصة في Backend Development باستخدام Node.js وExpress وMongoDB، يتعلم الطالب خلالها كيفية بناء REST APIs احترافية، والتعامل مع قواعد البيانات، Authentication وAuthorization، Validation، Error Handling، ورفع الملفات، وصولاً إلى بناء Backend متكامل وجاهز للربط مع تطبيقات Front-End الحديثة.",
      contentIncludes: [
        "شرح المفاهيم الأساسية",
        "أمثلة عملية باستخدام Node.js",
        "تطبيقات باستخدام Express",
        "تمارين REST API",
        "تمارين MongoDB",
        "تطبيقات باستخدام Mongoose",
        "CRUD Applications",
        "Authentication Exercises وJWT",
        "Authorization وError Handling",
        "أساسيات أمن الـ API",
        "مشاريع مصغرة",
        "مشروع Backend نهائي متكامل"
      ],
      objectives: [
        "تعريف الطالب بمفهوم Backend Development",
        "فهم آلية عمل Client وServer",
        "فهم HTTP وREST APIs بصورة عملية",
        "تعلم استخدام Node.js لتطوير تطبيقات Backend",
        "بناء Web Server باستخدام Express",
        "إنشاء RESTful APIs بطريقة منظمة",
        "التعامل مع Requests وResponses",
        "فهم Routing وControllers",
        "ربط تطبيقات Node.js مع MongoDB",
        "التعامل مع قواعد البيانات باستخدام Mongoose",
        "تنفيذ عمليات CRUD كاملة",
        "تصميم Models وSchemas",
        "التعامل مع العلاقات بين البيانات",
        "بناء Authentication System وJWT",
        "بناء Authorization وصلاحيات المستخدمين",
        "حماية Routes والتحقق من البيانات",
        "بناء نظام Error Handling مركزي",
        "التعامل مع Pagination وFiltering وSearch",
        "رفع الملفات والصور",
        "تعلم أساسيات حماية REST APIs",
        "تنظيم مشروع Backend بصورة احترافية",
        "بناء Backend Project متكامل في نهاية الدورة"
      ],
      audience: [
        "مطورو JavaScript الراغبون في دخول مجال Backend Development",
        "الأشخاص الذين أنهوا أساسيات JavaScript",
        "مطورو Front-End الراغبون في تعلم Backend",
        "طلاب React الراغبون في بناء Backend خاص بتطبيقاتهم",
        "الأشخاص الراغبون في تعلم Node.js وMongoDB",
        "الطلاب الراغبون في دخول مسار MERN Stack"
      ],
      requirements: [
        "معرفة جيدة بأساسيات JavaScript",
        "فهم Variables وConditions وLoops وFunctions",
        "معرفة Arrays وObjects وmap/filter",
        "فهم أساسي لـ Promises وasync/await وES Modules",
        "لا يشترط خبرة سابقة في Node.js أو MongoDB",
        "جهاز حاسوب ومحرر مثل Visual Studio Code",
        "الالتزام بالتطبيق العملي والتمارين"
      ],
      phases: [
        { id: "node", title: "Node.js & Express", sessions: ["01", "02", "03", "04", "05"] },
        { id: "mongo", title: "MongoDB & Mongoose", sessions: ["06", "07", "08"] },
        { id: "auth", title: "Auth, Validation & Files", sessions: ["09", "10", "11", "12"] },
        { id: "arch", title: "Security & Architecture", sessions: ["13"] },
        { id: "projects", title: "المشروع النهائي", sessions: ["14", "15"] }
      ],
      sessions: {
        "01": {
          title: "Backend & Node.js Fundamentals",
          titleAr: "أساسيات Backend و Node.js",
          short: "Client/Server وHTTP وREST وnpm والوحدات",
          phase: "Node.js & Express",
          duration: "ساعتان",
          project: false,
          goal: "فهم دور الـ Backend وتشغيل أول برنامج Node.js مع npm وpackage.json.",
          topics: ["Backend Development", "Client / Server", "HTTP", "REST", "Node.js", "npm", "package.json", "Modules"],
          outcomes: ["تشغيل ملف Node", "شرح الفرق بين الواجهة والخادم"]
        },
        "02": {
          title: "Asynchronous JavaScript for Backend",
          titleAr: "JavaScript غير المتزامن للخادم",
          short: "Promises وasync/await والأخطاء ومتغيرات البيئة",
          phase: "Node.js & Express",
          duration: "ساعتان",
          project: false,
          goal: "كتابة عمليات غير متزامنة بأمان وتنظيم مشروع Node مع ملف .env.",
          topics: ["Callbacks", "Promises", "async / await", "Error Handling", "Environment Variables", "تنظيم المشروع"],
          outcomes: ["دالة async مع try/catch", "قراءة متغير من .env"]
        },
        "03": {
          title: "Express.js Fundamentals",
          titleAr: "أساسيات Express.js",
          short: "إنشاء خادم، الطلبات، الردود، المسارات، ورموز الحالة",
          phase: "Node.js & Express",
          duration: "ساعتان",
          project: false,
          goal: "تشغيل خادم Express يرد JSON على مسارات GET وPOST.",
          topics: ["Express Setup", "Web Server", "Requests", "Responses", "Routes", "HTTP Methods", "Status Codes"],
          outcomes: ["خادم على منفذ 3000", "مسار يعيد JSON"]
        },
        "04": {
          title: "Routing & Middleware",
          titleAr: "التوجيه والوسيط",
          short: "Router والمعاملات والجسم والـ Middleware والـ Controllers",
          phase: "Node.js & Express",
          duration: "ساعتان",
          project: false,
          goal: "تقسيم المسارات وكتابة وسيط مخصص ونقل المنطق إلى controllers.",
          topics: ["Express Router", "Route Parameters", "Query Parameters", "Request Body", "Middleware", "Custom Middleware", "Controllers"],
          outcomes: ["راوتر منفصل", "وسيط يسجّل الطلبات"]
        },
        "05": {
          title: "REST API & CRUD",
          titleAr: "REST وعمليات CRUD",
          short: "تصميم موارد وGET/POST/PUT/PATCH/DELETE وهيكل الرد",
          phase: "Node.js & Express",
          duration: "ساعتان",
          project: false,
          goal: "بناء API لذاكرة مؤقتة يغطّي CRUD بالكامل بردود موحّدة.",
          topics: ["REST Principles", "Resource-Based APIs", "CRUD", "GET", "POST", "PUT / PATCH", "DELETE", "API Response Structure"],
          outcomes: ["CRUD لكورسات في الذاكرة", "رد JSON موحّد"]
        },
        "06": {
          title: "MongoDB Fundamentals",
          titleAr: "أساسيات MongoDB",
          short: "NoSQL والمجموعات والمستندات وObjectId وتصميم القاعدة",
          phase: "MongoDB & Mongoose",
          duration: "ساعتان",
          project: false,
          goal: "فهم نموذج المستندات وتصميم مجموعات لمشروع أكاديمية.",
          topics: ["NoSQL", "MongoDB", "Databases", "Collections", "Documents", "ObjectId", "Database Design"],
          outcomes: ["مخطط مجموعات users وcourses", "شرح ObjectId"]
        },
        "07": {
          title: "Mongoose",
          titleAr: "Mongoose",
          short: "الاتصال والـ Schema والنماذج والتحقق وCRUD",
          phase: "MongoDB & Mongoose",
          duration: "ساعتان",
          project: false,
          goal: "ربط Express بـ MongoDB عبر Mongoose وتنفيذ CRUD على نموذج Course.",
          topics: ["MongoDB Connection", "Schemas", "Models", "Data Types", "Validation", "CRUD باستخدام Mongoose"],
          outcomes: ["اتصال من التطبيق", "إنشاء كورس وحفظه"]
        },
        "08": {
          title: "Advanced MongoDB Queries",
          titleAr: "استعلامات MongoDB المتقدمة",
          short: "التصفية والترتيب والصفحات والبحث وpopulate",
          phase: "MongoDB & Mongoose",
          duration: "ساعتان",
          project: false,
          goal: "بناء قائمة كورسات قابلة للبحث والتصفح مع علاقات بالمدرّب.",
          topics: ["Querying", "Filtering", "Sorting", "Pagination", "Search", "References", "populate", "Relationships"],
          outcomes: ["?page وlimit", "populate للمدرّب"]
        },
        "09": {
          title: "Authentication",
          titleAr: "المصادقة",
          short: "التسجيل وتسجيل الدخول والتجزئة وJWT والمسارات المحمية",
          phase: "Auth, Validation & Files",
          duration: "ساعتان",
          project: false,
          goal: "تسجيل مستخدم وتسجيل دخول وإرجاع JWT وحماية مسار.",
          topics: ["User Model", "Registration", "Login", "Password Hashing", "JWT", "Authentication Middleware", "Protected Routes"],
          outcomes: ["register وlogin", "مسار /me محمي"]
        },
        "10": {
          title: "Authorization & User Roles",
          titleAr: "التفويض وأدوار المستخدم",
          short: "الفرق عن المصادقة، Admin/User، الملكية، والصلاحيات",
          phase: "Auth, Validation & Files",
          duration: "ساعتان",
          project: false,
          goal: "منع المستخدم العادي من حذف كورس لا يملكه، ومنع غير الأدمن من مسارات الإدارة.",
          topics: ["Authentication vs Authorization", "Roles", "Admin / User", "Permissions", "Protected Resources", "Ownership Validation"],
          outcomes: ["وسيط requireRole", "فحص الملكية"]
        },
        "11": {
          title: "Validation & Error Handling",
          titleAr: "التحقق ومعالجة الأخطاء",
          short: "تحقق الطلب والنموذج ومعالج مركزي وأخطاء غير متزامنة",
          phase: "Auth, Validation & Files",
          duration: "ساعتان",
          project: false,
          goal: "ردود خطأ موحّدة لكل من التحقق وNot Found وأخطاء قاعدة البيانات.",
          topics: ["Request Validation", "Schema Validation", "Centralized Error Handler", "Async Errors", "Database Errors", "Not Found Handling", "API Error Responses"],
          outcomes: ["error middleware", "404 للمسارات"]
        },
        "12": {
          title: "Files & Advanced API Features",
          titleAr: "الملفات وميزات الـ API المتقدمة",
          short: "رفع الصور والبحث والتصفية والترتيب والترقيم",
          phase: "Auth, Validation & Files",
          duration: "ساعتان",
          project: false,
          goal: "رفع صورة غلاف للكورس وتطبيق بحث وترقيم على القائمة.",
          topics: ["File Uploads", "Image Uploads", "Search", "Filtering", "Sorting", "Pagination", "Query Parameters"],
          outcomes: ["رفع صورة", "قائمة مع q وpage"]
        },
        "13": {
          title: "Backend Security & Architecture",
          titleAr: "أمن الـ Backend وهندسة المشروع",
          short: "CORS والحماية وRate Limiting وهيكل المجلدات وتخطيط المشروع النهائي",
          phase: "Security & Architecture",
          duration: "ساعتان",
          project: false,
          goal: "ترتيب المشروع إلى routes/controllers/models/middleware/services والاستعداد للمشروع النهائي.",
          topics: ["CORS", "Security Fundamentals", "Rate Limiting Concept", "Environment Variables", "Routes", "Controllers", "Models", "Middleware", "Services", "Project Structure", "Final Project Planning"],
          outcomes: ["شجرة مجلدات واضحة", "خطة موارد المشروع النهائي"]
        },
        "14": {
          title: "Backend Project — Part One",
          titleAr: "المشروع النهائي — المرحلة الأولى",
          short: "تحليل النظام، النماذج، المسارات، المصادقة، وCRUD",
          phase: "المشروع النهائي",
          duration: "ساعتان",
          project: true,
          goal: "بدء Backend أكاديمية متكامل: موارد، MongoDB، JWT، وCRUD للكورسات والمستخدمين.",
          topics: ["تحليل المتطلبات", "Resources", "Database Design", "Schemas", "Models", "Routes", "Controllers", "Authentication", "Users", "JWT", "CRUD", "تنظيم المشروع"],
          outcomes: ["تسجيل ودخول يعملان", "CRUD كورسات للأدمن"]
        },
        "15": {
          title: "Backend Project — Part Two",
          titleAr: "المشروع النهائي — المرحلة الثانية",
          short: "الصلاحيات والعلاقات والتحقق والرفع والاختبار والمراجعة",
          phase: "المشروع النهائي",
          duration: "ساعتان",
          project: true,
          goal: "إكمال REST API جاهز للربط مع Front-End مع بحث وترقيم ورفع ملفات وأمن أساسي.",
          topics: ["Authorization", "User Roles", "Relationships", "Validation", "Error Handling", "Search", "Filtering", "Pagination", "File Uploads", "Security", "API Testing", "Debugging", "Code Organization", "مراجعة"],
          outcomes: ["API متكامل للاختبار بـ Thunder Client أو Postman", "مراجعة نهائية بلا أسرار في Git"]
        }
      }
    },
    se: {
      id: "se",
      slug: "se",
      pathPrefix: "courses/se/",
      title: "هندسة البرمجيات — منصة توصيل مذاق بيطار",
      subtitle: "الكورس السابع",
      level: "متوسط",
      language: "العربية",
      hours: 32,
      sessionCount: 16,
      sessionMinutes: 120,
      registration: "التسجيل مفتوح",
      summary: "دورة أكاديمية بلا كتابة أكواد تطبيق، تمرّ بمشروع منصة إلكترونية لتوصيل طلبات مطعم واحد مع أنظمة إدارة السائقين والإدارة المالية، عبر دراسة المتطلبات والتحليل والتصميم والتنفيذ المخطط والمتابعة والتصدير.",
      promo: "تعلّم التعامل مع أي فكرة برمجية بالطريقة الصحيحة: متطلبات كاملة، تحليلات، مخططات، وشرح تقني لكل أنظمة المشروع — عبر منصة توصيل مذاق بيطار، من الفكرة حتى حزمة التسليم، دون كتابة كود تطبيق.",
      promoEn: "Learn how to handle any software idea the right way: complete requirements, analysis, diagrams, and technical explanation of every system in the project — through the Bittar Kitchen delivery platform, from vision to a handover pack, without writing application code.",
      accent: "se",
      about: "دورة متخصصة في هندسة البرمجيات الأكاديمية تطبق دورة حياة تطوير البرمجيات كاملة على مشروع ضخم: منصة إلكترونية لتوصيل طلبات مطعم مذاق بيطار، مع إدارة السائقين والنظام المالي للسائقين والمطعم. لا نكتب أكواد تطبيق؛ ندرّب الطالب على الوثائق والمخططات والقرارات التقنية الصحيحة لأي فكرة برمجية.",
      contentIncludes: [
        "شرح دورة حياة التطوير الأكاديمية",
        "دراسة متطلبات كاملة لمشروع حقيقي",
        "تحليل أصحاب المصلحة والنطاق",
        "مخططات UML وBPMN وأعمال",
        "نموذج بيانات وقاموس بيانات",
        "تصميم معماري وتقني بدون كود",
        "تحليل نظام السائقين",
        "تحليل النظام المالي باليورو",
        "استراتيجية اختبار وتتبع متطلبات",
        "حزمة تصدير وتسليم للعميل",
        "تمارين وثائقية ومراجعات",
        "ملف هندسة برمجيات نهائي متكامل"
      ],
      objectives: [
        "فهم مراحل حياة تطوير البرمجيات الأكاديمية وتطبيقها على مشروع حقيقي",
        "جمع المتطلبات الوظيفية وغير الوظيفية وتوثيقها برموز قابلة للتتبع",
        "تحليل أصحاب المصلحة والنطاق وما يدخل وما يخرج من المشروع",
        "وصف دورة حياة الطلب من السلة حتى التسليم والإرجاع",
        "تحليل تشغيل السائقين: التعيين، الورديات، الموقع، والأداء",
        "تحليل النظام المالي: العمولات، المحفظة، التحصيل النقدي، والتسوية باليورو",
        "رسم مخططات Use Case وActivity وSequence وERD",
        "اختيار عمارة تقنية وشرح المكوّنات دون كتابة كود",
        "تصميم أدوار الواجهات ونماذج المعلومات",
        "وضع خطة تنفيذ ومتابعة ومخاطر واختبار",
        "تصدير حزمة وثائق جاهزة للتسليم والعرض",
        "اكتساب أسلوب يصلح لأي فكرة برمجية لاحقاً"
      ],
      audience: [
        "طلاب هندسة المعلوماتية والبرمجيات",
        "المطورون الذين يقفزون للكود دون تحليل",
        "محللو نظم ومبتدئو Business Analysis",
        "أصحاب أفكار مشاريع يريدون توثيق الفكرة قبل التنفيذ",
        "فرق Front-End وBack-End التي تحتاج لغة مشتركة مع التحليل",
        "من يستعد لمشروع تخرج أو تسليم أكاديمي",
        "مديرو منتجات ناشئون في تطبيقات التوصيل والخدمات"
      ],
      requirements: [
        "لا يشترط كتابة أكواد في هذه الدورة",
        "معرفة عامة باستخدام التطبيقات والويب مفيدة",
        "جهاز حاسوب لكتابة الوثائق ورسم المخططات",
        "محرر نصوص مثل Visual Studio Code أو مستندات مكتبية",
        "الالتزام ببناء ملف المشروع جلسة بعد جلسة",
        "الرغبة في التفكير المنهجي قبل التنفيذ"
      ],
      phases: [
        { id: "req", title: "التأسيس والمتطلبات", sessions: ["01", "02", "03", "04", "05"] },
        { id: "analysis", title: "تحليل الأعمال والأنظمة", sessions: ["06", "07", "08", "09"] },
        { id: "design", title: "التصميم التقني والمعلوماتي", sessions: ["10", "11", "12", "13"] },
        { id: "delivery", title: "التنفيذ المخطط والمتابعة والتصدير", sessions: ["14", "15", "16"] }
      ],
      sessions: {
        "01": {
          title: "Software Engineering & SDLC",
          titleAr: "هندسة البرمجيات ودورة الحياة",
          short: "مفهوم SE، المراحل الأكاديمية، ورؤية منصة مذاق بيطار",
          phase: "التأسيس والمتطلبات",
          duration: "ساعتان",
          project: false,
          goal: "فهم لماذا نحلّل قبل أن نبرمج، وتعريف رؤية المشروع ونواتج الدورة.",
          topics: ["Software Engineering", "SDLC", "Waterfall الأكاديمي", "Vision", "No application code", "Project charter"],
          outcomes: ["ميثاق مشروع من صفحة واحدة", "قائمة نواتج الملف الهندسي"]
        },
        "02": {
          title: "Stakeholders, Context & Scope",
          titleAr: "أصحاب المصلحة والسياق والنطاق",
          short: "الممثلون، الحدود، وما يدخل وما يخرج من المنصة",
          phase: "التأسيس والمتطلبات",
          duration: "ساعتان",
          project: false,
          goal: "رسم سياق النظام وتحديد النطاق حتى لا يتضخم المشروع.",
          topics: ["Stakeholders", "Context diagram", "In scope", "Out of scope", "Assumptions", "Constraints"],
          outcomes: ["مخطط سياق", "جدول In/Out للنطاق"]
        },
        "03": {
          title: "Requirements Elicitation",
          titleAr: "جمع المتطلبات",
          short: "مقابلات، ورش، ملاحظة، ووثائق المصدر",
          phase: "التأسيس والمتطلبات",
          duration: "ساعتان",
          project: false,
          goal: "استخدام أساليب جمع المتطلبات وتحويل كلام صاحب المطعم إلى حقائق قابلة للتحقق.",
          topics: ["Interviews", "Workshops", "Observation", "Document analysis", "Conflict", "Trace notes"],
          outcomes: ["محضر مقابلة", "قائمة أسئلة لأصحاب المصلحة"]
        },
        "04": {
          title: "Functional Requirements (SRS)",
          titleAr: "المتطلبات الوظيفية",
          short: "كتالوج FR للمنصة والمطبخ والسائق والمالية",
          phase: "التأسيس والمتطلبات",
          duration: "ساعتان",
          project: false,
          goal: "كتابة متطلبات وظيفية مرقّمة وواضحة وقابلة للاختبار.",
          topics: ["SRS", "FR IDs", "Priority MoSCoW", "Acceptance criteria", "Customer", "Kitchen", "Driver", "Finance"],
          outcomes: ["20 متطلباً وظيفياً على الأقل", "معايير قبول لكل FR"]
        },
        "05": {
          title: "Non-Functional Requirements",
          titleAr: "المتطلبات غير الوظيفية والقيود",
          short: "الأداء، التوفر، الأمان، اللغة، والعملة باليورو",
          phase: "التأسيس والمتطلبات",
          duration: "ساعتان",
          project: false,
          goal: "توثيق الجودة والقيود بحيث لا تُنسى عند التصميم.",
          topics: ["NFR", "Performance", "Availability", "Security", "Usability", "Localization", "EUR", "Legal"],
          outcomes: ["جدول NFR قابل للقياس", "قيود تقنية وتنظيمية"]
        },
        "06": {
          title: "Actors, Use Cases & Stories",
          titleAr: "الممثلون وحالات الاستخدام",
          short: "Actors وUse Cases وUser Stories للمنصة",
          phase: "تحليل الأعمال والأنظمة",
          duration: "ساعتان",
          project: false,
          goal: "تحويل المتطلبات إلى حالات استخدام وقصص مستخدم مرتبطة بالـ FR.",
          topics: ["Actors", "Use cases", "Includes/Extends", "User stories", "Acceptance", "Traceability"],
          outcomes: ["مخطط Use Case رئيسي", "قصص مستخدم لثلاثة أدوار"]
        },
        "07": {
          title: "Order Lifecycle & Business Process",
          titleAr: "دورة حياة الطلب والعمليات",
          short: "من السلة حتى التسليم والإلغاء والإرجاع",
          phase: "تحليل الأعمال والأنظمة",
          duration: "ساعتان",
          project: false,
          goal: "نمذجة حالات الطلب وقواعد الانتقال دون لبس تشغيلي.",
          topics: ["Order states", "BPMN", "Cancellation", "Refund", "SLA", "Kitchen capacity"],
          outcomes: ["مخطط حالات الطلب", "قواعد إلغاء واسترداد"]
        },
        "08": {
          title: "Driver Operations System",
          titleAr: "نظام إدارة السائقين",
          short: "التوظيف، الورديات، التعيين، الموقع، والأداء",
          phase: "تحليل الأعمال والأنظمة",
          duration: "ساعتان",
          project: false,
          goal: "تحليل تشغيل السائقين كنظام مستقل مرتبط بالطلب.",
          topics: ["Onboarding", "Shifts", "Assignment", "GPS concept", "Statuses", "Incidents", "KPIs"],
          outcomes: ["حالات السائق", "سياسة تعيين طلب", "مؤشرات أداء"]
        },
        "09": {
          title: "Driver & Restaurant Finance",
          titleAr: "النظام المالي للسائقين والمطعم",
          short: "المحفظة، العمولة، النقد، والتسوية باليورو",
          phase: "تحليل الأعمال والأنظمة",
          duration: "ساعتان",
          project: false,
          goal: "تصميم منطق مالي واضح يمنع ضياع النقد ويُظهر مستحقات السائق.",
          topics: ["Wallet", "COD", "Card gateway concept", "Commission", "Settlement", "EUR reports", "Audit"],
          outcomes: ["قواعد احتساب أجر التوصيل", "سيناريو تسوية أسبوعية"]
        },
        "10": {
          title: "UML Analysis Diagrams",
          titleAr: "مخططات UML التحليلية",
          short: "Activity وSequence وCommunication للمسارات الحرجة",
          phase: "التصميم التقني والمعلوماتي",
          duration: "ساعتان",
          project: false,
          goal: "رسم تفاعل العميل والمطبخ والسائق والإدارة على مسارات حرجة.",
          topics: ["Activity", "Sequence", "Happy path", "Exceptions", "Notifications"],
          outcomes: ["Activity للطلب", "Sequence لتعيين سائق"]
        },
        "11": {
          title: "Data Model & Dictionary",
          titleAr: "نموذج البيانات وقاموس البيانات",
          short: "الكيانات، العلاقات، والمفاتيح، دون تنفيذ قاعدة",
          phase: "التصميم التقني والمعلوماتي",
          duration: "ساعتان",
          project: false,
          goal: "إنتاج ERD وقاموس بيانات يغطي الطلب والسائق والمالية.",
          topics: ["ERD", "Entities", "Cardinality", "Data dictionary", "IDs", "Audit fields"],
          outcomes: ["ERD للمنصة", "قاموس لعشر كيانات"]
        },
        "12": {
          title: "Architecture & Technology Choices",
          titleAr: "العمارة والخيارات التقنية",
          short: "طبقات النظام، القنوات، والخرائط التقنية كمفاهيم",
          phase: "التصميم التقني والمعلوماتي",
          duration: "ساعتان",
          project: false,
          goal: "اقتراح عمارة قابلة للتنفيذ لاحقاً مع تبرير كل اختيار.",
          topics: ["C4 context/container", "Channels", "API resources concept", "Maps", "Push", "Payments", "Hosting"],
          outcomes: ["مخطط حاويات", "مصفوفة قرارات تقنية"]
        },
        "13": {
          title: "Information Architecture & Roles",
          titleAr: "معمارية المعلومات والأدوار",
          short: "الشاشات، الصلاحيات، والنماذج الشبكية بلا واجهة برمجية",
          phase: "التصميم التقني والمعلوماتي",
          duration: "ساعتان",
          project: false,
          goal: "وصف شاشات كل قناة وما يظهر لكل دور.",
          topics: ["IA", "Wireframe notes", "RBAC", "Customer", "Kitchen", "Driver", "Admin", "Finance"],
          outcomes: ["خريطة شاشات", "مصفوفة صلاحيات"]
        },
        "14": {
          title: "Implementation Planning & Risks",
          titleAr: "خطة التنفيذ والمخاطر",
          short: "WBS، مراحل، تتبع، ومخاطر — بلا كتابة كود",
          phase: "التنفيذ المخطط والمتابعة والتصدير",
          duration: "ساعتان",
          project: true,
          goal: "تحويل التصميم إلى خطة عمل يمكن لفريق تطوير اتباعها لاحقاً.",
          topics: ["WBS", "Milestones", "Traceability matrix", "Risks", "Assumptions log"],
          outcomes: ["خطة مراحل", "مصفوفة تتبع FR إلى تصميم"]
        },
        "15": {
          title: "QA, Testing & Operations Follow-up",
          titleAr: "الجودة والاختبار والمتابعة",
          short: "حالات اختبار، قبول، تشغيل، ومؤشرات خدمة",
          phase: "التنفيذ المخطط والمتابعة والتصدير",
          duration: "ساعتان",
          project: true,
          goal: "ربط كل متطلب بحالة اختبار ووضع متابعة بعد الإطلاق.",
          topics: ["Test strategy", "UAT", "Defect severity", "SLA follow-up", "Ops KPIs"],
          outcomes: ["حالات اختبار لعشرة FR", "لوحة مؤشرات تشغيل"]
        },
        "16": {
          title: "Export, Handover & Final Review",
          titleAr: "التصدير والتسليم والمراجعة النهائية",
          short: "حزمة الوثائق، العرض، وقائمة التسليم للعميل",
          phase: "التنفيذ المخطط والمتابعة والتصدير",
          duration: "ساعتان",
          project: true,
          goal: "تجميع ملف هندسة برمجيات كامل جاهز للتسليم والعرض الأكاديمي.",
          topics: ["Document pack", "Baseline", "Handover", "Presentation", "Lessons learned"],
          outcomes: ["فهرس الحزمة", "عرض تسليم", "مراجعة نهائية للملف"]
        }
      }
    }
  }
};
