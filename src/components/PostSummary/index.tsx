import { formatDatetime } from '@/utils/format-datetime';
import { PostHeading } from '../PostHeading';
import { PostDate } from '../PostDate';

type PostSummaryProps = {
  postHeading: 'h1' | 'h2';
  postLink: string;
  title: string;
  createdAt: string;
  excerpt: string;
};

export function PostSummary({
  postHeading,
  postLink,
  title,
  createdAt,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className='flex flex-col gap-4 sm:justify-center'>
      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>

      <PostDate dateTime={createdAt} />

      <p>{excerpt}</p>
    </div>
  );
}
