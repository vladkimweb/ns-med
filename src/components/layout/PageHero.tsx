type PageHeroProps = {
  title: string
  subtitle: string
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative py-24 flex justify-center items-center text-center overflow-hidden">
      {/* Светлый фон с эффектом перелива */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-white" />

      {/* Полупрозрачная стеклянная панель */}
      <div
        className="
          relative z-10 px-8 py-10 rounded-3xl
          bg-white/50 backdrop-blur-2xl
          border border-white/40
        "
      >
        <h1 className="text-5xl font-bold tracking-tight text-primary">
          {title}
        </h1>
        <p className="mt-3 text-lg text-gray-700">{subtitle}</p>
      </div>

      {/* Мягкие световые круги для глубины */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl" />
    </section>
  )
}