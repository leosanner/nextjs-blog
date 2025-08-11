import clsx from 'clsx';

type ErrorMessageProps = {
  pageTitle?: string;
  contentTitle: string;
  content: React.ReactNode;
};

export default function ErrorMessage({
  pageTitle = '',
  contentTitle,
  content,
}: ErrorMessageProps) {
  return (
    <>
      {pageTitle && <title>{pageTitle}</title>}
      <div
        className={clsx(
          'min-h-[320px] bg-slate-900 text-slate-100',
          'mb-16 p-8 rounded-xl',
          'flex items-center justify-center',
        )}
      >
        <div className='text-7xl/tight mb-4 font-extrabold'>
          <h1>{contentTitle}</h1>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
}
