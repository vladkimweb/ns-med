"use client";

import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';
import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function Navigation() {
  const t = useTranslations('Navigation');
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Решение для гидратации (hydration)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="z-20 top-0 left-0 w-full bg-gray-100">
      {/* Верхняя строка с телефоном и языком */}
      <div className="hidden md:flex items-center justify-between text-sm text-gray-700 py-2 mx-auto px-4 container">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <span>📍 СПб: 17-я линия В.О., д. 4–6, лит. Е, оф. Т-214</span>
          <span>📞 СПб: <a href="tel:+79617076254" className="hover:underline">+7 (961) 707-62-54</a></span>
          <span>📍 МСК: ул. Профсоюзная, 65 к1, 4 этаж</span>
          <span>📞 МСК:
            <a href="tel:+79162104328" className="hover:underline ml-1">+7 (916) 210-43-28</a>,
            <a href="tel:+79201865099" className="hover:underline ml-1">+7 (920) 186-50-99</a>
          </span>
        </div>
        <LocaleSwitcher />
      </div>
      <nav className='bg-white'>
        {/* Десктопное меню */}
        <div className="hidden md:flex justify-between py-3 container mx-auto px-4">
          <span className='flex items-center gap-2'>
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="Logo NS Group"
            // className='mr-23'
            />
            <NavigationLink href="/"><h3 className="text-2xl font-semibold text-gray-800 ">
              {t('name')}
            </h3></NavigationLink>
          </span>
          <div className="flex items-center justify-center gap-4">
            {/* <NavigationLink href="/">{t('home')}</NavigationLink> */}
            <NavigationLink href="/services">{t('services')}</NavigationLink>
            <NavigationLink href="/about">{t('about')}</NavigationLink>
            <NavigationLink href="/blog">{t('blog')}</NavigationLink>
            <NavigationLink href="/contacts">{t('contacts')}</NavigationLink>
            {/* <LocaleSwitcher /> */}
          </div>
          {/* <a className="border-2 border-primary text-primary py-3 px-6 rounded-2xl" href="tel:+79119460707">{t('call')}</a> */}
        </div>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <div className="flex justify-between items-center px-4 py-3">
            <NavigationLink href="/">
              <h3 className="text-lg font-semibold text-gray-800">{t('name')}</h3>
            </NavigationLink>
            <div className="flex items-center gap-4">
              <LocaleSwitcher />
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? t('close_menu') : t('open_menu')}
                aria-expanded={isOpen}
                className="p-1"
              >
                {isMounted && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* SSR-дружественное меню */}
          <div
            className={`${isOpen ? 'block' : 'hidden'} bg-white pb-4 shadow-md transition-all duration-300`}
            aria-hidden={!isOpen}
          >
            <div className="flex flex-col items-center gap-3 px-4">
              <NavigationLink href="/" onClick={() => setIsOpen(false)}>
                {t('home')}
              </NavigationLink>
              <NavigationLink href="/services" onClick={() => setIsOpen(false)}>
                {t('services')}
              </NavigationLink>
              <NavigationLink href="/about" onClick={() => setIsOpen(false)}>
                {t('about')}
              </NavigationLink>
              <NavigationLink href="/contacts" onClick={() => setIsOpen(false)}>
                {t('contacts')}
              </NavigationLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}