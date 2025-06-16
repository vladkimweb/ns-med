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
    <header className="fixed z-20 top-0 left-0 w-full bg-background shadow-sm">
      <nav>
        {/* Десктопное меню */}
        <div className="hidden md:flex  justify-between py-2 container mx-auto">
          <span className='flex flex-wrap items-center gap-2'>
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="Logo NS Group"
            // className='mr-23'
            />
            <h3 className="text-xl text-gray-500 ">
              {t('name')}
            </h3>
          </span>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <NavigationLink href="/">{t('home')}</NavigationLink>
            <NavigationLink href="/services">{t('services')}</NavigationLink>
            <NavigationLink href="/about">{t('about')}</NavigationLink>
            <NavigationLink href="/contacts">{t('contacts')}</NavigationLink>
            <NavigationLink href="/contacts">{t('help')}</NavigationLink>
            <LocaleSwitcher />
          </div>


        </div>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <div className="flex justify-between items-center px-4 py-3">
            <h3 className="text-lg font-semibold text-green-600">{t('name')}</h3>
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