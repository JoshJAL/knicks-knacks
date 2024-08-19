import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='flex flex-col gap-5 items-center justify-center'>
      <p>Oops, looks like you found something that wasn&apos;t there</p>
      <p>We can fix that!</p>
      <Link
        href={'/shop'}
        className='w-fit hover:underline underline-offset-4 text-blue-600 hover:text-blue-800 transition-all duration-200 ease-in-out'
      >
        Get back to shopping!
      </Link>
    </section>
  );
}
