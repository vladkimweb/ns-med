// DirectionsSectionClient.tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Card from '@/components/ui/Card';
import { Hospital } from 'lucide-react';

type Props = {
  t: any; // Можно потом типизировать
  className?: string;
};

export default function DirectionsSectionClient({ t, className }: Props) {
  const slides = [
    'plastic', 'dermatology', 'dental', 'internal',
    'ent', 'obgyn', 'checkup', 'ophthalmology', 'oncology'
  ];

  return (
    <section className={className}>
      <h2 className="text-center text-3xl md:text-4xl uppercase font-bold text-primary mb-10">
        {t['departments']}
      </h2>


      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((key) => (
          <SwiperSlide key={key}>
            <Card
              title={t[key]['title']}
              description={t[key]['desc']}
              icon={<Hospital />}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}