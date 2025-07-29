import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';

type PostHeadingProps = {
  children: ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export function PostHeading({
  children,
  url,
  as: Tag = 'h2',
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: 'text-2xl/tight sm:text-4xl font-extrabold',
    h2: 'text-2xl/tight font-bold',
  };

  const commonClasses = '';

  return (
    <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
      <Link className='hover:text-slate-700' href={url}>
        {children}
      </Link>
    </Tag>
  );
}
