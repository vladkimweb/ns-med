// app/services/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Наши услуги | Медицинский туризм и координация',
  description:
    'Комплексные услуги по медицинскому туризму: подбор клиник и врачей, организация поездки, сопровождение, проживание, реабилитация и дополнительные сервисы.',
};

type ServiceCategory = {
  title: string;
  items: string[];
};

const categories: ServiceCategory[] = [
  {
    title: 'Консультации',
    items: [
      'Подбор клиники и врача под ваш диагноз и бюджет',
      'Организация онлайн-консультаций до поездки',
      'Перевод медицинских документов',
    ],
  },
  {
    title: 'Организация поездки',
    items: [
      'Бронирование авиабилетов',
      'Визовая поддержка и страхование',
      'Трансфер из/в аэропорт',
    ],
  },
  {
    title: 'Медицинские услуги',
    items: [
      'Запись на обследования, анализы и операции',
      'Сопровождение переводчиком в клинике',
      'Контроль за медицинским планом',
    ],
  },
  {
    title: 'Проживание и быт',
    items: [
      'Бронирование отеля, апартаментов или санатория',
      'Организация питания (в том числе лечебного)',
      'Аренда автомобиля или личного водителя',
    ],
  },
  {
    title: 'Реабилитация',
    items: [
      'Пребывание в реабилитационном центре',
      'Онлайн-контроль состояния после возвращения',
      'Закупка и доставка лекарств на родину',
    ],
  },
  {
    title: 'Дополнительный сервис',
    items: [
      'Экскурсионная программа',
      'VIP-услуги (личный ассистент, отдельная палата)',
      'Поддержка сопровождающих родственников',
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      {/* Заголовок страницы */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-primary mb-4 uppercase">
          Наши услуги
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Мы предоставляем полный спектр услуг по медицинскому туризму — от
          первой консультации до завершения реабилитации.
        </p>
      </section>

      {/* Список категорий */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">
              {cat.title}
            </h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              {cat.items.map((item) => (
                <li key={item} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Готовы начать лечение за границей?
        </h2>
        <p className="text-gray-600 mb-8">
          Свяжитесь с нами, и мы подберём оптимальное решение под ваши нужды.
        </p>
        <Link
          href="/contacts"
          className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-xl shadow hover:bg-primary/90 transition-colors duration-300"
        >
          Связаться с нами
        </Link>
      </section>
    </main>
  );
}