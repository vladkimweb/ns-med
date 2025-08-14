// PartnersSectionClient.tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

type PartnerKeys =
  | 'title' | 'subtitle'
  | 'id_title' | 'id_description'
  | 'view_title' | 'view_description'
  | 'incheon_sejong_title' | 'incheon_sejong_description'
  | 'gachon_gil_title' | 'gachon_gil_description'
  | 'live_dental_title' | 'live_dental_description'
  | 'vance_clinic_title' | 'vance_clinic_description';

interface Partner {
  id: string;
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
      id: 'id',
      imageSrc: '/partners/id-hospital.jpg',
      imageAlt: 'Samsung Medical Center',
      titleKey: 'id_title',
      descriptionKey: 'id_description'
    },
    {
      id: 'view',
      imageSrc: '/partners/view-hospital.jpg',
      imageAlt: 'Seoul National University Hospital',
      titleKey: 'view_title',
      descriptionKey: 'view_description'
    },
    {
      id: 'incheon-sejong',
      imageSrc: '/partners/incheon-sejong.jpeg',
      imageAlt: 'Incheon Sejong Hospital – International Healthcare Center',
      titleKey: 'incheon_sejong_title',
      descriptionKey: 'incheon_sejong_description'
    },
    {
      id: 'gachon-gil',
      imageSrc: '/partners/gachon-gil.jpg',
      imageAlt: 'Gachon University Gil Medical Center',
      titleKey: 'gachon_gil_title',
      descriptionKey: 'gachon_gil_description'
    },
    {
      id: 'live-dental',
      imageSrc: '/partners/live-dental.jpg',
      imageAlt: 'Live Dental Hospital',
      titleKey: 'live_dental_title',
      descriptionKey: 'live_dental_description'
    },
    {
      id: 'vance-clinic',
      imageSrc: '/partners/vance-clinic.jpg',
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
          <SwiperSlide key={partner.id}>
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}