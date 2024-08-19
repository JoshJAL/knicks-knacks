import './globals.css';

import CartFlyout from '@/components/CartFlyout';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Knicks and Knacks',
  description: 'Jewelry and accessories made by hand and with love!'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <CartFlyout />
        <main className='w-full max-w-7xl mx-auto p-5 md:pt-32 md:pb-0 pb-28'>{children}</main>
        <div className='flex-1' />
        <Footer />
      </body>
    </html>
  );
}
