import { ServiceCard, SpecialtyCard, VideoReview } from "./types";

export const SERVICES_DATA: ServiceCard[] = [
  // 1. Отчеты по практике (practice)
  {
    id: "ucheb-practice",
    title: "Учебная практика",
    badge: "от 1 дня",
    priceText: "от 2 500 ₽",
    durationText: "от 1 дня",
    description: "Начальный этап практической подготовки. Оформляем дневник, отзыв и отчет куратора по вашей учебной специализации с печатями профильного предприятия.",
    bgGradient: "from-slate-900/95 to-blue-950/95",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600&h=400",
    category: "practice"
  },
  {
    id: "proizv-practice",
    title: "Производственная практика",
    badge: "от 2 дней",
    priceText: "от 3 000 ₽",
    durationText: "от 2 дней",
    description: "Профессиональная профильная практика на 3-4 курсах. Документы включают детальный сквозной экономический или технический анализ деятельности департамента компании.",
    bgGradient: "from-slate-900/95 to-indigo-950/95",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600&h=400",
    category: "practice"
  },
  {
    id: "preddiplom-practice",
    title: "Преддипломная практика",
    badge: "от 2 дней",
    priceText: "от 3 500 ₽",
    durationText: "от 2 дней",
    description: "Итоговая практическая подготовка перед ВКР. В аналитическую часть собираются реальные балансы, уставные документы и сводные ведомости для глав диплома.",
    bgGradient: "from-slate-900/95 to-violet-950/95",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600&h=400",
    category: "practice"
  },
  {
    id: "oznakom-practice",
    title: "Ознакомительная практика",
    badge: "от 1 дня",
    priceText: "от 2 500 ₽",
    durationText: "от 1 дня",
    description: "Первичный обзор структуры организации, ознакомление со штатным расписанием, целями, правовым статусом и основополагающими регламентами базы практики.",
    bgGradient: "from-slate-900/95 to-cyan-950/95",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600&h=400",
    category: "practice"
  },

  // 2. Курсовые и дипломные (course_diploma)
  {
    id: "kurs-work",
    title: "Курсовая работа",
    badge: "от 3 дней",
    priceText: "от 3 500 ₽",
    durationText: "от 3 дней",
    description: "Выполнение курсовых проектов любой сложности строго по регламенту и методическим предписаниям вашей кафедры. Высокий процент Антиплагиата и сопровождение.",
    bgGradient: "from-slate-900/95 to-slate-950/95",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400",
    category: "course_diploma"
  },
  {
    id: "diploma-work",
    title: "Дипломная работа (ВКР)",
    badge: "от 7 дней",
    priceText: "от 9 500 ₽",
    durationText: "от 7 дней",
    description: "Профессиональная выпускная квалификационная работа под ключ. Полное погружение в тему, оформление по ГОСТу, раздаточный материал, презентация и речь на защиту.",
    bgGradient: "from-slate-900/95 to-blue-950/95",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600&h=400",
    category: "course_diploma"
  },
  {
    id: "magistr-work",
    title: "Магистерская диссертация",
    badge: "от 10 дней",
    priceText: "от 14 000 ₽",
    durationText: "от 10 дней",
    description: "Глубокая исследовательская работа с четко сформулированной научной новизной, практическими рекомендациями и апробацией. Высокая уникальность (Антиплагиат.ВУЗ).",
    bgGradient: "from-slate-900/95 to-indigo-950/95",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600&h=400",
    category: "course_diploma"
  },
  {
    id: "referat-work",
    title: "Реферат / Эссе",
    badge: "от 1 дня",
    priceText: "от 1 500 ₽",
    durationText: "от 1 дня",
    description: "Написание рефератов, контрольных работ или кратких эссе по любым дисциплинам с соблюдением требований к оформлению списка литературы.",
    bgGradient: "from-slate-900/95 to-violet-950/95",
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600&h=400",
    category: "course_diploma"
  },

  // 3. Экзамены и тесты (exams_tests)
  {
    id: "session-key",
    title: "Сессия под ключ",
    badge: "от 1 дня",
    priceText: "от 4 900 ₽",
    durationText: "от 1 дня",
    description: "Комплексное закрытие всех долгов, текущих зачетов, экзаменов и тестов в ваших личных учебных кабинетах. Безопасно, конфиденциально, до результата.",
    bgGradient: "from-slate-900/95 to-slate-950/95",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600&h=400",
    category: "exams_tests"
  },
  {
    id: "online-tests",
    title: "Онлайн-тесты и экзамены",
    badge: "от 1 часа",
    priceText: "от 900 ₽",
    durationText: "от 1 часа",
    description: "Оперативная сдача промежуточных и итоговых тестов в СУДО по любым дисциплинам (Синергия, МТИ, Росдистант, МОСАП и другие).",
    bgGradient: "from-slate-900/95 to-emerald-950/95",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600&h=400",
    category: "exams_tests"
  },
  {
    id: "cases-tasks",
    title: "Решение задач и кейсов",
    badge: "от 1 дня",
    priceText: "от 1 000 ₽",
    durationText: "от 1 дня",
    description: "Помощь в решении сложных расчетно-графических заданий (РГР), лабораторных работ, практических кейсов по экономике, праву, ИТ и точным наукам.",
    bgGradient: "from-slate-900/95 to-amber-950/95",
    imageUrl: "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?auto=format&fit=crop&q=80&w=600&h=400",
    category: "exams_tests"
  },

  // 4. Консультации (consulting)
  {
    id: "expert-consult",
    title: "Экспертная консультация",
    badge: "от 1 дня",
    priceText: "от 1 000 ₽",
    durationText: "от 1 дня",
    description: "Разбор планов ваших отчетов кураторами, методические рекомендации, помощь по оформлению и выбору методологии исследования.",
    bgGradient: "from-slate-900/95 to-violet-950/95",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600&h=400",
    category: "consulting"
  },
  {
    id: "books-consult",
    title: "Подбор источников и литературы",
    badge: "от 1 дня",
    priceText: "от 800 ₽",
    durationText: "от 1 дня",
    description: "Подбор авторитетной научной литературы, сопоставление списка источников по ГОСТу, составление структуры для введений к планам работ.",
    bgGradient: "from-slate-900/95 to-slate-950/95",
    imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=600&h=400",
    category: "consulting"
  },
  {
    id: "antiplag-consult",
    title: "Корректировка уникальности",
    badge: "от 1 дня",
    priceText: "от 1 500 ₽",
    durationText: "от 1 дня",
    description: "Анализ и глубокий рерайтинг слабоуникальных фрагментов текста для успешного преодоления проверки в системах Антиплагиат.ВУЗ.",
    bgGradient: "from-slate-900/95 to-cyan-950/95",
    imageUrl: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=600&h=400",
    category: "consulting"
  }
];

