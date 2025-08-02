import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');


  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Основные разделы */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">

          {/* О компании */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-400">{t('companyName')}</h3>
            <p className="text-gray-300">
              {t('companyDescription')}
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://wa.me/+821074410757"
                className="text-gray-400 hover:text-teal-400 transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={32} />
              </Link>
            </div>
          </div>

          {/* Направления */}
          {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('departments.title')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/departments/dentistry" className="hover:text-teal-400 transition">
                  {t('departments.dentistry')}
                </Link>
              </li>
              <li>
                <Link href="/departments/plastic-surgery" className="hover:text-teal-400 transition">
                  {t('departments.plasticSurgery')}
                </Link>
              </li>
              <li>
                <Link href="/departments/dermatology" className="hover:text-teal-400 transition">
                  {t('departments.dermatology')}
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Контакты */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('contacts.title')}</h4>
            <div className="space-y-3 text-gray-300">
              {/* Телефон общий */}
              {/* <div className="flex items-start gap-3">
                <Phone className="mt-1 flex-shrink-0" size={18} />
                <div>
                  <a href="tel:+79617076254">+7 (961) 707-62-54</a>
                  <p className="text-sm text-gray-400">{t('contacts.availability')}</p>
                </div>
              </div> */}

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="mt-1 flex-shrink-0" size={18} />
                <a href="mailto:sale@ns-group.com">{t('contacts.email')}</a>
              </div>

              {/* Санкт-Петербург */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="font-semibold">Санкт-Петербург:</p>
                  <p>17-я линия В.О., д. 4–6, лит. Е, оф. Т-214</p>
                  <a href="tel:+79617076254" className="block">+7 (961) 707-62-54</a>
                </div>
              </div>

              {/* Москва */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="font-semibold">Москва:</p>
                  <p>ул. Профсоюзная, 65 к1, 4 этаж</p>
                  <a href="tel:+79162104328" className="block">+7 (916) 210-43-28</a>
                  <a href="tel:+79201865099" className="block">+7 (920) 186-50-99</a>
                </div>
              </div>

              {/* Южная Корея */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="font-semibold">Южная Корея:</p>
                  <p>김해시 호계로 438번길 16-1 (부원동)</p>
                  <a href="tel:+821074410757" className="block">+82 10-7441-0757</a>
                  <a href="tel:+827040010757" className="block">+82 70-4001-0757</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {t('copyright')}. 사업자등록증: 638-10-02855
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-teal-400 text-sm transition">
              {t('privacyPolicy')}
            </Link>
            <a href="vladislavkim.com" className="text-gray-400 hover:text-teal-400 text-sm transition">
              {t('powerby')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}