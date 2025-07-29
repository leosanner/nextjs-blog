import clsx from 'clsx';

export default function NotFoundPage() {
  return (
    <div
      className={clsx(
        'min-h-[320px] bg-slate-900 text-slate-100',
        'mb-16 p-8 rounded-xl',
        'flex items-center justify-center',
      )}
    >
      <div className='text-7xl/tight mb-4 font-extrabold'>
        <h1>404</h1>
        <p>Página não encontrada</p>
      </div>
    </div>
  );
}
