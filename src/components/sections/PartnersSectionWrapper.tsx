// PartnersSectionWrapper.tsx
import { Locale } from 'next-intl';
import PartnersSectionClient from './PartnersSectionClient';

type Props = {
  locale: Locale;
  className?: string;
};

export default async function PartnersSectionWrapper({ locale, className }: Props) {
  // Загружаем переводы на сервере
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = messages.Partners;

  return <PartnersSectionClient t={t} className={className} />;
}