import Image from 'next/image';
import { useTranslations } from 'next-intl';

type PartnerKeys =
  | 'id_title'
  | 'id_description'
  | 'view_title'
  | 'view_description'
  | 'incheon_sejong_title'
  | 'incheon_sejong_description'
  | 'hangil_title'
  | 'hangil_description'
  | 'live_dental_title'
  | 'live_dental_description'
  | 'vance_clinic_title'
  | 'vance_clinic_description';

interface Partner {
  id: string;
  imageSrc: string;
  imageAlt: string;
  titleKey: PartnerKeys;
  descriptionKey: PartnerKeys;
}

export default function PartnersSection() {
  const t = useTranslations('Partners');

  // Конфигурация партнеров - легко добавлять новые
  const partners: Partner[] = [
    {
      id: 'id',
      imageSrc: '/clinics/id-hospital.jpg',
      imageAlt: 'Samsung Medical Center',
      titleKey: 'id_title',
      descriptionKey: 'id_description'
    },
    {
      id: 'view',
      imageSrc: '/clinics/view-hospital.jpg',
      imageAlt: 'Seoul National University Hospital',
      titleKey: 'view_title',
      descriptionKey: 'view_description'
    },
    {
      id: 'incheon-sejong',
      imageSrc: '/clinics/incheon-sejong.jpeg',
      imageAlt: 'Incheon Sejong Hospital – International Healthcare Center',
      titleKey: 'incheon_sejong_title',
      descriptionKey: 'incheon_sejong_description'
    },
    {
      id: 'hangil-eye-hospital',
      imageSrc: '/clinics/hangil.jpg',
      imageAlt: 'Hangil Medical Center',
      titleKey: 'hangil_title',
      descriptionKey: 'hangil_description'
    },
    {
      id: 'live-dental',
      imageSrc: '/clinics/live-dental.jpg',
      imageAlt: 'Live Dental Hospital',
      titleKey: 'live_dental_title',
      descriptionKey: 'live_dental_description'
    },
    {
      id: 'vance-clinic',
      imageSrc: '/clinics/vance-clinic.jpg',
      imageAlt: 'Vance Clinic, Namdong-gu',
      titleKey: 'vance_clinic_title',
      descriptionKey: 'vance_clinic_description'
    }
    // Добавляйте новых партнеров здесь:
    // 1. Добавьте новые ключи в тип PartnerKeys выше
    // 2. Добавьте объект партнера:
    // {
    //   id: 'new_partner',
    //   imageSrc: '/partners/new-partner.jpg',
    //   imageAlt: 'New Partner Name',
    //   titleKey: 'new_partner_title',
    //   descriptionKey: 'new_partner_description'
    // }
  ];

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-center text-3xl md:text-4xl uppercase font-bold text-primary mb-5">
            {t('title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="relative h-50 mb-6">
                <Image
                  src={partner.imageSrc}
                  alt={partner.imageAlt}
                  fill
                  className="object-center object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t(partner.titleKey)}
              </h3>
              <p className="text-gray-600">
                {t(partner.descriptionKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <button className="text-primary font-medium hover:underline">
            {t('view_all_partners')} →
          </button> */}
        </div>
      </div>
    </section>
  );
}