import { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  number: number;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export default function Card({ number, title, description, className }: Props) {
  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
      <div
        className={clsx(
          'relative bg-white p-6 border-t  transition-shadow duration-200',
          className
        )}
      >
        <p className="text-4xl absolute top-2 left-2 font-semibold text-gray-300">
          /0{number}
        </p>

      </div>
      <div
        className={clsx(
          'relative bg-white p-6 border-t  transition-shadow duration-200',
          className
        )}
      >

        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    </div>
  );
}