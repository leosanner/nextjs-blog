import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.map(post => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className='flex flex-col gap-4 group' key={post.id}>
            <PostCoverImage
              linkProps={{ href: postLink }}
              imageProps={{
                width: 1200,
                height: 720,
                alt: post.title,
                src: post.coverImageUrl,
              }}
            />

            <div className='flex flex-col gap-4 sm:justify-center'>
              <PostHeading as='h2' url={postLink}>
                Title for blog post
              </PostHeading>

              <time
                className='text-slate-600 block text-sm/tight'
                dateTime={post.createdAt}
              >
                {post.createdAt}
              </time>

              <p>{post.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
