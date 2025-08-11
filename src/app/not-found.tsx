import ErrorMessage from '@/components/ErrorMessage';

export default function NotFoundPage() {
  return (
    <>
      <ErrorMessage
        pageTitle='Página não encontrada'
        content='Página não encontrada'
        contentTitle='404'
      />
    </>
  );
}
