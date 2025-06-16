import { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  number: number;
  title: ReactNode;
  className?: string;
};

export default function Card({ number, title, className }: Props) {
  return (
    <div
      className={clsx(
        'bg-white aspect-square shadow-md hover:shadow-sm transition-shadow duration-200',
        'relative flex flex-col justify-end border',
        className
      )}
    >
      {/* Номер в углу */}

      <p className="text-2xl absolute top-2 left-2 font-semibold text-primary">
        [{number}]
      </p>

      {/* Заголовок снизу слева */}
      <p className="p-3 text-primary text-3xl font-medium">
        {title}
      </p>
    </div>
  );
}