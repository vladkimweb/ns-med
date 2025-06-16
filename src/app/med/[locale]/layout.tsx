import { notFound } from 'next/navigation';
import { Locale, hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { Inter, Days_One, Merriweather } from 'next/font/google'
import { routing } from '@/i18n/routing';
import Navigation from '@/components/Navigation';
import './styles.css';
import { Footer } from '@/components/Footer'

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const days_one = Days_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-days-one',
  display: 'swap',
})

const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin', 'cyrillic'],
  variable: '--font-merriweather',
  display: 'swap',
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html className={`${inter.variable} ${days_one.variable} ${merriweather.variable} bg-background`} lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Navigation />

          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// className={clsx('flex h-full flex-col')}