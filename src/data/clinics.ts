import { Clinic } from "@/components/ClinicPageTemplate";

export const clinics: Clinic[] = [
  {
    slug: "id-hospital",
    name: "ID Hospital",
    tagline: "Азиатский лидер в пластической и челюстно-лицевой хирургии",
    city: "Сеул",
    country: "Южная Корея",
    address: "ID Hospital Korea",
    foundedYear: 1995,
    accreditations: ["MH&W (Ministry of Health & Welfare)", "OMTF (Outstanding Medical Travel Facilitator)", "JCI (Joint Commission International)"],
    summary: "Первая в Корее специализированная клиника пластической и челюстно-лицевой хирургии, аккредитованная Министерством здравоохранения и международной комиссией JCI. Клиника ежегодно принимает тысячи пациентов из 20+ стран, предоставляя полный сервис для иностранных гостей.",
    heroImage: "/clinics/id-hospital.jpg",
    gallery: [
      "/clinics/id-hospital/room1.jpg",
      "/clinics/id-hospital/room4.jpg",
    ],
    facts: [
      { label: "Специалистов", value: "60+" },
      { label: "Операций в год", value: "20 000+" },
      { label: "Иностранные пациенты", value: "5 000+ / год" },
    ],
    // specializations: [
    //   "Оттогнастика",
    //   "Коррекция выступающего рта",
    //   "Контуринг лица",
    //   "Пластика глаз-Пластика носа",
    //   "Омоложение · эластичность",
    //   "Пластика груди · Контуринг тела",
    //   "Анестезиология",
    //   "Ортодонтия"
    // ],
    specializations: [
      { name: "Оттогнастика", photo: "/clinics/id-hospital/spec1.jpg" },
      { name: "Коррекция выступающего рта", photo: "/clinics/id-hospital/spec2.jpg" },
      { name: "Контуринг лица", photo: "/clinics/id-hospital/spec3.jpg" },
      { name: "Пластика глаз-Пластика носа", photo: "/clinics/id-hospital/spec4.jpg" },
      { name: "Омоложение · эластичность", photo: "/clinics/id-hospital/spec5.jpg" },
      { name: "Пластика груди · Контуринг тела", photo: "/clinics/id-hospital/spec6.jpg" },
      { name: "Анестезиология", photo: "/clinics/id-hospital/spec7.jpg" },
      { name: "Ортодонтия", photo: "/clinics/id-hospital/spec8.jpg" }
    ],
    // doctors: [
    //   {
    //     name: "Санг Хун Парк M.D., Ph.D.",
    //     title: "Пластический Хирург",
    //     // experienceYears: 20,
    //     // languages: ["корейский", "английский"],
    //     photo: "/clinics/doctors/sang-hoon-park.jpg",
    //     // highlights: [
    //     //   "Специалист по челюстно-лицевой хирургии",
    //     //   "Автор 30+ научных публикаций",
    //     //   "Член Корейской ассоциации пластических хирургов"
    //     // ]
    //   },
    //   {
    //     name: "Жи Хёк Ли M.D., M.S.",
    //     title: "Пластический хирург",
    //     photo: "/clinics/doctors/ji-hyuck-lee.jpg",
    //     // highlights: [
    //     //   "Специалист по пластике носа и глаз",
    //     //   "Более 15 лет опыта",
    //     //   "Член Корейской ассоциации пластических хирургов"
    //     // ]
    // },
    //   {
    //     name: "Ёнг Те Со M.D.",
    //     title: "Пластический хирург",
    //     photo: "/clinics/doctors/young-tae-seo.jpg",
    //     // highlights: [
    //     //   "Специалист по пластике груди и контурингу тела",
    //     //   "Более 10 лет опыта",
    //     //   "Член Корейской ассоциации пластических хирургов"
    //     // ]
    // },
    //   {
    //     name: "Ин Сок Хванг M.D.",
    //     title: "Пластический хирург",
    //     photo: "/clinics/doctors/in-seok-hwang.jpg",
    //     // highlights: [
    //     //   "Специалист по пластике груди и контурингу тела",
    //     //   "Более 10 лет опыта",
    //     //   "Член Корейской ассоциации пластических хирургов"
    //     // ]
    // }
    // ],
    equipment: [
      {
        name: "Система воздушного душа", photo: "/clinics/id-hospital/room5.jpg"
      },
      { name: "Система бесперебойного электро-питания", photo: "/clinics/id-hospital/room7.jpg", },
      { name: "Система центрального отслеживания/управления", photo: "/clinics/id-hospital/room6.jpg" },
      { name: "Система диагностирования", photo: "/clinics/id-hospital/room3.jpg" },
      { name: "Система 3D компьютерной томографии для точной диагностики", photo: "/clinics/id-hospital/room2.jpg" },
    ],
    amenities: [
      "Одноместные и VIP-палаты",
      "Wi-Fi",
      "Персональное питание",
      "Койка для сопровождающего",
      "Зона отдыха для пациентов"
    ],
    internationalServices: [
      "Русскоязычный переводчик",
      "Координаторы для иностранных пациентов",
      "Подбор отеля",
      "Трансферы из аэропорта",
      "Полное сопровождение в клинике"
    ],
  },
  {
    slug: "view",
    name: "View Plastic Surgery Clinic",
    tagline: "Лидер в пластической хирургии с VIP-обслуживанием",
    city: "Сеул",
    country: "Южная Корея",
    address: "107 Bongeunsa-ro, Gangnam-gu, Seoul, Korea View Plastic Surgery Clinic",
    foundedYear: 2005,
    accreditations: ["JCI"],
    summary: "Клиника пластической хирургии View, известная самым высоким показателем использования имплантатов Motiva в 2023 году и обслуживанием VIP-комнат, специализируется на маммопластике, контурной пластике лица, ортогнатической хирургии, хирургии глаза и носа, а также омолаживающих процедурах. Клиника располагает самым современным оборудованием и систематическим уходом, обеспечивающим безопасность и высокую степень удовлетворенности пациентов. Кроме того, профессиональные координаторы и услуги многоязычного переводчика обеспечивают иностранным пациентам наилучший уровень медицинского обслуживания.",
    heroImage: "/clinics/view-hospital.jpg",
    gallery: [
      "/images/clinics/seoul-eye/room1.jpg",
      "/images/clinics/seoul-eye/room2.jpg",
      "/images/clinics/seoul-eye/lobby.jpg",
    ],
    facts: [
      { label: "Специалистов", value: "35+" },
      { label: "Операций в год", value: "10 000+" },
      { label: "Иностранные пациенты", value: "2 000+ / год" },
    ],
    specializations: [
      { name: "Оттогнастика" },
      { name: "Коррекция выступающего рта" },
      { name: "Контуринг лица" },
      { name: "Пластика глаз-Пластика носа" },
      { name: "Омоложение · эластичность" },
      { name: "Пластика груди · Контуринг тела" },
      { name: "Анестезиология" },
      { name: "Ортодонтия" }
    ],
    equipment: [
      { name: "3D-CT", photo: "/clinics/equipment/real-3d-ct.png" },
      { name: "Morpheus 3D", photo: "/clinics/equipment/real-Morpheus.png" },
      { name: "X-RAY", photo: "/clinics/equipment/real-xray.png" },
      { name: "Bone Scalpel", photo: "/clinics/equipment/real-Cabel.png" },
      { name: "HD Breast Ultrasound", photo: "/clinics/equipment/real-hd-ultrasonicwave.png" },
      { name: "Mammotome", photo: "/clinics/equipment/real-Mammoth.png" },
      { name: "Endoscope", photo: "/clinics/equipment/real-Endoscope.png" },
      { name: "3D Vectra", photo: "/clinics/equipment/real-3d-vectra.png" },
      { name: "Self pain control device", photo: "/clinics/equipment/real-Paincontrol.png" },
      { name: "Fine needle aspiration cytology", photo: "/clinics/equipment/real-Cytology.png" },
      { name: "Sonic center biopsy", photo: "/clinics/equipment/real-soundwave.png" },
    ],
    amenities: ["Одноместные палаты", "Wi-Fi", "Питание", "Койка для сопровождающего"],
    internationalServices: [
      "Русскоязычный переводчик",
      "Подбор отеля",
      "Трансферы",
      "Сопровождение в клинике",
    ],
  },
  {
    slug: "incheon-sejong",
    name: "Incheon Sejong Hospital",
    tagline: "Медицинский комплекс мирового уровня в Инчхоне. Ведущий университет в области кардиохирургии",
    city: "Инчхон",
    country: "Южная Корея",
    address: "20 Geyangmunhwa-ro, Gyeyang-gu, Incheon, South Korea",
    foundedYear: 2017,
    accreditations: ["Первый медицинский комплекс в Корее", "Рейтинг лучшая больница Incheon (Patients' Experience)", "Top-level Private General Hospital (Newsweek)"],
    summary: "Первый в Корее медицинский комплекс, основанный в 2017 году; включает 28 медицинских специализаций и 22 специализированных центра. Ежегодно принимает около 6 000 иностранных пациентов с сердечными заболеваниями и обеспечен интегрированным уходом и сервисом международного уровня.",
    heroImage: "/clinics/incheon-sejong/new.jpg", // можно заменить на актуальное
    gallery: [
      "/clinics/incheon-sejong/building.jpg",
      "/clinics/incheon-sejong/equip.webp",
      "/clinics/incheon-sejong/lobby.jpg",
      "/clinics/incheon-sejong/room.jpeg",
      "/clinics/incheon-sejong/robotic-surgery.jpg"
    ],
    facts: [
      { label: "Год открытия", value: "2017" },
      { label: "Специализированных центров", value: "22" },
      { label: "Медицинских специализаций", value: "28" },
      { label: "Иностранных пациентов/год", value: "6 000" }
    ],
    specializations: [
      {
        name:
          "Кардиохирургия (в том числе минимально инвазивная и искусственное сердце)"
      },
      {
        name: "Онкология (в том числе роботизированная хирургия)"
      },
      {
        name: "Неврология / Инсульт"
      },
      {
        name: "Педиатрия"
      },
      {
        name: "Женское здоровье"
      },
      {
        name: "Офтальмология (Hangil Eye Center)"
      },
      {
        name: "Ортопедия / Позвоночник и суставы"
      },
      {
        name: "Роботизированная и Минимально-инвазивная хирургия"
      }
    ],
    equipment: [
      { name: "9-этажный медицинский комплекс", description: "Медицинский комплекс с 326 койками и специализированными лабораториями" },
      { name: "Роботизированная хирургия", description: "Современное оборудование для высокоточной хирургии", photo: "/clinics/incheon-sejong/robotic-surgery.jpg" },
      
    ],
    amenities: [
      "Международная палата для иностранных пациентов",
      "Wi-Fi во всех зонах",
      "Переводчики и международный координационный центр",
      "Быстрый доступ к центрам диагностики и уходу"
    ],
    internationalServices: [
      "Международная служба: переводчики и координация 24/7",
      "Поддержка иностранных пациентов",
      "Просмотр на медицинскую службу и оформление документов"
    ]
  },
  {
  slug: "hangil-eye-hospital",
  name: "Hangil Eye Hospital",
  tagline: "Офтальмологический центр мирового уровня в Инчхоне",
  city: "Инчхон",
  country: "Южная Корея",
  address: "35 Bupyeong-daero, Bupyeong-gu, Incheon, South Korea",
  foundedYear: 1985,
  accreditations: [
    "Специализированный офтальмологический госпиталь (Минздрав Корея)",
    "Аккредитация Министерства здравоохранения и социального благополучия",
    "Медицинское учреждение по приёму иностранных пациентов",
    "Asia’s Top Private Hospital 2025 (Newsweek) – катаракта"
  ],
  summary: "Ведущий офтальмологический госпиталь Инчхона с более чем 250 000 пациентами в год и полной сетью специализированных центров. Благодаря опыту врачей, передовому оборудованию и интегрированному сервису 'one-stop', обеспечивает высокую безопасность и качество лечения.",
  heroImage: "/clinics/hangil.jpg",  // заменить на актуальное
  gallery: [
    "/clinics/hangil-eye/03_img_01.jpg",
    "/clinics/hangil-eye/03_img_02.jpg",
    "/clinics/hangil-eye/03_img_03.jpg",
    "/clinics/hangil-eye/03_img_04.jpg",
    "/clinics/hangil-eye/03_img_05.jpg",
    "/clinics/hangil-eye/03_img_06.jpg"
  ],
  facts: [
    { label: "Пациентов в год", value: "250 000+" },
    { label: "Год основания", value: "1985" },
    { label: "Штат врачей", value: "36+" },
    { label: "Специализированных центров", value: "6" }
  ],
  specializations: [
  { name: "Катаракта и роговица" },
  { name: "Сетчатка" },
  { name: "Глаукома" },
  { name: "Рефракционная хирургия (LASIK/LASEK/SMILE)" },
  { name: "Пластическая офтальмология" },
  { name: "Педиатрическая офтальмология / косоглазие / амблиопия" },
  { name: "Синдром сухого глаза" }
],
  // doctors: [
  //   // Конкретных имён врачей нет, можно указать placeholder или категорию
  //   { name: "Группа офтальмологов-специалистов", title: "Врачи всех направлений", experienceYears: undefined, languages: [], photo: undefined, highlights: [] }
  // ],
  equipment: [
    { name: "VISUCAM, OCT, Pentacam, ERG, IOLMaster, FAG и др.", description: "Более 200 видов современного офтальмологического оборудования" }
  ],
  amenities: [
    "One-day, One-stop обслуживание",
    "Международный офис",
    "Безопасность (анестезиология, внутренняя медицина)",
    "Удобное расположение и доступ"
  ],
  internationalServices: [
    "Обслуживание иностранных пациентов",
    "Координация и сопровождение",
    "Перевод на русском, английском, китайском",
    "Бронирование проживания и транспорта"
  ],
}
]