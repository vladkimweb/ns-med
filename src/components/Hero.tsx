import { useTranslations } from 'next-intl';
import { ModalForm } from './ModalForm';

export function Hero() {
  const t = useTranslations('IndexPage');
  return (
    <div className="relative w-full min-h-[calc(100vh-64px)] grid place-items-center">
      {/* Видеофон */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero-video.webm" type="video/webm" />
        Ваш браузер не поддерживает видео.
      </video>
      {/* Затемнение поверх видео (по желанию) */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      {/* Фоновое изображение */}
      {/* <div className="absolute inset-0">
        <Image
          src="/hero.jpg" // Укажите правильный путь к изображению
          alt="Медицинский туризм"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div> */}

      {/* Контент поверх изображения */}
      <div className="top-[64px] relative z-10 container mx-auto h-full grid grid-cols-1 items-center">
        {/* Пустой блок слева (1/3) */}
        {/* <div className="lg:col-span-1"></div> */}

        {/* Контентный блок (2/3)  lg:grid-cols-2 lg:col-span-1*/}
        <div className="text-center px-4 lg:px0">
          <h1 className="uppercase text-white text-4xl md:text-6xl font-bold mb-4">
            {t.rich('title')}
          </h1>
          <p className="text-xl text-white mb-8 ">{t.rich('description')}</p>
          <ModalForm />
          {/* <Button href="/contacts" className='!bg-background !text-gray-800 !hover:bg-background/80'>{t('getConsultation')}</Button> */}
        </div>
      </div>
    </div>
  );
}