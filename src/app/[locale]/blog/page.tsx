import Link from "next/link";
import Image from "next/image";
import { getAllPosts, formatDate } from "@/data/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      {/* Заголовок страницы */}
      <div className="bg-gradient-to-r flex flex-col justify-center items-center from-blue-500 to-cyan-500 min-h-[350px]">
        <h1 className="text-center text-4xl md:text-5xl text-white font-bold mb-6">
          Блог
        </h1>
        <p className="text-center text-xl text-blue-100 mb-6 max-w-2xl px-4">
          Последние новости и статьи о медицинском туризме в Южной Корее
        </p>
        <nav className="text-white text-sm mb-2" aria-label="Breadcrumb">
          <ol className="list-reset flex space-x-2">
            <li>
              <Link href="/" className="hover:underline">Главная</Link>
              <span className="mx-1">/</span>
            </li>
            <li className="text-white font-medium">Блог</li>
          </ol>
        </nav>
      </div>

      {/* Список постов */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Последние статьи
          </h2>
          <span className="text-gray-500 text-sm">
            {posts.length} {posts.length === 1 ? 'статья' : posts.length < 5 ? 'статьи' : 'статей'}
          </span>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Пока статей нет
            </h3>
            <p className="text-gray-500">
              Скоро здесь появятся интересные материалы о медицинском туризме
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                  {/* Обложка поста */}
                  {post.cover && (
                    <div className="overflow-hidden">
                      <Image
                        src={post.cover}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                        quality={85}
                      />
                    </div>
                  )}

                  <div className="p-6">
                    {/* Заголовок */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>

                    {/* Метаинформация */}
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <span>{post.author}</span>
                      </div>
                    </div>

                    {/* Краткое описание */}
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Ссылка "Читать далее" */}
                    <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-800 transition-colors">
                      <span>Читать далее</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

// Метаданные для SEO
export const metadata = {
  title: 'Блог | Медицинский туризм в Корее',
  description: 'Последние новости и статьи о медицинском туризме в Южной Корее. Узнайте о лучших клиниках, инновационных методах лечения и услугах.',
};