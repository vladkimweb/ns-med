'use client'
import { useState } from 'react'
import { X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Form } from './Form' // Ваш компонент формы

export function ModalForm() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('ContactForm')

  return (
    <>
      {/* Кнопка открытия модалки */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-background text-gray-800 hover:bg-background/80 px-6 py-3 rounded-2xl font-medium transition-colors"
      >
        {t('getConsultation')}
      </button>

      {/* Модальное окно */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Затемнение фона */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Контент модалки */}
          <div className="relative bg-white rounded-xl max-w-md w-full mx-auto p-6 z-10">
            {/* Кнопка закрытия */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            {/* Заголовок */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary uppercase tracking-wide mb-12">
              {t('title')}
            </h2>

            {/* Форма */}
            <Form onSuccess={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}