export const SPECIALTIES_DATA: SpecialtyCard[] = [
  { id: "bux", title: "Бухгалтер", iconName: "Calculator" },
  { id: "psy", title: "Психолог", iconName: "BrainCircuit" },
  { id: "prog", title: "Программист", iconName: "Terminal" },
  { id: "agr", title: "Сельское хозяйство", iconName: "Sprout" },
  { id: "tour", title: "Туризм", iconName: "Compass" },
  { id: "ped", title: "Педагог", iconName: "GraduationCap" },
  { id: "log", title: "Логистика", iconName: "Truck" },
  { id: "comm", title: "Коммерция", iconName: "Coins" },
  { id: "web", title: "Веб-дизайнер", iconName: "Palette" }
];

export const VIDEO_REVIEWS_DATA: VideoReview[] = [
  {
    id: "rev-1",
    studentName: "Алина Игнатова",
    universityName: "МФЮА",
    specialty: "Менеджмент и маркетинг",
    videoPoster: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=400",
    videoDuration: "1:24",
    reviewText: "Заказывала здесь отчет по производственной практике. Сделали за 2 дня, подтвердили в реальной компании, получила все печати и отлично защитилась на отлично! Огромная благодарность!"
  },
  {
    id: "rev-2",
    studentName: "Даниил Резцов",
    universityName: "РЭУ им. Плеханова",
    specialty: "Информационные технологии",
    videoPoster: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600&h=400",
    videoDuration: "2:05",
    reviewText: "Потребовалась срочная практика стандарт с печатью IT-компании. Обратился в «Практика Студента», документы были у меня на почте через 4 часа. Все печати мокрые, прошел антиплагиат на 94%."
  }
];

export const FOOTER_TAGS = [
  "Учебная практика",
  "Кейс-задачи",
  "Производственная практика",
  "Презентация",
  "Отчет по практике",
  "Диплом ВКР",
  "Диплом MBA",
  "Преддипломная практика",
  "Курсовая работа",
  "Дипломная работа",
  "Ознакомительная практика",
  "Практика в организации",
  "Судебная практика",
  "Презентация к отчету",
  "Синергия",
  "ВУЗы",
  "Техникумы",
  "Колледжи"
];

