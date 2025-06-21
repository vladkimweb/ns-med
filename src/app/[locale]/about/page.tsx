import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import { Users, Clock, CheckCircle, Check, Settings, HeartHandshake } from 'lucide-react';
import { ModalForm } from '@/components/ModalForm';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function About({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('About');

  return (
    <main className="relative py-20 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок с акцентом */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="relative z-10">{t('title')}</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 z-0 opacity-50"></span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-8"></div>
        </div>

        {/* Сетка разделов */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Кто мы */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-500">
            <div className="flex items-start mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{t('whoWeAre.title')}</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>{t('whoWeAre.p1')}</p>
              <p>{t('whoWeAre.p2')}</p>
            </div>
          </div>

          {/* Наша история */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-teal-500">
            <div className="flex items-start mb-6">
              <div className="bg-teal-100 p-3 rounded-lg mr-4">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{t('history.title')}</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>{t('history.p1')}</p>
              <p>{t('history.p2')}</p>
            </div>
          </div>

          {/* Что мы предлагаем */}
          <div className="lg:col-span-2 bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl shadow-xl">
            <div className="flex items-start mb-6">
              <div className="bg-blue-500 p-3 rounded-lg mr-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{t('services.title')}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-teal-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">{t(`services.items.${i}`)}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-600 italic">{t('services.note')}</p>
            </div>
          </div>

          {/* Как мы работаем */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-purple-500">
            <div className="flex items-start mb-6">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Settings className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{t('workflow.title')}</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>{t('workflow.p1')}</p>
              <p>{t('workflow.p2')}</p>
            </div>
          </div>

          {/* Кто за этим стоит */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-indigo-500">
            <div className="flex items-start mb-6">
              <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                <HeartHandshake className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{t('team.title')}</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>{t('team.p1')}</p>
              <p>{t('team.p2')}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-20 text-center bg-gradient-to-r from-blue-600 to-teal-500 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t('cta.title')}</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">{t('cta.description')}</p>
            <ModalForm />
          </div>
        </div>
      </div>
    </main>

  );
}