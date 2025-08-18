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
  doctors: [
    {
      name: "Санг Хун Парк M.D., Ph.D.",
      title: "Пластический Хирург",
      // experienceYears: 20,
      // languages: ["корейский", "английский"],
      photo: "/clinics/doctors/sang-hoon-park.jpg",
      // highlights: [
      //   "Специалист по челюстно-лицевой хирургии",
      //   "Автор 30+ научных публикаций",
      //   "Член Корейской ассоциации пластических хирургов"
      // ]
    },
    {
      name: "Жи Хёк Ли M.D., M.S.",
      title: "Пластический хирург",
      photo: "/clinics/doctors/ji-hyuck-lee.jpg",
      // highlights: [
      //   "Специалист по пластике носа и глаз",
      //   "Более 15 лет опыта",
      //   "Член Корейской ассоциации пластических хирургов"
      // ]
  },
    {
      name: "Ёнг Те Со M.D.",
      title: "Пластический хирург",
      photo: "/clinics/doctors/young-tae-seo.jpg",
      // highlights: [
      //   "Специалист по пластике груди и контурингу тела",
      //   "Более 10 лет опыта",
      //   "Член Корейской ассоциации пластических хирургов"
      // ]
  },
    {
      name: "Ин Сок Хванг M.D.",
      title: "Пластический хирург",
      photo: "/clinics/doctors/in-seok-hwang.jpg",
      // highlights: [
      //   "Специалист по пластике груди и контурингу тела",
      //   "Более 10 лет опыта",
      //   "Член Корейской ассоциации пластических хирургов"
      // ]
  }
  ],
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
    slug: "seoul-eye-center",
    name: "Seoul Eye Center",
    tagline: "Современная офтальмология в центре Сеула",
    city: "Сеул",
    country: "Южная Корея",
    address: "Seoul, Gangnam-gu, …",
    foundedYear: 2003,
    accreditations: ["JCI"],
    summary: "Клиника специализируется на лазерной коррекции зрения и катаракте, ежегодно принимает пациентов из 20+ стран.",
    heroImage: "/images/clinics/seoul-eye/hero.jpg",
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
    // specializations: ["Офтальмология", "Катаракта", "ЛАСИК/ЛАСЭК"],
    doctors: [
      {
        name: "Dr. Kim Joon-ho",
        title: "Офтальмохирург",
        experienceYears: 18,
        languages: ["корейский", "английский"],
        photo: "/images/doctors/kim-joonho.jpg",
        highlights: ["ЛАСИК/Смайл Про", "Катаракта", "ICL"],
      },
    ],
    equipment: [
      { name: "Лазер VisuMax 800", description: "SMILE Pro последнего поколения", photo: "/images/equipment/visumax.jpg" },
      { name: "IOLMaster 700", description: "Точная биометрия для катаракты" },
    ],
    amenities: ["Одноместные палаты", "Wi-Fi", "Питание", "Койка для сопровождающего"],
    internationalServices: [
      "Русскоязычный переводчик",
      "Подбор отеля",
      "Трансферы",
      "Сопровождение в клинике",
    ],
  },
];
