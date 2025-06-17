'use client'
import { useTranslations } from 'next-intl';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const t = useTranslations('ContactForm');
  const [state, handleSubmit] = useForm("xrbkknjl");
  if (state.succeeded) {
    return (
      <meta http-equiv="refresh" content="0; url=/thanks" />
    );
  }
  // const router = useRouter();

  // React.useEffect(() => {
  //   if (state.succeeded) {
  //     router.push('/thanks');
  //   }
  // }, [state.succeeded, router]);

  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary uppercase tracking-wide mb-12">
          {t('title')}
        </h2>

        {/* Форма */}
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Поле NAME */}
            <div>
              <label htmlFor="name" className="block uppercase text-sm font-bold tracking-wider mb-1">
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

            {/* Поле EMAIL */}
            <div>
              <label htmlFor="email" className="block uppercase text-sm font-bold tracking-wider mb-1">
                {t('emailLabel')} <span className="text-primary">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-primary outline-none"
              />
              <ValidationError
                prefix="Email"
                field="email"
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
        </div>
      </div>
    </section>
  );
}