import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getPostById, formatDate } from "@/data/posts";
import PostContentRenderer from "@/components/PostContentRenderer";
// import ShareButtons from "@/components/ShareButtons";

// Генерация статических параметров
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

// Генерация метаданных - теперь с async params
export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string; locale: string }>
}) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    return {
      title: 'Пост не найден',
    };
  }

  return {
    title: `${post.title} | Блог`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.cover ? [
        {
          url: post.cover,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
    },
  };
}

// Основной компонент страницы - теперь async с правильными типами
export default async function BlogPostPage({
  params
}: {
  params: Promise<{ id: string; locale: string }>
}) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    return notFound();
  }

  return (
    <article>
      {/* Заголовок поста */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 py-16">
        <div className="container mx-auto px-4 flex flex-col justify-between text-center items-center">
          <nav className="text-blue-100 text-sm mb-6" aria-label="Breadcrumb">
            <ol className="flex space-x-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Главная
                </Link>
                <span className="mx-1">/</span>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Блог
                </Link>
                <span className="mx-1">/</span>
              </li>
              <li className="text-white font-medium">
                {post.title}
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 max-w-4xl leading-tight">
            {post.title}
          </h1>

          {/* Метаинформация */}
          <div className="flex flex-wrap items-center  text-blue-100 text-sm space-x-6">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <time dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </div>

            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Содержание поста */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Обложка поста */}
          {post.cover && (
            <div className="mb-8">
              <Image
                src={post.cover}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                priority
                quality={90}
              />
            </div>
          )}

          {/* Краткое описание */}
          <div className="mb-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              {post.excerpt}
            </p>
          </div>

          {/* Основное содержание */}
          <div className="prose prose-lg max-w-none">
            <PostContentRenderer content={post.content} />
          </div>

          {/* Навигация и действия */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              {/* Кнопка назад */}
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Вернуться к блогу
              </Link>

              {/* Кнопки социальных сетей */}
              {/* <ShareButtons title={post.title} /> */}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}