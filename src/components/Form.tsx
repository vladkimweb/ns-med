'use client'
import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useForm, ValidationError } from '@formspree/react';
import React from 'react';


export function Form({ onSuccess }: { onSuccess?: () => void }) {
  const t = useTranslations('ContactForm');
  const [state, handleSubmit] = useForm("xrbkknjl");
  // if (state.succeeded && onSuccess) {
  //   return (
  //     <meta http-equiv="refresh" content="0; url=/thanks" />
  //   );
  // }

  const router = useRouter();

  React.useEffect(() => {
    if (state.succeeded && onSuccess) {
      router.push('/thanks');
    }
  }, [state.succeeded, router]);
  // if (state.succeeded && onSuccess) {
  //   onSuccess() // Закрываем модалку после успешной отправки
  // }

  return (
    <>
      {/* Форма */}
      < div className="max-w-xl mx-auto" >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Поле NAME */}
          <div>
            <label htmlFor="name" className="block uppercase text-sm  font-bold tracking-wider mb-1">
              {t('nameLabel')} <span className="text-primary">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-primary outline-none"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="block text-red-500 text-sm mt-1"
            />
          </div>

          {/* Поле PHONE */}
          <div>
            <label htmlFor="phone" className="block uppercase text-sm font-bold tracking-wider mb-1">
              {t('phoneLabel')} <span className="text-primary">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-primary outline-none"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
              className="block text-red-500 text-sm mt-1"
            />
          </div>

          {/* Поле MESSAGE */}
          <div>
            <label htmlFor="message" className="block uppercase text-sm font-bold tracking-wider mb-1">
              {t('messageLabel')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-primary outline-none"
            />
          </div>

          {/* Чекбокс */}
          <div className="flex items-start">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              required
              className="mt-1 mr-3"
            />
            <label htmlFor="privacy" className="text-sm">
              {t('privacyText')}
            </label>
          </div>

          {/* Разделитель */}
          <div className="border-t border-gray-200 my-6"></div>

          {/* Сообщения об ошибках */}
          {state.errors && (
            <div className="text-red-500 text-sm space-y-1">
              {Object.entries(state.errors).map(([field, error]) => (
                <p key={field}>** {error.message}</p>
              ))}
            </div>
          )}

          {/* Кнопка отправки */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-primary rounded-2xl text-white py-4 px-6 uppercase font-bold tracking-wider hover:bg-blue-800 transition duration-200"
          >
            {state.submitting ? t('submittingText') : t('submitText')}
          </button>
        </form>
      </div >
    </>
  );
}