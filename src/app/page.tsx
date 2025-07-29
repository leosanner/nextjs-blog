import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='object-cover object-center w-full h-full group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Título do post'
            priority
          />
        </Link>
        <div className='flex flex-col gap4 sm:justify-center'>
          <time className='text-slate-600 text-sm/ block' dateTime='2025-07-28'>
            28/07/2025
          </time>

          <PostHeading url='#'>Blas</PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            voluptate! Reiciendis nesciunt enim suscipit dignissimos consectetur
            veniam iure ratione quis! Aliquam similique nostrum numquam rem
            eligendi! Assumenda fuga numquam exercitationem!
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </Container>
  );
}
