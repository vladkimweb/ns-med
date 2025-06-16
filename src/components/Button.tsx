import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

type Props = {
  children: ReactNode;
  href: string;
  className?: string;
};

export default function Button({ children, href, className }: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        // Базовый стиль
        'inline-flex items-center justify-center gap-2',
        'px-6 py-3 rounded-2xl font-medium',
        'transition-all duration-300 ease-out',
        'transform hover:scale-105 active:scale-95',

        // Цвета и тени
        'bg-accent text-white',
        'hover:from-accent hover:to-secondary',
        'shadow-lg hover:shadow-secondary/30',

        // Размеры
        'w-fit max-w-full',
        'text-sm sm:text-base',

        className
      )}
    >
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
