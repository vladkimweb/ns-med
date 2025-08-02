import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import Step from '@/components/Step';

import DirectionsSection from '@/components/DirectionsSection';
import ContactForm from '@/components/ContactForm';
import { Hero } from '@/components/Hero';
import PartnersSection from '@/components/PartnersSection'

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function IndexPage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  return (
    <>

      <Hero />
      <main className='relative container mx-auto px-4 lg:px-0'>

        {/* Направления лечения */}
        <DirectionsSection />
        <PartnersSection />

        {/* Как получить лечение */}
        <section>
          <h2 className="text-center text-3xl md:text-4xl  uppercase font-bold text-primary">{t('title-how')}</h2>
          <div className="mt-10">
            <Step number={1} title={t('steps.step1.title')} description={t('steps.step1.desc')} />
            <Step number={2} title={t('steps.step2.title')} description={t('steps.step2.desc')} />
            <Step number={3} title={t('steps.step3.title')} description={t('steps.step3.desc')} />
            <Step number={4} title={t('steps.step4.title')} description={t('steps.step4.desc')} />
          </div>
        </section>

        <ContactForm />


      </main>
    </>
  );
}