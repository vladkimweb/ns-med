import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function PartnersSection() {
  const t = useTranslations('Partners');

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-center text-3xl md:text-4xl uppercase font-bold text-primary">{t('title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Карточка 1 */}

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="relative h-50 mb-6">
              <Image
                src="/partners/id-hospital.jpg"
                alt="Samsung Medical Center"
                fill
                className="object-center object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('id_title')}</h3>
            <p className="text-gray-600">
              {t('id_description')}
            </p>
          </div>

          {/* Карточка 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="relative h-50 mb-6">
              <Image
                src="/partners/view-hospital.jpg"
                alt="Seoul National University Hospital"
                fill
                className="object-center object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('view_title')}</h3>
            <p className="text-gray-600">
              {t('view_description')}
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="text-primary font-medium hover:underline">
            {t('view_all_partners')} →
          </button>
        </div>
      </div>

    </section >
  );
}