import React from "react";
import Link from "next/link";
import { ModalForm } from "./forms/ModalForm";
// =============================
// Types
// =============================
export type Doctor = {
  name: string;
  title?: string;
  experienceYears?: number;
  languages?: string[]; // e.g., ["русский", "английский", "корейский"]
  photo?: string; // url or /public path
  highlights?: string[]; // key achievements / specialties
};

export type Equipment = {
  name: string;
  description?: string;
  photo?: string; // optional thumbnail
};
export type Specializations = {
  name: string;
  photo?: string; // optional thumbnail
};

export type Clinic = {
  slug: string;
  name: string;
  tagline?: string;
  city: string;
  country: string;
  address?: string;
  foundedYear?: number;
  accreditations?: string[]; // e.g., ["JCI", "KAHF"]
  summary?: string;
  heroImage?: string; // big cover image
  gallery?: string[]; // room photos
  facts?: { label: string; value: string }[]; // extra facts like "специалистов: 120"
  specializations?: Specializations[];
  doctors?: Doctor[];
  equipment?: Equipment[];
  amenities?: string[]; // e.g., ["Одноместные палаты", "Wi‑Fi", "Питание"]
  internationalServices?: string[]; // override default list below
};

// =============================
// UI Helpers
// =============================
const Section: React.FC<{
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}> = ({ id, title, subtitle, children }) => (
  <section id={id} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
    <div className="mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="text-sm sm:text-base text-muted-foreground mt-2">{subtitle}</p>}
    </div>
    {children}
  </section>
);

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm leading-5">
    {children}
  </span>
);

// Default services our company provides for foreign patients
const DEFAULT_INTL_SERVICES = [
  "Русскоязычный переводчик на всех этапах",
  "Подбор и бронирование отеля",
  "Трансферы аэропорт ⇄ клиника ⇄ отель",
  "Координатор и сопровождение в клинике",
  "Подготовка документов, помощь с визой",
];

