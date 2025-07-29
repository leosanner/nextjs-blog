import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

type PostCoverImageCoverProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PostCoverImage({
  imageProps,
  linkProps,
}: PostCoverImageCoverProps) {
  return (
    <Link
      className={clsx(
        'w-full',
        'h-full',
        'overflow-hidden',
        'rounded-xl',
        linkProps.className,
      )}
      {...linkProps}
    >
      <Image
        {...imageProps}
        className={clsx(
          'object-cover',
          'object-center',
          'w-full',
          'h-full',
          'group-hover:scale-105',
          'transition',
          imageProps.className,
        )}
        alt={imageProps.alt}
      />
    </Link>
  );
}
