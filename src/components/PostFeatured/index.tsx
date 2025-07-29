import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export function PostFeatured() {
  const slug = 'teste';
  const postLink = `/post/${slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: 1200,
          height: 720,
          alt: 'imagem',
          src: '/images/bryen_2.png',
          priority: true,
        }}
      />
      <div className='flex flex-col gap4 sm:justify-center'>
        <time className='text-slate-600 text-sm/ block' dateTime='2025-07-28'>
          28/07/2025
        </time>

        <PostHeading url={postLink}>Blas</PostHeading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          voluptate! Reiciendis nesciunt enim suscipit dignissimos consectetur
          veniam iure ratione quis! Aliquam similique nostrum numquam rem
          eligendi! Assumenda fuga numquam exercitationem!
        </p>
      </div>
    </section>
  );
}
