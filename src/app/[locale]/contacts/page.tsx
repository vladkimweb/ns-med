
import { MapPin, Phone } from 'lucide-react'


export default function ContactsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10 space-y-16">
      {/* Заголовок */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary uppercase">Наши офисы</h1>
        <p className="text-gray-600 mt-2">Свяжитесь с нами любым удобным способом</p>
      </section>

      {/* Блок с офисами */}
      <section className="grid md:grid-cols-3 gap-8">
        <Office
          city="Санкт-Петербург"
          address="17-я линия В.О., д. 4–6, лит. Е, оф. Т-214"
          phones={['+7 (961) 707-62-54']}
        />
        <Office
          city="Москва"
          address="ул. Профсоюзная, 65 к1, 4 этаж"
          phones={['+7 (916) 210-43-28', '+7 (920) 186-50-99']}
        />
        <Office
          city="Южная Корея"
          address="김해시 호계로 438번길 16-1 (부원동)"
          phones={['+82 10-7441-0757', '+82 70-4001-0757']}
        />
      </section>

      {/* Карта */}
      <section>
        <h2 className="text-2xl text-center font-semibold mb-4 text-primary uppercase">Мы на карте</h2>

        <div
          className="w-full max-w-3xl h-[450px] rounded-xl overflow-hidden shadow-md mx-auto"
          dangerouslySetInnerHTML={{
            __html: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4e6eb17fea5eea417c9c4fec49c4346f13a98d20caadbd2da740f0107fca0904&amp;width=100%25&amp;height=450&amp;lang=ru_RU&amp;scroll=true"></script>`,
          }}
        />
      </section>

      {/* Соцсети */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-primary uppercase">Мы в соцсетях</h2>
        <div className="flex justify-center gap-6">
          <a href="https://t.me/your_channel" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">Telegram</a>
          <a href="https://instagram.com/your_profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">Instagram</a>
          <a href="https://youtube.com/your_channel" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">YouTube</a>
        </div>
      </section>
      {/* Фото офиса */}
      {/* <section>
        <h2 className="text-2xl font-semibold mb-4 text-primary">Фото офиса</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Image src="/office/spb.jpg" alt="Офис СПб" width={600} height={400} className="rounded-xl w-full object-cover" />
          <Image src="/office/moscow.jpg" alt="Офис Москва" width={600} height={400} className="rounded-xl w-full object-cover" />
        </div>
      </section> */}

      {/* Форма 
      <section>

        <ContactForm />
      </section>
*/}

    </main>
  )
}

function Office({ city, address, phones }: { city: string; address: string; phones: string[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-3 border">
      <div className="text-xl font-semibold text-primary">{city}</div>
      <div className="flex items-start gap-2 text-gray-700">
        <MapPin size={18} className="mt-1" />
        <p>{address}</p>
      </div>
      {phones.map((phone) => (
        <div key={phone} className="flex items-start gap-2 text-gray-700">
          <Phone size={18} className="mt-1" />
          <a href={`tel:${phone.replace(/[^+\d]/g, '')}`}>{phone}</a>
        </div>
      ))}
    </div>
  )
}