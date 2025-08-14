import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({ children, title }: Props) {

  return (
    <div className="bg-gray-50 relative flex grow flex-col pt-40 px-5">
      <div className="container mx-auto relative flex grow flex-col">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-green-600 md:text-5xl">
          {title}
        </h1>
        <div className="mt-6 text-gray-800 md:text-lg">{children}</div>
      </div>
    </div>
  );
}