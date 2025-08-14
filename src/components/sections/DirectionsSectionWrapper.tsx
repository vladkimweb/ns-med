import { Locale } from 'next-intl';
import DirectionsSectionClient from './DirectionsSectionClient';

type Props = {
  locale: Locale;
  className?: string;
};

export default async function DirectionsSectionWrapper({ locale, className }: Props) {
  // Загружаем переводы на сервере
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = messages.Directions;


  return <DirectionsSectionClient t={t} className={className} />;
}