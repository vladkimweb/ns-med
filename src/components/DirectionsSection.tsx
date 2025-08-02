"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useTranslations } from 'next-intl';
import { Navigation, Pagination } from 'swiper/modules'
import Card from '@/components/Card';
import { Hospital } from 'lucide-react';

export default function DirectionsSection() {
  const t = useTranslations('Directions');

  return (
    <section>
      <h2 className="text-center text-3xl md:text-4xl uppercase font-bold text-primary">
        {t('departments')}
      </h2>

      <div className="mt-10">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <Card
              title={t('plastic.title')}
              description={t('plastic.desc')}
              icon={<Hospital />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={t('dermatology.title')}
              description={t('dermatology.desc')}
              icon={<Hospital />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={t('dental.title')}
              description={t('dental.desc')}
              icon={<Hospital />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={t('internal.title')}
              description={t('internal.desc')}
              icon={<Hospital />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={t('ent.title')}
              description={t('ent.desc')}
              icon={<Hospital />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={t('obgyn.title')}
              description={t('obgyn.desc')}
              icon={<Hospital />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={t('checkup.title')}
              description={t('checkup.desc')}
              icon={<Hospital />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={t('ophthalmology.title')}
              description={t('ophthalmology.desc')}
              icon={<Hospital />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={t('oncology.title')}
              description={t('oncology.desc')}
              icon={<Hospital />}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}