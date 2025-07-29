import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';

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
      <PostSummary
        postLink={postLink}
        postHeading='h2'
        createdAt={'2025-04-05T00:24:38.616Z'}
        excerpt={
          'Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,'
        }
        title={
          'This will create the dillinger image and pull in the necessary dependencies.'
        }
      />
    </section>
  );
}