export const CONTACT_INFO = {
  primaryPhone: "8 912 016-62-60",
  secondaryPhone: "+7 (962) 918-05-03",
  primaryPhoneLink: "+79120166260",
  secondaryPhoneLink: "+79629180503",
  email: "PraktikaStudenta@yandex.ru",
  vkLink: "https://vk.com/praktika_studenta",
  telegram: "https://t.me/PraktikaStudentaBot",
  whatsapp: "https://wa.me/79120166260?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%2520%D0%9D%D1%83%D0%B6%D0%BD%D0%B0%2520%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%2520%D1%81%2520%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%BE%D0%B9",
  max: "https://max.ru/PraktikaStudenta",
  viber: "viber://chat?number=79120166260"
};

export interface DropdownItem {
  name: string;
  path: string;
  vuz?: string;
  type?: string;
}

export interface DropdownTab {
  tabTitle: string;
  parentPath: string;
  items: DropdownItem[];
}

export const NAV_DROPDOWN_DATA: DropdownTab[] = [
  {
    tabTitle: "Отчет по практике",
    parentPath: "/otchety-po-praktike",
    items: [
      { name: "Геодезическая практика", path: "/otchyot-po-praktike/geodezicheskaya/", type: "Геодезическая" },
      { name: "Дистанционная практика", path: "/otchyot-po-praktike/distanczionnaya/", type: "Дистанционная" },
      { name: "Изыскательская практика", path: "/otchyot-po-praktike/izyskatelnaya/", type: "Изыскательская" },
      { name: "Педагогическая практика", path: "/otchyot-po-praktike/pedagogicheskaya/", type: "Педагогическая" },
      { name: "Преддипломная практика", path: "/otchyot-po-praktike/preddiplomnaya/", type: "Преддипломная" },
      { name: "Производственная практика", path: "/otchyot-po-praktike/proizvodstvennaya/", type: "Производственная" },
      { name: "Технологическая практика", path: "/otchyot-po-praktike/tehnologicheskaya/", type: "Технологическая" },
      { name: "Учебно-ознакомительная", path: "/otchyot-po-praktike/uchebno-oznakomitelnaya/", type: "Ознакомительная" },
      { name: "Учебная практика", path: "/otchyot-po-praktike/uchebnaya/", type: "Учебная" },
      { name: "Эксплуатационная практика", path: "/otchyot-po-praktike/ekspluataczionnaya/", type: "Эксплуатационная" },
      { name: "Юридическая практика", path: "/otchyot-po-praktike/yuridicheskaya", type: "Юридическая" }
    ]
  },
  {
    tabTitle: "Полезные статьи",
    parentPath: "/useful-articles",
    items: [
      { name: "Как пройти тесты и экзамен МОСАП в 2026", path: "/rating/kak-proiti-testy-mosap/", type: "Тесты" },
      { name: "Как проходит защита диплома и ВКР", path: "/rating/kak-prohodit-zashhita-diploma-i-vkr/", type: "ВКР" },
      { name: "Руководство по написанию дипломной", path: "/rating/rukovodstvo-po-napisaniyu-diplomnoi/", type: "ВКР" },
      { name: "Как написать аннотацию к ВКР по ГОСТу", path: "/rating/kak-napisat-annotaciyu-vkr/", type: "ВКР" },
      { name: "Как написать курсовую работу", path: "/rating/kak-napisat-kursovuyu-rabotu/", type: "Курсовые" },
      { name: "Аннотация для курсовой работы", path: "/rating/annotaciya-dlya-kursovoi/", type: "Курсовые" },
      { name: "Основная часть курсовой ОАНО ВО МТИ", path: "/rating/osnovnaya-chast-kursovoi-mti/", type: "Курсовые" },
      { name: "Лабораторная работа по метрологии", path: "/rating/laboratornaya-po-metrologii/", type: "Лабораторные" },
      { name: "Лабораторная по автоматизации техпроцессов", path: "/rating/laboratornaya-po-avtomatizacii/", type: "Лабораторные" },
      { name: "Лабораторная по программированию", path: "/rating/laboratornaya-po-programmirovaniyu/", type: "Лабораторные" },
      { name: "Результаты прохождения практики МТИ", path: "/rating/rezultaty-praktiki-mti/", type: "Практика" },
      { name: "Основная часть отчета МФЮА", path: "/rating/osnovnaya-chast-otcheta-mfyua/", type: "Практика" },
      { name: "Аттестационный лист Синергия", path: "/rating/attestacionnyi-list-synergy/", type: "Практика" },
      { name: "Качественная работа студенческой НИР в ВУЗе", path: "/nir-nauchno-issledovatelskaya-rabota/", type: "Полезные статьи" },
      { name: "Как успешно защитить ВКР в МТИ", path: "/rating/kak-uspeshno-zashhitit-diplom-vkr-v-mti-v-2026-godu-podrobnoe-rukovodstvo-s-primerami/", type: "Полезные статьи" },
      { name: "Писать отчет самостоятельно или заказать?", path: "/rating/mozhno-li-zakazat-otchet-po-uchebnoj-praktike-v-mti-v-2026-godu-или-проще-написать-самому/", type: "Полезные статьи" }
    ]
  },
  {
    tabTitle: "Другие виды работ",
    parentPath: "/other-works",
    items: [
      { name: "Выпускные квалификационные работы (ВКР)", path: "/vkr/", type: "ВКР" },
      { name: "Практика в ВУЗе и колледже в 2026 году", path: "/vuz-college/", type: "ВУЗы и колледжи" },
      { name: "Курсовые работы с гарантией", path: "/kursovye/", type: "Курсовые" },
      { name: "Лабораторные работы и расчеты", path: "/laboratornye/", type: "Лабораторные" },
      { name: "Рефераты и теоретические эссе", path: "/referaty/", type: "Рефераты" },
      { name: "Прохождение тестов и экзаменов онлайн", path: "/testy/", type: "Тесты" }
    ]
  }
];

