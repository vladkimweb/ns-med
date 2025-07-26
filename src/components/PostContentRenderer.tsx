import Image from 'next/image';
import { PostContent } from '@/data/posts';

interface PostContentRendererProps {
  content: PostContent[];
}

export default function PostContentRenderer({ content }: PostContentRendererProps) {
  return (
    <div className="space-y-6">
      {content.map((item, index) => {
        switch (item.type) {
          case 'text':
            return (
              <p key={index} className="text-gray-700 leading-relaxed text-lg">
                {item.content}
              </p>
            );

          case 'image':
            return (
              <div key={index} className="my-8">
                <Image
                  src={item.content}
                  alt={item.alt || ''}
                  width={800}
                  height={500}
                  className="w-full rounded-xl shadow-lg object-cover"
                  quality={90}
                />
                {item.caption && (
                  <p className="text-center text-sm text-gray-500 mt-3 italic">
                    {item.caption}
                  </p>
                )}
              </div>
            );

          case 'youtube':
            return (
              <div key={index} className="my-8">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${item.content}`}
                    title="YouTube video"
                    className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {item.caption && (
                  <p className="text-center text-sm text-gray-500 mt-3 italic">
                    {item.caption}
                  </p>
                )}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}