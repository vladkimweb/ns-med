// Пример для Pages Router (/pages/thanks.tsx)
import { useTranslations } from 'next-intl';

export default function ThanksPage() {
  const t = useTranslations('ThanksPage');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">✓ {t('title')}</h1>
        <p className="text-gray-600">{t('message')}</p>
      </div>
    </div>
  );
}