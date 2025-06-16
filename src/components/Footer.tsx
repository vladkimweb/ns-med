import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Основные разделы */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* О компании */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-400">NS Medical</h3>
            <p className="text-gray-300">
              Организация медицинского туризма в лучшие клиники мира с 2010 года
            </p>
            <div className="flex space-x-4">
              <Link href="https://wa.me/+821074410757" className="text-gray-400 hover:text-teal-400 transition">
                <FaWhatsapp size={32} />
              </Link>
              {/* <Link href="#" className="text-gray-400 hover:text-teal-400 transition">
                <FaWhatsapp size={20} />
              </Link> */}
            </div>
          </div>

          {/* Направления */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Направления</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/departments/dentistry" className="hover:text-teal-400 transition">Стоматология</Link></li>
              <li><Link href="/departments/plastic-surgery" className="hover:text-teal-400 transition">Пластическая хирургия</Link></li>
              <li><Link href="/departments/dermatology" className="hover:text-teal-400 transition">Дерматология</Link></li>
            </ul>
          </div>

          {/* Услуги */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services/diagnostics" className="hover:text-teal-400 transition">Диагностика</Link></li>
              <li><Link href="/services/surgery" className="hover:text-teal-400 transition">Хирургия</Link></li>
              <li><Link href="/services/rehabilitation" className="hover:text-teal-400 transition">Реабилитация</Link></li>
              <li><Link href="/services/logistics" className="hover:text-teal-400 transition">Организация поездки</Link></li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Контакты</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 flex-shrink-0" size={18} />
                <div>
                  <a href="tel:+79119460707">+7 (911) 946-07-07</a>
                  <p className="text-sm text-gray-400">Круглосуточно</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 flex-shrink-0" size={18} />
                <a href="mailto:Nsgroup1809@gmail.com">Написать на эл.почту</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0" size={18} />
                <p>Адрес</p>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 NS Med Travel. Все права защищены
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-teal-400 text-sm transition">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}