// =============================
// Main Component
// =============================
export default function ClinicPageTemplate({ clinic }: { clinic: Clinic }) {
  const {
    name,
    tagline,
    city,
    country,
    address,
    foundedYear,
    accreditations,
    summary,
    heroImage,
    gallery,
    facts,
    specializations,
    doctors,
    equipment,
    amenities,
    internationalServices,
  } = clinic;

  const intlServices = internationalServices?.length
    ? internationalServices
    : DEFAULT_INTL_SERVICES;

  return (
    <div className="w-full">
      {/* =============================
          1. Hero
      ============================= */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {heroImage ? (
            // Using <img> for simplicity across projects (no Next Image domain config required here)
            <img
              src={heroImage}
              alt={name}
              className="h-full w-full object-cover object-center opacity-80"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-primary/15 via-background to-muted" />
          )}
        </div>
        <div className="backdrop-blur-sm/50 bg-background/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
                {name}
              </h1>
              <p className="mt-3 text-base sm:text-lg text-muted-foreground">
                {tagline || "Современная медицина для иностранных пациентов"}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                <Badge>📍 {city}, {country}</Badge>
                {foundedYear && <Badge>🏛️ Основана: {foundedYear}</Badge>}
                {accreditations?.map((acc) => (
                  <Badge key={acc}>🏅 {acc}</Badge>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {/* <a href="#intl" className="rounded-2xl px-4 py-2 border shadow-sm hover:shadow-md transition">Получить консультацию</a> */}
                <ModalForm />
                {address && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                    className="rounded-2xl border bg-background/70 hover:bg-background transition
                    px-6 py-3  font-medium"
                  >
                    Открыть на карте
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero */}
      {/* <PageHero title={clinic.name} subtitle={clinic.description} /> */}


      {/* =============================
          2. О клинике (Краткое описание + факты)
      ============================= */}
      <Section id="about" title="О клинике">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            {summary ? (
              <p className="text-base leading-relaxed">{summary}</p>
            ) : (
              <p className="text-base leading-relaxed text-muted-foreground">
                Здесь будет краткое описание клиники: опыт специалистов, направления работы, подход к безопасности и качеству лечения, открытость к иностранным пациентам.
              </p>
            )}
          </div>
          <div className="md:col-span-1">
            <div className="grid grid-cols-2 gap-3">
              {/* Basic location fact */}
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-muted-foreground">Локация</p>
                <p className="text-sm font-medium">{city}, {country}</p>
              </div>
              {/* Accreditations */}
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-muted-foreground">Аккредитации</p>
                <p className="text-sm font-medium">{accreditations?.length ? accreditations.join(", ") : "—"}</p>
              </div>
              {/* Founded */}
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-muted-foreground">Год основания</p>
                <p className="text-sm font-medium">{foundedYear ?? "—"}</p>
              </div>
              {/* Extra facts */}
              {(facts?.length ? facts : []).slice(0, 3).map((f) => (
                <div key={f.label} className="rounded-2xl border p-4">
                  <p className="text-xs text-muted-foreground">{f.label}</p>
                  <p className="text-sm font-medium">{f.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* =============================
          3. Специализация
      ============================= */}
      {/* <Section id="specializations" title="Специализация">
        {specializations?.length ? (
          <div className="flex flex-wrap gap-2">
            {specializations.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Добавьте направления, например: офтальмология, онкология, кардиология.</p>
        )}
      </Section> */}
      <Section id="specializations" title="Специализации">
        {specializations?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((e) => (
              <article key={e.name} className="rounded-2xl border p-4 space-y-2 h-full">
                {e.photo ? (
                  <img src={e.photo} alt={e.name} className="w-full h-36 object-cover rounded-xl" />
                ) : null}
                <h3 className="text-base font-semibold">{e.name}</h3>

              </article>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Укажите ключевое оборудование: лазерные системы, робот-хирург, 3D-диагностика и т. п.</p>
        )}
      </Section>

      {/* =============================
          4. Врачи
      ============================= */}
      <Section id="doctors" title="Врачи" subtitle="Ведущие специалисты клиники">
        {doctors?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((d) => (
              <article key={d.name} className="rounded-2xl border overflow-hidden hover:shadow-sm transition">
                {d.photo ? (
                  <img src={d.photo} alt={d.name} className="w-full h-55 object-contain" />
                ) : (
                  <div className="w-full h-44 bg-muted" />
                )}
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">{d.name}</h3>
                  <p className="text-sm text-muted-foreground">{d.title || "Врач-специалист"}</p>
                  {/* <div className="flex flex-wrap gap-2 text-xs">
                    {typeof d.experienceYears === "number" && (
                      <Badge>Опыт: {d.experienceYears}+ лет</Badge>
                    )}
                    {d.languages?.length && (
                      <Badge>Языки: {d.languages.join(", ")}</Badge>
                    )}
                  </div> */}
                  {d.highlights?.length ? (
                    <ul className="mt-2 list-disc list-inside text-sm">
                      {d.highlights.slice(0, 5).map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Добавьте карточки ведущих врачей с опытом и языками.</p>
        )}
      </Section>

      {/* =============================
          5. Оборудование и технологии
      ============================= */}
      <Section id="equipment" title="Оборудование и технологии">
        {equipment?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((e) => (
              <article key={e.name} className="rounded-2xl border p-4 space-y-2 h-full">
                {e.photo ? (
                  <img src={e.photo} alt={e.name} className="w-full h-36 object-cover rounded-xl" />
                ) : null}
                <h3 className="text-base font-semibold">{e.name}</h3>
                {e.description && (
                  <p className="text-sm text-muted-foreground">{e.description}</p>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Укажите ключевое оборудование: лазерные системы, робот-хирург, 3D-диагностика и т. п.</p>
        )}
      </Section>

      {/* =============================
          6. Услуги для иностранных пациентов (от вашей компании)
      ============================= */}
      <Section id="intl" title="Для иностранных пациентов" subtitle="NS MedTravel организует лечение и путешествие">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {intlServices.map((s) => (
                <li key={s} className="rounded-2xl border p-4 text-sm">{s}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {/* <Link href="#contact" className="rounded-2xl px-4 py-2 border shadow-sm hover:shadow-md transition">
                Оставить заявку
              </Link> */}
              <Link href="/contacts" className="bg-primary text-gray-800 hover:bg-blue-300 px-6 py-3 rounded-2xl font-medium transition-colors ">
                Контакты
              </Link>
            </div>
          </div>
          <div className="md:col-span-1 space-y-3">
            <div className="rounded-2xl border p-4">
              <p className="text-sm font-medium">Перевод на русском</p>
              <p className="text-xs text-muted-foreground">Переводчик сопровождает вас на консультациях, обследованиях и операции.</p>
            </div>
            <div className="rounded-2xl border p-4">
              <p className="text-sm font-medium">Проживание и транспорт</p>
              <p className="text-xs text-muted-foreground">Подбор отеля рядом с клиникой, трансферы из аэропорта и между локациями.</p>
            </div>
            <div className="rounded-2xl border p-4">
              <p className="text-sm font-medium">Поддержка 24/7</p>
              <p className="text-xs text-muted-foreground">Личный координатор на связи в мессенджере.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* =============================
          7. Условия пребывания (палаты, удобства)
      ============================= */}
      <Section id="stay" title="Условия пребывания" subtitle="Палаты и удобства для комфортного восстановления">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {gallery?.length ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {gallery.slice(0, 6).map((src, i) => (
                  <img key={src + i} src={src} alt={`Галерея ${i + 1}`} className="w-full h-32 sm:h-40 object-cover rounded-xl" />)
                )}
              </div>
            ) : (
              <div className="rounded-2xl border p-6 text-muted-foreground text-sm">
                Добавьте 3–6 фото палат, ресепшена, столовой.
              </div>
            )}
          </div>
          <div className="lg:col-span-1">
            {amenities?.length ? (
              <ul className="grid grid-cols-1 gap-3">
                {amenities.map((a) => (
                  <li key={a} className="rounded-2xl border p-4 text-sm">{a}</li>
                ))}
              </ul>
            ) : (
              <div className="rounded-2xl border p-6 text-muted-foreground text-sm">
                Примеры удобств: одноместные палаты, Wi‑Fi, питание, койка для сопровождающего, детская зона.
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Optional contact anchor if you want to connect a form */}
      <div id="contact" />
    </div>
  );
}

// =============================
// Example usage (app/clinics/[slug]/page.tsx)
// =============================
// import { clinics } from "@/data/clinics"; // where you store your data
// import ClinicPageTemplate from "@/components/ClinicPageTemplate";
//
// export default function Page({ params }: { params: { slug: string } }) {
//   const clinic = clinics.find((c) => c.slug === params.slug);
//   if (!clinic) return <div className="p-8">Клиника не найдена</div>;
//   return <ClinicPageTemplate clinic={clinic} />;
// }
//
// =============================
// Example data shape (data/clinics.ts)
// =============================
// export const clinics: Clinic[] = [
//   {
//     slug: "seoul-eye-center",
//     name: "Seoul Eye Center",
//     tagline: "Современная офтальмология в центре Сеула",
//     city: "Сеул",
//     country: "Южная Корея",
//     address: "Seoul, Gangnam-gu, …",
//     foundedYear: 2003,
//     accreditations: ["JCI"],
//     summary: "Клиника специализируется на лазерной коррекции зрения и катаракте, ежегодно принимает пациентов из 20+ стран.",
//     heroImage: "/images/clinics/seoul-eye/hero.jpg",
//     gallery: [
//       "/images/clinics/seoul-eye/room1.jpg",
//       "/images/clinics/seoul-eye/room2.jpg",
//       "/images/clinics/seoul-eye/lobby.jpg",
//     ],
//     facts: [
//       { label: "Специалистов", value: "35+" },
//       { label: "Операций в год", value: "10 000+" },
//       { label: "Иностранные пациенты", value: "2 000+ / год" },
//     ],
//     specializations: ["Офтальмология", "Катаракта", "ЛАСИК/ЛАСЭК"],
//     doctors: [
//       {
//         name: "Dr. Kim Joon-ho",
//         title: "Офтальмохирург",
//         experienceYears: 18,
//         languages: ["корейский", "английский"],
//         photo: "/images/doctors/kim-joonho.jpg",
//         highlights: ["ЛАСИК/Смайл Про", "Катаракта", "ICL"],
//       },
//     ],
//     equipment: [
//       { name: "Лазер VisuMax 800", description: "SMILE Pro последнего поколения", photo: "/images/equipment/visumax.jpg" },
//       { name: "IOLMaster 700", description: "Точная биометрия для катаракты" },
//     ],
//     amenities: ["Одноместные палаты", "Wi‑Fi", "Питание", "Койка для сопровождающего"],
//     internationalServices: [
//       "Русскоязычный переводчик",
//       "Подбор отеля",
//       "Трансферы",
//       "Сопровождение в клинике",
//     ],
//   },
// ];
