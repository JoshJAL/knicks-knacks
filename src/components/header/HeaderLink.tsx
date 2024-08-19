import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  href: string;
}

export default function HeaderLink({ children, href }: Props) {
  return (
    <Link
      href={href}
      className='hover:scale-125 transition-all duration-200 ease-in-out flex flex-col gap-2 items-center justify-center'
    >
      {children}
    </Link>
  );
}
