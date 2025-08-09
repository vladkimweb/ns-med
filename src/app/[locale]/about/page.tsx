import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Вадим Ким',
    position: 'Генеральный директор',
    photo: '/team/vadim.JPG',
    alt: 'Вадим Ким - Генеральный директор'
  },
  {
    id: 2,
    name: 'Екатерина Пак',
    position: 'Мед-координатор',
    photo: '/team/ekaterina.JPG',
    alt: 'Екатерина Пак - Мед-координатор'
  },
  {
    id: 3,
    name: 'Виктория',
    position: 'Мед-координатор',
    photo: '/team/viktoria.jpg',
    alt: 'Виктория - Мед-координатор'
  },
  {
    id: 4,
    name: 'Владислав Ким',
    position: 'Разработчик, маркетолог',
    photo: '/team/vladislav.jpeg',
    alt: 'Владислав Ким - Разработчик, маркетолог'
  }
];

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 space-y-24">
      {/* Заголовок */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-primary mb-4">О нас</h1>
        <p className="text-gray-600 text-lg">
          Профессиональная медицинская координация и поддержка
        </p>
      </section>

      {/* Основная информация */}
      <section className="grid md:grid-cols-2 gap-10">
        <InfoCard
          title="Кто мы"
          text={[
            'Мы — команда профессионалов, специализирующихся на медицинской координации и поддержке пациентов.',
            'Наша миссия — обеспечить качественную и своевременную медицинскую помощь через профессиональную координацию всех процессов.'
          ]}
        />
        <InfoCard
          title="Наша история"
          text={[
            'Компания основана с целью улучшения качества медицинского обслуживания через эффективную координацию.',
            'За годы работы мы помогли тысячам пациентов получить необходимую медицинскую помощь в нужное время.'
          ]}
        />
      </section>

      {/* Наши услуги */}
      <section>
        <h2 className="text-3xl text-center font-bold mb-10 text-primary">
          Наши услуги
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="Медицинская координация"
            description="Организация всех этапов лечения и взаимодействие с медицинскими учреждениями"
          />
          <ServiceCard
            title="Поддержка пациентов"
            description="Индивидуальное сопровождение на всех этапах медицинского процесса"
          />
          <ServiceCard
            title="Консультации"
            description="Профессиональные консультации по вопросам здравоохранения"
          />
        </div>
      </section>

      {/* Наша команда */}
      <section>
        <h2 className="text-3xl text-center font-bold mb-6 text-primary">
          Наша команда
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Профессионалы с многолетним опытом в медицинской сфере
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-xl shadow-md border text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-primary/30 hover:ring-primary transition duration-300">
                <Image
                  src={member.photo}
                  alt={member.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="160px"
                />
              </div>
              <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Почему выбирают нас */}
      <section>
        <h2 className="text-3xl text-center font-bold mb-10 text-primary">
          Почему выбирают нас
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <AdvantageCard
            title="Опыт"
            description="Многолетний опыт работы в медицинской сфере и глубокое понимание всех процессов"
          />
          <AdvantageCard
            title="Качество"
            description="Высокие стандарты обслуживания и профессиональный подход к каждому случаю"
          />
          <AdvantageCard
            title="Забота"
            description="Индивидуальный подход и внимание к потребностям каждого пациента"
          />
        </div>
      </section>

      {/* Статистика */}
      <section className="bg-primary/5 p-10 rounded-xl shadow-md border">
        <h2 className="text-3xl text-center font-bold mb-10 text-primary">
          Наши достижения
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <StatItem value="1000+" label="Довольных пациентов" />
          <StatItem value="5+" label="Лет опыта" />
          <StatItem value="24/7" label="Поддержка" />
          <StatItem value="100%" label="Качество" />
        </div>
      </section>

      {/* Контактная форма */}
      {/* <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">
            Свяжитесь с нами
          </h2>
          <p className="text-gray-600">
            Готовы ответить на ваши вопросы и помочь
          </p>
        </div>
        <ModalForm />
      </section> */}
    </main>
  );
}

// Отдельные компоненты

function InfoCard({ title, text }: { title: string; text: string[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border space-y-4">
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <div className="text-gray-700 space-y-2">
        {text.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}

function AdvantageCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-4xl font-bold text-primary mb-1">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}