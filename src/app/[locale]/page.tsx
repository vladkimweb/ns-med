import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Step from '@/components/ui/Step';
import ContactForm from '@/components/forms/ContactForm';
import { Hero } from '@/components/layout/Hero';
import DirectionsSectionWrapper from '@/components/sections/DirectionsSectionWrapper';
import PartnersSectionWrapper from '@/components/sections/PartnersSectionWrapper';

type Props = {
  params: { locale: Locale };
};

export default async function IndexPage({ params }: Props) {
  const { locale } = await params; // await перед деструктуризацией

  // Устанавливаем локаль на сервере
  setRequestLocale(locale);

  // Импортируем переводы напрямую
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = messages.IndexPage;

  return (
    <>
      {/* Hero */}
      <Hero className="mb-24" />

      <main className="relative container mx-auto px-4 lg:px-0 flex flex-col">

        {/* Направления лечения */}
        <DirectionsSectionWrapper locale={locale} className="mb-24" />

        {/* Партнёры */}
        <PartnersSectionWrapper locale={locale} className="mb-24" />

        {/* Как получить лечение */}
        <section className="mb-24">
          <h2 className="text-center text-3xl md:text-4xl uppercase font-bold text-primary mb-10">
            {t['title-how']}
          </h2>
          <div className="flex flex-col space-y-8">
            <Step number={1} title={t['steps']['step1']['title']} description={t['steps']['step1']['desc']} />
            <Step number={2} title={t['steps']['step2']['title']} description={t['steps']['step2']['desc']} />
            <Step number={3} title={t['steps']['step3']['title']} description={t['steps']['step3']['desc']} />
            <Step number={4} title={t['steps']['step4']['title']} description={t['steps']['step4']['desc']} />
          </div>
        </section>

        {/* Форма контакта */}
        <ContactForm className="mb-24" />

      </main>
    </>
  );
}