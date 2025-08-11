import ErrorMessage from '../ErrorMessage';
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { findAllPublicPostsCached } from '@/lib/post/queries/public';

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];

  if (posts.length <= 0)
    return (
      <ErrorMessage
        contentTitle='Ops!'
        content='Ainda não criamos nenhum post'
      />
    );

  const postLink = `/post/${post.slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: 1200,
          height: 720,
          alt: 'imagem',
          src: post.coverImageUrl,
          priority: true,
        }}
      />
      <PostSummary
        postLink={postLink}
        postHeading='h2'
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        title={post.title}
      />
    </section>
  );
}
