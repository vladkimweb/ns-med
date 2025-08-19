// PartnersSectionClient.tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

type PartnerKeys =
  | 'title' | 'subtitle'
  | 'id_title' | 'id_description'
  | 'view_title' | 'view_description'
  | 'incheon_sejong_title' | 'incheon_sejong_description'
  | 'hangil_title' | 'hangil_description'
  | 'live_dental_title' | 'live_dental_description'
  | 'vance_clinic_title' | 'vance_clinic_description';

interface Partner {
  slug: string;
  imageSrc: string;
  imageAlt: string;
  titleKey: PartnerKeys;
  descriptionKey: PartnerKeys;
}

type Props = {
  t: Record<PartnerKeys, string>;
  className?: string;
};

export default function PartnersSectionClient({ t, className }: Props) {

  const partners: Partner[] = [
    {
      slug: 'id-hospital',
      imageSrc: '/clinics/id-hospital.jpg',
      imageAlt: 'Samsung Medical Center',
      titleKey: 'id_title',
      descriptionKey: 'id_description'
    },
    {
      slug: 'view',
      imageSrc: '/clinics/view-hospital.jpg',
      imageAlt: 'View Plastic Surgery Clinic',
      titleKey: 'view_title',
      descriptionKey: 'view_description'
    },
    {
      slug: 'incheon-sejong',
      imageSrc: '/clinics/incheon-sejong.jpeg',
      imageAlt: 'Incheon Sejong Hospital – International Healthcare Center',
      titleKey: 'incheon_sejong_title',
      descriptionKey: 'incheon_sejong_description'
    },
    {
      slug: 'hangil-eye-hospital',
      imageSrc: '/clinics/hangil.jpg',
      imageAlt: 'HanGil Medical Center',
      titleKey: 'hangil_title',
      descriptionKey: 'hangil_description'
    },
    {
      slug: 'live-dental',
      imageSrc: '/clinics/live-dental.jpg',
      imageAlt: 'Live Dental Hospital',
      titleKey: 'live_dental_title',
      descriptionKey: 'live_dental_description'
    },
    {
      slug: 'vance-clinic',
      imageSrc: '/clinics/vance-clinic.jpg',
      imageAlt: 'Vance Clinic, Namdong-gu',
      titleKey: 'vance_clinic_title',
      descriptionKey: 'vance_clinic_description'
    }
  ];

  return (
    <section className={className}>

      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl uppercase font-bold text-primary mb-5">
          {t['title']}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{t['subtitle']}</p>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.slug}>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="relative h-50 mb-6">
                <Image
                  src={partner.imageSrc}
                  alt={partner.imageAlt}
                  fill
                  className="object-center object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t[partner.titleKey]}</h3>
              <p className="text-gray-600">{t[partner.descriptionKey]}</p>
              <Link href={`/clinics/${partner.slug}`}>
                <div className="mt-4 flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-800 transition-colors">
                  <span>Подробнее</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}