import { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export default function Card({ title, description, icon, className }: Props) {
  return (
    <div
      className={clsx(
        'bg-white m-2 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200',
        className
      )}
    >
      {icon && <div className="mb-4 text-primary">{icon}</div>}
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
}