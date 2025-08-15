import { Metadata } from 'next';
import Link from 'next/link';

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Наши клиники | Медицинский туризм и координация',
  description:
    'Мы сотрудничаем с ведущими медицинскими учреждениями, предлагая широкий спектр услуг по медицинскому туризму.',
};

// Sample clinic data (replace with real data from API or CMS)
const clinics = [
  {
    id: 'id-hospital',
    name: 'ID Hospital',
    description: 'Ведущая клиника пластической хирургии в Сеуле, специализирующаяся на эстетических и реконструктивных процедурах.',
    image: '/clinics/id-hospital.jpg',
    link: '/clinics/id-hospital',
  },
  {
    id: 'sejong-hospital',
    name: 'Incheon Sejong Hospital',
    description: 'Международный медицинский центр, предлагающий передовые кардиологические и онкологические услуги.',
    image: '/clinics/sejong-hospital.jpg',
    link: '/clinics/sejong-hospital',
  },
  {
    id: 'gil-medical',
    name: 'Gachon University Gil Medical Center',
    description: 'Многопрофильная клиника с акцентом на неврологию и ортопедию.',
    image: '/clinics/gil-medical.jpg',
    link: '/clinics/gil-medical',
  },
];

export default function ClinicsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 uppercase tracking-tight">
            Наши клиники
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы сотрудничаем с ведущими медицинскими учреждениями, предлагая широкий спектр услуг по медицинскому туризму.
          </p>
        </div>
      </section>

      {/* Clinics Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinics.map((clinic) => (
            <div
              key={clinic.id}
              className="group relative bg-white/50 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative h-48">
                <img
                  src={clinic.image}
                  alt={clinic.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{clinic.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{clinic.description}</p>
                <Link
                  href={clinic.link}
                  className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-2 px-4 rounded-xl shadow-sm hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Готовы начать лечение за границей?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы подберём оптимальное решение под ваши нужды.
          </p>
          <Link
            href="/contacts"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-xl shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </main>
  );
}