export interface VuzPracticeItem {
  id: string;
  name: string;
  vuz: string;
  type: string;
  path: string;
  iconName: "GraduationCap" | "BookOpen" | "FileText";
}

export const VUZ_PRACTICES_DATA: VuzPracticeItem[] = [
  {
    id: "vuz-1",
    name: "Отчёт по практике (обобщённый)",
    vuz: "Все направления",
    type: "обобщённый",
    path: "#",
    iconName: "FileText"
  },
  {
    id: "vuz-2",
    name: "Учебная практика",
    vuz: "Первичные навыки",
    type: "Учебная",
    path: "#",
    iconName: "GraduationCap"
  },
  {
    id: "vuz-3",
    name: "Производственная практика",
    vuz: "Профессиональный опыт",
    type: "Производственная",
    path: "#",
    iconName: "BookOpen"
  },
  {
    id: "vuz-4",
    name: "Преддипломная практика",
    vuz: "Итоговая подготовка",
    type: "Преддипломная",
    path: "#",
    iconName: "GraduationCap"
  },
  {
    id: "vuz-5",
    name: "НИР",
    vuz: "Научные исследования",
    type: "НИР",
    path: "#",
    iconName: "FileText"
  },
  {
    id: "vuz-6",
    name: "Технологическая практика",
    vuz: "Инженерный опыт",
    type: "Технологическая",
    path: "#",
    iconName: "BookOpen"
  },
  {
    id: "vuz-7",
    name: "Геодезическая практика",
    vuz: "Полевые измерения",
    type: "Геодезическая",
    path: "#",
    iconName: "BookOpen"
  },
  {
    id: "vuz-8",
    name: "Ознакомительная практика",
    vuz: "Первичный обзор компании",
    type: "Ознакомительная",
    path: "#",
    iconName: "BookOpen"
  },
  {
    id: "vuz-9",
    name: "Педагогическая практика",
    vuz: "Преподавательская работа",
    type: "Педагогическая",
    path: "#",
    iconName: "GraduationCap"
  },
  {
    id: "vuz-10",
    name: "Изыскательная практика",
    vuz: "Полевые изыскания",
    type: "Изыскательная",
    path: "#",
    iconName: "BookOpen"
  },
  {
    id: "vuz-11",
    name: "Изыскательская практика",
    vuz: "Проектные изыскания",
    type: "Изыскательская",
    path: "#",
    iconName: "BookOpen"
  },
  {
    id: "vuz-12",
    name: "Эксплуатационная практика",
    vuz: "Обслуживание техники",
    type: "Эксплуатационная",
    path: "#",
    iconName: "BookOpen"
  }
];

