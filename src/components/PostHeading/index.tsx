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
  return (
    <Tag className='text-2xl/tight mb-4 font-extrabold sm:text-4xl'>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
