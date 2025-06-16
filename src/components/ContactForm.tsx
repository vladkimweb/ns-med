import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Button from './Button';

export default function ContactForm() {
  const t = useTranslations('ContactForm');

  return (
    <section className='container mx-auto bg-green-50 p-10 rounded-3xl'>
      <h2 className="text-4xl text-center font-bold text-primary mb-10">{t('title')}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        {/* Текст и форма - занимает 2 колонки из 3 на десктопе */}
        <div className="lg:col-span-2 space-y-6">
          <p className="text-gray-600">{t('description')}</p>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder={t('name')}
              className="border rounded-lg px-4 py-3"
            />
            <input
              type="email"
              placeholder={t('email')}
              className="border rounded-lg px-4 py-3"
            />
            <textarea
              placeholder={t('message')}
              rows={4}
              className="border rounded-lg px-4 py-3"
            />
            <Button href="#">{t('submit')}</Button>
          </form>
        </div>

        {/* Фото - занимает 1 колонку из 3 на десктопе */}
        <div className="relative h-[400px] w-full hidden lg:block">
          <Image
            src="/hero-img4.png"
            alt="Consultant"
            width={500}
            height={300}
            className="rounded-2xl w-full h-full object-cover"
            style={{
              maxWidth: '100%',
              objectPosition: 'center' // Центрируем изображение
            }}
          />
        </div>
      </div>
    </section>
  );
}